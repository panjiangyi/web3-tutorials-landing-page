export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">W3</span>
              </div>
              <span className="font-semibold text-foreground">七天以太坊学习计划</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                课程大纲
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                学员评价
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                常见问题
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                联系我们
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              &copy; 2026 七天以太坊学习计划. All rights reserved.
            </p>
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-2"
            >
              <img
                src="/icon-gongan.png"
                alt="公安网"
                className="w-4 h-4"
              />
              鄂ICP备2026018586号
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
