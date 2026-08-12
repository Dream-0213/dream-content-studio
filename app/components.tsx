import type { AnchorHTMLAttributes } from "react";
import { cases, platforms, services } from "./data";

export function Link({href, ...props}: AnchorHTMLAttributes<HTMLAnchorElement> & {href: string}) {
  return <a href={href} {...props} />;
}

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Dream内容推广工作室首页">
        <img className="brand-logo" src="/dream-logo.png" alt="" />
        <span><b>DREAM</b><small>内容推广工作室</small></span>
      </Link>
      <nav aria-label="主导航">
        <Link href="/#services">服务</Link>
        <Link href="/#cases">案例</Link>
        <Link href="/creators">博主名单</Link>
        <Link href="/about">关于</Link>
        <Link href="/contact" className="nav-cta">商务合作</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <p className="eyebrow light">DREAM CONTENT STUDIO</p>
          <h2>让好产品，被开发者看见。</h2>
        </div>
        <Link href="/contact" className="button button-light">聊聊你的推广目标 <span>↗</span></Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Dream内容推广工作室</span>
        <span>技术内容营销 · 博主矩阵推广 · 开发者传播</span>
      </div>
    </footer>
  );
}

export function ServiceGrid() {
  return <div className="service-grid">{services.map((service) => (
    <Link href={`/services/${service.slug}`} className="service-card" key={service.slug}>
      <span className="service-number">{service.number}</span>
      <h3>{service.title}</h3>
      <p>{service.brief}</p>
      <span className="text-link">了解服务 <b>↗</b></span>
    </Link>
  ))}</div>;
}

export function CaseGrid() {
  return <div className="case-grid">{cases.map((item) => (
    <Link href={`/cases/${item.slug}`} className="case-card" key={item.slug}>
      <span className="pill">{item.tag}</span>
      <h3>{item.client}</h3>
      <div className="case-result"><strong>{item.result}</strong><span>{item.resultLabel}</span></div>
      <p>{item.summary}</p>
      <span className="case-arrow">↗</span>
    </Link>
  ))}</div>;
}

export function PlatformStrip() {
  return <div className="platform-strip" aria-label="覆盖平台">{platforms.map((name) => <span key={name}>{name}</span>)}</div>;
}

export function PageShell({children}: {children: React.ReactNode}) {
  return <><Header /><main>{children}</main><Footer /></>;
}
