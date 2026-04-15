import { Target, RefreshCw, Dumbbell, Rocket } from "lucide-react"

const advantages = [
  {
    icon: Target,
    title: "专注度最佳",
    description: "7天内保持高度专注，避免拖延症",
  },
  {
    icon: RefreshCw,
    title: "知识连贯性",
    description: "每天内容环环相扣，形成完整知识体系",
  },
  {
    icon: Dumbbell,
    title: "习惯养成",
    description: "7天足以建立Web3开发的思维习惯",
  },
  {
    icon: Rocket,
    title: "快速见效",
    description: "第7天就能部署自己的DApp项目",
  },
]

const phases = [
  { days: "前3天", content: "概念建立 + 核心技能", color: "bg-primary" },
  { days: "中2天", content: "工程化 + 前端集成", color: "bg-chart-3" },
  { days: "后2天", content: "优化 + 部署实战", color: "bg-accent" },
]

export function WhySevenDays() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              为什么是7天？
              <span className="text-primary">科学的学习节奏设计</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              不是随意设定的数字，而是经过验证的最佳学习周期
            </p>
          </div>

          {/* Advantages grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {advantages.map((item, index) => (
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

          {/* Learning phases */}
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              学习节奏规划
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
              {phases.map((phase, index) => (
                <div key={index} className="flex-1 relative">
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full ${phase.color}`} />
                      <span className="font-medium text-foreground">{phase.days}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{phase.content}</p>
                  </div>
                  {index < phases.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
