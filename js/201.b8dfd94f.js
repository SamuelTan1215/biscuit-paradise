"use strict";(self["webpackChunkbiscuit_paradise"]=self["webpackChunkbiscuit_paradise"]||[]).push([[201],{4569:function(t,e,a){a.d(e,{Z:function(){return y}});var l=a(3396),i=a(9242),r=a(7139);const s={"aria-label":"Page navigation example"},d={class:"pagination justify-content-center"},n={class:"page-item"},o=(0,l._)("span",{"aria-hidden":"true"},"«",-1),u=[o],p=["onClick"],c={class:"page-item"},_=(0,l._)("span",{"aria-hidden":"true"},"»",-1),m=[_];function h(t,e,a,o,_,h){return(0,l.wg)(),(0,l.iD)("nav",s,[(0,l._)("ul",d,[(0,l._)("li",n,[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,i.iM)((t=>h.goPrev(a.currentPageInside)),["prevent"]))},u)]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pages.total_pages,(t=>((0,l.wg)(),(0,l.iD)("li",{class:(0,r.C_)(["page-item",{active:t===a.pages.current_page}]),key:t},[(0,l._)("a",{class:"page-link",href:"#",onClick:(0,i.iM)((e=>h.updatePage(t)),["prevent"])},(0,r.zw)(t),9,p)],2)))),128)),(0,l._)("li",c,[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,i.iM)((t=>h.goNext(a.currentPageInside)),["prevent"]))},m)])])])}var g={props:["pages","currentPageInside"],methods:{updatePage(t){this.$emit("emit-pages",t)},goNext(t){t+=1,this.$emit("go-Next",t)},goPrev(t){t-=1,this.$emit("go-Prev",t)}}},b=a(89);const w=(0,b.Z)(g,[["render",h]]);var y=w},9998:function(t,e,a){a.r(e),a.d(e,{default:function(){return nt}});var l=a(3396),i=a(7139),r=a(9242);const s={class:"table mt-4"},d=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"購買時間"),(0,l._)("th",null,"Email"),(0,l._)("th",null,"購買款項"),(0,l._)("th",null,"應付金額"),(0,l._)("th",null,"是否付款"),(0,l._)("th",null,"編輯")])],-1),n=["textContent"],o={class:"list-unstyled"},u={class:"text-right"},p={class:"form-check form-switch"},c=["id","onUpdate:modelValue","onChange"],_=["for"],m={key:0},h={key:1},g={class:"btn-group"},b=["onClick"],w=["onClick"];function y(t,e,a,y,k,f){const v=(0,l.up)("LoadingComp"),O=(0,l.up)("OrderModal"),D=(0,l.up)("DelModalComp"),P=(0,l.up)("Pagination");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(v,{active:k.isLoading},null,8,["active"]),(0,l._)("table",s,[d,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(k.orders,((e,a)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:a},[k.orders.length?((0,l.wg)(),(0,l.iD)("tr",{key:0,class:(0,i.C_)({"text-secondary":!e.is_paid})},[(0,l._)("td",null,(0,i.zw)(t.$formatFilters.date(e.create_at)),1),(0,l._)("td",null,[e.user?((0,l.wg)(),(0,l.iD)("span",{key:0,textContent:(0,i.zw)(e.user.email)},null,8,n)):(0,l.kq)("",!0)]),(0,l._)("td",null,[(0,l._)("ul",o,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.products,((t,e)=>((0,l.wg)(),(0,l.iD)("li",{key:e},(0,i.zw)(t.product.title)+" 數量："+(0,i.zw)(t.qty)+" "+(0,i.zw)(t.product.unit),1)))),128))])]),(0,l._)("td",u,(0,i.zw)(t.$formatFilters.currency(e.total)),1),(0,l._)("td",null,[(0,l._)("div",p,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${e.id}`,"onUpdate:modelValue":t=>e.is_paid=t,onChange:t=>f.updatePaid(e)},null,40,c),[[r.e8,e.is_paid]]),(0,l._)("label",{class:"form-check-label",for:`paidSwitch${e.id}`},[e.is_paid?((0,l.wg)(),(0,l.iD)("span",m,"已付款")):((0,l.wg)(),(0,l.iD)("span",h,"未付款"))],8,_)])]),(0,l._)("td",null,[(0,l._)("div",g,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>f.openModal(!1,e)},"檢視",8,b),(0,l._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>f.openDelOrderModal(e)},"刪除",8,w)])])],2)):(0,l.kq)("",!0)],64)))),128))])]),(0,l.Wm)(O,{order:k.tempOrder,ref:"orderModal",onUpdatePaid:f.updatePaid},null,8,["order","onUpdatePaid"]),(0,l.Wm)(D,{item:k.tempOrder,ref:"delModal",onDelItem:f.delOrder},null,8,["item","onDelItem"]),(0,l.Wm)(P,{pages:k.pagination,onEmitPages:f.getOrders},null,8,["pages","onEmitPages"])],64)}var k=a(8783);const f={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},v={class:"modal-dialog modal-xl",role:"document"},O={class:"modal-content border-0"},D=(0,l._)("div",{class:"modal-header bg-dark text-white"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,l._)("span",null,"訂單細節")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),P={class:"modal-body"},x={class:"row"},M={class:"col-md-4"},$=(0,l._)("h3",null,"用戶資料",-1),C={class:"table"},z={key:0},L=(0,l._)("th",{style:{width:"100px"}},"姓名",-1),Z=(0,l._)("th",null,"Email",-1),F=(0,l._)("th",null,"電話",-1),H=(0,l._)("th",null,"地址",-1),N={class:"col-md-8"},Y=(0,l._)("h3",null,"訂單細節",-1),q={class:"table"},I=(0,l._)("th",{style:{width:"100px"}},"訂單編號",-1),E=(0,l._)("th",null,"下單時間",-1),K=(0,l._)("th",null,"付款時間",-1),U={key:0},W={key:1},j=(0,l._)("th",null,"付款狀態",-1),S={key:0,class:"text-success"},V={key:1,class:"text-muted"},A=(0,l._)("th",null,"總金額",-1),B=(0,l._)("h3",null,"選購商品",-1),G={class:"table"},J=(0,l._)("thead",null,[(0,l._)("tr")],-1),Q={class:"text-end"},R={class:"modal-footer"},T=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function X(t,e,a,r,s,d){return(0,l.wg)(),(0,l.iD)("div",f,[(0,l._)("div",v,[(0,l._)("div",O,[D,(0,l._)("div",P,[(0,l._)("div",x,[(0,l._)("div",M,[$,(0,l._)("table",C,[s.tempOrder.user?((0,l.wg)(),(0,l.iD)("tbody",z,[(0,l._)("tr",null,[L,(0,l._)("td",null,(0,i.zw)(s.tempOrder.user.name),1)]),(0,l._)("tr",null,[Z,(0,l._)("td",null,(0,i.zw)(s.tempOrder.user.email),1)]),(0,l._)("tr",null,[F,(0,l._)("td",null,(0,i.zw)(s.tempOrder.user.tel),1)]),(0,l._)("tr",null,[H,(0,l._)("td",null,(0,i.zw)(s.tempOrder.user.address),1)])])):(0,l.kq)("",!0)])]),(0,l._)("div",N,[Y,(0,l._)("table",q,[(0,l._)("tbody",null,[(0,l._)("tr",null,[I,(0,l._)("td",null,(0,i.zw)(s.tempOrder.id),1)]),(0,l._)("tr",null,[E,(0,l._)("td",null,(0,i.zw)(t.$formatFilters.date(s.tempOrder.create_at)),1)]),(0,l._)("tr",null,[K,(0,l._)("td",null,[s.tempOrder.paid_date?((0,l.wg)(),(0,l.iD)("span",U,(0,i.zw)(t.$formatFilters.date(s.tempOrder.paid_date)),1)):((0,l.wg)(),(0,l.iD)("span",W,"時間不正確"))])]),(0,l._)("tr",null,[j,(0,l._)("td",null,[s.tempOrder.is_paid?((0,l.wg)(),(0,l.iD)("strong",S,"已付款")):((0,l.wg)(),(0,l.iD)("span",V,"尚未付款"))])]),(0,l._)("tr",null,[A,(0,l._)("td",null,(0,i.zw)(t.$formatFilters.currency(s.tempOrder.total)),1)])])]),B,(0,l._)("table",G,[J,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.tempOrder.products,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("th",null,(0,i.zw)(e.product.title),1),(0,l._)("td",null,(0,i.zw)(e.qty)+" / "+(0,i.zw)(e.product.unit),1),(0,l._)("td",Q,(0,i.zw)(t.$formatFilters.currency(e.final_total)),1)])))),128))])])])])]),(0,l._)("div",R,[T,(0,l._)("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal",onClick:e[0]||(e[0]=e=>t.$emit("update-order",s.tempOrder))},"確認")])])])],512)}var tt=a(1339),et={props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-product"],mixins:[tt.Z],inject:["emitter"],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},at=a(89);const lt=(0,at.Z)(et,[["render",X]]);var it=lt,rt=a(4569),st={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:rt.Z,DelModalComp:k.Z,OrderModal:it},methods:{getOrders(t=1){this.currentPage=t;const e=`https://vue3-course-api.hexschool.io/api/samtgy-api/admin/orders?page=${t}`;this.isLoading=!0,this.$http.get(e,this.tempProduct).then((t=>{this.orders=t.data.orders,this.pagination=t.data.pagination,this.isLoading=!1}))},openModal(t,e){this.tempOrder={...e},this.isNew=!1;const a=this.$refs.orderModal;a.showModal()},openDelOrderModal(t){this.tempOrder={...t};const e=this.$refs.delModal;e.showModal()},updatePaid(t){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/samtgy-api/admin/order/${t.id}`,a={is_paid:t.is_paid};this.$http.put(e,{data:a}).then((t=>{this.isLoading=!1,this.getOrders(this.currentPage),this.$httpMessageState(t,"更新付款狀態")}))},delOrder(){const t=`https://vue3-course-api.hexschool.io/api/samtgy-api/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(t).then((()=>{const t=this.$refs.delModal;t.hideModal(),this.getOrders(this.currentPage)}))}},created(){this.getOrders()}};const dt=(0,at.Z)(st,[["render",y]]);var nt=dt}}]);
//# sourceMappingURL=201.b8dfd94f.js.map