(function(t){function e(e){for(var a,l,o=e[0],r=e[1],c=e[2],d=0,v=[];d<o.length;d++)l=o[d],n[l]&&v.push(n[l][0]),n[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,o=1;o<i.length;o++){var r=i[o];0!==n[r]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=i[0]))}return t}var a={},n={app:0},s=[];function l(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=a,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(i,a,function(e){return t[e]}.bind(null,a));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/any-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=r;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"15e8":function(t,e,i){},"3e3f":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")},s=[],l=i("2877"),o={},r=Object(l["a"])(o,n,s,!1,null,null,null);r.options.__file="App.vue";var c=r.exports,u=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("any-vue",{attrs:{id:"app",os:["ios","android","mac","win"][t.platform],base:t.checkState?"vk":"none"}},[i("h3",[t._v("a-tab-bar:")]),i("a-tab-bar",{attrs:{tabs:[1,2,3]},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),i("a-tab-bar",{attrs:{tabs:["iOS","Android","Mac","Win"],kind:"secondary"},model:{value:t.platform,callback:function(e){t.platform=e},expression:"platform"}}),i("div",{staticStyle:{background:"#5181b8",padding:"10px"}},[i("a-tab-bar",{attrs:{tabs:[1,2,3],location:"header"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),i("a-tab-bar",{attrs:{tabs:[1,2,3],location:"header",kind:"secondary"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}})],1),i("h3",[t._v("a-checkbox:")]),i("a-checkbox",{attrs:{"value-on":!0,disabled:""},model:{value:t.checkState,callback:function(e){t.checkState=e},expression:"checkState"}},[t._v("Some label")]),i("br"),i("br"),i("a-checkbox",{attrs:{"value-on":!0},model:{value:t.checkState,callback:function(e){t.checkState=e},expression:"checkState"}},[t._v("Use VK brand styling")]),i("h3",[t._v("a-button:")]),i("a-button",[t._v("Default")]),i("br"),i("br"),i("a-button",{attrs:{size:"small",kind:"secondary"}},[t._v("is-secondary")]),i("br"),i("br"),i("a-button",{attrs:{kind:"commerce",disabled:""}},[t._v("is-disabled")]),i("br"),i("br"),i("a-button",{attrs:{size:"large",kind:"commerce"}},[t._v("is-large")]),i("br"),i("br"),i("a-button",{attrs:{size:"large",kind:"outlined"}},[t._v("is-outlined")]),i("br"),i("br"),i("h3",[t._v("a-text-input:")]),i("a-text-input",{model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}),i("h3",[t._v("a-spinner:")]),i("a-spinner"),i("br"),i("br"),i("a-spinner",{attrs:{size:"small"}}),i("br"),i("br"),i("h3",[t._v("a-switch:")]),i("a-switch",{attrs:{"value-on":"A","value-off":"B"},model:{value:t.switchState,callback:function(e){t.switchState=e},expression:"switchState"}}),i("br"),i("br"),i("br"),i("br"),i("h3",[t._v("a-list:")]),i("a-list",{model:{value:t.listItems,callback:function(e){t.listItems=e},expression:"listItems"}})],1)},v=[],p={data:function(){return{platform:0,tabIndex:0,inputValue:"Test",switchState:!1,checkState:!0,listItems:["Item 1","Item 2",{clickable:!0,title:"Test",accessory:"chevron",value:"Some value"},{title:"Item with a label",label:"Label is below title in non-info rows"},{title:"Item with value",value:"Something"},["1","2","3",{title:"Item with a switch",accessory:"switch",value:!0}],{header:"Group header",footer:"Some footer text",group:["A","B"]},{header:"Info rows",group:[{label:"Дата рождения",title:"30 января 1993",kind:"info"},{label:"Родной город",title:"Ереван",kind:"info"},{label:"Место работы",title:"ВКонтакте",kind:"info"}]},{header:"Clickable rows",group:[{title:"Do an action",kind:"primary",clickable:!0},{title:"Destroy everything",kind:"destructive",clickable:!0}]}]}}},f=p,h=(i("8fc1"),Object(l["a"])(f,d,v,!1,null,null,null));h.options.__file="Index.vue";var b=h.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("any-vue",{attrs:{tabs:[1,2,3]},scopedSlots:t._u([{key:"tab0",fn:function(){return[i("a-list",{attrs:{value:[[{title:"Push child view",clickable:!0,kind:"primary",onclick:t.pushChild}]]}})]},proxy:!0},{key:"tab1",fn:function(){return[t._v("\n    Second tab content\n  ")]},proxy:!0},{key:"tab2",fn:function(){return[i("a-list",{attrs:{value:[[{title:"Just a list with some items",label:"Description label"}]]}})]},proxy:!0}])})},_=[],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-list",{attrs:{value:[{header:"This is a child view",group:[{title:"Push even deeper",kind:"primary",onclick:t.pushChild},{title:"Pop back",kind:"destructive",onclick:function(){return t.$anyvue.pop()}}]}]}})},k=[],g={methods:{pushChild:function(){this.$anyvue.push(S)}}},x=g,w=Object(l["a"])(x,y,k,!1,null,null,null);w.options.__file="Subpage1.vue";var S=w.exports,O={methods:{pushChild:function(){this.$anyvue.push(S)}}},C=O,$=Object(l["a"])(C,m,_,!1,null,null,null);$.options.__file="Navigation.vue";var A=$.exports;a["a"].use(u["a"]);var L=new u["a"]({routes:[{path:"/",name:"index",component:b},{path:"/nav",name:"nav",component:A}]}),I=(i("b786"),i("c53b"),i("15e8"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"any-vue",class:t.classList},[t._l(t.stacks,function(e,a){return a==t.activeStack?i("div",{staticClass:"any-vue__stack",class:a==t.activeStack?"is-active":""},t._l(e.views,function(n,s){return i("div",{staticClass:"any-vue__view",class:t.viewClassList(n,e,s,a),on:{transitionend:function(i){return t.viewTransitionEnd(n,e,s,a)}}},[n?i(n.view,{tag:"component"}):t._t(t.tabs&&t.tabs.length>1?"tab"+a:"default")],2)}),0):t._e()}),i("div",{staticClass:"any-vue__header"}),i("div",{staticClass:"any-vue__footer"},[t.tabs?i("a-tab-bar",{attrs:{location:"footer",tabs:t.tabs},model:{value:t.activeStack,callback:function(e){t.activeStack=e},expression:"activeStack"}}):t._e()],1),i("div",{staticClass:"any-vue__alerts"})],2)}),j=[],B={name:"AnyVue",props:{os:{type:String,default:"ios"},base:{type:String,default:"vk"},theme:{type:String,default:"normal"},tabs:Array},data:function(){return{stacks:(this.tabs||[0]).map(function(){return{activeView:0,views:[!1]}}),activeStack:0}},computed:{classList:function(){return[this.os&&"os-".concat(this.os),this.base&&"base-".concat(this.base),this.theme&&"theme-".concat(this.theme)]}},methods:{viewClassList:function(t,e,i,a){return[!t.presenting&&!t.dismissing&&i==e.activeView&&"is-active",t.presenting&&"is-presenting",t.dismissing&&"is-dismissing"]},viewTransitionEnd:function(t,e,i,a){t.dismissing&&e.views.splice(i,1)},setActiveStack:function(t,e){},push:function(t,e){var i=this;console.log("push",t);var a={view:t,transition:e,presenting:!0};this.stacks[this.activeStack].activeView=this.stacks[this.activeStack].views.push(a)-1,setTimeout(function(){i.$set(a,"presenting",!1)},0)},pop:function(t){console.log("pop");var e=this.stacks[this.activeStack];this.$set(e.views[e.activeView],"dismissing",!0),e.activeView--},popAll:function(t){var e=this.stacks[this.activeStack];e.length>2&&e.splice(1,e.length-2),this.pop(t)}},created:function(){this._isAnyvueRoot=!0}},E=B,T=Object(l["a"])(E,I,j,!1,null,null,null);T.options.__file="AnyVue.vue";var V=T.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"a-button",class:t.classList,attrs:{disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)},z=[],R={name:"AButton",props:{size:{type:String,default:"normal"},kind:{type:String,default:"primary"},disabled:Boolean},computed:{classList:function(){return[this.size&&"is-".concat(this.size),this.kind&&"is-".concat(this.kind),this.disabled&&"is-disabled"]}}},M=R,D=Object(l["a"])(M,P,z,!1,null,null,null);D.options.__file="AButton.vue";var U=D.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"a-switch",class:t.classList,on:{click:function(e){!t.disabled&&t.toggle()}}},[i("div",{staticClass:"a-switch__knob"})])},H=[],J={name:"ASwitch",props:{value:null,valueOn:{default:!0},valueOff:{default:!1},disabled:Boolean},computed:{classList:function(){return[this.isOn?"is-on":"is-off",this.disabled&&"is-disabled"]},isOn:function(){return this.value==this.valueOn}},methods:{toggle:function(){this.$emit("input",this.isOn?this.valueOff:this.valueOn)}}},N=J,G=Object(l["a"])(N,F,H,!1,null,null,null);G.options.__file="ASwitch.vue";var K=G.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"a-checkbox",class:t.classList},[i("input",{ref:"input",staticClass:"a-checkbox__input",attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:t.value===t.valueOn},on:{input:function(e){return t.$emit("input",t.value?t.valueOff:t.valueOn)}}}),t._t("default")],2)},q=[],Q={name:"ACheckbox",props:{kind:{type:String,default:"normal"},value:null,valueOn:{default:!0},valueOff:{default:!1},disabled:Boolean},computed:{classList:function(){return[this.kind&&"is-".concat(this.kind),this.isOn?"is-on":"is-off",this.disabled&&"is-disabled",this.indeterminate&&"is-indeterminate"]},isOn:function(){return this.value===this.valueOn},indeterminate:function(){var t=this.value!==this.valueOn&&this.value!==this.valueOff;return this.$refs.input&&(this.$refs.input.indeterminate=t),t}},mounted:function(){this.$refs.input.indeterminate=this.indeterminate}},X=Q,Y=Object(l["a"])(X,W,q,!1,null,null,null);Y.options.__file="ACheckbox.vue";var Z=Y.exports,tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"a-spinner",class:t.classList})},et=[],it={name:"ASpinner",props:{size:{type:String,default:"normal"}},computed:{classList:function(){return[this.size&&"is-".concat(this.size)]}}},at=it,nt=Object(l["a"])(at,tt,et,!1,null,null,null);nt.options.__file="ASpinner.vue";var st=nt.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"a-list",class:t.classList},[t._l(t.items,function(e,a){var n=e.item,s=(e.group,e.groupHeader),l=e.groupFooter;return t._t(void 0!==s?"group-header":void 0!==l?"group-footer":n&&n.kind||"normal",[void 0!==s?i("div",{staticClass:"a-list__group-header",class:"string"===typeof s?"":"is-empty"},[t._v("\n        "+t._s("string"===typeof s?s:"")+"\n      ")]):void 0!==l?i("div",{staticClass:"a-list__group-footer",class:"string"===typeof l?"":"is-empty"},[t._v("\n        "+t._s("string"===typeof l?l:"")+"\n      ")]):i("a-list-item",{attrs:{kind:n.kind,"value-on":!("object"===typeof n&&"valueOn"in n)||n.valueOn,"value-off":"object"===typeof n&&"valueOff"in n&&n.valueOff,title:n.title||n,label:n.label,accessory:n.accessory},on:{click:function(e){return t.itemClick(e,n,a)}},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"item.value"}})],{item:n})})],2)},ot=[],rt=i("53ca"),ct=(i("ac4d"),i("8a81"),i("ac6a"),{name:"AList",props:{value:Array},computed:{items:function(){var t=[],e=!0,i=!1,a=void 0;try{for(var n,s=this.value[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var l=n.value;if(Array.isArray(l)){t.push({groupHeader:!0});var o=!0,r=!1,c=void 0;try{for(var u,d=l[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){var v=u.value;t.push({group:null,item:v})}}catch(y){r=!0,c=y}finally{try{o||null==d.return||d.return()}finally{if(r)throw c}}t.push({groupFooter:!0})}else if("object"===Object(rt["a"])(l)&&"group"in l){t.push({groupHeader:!("header"in l)||l.header});var p=!0,f=!1,h=void 0;try{for(var b,m=l.group[Symbol.iterator]();!(p=(b=m.next()).done);p=!0){var _=b.value;t.push({group:l,item:_})}}catch(y){f=!0,h=y}finally{try{p||null==m.return||m.return()}finally{if(f)throw h}}t.push({groupFooter:!("footer"in l)||l.footer})}else t.push({item:l})}}catch(y){i=!0,a=y}finally{try{e||null==s.return||s.return()}finally{if(i)throw a}}return t},classList:function(){return[]}},methods:{itemInput:function(t,e,i){console.log("clicked",e,t)},itemClick:function(t,e,i){e.onclick&&e.onclick(t,e)}}}),ut=ct,dt=Object(l["a"])(ut,lt,ot,!1,null,null,null);dt.options.__file="AList.vue";var vt=dt.exports,pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"a-list-item",class:t.classList,on:{click:function(e){return t.$emit("click")}}},[t.actionsLeft&&t.actionsLeft.length?i("div",{staticClass:"a-list-item__actions is-left"},t._l(t.actionsLeft,function(e){return i("div",{staticClass:"a-list-item__action"},[i("div",{staticClass:"a-list-item__action-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")])}),0):t._e(),t.actionsRight&&t.actionsRight.length?i("div",{staticClass:"a-list-item__actions is-right"},t._l(t.actionsRight,function(e){return i("div",{staticClass:"a-list-item__action"},[i("div",{staticClass:"a-list-item__action-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")])}),0):t._e(),i("div",{staticClass:"a-list-item__body"},[t._t("image",[t.imageUrl?i("div",{staticClass:"a-list-item__image",style:{background:"url("+t.imageUrl+")"}}):t._e()]),t._t("content",[i("div",{staticClass:"a-list-item__content"},[t.title?i("div",{staticClass:"a-list-item__title"},[t._t("default",[t._v(t._s(t.title))])],2):t._e(),t.label?i("div",{staticClass:"a-list-item__label"},[t._t("label",[t._v(t._s(t.label))])],2):t._e()])]),t._t("value",["switch"!==t.accessory&&t.value?i("div",{staticClass:"a-list-item__value"},[t._v(t._s(t.value))]):t._e()]),t._t("accessory",["switch"===t.accessory?i("a-switch",{staticClass:"a-list-item__accessory",attrs:{value:t.value,"value-on":t.valueOn,"value-off":t.valueOff},on:{input:function(e){return t.$emit("input",e)}}}):t._e(),"chevron"===t.accessory?i("div",{staticClass:"a-list-item__accessory icon-chevron"}):t._e()])],2)])},ft=[],ht=(i("6762"),i("2fdb"),{name:"AListItem",props:{kind:{type:String,default:"normal"},title:String,label:String,imageUrl:String,accessory:String,value:null,valueOn:{default:!0},valueOff:{default:!1},clickable:{type:Boolean,default:function(){return["primary","destructive"].includes(this.kind)||["chevron","ellipsis"].includes(this.accessory)}},active:Boolean,selected:Boolean,disabled:Boolean,actionsLeft:Array,actionsRight:Array},computed:{classList:function(){return[this.kind&&"is-".concat(this.kind),this.clickable&&"is-clickable",this.selected&&"is-selected",this.active&&"is-active",this.disabled&&"is-disabled"]}}}),bt=ht,mt=Object(l["a"])(bt,pt,ft,!1,null,null,null);mt.options.__file="AListItem.vue";var _t=mt.exports,yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"a-text-input",class:t.classList},[i("input",{staticClass:"a-text-input__input",attrs:{type:"text"},domProps:{value:t.value}})])},kt=[],gt={name:"ATextInput",props:{value:String,disabled:Boolean,multiline:Boolean},computed:{classList:function(){return[this.disabled&&"is-disabled"]}},methods:{}},xt=gt,wt=Object(l["a"])(xt,yt,kt,!1,null,null,null);wt.options.__file="ATextInput.vue";var St=wt.exports,Ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"a-tab-bar",class:t.classList},t._l(t.tabs,function(e,a){return i("div",{staticClass:"a-tab-bar__tab",class:a==t.value?"is-active":"",on:{click:function(e){return t.selectTab(a)}}},[t._v("\n    "+t._s(e.title||e)+"\n  ")])}),0)},Ct=[],$t=(i("c5f6"),{name:"ATabBar",props:{kind:{type:String,default:"primary"},location:{type:String,default:"normal"},tabs:Array,value:Number,disabled:Boolean},computed:{classList:function(){return[this.kind&&"is-".concat(this.kind),this.location&&"is-".concat(this.location),this.disabled&&"is-disabled"]}},methods:{selectTab:function(t){this.$emit("input",t)}}}),At=$t,Lt=Object(l["a"])(At,Ot,Ct,!1,null,null,null);Lt.options.__file="ATabBar.vue";var It=Lt.exports;a["a"].component("any-vue",V),a["a"].component("a-button",U),a["a"].component("a-switch",K),a["a"].component("a-checkbox",Z),a["a"].component("a-spinner",st),a["a"].component("a-list",vt),a["a"].component("a-list-item",_t),a["a"].component("a-text-input",St),a["a"].component("a-tab-bar",It),a["a"].mixin({mounted:function(){this._isAnyvueRoot?this.$anyvue=this:this.$parent&&this.$parent!==this&&this.$parent.$anyvue?this.$anyvue=this.$parent.$anyvue:1==this.$children.length&&this.$children[0]._isAnyvueRoot?this.$anyvue=this.$children[0]:this.$anyvue=null}}),a["a"].config.productionTip=!1,new a["a"]({router:L,render:function(t){return t(c)}}).$mount("#app")},"8fc1":function(t,e,i){"use strict";var a=i("3e3f"),n=i.n(a);n.a},b786:function(t,e,i){t.exports={white:"#fff"}},c53b:function(t,e,i){}});
//# sourceMappingURL=app.3db15b89.js.map