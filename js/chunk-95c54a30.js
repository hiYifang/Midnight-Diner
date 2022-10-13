(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95c54a30"],{"61bc":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n=Object(o["createElementVNode"])("i",{class:"bi bi-cloud-plus"},null,-1),a=[n],l={class:"container"},r={class:"table-responsive my-4"},i={class:"table table-borderless table-hover",style:{"border-collapse":"separate","border-spacing":"0 0.5rem"}},d=Object(o["createElementVNode"])("thead",{class:"text-nowrap"},[Object(o["createElementVNode"])("tr",{class:"align-middle text-secondary"},[Object(o["createElementVNode"])("th",null,"商品名稱"),Object(o["createElementVNode"])("th",null,"類別"),Object(o["createElementVNode"])("th",null,"原價"),Object(o["createElementVNode"])("th",null,"售價"),Object(o["createElementVNode"])("th",null,"啟用狀態"),Object(o["createElementVNode"])("th",null,"編輯")])],-1),s={class:"text-nowrap"},u={class:"rounded-start"},m={class:"text-right"},b={class:"text-right"},p={key:0,class:"bi bi-check-lg text-primary"},j={key:1,class:"bi bi-x-lg text-danger"},O={class:"rounded-end"},f={class:"btn-group"},g=["onClick"],h=Object(o["createElementVNode"])("i",{class:"bi bi-pencil"},null,-1),V=[h],v=["onClick"],E=Object(o["createElementVNode"])("i",{class:"bi bi-trash"},null,-1),N=[E];function y(e,t,c,n,h,E){var y=Object(o["resolveComponent"])("Loading"),x=Object(o["resolveComponent"])("Pagination"),P=Object(o["resolveComponent"])("ProductModal"),k=Object(o["resolveComponent"])("DelModal");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(y,{active:h.isLoading},null,8,["active"]),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-3",onClick:t[0]||(t[0]=function(e){return E.openModal(!0)})},a),Object(o["createElementVNode"])("div",l,[Object(o["createVNode"])(x,{class:"mt-3",pages:h.pagination,onEmitPages:E.getProducts},null,8,["pages","onEmitPages"]),Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("table",i,[d,Object(o["createElementVNode"])("tbody",s,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(h.products,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{class:Object(o["normalizeClass"])(["align-middle bg-light shadow-sm",{"text-secondary":!t.is_enabled}]),key:t.id},[Object(o["createElementVNode"])("td",u,Object(o["toDisplayString"])(t.title),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.category),1),Object(o["createElementVNode"])("td",m,Object(o["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(o["createElementVNode"])("td",b,Object(o["toDisplayString"])(e.$filters.currency(t.price)),1),Object(o["createElementVNode"])("td",null,[t.is_enabled?(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",p)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",j))]),Object(o["createElementVNode"])("td",O,[Object(o["createElementVNode"])("div",f,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(e){return E.openModal(!1,t)}},V,8,g),Object(o["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(e){return E.openDelModal(t)}},N,8,v)])])],2)})),128))])])])]),Object(o["createVNode"])(P,{ref:"productModal",innerProduct:h.tempProduct,onUpdateProduct:E.updateProduct},null,8,["innerProduct","onUpdateProduct"]),Object(o["createVNode"])(k,{ref:"delModal",innerItem:h.tempProduct,onDelItem:E.delProduct},null,8,["innerItem","onDelItem"])],64)}var x=c("5530"),P=(c("99af"),c("a4d3"),c("e01a"),{class:"modal fade",id:"productModal",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true",ref:"modal"}),k={class:"modal-dialog modal-dialog-centered"},w={class:"modal-content text-primary border-0"},M={class:"p-3"},C=Object(o["createElementVNode"])("div",{class:"d-flex justify-content-end"},[Object(o["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),B={class:"modal-header justify-content-around align-items-center"},D={class:"w-30 m-1"},U=["src","alt"],$={class:"m-1"},S=Object(o["createElementVNode"])("p",{class:"fs-static-14 text-secondary mb-0"},[Object(o["createElementVNode"])("i",{class:"bi bi-exclamation-diamond"}),Object(o["createTextVNode"])(" 欄位必填 ")],-1),L={class:"switch-field m-1"},_=Object(o["createElementVNode"])("label",{for:"is_enabled"},null,-1),F={class:"modal-body"},T={class:"row g-2"},I={class:"col-md mb-3"},z={class:"form-floating"},J=["value"],R=Object(o["createElementVNode"])("label",{for:"category"},[Object(o["createElementVNode"])("i",{class:"bi bi-exclamation-diamond fs-static-14 text-secondary"}),Object(o["createTextVNode"])(" 請選擇分類 ")],-1),A={class:"col-md mb-3"},q={class:"form-floating"},G=["value"],H=Object(o["createElementVNode"])("label",{for:"unit"},[Object(o["createElementVNode"])("i",{class:"bi bi-exclamation-diamond fs-static-14 text-secondary"}),Object(o["createTextVNode"])(" 請選擇單位 ")],-1),K={class:"row g-2"},Q={class:"col-md mb-3"},W={class:"form-floating"},X=Object(o["createElementVNode"])("label",{for:"origin_price"},[Object(o["createElementVNode"])("i",{class:"bi bi-exclamation-diamond fs-static-14 text-secondary"}),Object(o["createTextVNode"])(" 請輸入原價 ")],-1),Y={class:"col-md mb-3"},Z={class:"form-floating"},ee=Object(o["createElementVNode"])("label",{for:"price"},[Object(o["createElementVNode"])("i",{class:"bi bi-exclamation-diamond fs-static-14 text-secondary"}),Object(o["createTextVNode"])(" 請輸入售價 ")],-1),te={class:"d-flex"},ce=["aria-expanded"],oe=["aria-expanded"],ne={key:0,id:"collapseDescription"},ae={class:"form-floating mt-3"},le=Object(o["createElementVNode"])("label",{for:"description"},"請輸入產品描述",-1),re={key:1,id:"collapseContent"},ie={class:"form-floating mt-3"},de=Object(o["createElementVNode"])("label",{for:"content"},"請輸入說明內容",-1),se={class:"modal-footer flex-nowrap justify-content-around bg-light"};function ue(e,t,c,n,a,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",P,[Object(o["createElementVNode"])("div",k,[Object(o["createElementVNode"])("div",w,[Object(o["createElementVNode"])("div",M,[C,Object(o["createElementVNode"])("div",B,[Object(o["createElementVNode"])("div",D,[Object(o["createElementVNode"])("img",{class:"img-thumbnail",src:a.tempProduct.imageUrl?a.tempProduct.imageUrl:a.imageUrl?a.imageUrl:"https://fakeimg.pl/300/",alt:a.tempProduct.title},null,8,U)]),Object(o["createElementVNode"])("div",$,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control border-0 border-bottom rounded-0 p-0",id:"productModalLabel",placeholder:"請輸入商品","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.tempProduct.title=e})},null,512),[[o["vModelText"],a.tempProduct.title]]),S]),Object(o["createElementVNode"])("div",L,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{class:"switch",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.tempProduct.is_enabled=e}),id:"is_enabled"},null,512),[[o["vModelCheckbox"],a.tempProduct.is_enabled]]),_])]),Object(o["createElementVNode"])("div",F,[Object(o["createElementVNode"])("div",T,[Object(o["createElementVNode"])("div",I,[Object(o["createElementVNode"])("div",z,[Object(o["withDirectives"])(Object(o["createElementVNode"])("select",{class:"form-select",id:"category","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.tempProduct.category=e})},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.category,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("option",{value:e,key:t},Object(o["toDisplayString"])(e),9,J)})),128))],512),[[o["vModelSelect"],a.tempProduct.category]]),R])]),Object(o["createElementVNode"])("div",A,[Object(o["createElementVNode"])("div",q,[Object(o["withDirectives"])(Object(o["createElementVNode"])("select",{class:"form-select",id:"unit","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.tempProduct.unit=e})},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.unit,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("option",{value:e,key:t},Object(o["toDisplayString"])(e),9,G)})),128))],512),[[o["vModelSelect"],a.tempProduct.unit]]),H])])]),Object(o["createElementVNode"])("div",K,[Object(o["createElementVNode"])("div",Q,[Object(o["createElementVNode"])("div",W,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.tempProduct.origin_price=e}),min:"0"},null,512),[[o["vModelText"],a.tempProduct.origin_price,void 0,{number:!0}]]),X])]),Object(o["createElementVNode"])("div",Y,[Object(o["createElementVNode"])("div",Z,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.tempProduct.price=e}),min:"0"},null,512),[[o["vModelText"],a.tempProduct.price,void 0,{number:!0}]]),ee])])]),Object(o["createElementVNode"])("div",te,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-primary col me-1",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseDescription","aria-expanded":a.descriptionCollapse,onClick:t[6]||(t[6]=function(e){return a.descriptionCollapse=!a.descriptionCollapse})}," 產品描述 ",8,ce),Object(o["createElementVNode"])("button",{class:"btn btn-outline-primary col ms-1",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseContent","aria-expanded":a.contentCollapse,onClick:t[7]||(t[7]=function(e){return a.contentCollapse=!a.contentCollapse})}," 說明內容 ",8,oe)]),a.descriptionCollapse?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ne,[Object(o["createElementVNode"])("div",ae,[Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[8]||(t[8]=function(e){return a.tempProduct.description=e})},null,512),[[o["vModelText"],a.tempProduct.description]]),le])])):Object(o["createCommentVNode"])("",!0),a.contentCollapse?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",re,[Object(o["createElementVNode"])("div",ie,[Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[9]||(t[9]=function(e){return a.tempProduct.content=e})},null,512),[[o["vModelText"],a.tempProduct.content]]),de])])):Object(o["createCommentVNode"])("",!0)])]),Object(o["createElementVNode"])("div",se,[Object(o["createElementVNode"])("input",{type:"file",class:"form-control w-75 text-primary",id:"inputFile",ref:"fileInput",onChange:t[10]||(t[10]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)})},null,544),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-primary btn-sm",onClick:t[11]||(t[11]=function(t){return e.$emit("update-product",a.tempProduct)})}," 儲存 ")])])])],512)}var me=c("e0ae"),be={props:{innerProduct:{type:Object,default:function(){return{}}}},watch:{innerProduct:function(){this.tempProduct=this.innerProduct}},data:function(){return{modal:{},tempProduct:{},category:["一人獨享","兩人專屬","多人共享","歡慶開幕","當季限定","最新上架","加購專區"],unit:["份","杯","壺"],imageUrl:"",descriptionCollapse:!1,contentCollapse:!1}},methods:{uploadFile:function(){var e=this,t=this.$refs.fileInput.files[0],c=this.$refs.fileInput.id,o=new FileReader;o.addEventListener("load",this.imageLoaded),o.readAsDataURL(t);var n=new FormData;n.append("file-to-upload",t);var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/admin/upload");this.$http.post(a,n).then((function(t){t.data.success&&(e.tempProduct.imageUrl=t.data.imageUrl,document.getElementById(c).value="",e.imageUrl="")}))},imageLoaded:function(e){this.imageUrl=e.target.result}},mixins:[me["a"]]},pe=c("6b0d"),je=c.n(pe);const Oe=je()(be,[["render",ue]]);var fe=Oe,ge=c("ebbb"),he=c("1799"),Ve={components:{ProductModal:fe,DelModal:ge["a"],Pagination:he["a"]},inject:["emitter"],data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/admin/products?page=").concat(t);this.isLoading=!0,this.$http.get(c).then((function(t){e.isLoading=!1,t.data.success&&(e.products=t.data.products,e.pagination=t.data.pagination)}))},openModal:function(e,t){this.tempProduct=e?{}:Object(x["a"])({},t),this.isNew=e,this.$refs.productModal.showModal()},updateProduct:function(e){var t=this;this.tempProduct=e;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/admin/product"),o="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/admin/product/").concat(e.id),o="put"),this.$http[o](c,{data:this.tempProduct}).then((function(e){t.$refs.productModal.hideModal(),t.getProducts(),t.$httpMessageState(e,"更新產品")}))},openDelModal:function(e){this.tempProduct=Object(x["a"])({},e),this.$refs.delModal.showModal()},delProduct:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ezshop-api","/admin/product/").concat(this.tempProduct.id);this.$http.delete(t).then((function(t){e.$refs.delModal.hideModal(),e.getProducts(),e.$httpMessageState(t,"刪除產品")}))}},created:function(){this.getProducts()}};const ve=je()(Ve,[["render",y]]);t["default"]=ve},e01a:function(e,t,c){"use strict";var o=c("23e7"),n=c("83ab"),a=c("da84"),l=c("e330"),r=c("1a2d"),i=c("1626"),d=c("3a9b"),s=c("577e"),u=c("9bf2").f,m=c("e893"),b=a.Symbol,p=b&&b.prototype;if(n&&i(b)&&(!("description"in p)||void 0!==b().description)){var j={},O=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),t=d(p,this)?new b(e):void 0===e?b():b(e);return""===e&&(j[t]=!0),t};m(O,b),O.prototype=p,p.constructor=O;var f="Symbol(test)"==String(b("test")),g=l(p.toString),h=l(p.valueOf),V=/^Symbol\((.*)\)[^)]+$/,v=l("".replace),E=l("".slice);u(p,"description",{configurable:!0,get:function(){var e=h(this),t=g(e);if(r(j,e))return"";var c=f?E(t,7,-1):v(t,V,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:O})}}}]);
//# sourceMappingURL=chunk-95c54a30.js.map