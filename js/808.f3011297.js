(self["webpackChunkbiscuit_paradise"]=self["webpackChunkbiscuit_paradise"]||[]).push([[808],{8803:function(t,e,s){
/*!
  * Bootstrap toast.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,a){t.exports=a(s(1884),s(4130),s(9069),s(1437))})(0,(function(t,e,s,a){"use strict";const n="toast",i="bs.toast",o=`.${i}`,r=`mouseover${o}`,c=`mouseout${o}`,l=`focusin${o}`,u=`focusout${o}`,h=`hide${o}`,d=`hidden${o}`,m=`show${o}`,_=`shown${o}`,g="fade",p="hide",v="show",f="showing",b={animation:"boolean",autohide:"boolean",delay:"number"},k={animation:!0,autohide:!0,delay:5e3};class w extends t{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return k}static get DefaultType(){return b}static get NAME(){return n}show(){const t=e.trigger(this._element,m);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(g);const s=()=>{this._element.classList.remove(f),e.trigger(this._element,_),this._maybeScheduleHide()};this._element.classList.remove(p),a.reflow(this._element),this._element.classList.add(v,f),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=e.trigger(this._element,h);if(t.defaultPrevented)return;const s=()=>{this._element.classList.add(p),this._element.classList.remove(f,v),e.trigger(this._element,d)};this._element.classList.add(f),this._queueCallback(s,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(v),super.dispose()}isShown(){return this._element.classList.contains(v)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){e.on(this._element,r,(t=>this._onInteraction(t,!0))),e.on(this._element,c,(t=>this._onInteraction(t,!1))),e.on(this._element,l,(t=>this._onInteraction(t,!0))),e.on(this._element,u,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=w.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return s.enableDismissTrigger(w),a.defineJQueryPlugin(w),w}))},7106:function(t,e,s){"use strict";s.d(e,{Z:function(){return w}});var a=s(3396);const n={class:"toast-container position-fixed pe-3 top-0 end-0",style:{"z-index":"1050",height:"30vh"}};function i(t,e,s,i,o,r){const c=(0,a.up)("ToastComp");return(0,a.wg)(),(0,a.iD)("div",n,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.messages,((t,e)=>((0,a.wg)(),(0,a.j4)(c,{key:e,msg:t},null,8,["msg"])))),128))])}s(560);var o=s(7139);const r={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},c={class:"toast-header"},l={class:"me-auto"},u=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),h={key:0,class:"toast-body"};function d(t,e,s,n,i,d){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",c,[(0,a._)("span",{class:(0,o.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,a._)("strong",l,(0,o.zw)(s.msg.title),1),u]),s.msg.content?((0,a.wg)(),(0,a.iD)("div",h,(0,o.zw)(s.msg.content),1)):(0,a.kq)("",!0)],512)}var m=s(8803),_=s.n(m),g={props:["msg"],mounted(){const t=this.$refs.toast,e=new(_())(t,{delay:6e3});e.show()}},p=s(89);const v=(0,p.Z)(g,[["render",d]]);var f=v,b={components:{ToastComp:f},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e,title:s,content:a}=t;this.messages.push({style:e,title:s,content:a})}))}};const k=(0,p.Z)(b,[["render",i]]);var w=k},5808:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return y}});var a=s(3396);const n={class:"container-fluid mt-3 position-relative"};function i(t,e,s,i,o,r){const c=(0,a.up)("NavbarComp"),l=(0,a.up)("ToastMessages"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),(0,a._)("div",n,[(0,a.Wm)(l),(0,a.Wm)(u)])],64)}s(560);var o=s(5820),r=s(7106),c=s(9242);const l=t=>((0,a.dD)("data-v-1ad8caac"),t=t(),(0,a.Cn)(),t),u={class:"navbar navbar-expand-lg navbar-dark bg-dark"},h={class:"container-fluid"},d=l((()=>(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1))),m={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},_={class:"navbar-nav"};function g(t,e,s,n,i,o){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",u,[(0,a._)("div",h,[(0,a.Wm)(r,{class:"navbar-brand",to:"/dashboard/products","exact-active-class":"link-light"},{default:(0,a.w5)((()=>[(0,a.Uk)("管理者後台")])),_:1}),d,(0,a._)("div",m,[(0,a._)("div",_,[(0,a.Wm)(r,{to:"/dashboard/products",class:"nav-link","exact-active-class":"link-light"},{default:(0,a.w5)((()=>[(0,a.Uk)("產品")])),_:1}),(0,a.Wm)(r,{to:"/dashboard/orders",class:"nav-link","exact-active-class":"link-light"},{default:(0,a.w5)((()=>[(0,a.Uk)("訂單")])),_:1}),(0,a.Wm)(r,{to:"/dashboard/coupons",class:"nav-link","exact-active-class":"link-light"},{default:(0,a.w5)((()=>[(0,a.Uk)("優惠券")])),_:1}),(0,a._)("a",{href:"#",onClick:e[0]||(e[0]=(0,c.iM)(((...t)=>o.logout&&o.logout(...t)),["prevent"])),class:"nav-link","exact-active-class":"link-light"},"登出")])])])])}var p={methods:{logout(){const t="https://vue3-course-api.hexschool.io/logout";this.$http.post(t,this.user).then((t=>{t.data.success&&this.$router.push("/login")}))}}},v=s(89);const f=(0,v.Z)(p,[["render",g],["__scopeId","data-v-1ad8caac"]]);var b=f,k={components:{NavbarComp:b,ToastMessages:r.Z},provide(){return{emitter:o.Z}},created(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t;const e="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(e).then((t=>{t.data.success||this.$router.push("/login")}))}};const w=(0,v.Z)(k,[["render",i]]);var y=w}}]);
//# sourceMappingURL=808.f3011297.js.map