import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react"

const painPoints = [
  {
    problem: "概念太抽象，不知道区块链到底怎么工作",
    solution: "Day 1认知重启：用Web2思维理解Web3架构",
  },
  {
    problem: "工具链复杂，不知道该学哪些技术",
    solution: "现代化技术栈：Foundry替代Truffle，Wagmi简化前端集成",
  },
  {
    problem: "缺乏实战项目，学了理论不会应用",
    solution: "7天渐进式实战：从智能合约到完整DApp部署",
  },
]

export function PainPoints() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Web2开发者转型Web3的
              <span className="text-primary">3大困境</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              我们深知你的痛点，并为每一个提供了针对性的解决方案
            </p>
          </div>

          {/* Pain points grid */}
          <div className="space-y-6">
            {painPoints.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 transition-all hover:border-primary/50"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Problem */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <AlertCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">困境 {index + 1}</span>
                        <p className="text-foreground font-medium mt-1">{item.problem}</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>

                  {/* Solution */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs text-primary uppercase tracking-wider">解决方案</span>
                        <p className="text-foreground font-medium mt-1">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
