(function(e){function t(t){for(var a,o,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},r={app:0},s=[];function i(e){return l.p+"js/"+({about:"about","datapoint~explore~index":"datapoint~explore~index",datapoint:"datapoint",explore:"explore",index:"index",state:"state"}[e]||e)+"."+{"chunk-54b95a4c":"b6ae4ecc",about:"01d4a880","chunk-9d0bdc28":"bbdc353d","datapoint~explore~index":"37b23fee",datapoint:"894e5f06",explore:"6b46b1de",index:"b93dd3a1",state:"5d563a82"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-9d0bdc28":1,explore:1,index:1,state:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about","datapoint~explore~index":"datapoint~explore~index",datapoint:"datapoint",explore:"explore",index:"index",state:"state"}[e]||e)+"."+{"chunk-54b95a4c":"31d6cfe0",about:"31d6cfe0","chunk-9d0bdc28":"f5dadd15","datapoint~explore~index":"31d6cfe0",datapoint:"31d6cfe0",explore:"f2cc5c00",index:"71232a25",state:"39fb2a43"}[e]+".css",r=l.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===a||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[e],p.parentNode.removeChild(p),n(s)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00cd":function(e,t,n){},"0dfb":function(e,t,n){e.exports=n.p+"img/pfm-logo-white.daf04b94.png"},1808:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("14d9");var a=n("2b0e"),o=function(){var e=this,t=e._self._c;return t("main",{staticClass:"app",attrs:{id:"app"}},[t("NavBar",{staticClass:"sticky top-0 z-50"}),t("div",[t("router-view")],1)],1)},r=[],s=function(){var e=this,t=e._self._c;return t("nav",{staticClass:"bg-transpurple py-4 md:py-3 px-2 md:px-10 xl:px-16 overflow-x-hiddens shadow-xl"},[t("div",{staticClass:"lg:flex justify-between items-center"},[t("div",{staticClass:"w-full top-menu flex justify-between items-center"},[t("div",{staticClass:"logo"},[t("router-link",{attrs:{to:"/"}},[t("img",{staticClass:"h-10 md:h-12",attrs:{src:n("0dfb"),alt:"Press Freedom Monitor logo"}})])],1),t("HamburgerIcon",{staticClass:"z-20 cursor-pointer block lg:hidden",attrs:{status:e.isNavOpen},on:{setNav:function(t){e.isNavOpen=!e.isNavOpen}}})],1),t("div",{staticClass:"nav-links w-full mt-5 lg:mt-0 lg:flex flex-grow lg:items-center lg:w-auto font-sans text-white",class:e.isNavOpen?"block":"hidden"},[t("router-link",{staticClass:"block ml-24 lg:inline-block mb-5 py-2 lg:mb-0 text-base md:text-lg lg:text-base leading-19 text-center cursor-pointer",attrs:{to:"/"}},[t("span",{on:{click:function(t){e.isNavOpen=!1}}},[e._v("Home")])]),t("router-link",{staticClass:"block ml-24 lg:inline-block mb-5 py-2 lg:mb-0 text-base md:text-lg lg:text-base leading-19 text-center cursor-pointer",attrs:{to:"/incidents"}},[t("span",{on:{click:function(t){e.isNavOpen=!1}}},[e._v("Incidents")])]),t("router-link",{staticClass:"block ml-24 lg:inline-block mb-5 py-2 lg:mb-0 text-base md:text-lg lg:text-base leading-19 text-center cursor-pointer",attrs:{to:"/resources"}},[t("span",{on:{click:function(t){e.isNavOpen=!1}}},[e._v("FAQ")])]),t("router-link",{staticClass:"block ml-24 lg:inline-block mb-5 py-2 lg:mb-0 text-base md:text-lg lg:text-base leading-19 text-center cursor-pointer",attrs:{to:"/about"}},[t("span",{on:{click:function(t){e.isNavOpen=!1}}},[e._v("About")])])],1)])])},i=[],l=function(){var e=this,t=e._self._c;return t("svg",{staticClass:"fill-current z-50",class:{"text-eatizgray":!0===e.status},attrs:{width:"40",height:"40",viewBox:"0 0 100 80",xmlns:"http://www.w3.org/2000/svg"},on:{click:e.updateNavStatus}},[t("g",{attrs:{id:"Hamburger"}},[t("rect",{class:{"bar-one gray":!0===e.status,"css-1gyiezd":!1===e.status},attrs:{y:"10",width:"100",height:"5"}}),t("rect",{staticClass:"css-1b5twje",class:{"bar-two gray":!0===e.status},attrs:{y:"30",width:"100",height:"5",fill:"#f8f8f9"}}),t("rect",{class:{"bar-three gray":!0===e.status,"css-ppgaya":!1===e.status},attrs:{y:"50",width:"100",height:"5"}}),t("rect",{staticClass:"css-1b5twje",class:{"bar-two gray":!0===e.status},attrs:{y:"70",width:"100",height:"5",fill:"#f8f8f9"}})])])},c=[],u={name:"HamburgerIcon",props:{status:{type:Boolean}},data(){return{}},created(){},methods:{updateNavStatus(){const e=this.status;this.$emit("setNav",e)}}},d=u,p=(n("a4c1"),n("2877")),f=Object(p["a"])(d,l,c,!1,null,"420692b6",null),b=f.exports,h={name:"NavBar",components:{HamburgerIcon:b},data(){return{isNavOpen:!1,portal_url:window.portal}}},m=h,g=(n("9872"),Object(p["a"])(m,s,i,!1,null,"311a4697",null)),x=g.exports,v={components:{NavBar:x}},w=v,y=(n("b110"),Object(p["a"])(w,o,r,!1,null,null,null)),k=y.exports,C=n("9483");Object(C["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var N=n("8c4f");a["a"].use(N["a"]);const O=[{path:"/",name:"Index",component:()=>Promise.all([n.e("chunk-54b95a4c"),n.e("datapoint~explore~index"),n.e("index")]).then(n.bind(null,"d504"))},{path:"/explore",name:"Explore",component:()=>Promise.all([n.e("chunk-54b95a4c"),n.e("datapoint~explore~index"),n.e("explore")]).then(n.bind(null,"d115"))},{path:"/cases",name:"CaseList",component:()=>Promise.all([n.e("chunk-54b95a4c"),n.e("datapoint~explore~index"),n.e("explore")]).then(n.bind(null,"1019"))},{path:"/incidents",name:"Incidents",component:()=>Promise.all([n.e("chunk-54b95a4c"),n.e("datapoint~explore~index"),n.e("explore")]).then(n.bind(null,"476f"))},{path:"/resources",name:"Resource",component:()=>Promise.all([n.e("chunk-54b95a4c"),n.e("datapoint~explore~index"),n.e("explore")]).then(n.bind(null,"eff4"))},{path:"/state/:id",name:"ResultPageByStateSearch",component:()=>n.e("state").then(n.bind(null,"e6b4"))},{path:"/datapoints",name:"ResultPageByDataPoints",component:()=>Promise.all([n.e("chunk-54b95a4c"),n.e("datapoint~explore~index"),n.e("datapoint")]).then(n.bind(null,"3e0f"))},{path:"/about",name:"About",component:()=>Promise.all([n.e("chunk-54b95a4c"),n.e("about")]).then(n.bind(null,"f820"))},{path:"/incidents/:slug",name:"Incident Details",component:()=>Promise.all([n.e("chunk-54b95a4c"),n.e("chunk-9d0bdc28")]).then(n.bind(null,"99b1"))}],P=new N["a"]({mode:"history",base:"/",routes:O,scrollBehavior(e,t,n){return n||{x:0,y:0}}});var j=P,_=n("2f62");a["a"].use(_["a"]);var S=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=n("e409"),B=n.n(A),E=(n("ba8c"),n("0a35"));for(const[H]of Object.entries(E))a["a"].component(H,E[H]);var I=n("854a"),T=n.n(I);window.cash=B.a,window.host="https://v1.corruptioncases.ng",window.portal="https://portal.corruptioncases.ng",window.toastr=T.a,window.mapKey="AIzaSyDRwQRWNdVuiBSZr6hAD4nC8F5NHuEoeTY",a["a"].config.productionTip=!1,a["a"].mixin({methods:{paginate(e,t){var n,a=e,o=t,r=2,s=a-r,i=a+r+1,l=[],c=[];for(let u=1;u<=o;u++)(1==u||u==o||u>=s&&u<i)&&l.push(u);for(let u of l)n&&(u-n===2?c.push(n+1):u-n!==1&&c.push("...")),c.push(u),n=u;return c}}}),new a["a"]({router:j,store:S,render:e=>e(k)}).$mount("#app")},"77a3":function(e,t,n){},9872:function(e,t,n){"use strict";n("77a3")},a4c1:function(e,t,n){"use strict";n("00cd")},b110:function(e,t,n){"use strict";n("1808")},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.128a9afb.js.map