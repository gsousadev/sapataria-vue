(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc5ba3e6"],{"2fbc":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("nav",{attrs:{"aria-label":"breadcrumb bg-transparent rounded"}},[r("ol",{staticClass:"breadcrumb rounded bg-white"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:"/"}},[e._v("Inicio")])],1),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v(" "+e._s(e.currentPageName)+" ")])])])])])},s=[],o={name:"Breadcrumb",props:{currentPageName:String}},n=o,l=r("2877"),u=Object(l["a"])(n,a,s,!1,null,null,null);t["a"]=u.exports},"7f7f":function(e,t,r){var a=r("86cc").f,s=Function.prototype,o=/^\s*function ([^ (]*)/,n="name";n in s||r("9e1e")&&a(s,n,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"9eb3":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("a481");var a=r("d225"),s=r("b0b4"),o=function(){function e(){Object(a["a"])(this,e)}return Object(s["a"])(e,null,[{key:"cpf",value:function(e){return e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4")}},{key:"phone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return null==e?"":11==e.length?e.replace(/(\d{2})(\d{5})(\d{4})/g,"($1) $2-$3"):10==e.length?e.replace(/(\d{2})(\d{4})(\d{4})/g,"($1) $2-$3"):e}},{key:"money",value:function(e){return"R$ "+parseFloat(e).toFixed(2).replace(".",",")}},{key:"productSize",value:function(e){switch(e){case"p":return"pequeno";case"m":return"médio";case"g":return"grande";default:return e}}},{key:"productGenre",value:function(e){switch(e){case"m":return"masculino";case"f":return"feminino";case"u":return"Unisex";default:return e}}},{key:"status",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(e){case"pendente":return t?"Pendente":'<span class="badge badge-warning">Pendente</span>';case"entregue":return t?"Entregue":'<span class="badge badge-success">Entregue</span>';case"aguardando_retirada":return t?"Aguardando Retirada":'<span class="badge badge-info">Aguardando Retirada</span>';case"em_concerto":return t?"Em Concerto":'<span class="badge badge-danger">Em Concerto</span>';default:return t?e:'<span class="badge badge-light">'.concat(e," (Erro no banco)</span>")}}}]),e}()},abb9:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-lg-10"},[r("Breadcrumb",{attrs:{currentPageName:e.headerTitle}}),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12"},[r("h4",{staticClass:"bg-primary p-2 text-white rounded"},[e._v(e._s(e.headerTitle))]),r("div",{staticClass:"bg-white p-3 mt-3 rounded"},[r("h4",[e._v("Adicionar item")]),r("hr"),r("div",{staticClass:"box-order-items"},[r("div",{staticClass:"order-item",attrs:{"data-index":"1"}},[r("div",{staticClass:"row mt-3"},[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:e.orderItemsInputs.type.name}},[e._v(e._s(e.orderItemsInputs.type.label))]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.orderItemsInputs.type.value,expression:"orderItemsInputs.type.value"}],staticClass:"form-control",attrs:{name:e.orderItemsInputs.type.name,id:e.orderItemsInputs.type.name},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.orderItemsInputs.type,"value",t.target.multiple?r:r[0])}}},e._l(e.orderItemsInputs.type.options,(function(t,a){return r("option",{key:a,domProps:{value:a}},[e._v(e._s(t))])})),0)])]),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:e.orderItemsInputs.color.name}},[e._v(e._s(e.orderItemsInputs.color.label))]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.orderItemsInputs.color.value,expression:"orderItemsInputs.color.value"}],staticClass:"form-control",attrs:{name:e.orderItemsInputs.color.name,id:e.orderItemsInputs.color.name},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.orderItemsInputs.color,"value",t.target.multiple?r:r[0])}}},e._l(e.orderItemsInputs.color.options,(function(t,a){return r("option",{key:a,domProps:{value:a}},[e._v(e._s(t))])})),0)])]),r("div",{staticClass:"col-12 col-sm-2"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:e.orderItemsInputs.genre.name}},[e._v(e._s(e.orderItemsInputs.genre.label))]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.orderItemsInputs.genre.value,expression:"orderItemsInputs.genre.value"}],staticClass:"form-control",attrs:{name:e.orderItemsInputs.genre.name,id:e.orderItemsInputs.genre.name},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.orderItemsInputs.genre,"value",t.target.multiple?r:r[0])}}},e._l(e.orderItemsInputs.genre.options,(function(t,a){return r("option",{key:a,domProps:{value:a}},[e._v(e._s(t))])})),0)])]),r("div",{staticClass:"col-12 col-sm-2"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:e.orderItemsInputs.size.name}},[e._v(e._s(e.orderItemsInputs.size.label))]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.orderItemsInputs.size.value,expression:"orderItemsInputs.size.value"}],staticClass:"form-control",attrs:{name:e.orderItemsInputs.size.name,id:e.orderItemsInputs.size.name},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.orderItemsInputs.size,"value",t.target.multiple?r:r[0])}}},e._l(e.orderItemsInputs.size.options,(function(t,a){return r("option",{key:a,domProps:{value:a}},[e._v(e._s(t))])})),0)])]),r("div",{staticClass:"col-12 col-sm-2"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:e.orderItemsInputs.total.name}},[e._v(e._s(e.orderItemsInputs.total.label))]),"checkbox"===e.orderItemsInputs.total.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderItemsInputs.total.value,expression:"orderItemsInputs.total.value"}],staticClass:"form-control",attrs:{id:e.orderItemsInputs.total.name,name:e.orderItemsInputs.total.name,type:"checkbox"},domProps:{checked:Array.isArray(e.orderItemsInputs.total.value)?e._i(e.orderItemsInputs.total.value,null)>-1:e.orderItemsInputs.total.value},on:{change:function(t){var r=e.orderItemsInputs.total.value,a=t.target,s=!!a.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);a.checked?n<0&&e.$set(e.orderItemsInputs.total,"value",r.concat([o])):n>-1&&e.$set(e.orderItemsInputs.total,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.orderItemsInputs.total,"value",s)}}}):"radio"===e.orderItemsInputs.total.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderItemsInputs.total.value,expression:"orderItemsInputs.total.value"}],staticClass:"form-control",attrs:{id:e.orderItemsInputs.total.name,name:e.orderItemsInputs.total.name,type:"radio"},domProps:{checked:e._q(e.orderItemsInputs.total.value,null)},on:{change:function(t){return e.$set(e.orderItemsInputs.total,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderItemsInputs.total.value,expression:"orderItemsInputs.total.value"}],staticClass:"form-control",attrs:{id:e.orderItemsInputs.total.name,name:e.orderItemsInputs.total.name,type:e.orderItemsInputs.total.type},domProps:{value:e.orderItemsInputs.total.value},on:{input:function(t){t.target.composing||e.$set(e.orderItemsInputs.total,"value",t.target.value)}}})])])]),r("div",{staticClass:"row m-t-3"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:e.orderItemsInputs.description.name}},[e._v(e._s(e.orderItemsInputs.description.label))]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.orderItemsInputs.description.value,expression:"orderItemsInputs.description.value"}],staticClass:"form-control",attrs:{id:e.orderItemsInputs.description.name,name:e.orderItemsInputs.description.name},domProps:{value:e.orderItemsInputs.description.value},on:{input:function(t){t.target.composing||e.$set(e.orderItemsInputs.description,"value",t.target.value)}}})])])]),r("div",{staticClass:"row mt-3 justify-content-end"},[r("div",{staticClass:"col-12 col-md-3"},[r("button",{staticClass:"btn btn-primary btn-add w-100",attrs:{type:"button"},on:{click:function(t){return e.addItem()}}},[e._v(" Adicionar ")])])])])])]),r("div",{staticClass:"bg-white p-3 mt-3 rounded"},[r("h4",[e._v("Itens")]),r("hr"),0==e.orderItems.length?r("div",{staticClass:"order-items-box"},[r("p",{staticClass:"text-center"},[e._v("Nenhum item adicionado")])]):r("div",{staticClass:"order-items-box table-responsive"},[r("table",{staticClass:"table table-borderless text-center"},[e._m(0),e._l(e.orderItems,(function(t,a){return r("tr",{key:a},[r("td",[e._v(e._s(a+1))]),r("td",[e._v(e._s(e.orderItemsInputs.type.options[t.tipo]))]),r("td",[e._v(e._s(e.orderItemsInputs.genre.options[t.genero]))]),r("td",[e._v(e._s(e.orderItemsInputs.color.options[t.cor]))]),r("td",[e._v(e._s(e.orderItemsInputs.size.options[t.tamanho]))]),r("td",[e._v(e._s(e.OutputHelper.money(t.valor)))]),r("td",[r("button",{on:{click:function(t){return e.removeItem(a)}}},[r("i",{staticClass:"material-icons"},[e._v("delete")])])])])}))],2)])]),r("div",{staticClass:"bg-white p-3 mt-3 rounded"},[r("h4",[e._v("Informações Gerais")]),r("hr"),r("div",{staticClass:"row mt-3 align-items-center"},[r("div",{staticClass:"col-12 col-md-6"},[r("div",{staticClass:"row align-items-end"},[r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:e.orderInputs.cpf.name}},[e._v(e._s(e.orderInputs.cpf.label))]),"checkbox"===e.orderInputs.cpf.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInputs.cpf.value,expression:"orderInputs.cpf.value"},{name:"mask",rawName:"v-mask",value:"###.###.###-##",expression:"'###.###.###-##'"}],staticClass:"form-control",attrs:{id:e.orderInputs.cpf.name,name:e.orderInputs.cpf.name,type:"checkbox"},domProps:{checked:Array.isArray(e.orderInputs.cpf.value)?e._i(e.orderInputs.cpf.value,null)>-1:e.orderInputs.cpf.value},on:{change:function(t){var r=e.orderInputs.cpf.value,a=t.target,s=!!a.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);a.checked?n<0&&e.$set(e.orderInputs.cpf,"value",r.concat([o])):n>-1&&e.$set(e.orderInputs.cpf,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.orderInputs.cpf,"value",s)}}}):"radio"===e.orderInputs.cpf.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInputs.cpf.value,expression:"orderInputs.cpf.value"},{name:"mask",rawName:"v-mask",value:"###.###.###-##",expression:"'###.###.###-##'"}],staticClass:"form-control",attrs:{id:e.orderInputs.cpf.name,name:e.orderInputs.cpf.name,type:"radio"},domProps:{checked:e._q(e.orderInputs.cpf.value,null)},on:{change:function(t){return e.$set(e.orderInputs.cpf,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInputs.cpf.value,expression:"orderInputs.cpf.value"},{name:"mask",rawName:"v-mask",value:"###.###.###-##",expression:"'###.###.###-##'"}],staticClass:"form-control",attrs:{id:e.orderInputs.cpf.name,name:e.orderInputs.cpf.name,type:e.orderInputs.cpf.type},domProps:{value:e.orderInputs.cpf.value},on:{input:function(t){t.target.composing||e.$set(e.orderInputs.cpf,"value",t.target.value)}}})])]),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:e.orderInputs.discount.name}},[e._v(" "+e._s(e.orderInputs.discount.label))]),"checkbox"===e.orderInputs.discount.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInputs.discount.value,expression:"orderInputs.discount.value"}],staticClass:"form-control",attrs:{id:e.orderInputs.discount.name,name:e.orderInputs.discount.name,type:"checkbox"},domProps:{checked:Array.isArray(e.orderInputs.discount.value)?e._i(e.orderInputs.discount.value,null)>-1:e.orderInputs.discount.value},on:{change:function(t){var r=e.orderInputs.discount.value,a=t.target,s=!!a.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);a.checked?n<0&&e.$set(e.orderInputs.discount,"value",r.concat([o])):n>-1&&e.$set(e.orderInputs.discount,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.orderInputs.discount,"value",s)}}}):"radio"===e.orderInputs.discount.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInputs.discount.value,expression:"orderInputs.discount.value"}],staticClass:"form-control",attrs:{id:e.orderInputs.discount.name,name:e.orderInputs.discount.name,type:"radio"},domProps:{checked:e._q(e.orderInputs.discount.value,null)},on:{change:function(t){return e.$set(e.orderInputs.discount,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInputs.discount.value,expression:"orderInputs.discount.value"}],staticClass:"form-control",attrs:{id:e.orderInputs.discount.name,name:e.orderInputs.discount.name,type:e.orderInputs.discount.type},domProps:{value:e.orderInputs.discount.value},on:{input:function(t){t.target.composing||e.$set(e.orderInputs.discount,"value",t.target.value)}}})])]),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary w-100",on:{click:function(t){return e.discountCalculate()}}},[e._v(" Aplicar ")])])])]),r("div",{staticClass:"row align-items-end"},[r("div",{staticClass:"col-sm-6 col-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:e.orderInputs.deliveryDate.name}},[e._v(e._s(e.orderInputs.deliveryDate.label))]),"checkbox"===e.orderInputs.deliveryDate.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInputs.deliveryDate.value,expression:"orderInputs.deliveryDate.value"}],staticClass:"form-control",attrs:{id:e.orderInputs.deliveryDate.name,name:e.orderInputs.deliveryDate.name,type:"checkbox"},domProps:{checked:Array.isArray(e.orderInputs.deliveryDate.value)?e._i(e.orderInputs.deliveryDate.value,null)>-1:e.orderInputs.deliveryDate.value},on:{change:function(t){var r=e.orderInputs.deliveryDate.value,a=t.target,s=!!a.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);a.checked?n<0&&e.$set(e.orderInputs.deliveryDate,"value",r.concat([o])):n>-1&&e.$set(e.orderInputs.deliveryDate,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.orderInputs.deliveryDate,"value",s)}}}):"radio"===e.orderInputs.deliveryDate.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInputs.deliveryDate.value,expression:"orderInputs.deliveryDate.value"}],staticClass:"form-control",attrs:{id:e.orderInputs.deliveryDate.name,name:e.orderInputs.deliveryDate.name,type:"radio"},domProps:{checked:e._q(e.orderInputs.deliveryDate.value,null)},on:{change:function(t){return e.$set(e.orderInputs.deliveryDate,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInputs.deliveryDate.value,expression:"orderInputs.deliveryDate.value"}],staticClass:"form-control",attrs:{id:e.orderInputs.deliveryDate.name,name:e.orderInputs.deliveryDate.name,type:e.orderInputs.deliveryDate.type},domProps:{value:e.orderInputs.deliveryDate.value},on:{input:function(t){t.target.composing||e.$set(e.orderInputs.deliveryDate,"value",t.target.value)}}})])]),r("div",{staticClass:"col-sm-6 col-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:e.orderInputs.deliveryHour.name}},[e._v(e._s(e.orderInputs.deliveryHour.label))]),"checkbox"===e.orderInputs.deliveryHour.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInputs.deliveryHour.value,expression:"orderInputs.deliveryHour.value"}],staticClass:"form-control",attrs:{id:e.orderInputs.deliveryHour.name,name:e.orderInputs.deliveryHour.name,min:e.orderInputs.deliveryHour.min,max:e.orderInputs.deliveryHour.max,type:"checkbox"},domProps:{checked:Array.isArray(e.orderInputs.deliveryHour.value)?e._i(e.orderInputs.deliveryHour.value,null)>-1:e.orderInputs.deliveryHour.value},on:{change:function(t){var r=e.orderInputs.deliveryHour.value,a=t.target,s=!!a.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);a.checked?n<0&&e.$set(e.orderInputs.deliveryHour,"value",r.concat([o])):n>-1&&e.$set(e.orderInputs.deliveryHour,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.orderInputs.deliveryHour,"value",s)}}}):"radio"===e.orderInputs.deliveryHour.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInputs.deliveryHour.value,expression:"orderInputs.deliveryHour.value"}],staticClass:"form-control",attrs:{id:e.orderInputs.deliveryHour.name,name:e.orderInputs.deliveryHour.name,min:e.orderInputs.deliveryHour.min,max:e.orderInputs.deliveryHour.max,type:"radio"},domProps:{checked:e._q(e.orderInputs.deliveryHour.value,null)},on:{change:function(t){return e.$set(e.orderInputs.deliveryHour,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderInputs.deliveryHour.value,expression:"orderInputs.deliveryHour.value"}],staticClass:"form-control",attrs:{id:e.orderInputs.deliveryHour.name,name:e.orderInputs.deliveryHour.name,min:e.orderInputs.deliveryHour.min,max:e.orderInputs.deliveryHour.max,type:e.orderInputs.deliveryHour.type},domProps:{value:e.orderInputs.deliveryHour.value},on:{input:function(t){t.target.composing||e.$set(e.orderInputs.deliveryHour,"value",t.target.value)}}})])])])]),r("div",{staticClass:"col-12 col-md-6"},[r("div",{staticClass:"text-center"},[r("span",{staticClass:"total-value-label display-3"},[e._v(e._s(e.OutputHelper.money(e.orderInputs.total.value)))])])])]),r("div",{staticClass:"row mt-5 justify-content-end"},[r("div",{staticClass:"col-12 col-md-3"},[r("button",{staticClass:"btn btn-primary d-block text-white w-100",on:{click:function(t){return e.submitForm()}}},[e._v(" Finalizar Pedido ")])])])])])])],1)])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("th",[e._v("#")]),r("th",[e._v("Tipo")]),r("th",[e._v("Cor")]),r("th",[e._v("Gênero")]),r("th",[e._v("Tamanho")]),r("th",[e._v("Valor")]),r("th",[e._v("Excluir")])])}],o=(r("7f7f"),r("ac6a"),r("3b2b"),r("2fbc")),n=r("6ce2"),l=r("9eb3"),u=r("bc3a"),i=r.n(u),d=r("3836"),c={components:{Breadcrumb:o["a"]},created:function(){this.orderInputs.cpf.value=this.$route.query.cpf},data:function(){return{OutputHelper:l["a"],headerTitle:"Cadastro de Pedido",orderInputs:{cpf:{type:"text",label:"CPF",name:"cpf",value:"",regex:RegExp("^([0-9]{11})$")},discount:{type:"text",label:"Desconto",name:"desconto",value:0,regex:RegExp("[+-]?([0-9]*[.])?[0-9]+")},deliveryDate:{type:"date",label:"Data de Entrega",name:"data_entrega"},deliveryHour:{type:"time",label:"hora da Entrega",name:"hora_entrega",min:"07:00",max:"18:00"},total:{type:"text",label:"Total",name:"valor_pedido",value:0,regex:RegExp("[+-]?([0-9]*[.])?[0-9]+")}},orderItemsInputs:{type:{type:"select",label:"Tipo",name:"tipo",value:"bota",options:{bota:"Bota",sandalia:"Sandália",social:"Sapato Social",tenis:"Tênis"}},genre:{type:"select",label:"Gênero",name:"genero",value:"m",options:{m:"Masculino",f:"Feminino",u:"Unissex"}},color:{type:"select",label:"Cor",name:"cor",value:"preto",options:{amarelo:"Amarelo",azul:"Azul",bege:"Bege",branco:"Branco",bronze:"Bronze",caramelo:"Caramelo",castanho:"Castanho",chocolate:"Chocolate",cinza:"Cinza",cobre:"Cobre",dourado:"Dourado",esmeralda:"Esmeralda",ferrugem:"Ferrugem",laranja:"Laranja",lilas:"Lilás",marrom:"Marrom",mostarda:"Mostarda",prata:"Prata",preto:"Preto",rosa:"Rosa",roxo:"Roxo",salmao:"Salmão",tijolo:"Tijolo",verde:"Verde",vermelho:"Vermelho",vinho:"Vinho"}},size:{type:"select",label:"Tamanho",name:"tamanho",value:"p",options:{p:"Pequeno",m:"Médio",g:"Grande",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",14:"14",15:"15",16:"16",17:"17",18:"18",19:"19",20:"20",21:"21",22:"22",23:"23",24:"24",25:"25",26:"26",27:"27",28:"28",29:"29",30:"30",31:"31",32:"32",33:"33",34:"34",35:"35",36:"36",37:"37",38:"38",39:"39",40:"40",41:"41",42:"42",43:"43",44:"44",45:"45",46:"46",47:"47",48:"48",49:"49",50:"50",51:"51",52:"52",53:"53",54:"54",55:"55",56:"56",57:"57",58:"58",59:"59",60:"60",61:"61",62:"62",63:"63",64:"64",65:"65",66:"66",67:"67",68:"68",69:"69",70:"70",71:"71",72:"72",73:"73",74:"74",75:"75",76:"76",77:"77",78:"78",79:"79",80:"80",81:"81",82:"82",83:"83",84:"84",85:"85",86:"86",87:"87",88:"88",89:"89",90:"90",91:"91",92:"92",93:"93",94:"94",95:"95",96:"96",97:"97",98:"98",99:"99",100:"100"}},description:{label:"Descrição do Serviço",name:"descricao",value:""},total:{type:"text",label:"Valor",name:"valor_item",value:0,regex:RegExp("[+-]?([0-9]*[.])?[0-9]+")}},orderItems:[],requestUrl:"/order/",redirectUrl:"/pedidos/listar"}},methods:{getDataToSend:function(){return{cpf:n["a"].cleanVal(this.orderInputs.cpf.value),data_entrega:this.orderInputs.deliveryDate.value,hora_entrega:this.orderInputs.deliveryHour.value,desconto:n["a"].money(this.orderInputs.discount.value),valor:this.orderInputs.total.value,itens:this.orderItems}},submitForm:function(){var e=this,t="http://api.sapataria.local"+this.requestUrl,r=this.getDataToSend();i.a.post(t,r).then((function(t){t.data;d["a"].modalSuccess("Pedido cadastrado com sucesso!"),e.$router.push({path:e.redirectUrl})})).catch((function(e){d["a"].modalError(e)}))},addItem:function(){this.orderItems.push({tipo:this.orderItemsInputs.type.value,genero:this.orderItemsInputs.genre.value,cor:this.orderItemsInputs.color.value,tamanho:this.orderItemsInputs.size.value,valor:n["a"].money(this.orderItemsInputs.total.value),descricao:this.orderItemsInputs.description.value}),this.refreshTotal()},removeItem:function(e){this.orderItems.splice(e,1),this.refreshTotal()},discountCalculate:function(){this.refreshTotal(),n["a"].money(this.orderInputs.discount.value)>this.orderInputs.total.value||isNaN(n["a"].money(this.orderInputs.discount.value))?this.orderInputs.total.value=0:this.orderInputs.total.value-=n["a"].money(this.orderInputs.discount.value)},refreshTotal:function(){var e=this;this.orderInputs.total.value=0,this.orderItems.forEach((function(t,r){e.orderInputs.total.value+=n["a"].money(t.valor)}))},validFields:function(e){""!=e.value?e.regex?e.regex.test(e.value)?n["a"].setValidInputs(e.name):(n["a"].setInvalidInputs(e.name),this.valid=!1):n["a"].setValidInputs(e.name):(n["a"].setInvalidInputs(e.name),this.valid=!1)}}},p=c,m=r("2877"),v=Object(m["a"])(p,a,s,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-cc5ba3e6.369dd5f6.js.map