(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d77a84b"],{2355:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a={class:"bg-light text-primary"},r=Object(c["createElementVNode"])("div",{class:"text-light text-center bg-opacity p-3"},[Object(c["createElementVNode"])("p",{class:"fs-5"},"你是否也曾幻想"),Object(c["createElementVNode"])("h1",{class:"fw-bold"},"半夜吃宵夜？"),Object(c["createElementVNode"])("p",null,[Object(c["createTextVNode"])(" 深夜時刻溫暖你的胃！"),Object(c["createElementVNode"])("br"),Object(c["createTextVNode"])(" 一券在手，美味無窮！ ")])],-1),o=[r],l={class:"bg-light mt-3"};function s(e,t,r,s,i,b){var d=Object(c["resolveComponent"])("Header"),u=Object(c["resolveComponent"])("router-view"),m=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createVNode"])(d),Object(c["createElementVNode"])("div",{class:"bg-cover d-flex justify-content-center justify-content-md-end align-items-center align-items-md-end p-0 p-md-5",style:Object(c["normalizeStyle"])([{height:"400px"},{backgroundImage:"url("+n("bbee")+")"}])},o,4),Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(u)]),Object(c["createVNode"])(m)])}var i=n("4651"),b=n("acd4"),d={components:{Header:i["a"],Footer:b["a"]}},u=n("6b0d"),m=n.n(u);const j=m()(d,[["render",s]]);t["default"]=j},4651:function(e,t,n){"use strict";var c=n("7a23"),a=n("4ffd"),r=n.n(a),o=function(e){return Object(c["pushScopeId"])("data-v-0aeeda76"),e=e(),Object(c["popScopeId"])(),e},l={class:"navbar navbar-expand-lg navbar-light fixed-top bg-white"},s={class:"container-fluid"},i=o((function(){return Object(c["createElementVNode"])("img",{src:r.a,alt:"logo",width:"120",height:"60"},null,-1)})),b=o((function(){return Object(c["createElementVNode"])("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavFrontend","aria-controls":"navbarNavFrontend","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["createElementVNode"])("span",null,[Object(c["createElementVNode"])("i",{class:"fas fa-bars"})])],-1)})),d={class:"collapse navbar-collapse",id:"navbarNavFrontend"},u={class:"navbar-nav ms-auto mb-2 mb-lg-0"},m={class:"nav-item me-6 ms-3 ms-lg-0"},j=Object(c["createTextVNode"])(" 回到首頁 "),O={class:"nav-item me-6 ms-3 ms-lg-0"},f=Object(c["createTextVNode"])(" 餐券介紹 "),v={class:"nav-item ms-3 ms-lg-0"},p=Object(c["createTextVNode"])(" 選購列表 ");function g(e,t,n,a,r,o){var g=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("header",l,[Object(c["createElementVNode"])("div",s,[Object(c["createVNode"])(g,{to:"/",class:"navbar-brand"},{default:Object(c["withCtx"])((function(){return[i]})),_:1}),b,Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("ul",u,[Object(c["createElementVNode"])("li",m,[Object(c["createVNode"])(g,{to:"/",class:"nav-link"},{default:Object(c["withCtx"])((function(){return[j]})),_:1})]),Object(c["createElementVNode"])("li",O,[Object(c["createVNode"])(g,{to:{path:"/foods",query:{selectedCategory:"all"}},class:"nav-link"},{default:Object(c["withCtx"])((function(){return[f]})),_:1})]),Object(c["createElementVNode"])("li",v,[Object(c["createVNode"])(g,{to:"/cart/content",class:"nav-link"},{default:Object(c["withCtx"])((function(){return[p]})),_:1})])])])])])}n("a9e3");var N={props:{innerCartLen:{type:Number,default:0}},watch:{innerCartLen:function(){this.cartLen=this.innerCartLen}},data:function(){return{cartLen:0}}},V=(n("5e1f"),n("6b0d")),h=n.n(V);const E=h()(N,[["render",g],["__scopeId","data-v-0aeeda76"]]);t["a"]=E},"4ffd":function(e,t,n){e.exports=n.p+"img/logo.png"},"5e1f":function(e,t,n){"use strict";n("90a6")},"90a6":function(e,t,n){},acd4:function(e,t,n){"use strict";var c=n("7a23"),a={class:"bg-primary py-4"},r={class:"container"},o={class:"row justify-content-between align-items-center"},l=Object(c["createElementVNode"])("div",{class:"col-6 d-flex align-items-center"},[Object(c["createElementVNode"])("p",{class:"text-smaller text-light mb-0"},"Designed © 2022 by EvaLi")],-1),s={class:"col-6"},i={class:"list-unstyled h4 d-flex justify-content-end align-items-center mb-0"},b=Object(c["createElementVNode"])("i",{class:"bi bi-house"},null,-1),d=Object(c["createElementVNode"])("i",{class:"fab fa-whmcs fa-fw"},null,-1);function u(e,t){var n=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",o,[l,Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("ul",i,[Object(c["createElementVNode"])("li",null,[Object(c["createVNode"])(n,{to:"/",class:"btn btn-sm btn-outline-light me-3"},{default:Object(c["withCtx"])((function(){return[b]})),_:1})]),Object(c["createElementVNode"])("li",null,[Object(c["createVNode"])(n,{to:"/login",class:"btn btn-sm btn-outline-light"},{default:Object(c["withCtx"])((function(){return[d]})),_:1})])])])])])])}var m=n("6b0d"),j=n.n(m);const O={},f=j()(O,[["render",u]]);t["a"]=f},bbee:function(e,t,n){e.exports=n.p+"img/foods.jpg"}}]);
//# sourceMappingURL=chunk-6d77a84b.js.map