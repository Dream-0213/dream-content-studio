import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://isdreamya.com"),
  title: { default: "技术内容营销与CSDN博主推广｜Dream内容推广工作室", template: "%s｜Dream内容推广工作室" },
  description: "Dream内容推广工作室提供技术内容营销、CSDN KOL投放、公众号博主推广、技术文章原创、多平台矩阵分发和开发者增长服务。覆盖AI、开发工具、云计算与企业软件品牌。",
  keywords: ["技术内容营销", "CSDN KOL投放", "CSDN博主推广", "技术博主合作", "公众号博主推广", "开发者营销", "AI产品推广", "技术文章原创", "技术文章代发", "博主矩阵推广"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "zh_CN", siteName: "Dream内容推广工作室", title: "技术内容营销与CSDN博主推广｜Dream内容推广工作室", description: "技术内容策划、CSDN KOL投放、公众号矩阵和开发者增长服务。", images:[{url:"/og.png",width:1200,height:630,alt:"Dream内容推广工作室"}] },
  twitter: {card:"summary_large_image",title:"技术内容营销与CSDN博主推广｜Dream内容推广工作室",description:"技术内容策划、CSDN KOL投放、公众号矩阵和开发者增长服务。",images:["/og.png"]},
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  const organization = {"@context":"https://schema.org","@type":"ProfessionalService","name":"Dream内容推广工作室","url":"https://isdreamya.com","logo":"https://isdreamya.com/dream-logo.png","image":"https://isdreamya.com/og.png","description":"技术内容营销、CSDN KOL投放、公众号博主推广与开发者增长服务","areaServed":"CN","serviceType":["技术内容营销","CSDN博主推广","公众号博主推广","多平台内容分发","开发者营销"]};
  return <html lang="zh-CN"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(organization)}} /></body></html>;
}
