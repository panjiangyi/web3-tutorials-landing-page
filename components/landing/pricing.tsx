"use client"

import { Button } from "@/components/ui/button"
import { Check, Clock, ArrowRight } from "lucide-react"

const features = [
  "7天完整课程内容",
  "每日实战编码任务",
  "专属学员社群",
  "1对1答疑支持",
  "1年内免费复训",
  "项目源码+学习资料",
]

export function Pricing() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              7天改变职业轨迹
              <span className="text-primary">投资回报率最高的转型方案</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              相比传统培训，时间和金钱成本都更低
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Comparison */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h3 className="text-lg font-semibold text-muted-foreground mb-6">传统培训班</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-muted-foreground">时间投入</span>
                  <span className="text-foreground">3-6个月</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-muted-foreground">费用</span>
                  <span className="text-foreground">¥15,000 - 30,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">学习效率</span>
                  <span className="text-foreground">碎片化学习</span>
                </div>
              </div>
            </div>

            {/* Our pricing */}
            <div className="relative p-6 rounded-xl bg-card border-2 border-primary">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                推荐方案
              </div>

              <h3 className="text-lg font-semibold text-primary mb-6">7天训练营</h3>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">¥59.9</span>
                  <span className="text-lg text-muted-foreground line-through">¥128</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-primary text-sm">
                  <Clock className="w-4 h-4" />
                  <span>限时优惠进行中</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href="https://flowus.cn/share/533b1da3-8433-4ca7-95f5-f673a69c7143" target="_blank" rel="noopener noreferrer">
                <Button className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  立即报名
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* ROI callout */}
          <div className="mt-12 p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
            <h4 className="text-lg font-semibold text-foreground mb-2">投资回报计算</h4>
            <p className="text-muted-foreground">
              Web3开发者平均薪资：¥40-80万/年 · 投资回报率：2000%+ · 时间成本：仅需7天
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
