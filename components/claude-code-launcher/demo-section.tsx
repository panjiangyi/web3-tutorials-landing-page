export function DemoSection() {
  return (
    <section className="border-b border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            典型<span className="text-amber-400">场景</span>
          </h2>
          <p className="mt-4 text-muted-foreground">全程没有 stash，没有冲突，没有"我刚才是哪个分支来着"</p>
        </div>

        <div className="mt-12">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 text-sm text-muted-foreground">payment-service</span>
            </div>

            <div className="space-y-6 p-6 font-mono text-sm">
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-amber-200">
                <p className="mb-2 text-xs uppercase tracking-wider text-amber-400">场景</p>
                <p>你正在 payment-service 的 dev 分支写报表功能</p>
                <p className="mt-1 text-muted-foreground">PM 突然说"线上登录超时了，紧急修一下"</p>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-emerald-400">步骤 1: 启动 ccl</p>
                <div className="rounded-lg bg-muted/50 p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">~/payment-service</span>
                    <span className="text-muted-foreground">$</span>
                    <span className="text-foreground">ccl</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-emerald-400">步骤 2: 选择新任务</p>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-amber-400">? 选择操作:</p>
                  <p className="mt-1 text-foreground">❯ 新任务</p>
                  <p className="mt-2 text-amber-400">? 任务名称:</p>
                  <p className="mt-1 text-foreground">fix login timeout</p>
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-emerald-400">步骤 3: 自动化流程</p>
                <div className="space-y-1 rounded-lg bg-muted/50 p-4">
                  <p>
                    <span className="text-emerald-400">✓</span> 创建 worktree: <span className="text-amber-400">fix-login-timeout</span>
                  </p>
                  <p>
                    <span className="text-emerald-400">✓</span> 创建分支: <span className="text-amber-400">fix-login-timeout</span>
                  </p>
                  <p>
                    <span className="text-emerald-400">✓</span> 切换目录
                  </p>
                  <p>
                    <span className="text-emerald-400">✓</span> 启动 Claude Code
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                <p className="mb-2 text-xs uppercase tracking-wider text-emerald-400">结果</p>
                <p className="text-emerald-200">修完 → 合到 dev → 回到主工作区 → 继续写报表</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
