(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[22],{1622:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Je}));var a,r=n(8),c=n(15),i=n(10),s=n(0),o=n(67),l=n(112),d=n(14),b=n.n(d),u=n(32),j=n(2),p=n(263),x=n(5),O=n(235),m=n(183),f=n(28),h=n(218),g=n(17),v=n(23),y=n(264),k=n(93),w=n(204),S=n(200),A=n(407),T=n(404),C=n(141),q=n(1),R=x.e.div(a||(a=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),L=function(e){var t=e.onClick,n=e.expanded,a=Object(g.b)().t;return Object(q.jsxs)(R,{"aria-label":a("Hide or show expandable content"),role:"button",onClick:function(){return t()},children:[Object(q.jsx)(j.Sb,{color:"primary",bold:!0,children:a(n?"Hide":"Details")}),n?Object(q.jsx)(j.I,{}):Object(q.jsx)(j.F,{})]})};L.defaultProps={expanded:!1};var D,F,N,B,I,P,U,E,z,M,Q,W,V,G,H,_,K,X,J,Y=L,$=n(42),Z=n(20),ee=n(150),te=x.e.div(D||(D=Object(i.a)(["\n  margin-top: 24px;\n"]))),ne=Object(x.e)(j.db)(F||(F=Object(i.a)(["\n  font-weight: 400;\n"]))),ae=function(e){var t=e.bscScanAddress,n=e.infoAddress,a=e.removed,r=e.totalValueFormatted,c=e.lpLabel,i=e.addLiquidityUrl,s=Object(g.b)().t;return Object(q.jsxs)(te,{children:[Object(q.jsxs)(j.R,{justifyContent:"space-between",children:[Object(q.jsxs)(j.Sb,{children:[s("Total Liquidity"),":"]}),r?Object(q.jsx)(j.Sb,{children:r}):Object(q.jsx)(j.Ib,{width:75,height:25})]}),!a&&Object(q.jsx)(ne,{href:i,children:s("Get %symbol%",{symbol:c})}),Object(q.jsx)(ne,{href:t,children:s("View Contract")}),Object(q.jsx)(ne,{href:n,children:s("See Pair Info")})]})},re=n(126),ce=n(194),ie=Object(x.e)(j.R)(N||(N=Object(i.a)(["\n  svg {\n    margin-right: 4px;\n  }\n"]))),se=Object(x.e)(j.Qb)(B||(B=Object(i.a)(["\n  margin-left: 4px;\n"]))),oe=function(e){var t=e.lpLabel,n=e.multiplier,a=e.isCommunityFarm,r=e.token,c=e.quoteToken;return Object(q.jsxs)(ie,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(q.jsx)(ce.a,{variant:"inverted",primaryToken:r,secondaryToken:c,width:64,height:64}),Object(q.jsxs)(j.R,{flexDirection:"column",alignItems:"flex-end",children:[Object(q.jsx)(j.T,{mb:"4px",children:t.split(" ")[0]}),Object(q.jsxs)(j.R,{justifyContent:"center",children:[a?Object(q.jsx)(re.b,{}):Object(q.jsx)(re.d,{}),Object(q.jsx)(se,{variant:"secondary",children:n})]})]})]})},le=n(3),de=n.n(le),be=n(12),ue=n(55),je=n(96),pe=n(51),xe=n(120),Oe=n(34),me=n(538),fe=n(539),he=n(537),ge=n(540),ve=x.e.div(I||(I=Object(i.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),ye=function(e){var t=e.stakedBalance,n=e.tokenBalance,a=e.tokenName,r=e.pid,i=e.addLiquidityUrl,l=Object(g.b)().t,d=Object(ge.a)(r).onStake,p=Object(he.a)(r).onUnstake,x=Object(o.h)(),O=Object(ue.b)(),m=Object(u.c)().account,h=Object(f.N)(a),y=function(){var e=Object(be.a)(de.a.mark((function e(t){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:O(Object(je.b)({account:m,pids:[r]}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(be.a)(de.a.mark((function e(t){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:O(Object(je.b)({account:m,pids:[r]}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=Object(s.useCallback)((function(){var e=Object(v.e)(t);return e.gt(0)&&e.lt(1e-4)?Object(v.i)(t).toLocaleString():e.toFixed(3,b.a.ROUND_DOWN)}),[t]),S=Object(j.mc)(Object(q.jsx)(me.a,{max:n,onConfirm:y,tokenName:a,addLiquidityUrl:i})),A=Object(c.a)(S,1)[0],T=Object(j.mc)(Object(q.jsx)(fe.a,{max:t,onConfirm:k,tokenName:a})),C=Object(c.a)(T,1)[0];return Object(q.jsxs)(j.R,{justifyContent:"space-between",alignItems:"center",children:[Object(q.jsxs)(j.R,{flexDirection:"column",alignItems:"flex-start",children:[Object(q.jsx)(j.T,{color:t.eq(0)?"textDisabled":"text",children:w()}),t.gt(0)&&h.gt(0)&&Object(q.jsx)(Oe.a,{fontSize:"12px",color:"textSubtle",decimals:2,value:Object(v.f)(h.times(t)),unit:" USD",prefix:"~"})]}),t.eq(0)?Object(q.jsx)(j.q,{onClick:A,disabled:["history","archived"].some((function(e){return x.pathname.includes(e)})),children:l("Stake LP")}):Object(q.jsxs)(ve,{children:[Object(q.jsx)(j.W,{variant:"tertiary",onClick:C,mr:"6px",children:Object(q.jsx)(j.ob,{color:"primary",width:"14px"})}),Object(q.jsx)(j.W,{variant:"tertiary",onClick:A,disabled:["history","archived"].some((function(e){return x.pathname.includes(e)})),children:Object(q.jsx)(j.a,{color:"primary",width:"14px"})})]})]})},ke=n(66),we=n(24),Se=n(536),Ae=function(e){var t=e.earnings,n=e.pid,a=Object(u.c)().account,r=Object(ke.a)(),i=r.toastSuccess,o=r.toastError,l=Object(g.b)().t,d=Object(s.useState)(!1),p=Object(c.a)(d,2),x=p[0],O=p[1],m=Object(Se.a)(n).onReward,h=Object(f.T)(),y=Object(ue.b)(),k=a?Object(v.e)(t):we.d,w=k.toFixed(3,b.a.ROUND_DOWN),S=k?k.multipliedBy(h).toNumber():0;return Object(q.jsxs)(j.R,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(q.jsxs)(j.R,{flexDirection:"column",alignItems:"flex-start",children:[Object(q.jsx)(j.T,{color:k.eq(0)?"textDisabled":"text",children:w}),S>0&&Object(q.jsx)(Oe.a,{fontSize:"12px",color:"textSubtle",decimals:2,value:S,unit:" USD",prefix:"~"})]}),Object(q.jsx)(j.q,{disabled:k.eq(0)||x,onClick:Object(be.a)(de.a.mark((function e(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,m();case 4:i("".concat(l("Harvested"),"!"),l("Your %symbol% earnings have been sent to your wallet!",{symbol:"FARM"})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),o(l("Error"),l("Please try again. Confirm the transaction and make sure you are paying enough gas!")),console.error(e.t0);case 11:return e.prev=11,O(!1),e.finish(11);case 14:y(Object(je.b)({account:a,pids:[n]}));case 15:case"end":return e.stop()}}),e,null,[[1,7,11,14]])}))),children:l("Harvest")})]})},Te=n(541),Ce=x.e.div(P||(P=Object(i.a)(["\n  padding-top: 16px;\n"]))),qe=function(e){var t=e.farm,n=e.account,a=e.addLiquidityUrl,r=Object(g.b)().t,i=Object(s.useState)(!1),o=Object(c.a)(i,2),l=o[0],d=o[1],u=t.pid,p=t.lpAddresses,x=t.userData||{},O=x.allowance,m=void 0===O?0:O,f=x.tokenBalance,h=void 0===f?0:f,v=x.stakedBalance,y=void 0===v?0:v,k=x.earnings,w=void 0===k?0:k,S=new b.a(m),A=new b.a(h),T=new b.a(y),C=new b.a(w),R=Object(Z.a)(p),L=n&&S&&S.isGreaterThan(0),D=Object(ue.b)(),F=Object(pe.e)(R),N=Object(Te.a)(F).onApprove,B=Object(s.useCallback)(Object(be.a)(de.a.mark((function e(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,N();case 4:D(Object(je.b)({account:n,pids:[u]})),d(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[N,D,n,u]);return Object(q.jsxs)(Ce,{children:[Object(q.jsxs)(j.R,{children:[Object(q.jsx)(j.Sb,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"4px",children:"FARM"}),Object(q.jsx)(j.Sb,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r("Earned")})]}),Object(q.jsx)(Ae,{earnings:C,pid:u}),Object(q.jsxs)(j.R,{children:[Object(q.jsx)(j.Sb,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"4px",children:t.lpSymbol}),Object(q.jsx)(j.Sb,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r("Staked")})]}),n?L?Object(q.jsx)(ye,{stakedBalance:T,tokenBalance:A,tokenName:t.lpSymbol,pid:u,addLiquidityUrl:a}):Object(q.jsx)(j.q,{mt:"8px",width:"100%",disabled:l,onClick:B,children:r("Approve Contract")}):Object(q.jsx)(xe.a,{mt:"8px",width:"100%"})]})},Re=n(535),Le=Object(x.f)(U||(U=Object(i.a)(["  \n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"]))),De=x.e.div(E||(E=Object(i.a)(["\n  background: ",";\n  background-size: 400% 400%;\n  animation: "," 2s linear infinite;\n  border-radius: 32px;\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -3px;\n  left: -1px;\n  z-index: -1;\n"])),(function(e){var t=e.theme;return"linear-gradient(180deg, ".concat(t.colors.primaryBright,", ").concat(t.colors.secondary,")")}),Le),Fe=x.e.div(z||(z=Object(i.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: ",";\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background}),(function(e){var t=e.theme;return e.isPromotedFarm?"31px":t.radii.card})),Ne=x.e.div(M||(M=Object(i.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.cardBorder})),Be=x.e.div(Q||(Q=Object(i.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),Ie=function(e){var t=e.farm,n=e.displayApr,a=e.removed,r=e.cakePrice,i=e.account,o=Object(g.b)().t,l=Object(s.useState)(!1),d=Object(c.a)(l,2),b=d[0],u=d[1],p=t.liquidity&&t.liquidity.gt(0)?"$".concat(t.liquidity.toNumber().toLocaleString(void 0,{maximumFractionDigits:0})):"",x=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("PANCAKE",""),O=t.dual?t.dual.earnLabel:o("FARM "),m=Object(ee.a)({quoteTokenAddress:t.quoteToken.address,tokenAddress:t.token.address}),f="".concat($.a,"/").concat(m),h=Object(Z.a)(t.lpAddresses),v="FARM"===t.token.symbol;return Object(q.jsxs)(Fe,{isPromotedFarm:v,children:[v&&Object(q.jsx)(De,{}),Object(q.jsx)(oe,{lpLabel:x,multiplier:t.multiplier,isCommunityFarm:t.isCommunity,token:t.token,quoteToken:t.quoteToken}),!a&&Object(q.jsxs)(j.R,{justifyContent:"space-between",alignItems:"center",children:[Object(q.jsxs)(j.Sb,{children:[o("APR"),":"]}),Object(q.jsx)(j.Sb,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apr?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Re.a,{lpLabel:x,addLiquidityUrl:f,cakePrice:r,apr:t.apr,displayApr:n}),n,"%"]}):Object(q.jsx)(j.Ib,{height:24,width:80})})]}),Object(q.jsxs)(j.R,{justifyContent:"space-between",children:[Object(q.jsxs)(j.Sb,{children:[o("Earn"),":"]}),Object(q.jsx)(j.Sb,{bold:!0,children:O})]}),Object(q.jsxs)(j.R,{justifyContent:"space-between",children:[Object(q.jsxs)(j.Sb,{children:[o("Fees"),":"]}),Object(q.jsxs)(j.Sb,{bold:!0,children:[null===t||void 0===t?void 0:t.fee,"%"]})]}),Object(q.jsx)(qe,{farm:t,account:i,addLiquidityUrl:f}),Object(q.jsx)(Ne,{}),Object(q.jsx)(Y,{onClick:function(){return u(!b)},expanded:b}),Object(q.jsx)(Be,{expanded:b,children:Object(q.jsx)(ae,{removed:a,bscScanAddress:Object(C.a)(h),infoAddress:"https://pancakeswap.info/pool/".concat(h),totalValueFormatted:p,lpLabel:x,addLiquidityUrl:f})})]})},Pe=n(545),Ue=function(e){var t,n=e.hasStakeInFinishedFarms,a=Object(o.j)().url,r=Object(o.h)(),c=Object(g.b)().t;switch(r.pathname){case"/farms":t=0;break;case"/farms/history":t=1;break;case"/farms/archived":t=2;break;default:t=0}return Object(q.jsx)(Ee,{children:Object(q.jsxs)(j.r,{activeIndex:t,scale:"sm",variant:"subtle",children:[Object(q.jsx)(j.s,{as:l.a,to:"".concat(a),children:c("Live")}),Object(q.jsx)(j.xb,{show:n,children:Object(q.jsx)(j.s,{as:l.a,to:"".concat(a,"/history"),children:c("Finished")})})]})})},Ee=x.e.div(W||(W=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n\n  "," {\n    margin-left: 16px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),ze=n(178),Me=x.e.div(V||(V=Object(i.a)(["\n  margin-left: -8px;\n\n  "," {\n    margin-left: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Qe=function(e){var t=e.viewMode,n=e.onToggle,a=function(e){t!==e&&n(e)};return Object(q.jsxs)(Me,{children:[Object(q.jsx)(j.W,{variant:"text",scale:"sm",id:"clickFarmCardView",onClick:function(){return a(ze.c.CARD)},children:Object(q.jsx)(j.z,{color:t===ze.c.CARD?"primary":"textDisabled"})}),Object(q.jsx)(j.W,{variant:"text",scale:"sm",id:"clickFarmTableView",onClick:function(){return a(ze.c.TABLE)},children:Object(q.jsx)(j.eb,{color:t===ze.c.TABLE?"primary":"textDisabled"})})]})},We=x.e.div(G||(G=Object(i.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 32px;\n\n  "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 32px;\n    margin-bottom: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Ve=x.e.div(H||(H=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),j.Sb),Ge=x.e.div(_||(_=Object(i.a)(["\n  > "," {\n    font-size: 12px;\n  }\n"])),j.Sb),He=x.e.div(K||(K=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n\n  "," {\n    width: auto;\n    padding: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),_e=x.e.div(X||(X=Object(i.a)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  "," {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Ke=Object(x.e)(j.X)(J||(J=Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 58px;\n"]))),Xe=function(e,t){return e&&t?(e+t).toLocaleString("en-US",{maximumFractionDigits:2}):e?e.toLocaleString("en-US",{maximumFractionDigits:2}):null},Je=function(){var e=Object(o.j)().path,t=Object(o.h)().pathname,n=Object(g.b)().t,a=Object(f.e)(),i=a.data,d=a.userDataLoaded,x=Object(f.T)(),C=Object(s.useState)(""),R=Object(c.a)(C,2),L=R[0],D=R[1],F=Object(h.a)(ze.c.TABLE,{localStorageKey:"pancake_farm_view"}),N=Object(c.a)(F,2),B=N[0],I=N[1],P=Object(u.c)().account,U=Object(s.useState)("hot"),E=Object(c.a)(U,2),z=E[0],M=E[1],Q=t.includes("archived"),W=t.includes("history"),V=!W&&!Q;Object(f.Q)(Q);var G=!P||!!P&&d,H=Object(s.useState)(!V),_=Object(c.a)(H,2),K=_[0],X=_[1];Object(s.useEffect)((function(){X(!V)}),[V]);var J=i.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier&&!Object(w.a)(e.pid)})),Y=i.filter((function(e){return 0!==e.pid&&"0X"===e.multiplier&&!Object(w.a)(e.pid)})),$=i.filter((function(e){return Object(w.a)(e.pid)})),Z=J.filter((function(e){return e.userData&&new b.a(e.userData.stakedBalance).isGreaterThan(0)})),ee=Y.filter((function(e){return e.userData&&new b.a(e.userData.stakedBalance).isGreaterThan(0)})),te=$.filter((function(e){return e.userData&&new b.a(e.userData.stakedBalance).isGreaterThan(0)})),ne=Object(s.useCallback)((function(e){var t=e.map((function(e){if(!e.lpTotalInQuoteToken||!e.quoteToken.busdPrice)return e;var t=new b.a(e.lpTotalInQuoteToken).times(e.quoteToken.busdPrice),n=V?Object(y.a)(new b.a(e.poolWeight),x,t,e.lpAddresses[p.a.MAINNET]):{cakeRewardsApr:0,lpRewardsApr:0},a=n.cakeRewardsApr,c=n.lpRewardsApr;return Object(r.a)(Object(r.a)({},e),{},{apr:a,lpRewardsApr:c,liquidity:t})}));if(L){var n=Object(S.a)(L.toLowerCase());t=t.filter((function(e){return Object(S.a)(e.lpSymbol.toLowerCase()).includes(n)}))}return t}),[x,L,V]),ae=Object(s.useRef)(null),re=Object(s.useState)(12),ce=Object(c.a)(re,2),ie=ce[0],se=ce[1],oe=Object(s.useState)(!1),le=Object(c.a)(oe,2),de=le[0],be=le[1],ue=Object(s.useMemo)((function(){var e=[];return V&&(e=ne(K?Z:J)),W&&(e=ne(K?ee:Y)),Q&&(e=ne(K?te:$)),function(e){switch(z){case"apr":return Object(k.orderBy)(e,(function(e){return e.apr+e.lpRewardsApr}),"desc");case"multiplier":return Object(k.orderBy)(e,(function(e){return e.multiplier?Number(e.multiplier.slice(0,-1)):0}),"desc");case"earned":return Object(k.orderBy)(e,(function(e){return e.userData?Number(e.userData.earnings):0}),"desc");case"liquidity":return Object(k.orderBy)(e,(function(e){return Number(e.liquidity)}),"desc");default:return e}}(e).slice(0,ie)}),[z,J,ne,Y,$,V,W,Q,te,ee,K,Z,ie]);Object(s.useEffect)((function(){de||(new IntersectionObserver((function(e){Object(c.a)(e,1)[0].isIntersecting&&se((function(e){return e+12}))}),{rootMargin:"0px",threshold:1}).observe(ae.current),be(!0))}),[ue,de]);var je=ue.map((function(e){var t=e.token,n=e.quoteToken,a=t.address,r=n.address,c=e.lpSymbol&&e.lpSymbol.split(" ")[0].toUpperCase().replace("PANCAKE","");return{apr:{value:Xe(e.apr,e.lpRewardsApr),multiplier:e.multiplier,lpLabel:c,tokenAddress:a,quoteTokenAddress:r,cakePrice:x,originalValue:e.apr},farm:{label:c,pid:e.pid,token:e.token,quoteToken:e.quoteToken},earned:{earnings:Object(v.f)(new b.a(e.userData.earnings)),pid:e.pid},liquidity:{liquidity:e.liquidity},fee:{fee:e.fee},multiplier:{multiplier:e.multiplier},details:e}}));return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)("div",{className:"backbg",children:[Object(q.jsx)(j.T,{as:"h1",scale:"xxl",className:"head-light",color:"secondary",mb:"24px",children:n("Farms")}),Object(q.jsx)(j.T,{scale:"lg",color:"text",className:"headtopa",children:n("Stake LP tokens to earn.")}),Object(q.jsx)(l.b,{exact:!0,activeClassName:"active",to:"/farms/auction",id:"lottery-pot-banner",className:"headtopa"}),Object(q.jsxs)(m.a,{className:"backbg",children:[Object(q.jsxs)(We,{children:[Object(q.jsxs)(_e,{children:[Object(q.jsx)(Qe,{viewMode:B,onToggle:function(e){return I(e)}}),Object(q.jsxs)(Ve,{children:[Object(q.jsx)(j.Wb,{checked:K,onChange:function(){return X(!K)},scale:"sm"}),Object(q.jsxs)(j.Sb,{children:[" ",n("Staked only")]})]}),Object(q.jsx)(Ue,{hasStakeInFinishedFarms:ee.length>0})]}),Object(q.jsxs)(He,{children:[Object(q.jsxs)(Ge,{children:[Object(q.jsx)(j.Sb,{textTransform:"uppercase",children:n("Sort by")}),Object(q.jsx)(T.a,{options:[{label:n("Hot"),value:"hot"},{label:n("APR"),value:"apr"},{label:n("Multiplier"),value:"multiplier"},{label:n("Earned"),value:"earned"},{label:n("Liquidity"),value:"liquidity"}],onChange:function(e){M(e.value)}})]}),Object(q.jsxs)(Ge,{style:{marginLeft:16},children:[Object(q.jsx)(j.Sb,{textTransform:"uppercase",children:n("Search")}),Object(q.jsx)(A.a,{onChange:function(e){D(e.target.value)},placeholder:"Search Farms"})]})]})]}),function(){if(B===ze.c.TABLE&&je.length){var t=ze.a.map((function(e){return{id:e.id,name:e.name,label:e.label,sort:function(t,n){switch(e.name){case"farm":return n.id-t.id;case"apr":return t.original.apr.value&&n.original.apr.value?Number(t.original.apr.value)-Number(n.original.apr.value):0;case"earned":return t.original.earned.earnings-n.original.earned.earnings;default:return 1}},sortable:e.sortable}}));return Object(q.jsx)(Pe.a,{data:je,columns:t,userDataReady:G})}return Object(q.jsx)("div",{children:Object(q.jsxs)(O.a,{children:[Object(q.jsx)(o.b,{exact:!0,path:"".concat(e),children:ue.map((function(e){return Object(q.jsx)(Ie,{farm:e,displayApr:Xe(e.apr,e.lpRewardsApr),cakePrice:x,account:P,removed:!1},e.pid)}))}),Object(q.jsx)(o.b,{exact:!0,path:"".concat(e,"/history"),children:ue.map((function(e){return Object(q.jsx)(Ie,{farm:e,displayApr:Xe(e.apr,e.lpRewardsApr),cakePrice:x,account:P,removed:!0},e.pid)}))}),Object(q.jsx)(o.b,{exact:!0,path:"".concat(e,"/archived"),children:ue.map((function(e){return Object(q.jsx)(Ie,{farm:e,displayApr:Xe(e.apr,e.lpRewardsApr),cakePrice:x,account:P,removed:!0},e.pid)}))})]})})}(),Object(q.jsx)("div",{ref:ae}),Object(q.jsx)(Ke,{src:"/images/decorations/3dpan.png",alt:"Pancake illustration",width:460,height:103})]})]})})}}}]);
//# sourceMappingURL=22.1a08eb60.chunk.js.map