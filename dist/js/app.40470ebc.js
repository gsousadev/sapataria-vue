(function(t){function e(e){for(var r,o,s=e[0],i=e[1],u=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},c=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-15613418":"ee996b84","chunk-16192d68":"b08a1a99","chunk-3afbde86":"07849249","chunk-6958f696":"060bde35","chunk-ff239d58":"45c83a46"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=o(t);var u=new Error;c=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",u.name="ChunkLoadError",u.type=r,u.request=c,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"363f":function(t,e,n){t.exports=n.p+"img/brand_text_transparent_1000x1000.fd05eb19.png"},"4a90":function(t,e,n){},"6ce2":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("6b54"),n("a481"),n("3b2b");var r=n("d225"),a=n("b0b4"),c=function(){function t(){Object(r["a"])(this,t)}return Object(a["a"])(t,null,[{key:"checkInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=RegExp("([0-9]{5,5}[-]?[0-9]{3})$"),r=RegExp("([0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2})$"),a=RegExp("");switch(e){case"cpf":a=r;break;case"cep":a=n;break}return a.test(t)}},{key:"setInvalidInputs",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""!=t){var e=document.getElementById(t);e.classList.add("is-invalid"),e.classList.remove("is-valid")}return!1}},{key:"setValidInputs",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""!=t){var e=document.getElementById(t);e.classList.remove("is-invalid"),e.classList.add("is-valid")}return!1}},{key:"money",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return parseFloat(t.toString().replace(",","."))}},{key:"cleanVal",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.replace(/[^0-9a-zA-Z]/g,"")}}]),t}()},a361:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r,a,c=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container-fluid my-3"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-6 col-md-2"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"img-fluid",attrs:{src:n("363f")}})])],1)]),r("router-view")],1)])},s=[],i=n("2877"),u={},l=Object(i["a"])(u,o,s,!1,null,null,null),p=l.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-sm-8"},[n("CpfSearchUser"),n("HomeMenu")],1)])])},h=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row py-3 justify-content-center"},[n("IconButton",{attrs:{url:"/clientes/listar",iconClass:"list",buttonText:"Lista de Clientes"}}),n("IconButton",{attrs:{url:"/pedidos/listar",iconClass:"table",buttonText:"Lista de Pedidos"}})],1)},v=[],b=n("d225"),g=n("308d"),y=n("6bb5"),k=n("4e2b"),C=n("60a3"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-lg-6"},[n("router-link",{class:t.getClassNames(),attrs:{to:t.url}},[n("h3",{staticClass:"title"},[t._v(t._s(t.buttonText))])])],1)},I=[],_={props:{url:String,buttonText:String,classNames:String,iconClass:String},methods:{getClassNames:function(){return"sp-link bg-primary rounded"}}},j=_,w=(n("d6da"),Object(i["a"])(j,x,I,!1,null,"cc632284",null)),O=w.exports,T=(r=Object(C["a"])({components:{IconButton:O}}),r(a=function(t){function e(){return Object(b["a"])(this,e),Object(g["a"])(this,Object(y["a"])(e).apply(this,arguments))}return Object(k["a"])(e,t),e}(C["b"]))||a),E=T,S=Object(i["a"])(E,m,v,!1,null,null,null),P=S.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"row py-3 justify-content-center",on:{submit:function(e){return e.preventDefault(),t.checkUser()}}},[n("div",{staticClass:"col-12 col-lg-5 mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"},{name:"mask",rawName:"v-mask",value:"###.###.###-##",expression:"'###.###.###-##'"}],staticClass:"form-control w-100",attrs:{type:"text",name:"cpf",id:"cpfInput",placeholder:"Digite o CPF do cliente","aria-describedby":"helpId"},domProps:{value:t.searchText},on:{keyup:function(e){return t.checkCpf()},input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),t._m(0)])},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-lg-3"},[n("button",{staticClass:"btn btn-primary w-100",attrs:{type:"submit"}},[t._v("Consultar Cliente")])])}],M=n("6ce2"),B=n("bc3a"),U=n.n(B),N={components:{IconButton:O},data:function(){return{InputHelper:M["a"],searchText:"",statusCpf:!1}},methods:{checkCpf:function(){M["a"].checkInput(this.searchText,"cpf")?M["a"].setValidInputs("cpfInput"):M["a"].setInvalidInputs("cpfInput")},checkUser:function(){var t=this.$router,e=this.searchText;M["a"].checkInput(this.searchText,"cpf")?U.a.get("".concat("http://localhost:8090","/customer/check-cpf/").concat(M["a"].cleanVal(e))).then((function(e){var n=e.data,r=n.data;t.push({path:"/pedidos/cadastrar/",query:{cpf:r.cpf}})})).catch((function(){t.push({path:"/clientes/cadastrar",query:{cpf:e}})})):M["a"].setInvalidInputs("cpfInput")}}},R=N,D=Object(i["a"])(R,$,L,!1,null,null,null),H=D.exports,V={name:"Home",data:function(){return{}},components:{HomeMenu:P,CpfSearchUser:H}},q=V,z=Object(i["a"])(q,f,h,!1,null,null,null),A=z.exports;c["a"].use(d["a"]);var F=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:A},{path:"/pedidos/cadastrar",component:function(){return n.e("chunk-ff239d58").then(n.bind(null,"71d1"))}},{path:"/pedidos/listar",component:function(){return n.e("chunk-3afbde86").then(n.bind(null,"04c1"))}},{path:"/pedidos/visualizar/:id",component:function(){return n.e("chunk-6958f696").then(n.bind(null,"ae43"))}},{path:"/clientes/cadastrar",component:function(){return n.e("chunk-15613418").then(n.bind(null,"4ef6"))}},{path:"/clientes/listar",component:function(){return n.e("chunk-16192d68").then(n.bind(null,"57f0"))}},{path:"/clientes/editar/:id",component:function(){return n.e("chunk-15613418").then(n.bind(null,"4ef6"))}}]}),J=n("2f62");c["a"].use(J["a"]);var Z=new J["a"].Store({state:{customerId:""},mutations:{SET_CUSTOMER_ID:function(t,e){t.customerId=e}},actions:{setCustomerId:function(t,e){t.commit("SET_CUSTOMER_ID",e)}},getters:{getCustomerId:function(t){return t.customerId}}}),G=(n("4a90"),n("3a60")),K=n.n(G);c["a"].use(K.a),c["a"].config.productionTip=!1,new c["a"]({router:F,store:Z,render:function(t){return t(p)}}).$mount("#app")},d6da:function(t,e,n){"use strict";var r=n("a361"),a=n.n(r);a.a}});
//# sourceMappingURL=app.40470ebc.js.map