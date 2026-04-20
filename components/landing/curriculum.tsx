"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Rocket, Code, Layers, Wrench, Layout, Zap, GraduationCap } from "lucide-react"

const curriculum = [
  {
    day: 1,
    title: "Web3 认知重启",
    description: "建立正确的Web3开发认知",
    details: "理解Web2 vs Web3的核心差异，认识以太坊、钱包、交易与智能合约等基础概念，搭建本地开发环境，建立正确的区块链开发思维模型",
    icon: Rocket,
    color: "text-primary",
  },
  {
    day: 2,
    title: "Solidity 详解",
    description: "掌握智能合约开发语言",
    details: "系统学习Solidity语法：数据类型、函数、修饰符、事件与错误处理，编写并部署你的第一个智能合约，掌握合约设计模式与安全最佳实践",
    icon: Code,
    color: "text-chart-3",
  },
  {
    day: 3,
    title: "标准协议与组合",
    description: "站在巨人的肩膀上",
    details: "深入理解ERC-20、ERC-721等核心标准协议，学习合约间的组合与交互模式，掌握OpenZeppelin等标准库的使用，构建可复用的合约组件",
    icon: Layers,
    color: "text-accent",
  },
  {
    day: 4,
    title: "Foundry 工程化与测试",
    description: "专业开发者的素养",
    details: "掌握Foundry工具链：Forge编译与测试、Cast链上交互、脚本编写与自动化部署，建立专业级的测试策略，学会调试、Gas优化与规范化开发流程",
    icon: Wrench,
    color: "text-primary",
  },
  {
    day: 5,
    title: "前端集成 (React + Wagmi)",
    description: "连接用户与链上世界",
    details: "使用React与Wagmi构建DApp界面，实现钱包连接、合约读取与写入操作，掌握链上数据的状态管理，构建流畅的用户交互体验",
    icon: Layout,
    color: "text-chart-3",
  },
  {
    day: 6,
    title: "事件监听与全栈优化",
    description: "提升用户体验的关键",
    details: "实现智能合约事件的前端实时监听，优化交易状态反馈与错误处理，掌握全栈DApp的性能优化策略，完善应用的交互细节与异常场景处理",
    icon: Zap,
    color: "text-accent",
  },
  {
    day: 7,
    title: "测试网部署与验证",
    description: "毕业典礼 — 从0到1的完整闭环",
    details: "将完整DApp项目部署到以太坊测试网，完成合约验证与源码开源，进行端到端功能验证，形成从合约开发到DApp部署的完整能力闭环",
    icon: GraduationCap,
    color: "text-primary",
  },
]

export function Curriculum() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              7天完整学习路径
              <span className="text-primary">每天都有实战成果</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              从认知重启到项目部署，循序渐进的学习路径确保你每一天都有实质性的进步
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {/* Days */}
            <div className="space-y-8">
              {curriculum.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative flex flex-col md:flex-row gap-4 md:gap-8 cursor-pointer",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                  onClick={() => setActiveDay(index)}
                >
                  {/* Day marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-primary">{item.day}</span>
                  </div>

                  {/* Content card */}
                  <div
                    className={cn(
                      "ml-16 md:ml-0 md:w-[calc(50%-2rem)] p-6 rounded-xl border transition-all",
                      activeDay === index
                        ? "bg-card border-primary shadow-lg shadow-primary/10"
                        : "bg-card/50 border-border hover:border-primary/50"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className={cn("p-2 rounded-lg bg-secondary", item.color)}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-primary">Day {item.day}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        {activeDay === index && (
                          <p className="text-sm text-foreground/80 mt-3 pt-3 border-t border-border">
                            {item.details}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
