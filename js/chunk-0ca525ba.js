(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ca525ba"],{"0ab9":function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),r={class:"container"},a=Object(n["createStaticVNode"])('<ul class="list-unstyled d-flex d-md-none justify-content-center p-0 m-0"><li class="step-item rounded-start"><span><i class="bi bi-pen"></i><strong class="ms-1">填寫</strong></span></li><li class="step-item active"><span><i class="bi bi-envelope"></i><strong class="ms-1">確認</strong></span></li><li class="step-item rounded-end"><span><i class="bi bi-send-check"></i><strong class="ms-1">完成</strong></span></li></ul>',1),o={class:"row row-cols-1 row-cols-md-2 flex-md-row-reverse g-4"},l={class:"col"},s={class:"card bg-light bg-md-white border border-0"},d={class:"card-body pb-0 pb-md-3"},i={class:"table-responsive mt-3"},b={class:"table align-middle m-0"},m=Object(n["createElementVNode"])("th",{class:"text-start"},"已選購",-1),u={class:"text-end text-secondary",colspan:"2"},p=Object(n["createElementVNode"])("i",{class:"bi bi-exclamation-diamond"},null,-1),O={class:"text-end"},j=Object(n["createElementVNode"])("td",{colspan:"2",class:"py-2 ps-2"},"總計",-1),h={class:"text-end pe-2"},E={class:"col mb-3"},f={class:"card bg-light bg-md-white border border-0"},N={class:"card-body pt-0 pt-md-3"},V={class:"d-flex flex-column"},g=Object(n["createStaticVNode"])('<ul class="list-unstyled d-none d-md-flex justify-content-center p-0 m-0"><li class="step-item rounded-start"><span><i class="bi bi-pen"></i><strong class="ms-1">填寫</strong></span></li><li class="step-item active"><span><i class="bi bi-envelope"></i><strong class="ms-1">確認</strong></span></li><li class="step-item rounded-end"><span><i class="bi bi-send-check"></i><strong class="ms-1">完成</strong></span></li></ul>',1),y={class:"text-primary"},v=Object(n["createElementVNode"])("h2",{class:"title-about h4 text-center"},"收件訊息",-1),x={class:"table"},k=Object(n["createElementVNode"])("th",null,"姓名",-1),S=Object(n["createElementVNode"])("th",null,"電話",-1),w=Object(n["createElementVNode"])("th",null,"地址",-1),B=Object(n["createElementVNode"])("th",{width:"100"},"Email",-1),D=Object(n["createElementVNode"])("th",null,"付款方式",-1),L={key:0},$=Object(n["createElementVNode"])("th",null,"留言",-1),_={key:1},I=Object(n["createElementVNode"])("th",null,"付款狀態",-1),C=Object(n["createElementVNode"])("td",null,"尚未付款",-1),F=[I,C],T={key:0,class:"text-end"},z=Object(n["createElementVNode"])("button",{class:"btn btn-primary"},"付款",-1),J=[z];function M(e,t,c,I,C,z){var M=Object(n["resolveComponent"])("Loading");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(M,{active:C.isLoading},null,8,["active"]),Object(n["createElementVNode"])("div",r,[a,Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("table",b,[Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[m,Object(n["createElementVNode"])("th",u,[Object(n["createElementVNode"])("small",null,[p,Object(n["createTextVNode"])(" 使用期限至 "+Object(n["toDisplayString"])(e.$filters.date(C.deadline)),1)])])])]),Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(C.order.products,(function(t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:t.id},[Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.product.title),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.qty)+" / 張 ("+Object(n["toDisplayString"])(t.product.unit)+")",1),Object(n["createElementVNode"])("td",O,Object(n["toDisplayString"])(e.$filters.currency(t.final_total)),1)])})),128))]),Object(n["createElementVNode"])("tfoot",null,[j,Object(n["createElementVNode"])("td",h,Object(n["toDisplayString"])(e.$filters.currency(C.order.total)),1)])])])])])]),Object(n["createElementVNode"])("div",E,[Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("div",N,[Object(n["createElementVNode"])("div",V,[g,Object(n["createElementVNode"])("div",y,[v,Object(n["createElementVNode"])("form",{onSubmit:t[0]||(t[0]=Object(n["withModifiers"])((function(){return z.payOrder&&z.payOrder.apply(z,arguments)}),["prevent"]))},[Object(n["createElementVNode"])("table",x,[Object(n["createElementVNode"])("tbody",null,[Object(n["createElementVNode"])("tr",null,[k,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(C.order.user.name),1)]),Object(n["createElementVNode"])("tr",null,[S,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(C.order.user.tel),1)]),Object(n["createElementVNode"])("tr",null,[w,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(C.order.user.address),1)]),Object(n["createElementVNode"])("tr",null,[B,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(C.order.user.email),1)]),Object(n["createElementVNode"])("tr",null,[D,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(C.payment_method),1)]),C.order.message?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",L,[$,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(C.order.message),1)])):Object(n["createCommentVNode"])("",!0),!1===C.order.is_paid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",_,F)):Object(n["createCommentVNode"])("",!0)])]),!1===C.order.is_paid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",T,J)):Object(n["createCommentVNode"])("",!0)],32)])])])])])])])],64)}c("99af");var q={data:function(){return{orderId:"",order:{user:{}},payment_method:"",deadline:0,isLoading:!1}},methods:{getOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/order/").concat(this.orderId);this.isLoading=!0,this.$http.get(t).then((function(t){if(e.isLoading=!1,t.data.success){e.order=t.data.order;var c=60,n=60*c,r=24*n;e.deadline=e.order.create_at+3*r}}))},payOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/pay/").concat(this.orderId);this.isLoading=!0,this.$http.post(t).then((function(t){e.isLoading=!1,t.data.success&&e.$router.push("/cart/ispaid")}))}},created:function(){this.orderId=this.$route.params.orderId,this.payment_method=this.$route.params.payment,this.getOrder()}},A=c("6b0d"),X=c.n(A);const G=X()(q,[["render",M]]);t["default"]=G},"1dde":function(e,t,c){var n=c("d039"),r=c("b622"),a=c("2d00"),o=r("species");e.exports=function(e){return a>=51||!n((function(){var t=[],c=t.constructor={};return c[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,c){"use strict";var n=c("a04b"),r=c("9bf2"),a=c("5c6c");e.exports=function(e,t,c){var o=n(t);o in e?r.f(e,o,a(0,c)):e[o]=c}},"99af":function(e,t,c){"use strict";var n=c("23e7"),r=c("da84"),a=c("d039"),o=c("e8b5"),l=c("861d"),s=c("7b0b"),d=c("07fa"),i=c("8418"),b=c("65f0"),m=c("1dde"),u=c("b622"),p=c("2d00"),O=u("isConcatSpreadable"),j=9007199254740991,h="Maximum allowed index exceeded",E=r.TypeError,f=p>=51||!a((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),N=m("concat"),V=function(e){if(!l(e))return!1;var t=e[O];return void 0!==t?!!t:o(e)},g=!f||!N;n({target:"Array",proto:!0,forced:g},{concat:function(e){var t,c,n,r,a,o=s(this),l=b(o,0),m=0;for(t=-1,n=arguments.length;t<n;t++)if(a=-1===t?o:arguments[t],V(a)){if(r=d(a),m+r>j)throw E(h);for(c=0;c<r;c++,m++)c in a&&i(l,m,a[c])}else{if(m>=j)throw E(h);i(l,m++,a)}return l.length=m,l}})},b0c0:function(e,t,c){var n=c("83ab"),r=c("5e77").EXISTS,a=c("e330"),o=c("9bf2").f,l=Function.prototype,s=a(l.toString),d=/^\s*function ([^ (]*)/,i=a(d.exec),b="name";n&&!r&&o(l,b,{configurable:!0,get:function(){try{return i(d,s(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-0ca525ba.js.map