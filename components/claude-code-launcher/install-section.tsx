"use client"

import { Button } from "@/components/ui/button"
import { Check, Copy, GitBranch } from "lucide-react"
import { useState } from "react"

const installCommands = [
  {
    label: "Zsh",
    command: "npm install -g cc-launch && echo 'eval \"$(command ccl init zsh)\"' >> ~/.zshrc && source ~/.zshrc",
  },
  {
    label: "Bash",
    command: "npm install -g cc-launch && echo 'eval \"$(command ccl init bash)\"' >> ~/.bashrc && source ~/.bashrc",
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="shrink-0 rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label="复制命令"
    >
      {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}

export function InstallSection() {
  return (
    <section id="install" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-amber-400">快速开始</span>
          </h2>
          <p className="mt-4 text-muted-foreground">三步搞定，立即开始使用 Claude Code Launcher</p>
        </div>

        <div className="mt-12 space-y-4">
          {installCommands.map((item) => (
            <div key={item.label} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="border-b border-border bg-muted/50 px-4 py-2">
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
              <div className="flex items-center gap-4 p-4">
                <code className="flex-1 overflow-x-auto font-mono text-sm text-amber-400">{item.command}</code>
                <CopyButton text={item.command.split("#")[0].trim()} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">然后呢？</h3>
          <p className="mb-4 text-muted-foreground">
            在任意 git 仓库的子目录中运行 <code className="rounded bg-muted px-2 py-0.5 font-mono text-amber-400">ccl</code> 即可开始使用！
          </p>
          <Button className="gap-2 bg-amber-500 text-black hover:bg-amber-400" asChild>
            <a href="https://github.com/panjiangyi/claude-code-launcher" target="_blank" rel="noopener noreferrer">
              <GitBranch className="h-4 w-4" />
              查看完整文档
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
