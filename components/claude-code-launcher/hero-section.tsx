"use client"

import { Button } from "@/components/ui/button"
import { GitBranch, Sparkles, Terminal } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-background to-background" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400">
            <Sparkles className="h-4 w-4" />
            <span>为 AI 编码工作流设计</span>
          </div>

          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Git Worktree
            <br />
            <span className="text-amber-400">真的会用</span>
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
            Claude Code Launcher 把 git worktree 从"我知道但嫌麻烦"变成了"真的会用"。
            <br className="hidden md:block" />
            让每个 Claude/Codex 会话都在独立的 worktree 里运行，互不干扰。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 bg-amber-500 text-black hover:bg-amber-400" asChild>
              <a href="https://github.com/panjiangyi/claude-code-launcher" target="_blank" rel="noopener noreferrer">
                <GitBranch className="h-5 w-5" />
                GitHub 仓库
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-border" asChild>
              <a href="#install">
                <Terminal className="h-5 w-5" />
                快速开始
              </a>
            </Button>
          </div>

          <div className="mt-16 w-full max-w-2xl">
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-muted-foreground">terminal</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">~</span>
                  <span className="text-muted-foreground">$</span>
                  <span className="text-foreground">ccl</span>
                </div>
                <div className="mt-3 text-muted-foreground">
                  <p className="text-amber-400">? 选择操作:</p>
                  <p className="ml-2 text-foreground">❯ 新任务</p>
                  <p className="ml-2">  继续已有任务</p>
                  <p className="ml-2">  清理已合并的 worktree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
