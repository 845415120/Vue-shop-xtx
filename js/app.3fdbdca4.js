(function(){"use strict";var a={6346:function(a,t,e){var n={};e.r(n);var s=e(9242),o=e(3396);function c(a,t){const e=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(e)}var i=e(89);const l={},d=(0,i.Z)(l,[["render",c]]);var r=d,u=e(2483);function p(a,t,e,n,s,c){const i=(0,o.up)("AppTopnav"),l=(0,o.up)("AppHeader"),d=(0,o.up)("Home"),r=(0,o.up)("AppFooter");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i),(0,o.Wm)(l),(0,o.Wm)(d),(0,o.Wm)(r)],64)}const v={class:"app-topnav"},g=(0,o.uE)('<div class="container" data-v-1543ee35><ul data-v-1543ee35><li data-v-1543ee35><a href="javascript:;" data-v-1543ee35><i class="iconfont icon-user" data-v-1543ee35></i>周杰伦</a></li><li data-v-1543ee35><a href="javascript:;" data-v-1543ee35>退出登录</a></li><li data-v-1543ee35><a href="javascript:;" data-v-1543ee35>请先登录</a></li><li data-v-1543ee35><a href="javascript:;" data-v-1543ee35>免费注册</a></li><li data-v-1543ee35><a href="javascript:;" data-v-1543ee35>我的订单</a></li><li data-v-1543ee35><a href="javascript:;" data-v-1543ee35>会员中心</a></li><li data-v-1543ee35><a href="javascript:;" data-v-1543ee35>帮助中心</a></li><li data-v-1543ee35><a href="javascript:;" data-v-1543ee35>关于我们</a></li><li data-v-1543ee35><a href="javascript:;" data-v-1543ee35><i class="iconfont icon-phone" data-v-1543ee35></i>手机版</a></li></ul></div>',1),m=[g];function _(a,t,e,n,s,c){return(0,o.wg)(),(0,o.iD)("nav",v,m)}var f={name:"AppTopnav"};const h=(0,i.Z)(f,[["render",_],["__scopeId","data-v-1543ee35"]]);var w=h,y=e(7139);const b={class:"app-header-nav"},k={class:"home"},x={class:"layer"},H=["src"];function D(a,t,e,n,s,c){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("ul",b,[(0,o._)("li",k,[(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("首页")])),_:1})]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.goods,(t=>((0,o.wg)(),(0,o.iD)("li",{key:t.id},[(0,o.Wm)(i,{to:`/category/${t.id}`,onClick:e=>a.hide(t)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,y.zw)(t.name),1)])),_:2},1032,["to","onClick"]),(0,o._)("div",x,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.children,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.id},[(0,o.Wm)(i,{to:`/category/sub/${e.id}`,onClick:e=>a.hide(t)},{default:(0,o.w5)((()=>[(0,o._)("img",{src:e.picture,alt:""},null,8,H),(0,o._)("p",null,(0,y.zw)(e.name),1)])),_:2},1032,["to","onClick"])])))),128))])])])))),128))])}var W=e(4161),j=e(4870),Z={setup(){const a=(0,j.iH)([]);return W.Z.get("https://pcapi-xiaotuxian-front.itheima.net/home/goods").then((t=>{a.value=t.data.result})),{goods:a}}};const C=(0,i.Z)(Z,[["render",D],["__scopeId","data-v-d7b01516"]]);var I=C;const z={class:"container"},P={class:"left"};function U(a,t,e,n,c,i){const l=(0,o.up)("RouterLink"),d=(0,o.up)("AppHeaderNav");return(0,o.wg)(),(0,o.iD)("div",{class:(0,y.C_)(["app-header-sticky",{show:n.y>=78}])},[(0,o.wy)((0,o._)("div",z,[(0,o.Wm)(l,{class:"logo",to:"/"}),(0,o.Wm)(d),(0,o._)("div",P,[(0,o.Wm)(l,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("品牌")])),_:1}),(0,o.Wm)(l,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("专题")])),_:1})])],512),[[s.F8,n.y>=78]])],2)}var A=e(6685),Y={name:"AppHeaderSticky",components:{AppHeaderNav:I},setup(){const{y:a}=(0,A.b)();return{y:a}}};const G=(0,i.Z)(Y,[["render",U]]);var S=G;const R={class:"app-header"},L={class:"container"},N={class:"logo"},T=(0,o.uE)('<div class="search" data-v-98299e9e><i class="iconfont icon-search" data-v-98299e9e></i><input type="text" placeholder="搜一搜" data-v-98299e9e></div><div class="cart" data-v-98299e9e><a class="curr" href="#" data-v-98299e9e><i class="iconfont icon-cart" data-v-98299e9e></i><em data-v-98299e9e>2</em></a></div>',2);var K={__name:"app-header",setup(a){return(a,t)=>{const e=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("header",R,[(0,o._)("div",L,[(0,o._)("h1",N,[(0,o.Wm)(e,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("小兔鲜")])),_:1})]),(0,o.Wm)(I),(0,o.Wm)(S),T])])}}};const O=(0,i.Z)(K,[["__scopeId","data-v-98299e9e"]]);var X=O;const B={class:"app-footer"},$=(0,o.uE)('<div class="contact" data-v-38ceda78><div class="container" data-v-38ceda78><dl data-v-38ceda78><dt data-v-38ceda78>客户服务</dt><dd data-v-38ceda78><i class="iconfont icon-kefu" data-v-38ceda78></i> 在线客服</dd><dd data-v-38ceda78><i class="iconfont icon-question" data-v-38ceda78></i> 问题反馈</dd></dl><dl data-v-38ceda78><dt data-v-38ceda78>关注我们</dt><dd data-v-38ceda78><i class="iconfont icon-weixin" data-v-38ceda78></i> 公众号</dd><dd data-v-38ceda78><i class="iconfont icon-weibo" data-v-38ceda78></i> 微博</dd></dl><dl data-v-38ceda78><dt data-v-38ceda78>下载APP</dt><dd class="qrcode" data-v-38ceda78><img src="" data-v-38ceda78></dd><dd class="download" data-v-38ceda78><span data-v-38ceda78>扫描二维码</span><span data-v-38ceda78>立马下载APP</span><a href="javascript:;" data-v-38ceda78>下载页面</a></dd></dl><dl data-v-38ceda78><dt data-v-38ceda78>服务热线</dt><dd class="hotline" data-v-38ceda78>400-0000-000 <small data-v-38ceda78>周一至周日 8:00-18:00</small></dd></dl></div></div><div class="extra" data-v-38ceda78><div class="container" data-v-38ceda78><div class="slogan" data-v-38ceda78><a href="javascript:;" data-v-38ceda78><i class="iconfont icon-footer01" data-v-38ceda78></i><span data-v-38ceda78>价格亲民</span></a><a href="javascript:;" data-v-38ceda78><i class="iconfont icon-footer02" data-v-38ceda78></i><span data-v-38ceda78>物流快捷</span></a><a href="javascript:;" data-v-38ceda78><i class="iconfont icon-footer03" data-v-38ceda78></i><span data-v-38ceda78>品质新鲜</span></a></div><div class="copyright" data-v-38ceda78><p data-v-38ceda78><a href="javascript:;" data-v-38ceda78>关于我们</a><a href="javascript:;" data-v-38ceda78>帮助中心</a><a href="javascript:;" data-v-38ceda78>售后服务</a><a href="javascript:;" data-v-38ceda78>配送与验收</a><a href="javascript:;" data-v-38ceda78>商务合作</a><a href="javascript:;" data-v-38ceda78>搜索推荐</a><a href="javascript:;" data-v-38ceda78>友情链接</a></p><p data-v-38ceda78>CopyRight © 小兔鲜儿</p></div></div></div>',2),F=[$];function q(a,t){return(0,o.wg)(),(0,o.iD)("footer",B,F)}const E={},M=(0,i.Z)(E,[["render",q],["__scopeId","data-v-38ceda78"]]);var J=M;const Q={class:"page-home"},V={class:"home-entry"},aa={class:"container"};function ta(a,t,e,n,s,c){const i=(0,o.up)("HomeCategory"),l=(0,o.up)("HomeBanner"),d=(0,o.up)("HomeNews"),r=(0,o.up)("HomeHot"),u=(0,o.up)("HomeBrand"),p=(0,o.up)("HomeProduct"),v=(0,o.up)("HomeSpecial");return(0,o.wg)(),(0,o.iD)("div",Q,[(0,o._)("div",V,[(0,o._)("div",aa,[(0,o.Wm)(i),(0,o.Wm)(l),(0,o.Wm)(d),(0,o.Wm)(r),(0,o.Wm)(u),(0,o.Wm)(p),(0,o.Wm)(v)])])])}const ea=a=>((0,o.dD)("data-v-075353e8"),a=a(),(0,o.Cn)(),a),na={class:"home-category"},sa={class:"menu"},oa={class:"layer"},ca=ea((()=>(0,o._)("h4",null,[(0,o.Uk)("分类推荐 "),(0,o._)("small",null,"根据您的购买或浏览记录推荐")],-1))),ia=["src"];function la(a,t,e,n,s,c){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",na,[(0,o._)("ul",sa,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.datalist,(a=>((0,o.wg)(),(0,o.iD)("li",{key:a.id},[(0,o.Wm)(i,{to:`/category/${a.id}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,y.zw)(a.name),1)])),_:2},1032,["to"]),a.children?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:0},(0,o.Ko)(a.children,(a=>((0,o.wg)(),(0,o.j4)(i,{key:a.id,to:`/category/sub/${a.id}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,y.zw)(a.name[1]),1)])),_:2},1032,["to"])))),128)):(0,o.kq)("",!0)])))),128))])]),(0,o._)("div",oa,[ca,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.datalist,(a=>((0,o.wg)(),(0,o.iD)("li",{key:a.id},[(0,o.Uk)((0,y.zw)(a.name)+" ",1),(0,o._)("img",{src:a.picture,alt:""},null,8,ia)])))),128))])])],64)}var da={data(){return{datalist:[]}},mounted(){W.Z.get("https://pcapi-xiaotuxian-front.itheima.net/home/category").then((a=>{console.log(a.data.result),this.datalist=a.data.result}))}};const ra=(0,i.Z)(da,[["render",la],["__scopeId","data-v-075353e8"]]);var ua=ra;const pa=a=>((0,o.dD)("data-v-c8aaf2ba"),a=a(),(0,o.Cn)(),a),va={class:"home-banner"},ga={class:"xtx-carousel"},ma={class:"carousel-body"},_a={class:"carousel-item fade"},fa=pa((()=>(0,o._)("img",{src:"http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg",alt:""},null,-1))),ha=pa((()=>(0,o._)("a",{href:"javascript:;",class:"carousel-btn prev"},[(0,o._)("i",{class:"iconfont icon-angle-left"})],-1))),wa=pa((()=>(0,o._)("a",{href:"javascript:;",class:"carousel-btn next"},[(0,o._)("i",{class:"iconfont icon-angle-right"})],-1))),ya={class:"carousel-indicator"};function ba(a,t,e,n,s,c){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",va,[(0,o._)("div",ga,[(0,o._)("ul",ma,[(0,o._)("li",_a,[(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>[fa])),_:1})])]),ha,wa,(0,o._)("div",ya,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(5,(a=>(0,o._)("span",{key:a}))),64))])])])}var ka={};const xa=(0,i.Z)(ka,[["render",ba],["__scopeId","data-v-c8aaf2ba"]]);var Ha=xa;const Da={class:"home-new"},Wa={class:"goods-list"},ja=["src"],Za={class:"name ellipsis"},Ca={class:"price"};function Ia(a,t,e,n,s,c){const i=(0,o.up)("XtxMore"),l=(0,o.up)("RouterLink"),d=(0,o.up)("HomePanel");return(0,o.wg)(),(0,o.iD)("div",Da,[(0,o.Wm)(d,{title:"新鲜好物","sub-title":"新鲜出炉 品质靠谱"},{right:(0,o.w5)((()=>[(0,o.Wm)(i,{path:"/"})])),default:(0,o.w5)((()=>[(0,o._)("ul",Wa,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.goods,(a=>((0,o.wg)(),(0,o.iD)("li",{key:a.id},[(0,o.Wm)(l,{to:`/product/${a.id}`},{default:(0,o.w5)((()=>[(0,o._)("img",{src:a.picture,alt:""},null,8,ja),(0,o._)("p",Za,(0,y.zw)(a.name),1),(0,o._)("p",Ca,"¥"+(0,y.zw)(a.price),1)])),_:2},1032,["to"])])))),128))])])),_:1})])}const za={class:"home-panel"},Pa={class:"container"},Ua={class:"head"};function Aa(a,t,e,n,s,c){return(0,o.wg)(),(0,o.iD)("div",za,[(0,o._)("div",Pa,[(0,o._)("div",Ua,[(0,o._)("h3",null,[(0,o.Uk)((0,y.zw)(e.title),1),(0,o._)("small",null,(0,y.zw)(e.subTitle),1)]),(0,o.WI)(a.$slots,"right",{},void 0,!0)]),(0,o.WI)(a.$slots,"default",{},void 0,!0)])])}var Ya={name:"HomePanel",props:{title:{type:String,default:""},subTitle:{type:String,default:""}}};const Ga=(0,i.Z)(Ya,[["render",Aa],["__scopeId","data-v-1720e422"]]);var Sa=Ga,Ra={components:{HomePanel:Sa},setup(){const a=(0,j.iH)([]);return W.Z.get("https://pcapi-xiaotuxian-front.itheima.net/home/new").then((t=>{console.log(t.data),a.value=t.data.result})),{goods:a}}};const La=(0,i.Z)(Ra,[["render",Ia],["__scopeId","data-v-7af3d1c4"]]);var Na=La;const Ta={ref:"pannel",class:"goods-list"},Ka=["src"],Oa={class:"name"},Xa={class:"desc"};function Ba(a,t,e,n,s,c){const i=(0,o.up)("RouterLink"),l=(0,o.up)("HomePanel");return(0,o.wg)(),(0,o.j4)(l,{title:"人气推荐","sub-title":"人气爆款 不容错过"},{default:(0,o.w5)((()=>[(0,o._)("ul",Ta,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.goods,(a=>((0,o.wg)(),(0,o.iD)("li",{key:a.id},[(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:a.picture,alt:""},null,8,Ka),(0,o._)("p",Oa,(0,y.zw)(a.title),1),(0,o._)("p",Xa,(0,y.zw)(a.alt),1)])),_:2},1024)])))),128))],512)])),_:1})}var $a={components:{HomePanel:Sa},setup(){const a=(0,j.iH)([]);return W.Z.get("https://pcapi-xiaotuxian-front.itheima.net/home/hot").then((t=>{a.value=t.data.result})),{goods:a}}};const Fa=(0,i.Z)($a,[["render",Ba],["__scopeId","data-v-27afb446"]]);var qa=Fa;const Ea={class:"box"},Ma=["src"];function Ja(a,t,e,n,s,c){const i=(0,o.up)("RouterLink"),l=(0,o.up)("HomePanel");return(0,o.wg)(),(0,o.j4)(l,{title:"热门品牌","sub-title":"国际经典 品质保证"},{right:(0,o.w5)((()=>[(0,o._)("a",{onClick:t[0]||(t[0]=a=>n.toggle(-1)),class:(0,y.C_)([{disabled:0===n.index},"iconfont icon-angle-left prev"]),href:"javascript:;"},null,2),(0,o._)("a",{onClick:t[1]||(t[1]=a=>n.toggle(1)),class:(0,y.C_)([{disabled:1===n.index},"iconfont icon-angle-right next"]),href:"javascript:;"},null,2)])),default:(0,o.w5)((()=>[(0,o._)("div",Ea,[n.brands.length?((0,o.wg)(),(0,o.iD)("ul",{key:0,class:"list",style:(0,y.j5)({transform:`translateX(${1240*-n.index}px)`})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.brands,(a=>((0,o.wg)(),(0,o.iD)("li",{key:a.id},[(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:a.picture,alt:""},null,8,Ma)])),_:2},1024)])))),128))],4)):(0,o.kq)("",!0)])])),_:1})}var Qa={name:"HomeBrand",components:{HomePanel:Sa},setup(){const a=(0,j.iH)([]);W.Z.get("https://pcapi-xiaotuxian-front.itheima.net/home/brand").then((t=>{console.log(t.data),a.value=t.data.result}));const t=(0,j.iH)(0),e=a=>{const e=t.value+a;e<0||e>1||(t.value=e)};return{brands:a,toggle:e,index:t}}};const Va=(0,i.Z)(Qa,[["render",Ja],["__scopeId","data-v-ed77ddd2"]]);var at=Va;const tt=a=>((0,o.dD)("data-v-83c57eea"),a=a(),(0,o.Cn)(),a),et={class:"home-product"},nt={class:"sub"},st={class:"box"},ot=["src"],ct={class:"label"},it={class:"goods-list"},lt=["src"],dt={class:"name ellipsis-2"},rt={class:"desc"},ut={class:"price"},pt={class:"extra"},vt=tt((()=>(0,o._)("span",null,"找相似",-1))),gt=tt((()=>(0,o._)("span",null,"发现现多宝贝 >",-1)));function mt(a,t,e,n,s,c){const i=(0,o.up)("RouterLink"),l=(0,o.up)("XtxMore"),d=(0,o.up)("HomePanel");return(0,o.wg)(),(0,o.iD)("div",et,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.goods,(a=>((0,o.wg)(),(0,o.j4)(d,{title:a.name,key:a.id},{right:(0,o.w5)((()=>[(0,o._)("div",nt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.children,(a=>((0,o.wg)(),(0,o.j4)(i,{key:a.id,to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,y.zw)(a.name),1)])),_:2},1024)))),128))]),(0,o.Wm)(l)])),default:(0,o.w5)((()=>[(0,o._)("div",st,[(0,o.Wm)(i,{class:"cover",to:"/"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:a.picture,alt:""},null,8,ot),(0,o._)("strong",ct,[(0,o._)("span",null,(0,y.zw)(a.name)+"馆",1),(0,o._)("span",null,(0,y.zw)(a.saleInfo),1)])])),_:2},1024),(0,o._)("ul",it,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.goods,(a=>((0,o.wg)(),(0,o.iD)("li",{key:a.id},[(0,o.Wm)(i,{to:"/",class:"image"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:a.picture,alt:""},null,8,lt)])),_:2},1024),(0,o._)("p",dt,(0,y.zw)(a.name),1),(0,o._)("p",rt,(0,y.zw)(a.tag),1),(0,o._)("p",ut,"¥"+(0,y.zw)(a.price),1),(0,o._)("div",pt,[(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>[vt,gt])),_:1})])])))),128))])])])),_:2},1032,["title"])))),128))])}const _t=a=>((0,o.dD)("data-v-163e6fc0"),a=a(),(0,o.Cn)(),a),ft={class:"goods-item"},ht=["src"],wt={class:"name ellipsis-2"},yt={class:"desc"},bt={class:"price"},kt={class:"extra"},xt=_t((()=>(0,o._)("span",null,"找相似",-1))),Ht=_t((()=>(0,o._)("span",null,"发现现多宝贝 >",-1)));function Dt(a,t,e,n,s,c){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",ft,[(0,o.Wm)(i,{to:"/",class:"image"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:n.goods.picture,alt:""},null,8,ht)])),_:1}),(0,o._)("p",wt,(0,y.zw)(n.goods.name),1),(0,o._)("p",yt,(0,y.zw)(n.goods.tag),1),(0,o._)("p",bt,"¥"+(0,y.zw)(n.goods.price),1),(0,o._)("div",kt,[(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>[xt,Ht])),_:1})])])}var Wt={name:"HomeGoods",setup(){const a=(0,j.iH)([]);return W.Z.get("https://pcapi-xiaotuxian-front.itheima.net/home/goods").then((t=>{console.log(t.data),a.value=t.data.result})),{goods:a}}};const jt=(0,i.Z)(Wt,[["render",Dt],["__scopeId","data-v-163e6fc0"]]);var Zt=jt,Ct={name:"HomeProduct",components:{HomePanel:Sa,HomeGoods:Zt},setup(){let a=(0,j.iH)([]);return W.Z.get("https://pcapi-xiaotuxian-front.itheima.net/home/goods").then((t=>{console.log(t.data),a.value=t.data.result})),{goods:a}}};const It=(0,i.Z)(Ct,[["render",mt],["__scopeId","data-v-83c57eea"]]);var zt=It;const Pt=a=>((0,o.dD)("data-v-3edb898c"),a=a(),(0,o.Cn)(),a),Ut={class:"special-list",ref:"homeSpecial"},At=["src"],Yt={class:"meta"},Gt={class:"title"},St={class:""},Rt={class:"price"},Lt={class:"foot"},Nt={class:"like"},Tt=Pt((()=>(0,o._)("i",{class:"iconfont icon-hart1"},null,-1))),Kt={class:"view"},Ot=Pt((()=>(0,o._)("i",{class:"iconfont icon-see"},null,-1))),Xt={class:"reply"},Bt=Pt((()=>(0,o._)("i",{class:"iconfont icon-message"},null,-1)));function $t(a,t,e,n,s,c){const i=(0,o.up)("XtxMore"),l=(0,o.up)("RouterLink"),d=(0,o.up)("HomePanel");return(0,o.wg)(),(0,o.j4)(d,{title:"最新专题"},{right:(0,o.w5)((()=>[(0,o.Wm)(i)])),default:(0,o.w5)((()=>[(0,o._)("div",Ut,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.brands,(a=>((0,o.wg)(),(0,o.iD)("div",{class:"special-item",key:a.id},[(0,o.Wm)(l,{to:"/"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:a.cover,alt:""},null,8,At),(0,o._)("div",Yt,[(0,o._)("p",Gt,[(0,o.Uk)((0,y.zw)(a.title)+" ",1),(0,o._)("small",St,(0,y.zw)(a.summary),1)]),(0,o._)("span",Rt,"¥"+(0,y.zw)(a.lowestPrice)+"起",1)])])),_:2},1024),(0,o._)("div",Lt,[(0,o._)("span",Nt,[Tt,(0,o.Uk)((0,y.zw)(a.collectNum),1)]),(0,o._)("span",Kt,[Ot,(0,o.Uk)((0,y.zw)(a.viewNum),1)]),(0,o._)("span",Xt,[Bt,(0,o.Uk)((0,y.zw)(a.replyNum),1)])])])))),128))],512)])),_:1})}var Ft={name:"HomeSpecial",components:{HomePanel:Sa},setup(){const a=(0,j.iH)([]);return W.Z.get("https://pcapi-xiaotuxian-front.itheima.net/home/special").then((t=>{console.log(t.data),a.value=t.data.result})),{brands:a}}};const qt=(0,i.Z)(Ft,[["render",$t],["__scopeId","data-v-3edb898c"]]);var Et=qt,Mt={name:"PageHome",components:{HomeCategory:ua,HomeBanner:Ha,HomeNews:Na,HomeHot:qa,HomeBrand:at,HomeProduct:zt,HomeSpecial:Et}};const Jt=(0,i.Z)(Mt,[["render",ta]]);var Qt=Jt,Vt={data(){return{datalist:[]}},components:{AppFooter:J,AppHeader:X,AppTopnav:w,Home:Qt}};const ae=(0,i.Z)(Vt,[["render",p]]);var te=ae;const ee=a=>((0,o.dD)("data-v-027ed3f2"),a=a(),(0,o.Cn)(),a),ne={class:"xtx-bread"},se={class:"xtx-bread-item"},oe=ee((()=>(0,o._)("i",{class:"iconfont icon-angle-right"},null,-1))),ce={class:"xtx-bread-item"},ie=ee((()=>(0,o._)("i",{class:"iconfont icon-angle-right"},null,-1))),le=ee((()=>(0,o._)("div",{class:"xtx-bread-item"},[(0,o._)("span",null,"空调")],-1))),de={class:"top-category"},re={class:"container"},ue={class:"sub-list"},pe=ee((()=>(0,o._)("h3",null,"全部分类",-1))),ve=ee((()=>(0,o._)("a",{href:"javascript:;"},[(0,o._)("img",{src:"http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(9).png"}),(0,o._)("p",null,"空调")],-1))),ge=[ve];function me(a,t,e,n,s,c){const i=(0,o.up)("AppTopnav"),l=(0,o.up)("AppHeader"),d=(0,o.up)("RouterLink"),r=(0,o.up)("XtxCarousel"),u=(0,o.up)("AppFooter");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i),(0,o.Wm)(l),(0,o._)("div",ne,[(0,o._)("div",se,[(0,o.Wm)(d,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("首页")])),_:1})]),oe,(0,o._)("div",ce,[(0,o.Wm)(d,{to:"/category/10000"},{default:(0,o.w5)((()=>[(0,o.Uk)("电器")])),_:1})]),ie,le]),(0,o._)("div",de,[(0,o._)("div",re,[(0,o.Wm)(r,{sliders:a.sliders,style:{height:"500px"}},null,8,["sliders"]),(0,o._)("div",ue,[pe,(0,o._)("ul",null,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(8,(a=>(0,o._)("li",{key:a},ge))),64))])])])]),(0,o.Wm)(u)],64)}const _e=a=>((0,o.dD)("data-v-0c9dceb6"),a=a(),(0,o.Cn)(),a),fe=_e((()=>(0,o._)("img",{src:"http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/fresh_goods_2.jpg",alt:""},null,-1))),he=_e((()=>(0,o._)("p",{class:"name ellipsis"},"红功夫 麻辣小龙虾 19.99/500g 实惠到家",-1))),we=_e((()=>(0,o._)("p",{class:"desc ellipsis"},"火锅食材",-1))),ye=_e((()=>(0,o._)("p",{class:"price"},"¥19.99",-1)));function be(a,t,e,n,s,c){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.j4)(i,{to:"/",class:"goods-item"},{default:(0,o.w5)((()=>[fe,he,we,ye])),_:1})}var ke={name:"GoodsItem"};const xe=(0,i.Z)(ke,[["render",be],["__scopeId","data-v-0c9dceb6"]]);var He=xe,De={name:"TopCategory",components:{AppTopnav:w,AppHeader:X,AppFooter:J,GoodsItem:He}};const We=(0,i.Z)(De,[["render",me],["__scopeId","data-v-027ed3f2"]]);var je=We;const Ze={class:"xtx-goods-page"},Ce={class:"container"},Ie={class:"goods-info"},ze={class:"media"},Pe={class:"spec"},Ue={class:"goods-footer"},Ae={class:"goods-article"},Ye={class:"goods-tabs"},Ge={class:"goods-warn"},Se={class:"goods-aside"};function Re(a,t,e,n,s,c){const i=(0,o.up)("AppTopnav"),l=(0,o.up)("AppHeader"),d=(0,o.up)("XtxBreadItem"),r=(0,o.up)("XtxBread"),u=(0,o.up)("GoodsImage"),p=(0,o.up)("GoodsSales"),v=(0,o.up)("GoodsName"),g=(0,o.up)("number"),m=(0,o.up)("HomeNew"),_=(0,o.up)("GoodsTabs"),f=(0,o.up)("GoodsWarn"),h=(0,o.up)("GoodsHot"),w=(0,o.up)("AppFooter");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i),(0,o.Wm)(l),(0,o._)("div",Ze,[(0,o._)("div",Ce,[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("首页")])),_:1}),(0,o.Wm)(d,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("手机")])),_:1}),(0,o.Wm)(d,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("华为")])),_:1}),(0,o.Wm)(d,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("p30")])),_:1})])),_:1}),(0,o._)("div",Ie,[(0,o._)("div",ze,[(0,o.Wm)(u),(0,o.Wm)(p)]),(0,o._)("div",Pe,[(0,o.Wm)(v,{goods:a.goods},null,8,["goods"]),(0,o.Wm)(g)])]),(0,o.Wm)(m),(0,o._)("div",Ue,[(0,o._)("div",Ae,[(0,o._)("div",Ye,[(0,o.Wm)(_)]),(0,o._)("div",Ge,[(0,o.Wm)(f)])]),(0,o._)("div",Se,[(0,o.Wm)(h)])])])]),(0,o.Wm)(w)],64)}const Le={class:"goods-warn"},Ne=(0,o.uE)('<h3 data-v-6ccfc7c7>注意事项</h3><p class="tit" data-v-6ccfc7c7>• 购买运费如何收取？</p><p data-v-6ccfc7c7> 单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费) </p><br data-v-6ccfc7c7><p class="tit" data-v-6ccfc7c7>• 使用什么快递发货?</p><p data-v-6ccfc7c7>默认使用顺丰快递发货(个别商品使用其他快递）</p><p data-v-6ccfc7c7>配送范围覆盖全国大部分地区(港澳台地区除外）</p><br data-v-6ccfc7c7><p class="tit" data-v-6ccfc7c7>• 如何申请退货?</p><p data-v-6ccfc7c7> 1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账； </p><p data-v-6ccfc7c7>2.内裤和食品等特殊商品无质量问题不支持退货；</p><p data-v-6ccfc7c7> 3.退货流程： 确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成； </p><p data-v-6ccfc7c7> 4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。 </p>',13),Te=[Ne];function Ke(a,t){return(0,o.wg)(),(0,o.iD)("div",Le,Te)}const Oe={},Xe=(0,i.Z)(Oe,[["render",Ke],["__scopeId","data-v-6ccfc7c7"]]);var Be=Xe;const $e=a=>((0,o.dD)("data-v-290964b9"),a=a(),(0,o.Cn)(),a),Fe={class:"goods-hot"},qe=$e((()=>(0,o._)("h3",null,"24小时热榜",-1))),Ee={ref:"pannel",class:"goods-list"},Me=["src"],Je={class:"name"},Qe={class:"desc"};function Ve(a,t,e,n,s,c){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",Fe,[qe,(0,o._)("ul",Ee,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.goods,(a=>((0,o.wg)(),(0,o.iD)("li",{key:a.id},[(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:a.picture,alt:""},null,8,Me),(0,o._)("p",Je,(0,y.zw)(a.title),1),(0,o._)("p",Qe,(0,y.zw)(a.alt),1)])),_:2},1024)])))),128))],512)])}var an={name:"GoodsHot",setup(){const a=(0,j.iH)([]);return W.Z.get("https://pcapi-xiaotuxian-front.itheima.net/home/goods").then((t=>{console.log(t.data),a.value=t.data.result})),{goods:a}}};const tn=(0,i.Z)(an,[["render",Ve],["__scopeId","data-v-290964b9"]]);var en=tn;const nn=a=>((0,o.dD)("data-v-6296a881"),a=a(),(0,o.Cn)(),a),sn={class:"goods-tabs"},on=nn((()=>(0,o._)("nav",null,[(0,o._)("a",{class:"active",href:"javascript:;"},"商品详情"),(0,o._)("a",{href:"javascript:;"},[(0,o.Uk)("商品评价"),(0,o._)("span",null,"(500+)")])],-1))),cn={class:"goods-detail"},ln=["src"];function dn(a,t,e,n,s,c){return(0,o.wg)(),(0,o.iD)("div",sn,[on,(0,o._)("div",cn,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.goods.pictures,(a=>((0,o.wg)(),(0,o.iD)("img",{key:a,src:a,alt:""},null,8,ln)))),128))])])}var rn={setup(){const a=(0,j.iH)([]);return W.Z.get("https://pcapi-xiaotuxian-front.itheima.net/home/goods/").then((t=>{console.log(),a.value=t.data.details})),{goods:a}}};const un=(0,i.Z)(rn,[["render",dn],["__scopeId","data-v-6296a881"]]);var pn=un;const vn={class:"xtx-numbox"},gn=(0,o.uE)('<div class="label" data-v-541077c5>数量</div><div class="numbox" data-v-541077c5><a href="javascript:;" data-v-541077c5>-</a><input type="text" readonly value="1" data-v-541077c5><a href="javascript:;" data-v-541077c5>+</a></div>',2),mn=[gn];function _n(a,t,e,n,s,c){return(0,o.wg)(),(0,o.iD)("div",vn,mn)}var fn={name:"XtxNumbox"};const hn=(0,i.Z)(fn,[["render",_n],["__scopeId","data-v-541077c5"]]);var wn=hn;const yn={class:"goods-sales"},bn=(0,o.uE)('<li data-v-4896a2c2><p data-v-4896a2c2>销量人气</p><p data-v-4896a2c2>200+</p><p data-v-4896a2c2><i class="iconfont icon-task-filling" data-v-4896a2c2></i>销量人气</p></li><li data-v-4896a2c2><p data-v-4896a2c2>商品评价</p><p data-v-4896a2c2>400+</p><p data-v-4896a2c2><i class="iconfont icon-comment-filling" data-v-4896a2c2></i>查看评价</p></li><li data-v-4896a2c2><p data-v-4896a2c2>收藏人气</p><p data-v-4896a2c2>600+</p><p data-v-4896a2c2><i class="iconfont icon-favorite-filling" data-v-4896a2c2></i>收藏商品</p></li><li data-v-4896a2c2><p data-v-4896a2c2>品牌信息</p><p data-v-4896a2c2>苏宁电器</p><p data-v-4896a2c2><i class="iconfont icon-dynamic-filling" data-v-4896a2c2></i>品牌主页</p></li>',4),kn=[bn];function xn(a,t,e,n,s,c){return(0,o.wg)(),(0,o.iD)("ul",yn,kn)}var Hn={name:"GoodsSales"};const Dn=(0,i.Z)(Hn,[["render",xn],["__scopeId","data-v-4896a2c2"]]);var Wn=Dn;const jn=a=>((0,o.dD)("data-v-3a94329b"),a=a(),(0,o.Cn)(),a),Zn=jn((()=>(0,o._)("p",{class:"g-name"},"2件装 粉釉花瓣心意点缀 点心盘*2 碟子盘子",-1))),Cn=jn((()=>(0,o._)("p",{class:"g-desc"},"花瓣造型干净简约 多功能使用堆叠方便",-1))),In=jn((()=>(0,o._)("p",{class:"g-price"},[(0,o._)("span",null,"108.00"),(0,o._)("span",null,"199.00")],-1))),zn={class:"g-service"},Pn=jn((()=>(0,o._)("dl",null,[(0,o._)("dt",null,"促销"),(0,o._)("dd",null,"12月好物放送，App领券购买直降120元")],-1))),Un=jn((()=>(0,o._)("dt",null,"配送",-1))),An=jn((()=>(0,o._)("dl",null,[(0,o._)("dt",null,"服务"),(0,o._)("dd",null,[(0,o._)("span",null,"无忧退货"),(0,o._)("span",null,"快速退款"),(0,o._)("span",null,"免费包邮"),(0,o._)("a",{href:"javascript:;"},"了解详情")])],-1)));function Yn(a,t,e,n,s,c){const i=(0,o.up)("city");return(0,o.wg)(),(0,o.iD)(o.HY,null,[Zn,Cn,In,(0,o._)("div",zn,[Pn,(0,o._)("dl",null,[Un,(0,o._)("dd",null,[(0,o.Uk)("至 "),(0,o.Wm)(i)])]),An])],64)}const Gn=a=>((0,o.dD)("data-v-34417706"),a=a(),(0,o.Cn)(),a),Sn={class:"xtx-city",ref:"target"},Rn=Gn((()=>(0,o._)("span",{class:"placeholder"},"请选择配送地址",-1))),Ln=Gn((()=>(0,o._)("span",{class:"value"},null,-1))),Nn=Gn((()=>(0,o._)("i",{class:"iconfont icon-angle-down"},null,-1))),Tn=[Rn,Ln,Nn],Kn={key:0,class:"option"};function On(a,t,e,n,s,c){return(0,o.wg)(),(0,o.iD)("div",Sn,[(0,o._)("div",{class:(0,y.C_)(["select",{active:n.active}]),onClick:t[0]||(t[0]=(...a)=>n.toggleDialog&&n.toggleDialog(...a))},Tn,2),n.active?((0,o.wg)(),(0,o.iD)("div",Kn,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(24,(a=>(0,o._)("span",{class:"ellipsis",key:a},"北京市"))),64))])):(0,o.kq)("",!0)],512)}var Xn={name:"XtxCity",setup(){const a=(0,j.iH)(!1),t=()=>{a.value=!0},e=()=>{a.value=!1},n=()=>{a.value?e():t()},s=(0,j.iH)(null);return(0,A.i9)(s,(()=>{e()})),{active:a,toggleDialog:n,target:s}}};const Bn=(0,i.Z)(Xn,[["render",On],["__scopeId","data-v-34417706"]]);var $n=Bn,Fn={name:"GoodName",components:{city:$n}};const qn=(0,i.Z)(Fn,[["render",Yn],["__scopeId","data-v-3a94329b"]]);var En=qn;const Mn=a=>((0,o.dD)("data-v-06610a35"),a=a(),(0,o.Cn)(),a),Jn={class:"goods-image"},Qn=Mn((()=>(0,o._)("div",{class:"large"},null,-1))),Vn=Mn((()=>(0,o._)("div",{class:"middle"},null,-1))),as=Mn((()=>(0,o._)("ul",{class:"small"},[(0,o._)("li",null,[(0,o._)("img")])],-1))),ts=[Qn,Vn,as];function es(a,t){return(0,o.wg)(),(0,o.iD)("div",Jn,ts)}const ns={},ss=(0,i.Z)(ns,[["render",es],["__scopeId","data-v-06610a35"]]);var os=ss;const cs=a=>((0,o.dD)("data-v-52609f5c"),a=a(),(0,o.Cn)(),a),is={class:"goods-relevant"},ls={class:"header"},ds=cs((()=>(0,o._)("i",{class:"icon"},null,-1))),rs={class:"title"};function us(a,t,e,n,s,c){return(0,o.wg)(),(0,o.iD)("div",is,[(0,o._)("div",ls,[ds,(0,o._)("span",rs,(0,y.zw)(a.goodsId?"同类商品推荐":"猜你喜欢"),1)])])}var ps={name:"GoodsRelevant",setup(){const a=(0,j.iH)([]);W.Z.get("https://pcapi-xiaotuxian-front-devtest.itheima.net/goods/relevant").then((t=>{console.log(t.data),a.value=t.data.result}))}};const vs=(0,i.Z)(ps,[["render",us],["__scopeId","data-v-52609f5c"]]);var gs=vs,ms={name:"TopCategory",components:{AppTopnav:w,AppHeader:X,AppFooter:J,GoodsRelevant:gs,GoodsSales:Wn,GoodsName:En,GoodsImage:os,number:wn,HomeNew:Na,GoodsTabs:pn,GoodsHot:en,GoodsWarn:Be}};const _s=(0,i.Z)(ms,[["render",Re],["__scopeId","data-v-0b203abc"]]);var fs=_s;const hs=(0,u.p7)({history:(0,u.r5)(),routes:[{path:"/",component:te,children:[{path:"/",component:Qt}]},{path:"/category",component:je},{path:"/goods",component:fs}]});var ws=hs,ys=e(65);const bs=["居家","美食","服饰","母婴","个护","严选","数码","运动","杂货"],ks=(W.Z.create({baseURL:"http://pcapi-xiaotuxian-front-devtest.itheima.net/"}),()=>(0,n["default"])("/home/category/head","get"));var xs={namespaced:!0,state:()=>({list:bs.map((a=>({name:a})))}),mutations:{setList(a,t){a.list=t}},actions:{async getList({commit:a}){const{result:t}=await ks();a("setCategory",t)}}},Hs=(0,ys.MT)({state:{},mutations:{},actions:{},modules:{category:xs},getters:{}});function Ds(a,t,e,n,s,c){return(0,o.wg)(),(0,o.iD)("div",{class:(0,y.C_)(["xtx-skeleton",{shan:e.animated}]),style:(0,y.j5)({width:e.width,height:e.height})},[(0,o._)("div",{class:"block",style:(0,y.j5)({backgroundColor:e.bg})},null,4)],6)}var Ws={name:"XtxSkeleton",props:{bg:{type:String,default:"#efefef"},width:{type:String,default:"100px"},height:{type:String,default:"100px"},animated:{type:Boolean,default:!1}}};const js=(0,i.Z)(Ws,[["render",Ds],["__scopeId","data-v-5a49d614"]]);var Zs=js;const Cs=a=>((0,o.dD)("data-v-69b39fe4"),a=a(),(0,o.Cn)(),a),Is={class:"xtx-bread"},zs={class:"xtx-bread-item"},Ps=Cs((()=>(0,o._)("i",{class:"iconfont icon-angle-right"},null,-1))),Us={key:0,class:"xtx-bread-item"},As={key:1},Ys={key:1,class:"iconfont icon-angle-right"},Gs={class:"xtx-bread-item"};function Ss(a,t,e,n,s,c){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",Is,[(0,o._)("div",zs,[(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("首页")])),_:1})]),Ps,e.parentName?((0,o.wg)(),(0,o.iD)("div",Us,[e.parentPath?((0,o.wg)(),(0,o.j4)(i,{key:0,to:e.parentPath},{default:(0,o.w5)((()=>[(0,o.Uk)((0,y.zw)(e.parentName),1)])),_:1},8,["to"])):((0,o.wg)(),(0,o.iD)("span",As,(0,y.zw)(e.parentName),1))])):(0,o.kq)("",!0),e.parentName?((0,o.wg)(),(0,o.iD)("i",Ys)):(0,o.kq)("",!0),(0,o._)("div",Gs,[(0,o._)("span",null,[(0,o.WI)(a.$slots,"default",{},void 0,!0)])])])}var Rs={name:"XtxBread",props:{parentName:{type:String,default:""},parentPath:{type:String,default:""}}};const Ls=(0,i.Z)(Rs,[["render",Ss],["__scopeId","data-v-69b39fe4"]]);var Ns=Ls,Ts={install(a){a.component(Zs.name,Zs,Ns)}};(0,s.ri)(r).use(Hs).use(ws).use(Ts).mount("#app")}},t={};function e(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return a[n].call(o.exports,o,o.exports,e),o.exports}e.m=a,function(){var a=[];e.O=function(t,n,s,o){if(!n){var c=1/0;for(r=0;r<a.length;r++){n=a[r][0],s=a[r][1],o=a[r][2];for(var i=!0,l=0;l<n.length;l++)(!1&o||c>=o)&&Object.keys(e.O).every((function(a){return e.O[a](n[l])}))?n.splice(l--,1):(i=!1,o<c&&(c=o));if(i){a.splice(r--,1);var d=s();void 0!==d&&(t=d)}}return t}o=o||0;for(var r=a.length;r>0&&a[r-1][2]>o;r--)a[r]=a[r-1];a[r]=[n,s,o]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){var a={143:0};e.O.j=function(t){return 0===a[t]};var t=function(t,n){var s,o,c=n[0],i=n[1],l=n[2],d=0;if(c.some((function(t){return 0!==a[t]}))){for(s in i)e.o(i,s)&&(e.m[s]=i[s]);if(l)var r=l(e)}for(t&&t(n);d<c.length;d++)o=c[d],e.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return e.O(r)},n=self["webpackChunkshop_project"]=self["webpackChunkshop_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(6346)}));n=e.O(n)})();
//# sourceMappingURL=app.3fdbdca4.js.map