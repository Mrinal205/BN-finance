(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[12],{1144:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return g}));var r,c=n(3),a=n.n(c),i=n(8),o=n(12),s=n(15),u=n(0),l=n(14),b=n.n(l),j=n(32),f=n(40),d=n(24),p=n(92),h=n(136),O=n(386);!function(e){e.NOT_FETCHED="not-fetched",e.SUCCESS="success",e.FAILED="failed"}(r||(r={}));var m=function(){var e=Object(h.a)().slowRefresh,t=Object(u.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(u.useEffect)((function(){function e(){return(e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(f.f)(),e.next=3,t.totalSupply();case 3:n=e.sent,c(new b.a(n.toString()));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r},x=function(e){var t=Object(u.useState)(d.d),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(h.a)().slowRefresh;return Object(u.useEffect)((function(){(function(){var t=Object(o.a)(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(f.a)(e),t.next=3,n.balanceOf("0x000000000000000000000000000000000000dEaD");case 3:r=t.sent,c(new b.a(r.toString()));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e,i]),r},g=function(){var e=Object(u.useState)(d.d),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(j.c)().account,i=Object(O.a)(),l=i.lastUpdated,f=i.setLastUpdated;return Object(u.useEffect)((function(){c&&function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.getBalance(c);case 2:t=e.sent,r(new b.a(t.toString()));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,l,r]),{balance:n,refresh:f}};t.b=function(e){var t=r.NOT_FETCHED,n=r.SUCCESS,c=r.FAILED,l=Object(u.useState)({balance:d.d,fetchStatus:t}),p=Object(s.a)(l,2),O=p[0],m=p[1],x=Object(j.c)().account,g=Object(h.a)().fastRefresh;return Object(u.useEffect)((function(){x&&function(){var t=Object(o.a)(a.a.mark((function t(){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(f.a)(e),t.prev=1,t.next=4,r.balanceOf(x);case 4:o=t.sent,m({balance:new b.a(o.toString()),fetchStatus:n}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0),m((function(e){return Object(i.a)(Object(i.a)({},e),{},{fetchStatus:c})}));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}()()}),[x,e,g,n,c]),O}},1300:function(e,t,n){var r=n(592),c=n(593),a=n(159);e.exports=function(e){return e&&e.length?r(e,a,c):void 0}},1301:function(e,t,n){e.exports=n(586)},1302:function(e,t,n){var r,c,a;c=[],void 0===(a="function"===typeof(r=function(){var e=function(){},t={},n={},r={};function c(e,t){e=e.push?e:[e];var c,a,i,o=[],s=e.length,u=s;for(c=function(e,n){n.length&&o.push(e),--u||t(o)};s--;)a=e[s],(i=n[a])?c(a,i):(r[a]=r[a]||[]).push(c)}function a(e,t){if(e){var c=r[e];if(n[e]=t,c)for(;c.length;)c[0](e,t),c.splice(0,1)}}function i(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function o(t,n,r,c){var a,i,s=document,u=r.async,l=(r.numRetries||0)+1,b=r.before||e,j=t.replace(/[\?|#].*$/,""),f=t.replace(/^(css|img)!/,"");c=c||0,/(^css!|\.css$)/.test(j)?((i=s.createElement("link")).rel="stylesheet",i.href=f,(a="hideFocus"in i)&&i.relList&&(a=0,i.rel="preload",i.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(j)?(i=s.createElement("img")).src=f:((i=s.createElement("script")).src=t,i.async=void 0===u||u),i.onload=i.onerror=i.onbeforeload=function(e){var s=e.type[0];if(a)try{i.sheet.cssText.length||(s="e")}catch(u){18!=u.code&&(s="e")}if("e"==s){if((c+=1)<l)return o(t,n,r,c)}else if("preload"==i.rel&&"style"==i.as)return i.rel="stylesheet";n(t,s,e.defaultPrevented)},!1!==b(t,i)&&s.head.appendChild(i)}function s(e,t,n){var r,c,a=(e=e.push?e:[e]).length,i=a,s=[];for(r=function(e,n,r){if("e"==n&&s.push(e),"b"==n){if(!r)return;s.push(e)}--a||t(s)},c=0;c<i;c++)o(e[c],r,n)}function u(e,n,r){var c,o;if(n&&n.trim&&(c=n),o=(c?r:n)||{},c){if(c in t)throw"LoadJS";t[c]=!0}function u(t,n){s(e,(function(e){i(o,e),t&&i({success:t,error:n},e),a(c,e)}),o)}if(o.returnPromise)return new Promise(u);u()}return u.ready=function(e,t){return c(e,(function(e){i(t,e)})),u},u.done=function(e){a(e,[])},u.reset=function(){t={},n={},r={}},u.isDefined=function(e){return e in t},u})?r.apply(t,c):r)||(e.exports=a)},1303:function(e,t,n){var r=n(1304);e.exports=r},1304:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var c,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),o=(c=i)&&c.__esModule?c:{default:c},s=function(e){function t(){r(this,t),null!=e&&e.apply(this,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.url,n=e.width,r=e.height,c=e.autoPlay,a=e.hideRelated,i=e.showComments,s=e.showUser,u=e.showReposts,l=e.visual,b=e.color,j=l?"https://w.soundcloud.com/player/?url="+t+"&amp;auto_play="+c+"&amp;hide_related="+a+"&amp;show_comments="+i+"&amp;show_user="+s+"&amp;show_reposts="+u+"&amp;visual="+l:"https://w.soundcloud.com/player/?url="+t+"&amp;color="+b+"&amp;auto_play="+c+"&amp;hide_related="+a+"&amp;show_comments="+i+"&amp;show_user="+s+"&amp;show_reposts="+u;return o.default.createElement("iframe",{width:n,height:l?r:"auto",scrolling:"no",frameborder:"no",src:j})}}],[{key:"defaultProps",value:{width:"100%",height:"450px",url:"https://soundcloud.com/icebound/dusty-breaks-at-the-bottom-of-the-random-crates",autoPlay:!1,hideRelated:!1,showComments:!0,showUser:!0,showReposts:!1,visual:!0,color:"ff5500"},enumerable:!0}]),t}(i.Component);t.default=s,e.exports=t.default},1621:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _t}));var r,c,a,i,o,s,u,l,b,j,f,d,p,h,O=n(10),m=n(0),x=n.n(m),g=n(5),v=n(2),w=n(17),y=n(183),S=n(3),k=n.n(S),E=n(402),T=n(12),z=n(15),N=n(95),C=n(32),R=n(542),P=n(51),F=n(66),A=n(120),L=n(14),_=n.n(L),Q=n(28),I=n(42),H=n(392),M=n(1),D=function(e){var t=e.value,n=e.decimals,r=e.fontSize,c=void 0===r?"40px":r,a=e.lineHeight,i=void 0===a?"1":a,o=e.prefix,s=void 0===o?"":o,u=e.bold,l=void 0===u||u,b=e.color,j=void 0===b?"text":b,f=Object(H.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),d=f.countUp,p=f.update,h=Object(m.useRef)(p);return Object(m.useEffect)((function(){h.current(t)}),[t,h]),Object(M.jsxs)(v.Sb,{bold:l,fontSize:c,style:{lineHeight:i},color:j,children:[s,d]})},U=n(8),B=function(e){return Object(M.jsx)(D,Object(U.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))},q=g.e.div(r||(r=Object(O.a)(["\n  margin-bottom: 24px;\n"]))),$=function(e){var t=e.farmsWithBalance,n=Object(w.b)().t,r=Object(C.c)().account,c=t.reduce((function(e,t){var n=new _.a(t.balance);return n.eq(0)?e:e+n.div(I.i).toNumber()}),0),a=Object(Q.T)(),i=new _.a(c).multipliedBy(a).toNumber();return r?Object(M.jsxs)(q,{children:[Object(M.jsx)(D,{value:c,lineHeight:"1.5"}),a.gt(0)&&Object(M.jsx)(B,{value:i})]}):Object(M.jsx)(v.Sb,{color:"textDisabled",style:{lineHeight:"76px"},children:n("Locked")})},W=n(1144),J=n(20),K=n(23),V=function(){var e=Object(w.b)().t,t=Object(W.b)(Object(J.f)()).balance,n=Object(Q.T)(),r=new L.BigNumber(Object(K.f)(t)).multipliedBy(n).toNumber();return Object(C.c)().account?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(D,{value:Object(K.f)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),n.gt(0)?Object(M.jsx)(B,{value:r}):Object(M.jsx)("br",{})]}):Object(M.jsx)(v.Sb,{color:"textDisabled",style:{lineHeight:"54px"},children:e("Locked")})},X=Object(g.e)(v.u)(c||(c=Object(O.a)(["\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),G=g.e.div(a||(a=Object(O.a)(["\n  margin-bottom: 16px;\n"]))),Y=g.e.img(i||(i=Object(O.a)(["\n  margin-bottom: 16px;\n"]))),Z=g.e.div(o||(o=Object(O.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),ee=g.e.div(s||(s=Object(O.a)(["\n  margin-top: 24px;\n"]))),te=g.e.div(u||(u=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ne=function(){var e=Object(m.useState)(!1),t=Object(z.a)(e,2),n=t[0],r=t[1],c=Object(C.c)().account,a=Object(w.b)().t,i=Object(F.a)().toastError,o=Object(R.a)(),s=Object(P.k)(),u=o.filter((function(e){return e.balance.gt(0)})),l=Object(m.useCallback)(Object(T.a)(k.a.mark((function e(){var t,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!0),t=Object(E.a)(u),e.prev=2,t.s();case 4:if((n=t.n()).done){e.next=16;break}return c=n.value,e.prev=6,e.next=9,Object(N.c)(s,c.pid);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),i(a("Error"),a("Please try again. Confirm the transaction and make sure you are paying enough gas!"));case 14:e.next=4;break;case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(2),t.e(e.t1);case 21:return e.prev=21,t.f(),e.finish(21);case 24:r(!1);case 25:case"end":return e.stop()}}),e,null,[[2,18,21,24],[6,11]])}))),[u,s,i,a]);return Object(M.jsx)(X,{className:"bg-opacity",children:Object(M.jsxs)(v.v,{children:[Object(M.jsx)(v.T,{scale:"xl",mb:"24px",children:a("Farms & Staking")}),Object(M.jsxs)(te,{children:[Object(M.jsx)(Y,{src:"/images/Logo_icon.png",alt:"cake logo",width:64,height:64}),Object(M.jsx)(v.q,{className:"cardback",onClick:function(){try{window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:"0x0596C1B53c995ed98Fb066A0C107416E537E94Fc",symbol:"BN",decimals:18,image:"https://bn.finance/images/Logo_icon.png"}}})}catch(e){}},children:"Add to Metamask"})]}),Object(M.jsxs)(G,{children:[Object(M.jsxs)(Z,{children:[a("CAKE to Harvest"),":"]}),Object(M.jsx)($,{farmsWithBalance:u})]}),Object(M.jsxs)(G,{children:[Object(M.jsxs)(Z,{children:[a("CAKE in Wallet"),":"]}),Object(M.jsx)(V,{})]}),Object(M.jsx)(ee,{children:c?Object(M.jsx)(v.q,{id:"harvest-all",disabled:u.length<=0||n,onClick:l,width:"100%",children:n?a("Collecting CAKE"):a("Harvest all (%count%)",{count:u.length})}):Object(M.jsx)(A.a,{width:"100%"})})]})})},re=n(293),ce=Object(g.e)(v.u)(l||(l=Object(O.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ae=g.e.div(b||(b=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ie=function(){var e=Object(w.b)().t,t=Object(W.e)(),n=Object(K.f)(Object(W.c)(Object(J.f)())),r=t?Object(K.f)(t)-n:0,c=t?t.minus(n):new re.a(0),a=Object(Q.T)().times(c);Object(K.g)(a);return Object(M.jsx)(ce,{className:"bg-opacity",children:Object(M.jsxs)(v.v,{children:[Object(M.jsx)(v.T,{scale:"xl",mb:"24px",children:e("Farm Stats")}),Object(M.jsxs)(ae,{children:[Object(M.jsx)(v.Sb,{fontSize:"14px",children:e("Market Cap")}),Object(K.g)(a)-n&&Object(M.jsx)(D,{fontSize:"14px",value:Object(K.g)(a)-n})]}),Object(M.jsxs)(ae,{children:[Object(M.jsx)(v.Sb,{fontSize:"14px",children:e("Total FARM Supply")}),r&&Object(M.jsx)(D,{fontSize:"14px",value:r})]}),Object(M.jsxs)(ae,{children:[Object(M.jsx)(v.Sb,{fontSize:"14px",children:e("Total FARM Burned")}),Object(M.jsx)(D,{fontSize:"14px",decimals:0,value:n})]}),Object(M.jsxs)(ae,{children:[Object(M.jsx)(v.Sb,{fontSize:"14px",children:e("New FARM/block")}),Object(M.jsx)(D,{fontSize:"14px",decimals:0,value:19})]})]})})},oe=Object(g.e)(v.u)(j||(j=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),se=function(){var e=Object(w.b)().t,t=function(){var e=Object(m.useState)(null),t=Object(z.a)(e,2),n=t[0],r=t[1];return Object(m.useEffect)((function(){!function(){var e=Object(T.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://openapi.debank.com/v1/protocol?id=bsc_pancakeswap");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[r]),n}(),n=Object(Q.X)();return Object(M.jsx)(oe,{className:"bg-opacity",children:Object(M.jsxs)(v.v,{children:[Object(M.jsx)(v.T,{scale:"lg",mb:"24px",children:e("Total Value Locked (TVL)")}),t?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(v.T,{scale:"xl",children:"$".concat(n.dp(4))}),Object(M.jsx)(v.Sb,{color:"textSubtle",children:e("Across all LPs and Syrup Pools")})]}):Object(M.jsx)(v.Ib,{height:66})]})})},ue=n(263),le=n(1300),be=n.n(le),je=n(112),fe=n(55),de=n(96),pe=n(264),he=function(){var e=Object(m.useRef)(null),t=Object(m.useState)(!1),n=Object(z.a)(t,2),r=n[0],c=n[1],a=Object(m.useState)(!1),i=Object(z.a)(a,2),o=i[0],s=i[1];return Object(m.useEffect)((function(){r||(new IntersectionObserver((function(e){var t=Object(z.a)(e,1)[0];s(t.isIntersecting)}),{rootMargin:"0px",threshold:1}).observe(e.current),c(!0))}),[r]),{observerRef:e,isIntersecting:o}},Oe=Object(g.e)(v.u)(f||(f=Object(O.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),me=Object(g.e)(v.T).attrs({scale:"xl"})(d||(d=Object(O.a)(["\n  line-height: 44px;\n"]))),xe=function(){var e=Object(m.useState)(!0),t=Object(z.a)(e,2),n=t[0],r=t[1],c=Object(w.b)().t,a=Object(Q.e)().data,i=Object(Q.T)(),o=Object(fe.b)(),s=he(),u=s.observerRef,l=s.isIntersecting;Object(m.useEffect)((function(){l&&function(){var e=Object(T.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o(Object(de.c)(de.d.map((function(e){return e.pid}))));case 3:return e.prev=3,r(!1),e.finish(3);case 6:case"end":return e.stop()}}),e,null,[[0,,3,6]])})));return function(){return e.apply(this,arguments)}}()()}),[o,r,l]);var b=Object(m.useMemo)((function(){if(i.gt(0)){var e=a.map((function(e){if(0!==e.pid&&"0X"!==e.multiplier&&e.lpTotalInQuoteToken&&e.quoteToken.busdPrice){var t=new _.a(e.lpTotalInQuoteToken).times(e.quoteToken.busdPrice),n=Object(pe.a)(new _.a(e.poolWeight),i,t,e.lpAddresses[ue.a.MAINNET]);return n.cakeRewardsApr+n.lpRewardsApr}return null})),t=be()(e);return null===t||void 0===t?void 0:t.toLocaleString("en-US",{maximumFractionDigits:2})}return null}),[i,a]),j=b||"-",f=c("Earn up to %highestApr% APR in Farms",{highestApr:j}).split(j),d=Object(z.a)(f,2),p=d[0],h=d[1];return Object(M.jsx)(Oe,{className:"bg-opacity",children:Object(M.jsx)(je.b,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apr-cta",children:Object(M.jsxs)(v.v,{children:[Object(M.jsx)(v.T,{scale:"lg",children:p}),Object(M.jsx)(me,{color:"#7645d9",children:b&&!n?"".concat(b,"%"):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(v.Ib,{animation:"pulse",variant:"rect",height:"44px"}),Object(M.jsx)("div",{ref:u})]})}),Object(M.jsxs)(v.R,{justifyContent:"space-between",children:[Object(M.jsx)(v.T,{scale:"lg",children:h}),Object(M.jsx)(v.e,{mt:30,color:"primary"})]})]})})})},ge=n(50),ve=n(253),we=n.n(ve),ye=n(82),Se=Object(g.e)(v.u)(p||(p=Object(O.a)(["\n  background: linear-gradient(#53dee9, #7645d9);\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ke=Object(g.e)(v.T).attrs({scale:"xl"})(h||(h=Object(O.a)(["\n  line-height: 44px;\n"]))),Ee=ye.a.filter((function(e){return!e.isFinished&&!e.earningToken.symbol.includes("FARM")})),Te=we()(Ee,["sortOrder","pid"],["desc","desc"]).slice(0,3),ze=["FARM"].concat(Object(ge.a)(Te.map((function(e){return e.earningToken.symbol})))).join(", "),Ne=function(){var e=(0,Object(w.b)().t)("Earn %assets% in Pools",{assets:ze}).split(ze),t=Object(z.a)(e,2),n=t[0],r=t[1];return Object(M.jsx)(Se,{children:Object(M.jsx)(je.b,{exact:!0,activeClassName:"active",to:"/syrup",id:"pool-cta",children:Object(M.jsxs)(v.v,{children:[Object(M.jsx)(v.T,{color:"contrast",scale:"lg",children:n}),Object(M.jsx)(ke,{color:"invertedContrast",children:ze}),Object(M.jsxs)(v.R,{justifyContent:"space-between",children:[Object(M.jsx)(v.T,{color:"contrast",scale:"lg",children:r}),Object(M.jsx)(v.e,{mt:30,color:"primary"})]})]})})})},Ce=n(70),Re=n(136),Pe=n(1301),Fe=n.n(Pe),Ae=n(1302),Le=n.n(Ae);function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Qe="twttr",Ie=Qe,He=!("undefined"===typeof window||!window.document||!window.document.createElement);function Me(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function De(e){var t=Object(m.useRef)();return function(e,t){if(Me(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var c=0;c<n.length;c++)if(!Object.prototype.hasOwnProperty.call(t,n[c])||!Me(e[n[c]],t[n[c]]))return!1;return!0}(e,t.current)||(t.current=e),t.current}function Ue(e){return"object"===typeof e?_e({},e):e}function Be(e,t,n,r,c,a,i){try{var o=e[a](i),s=o.value}catch(u){return void n(u)}o.done?t(s):Promise.resolve(s).then(r,c)}He&&Le()("https://platform.twitter.com/widgets.js",Ie);var qe="twdiv";function $e(e,t,n,r){var c=Object(m.useState)(null),a=c[0],i=c[1],o=Object(m.useRef)(null);if(!He)return{ref:o,error:a};var s=[e,De(t),De(n)];return Object(m.useEffect)((function(){i(null);var c,a,s=!1;if(o.current){var u=function(){var c,a=(c=Fe.a.mark((function c(){var a,u;return Fe.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o&&o.current){c.next=2;break}return c.abrupt("return");case 2:return(a=document.createElement("div")).setAttribute(qe,"yes"),o.current.appendChild(a),c.prev=5,c.next=8,new Promise((function(e,t){var n=function(){return t(new Error("Could not load remote twitter widgets js"))};Le.a.ready(Ie,{success:function(){var t=window.twttr;t&&t.widgets||n(),e(t.widgets)},error:n})}));case 8:return u=c.sent,c.next=11,u[e](Ue(t),a,Ue(n));case 11:if(c.sent||s){c.next=14;break}throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");case 14:c.next=21;break;case 16:return c.prev=16,c.t0=c.catch(5),console.error(c.t0),i(c.t0),c.abrupt("return");case 21:if(o&&o.current){c.next=23;break}return c.abrupt("return");case 23:if(!s){c.next=26;break}return a&&a.remove(),c.abrupt("return");case 26:r&&r();case 27:case"end":return c.stop()}}),c,null,[[5,16]])})),function(){var e=this,t=arguments;return new Promise((function(n,r){var a=c.apply(e,t);function i(e){Be(a,n,r,i,o,"next",e)}function o(e){Be(a,n,r,i,o,"throw",e)}i(void 0)}))});return function(){return a.apply(this,arguments)}}();c=o.current,a=qe,c&&c.querySelectorAll("*").forEach((function(e){e.hasAttribute(a)&&e.remove()})),u()}return function(){s=!0}}),s),{ref:o,error:a}}var We,Je,Ke,Ve,Xe,Ge,Ye,Ze,et,tt,nt,rt,ct,at,it,ot,st,ut,lt,bt=function(e){var t=e.dataSource,n=e.options,r=e.onLoad,c=e.renderError,a=$e("createTimeline",t,n,r),i=a.ref,o=a.error;return x.a.createElement("div",{ref:i},o&&c&&c(o))},jt=n(34),ft=n(104),dt=Object(g.e)(v.u)(We||(We=Object(O.a)(["\n\n"]))),pt=Object(g.e)(v.Sb)(Je||(Je=Object(O.a)(["\n  font-size: 28px;\n  line-height: 1.1;\n  font-weight: 600;\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ht=(Object(g.e)(v.Sb)(Ke||(Ke=Object(O.a)(["\n  font-size: 36px;\n  line-height: 1.1;\n  font-weight: 600;\n  max-width: 380px;\n  "," {\n    font-size: 50px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Object(g.e)(jt.a)(Ve||(Ve=Object(O.a)(["\n  font-size: 36px;\n  line-height: 1.1;\n  font-weight: 600;\n  "," {\n    font-size: 50px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Object(g.e)(v.Ib)(Xe||(Xe=Object(O.a)(["\n  height: 40px;\n  "," {\n    height: 55px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Object(g.e)(v.Sb)(Ge||(Ge=Object(O.a)(["\n  font-size: 22px;\n  line-height: 1.1;\n  font-weight: 600;\n  max-width: 160px;\n  "," {\n    font-size: 24px;\n    max-width: 320px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Object(g.e)(v.R)(Ye||(Ye=Object(O.a)(["\n  align-items: center;\n  max-width: 120px;\n  "," {\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),function(){var e=Object(w.b)().t,t=Object(Re.a)().slowRefresh,n=he(),r=n.observerRef,c=n.isIntersecting,a=Object(m.useState)(!1),i=Object(z.a)(a,2),o=i[0],s=i[1],u=Object(Q.S)(),l=Object(m.useState)(0),b=Object(z.a)(l,2),j=b[0],f=b[1],d=Object(m.useState)(0),p=Object(z.a)(d,2),h=p[0],O=p[1];Object(m.useEffect)((function(){c&&s(!0)}),[c]),Object(m.useEffect)((function(){o&&function(){var e=Object(T.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.h)();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t,o]),Object(m.useEffect)((function(){u.gt(0)&&j>0&&O(u.times(j).toNumber())}),[u,j]);h&&h.toString();var x=Object(ft.a)();x.isDark,x.toggleTheme,x.theme;return Object(M.jsx)(dt,{children:Object(M.jsxs)(v.v,{children:[Object(M.jsx)(pt,{mb:"24px",children:e("News")}),Object(M.jsx)(bt,{dataSource:{sourceType:"profile",screenName:"GooseFinance"},options:{height:"300",chrome:"noheader, nofooter",width:"400",theme:"dark"}}),h?Object(M.jsx)(M.Fragment,{}):Object(M.jsx)(M.Fragment,{children:Object(M.jsx)("div",{ref:r})})]})})}),Ot=Object(g.e)(v.u)(Ze||(Ze=Object(O.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),mt=Object(g.e)(v.Sb)(et||(et=Object(O.a)(["\n  word-wrap: break-word;\n"]))),xt=function(e){var t=e.currentLotteryPrize,n=Object(w.b)().t,r=Object(Q.T)().times(t),c=Object(K.f)(r),a=r.isNaN()?c.toString():"-",i=n("Over %amount% in Prizes!",{amount:a}).split(a),o=Object(z.a)(i,2),s=o[0],u=o[1];return Object(M.jsx)(Ot,{className:"bg-opacity",children:Object(M.jsx)(je.b,{exact:!0,activeClassName:"active",to:"/lottery",id:"lottery-pot-cta",children:Object(M.jsxs)(v.v,{children:[Object(M.jsx)(v.T,{scale:"lg",children:n("Lottery")}),Object(M.jsx)(mt,{color:"#7645d9",fontSize:"40px",bold:!0,lineHeight:"1.1",children:s}),r.isNaN()?Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(v.Ib,{height:60,width:210})}):Object(M.jsx)(jt.a,{fontSize:"40px",color:"#7645d9",bold:!0,lineHeight:"1.1",prefix:"$",decimals:0,value:c}),Object(M.jsxs)(v.R,{justifyContent:"space-between",children:[Object(M.jsx)(mt,{fontSize:"28px",bold:!0,lineHeight:"1.1",children:u}),Object(M.jsx)(v.e,{mt:30,color:"primary"})]})]})})})},gt=n(385),vt=n(1303),wt=n.n(vt),yt=Object(g.e)(v.Sb)(tt||(tt=Object(O.a)(["\n  background: -webkit-linear-gradient(#7645d9, #452a7a);\n  font-size: 24px;\n  font-weight: 600;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]))),St=g.e.div(nt||(nt=Object(O.a)(["\n  background-image: linear-gradient(#ffd800, #eb8c00);\n  max-height: max-content;\n  overflow: hidden;\n  "," {\n    max-height: 200px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),kt=Object(g.e)(gt.a)(rt||(rt=Object(O.a)(["\n  display: flex;\n  flex-direction: column-reverse;\n\n  "," {\n    flex-direction: row;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Et=Object(g.e)(v.R)(ct||(ct=Object(O.a)(["\n  flex-direction: column;\n  flex: 1;\n  padding-bottom: 40px;\n  padding-top: 24px;\n  "," {\n    padding-top: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Tt=g.e.div(at||(at=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0.5;\n\n  & img {\n    width: 80%;\n    margin-top: 24px;\n  }\n\n  "," {\n    & img {\n      margin-top: 0;\n    }\n  }\n\n  "," {\n    flex: 0.8;\n  }\n\n  "," {\n    & img {\n      margin-top: -25px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md}),(function(e){return e.theme.mediaQueries.lg})),zt=Object(g.e)(v.R)(it||(it=Object(O.a)(["\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n\n  "," {\n    max-width: 640px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Nt=Object(g.e)(v.Sb)(ot||(ot=Object(O.a)(["\n  :empty {\n    margin-right: 0;\n  }\n"]))),Ct=function(e){var t=e.currentLotteryPrize,n=Object(w.b)().t,r=Object(Q.T)().times(t),c=Object(K.f)(r),a=r.isNaN()?c.toString():"-",i=n("Over %amount% in Prizes!",{amount:a}).split(a),o=Object(z.a)(i,2),s=o[0],u=o[1];return Object(M.jsx)(St,{children:Object(M.jsxs)(kt,{children:[Object(M.jsxs)(Et,{children:[Object(M.jsx)(yt,{children:n("Lottery Now Live")}),Object(M.jsxs)(zt,{children:[Object(M.jsx)(Nt,{fontSize:"40px",color:"#ffffff",bold:!0,mr:"8px",children:s}),Object(M.jsx)(M.Fragment,{children:r.isNaN()?Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(v.Ib,{height:40,width:120,mb:"10px",mt:"10px",mr:"8px"})}):Object(M.jsx)(jt.a,{fontSize:"40px",color:"#ffffff",bold:!0,prefix:"$",mr:"8px",decimals:0,value:c})}),Object(M.jsx)(v.Sb,{fontSize:"40px",color:"#ffffff",bold:!0,children:u})]}),Object(M.jsx)(je.b,{exact:!0,activeClassName:"active",to:"/lottery",id:"lottery-pot-banner",children:Object(M.jsxs)(v.q,{children:[Object(M.jsx)(v.Sb,{color:"white",bold:!0,fontSize:"16px",mr:"4px",children:n("Play Now")}),Object(M.jsx)(v.e,{color:"white"})]})})]}),Object(M.jsx)(Tt,{children:Object(M.jsx)(wt.a,{url:"https://soundcloud.com/linkin_park/in-the-end"})})]})})},Rt=n(78),Pt=function(){var e=Object(Re.a)().slowRefresh,t=Object(m.useState)(null),n=Object(z.a)(t,2),r=n[0],c=n[1],a=Object(m.useState)(null),i=Object(z.a)(a,2),o=i[0],s=i[1];return Object(m.useEffect)((function(){(function(){var e=Object(T.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Rt.a)();case 2:t=e.sent,n=t.currentLotteryId,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(m.useEffect)((function(){r&&function(){var e=Object(T.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Rt.b)(r);case 2:t=e.sent,n=t.amountCollectedInCake,s(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,e,s]),{currentLotteryPrize:o}},Ft=g.e.div(st||(st=Object(O.a)(["\n  align-items: center;\n  // background-image: url('/images/pan-bg-mobile.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    // background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),At=Object(g.e)(v.i)(ut||(ut=Object(O.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Lt=Object(g.e)(v.i)(lt||(lt=Object(O.a)(["\n  align-items: start;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),_t=function(){Object(w.b)().t;var e=Pt().currentLotteryPrize;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Ct,{currentLotteryPrize:e}),Object(M.jsxs)(y.a,{className:"backbg",children:[Object(M.jsx)(Ft,{children:Object(M.jsx)(v.T,{as:"h1",scale:"xl",mb:"24px",color:"secondary",className:"bn-head",children:Object(M.jsx)("img",{src:"images/LogoName.png",alt:"logo"})})}),Object(M.jsxs)("div",{children:[Object(M.jsxs)(At,{children:[Object(M.jsx)(ne,{}),Object(M.jsx)(ht,{})]}),Object(M.jsxs)(Lt,{children:[Object(M.jsx)(xe,{}),Object(M.jsx)(Ne,{}),Object(M.jsx)(xt,{currentLotteryPrize:e})]}),Object(M.jsxs)(At,{children:[Object(M.jsx)(ie,{}),Object(M.jsx)(se,{})]})]})]})]})}}}]);
//# sourceMappingURL=12.1c7fcb6f.chunk.js.map