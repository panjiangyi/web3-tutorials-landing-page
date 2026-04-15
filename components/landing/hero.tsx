"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Clock, Code, Rocket } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>限时开放报名中</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            7天从Web2到Web3
            <span className="block text-primary">完整转型实战营</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            跟着一线Web3架构师，用现代化工具栈快速掌握以太坊开发
            <br className="hidden md:block" />
            从认知建立到项目部署的完整路径
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              立即报名训练营
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-border text-foreground hover:bg-secondary">
              查看课程详情
            </Button>
          </div>
          
          {/* Value propositions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Clock, text: "7天密集训练", subtext: "无需长期投入" },
              { icon: Code, text: "现代化技术栈", subtext: "Foundry + Wagmi" },
              { icon: Rocket, text: "实战导向", subtext: "每天编码任务" },
              { icon: Zap, text: "快速上手", subtext: "完整转型路径" },
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
