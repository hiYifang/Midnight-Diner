(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9beae3ec"],{"1dde":function(e,t,c){var o=c("d039"),a=c("b622"),n=c("2d00"),r=a("species");e.exports=function(e){return n>=51||!o((function(){var t=[],c=t.constructor={};return c[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,c){"use strict";var o=c("a04b"),a=c("9bf2"),n=c("5c6c");e.exports=function(e,t,c){var r=o(t);r in e?a.f(e,r,n(0,c)):e[r]=c}},9091:function(e,t,c){"use strict";c.r(t);c("b0c0");var o=c("7a23"),a={key:0,class:"container"},n=Object(o["createStaticVNode"])('<ul class="list-unstyled d-flex d-md-none justify-content-center p-0 m-0"><li class="step-item rounded-start active"><span><i class="bi bi-pen"></i><strong class="ms-1">填寫</strong></span></li><li class="step-item"><span><i class="bi bi-envelope"></i><strong class="ms-1">確認</strong></span></li><li class="step-item rounded-end"><span><i class="bi bi-send-check"></i><strong class="ms-1">完成</strong></span></li></ul>',1),r={key:0,class:"row row-cols-1 row-cols-md-2 flex-md-row-reverse g-4"},l={class:"col mb-0 mb-md-3"},s={class:"card bg-light bg-md-white border border-0"},i={class:"card-body pb-0 pb-md-3"},d=Object(o["createElementVNode"])("i",{class:"bi bi-chevron-left"},null,-1),m=Object(o["createTextVNode"])(" 繼續購物 "),u={class:"table align-middle m-0"},b=Object(o["createElementVNode"])("th",null,"選購內容",-1),p={class:"text-end",colspan:"2"},f={style:{width:"100px"}},O={class:"d-flex flex-column"},j={class:"input-group align-items-center input-group-sm"},h=["disabled","onChange","onUpdate:modelValue"],V={class:"input-group-text"},g={class:"text-end"},v=["disabled","onClick"],N=Object(o["createElementVNode"])("i",{class:"bi bi-x"},null,-1),E=[N],y={colspan:"3"},x={class:"input-group input-group-sm"},C={class:"input-group-append"},k={key:0},L=Object(o["createElementVNode"])("td",{colspan:"2",class:"text-end text-secondary border border-0"}," 折扣價 ",-1),w={class:"text-end text-secondary border border-0"},_={class:"col mb-3"},S={class:"card bg-light bg-md-white border border-0"},I={class:"card-body pt-0 pt-md-3"},z={class:"d-flex flex-column"},B=Object(o["createStaticVNode"])('<ul class="list-unstyled d-none d-md-flex justify-content-center p-0 m-0"><li class="step-item rounded-start active"><span><i class="bi bi-pen"></i><strong class="ms-1">填寫</strong></span></li><li class="step-item"><span><i class="bi bi-envelope"></i><strong class="ms-1">確認</strong></span></li><li class="step-item rounded-end"><span><i class="bi bi-send-check"></i><strong class="ms-1">完成</strong></span></li></ul>',1),D={class:"text-primary"},$=Object(o["createElementVNode"])("h2",{class:"title-about h4 text-center"},"收件資料",-1),q={class:"row g-2"},U={class:"col-md mb-3"},T={class:"form-floating"},M=Object(o["createElementVNode"])("label",{for:"name"}," 姓名 ",-1),P={class:"col-md mb-3"},F={class:"form-floating"},A=Object(o["createElementVNode"])("label",{for:"tel"}," 電話 ",-1),J={class:"form-floating mb-3"},R=Object(o["createElementVNode"])("label",{for:"address"}," 地址 ",-1),X={class:"form-floating mb-3"},G=Object(o["createElementVNode"])("label",{for:"email"}," Email ",-1),H={class:"row g-2"},K={class:"col-md mb-3"},Q={class:"form-floating"},W=Object(o["createElementVNode"])("option",{value:"Visa"},"Visa",-1),Y=Object(o["createElementVNode"])("option",{value:"LinePay"},"LinePay",-1),Z=Object(o["createElementVNode"])("option",{value:"Paypal"},"Paypal",-1),ee=[W,Y,Z],te=Object(o["createElementVNode"])("label",{for:"payment"},"付款方式",-1),ce={class:"col-md mb-3"},oe={class:"form-floating"},ae=Object(o["createElementVNode"])("label",{for:"message"}," 留言 ",-1),ne=Object(o["createElementVNode"])("div",{class:"text-end"},[Object(o["createElementVNode"])("button",{class:"btn btn-primary",type:"submit"}," 送出訂單 ")],-1),re={key:1,class:"d-flex flex-column justify-content-center align-items-center",style:{"min-height":"60vh"}},le=Object(o["createElementVNode"])("p",{class:"text-secondary my-2"},"購物車內沒有商品!",-1),se=Object(o["createTextVNode"])(" 前往購物 ");function ie(e,t,c,N,W,Y){var Z=Object(o["resolveComponent"])("Loading"),ie=Object(o["resolveComponent"])("router-link"),de=Object(o["resolveComponent"])("Field"),me=Object(o["resolveComponent"])("ErrorMessage"),ue=Object(o["resolveComponent"])("Form");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(Z,{active:W.isLoading},null,8,["active"]),W.cartLen>0?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[n,W.cartLen>0?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("div",i,[Object(o["createVNode"])(ie,{to:{path:"/foods",query:{selectedCategory:"all"}},role:"button",class:"card-link link-secondary text-decoration-none"},{default:Object(o["withCtx"])((function(){return[d,m]})),_:1}),Object(o["createElementVNode"])("div",{class:"table-responsive mt-3",style:Object(o["normalizeStyle"])(W.cartLen>2?"max-height: 400px":"")},[Object(o["createElementVNode"])("table",u,[Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[b,Object(o["createElementVNode"])("th",p," 已選購 "+Object(o["toDisplayString"])(W.cartLen)+" 項 ",1)])]),Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(W.cart.carts,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:t.id},[Object(o["createElementVNode"])("td",f,[Object(o["createElementVNode"])("div",{class:"bg-cover border border-4 border-primary rounded-3",style:Object(o["normalizeStyle"])([{height:"100px"},{backgroundImage:"url(".concat(t.product.imageUrl,")")}])},null,4)]),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("div",O,[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(t.product.title),1),Object(o["createElementVNode"])("span",null,"NT"+Object(o["toDisplayString"])(e.$filters.currency(t.product.price)),1),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(W.cart.final_total!==W.cart.total?"text-secondary":"text-primary")}," 小計 "+Object(o["toDisplayString"])(e.$filters.currency(t.final_total)),3),Object(o["createElementVNode"])("div",j,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",min:"1",disabled:t.id===W.status.ItemIsLoding,onChange:function(e){return Y.updateCart(t)},"onUpdate:modelValue":function(e){return t.qty=e}},null,40,h),[[o["vModelText"],t.qty,void 0,{number:!0}]]),Object(o["createElementVNode"])("div",V," / 張 ("+Object(o["toDisplayString"])(t.product.unit)+") ",1)])])]),Object(o["createElementVNode"])("td",g,[Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:W.status.ItemIsLoding===t.id,onClick:function(e){return Y.removeCartItem(t.id)}},E,8,v)])])})),128))]),Object(o["createElementVNode"])("tfoot",null,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",y,[Object(o["createElementVNode"])("div",x,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=function(e){return W.coupon_code=e}),placeholder:"請輸入優惠碼"},null,512),[[o["vModelText"],W.coupon_code]]),Object(o["createElementVNode"])("div",C,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-secondary rounded-end",type:"button",onClick:t[1]||(t[1]=function(){return Y.addCouponCode&&Y.addCouponCode.apply(Y,arguments)})},Object(o["toDisplayString"])("BEST"===W.coupon_code||"CARD"===W.coupon_code?"套用會員優惠":"套用優惠碼"),1)])])])]),Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",{colspan:"2",class:Object(o["normalizeClass"])(["text-end",W.cart.final_total!==W.cart.total?"border-bottom":"border border-0"])}," 總計 ",2),Object(o["createElementVNode"])("td",{class:Object(o["normalizeClass"])(["text-end border border-0",W.cart.final_total!==W.cart.total?"border-bottom":"border border-0"])},Object(o["toDisplayString"])(e.$filters.currency(W.cart.total)),3)]),W.cart.final_total!==W.cart.total?(Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",k,[L,Object(o["createElementVNode"])("td",w,Object(o["toDisplayString"])(e.$filters.currency(W.cart.final_total)),1)])):Object(o["createCommentVNode"])("",!0)])])],4)])])]),Object(o["createElementVNode"])("div",_,[Object(o["createElementVNode"])("div",S,[Object(o["createElementVNode"])("div",I,[Object(o["createElementVNode"])("div",z,[B,Object(o["createElementVNode"])("div",D,[$,Object(o["createVNode"])(ue,{onSubmit:Y.createOrder},{default:Object(o["withCtx"])((function(e){var c=e.errors;return[Object(o["createElementVNode"])("div",q,[Object(o["createElementVNode"])("div",U,[Object(o["createElementVNode"])("div",T,[Object(o["createVNode"])(de,{id:"name",name:"姓名",type:"text",class:Object(o["normalizeClass"])(["form-control",{"is-invalid":c["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:W.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return W.form.user.name=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(me,{name:"姓名",class:"invalid-feedback"}),M])]),Object(o["createElementVNode"])("div",P,[Object(o["createElementVNode"])("div",F,[Object(o["createVNode"])(de,{id:"tel",name:"電話",type:"tel",class:Object(o["normalizeClass"])(["form-control",{"is-invalid":c["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:W.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return W.form.user.tel=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(me,{name:"電話",class:"invalid-feedback"}),A])])]),Object(o["createElementVNode"])("div",J,[Object(o["createVNode"])(de,{id:"address",name:"地址",type:"text",class:Object(o["normalizeClass"])(["form-control",{"is-invalid":c["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:W.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return W.form.user.address=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(me,{name:"地址",class:"invalid-feedback"}),R]),Object(o["createElementVNode"])("div",X,[Object(o["createVNode"])(de,{id:"email",name:"信箱",type:"email",class:Object(o["normalizeClass"])(["form-control",{"is-invalid":c["信箱"]}]),placeholder:" 請輸入 Email",rules:"email|required",modelValue:W.form.user.email,"onUpdate:modelValue":t[5]||(t[5]=function(e){return W.form.user.email=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(me,{name:"信箱",class:"invalid-feedback"}),G]),Object(o["createElementVNode"])("div",H,[Object(o["createElementVNode"])("div",K,[Object(o["createElementVNode"])("div",Q,[Object(o["withDirectives"])(Object(o["createElementVNode"])("select",{class:"form-select",id:"payment","onUpdate:modelValue":t[6]||(t[6]=function(e){return W.form.payment_method=e})},ee,512),[[o["vModelSelect"],W.form.payment_method]]),te])]),Object(o["createElementVNode"])("div",ce,[Object(o["createElementVNode"])("div",oe,[Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{name:"",id:"message",class:"form-control",placeholder:"請留下寶貴的建議","onUpdate:modelValue":t[7]||(t[7]=function(e){return W.form.message=e})},null,512),[[o["vModelText"],W.form.message]]),ae])])]),ne]})),_:1},8,["onSubmit"])])])])])])])):Object(o["createCommentVNode"])("",!0)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",re,[le,Object(o["createVNode"])(ie,{to:{path:"/foods",query:{selectedCategory:"all"}},role:"button",class:"btn btn-outline-primary my-2"},{default:Object(o["withCtx"])((function(){return[se]})),_:1})]))],64)}c("99af");var de={data:function(){return{products:[],cart:{},cartLen:0,coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:"",payment_method:"creditCard"},isLoading:!1,status:{ItemIsLoding:""}}},methods:{getProducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/products/all");this.isLoading=!0,this.$http.get(t).then((function(t){e.isLoading=!1,e.products=t.data.products}))},getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/cart");this.isLoading=!0,this.$http.get(t).then((function(t){e.isLoading=!1,e.cart=t.data.data,e.cartLen=t.data.data.carts.length}))},updateCart:function(e){var t=this,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/cart/").concat(e.id),o={product_id:e.product_id,qty:e.qty>=1?e.qty:1};this.status.ItemIsLoding=e.id,this.$http.put(c,{data:o}).then((function(){t.status.ItemIsLoding="",t.getCart()}))},removeCartItem:function(e){var t=this,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/cart/").concat(e);this.status.ItemIsLoding=e,this.$http.delete(c).then((function(){t.status.ItemIsLoding="",t.getCart()}))},addCouponCode:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/coupon"),c={code:this.coupon_code};this.isLoading=!0,this.$http.post(t,{data:c}).then((function(){e.isLoading=!1,e.getCart()}))},createOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/order"),c=this.form,o=this.form.payment_method;this.$http.post(t,{data:c}).then((function(t){t.data.success&&e.getOrders(o)}))},getOrders:function(e){var t=this,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/orders");this.isLoading=!0,this.$http.get(c).then((function(c){if(t.isLoading=!1,c.data.success){var o=c.data.orders[0].id;t.$router.push({name:"pay",params:{orderId:o,payment:e}})}}))}},created:function(){this.getProducts(),this.getCart()},mounted:function(){this.getCart()}},me=c("6b0d"),ue=c.n(me);const be=ue()(de,[["render",ie]]);t["default"]=be},"99af":function(e,t,c){"use strict";var o=c("23e7"),a=c("da84"),n=c("d039"),r=c("e8b5"),l=c("861d"),s=c("7b0b"),i=c("07fa"),d=c("8418"),m=c("65f0"),u=c("1dde"),b=c("b622"),p=c("2d00"),f=b("isConcatSpreadable"),O=9007199254740991,j="Maximum allowed index exceeded",h=a.TypeError,V=p>=51||!n((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),g=u("concat"),v=function(e){if(!l(e))return!1;var t=e[f];return void 0!==t?!!t:r(e)},N=!V||!g;o({target:"Array",proto:!0,forced:N},{concat:function(e){var t,c,o,a,n,r=s(this),l=m(r,0),u=0;for(t=-1,o=arguments.length;t<o;t++)if(n=-1===t?r:arguments[t],v(n)){if(a=i(n),u+a>O)throw h(j);for(c=0;c<a;c++,u++)c in n&&d(l,u,n[c])}else{if(u>=O)throw h(j);d(l,u++,n)}return l.length=u,l}})},b0c0:function(e,t,c){var o=c("83ab"),a=c("5e77").EXISTS,n=c("e330"),r=c("9bf2").f,l=Function.prototype,s=n(l.toString),i=/^\s*function ([^ (]*)/,d=n(i.exec),m="name";o&&!a&&r(l,m,{configurable:!0,get:function(){try{return d(i,s(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-9beae3ec.js.map