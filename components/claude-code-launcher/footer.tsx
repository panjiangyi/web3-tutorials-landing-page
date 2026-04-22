import { GitBranch } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10">
              <GitBranch className="h-4 w-4 text-amber-400" />
            </div>
            <span className="font-semibold text-foreground">Claude Code Launcher</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com/panjiangyi/claude-code-launcher"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://github.com/panjiangyi/claude-code-launcher/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Issues
            </a>
            <a
              href="https://github.com/panjiangyi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              @panjiangyi
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>本质上就是把"并行开发的环境管理"从手动操作变成了一个交互式菜单。</p>
        </div>
      </div>
    </footer>
  )
}
