export type Creator = {
  name: string;
  followers: string;
  csdn?: string;
  juejin?: string;
  zhihu?: string;
  wechat?: string;
  xiaohongshu?: string;
};

export type WechatCreator = {
  name: string;
  followers: string;
  wechat: string;
  category: "AI/人工智能" | "IT技术";
};

export const creators: Creator[] = [
  {name:"是Dream呀",followers:"10W+",csdn:"https://blog.csdn.net/weixin_51390582?type=blog",juejin:"https://juejin.cn/user/765678294413181",zhihu:"https://www.zhihu.com/people/xu-yi-peng-21-72/posts",wechat:"https://mp.weixin.qq.com/s/BWHsOIV3Gm0BrUFS7JiwCQ"},
  {name:"一键难忘",followers:"12W+",csdn:"https://blog.csdn.net/weixin_52908342?type=blog"},
  {name:"中杯可乐多加冰",followers:"11W+",csdn:"https://blog.csdn.net/air__Heaven?type=blog",juejin:"https://juejin.cn/user/3435306702347432",zhihu:"https://www.zhihu.com/people/ling-sheng-87"},
  {name:"鸽芷咕",followers:"8W+",csdn:"https://gezhigu.blog.csdn.net",juejin:"https://juejin.cn/user/2447965011313308",zhihu:"https://www.zhihu.com/people/--16-21-29",wechat:"https://mp.weixin.qq.com/s/GXIKSGt0E63y07u3b_LHNg"},
  {name:"硬核技术工作室",followers:"20W+",csdn:"https://blog.csdn.net/qq_46092061",zhihu:"https://www.zhihu.com/people/dream-22-25-79",wechat:"https://mp.weixin.qq.com/s/U6lsoAs6AmzGcRSaMIDJfQ"},
  {name:"xcLeigh",followers:"15W+",csdn:"https://xcleigh.blog.csdn.net/",juejin:"https://juejin.cn/user/1775071503323875",zhihu:"https://www.zhihu.com/people/xcleigh",wechat:"https://mp.weixin.qq.com/s/Y5Iq0z2z9_wLmHfO0X6HFA"},
  {name:"陈橘又青",followers:"15W+",csdn:"https://blog.csdn.net/m0_63947499",juejin:"https://juejin.cn/user/4429248864466519",zhihu:"https://www.zhihu.com/people/yu-jie-xin-an",wechat:"https://mp.weixin.qq.com/s/mGtDEO_X0URygCea8Uo2Pw"},
  {name:"二哈喇子！",followers:"17W+",csdn:"https://blog.csdn.net/rej177",juejin:"https://juejin.cn/user/3408942504361773",zhihu:"https://www.zhihu.com/people/79-5-62-5"},
  {name:"T-OPEN",followers:"2.6W+",csdn:"https://blog.csdn.net/weter_drop",juejin:"https://juejin.cn/user/4354508837094439",zhihu:"https://www.zhihu.com/people/ratel-1",wechat:"https://mp.weixin.qq.com/s/WFhCXCVYOrca1du402_y9A"},
  {name:"一只牛博",followers:"2.8W+",csdn:"https://blog.csdn.net/Mrxiao_bo",juejin:"https://juejin.cn/user/1722263248317024",zhihu:"https://www.zhihu.com/people/zhong-xian-sen-51-54/posts",wechat:"https://mp.weixin.qq.com/s/ZFB23O8Bll-N60l8p87S_g"},
  {name:"Undoom",followers:"3W+",csdn:"https://blog.csdn.net/2301_80863610",juejin:"https://juejin.cn/user/4158824111150512",zhihu:"https://www.zhihu.com/people/84-53-44-85",wechat:"https://mp.weixin.qq.com/s/-3pTauaIG1XlTEFX5mXfog"},
  {name:"Token_w",followers:"2W+",csdn:"https://blog.csdn.net/weixin_61587867",juejin:"https://juejin.cn/user/2019147228132663",zhihu:"https://www.zhihu.com/people/gnlang-dang",wechat:"https://mp.weixin.qq.com/s/syxlTZJ90JwOq8TDDrkTfw"},
  {name:"狮子也疯狂",followers:"2W+",csdn:"https://blog.csdn.net/m0_58847451",juejin:"https://juejin.cn/user/4147818439648567",zhihu:"https://www.zhihu.com/people/going-56-54",wechat:"https://mp.weixin.qq.com/s/VAhfHrohtrpQwd9r_0jQUA"},
  {name:"牛哥带你学代码",followers:"1W+",csdn:"https://niuge945.blog.csdn.net/",juejin:"https://juejin.cn/user/27925731635866",zhihu:"https://www.zhihu.com/people/yeah-77-66",wechat:"https://mp.weixin.qq.com/s/2GkBjXri0QdQzapWz-4hjw"},
  {name:"倔强的石头_",followers:"3W+",csdn:"https://stubborn-stone.blog.csdn.net/",juejin:"https://juejin.cn/user/3168119757484368",zhihu:"https://www.zhihu.com/people/--1-56-90-77",wechat:"https://mp.weixin.qq.com/s/BlmiKEyI3pFqTICISoqEcg"},
  {name:"User_芊芊君子",followers:"1W+",csdn:"https://blog.csdn.net/user340?type=blog",juejin:"https://juejin.cn/user/1822317623662956",zhihu:"https://www.zhihu.com/people/user-1-76",wechat:"https://mp.weixin.qq.com/s/RI5LQ5_kqrtbfeN_mbg4sQ"},
  {name:"进哥聊编程",followers:"4W+",csdn:"https://blog.csdn.net/u014727709?type=blog",juejin:"https://juejin.cn/user/3880600036719580",zhihu:"https://zhuanlan.zhihu.com/p/1996990271817266077",wechat:"https://mp.weixin.qq.com/s/fNQNgwtsA4TU1w_pQyqexA"},
  {name:"云边有个稻草人",followers:"2W+",csdn:"https://blog.csdn.net/lrq13965748542",juejin:"https://juejin.cn/user/2675539432182089",zhihu:"https://www.zhihu.com/people/l-48-7-27",wechat:"https://mp.weixin.qq.com/s/-al-90WmiptySN06gnb7cA"},
  {name:"在人间负债^",followers:"2W+",csdn:"https://blog.csdn.net/qq_52354698",juejin:"https://juejin.cn/user/2986747188227261",zhihu:"https://www.zhihu.com/people/yi-ren-70-1"},
  {name:"半亩花海",followers:"3W+",csdn:"https://blog.csdn.net/ttrr27?type=blog",juejin:"https://juejin.cn/user/3609043910268030",zhihu:"https://www.zhihu.com/people/yun-gu-16-82/posts",wechat:"https://mp.weixin.qq.com/s/G3xHib6BTdUj3GmM1BurTA"},
  {name:"羑悻的小杀马特.",followers:"1W+",csdn:"https://blog.csdn.net/2401_82648291",juejin:"https://juejin.cn/user/3502359200168300",zhihu:"https://www.zhihu.com/people/--18-67-36",wechat:"https://mp.weixin.qq.com/s/m0aNFrjgoQC3avXic1ulrw"},
  {name:"Getgit",followers:"4W+",csdn:"https://blog.csdn.net/m0_67392010"},
  {name:"橙 子_",followers:"5W+",csdn:"https://blog.csdn.net/zhangxia_",juejin:"https://juejin.cn/user/3238512842258074",zhihu:"https://www.zhihu.com/people/38-41-62-30"},
  {name:"Halcyon.平安",followers:"1.1W+",csdn:"https://dahao-cpp.blog.csdn.net",juejin:"https://juejin.cn/user/4206084873781290",zhihu:"https://www.zhihu.com/people/han-han-48-77-39",wechat:"https://mp.weixin.qq.com/s/7K6TGzLUFJ_dgVmRLcDlBA"},
  {name:"南方者",followers:"4.5W+",csdn:"https://anpai.blog.csdn.net/",juejin:"https://juejin.cn/user/2840793779295133/posts",zhihu:"https://www.zhihu.com/people/kou-rou-24-44",wechat:"https://mp.weixin.qq.com/s/rIcwMS4xvntdiAEzMtC3Dw"},
  {name:"诸神缄默不语",followers:"5047",csdn:"https://blog.csdn.net/PolarisRisingWar",juejin:"https://juejin.cn/user/2036746568087502",zhihu:"https://www.zhihu.com/people/cang-ying-bu-yu-shou-ze",wechat:"https://mp.weixin.qq.com/s/rQCMMu0FJVrKKzcyU-V3iQ"},
  {name:"雾非雾の",followers:"8000+",csdn:"https://blog.csdn.net/Dovis5884",juejin:"https://juejin.cn/creator/home",zhihu:"https://www.zhihu.com/people/89-87-24-45"},
  {name:"YueXuan",followers:"1W+",csdn:"https://yuexuan.blog.csdn.net/"},
  {name:"WenJGo",followers:"1.8W+",csdn:"https://wenjgo.blog.csdn.net/",juejin:"https://juejin.cn/user/1273679976868059/posts",zhihu:"https://www.zhihu.com/people/chao-ji-chao-ji-hande-xiao-bai",wechat:"https://mp.weixin.qq.com/s/PWIXqrvE9eZIOl2AEJNwvQ"},
  {name:"fo安方",followers:"1W+",csdn:"https://blog.csdn.net/stqer"},
  {name:"byte轻骑兵",followers:"5W+",csdn:"https://blog.csdn.net/weixin_37800531?type=blog",juejin:"https://juejin.cn/user/3995005743010080",zhihu:"https://www.zhihu.com/people/38-72-36-20-51",wechat:"https://mp.weixin.qq.com/s/9KHJev5V2zfxn1pTPWyywA"},
  {name:"红目香薰",followers:"5W+",csdn:"https://blog.csdn.net/feng8403000"},
  {name:"chian-ocean",followers:"1.2W+",csdn:"https://chian-ocean.blog.csdn.net/",juejin:"https://juejin.cn/user/969096773255898",zhihu:"https://www.zhihu.com/people/a--41-59-14",wechat:"https://mp.weixin.qq.com/s/oYE5FrTHmqvCEWTPz7QVlw"},
  {name:"莹火熊",followers:"1W+",csdn:"https://llllyyyy.blog.csdn.net/"},
  {name:"欢喜躲在眉梢里-柚子",followers:"3W+",csdn:"https://blog.csdn.net/m0_52165864",juejin:"https://juejin.cn/user/282999761144987",zhihu:"https://www.zhihu.com/people/uuu-53-76",wechat:"https://mp.weixin.qq.com/s/_yeIfa_tlNihNZg6ZNlUaw"},
  {name:"小博测试成长之路",followers:"1W+",csdn:"https://blog.csdn.net/liboshi123",juejin:"https://juejin.cn/user/694547081075966",zhihu:"https://www.zhihu.com/people/xiaobotester",wechat:"https://mp.weixin.qq.com/s/o31b_vvPAAwgyOKfcbgPOw"},
  {name:"正在走向自律",followers:"4.1W+",csdn:"https://xiaoxiang113.blog.csdn.net/",juejin:"https://juejin.cn/user/2331392208561902/posts",zhihu:"https://www.zhihu.com/people/xiaoxiang113",wechat:"https://mp.weixin.qq.com/s/N9xnk5xq3c4X3hU8_ZNO9g"},
  {name:"hhzz",followers:"6W+",csdn:"https://tigerhhzz.blog.csdn.net/",juejin:"https://juejin.cn/user/4347936153016525",zhihu:"https://www.zhihu.com/people/hhzz-4-15",wechat:"https://mp.weixin.qq.com/s/qZzn2a0p--h56I63WBgGxg"},
  {name:"是店小二呀",followers:"1.3W+",csdn:"https://blog.csdn.net/2302_79177254?type=blog",juejin:"https://juejin.cn/user/4132386718619243",xiaohongshu:"https://www.xiaohongshu.com/user/profile/5fae78b5000000000101f6c8"},
  {name:"忆愿",followers:"3.5W+",csdn:"https://blog.csdn.net/qq_51601665?type=blog",juejin:"https://juejin.cn/user/2434784083053219",zhihu:"https://www.zhihu.com/people/ban-tang-shen-lin"},
  {name:"謓泽",followers:"8.5W+",csdn:"https://blog.csdn.net/weixin_52632755?type=blog",juejin:"https://juejin.cn/user/1838848306321064"},
  {name:"可涵",followers:"1W+",csdn:"https://blog.csdn.net/hanwangyyds",juejin:"https://juejin.cn/user/1933380820410074",zhihu:"https://www.zhihu.com/people/94-27-80-6",wechat:"https://mp.weixin.qq.com/s/fT5VJN15XlPfwqcy-Rz_fA"},
];

export const wechatCreators: WechatCreator[] = [
  {name:"DreamsHome",followers:"5000+",wechat:"https://mp.weixin.qq.com/s/5KrlRCy_ZQFFXrdzjLSQxA",category:"AI/人工智能"},
  {name:"风口IT猪的成长录",followers:"1W+",wechat:"https://mp.weixin.qq.com/s/ncRevdAFKvDmBmOOyh2nNw",category:"IT技术"},
  {name:"小博测试成长之路",followers:"6000+",wechat:"https://mp.weixin.qq.com/s/6d5o6iSnWSsQdKFCXoF9hA",category:"IT技术"},
  {name:"IT掌门人",followers:"5000+",wechat:"https://mp.weixin.qq.com/s/PG9TDz5RA-h6VAmLN1lFdA",category:"IT技术"},
  {name:"IT精英说",followers:"4000+",wechat:"https://mp.weixin.qq.com/s/rNpXBdIAh01SjDNOYMOvRA",category:"IT技术"},
  {name:"全栈若城",followers:"4000+",wechat:"https://mp.weixin.qq.com/s/y-MKlCEVlag4GBJlVbHSXQ",category:"IT技术"},
  {name:"花宝宝 Dev",followers:"4000+",wechat:"https://mp.weixin.qq.com/s/o_5exG7rAEFB21OXaaltcQ",category:"IT技术"},
  {name:"一只牛博",followers:"4000+",wechat:"https://mp.weixin.qq.com/s/w915D2EqP-e31WvDlDo_4g",category:"AI/人工智能"},
  {name:"小冷coding",followers:"4000+",wechat:"https://mp.weixin.qq.com/s/J1r_3zH4f4jXfukFtVUGYw",category:"IT技术"},
  {name:"xcLeigh",followers:"4000+",wechat:"https://mp.weixin.qq.com/s/pYHjQVkgoWLzxsLphdekyw",category:"AI/人工智能"},
  {name:"阿虎玩AI",followers:"3000+",wechat:"http://mp.weixin.qq.com/s?__biz=Mzg4NjU3NjI2MQ==&mid=2247485689&idx=1&sn=78d8efe33e2c8264cac5bb6b1f11eb08&chksm=ce51abfbd5cdf6a5c2f0dac08384bd5acb8c5b6d5ff16bbb79eff82250392d01e460133ac79b&scene=126&sessionid=1786091946&subscene=91&clicktime=1786091964&enterid=1786091964#rd",category:"AI/人工智能"},
  {name:"Lethehong",followers:"3000+",wechat:"https://mp.weixin.qq.com/s/TnpxD2Tsbi-x4bxKH-aHsA",category:"AI/人工智能"},
  {name:"采苓AI说",followers:"5000+",wechat:"https://mp.weixin.qq.com/s/7iH8astgYPJgYACsP0nuig",category:"AI/人工智能"},
  {name:"倔强的石头_",followers:"3000+",wechat:"https://mp.weixin.qq.com/s/nKwYGAFPSB1CVEaSckhmAg",category:"AI/人工智能"},
  {name:"嵌入式硬核研究所",followers:"3000+",wechat:"https://mp.weixin.qq.com/s/fsWM3P9LNr5bcoNiM-RHDg",category:"AI/人工智能"},
];
