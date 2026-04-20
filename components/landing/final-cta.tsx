"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, RefreshCw, Users } from "lucide-react"

const guarantees = [
  { icon: RefreshCw, text: "1年内免费复训" },
  { icon: Users, text: "专属学员群终身答疑" },
]

const futurePaths = ["Solidity", "Foundry", "React + Wagmi", "DApp 全栈"]

export function FinalCTA() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            现在开始你的
            <span className="text-primary">7天Web3转型之旅</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            以7天计划为起点，完成从入门到实践者的转变，为深入进阶方向打下坚实基础
          </p>

          {/* Future paths */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {futurePaths.map((path, index) => (
              <span
                key={index}
                className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
              >
                {path}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a href="https://flowus.cn/share/533b1da3-8433-4ca7-95f5-f673a69c7143" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                立即报名课程
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Secondary CTA */}
          <div className="mb-12">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <MessageCircle className="mr-2 w-4 h-4" />
              1对1转型规划咨询
            </Button>
          </div>

          {/* Guarantees */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon className="w-4 h-4 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
