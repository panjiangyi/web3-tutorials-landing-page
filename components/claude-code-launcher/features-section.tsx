import { ArrowRight, List, Plus, Trash2 } from "lucide-react"

const features = [
  {
    icon: Plus,
    step: "1",
    title: "新任务",
    description: "创建 worktree + username/task-slug 分支，运行 setup.sh 后启动 claude/codex",
    color: "amber",
  },
  {
    icon: List,
    step: "2",
    title: "继续已有任务",
    description: "列出仓库所有 worktree，选一个直接切过去，自动恢复工作环境",
    color: "emerald",
  },
  {
    icon: Trash2,
    step: "3",
    title: "清理",
    description: "一键删除已合并到主分支的 clean worktree，安全检查不丢代码",
    color: "sky",
  },
]

export function FeaturesSection() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Claude Code Launcher <span className="text-amber-400">怎么解决</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            在仓库任意子目录敲一个命令 <code className="rounded bg-muted px-2 py-1 font-mono text-amber-400">ccl</code>，然后：
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={feature.title} className="relative">
              <div className="rounded-xl border border-border bg-card p-6">
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                    feature.color === "amber"
                      ? "bg-amber-500/20 text-amber-400"
                      : feature.color === "emerald"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-sky-500/20 text-sky-400"
                  }`}
                >
                  {feature.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>

              {index < features.length - 1 && (
                <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                  <ArrowRight className="h-6 w-6 text-muted-foreground/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
