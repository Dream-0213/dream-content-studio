import type { MetadataRoute } from "next";
import { cases, services } from "./data";
export default function sitemap(): MetadataRoute.Sitemap {
  const base="https://isdreamya.com"; const now=new Date();
  return [
    {url:base,lastModified:now,changeFrequency:"weekly",priority:1},
    {url:`${base}/about`,lastModified:now,changeFrequency:"monthly",priority:.7},
    {url:`${base}/contact`,lastModified:now,changeFrequency:"monthly",priority:.8},
    {url:`${base}/creators`,lastModified:now,changeFrequency:"monthly",priority:.85},
    ...services.map(x=>({url:`${base}/services/${x.slug}`,lastModified:now,changeFrequency:"monthly" as const,priority:.8})),
    ...cases.map(x=>({url:`${base}/cases/${x.slug}`,lastModified:now,changeFrequency:"monthly" as const,priority:.8})),
  ];
}
