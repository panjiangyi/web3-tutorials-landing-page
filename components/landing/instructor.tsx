import { Building2, Wallet, GraduationCap, Wrench, Quote } from "lucide-react"

const credentials = [
  {
    icon: Building2,
    text: "5年Web3开发经验，参与过多个DeFi项目开发",
  },
  {
    icon: Wallet,
    text: "负责过千万TVL项目的技术架构",
  },
  {
    icon: GraduationCap,
    text: "帮助200+Web2开发者成功转型Web3",
  },
  {
    icon: Wrench,
    text: "深度实践Foundry、Wagmi等现代化工具",
  },
]

const teachingFeatures = [
  "用「老手带新手」的方式，避免AI播音腔",
  "直击痛点，不讲废话，每个概念都配合实际代码",
  "重点解释「为什么这么写」，而不是机械地教语法",
]

export function Instructor() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              跟着实战派
              <span className="text-primary">Web3架构师</span>
              学习
            </h2>
            <p className="text-muted-foreground text-lg">
              不是理论派，而是一线实战经验的传承
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Credentials */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">讲师资历</h3>
              <div className="space-y-4">
                {credentials.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground text-sm leading-relaxed flex-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching style */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">教学特色</h3>
              <div className="p-6 rounded-xl bg-card border border-border">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <div className="space-y-4">
                  {teachingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-foreground text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-muted-foreground text-sm italic">
                    &quot;我的目标不是让你记住语法，而是让你理解Web3开发的本质，
                    这样你才能在实际工作中举一反三。&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
