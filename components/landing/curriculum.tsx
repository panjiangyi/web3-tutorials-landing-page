"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Rocket, Code, Layers, Wrench, Layout, Zap, GraduationCap } from "lucide-react"

const curriculum = [
  {
    day: 1,
    title: "Web3 认知重启",
    description: "建立正确的Web3开发认知",
    details: "建立Web2 vs Web3的直观对比，搭建开发环境",
    icon: Rocket,
    color: "text-primary",
  },
  {
    day: 2,
    title: "Solidity 详解",
    description: "掌握智能合约开发语言",
    details: "掌握智能合约语言，编写第一个合约",
    icon: Code,
    color: "text-chart-3",
  },
  {
    day: 3,
    title: "标准协议与组合",
    description: "站在巨人的肩膀上",
    details: "理解ERC标准，学会站在巨人肩膀上",
    icon: Layers,
    color: "text-accent",
  },
  {
    day: 4,
    title: "Foundry 工程化与测试",
    description: "专业开发者的素养",
    details: "现代化开发工具，专业测试和部署",
    icon: Wrench,
    color: "text-primary",
  },
  {
    day: 5,
    title: "前端集成 (React + Wagmi)",
    description: "连接用户",
    details: "构建DApp界面，实现钱包连接",
    icon: Layout,
    color: "text-chart-3",
  },
  {
    day: 6,
    title: "事件监听与全栈优化",
    description: "提升用户体验",
    details: "事件监听、状态管理、用户体验优化",
    icon: Zap,
    color: "text-accent",
  },
  {
    day: 7,
    title: "测试网部署与验证",
    description: "毕业典礼",
    details: "项目上线，完成从0到1的完整转型",
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
