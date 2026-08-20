import type { AnchorHTMLAttributes } from "react";
import { cases, platforms, services } from "./data";

export function Link({href, children, ...props}: AnchorHTMLAttributes<HTMLAnchorElement> & {href: string}) {
  return <a href={href} {...props}>{children}</a>;
}

export function Header() {
  return (
    <><a className="skip-link" href="#main-content">跳到主要内容</a><header className="site-header">
      <Link href="/" className="brand" aria-label="Dream内容推广工作室首页">
        <img className="brand-logo" src="/dream-logo.png" alt="" width="1254" height="1254" />
        <span><b>DREAM</b><small>内容推广工作室</small></span>
      </Link>
      <nav aria-label="主导航">
        <Link href="/#services">服务</Link>
        <Link href="/#cases">案例</Link>
        <Link href="/creators">博主名单</Link>
        <Link href="/#join">加入我们</Link>
        <Link href="/about">关于</Link>
        <Link href="/contact" className="nav-cta">商务合作</Link>
      </nav>
      <details className="mobile-nav">
        <summary>菜单</summary>
        <div>
          <Link href="/#services">服务</Link>
          <Link href="/#cases">案例</Link>
          <Link href="/creators">博主名单</Link>
          <Link href="/#join">加入我们</Link>
          <Link href="/about">关于</Link>
          <Link href="/contact">商务合作</Link>
        </div>
      </details>
    </header></>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <h2>让好产品，被开发者看见。</h2>
        </div>
        <Link href="/contact" className="button button-light">聊聊你的推广目标</Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Dream内容推广工作室</span>
        <span>技术内容营销 / 博主矩阵推广 / 开发者传播</span>
      </div>
    </footer>
  );
}

export function ServiceGrid({excludeSlug}: {excludeSlug?: string} = {}) {
  const visibleServices = services.filter(service => service.slug !== excludeSlug);
  return <div className={`service-grid${excludeSlug ? " service-grid-related" : ""}`}>{visibleServices.map((service) => (
    <Link href={`/services/${service.slug}`} className="service-card" key={service.slug}>
      <span className="service-number">{service.number}</span>
      <h3>{service.title}</h3>
      <p>{service.brief}</p>
      <span className="text-link">了解服务</span>
    </Link>
  ))}</div>;
}

export function CaseGrid() {
  return <div className="case-grid">{cases.map((item) => {
    const isFeisuan = item.slug === "feisuan-javaai";
    const isHuawei = item.slug === "huawei-kunpeng-ascend";
    const isFeatured = isFeisuan || isHuawei;
    const hasInlineSecondary = Boolean(item.secondaryResult && !isFeatured);
    return <Link href={`/cases/${item.slug}`} className={`case-card${isFeatured ? " case-card-featured" : ""}`} key={item.slug}>
      <div className="case-card-main">
        <span className="pill">{item.tag}</span>
        <h3>{item.client}</h3>
        <div className={`case-result${hasInlineSecondary ? " case-result-split" : ""}`}>
          <div className="case-primary-result">
            <strong>{item.result}</strong>
            <span>{item.resultLabel}</span>
          </div>
          {hasInlineSecondary && <div className="case-secondary-result">
            <strong>{item.secondaryResult}</strong>
            <span>{item.secondaryResultLabel}</span>
          </div>}
        </div>
        <p>{item.summary}</p>
      </div>
      {isFeatured && <div className="case-card-highlight" aria-label={isFeisuan ? "项目总阅读量达200万以上" : "项目总阅读量达1000万以上，篇均阅读量达2万以上"}>
        <span>项目总阅读量</span>
        <strong>{isFeisuan ? "200W+" : "1000W+"}</strong>
        <small>{isFeisuan ? <>CSDN、知乎、公众号<br />多平台累计传播</> : <>篇均阅读量 2W+<br />国产算力生态内容传播</>}</small>
      </div>}
      <span className="case-arrow" aria-hidden="true" />
    </Link>;
  })}</div>;
}

export function PlatformStrip() {
  return <div className="platform-strip" aria-label="覆盖平台">{platforms.map((name) => <span key={name}>{name}</span>)}</div>;
}

export function PageShell({children}: {children: React.ReactNode}) {
  return <><Header /><main id="main-content">{children}</main><Footer /></>;
}
