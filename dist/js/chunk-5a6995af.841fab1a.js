(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a6995af"],{"00b4":function(e,t,n){"use strict";n("ac1f");var a=n("23e7"),r=n("da84"),l=n("c65b"),c=n("e330"),o=n("1626"),i=n("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),s=r.Error,d=c(/./.test);a({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!o(t))return d(this,e);var n=l(t,this,e);if(null!==n&&!i(n))throw new s("RegExp exec method returned something other than an Object or null");return!!n}})},"2d05":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAeAQMAAABt+G7kAAAAA1BMVEVMaXFNx9g6AAAAAXRSTlMAQObYZgAAAAtJREFUeF5jGHYAAADSAAEzF5gpAAAAAElFTkSuQmCC"},"4df4":function(e,t,n){"use strict";var a=n("da84"),r=n("0366"),l=n("c65b"),c=n("7b0b"),o=n("9bdd"),i=n("e95a"),u=n("68ee"),s=n("07fa"),d=n("8418"),b=n("9a1f"),m=n("35a1"),f=a.Array;e.exports=function(e){var t=c(e),n=u(this),a=arguments.length,j=a>1?arguments[1]:void 0,p=void 0!==j;p&&(j=r(j,a>2?arguments[2]:void 0));var O,h,v,y,g,w,x=m(t),A=0;if(!x||this==f&&i(x))for(O=s(t),h=n?new this(O):f(O);O>A;A++)w=p?j(t[A],A):t[A],d(h,A,w);else for(y=b(t,x),g=y.next,h=n?new this:[];!(v=l(g,y)).done;A++)w=p?o(y,j,[v.value,A],!0):v.value,d(h,A,w);return h.length=A,h}},6179:function(e,t,n){"use strict";n("a24f")},6669:function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23"),r=n("2d05"),l=n.n(r),c=function(e){return Object(a["H"])("data-v-de4f2bc8"),e=e(),Object(a["F"])(),e},o={class:"grid"},i={class:"col-12"},u={class:"card"},s=c((function(){return Object(a["j"])("h5",null,"Clientes",-1)})),d={class:"flex justify-content-between flex-column sm:flex-row"},b={class:"p-input-icon-left mb-2"},m=c((function(){return Object(a["j"])("i",{class:"pi pi-search"},null,-1)})),f=Object(a["m"])(" No customers found "),j=Object(a["m"])(" Carregando customização de datas. Espere um pouco. "),p=["alt"],O={style:{"margin-left":".5em","vertical-align":"middle"},class:"image-text"},h=["alt","src"],v={style:{"margin-left":".5em","vertical-align":"middle"},class:"image-text"},y=c((function(){return Object(a["j"])("div",{class:"mb-3 text-bold"},"Agent Picker",-1)})),g={class:"p-multiselect-representative-option"},w=["alt","src"],x={style:{"margin-left":".5em","vertical-align":"middle"},class:"image-text"},A={key:1},S={class:"flex align-items-center justify-content-between px-2"},C={class:"col-12"},Y={class:"card"},M=c((function(){return Object(a["j"])("h5",null,"Frozen Columns",-1)})),V={style:{"margin-left":".5em","vertical-align":"middle"},class:"image-text"},_=["alt","src"],Q={style:{"margin-left":".5em","vertical-align":"middle"},class:"image-text"},U={class:"text-bold"},F={class:"col-12"},k={class:"card"},E=c((function(){return Object(a["j"])("h5",null,"Produtos",-1)})),R=["src","alt"],I={class:"p-3"},T={class:"col-12"},D={class:"card"},L=c((function(){return Object(a["j"])("h5",null,"Subheader Grouping",-1)})),N={class:"image-text ml-2"},z=["alt","src"],B={class:"image-text font-bold ml-2"},H={style:{"text-align":"right"},class:"text-bold pr-6"};function G(e,t,n,r,c,G){var P=Object(a["M"])("Button"),X=Object(a["M"])("InputText"),J=Object(a["M"])("Column"),K=Object(a["M"])("MultiSelect"),W=Object(a["M"])("Calendar"),q=Object(a["M"])("InputNumber"),Z=Object(a["M"])("Dropdown"),$=Object(a["M"])("ProgressBar"),ee=Object(a["M"])("Slider"),te=Object(a["M"])("TriStateCheckbox"),ne=Object(a["M"])("DataTable"),ae=Object(a["M"])("ToggleButton"),re=Object(a["M"])("Rating");return Object(a["E"])(),Object(a["i"])("div",o,[Object(a["j"])("div",i,[Object(a["j"])("div",u,[s,Object(a["n"])(ne,{value:c.customer1,paginator:!0,class:"p-datatable-gridlines",rows:10,dataKey:"id",rowHover:!0,filters:c.filters1,"onUpdate:filters":t[2]||(t[2]=function(e){return c.filters1=e}),filterDisplay:"menu",loading:c.loading1,responsiveLayout:"scroll",globalFilterFields:["name","country.name","representative.name","balance","status"]},{header:Object(a["Y"])((function(){return[Object(a["j"])("div",d,[Object(a["n"])(P,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined mb-2",onClick:t[0]||(t[0]=function(e){return G.clearFilter1()})}),Object(a["j"])("span",b,[m,Object(a["n"])(X,{modelValue:c.filters1["global"].value,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.filters1["global"].value=e}),placeholder:"Keyword Search",style:{width:"100%"}},null,8,["modelValue"])])])]})),empty:Object(a["Y"])((function(){return[f]})),loading:Object(a["Y"])((function(){return[j]})),default:Object(a["Y"])((function(){return[Object(a["n"])(J,{field:"name",header:"Nome",style:{"min-width":"12rem"}},{body:Object(a["Y"])((function(e){var t=e.data;return[Object(a["m"])(Object(a["Q"])(t.name),1)]})),filter:Object(a["Y"])((function(e){var t=e.filterModel;return[Object(a["n"])(X,{type:"text",modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},class:"p-column-filter",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(a["n"])(J,{header:"Cidade",filterField:"country.name",style:{"min-width":"12rem"}},{body:Object(a["Y"])((function(e){var t=e.data;return[Object(a["j"])("img",{src:l.a,alt:t.country.name,class:Object(a["x"])("flag flag-"+t.country.code),width:"30"},null,10,p),Object(a["j"])("span",O,Object(a["Q"])(t.country.name),1)]})),filter:Object(a["Y"])((function(e){var t=e.filterModel;return[Object(a["n"])(X,{type:"text",modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},class:"p-column-filter",placeholder:"Search by country"},null,8,["modelValue","onUpdate:modelValue"])]})),filterclear:Object(a["Y"])((function(e){var t=e.filterCallback;return[Object(a["n"])(P,{type:"button",icon:"pi pi-times",onClick:function(e){return t()},class:"p-button-secondary"},null,8,["onClick"])]})),filterapply:Object(a["Y"])((function(e){var t=e.filterCallback;return[Object(a["n"])(P,{type:"button",icon:"pi pi-check",onClick:function(e){return t()},class:"p-button-success"},null,8,["onClick"])]})),_:1}),Object(a["n"])(J,{header:"Agente",filterField:"representative",showFilterMatchModes:!1,filterMenuStyle:{width:"14rem"},style:{"min-width":"14rem"}},{body:Object(a["Y"])((function(e){var t=e.data;return[Object(a["j"])("img",{alt:t.representative.name,src:"images/avatar/"+t.representative.image,width:"32",style:{"vertical-align":"middle"}},null,8,h),Object(a["j"])("span",v,Object(a["Q"])(t.representative.name),1)]})),filter:Object(a["Y"])((function(e){var t=e.filterModel;return[y,Object(a["n"])(K,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},options:c.representatives,optionLabel:"name",placeholder:"Any",class:"p-column-filter"},{option:Object(a["Y"])((function(e){return[Object(a["j"])("div",g,[Object(a["j"])("img",{alt:e.option.name,src:"images/avatar/"+e.option.image,width:"32",style:{"vertical-align":"middle"}},null,8,w),Object(a["j"])("span",x,Object(a["Q"])(e.option.name),1)])]})),_:2},1032,["modelValue","onUpdate:modelValue","options"])]})),_:1}),Object(a["n"])(J,{header:"Data",filterField:"date",dataType:"date",style:{"min-width":"10rem"}},{body:Object(a["Y"])((function(e){var t=e.data;return[Object(a["m"])(Object(a["Q"])(G.formatDate(t.date)),1)]})),filter:Object(a["Y"])((function(e){var t=e.filterModel;return[Object(a["n"])(W,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(a["n"])(J,{header:"Gastos",filterField:"balance",dataType:"numeric",style:{"min-width":"10rem"}},{body:Object(a["Y"])((function(e){var t=e.data;return[Object(a["m"])(Object(a["Q"])(G.formatCurrency(t.balance)),1)]})),filter:Object(a["Y"])((function(e){var t=e.filterModel;return[Object(a["n"])(q,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(a["n"])(J,{field:"status",header:"Status",filterMenuStyle:{width:"14rem"},style:{"min-width":"12rem"}},{body:Object(a["Y"])((function(e){var t=e.data;return[Object(a["j"])("span",{class:Object(a["x"])("customer-badge status-"+t.status)},Object(a["Q"])(t.status),3)]})),filter:Object(a["Y"])((function(e){var t=e.filterModel;return[Object(a["n"])(Z,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},options:c.statuses,placeholder:"Any",class:"p-column-filter",showClear:!0},{value:Object(a["Y"])((function(e){return[e.value?(Object(a["E"])(),Object(a["i"])("span",{key:0,class:Object(a["x"])("customer-badge status-"+e.value)},Object(a["Q"])(e.value),3)):(Object(a["E"])(),Object(a["i"])("span",A,Object(a["Q"])(e.placeholder),1))]})),option:Object(a["Y"])((function(e){return[Object(a["j"])("span",{class:Object(a["x"])("customer-badge status-"+e.option)},Object(a["Q"])(e.option),3)]})),_:2},1032,["modelValue","onUpdate:modelValue","options"])]})),_:1}),Object(a["n"])(J,{field:"activity",header:"Atividades",showFilterMatchModes:!1,style:{"min-width":"12rem"}},{body:Object(a["Y"])((function(e){var t=e.data;return[Object(a["n"])($,{value:t.activity,showValue:!1,style:{height:".5rem"}},null,8,["value"])]})),filter:Object(a["Y"])((function(e){var t=e.filterModel;return[Object(a["n"])(ee,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},range:"",class:"m-3"},null,8,["modelValue","onUpdate:modelValue"]),Object(a["j"])("div",S,[Object(a["j"])("span",null,Object(a["Q"])(t.value?t.value[0]:0),1),Object(a["j"])("span",null,Object(a["Q"])(t.value?t.value[1]:100),1)])]})),_:1}),Object(a["n"])(J,{field:"verified",header:"Verificado",dataType:"boolean",bodyClass:"text-center",style:{"min-width":"8rem"}},{body:Object(a["Y"])((function(e){var t=e.data;return[Object(a["j"])("i",{class:Object(a["x"])(["pi",{"text-green-500 pi-check-circle":t.verified,"text-pink-500 pi-times-circle":!t.verified}])},null,2)]})),filter:Object(a["Y"])((function(e){var t=e.filterModel;return[Object(a["n"])(te,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["value","filters","loading","globalFilterFields"])])]),Object(a["j"])("div",C,[Object(a["j"])("div",Y,[M,Object(a["n"])(ae,{modelValue:c.idFrozen,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.idFrozen=e}),onIcon:"pi pi-lock",offIcon:"pi pi-lock-open",onLabel:"Unfreeze Id",offLabel:"Freeze Id",style:{width:"10rem"}},null,8,["modelValue"]),Object(a["n"])(ne,{value:c.customer2,scrollable:!0,scrollHeight:"400px",loading:c.loading2,scrollDirection:"both",class:"mt-3"},{default:Object(a["Y"])((function(){return[Object(a["n"])(J,{field:"name",header:"Name",style:{width:"150px"},frozen:""}),Object(a["n"])(J,{field:"id",header:"Id",style:{width:"100px"},frozen:c.idFrozen},null,8,["frozen"]),Object(a["n"])(J,{field:"name",header:"Name",style:{width:"200px"}}),Object(a["n"])(J,{field:"country.name",header:"Country",style:{width:"200px"}},{body:Object(a["Y"])((function(e){var t=e.data;return[Object(a["j"])("img",{src:l.a,class:Object(a["x"])("flag flag-"+t.country.code),width:"30"},null,2),Object(a["j"])("span",V,Object(a["Q"])(t.country.name),1)]})),_:1}),Object(a["n"])(J,{field:"date",header:"Date",style:{width:"200px"}}),Object(a["n"])(J,{field:"company",header:"Company",style:{width:"200px"}}),Object(a["n"])(J,{field:"status",header:"Status",style:{width:"200px"}},{body:Object(a["Y"])((function(e){var t=e.data;return[Object(a["j"])("span",{class:Object(a["x"])("customer-badge status-"+t.status)},Object(a["Q"])(t.status),3)]})),_:1}),Object(a["n"])(J,{field:"activity",header:"Activity",style:{width:"200px"}}),Object(a["n"])(J,{field:"representative.name",header:"Representative",style:{width:"200px"}},{body:Object(a["Y"])((function(e){var t=e.data;return[Object(a["j"])("img",{alt:t.representative.name,src:"images/avatar/"+t.representative.image,width:"32",style:{"vertical-align":"middle"}},null,8,_),Object(a["j"])("span",Q,Object(a["Q"])(t.representative.name),1)]})),_:1}),Object(a["n"])(J,{field:"balance",header:"Balance",style:{width:"150px"},frozen:"",alignFrozen:"right"},{body:Object(a["Y"])((function(e){var t=e.data;return[Object(a["j"])("span",U,Object(a["Q"])(G.formatCurrency(t.balance)),1)]})),_:1})]})),_:1},8,["value","loading"])])]),Object(a["j"])("div",F,[Object(a["j"])("div",k,[E,Object(a["n"])(ne,{value:c.products,expandedRows:c.expandedRows,"onUpdate:expandedRows":t[4]||(t[4]=function(e){return c.expandedRows=e}),dataKey:"id",responsiveLayout:"scroll"},{header:Object(a["Y"])((function(){return[Object(a["j"])("div",null,[Object(a["n"])(P,{icon:"pi pi-plus",label:"Expand All",onClick:G.expandAll,class:"mr-2 mb-2"},null,8,["onClick"]),Object(a["n"])(P,{icon:"pi pi-minus",label:"Collapse All",onClick:G.collapseAll,class:"mb-2"},null,8,["onClick"])])]})),expansion:Object(a["Y"])((function(e){return[Object(a["j"])("div",I,[Object(a["j"])("h5",null,"Orders for "+Object(a["Q"])(e.data.name),1),Object(a["n"])(ne,{value:e.data.orders,responsiveLayout:"scroll"},{default:Object(a["Y"])((function(){return[Object(a["n"])(J,{field:"id",header:"Id",sortable:!0},{body:Object(a["Y"])((function(e){return[Object(a["m"])(Object(a["Q"])(e.data.id),1)]})),_:2},1024),Object(a["n"])(J,{field:"customer",header:"Customer",sortable:!0},{body:Object(a["Y"])((function(e){return[Object(a["m"])(Object(a["Q"])(e.data.customer),1)]})),_:2},1024),Object(a["n"])(J,{field:"date",header:"Date",sortable:!0},{body:Object(a["Y"])((function(e){return[Object(a["m"])(Object(a["Q"])(e.data.date),1)]})),_:2},1024),Object(a["n"])(J,{field:"amount",header:"Amount",sortable:!0},{body:Object(a["Y"])((function(e){return[Object(a["m"])(Object(a["Q"])(G.formatCurrency(e.data.amount)),1)]})),_:2},1024),Object(a["n"])(J,{field:"status",header:"Status",sortable:!0},{body:Object(a["Y"])((function(e){return[Object(a["j"])("span",{class:Object(a["x"])("order-badge order-"+(e.data.status?e.data.status.toLowerCase():""))},Object(a["Q"])(e.data.status),3)]})),_:2},1024),Object(a["n"])(J,{headerStyle:"width:4rem"},{body:Object(a["Y"])((function(){return[Object(a["n"])(P,{icon:"pi pi-search"})]})),_:1})]})),_:2},1032,["value"])])]})),default:Object(a["Y"])((function(){return[Object(a["n"])(J,{expander:!0,headerStyle:"width: 3rem"}),Object(a["n"])(J,{field:"name",header:"Name",sortable:!0},{body:Object(a["Y"])((function(e){return[Object(a["m"])(Object(a["Q"])(e.data.name),1)]})),_:1}),Object(a["n"])(J,{header:"Image"},{body:Object(a["Y"])((function(e){return[Object(a["j"])("img",{src:"images/product/"+e.data.image,alt:e.data.image,class:"shadow-2",width:"100"},null,8,R)]})),_:1}),Object(a["n"])(J,{field:"price",header:"Price",sortable:!0},{body:Object(a["Y"])((function(e){return[Object(a["m"])(Object(a["Q"])(G.formatCurrency(e.data.price)),1)]})),_:1}),Object(a["n"])(J,{field:"category",header:"Category",sortable:!0},{body:Object(a["Y"])((function(e){return[Object(a["m"])(Object(a["Q"])(G.formatCurrency(e.data.category)),1)]})),_:1}),Object(a["n"])(J,{field:"rating",header:"Reviews",sortable:!0},{body:Object(a["Y"])((function(e){return[Object(a["n"])(re,{modelValue:e.data.rating,readonly:!0,cancel:!1},null,8,["modelValue"])]})),_:1}),Object(a["n"])(J,{field:"inventoryStatus",header:"Status",sortable:!0},{body:Object(a["Y"])((function(e){return[Object(a["j"])("span",{class:Object(a["x"])("product-badge status-"+(e.data.inventoryStatus?e.data.inventoryStatus.toLowerCase():""))},Object(a["Q"])(e.data.inventoryStatus),3)]})),_:1})]})),_:1},8,["value","expandedRows"])])]),Object(a["j"])("div",T,[Object(a["j"])("div",D,[L,Object(a["n"])(ne,{value:c.customer3,rowGroupMode:"subheader",groupRowsBy:"representative.name",sortMode:"single",sortField:"representative.name",sortOrder:1,scrollable:"",scrollHeight:"400px"},{groupheader:Object(a["Y"])((function(e){return[Object(a["j"])("img",{alt:e.data.representative.name,src:"images/avatar/"+e.data.representative.image,width:"32",style:{"vertical-align":"middle"}},null,8,z),Object(a["j"])("span",B,Object(a["Q"])(e.data.representative.name),1)]})),groupfooter:Object(a["Y"])((function(e){return[Object(a["j"])("td",H,"Total Customers: "+Object(a["Q"])(G.calculateCustomerTotal(e.data.representative.name)),1)]})),default:Object(a["Y"])((function(){return[Object(a["n"])(J,{field:"representative.name",header:"Representative"}),Object(a["n"])(J,{field:"name",header:"Name",style:{"min-width":"200px"}}),Object(a["n"])(J,{field:"country",header:"Country",style:{"min-width":"200px"}},{body:Object(a["Y"])((function(e){return[Object(a["j"])("img",{src:l.a,class:Object(a["x"])("flag flag-"+e.data.country.code),width:"30"},null,2),Object(a["j"])("span",N,Object(a["Q"])(e.data.country.name),1)]})),_:1}),Object(a["n"])(J,{field:"company",header:"Company",style:{"min-width":"200px"}}),Object(a["n"])(J,{field:"status",header:"Status",style:{"min-width":"200px"}},{body:Object(a["Y"])((function(e){return[Object(a["j"])("span",{class:Object(a["x"])("customer-badge status-"+e.data.status)},Object(a["Q"])(e.data.status),3)]})),_:1}),Object(a["n"])(J,{field:"date",header:"Date",style:{"min-width":"200px"}})]})),_:1},8,["value"])])])])}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("d9e2"),n("fb6a"),n("a630"),n("ac1f"),n("00b4");function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function X(e,t){if(e){if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}function J(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=X(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){o=!0,l=e},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}}}n("159b"),n("4de4");var K=n("0393"),W=n("d4ec"),q=n("bee2"),Z=(n("a15b"),n("d81d"),n("b64b"),function(){function e(){Object(W["a"])(this,e)}return Object(q["a"])(e,[{key:"getCustomersSmall",value:function(){return fetch("data/customers-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getCustomersMedium",value:function(){return fetch("data/customers-medium.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getCustomersLarge",value:function(){return fetch("data/customers-large.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getCustomersXLarge",value:function(){return fetch("data/customers-xlarge.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getCustomers",value:function(e){var t=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&");return fetch("https://www.primefaces.org/data/customers?"+t).then((function(e){return e.json()}))}}]),e}()),$=n("e9c0"),ee={data:function(){return{customer1:null,customer2:null,customer3:null,filters1:null,filters2:{},loading1:!0,loading2:!0,idFrozen:!1,products:null,expandedRows:[],statuses:["unqualified","qualified","new","negotiation","renewal","proposal"],representatives:[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}]}},customerService:null,productService:null,created:function(){this.customerService=new Z,this.productService=new $["a"],this.initFilters1()},mounted:function(){var e=this;this.productService.getProductsWithOrdersSmall().then((function(t){return e.products=t})),this.customerService.getCustomersLarge().then((function(t){e.customer1=t,e.loading1=!1,e.customer1.forEach((function(e){return e.date=new Date(e.date)}))})),this.customerService.getCustomersLarge().then((function(t){return e.customer2=t})),this.customerService.getCustomersMedium().then((function(t){return e.customer3=t})),this.loading2=!1},methods:{initFilters1:function(){this.filters1={global:{value:null,matchMode:K["a"].CONTAINS},name:{operator:K["b"].AND,constraints:[{value:null,matchMode:K["a"].STARTS_WITH}]},"country.name":{operator:K["b"].AND,constraints:[{value:null,matchMode:K["a"].STARTS_WITH}]},representative:{value:null,matchMode:K["a"].IN},date:{operator:K["b"].AND,constraints:[{value:null,matchMode:K["a"].DATE_IS}]},balance:{operator:K["b"].AND,constraints:[{value:null,matchMode:K["a"].EQUALS}]},status:{operator:K["b"].OR,constraints:[{value:null,matchMode:K["a"].EQUALS}]},activity:{value:null,matchMode:K["a"].BETWEEN},verified:{value:null,matchMode:K["a"].EQUALS}}},clearFilter1:function(){this.initFilters1()},expandAll:function(){this.expandedRows=this.products.filter((function(e){return e.id}))},collapseAll:function(){this.expandedRows=null},formatCurrency:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},formatDate:function(e){return e.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})},calculateCustomerTotal:function(e){var t=0;if(this.customer3){var n,a=J(this.customer3);try{for(a.s();!(n=a.n()).done;){var r=n.value;r.representative.name===e&&t++}}catch(l){a.e(l)}finally{a.f()}}return t}}},te=(n("6179"),n("6b0d")),ne=n.n(te);const ae=ne()(ee,[["render",G],["__scopeId","data-v-de4f2bc8"]]);t["default"]=ae},"9bdd":function(e,t,n){var a=n("825a"),r=n("2a62");e.exports=function(e,t,n,l){try{return l?t(a(n)[0],n[1]):t(n)}catch(c){r(e,"throw",c)}}},a24f:function(e,t,n){},a630:function(e,t,n){var a=n("23e7"),r=n("4df4"),l=n("1c7e"),c=!l((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:c},{from:r})},fb6a:function(e,t,n){"use strict";var a=n("23e7"),r=n("da84"),l=n("e8b5"),c=n("68ee"),o=n("861d"),i=n("23cb"),u=n("07fa"),s=n("fc6a"),d=n("8418"),b=n("b622"),m=n("1dde"),f=n("f36a"),j=m("slice"),p=b("species"),O=r.Array,h=Math.max;a({target:"Array",proto:!0,forced:!j},{slice:function(e,t){var n,a,r,b=s(this),m=u(b),j=i(e,m),v=i(void 0===t?m:t,m);if(l(b)&&(n=b.constructor,c(n)&&(n===O||l(n.prototype))?n=void 0:o(n)&&(n=n[p],null===n&&(n=void 0)),n===O||void 0===n))return f(b,j,v);for(a=new(void 0===n?O:n)(h(v-j,0)),r=0;j<v;j++,r++)j in b&&d(a,r,b[j]);return a.length=r,a}})}}]);
//# sourceMappingURL=chunk-5a6995af.841fab1a.js.map