import { Code2, Cpu, Shield, Zap } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "零配置",
    description: "source 一个文件就能用，不装依赖，不碰 git config",
  },
  {
    icon: Shield,
    title: "安全可靠",
    description: "不 force delete，不覆盖已有目录，合并检查 + 工作区干净检查双重保护",
  },
  {
    icon: Code2,
    title: "简单透明",
    description: "两个文件，总共 500 多行 Bash，你能读完、能改、能 trust",
  },
  {
    icon: Cpu,
    title: "为 AI 设计",
    description: "worktree 天然隔离上下文，每个任务一个独立的 Claude 会话，互不干扰",
  },
]

export function BenefitsSection() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            为什么<span className="text-amber-400">值得用</span>
          </h2>
          <p className="mt-4 text-muted-foreground">简单、安全、透明，专为现代开发工作流设计</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-amber-500/50 hover:bg-amber-500/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 transition-colors group-hover:bg-amber-500/20">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 rounded-xl border border-border bg-card p-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400">2</div>
            <div className="mt-2 text-sm text-muted-foreground">个文件</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400">500+</div>
            <div className="mt-2 text-sm text-muted-foreground">行代码</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400">0</div>
            <div className="mt-2 text-sm text-muted-foreground">依赖</div>
          </div>
        </div>
      </div>
    </section>
  )
}
