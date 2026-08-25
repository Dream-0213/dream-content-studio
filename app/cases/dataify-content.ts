export type DataifyContent = {
  name: string;
  reads: string;
  url: string;
};

export const dataifyContents: DataifyContent[] = [
  {name:"是Dream呀",reads:"10W",url:"https://blog.csdn.net/weixin_51390582/article/details/162095320?spm=1001.2014.3001.5501"},
  {name:"硬核技术工作室",reads:"10W",url:"https://blog.csdn.net/qq_46092061/article/details/162348663?spm=1001.2014.3001.5501"},
  {name:"陈橘又青",reads:"10W",url:"https://blog.csdn.net/m0_63947499/article/details/162390390"},
  {name:"二哈喇子!",reads:"10W",url:"https://blog.csdn.net/rej177/article/details/162397132?spm=1001.2014.3001.5501"},
  {name:"橙 子_",reads:"10W",url:"https://blog.csdn.net/zhangxia_/article/details/163479298"},
  {name:"鸽芷咕",reads:"5W",url:"https://blog.csdn.net/qq_57761637/article/details/162373109"},
  {name:"Undoom",reads:"4W",url:"https://blog.csdn.net/2301_80863610/article/details/163243697?spm=1001.2014.3001.5502"},
  {name:"hhzz",reads:"4W",url:"https://tigerhhzz.blog.csdn.net/article/details/162440870?spm=1011.2415.3001.5331"},
  {name:"一只牛博",reads:"3W",url:"https://blog.csdn.net/Mrxiao_bo/article/details/163209765"},
  {name:"Token_w",reads:"2W",url:"https://blog.csdn.net/weixin_61587867/article/details/163278933"},
  {name:"byte轻骑兵",reads:"2W",url:"https://byteqqb.blog.csdn.net/article/details/162398813?spm=1011.2415.3001.5331"},
];

export type DataifyKocContent = {
  name: string;
  title: string;
  date: string;
  links: { label: string; url: string }[];
};

export const dataifyKocContents: DataifyKocContent[] = [
  {name:"牛哥带你学代码",title:"做 AI 项目时，数据集质量往往比模型参数更先决定结果",date:"6月3日",links:[{label:"CSDN",url:"https://blog.csdn.net/weixin_60535956/article/details/161666016?sharetype=blogdetail&sharerId=161666016&sharerefer=PC&sharesource=weixin_60535956&spm=1011.2480.3001.8118"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2062198865199775746"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2045652330041849479"}]},
  {name:"云边有个稻草人",title:"做岗位信息汇总时，我发现数据采集工具比手动整理更可靠",date:"6月4日",links:[{label:"CSDN",url:"https://blog.csdn.net/lrq13965748542/article/details/161691014?spm=1001.2014.3001.5501"},{label:"掘金",url:"https://juejin.cn/post/7647117684700201012"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2045895889550587300"}]},
  {name:"lbb小魔仙",title:"一次项目复盘后，我开始重视稳定的网络连接服务",date:"6月5日",links:[{label:"CSDN",url:"https://blog.csdn.net/lbbxmx111/article/details/161727270?spm=1011.2415.3001.10575&sharefrom=mp_manage_link"},{label:"公众号",url:"https://mp.weixin.qq.com/s/oa5nNG2mxiGF1D0zyE8EAQ"},{label:"魔搭",url:"https://www.modelscope.cn/learn/434335"}]},
  {name:"张妍希",title:"我把一次资料整理任务，拆成了一个更轻松的工作流",date:"6月6日",links:[{label:"CSDN",url:"https://blog.csdn.net/Z1571009269/article/details/161742800"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2046562345263141404"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2063109973746008066"}]},
  {name:"鞍排AI",title:"当 SKU 对齐不再拖后腿，市场分析才真正开始",date:"6月10日",links:[{label:"CSDN",url:"https://blog.csdn.net/NanFangZhe/article/details/161861868"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2048055952964842324"},{label:"公众号",url:"https://mp.weixin.qq.com/s/h2NF1cGmYtMa2nMBksMduQ"}]},
  {name:"薛先生_099",title:"从一次延期说起：工具选择要服务于交付",date:"6月11日",links:[{label:"CSDN",url:"https://blog.csdn.net/m0_74540090/article/details/161896847?sharetype=blogdetail&sharerId=161896847&sharerefer=PC&sharesource=m0_74540090&spm=1011.2480.3001.8118"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2048434173640172222"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2064982208203079682"}]},
  {name:"七_月_",title:"短视频内容分析项目里，最难的不是模型，而是数据",date:"6月12日",links:[{label:"CSDN",url:"https://blog.csdn.net/2501_91062530/article/details/161931491?spm=1001.2014.3001.5502"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2048807528381813107"},{label:"公众号",url:"https://mp.weixin.qq.com/s/I7TN0trXZ7nbq09JKJKy_w?token=1336733336&lang=zh_CN"}]},
  {name:"进哥聊编程",title:"学术文献调研中的信息获取瓶颈",date:"6月16日",links:[{label:"CSDN",url:"https://blog.csdn.net/u014727709/article/details/162105530"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2050996800891380713"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2067543790800019457"}]},
  {name:"fo安方",title:"跨境选品中的价格数据难题",date:"6月17日",links:[{label:"CSDN",url:"https://blog.csdn.net/stqer/article/details/162097664"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2050938378254815705"},{label:"公众号",url:"https://mp.weixin.qq.com/s/YqaUayxACe95MHVHvBE8Ag"}]},
  {name:"芷栀夏",title:"别急着调 LoRA，先看看你的训练数据干不干净",date:"6月18日",links:[{label:"CSDN",url:"https://blog.csdn.net/LT15171009269/article/details/162106044"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2051004000183522028"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2067551465113853954"}]},
  {name:"Sunlightʊə",title:"从手动搜集到自动化管道：我的数据基建演进之路",date:"6月19日",links:[{label:"CSDN",url:"https://blog.csdn.net/weixin_53212110/article/details/162118306?spm=1011.2124.3001.6209"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2051253743908282874"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2067801042844852225?share=2067800698681237506&title"}]},
  {name:"星辰邢哥",title:"招聘网站岗位信息汇总的痛点",date:"6月22日",links:[{label:"CSDN",url:"https://blog.csdn.net/2301_76297596/article/details/162203327"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2052404675845137578"},{label:"51CTO",url:"https://blog.51cto.com/u_17700160/14708259"}]},
  {name:"承渊政道",title:"做跨境市场调研半年后，我的一些工具和方法分享",date:"6月23日",links:[{label:"CSDN",url:"https://lichengzheng.blog.csdn.net/article/details/161974450"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2052760381903353432"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2069309058513575938"}]},
  {name:"破局",title:"网络接入方案比想象中更重要",date:"6月24日",links:[{label:"CSDN",url:"https://blog.csdn.net/stubborn_stone_/article/details/162268594?spm=1001.2014.3001.5501"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2053096516450105070"},{label:"掘金",url:"https://juejin.cn/post/7654602408577581082"}]},
  {name:"阿森要自信",title:"做公开资料整理时，别忽略“失败记录”",date:"6月25日",links:[{label:"CSDN",url:"https://blog.csdn.net/a_hong_sen/article/details/162304885?spm=1001.2014.3001.5501"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2053482573641290375"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2070032653166518274"}]},
  {name:"禁止默",title:"数据集不干净，再复杂的用户画像也只是“看起来很懂用户”",date:"7月17日",links:[{label:"CSDN",url:"https://blog.csdn.net/2302_79376097/article/details/162967236?spm=1011.2415.3001.10575&sharefrom=mp_manage_link"},{label:"公众号",url:"https://mp.weixin.qq.com/s/tQzwpPS3ogcNMhP9Gm7IuQ"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2061452282592600351"}]},
  {name:"小博测试成长之路",title:"地图上很热闹的商圈，未必适合开下一家店",date:"7月18日",links:[{label:"CSDN",url:"https://blog.csdn.net/liboshi123/article/details/162962340?spm=1001.2014.3001.5501"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2061411766828062548"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2078493907933655042"}]},
  {name:"User_芊芊君子",title:"那张永远对不齐的岗位表，差点拖垮我的招聘分析",date:"7月19日",links:[{label:"CSDN",url:"https://blog.csdn.net/user340/article/details/163022289?spm=1001.2014.3001.5501"},{label:"魔搭",url:"https://www.modelscope.cn/learn/435037"},{label:"公众号",url:"https://mp.weixin.qq.com/s/JOsJFpSDwrsib1Z5ad_6vA"}]},
  {name:"是店小二呀",title:"做内容分类时，我发现问题往往不是模型太弱，而是样本太乱",date:"7月22日",links:[{label:"CSDN",url:"https://blog.csdn.net/2302_79177254/article/details/163111372?spm=1001.2014.3001.5501"},{label:"开源中国",url:"http://my.oschina.net/u/9503680/blog/19725800"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2063317221187794675"}]},
  {name:"种时光的人",title:"那次漏掉的优惠券，让整份竞品报告差点重写",date:"7月23日",links:[{label:"CSDN",url:"https://blog.csdn.net/to_mountain/article/details/163149031?spm=1011.2415.3001.5331"},{label:"开源中国",url:"https://my.oschina.net/u/9761588/blog/19726598"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2080463419939680258"}]},
  {name:"风指引着方向",title:"做价格监测项目后，我才发现“数据连续性”比想象中重要",date:"7月28日",links:[{label:"CSDN",url:"https://blog.csdn.net/fengoffor/article/details/163265269?spm=1001.2014.3001.5501"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2065385140621144518"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2081932158497386497"}]},
  {name:"魈十三",title:"做竞品监测时，最浪费时间的不是分析，而是反复补数据",date:"7月29日",links:[{label:"CSDN",url:"https://blog.csdn.net/John1214/article/details/163291871?spm=1001.2014.3001.5501"},{label:"InfoQ",url:"https://xie.infoq.cn/article/9b055953db8ec84c7549945b0"},{label:"火山引擎",url:"https://developer.volcengine.com/articles/7667745817361973294"}]},
  {name:"是枚小菜鸡儿吖",title:"一次舆情分析项目踩坑后，我开始把数据采集流程标准化",date:"7月30日",links:[{label:"CSDN",url:"https://blog.csdn.net/2401_84813926/article/details/163292593?spm=1001.2014.3001.5501"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2082632715432292353"},{label:"火山引擎",url:"https://developer.volcengine.com/articles/7667999425268367366"}]},
  {name:"Halycon.平安",title:"模型效果不好时，我现在会先看数据集",date:"8月8日",links:[{label:"CSDN",url:"https://dahao-cpp.blog.csdn.net/article/details/163646077?spm=1011.2415.3001.10575&sharefrom=mp_manage_link"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2086820625379422209"},{label:"InfoQ",url:"https://xie.infoq.cn/article/6ce14ae7461946b7846166c57"}]},
  {name:"I'mChloe",title:"知识库问答效果差，先别急着换模型",date:"8月10日",links:[{label:"CSDN",url:"https://blog.csdn.net/qq_51601665/article/details/163628362?spm=1001.2014.3001.5502"},{label:"公众号",url:"https://mp.weixin.qq.com/s/ktY2g4oBLuHWDaoXS6HKww"},{label:"火山引擎",url:"https://developer.volcengine.com/articles/7672228233189785651"}]},
  {name:"南方者",title:"招聘数据不是职位列表，结构化后才看得出行业变化",date:"8月15日",links:[{label:"CSDN",url:"https://blog.csdn.net/qq_43263647/article/details/163829128"},{label:"公众号",url:"https://mp.weixin.qq.com/s/92Fiyq8fjTU-z66heAmd4A"},{label:"知乎",url:"https://zhuanlan.zhihu.com/p/2072731411237304106"}]},
  {name:"南屹川",title:"评论采集只保存正文还不够，时间、评分和上下文都要留住",date:"8月16日",links:[{label:"CSDN",url:"https://blog.csdn.net/weixin_43272162/article/details/163814961?sharetype=blogdetail&sharerId=163814961&sharerefer=PC&sharesource=weixin_43272162&spm=1011.2480.3001.8118"},{label:"魔搭",url:"https://www.modelscope.cn/learn/435799"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2089174806597660674"}]},
  {name:"Richown",title:"别等脚本跑崩了，才想起代理这件事",date:"8月20日",links:[{label:"CSDN",url:"https://blog.csdn.net/qq_40635035/article/details/163995372?sharetype=blogdetail&sharerId=163995372&sharerefer=PC&sharesource=qq_40635035&spm=1011.2480.3001.8118"},{label:"魔搭",url:"https://www.modelscope.cn/learn/435922"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2091386815531642882"}]},
  {name:"程序员鸭梨",title:"代理池没做健康检查，海外监测任务迟早会出问题",date:"8月21日",links:[{label:"CSDN",url:"https://blog.csdn.net/alex_goden/article/details/163995355?sharetype=blogdetail&sharerId=163995355&sharerefer=PC&sharesource=alex_goden&spm=1011.2480.3001.8118"},{label:"火山引擎",url:"https://developer.volcengine.com/articles/7677035627023433734"},{label:"SegmentFault",url:"https://segmentfault.com/a/1190000048193275"}]},
  {name:"李慕杰Leo",title:"一份周报反复延期后，我把竞品数据采集改成了自动化任务",date:"8月23日",links:[{label:"CSDN",url:"https://blog.csdn.net/leopold_man/article/details/163995396"},{label:"魔搭",url:"https://modelscope.cn/learn/435923"},{label:"IFCLUB",url:"https://ifclub.com.cn/details/2091389391002071042"}]},
];
