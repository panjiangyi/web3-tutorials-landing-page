"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Clock, Code, Rocket } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <picture>
        <source media="(min-width: 768px)" srcSet="/bg-desktop.jpg" />
        <img
          src="/bg-mobile.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>限时开放报名中</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            从Web2到Web3
            <span className="block text-primary">七天以太坊学习计划</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            帮助学习者在7天内建立从合约开发到DApp部署的完整能力闭环
            <br className="hidden md:block" />
            聚焦以太坊开发普及与实战，降低Web3学习门槛
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <a href="https://flowus.cn/share/533b1da3-8433-4ca7-95f5-f673a69c7143" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                立即报名
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Value propositions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Rocket, text: "认知化", subtext: "建立Web3核心概念体系" },
              { icon: Code, text: "开发化", subtext: "Solidity合约设计与编写" },
              { icon: Zap, text: "工程化", subtext: "Foundry测试与部署流程" },
              { icon: Clock, text: "实战化", subtext: "完成完整DApp开发闭环" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
              >
                <item.icon className="w-6 h-6 text-primary mb-2" />
                <span className="text-foreground font-medium text-sm">{item.text}</span>
                <span className="text-muted-foreground text-xs">{item.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
