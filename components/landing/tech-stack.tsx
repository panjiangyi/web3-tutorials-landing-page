import { Check, X } from "lucide-react"

const comparisons = [
  {
    traditional: "Truffle / Hardhat",
    modern: "Foundry",
    advantage: "更快的编译速度，更好的测试体验",
  },
  {
    traditional: "Web3.js",
    modern: "Wagmi",
    advantage: "类型安全，更好的React集成",
  },
  {
    traditional: "传统部署流程",
    modern: "现代化 CI/CD",
    advantage: "自动化测试，一键部署",
  },
]

export function TechStack() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              为什么选择
              <span className="text-primary">最新的Web3开发工具栈？</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              我们使用业界最先进的开发工具，让你从一开始就站在正确的起点
            </p>
          </div>

          {/* Comparison table */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-4 md:p-6 bg-secondary/50 border-b border-border">
              <div className="text-center">
                <span className="text-sm font-medium text-muted-foreground">传统方案</span>
              </div>
              <div className="text-center">
                <span className="text-sm font-medium text-primary">我们的方案</span>
              </div>
              <div className="text-center">
                <span className="text-sm font-medium text-muted-foreground">优势</span>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "grid grid-cols-3 gap-4 p-4 md:p-6 items-center",
                  index !== comparisons.length - 1 && "border-b border-border"
                )}
              >
                <div className="flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-destructive shrink-0" />
                  <span className="text-sm text-muted-foreground line-through">{item.traditional}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{item.modern}</span>
                </div>
                <div className="text-center">
                  <span className="text-sm text-muted-foreground">{item.advantage}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tech logos */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            {["Solidity", "Foundry", "React", "Wagmi", "TypeScript"].map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
