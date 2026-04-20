import { Star, TrendingUp, Users, Award, Zap } from "lucide-react"

const stats = [
  { icon: Award, value: "92%", label: "课程完成率" },
  { icon: TrendingUp, value: "85%", label: "转型成功率" },
  { icon: Star, value: "4.8/5.0", label: "学员满意度" },
  { icon: Zap, value: "60%", label: "平均薪资涨幅" },
]

const testimonials = [
  {
    quote:
      "7天时间刚好，不会太长失去动力，也不会太短学不到东西。Day 4的Foundry让我彻底告别了Truffle的痛苦。",
    author: "张同学",
    role: "前端工程师",
  },
  {
    quote:
      "Day 5的Wagmi集成太香了，比直接用Web3.js简单太多。现在我已经在新公司负责DApp开发了。",
    author: "李同学",
    role: "全栈工程师",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              7天课程
              <span className="text-primary">真实转型案例</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              数据说明一切，学员反馈最真实
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="p-6 md:p-8 rounded-xl bg-card border border-border relative"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6">
                  &quot;{item.quote}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{item.author}</div>
                    <div className="text-sm text-muted-foreground">{item.role}</div>
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
