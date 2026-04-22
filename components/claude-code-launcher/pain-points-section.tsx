import { AlertTriangle, FolderSync, Layers } from "lucide-react"

const painPoints = [
  {
    icon: FolderSync,
    title: "Stash 切换一团乱",
    description: "正在写 feature，突然要修一个紧急 bug，stash 切换来切换去，改完又 stash pop 冲突。",
  },
  {
    icon: Layers,
    title: "多任务切换麻烦",
    description: "同时推进 3 个任务，每个都要开一个终端 tab、手动 cd 到对应目录，容易搞混。",
  },
  {
    icon: AlertTriangle,
    title: "AI 工具启动繁琐",
    description: "用 Claude 或 Codex 辅助编码，但每次都要先找目录、再进目录、再启动工具。",
  },
]

export function PainPointsSection() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            你有没有这些<span className="text-red-400">痛点</span>？
          </h2>
          <p className="mt-4 text-muted-foreground">传统的 git 工作流在多任务场景下显得力不从心</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-red-500/50 hover:bg-red-500/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                <point.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{point.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
