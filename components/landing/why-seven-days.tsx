import { Eye, Code, Wrench, Layout, Rocket, Target, RefreshCw, Dumbbell, Zap } from "lucide-react"

const coreFramework = [
  {
    icon: Eye,
    title: "认知化",
    description: "理解Web3、以太坊、钱包、交易与智能合约等基础概念",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Code,
    title: "开发化",
    description: "系统学习Solidity语法、标准协议与合约设计",
    color: "bg-chart-3/10 text-chart-3",
  },
  {
    icon: Wrench,
    title: "工程化",
    description: "使用Foundry工具链进行测试、调试、脚本与部署",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Layout,
    title: "集成化",
    description: "结合React与Wagmi实现前端与合约的交互",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Rocket,
    title: "实战化",
    description: "完成测试网部署与验证，形成完整DApp开发闭环",
    color: "bg-chart-3/10 text-chart-3",
  },
]

const coreFeatures = [
  {
    icon: Target,
    title: "完整路径覆盖",
    description: "从认知到部署的全流程实践",
  },
  {
    icon: Dumbbell,
    title: "实操导向",
    description: "以真实开发任务为核心，减少理论空谈",
  },
  {
    icon: RefreshCw,
    title: "工程思维",
    description: "强调测试、验证与规范化开发流程",
  },
  {
    icon: Zap,
    title: "效率优先",
    description: "聚焦关键知识，避免无效摸索",
  },
]

export function WhySevenDays() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              五阶递进式学习
              <span className="text-primary">完整能力闭环</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              不是随意拼凑的课程，而是从认知到实战的科学递进体系
            </p>
          </div>

          {/* 5化 Framework */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-center">
              {coreFramework.map((item, index) => (
                <div key={index} className="flex-1 relative">
                  <div className="p-6 rounded-xl bg-card border border-border text-center h-full mx-1 hover:border-primary/50 transition-all">
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {index < coreFramework.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-1 w-3 h-0.5 bg-primary/40" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Core Features */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground">核心特色</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coreFeatures.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border text-center group hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
