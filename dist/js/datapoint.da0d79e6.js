(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["datapoint"],{1276:function(t,e,a){"use strict";var n=a("d784"),i=a("44e7"),r=a("825a"),s=a("1d80"),o=a("4840"),l=a("8aa5"),c=a("50c4"),u=a("14c3"),d=a("9263"),h=a("d039"),p=[].push,f=Math.min,g=4294967295,v=!h((function(){return!RegExp(g,"y")}));n("split",2,(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(s(this)),r=void 0===a?g:a>>>0;if(0===r)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,r);var o,l,c,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=new RegExp(t.source,h+"g");while(o=d.call(v,n)){if(l=v.lastIndex,l>f&&(u.push(n.slice(f,o.index)),o.length>1&&o.index<n.length&&p.apply(u,o.slice(1)),c=o[0].length,f=l,u.length>=r))break;v.lastIndex===o.index&&v.lastIndex++}return f===n.length?!c&&v.test("")||u.push(""):u.push(n.slice(f)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var i=s(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,i,a):n.call(String(i),e,a)},function(t,i){var s=a(n,t,this,i,n!==e);if(s.done)return s.value;var d=r(t),h=String(this),p=o(d,RegExp),y=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),x=new p(v?d:"^(?:"+d.source+")",m),b=void 0===i?g:i>>>0;if(0===b)return[];if(0===h.length)return null===u(x,h)?[h]:[];var C=0,S=0,w=[];while(S<h.length){x.lastIndex=v?S:0;var T,_=u(x,v?h:h.slice(S));if(null===_||(T=f(c(x.lastIndex+(v?0:S)),h.length))===C)S=l(h,S,y);else{if(w.push(h.slice(C,S)),w.length===b)return w;for(var E=1;E<=_.length-1;E++)if(w.push(_[E]),w.length===b)return w;S=C=T}}return w.push(h.slice(C)),w}]}),!v)},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,a){var n=a("c6b6"),i=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},2532:function(t,e,a){"use strict";var n=a("23e7"),i=a("5a34"),r=a("1d80"),s=a("ab13");n({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(r(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"3e0f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"font-serif flex flex-wrap"},[a("h5",{staticClass:"md:hidden text-center mx-auto font-bold text-xl text-transpurple my-8"},[t._v(" Welcome to our data portal ")]),a("aside",{staticClass:"w-full md:w-1/4 bg-transpurple px-6 py-4 text-white"},[a("p",[t._v("Filter Parameters")]),a("hr",{staticClass:"my-4"}),a("p",[t._v("State")]),a("tags-input",{staticClass:"rounded-lg",attrs:{"only-existing-tags":"true","add-tags-on-comma":"true","add-tags-on-blur":"true",typeahead:"true","typeahead-style":"dropdown","typeahead-url":t.url}}),a("hr",{staticClass:"my-2"}),a("p",[t._v("Agency")]),a("tags-input",{staticClass:"rounded-lg",attrs:{"only-existing-tags":"true","add-tags-on-comma":"true","add-tags-on-blur":"true",typeahead:"true","typeahead-style":"dropdown","typeahead-url":t.url}}),a("hr",{staticClass:"my-2"}),a("p",[t._v("Crime")]),a("tags-input",{staticClass:"rounded-lg",attrs:{"only-existing-tags":"true","add-tags-on-comma":"true","add-tags-on-blur":"true",typeahead:"true","typeahead-style":"dropdown","typeahead-url":t.url}}),a("hr",{staticClass:"my-2"}),a("p",[t._v("Court")]),a("tags-input",{staticClass:"rounded-lg",attrs:{"only-existing-tags":"true","add-tags-on-comma":"true","add-tags-on-blur":"true",typeahead:"true","typeahead-style":"dropdown","typeahead-url":t.url}}),a("hr",{staticClass:"my-2"}),a("p",[t._v("Judge")]),a("tags-input",{staticClass:"rounded-lg",attrs:{"only-existing-tags":"true","add-tags-on-comma":"true","add-tags-on-blur":"true",typeahead:"true","typeahead-style":"dropdown","typeahead-url":t.url}})],1),a("main",{staticClass:"bg-hero w-full md:w-3/4 md:pt-2"},[a("div",{staticClass:"hidden md:flex items-center h-10 px-4"},[a("h2",{staticClass:"text-lg font-medium truncate mr-5"},[t._v("Data Portal")]),a("a",{staticClass:"ml-auto flex text-theme-1 dark:text-theme-10",attrs:{href:""}},[a("RefreshCcwIcon",{staticClass:"mr-3"}),t._v(" Reload Data ")],1)]),a("div",{staticClass:"entry-points pt-4 w-full bg-gray-200 md:my-4 mb-4 px-4"},[a("p",{staticClass:"mb-4"},[t._v("Filters")]),a("div",{staticClass:"flex flex-wrap"},t._l(t.mockState,(function(e,n){return a("StatePill",{key:n,staticClass:"mr-4 bg-selected rounded-full mb-4",class:{"bg-pill":!t.selectedLocationCategory.includes(e)}},[a("span",[t._v(t._s(e))])])})),1)]),a("section",{staticClass:"h-auto md:my-4"},[a("div",{staticClass:"grid grid-cols-12 gap-6 mt-5 px-6 mb-4"},[a("div",{staticClass:"col-span-12 sm:col-span-6 xl:col-span-3"},[a("div",{staticClass:"report-box zoom-in"},[a("div",{staticClass:"box p-5"},[a("div",{staticClass:"flex"},[a("ShoppingCartIcon",{staticClass:"report-box__icon text-theme-10"}),a("div",{staticClass:"ml-auto"},[a("Tippy",{staticClass:"report-box__indicator bg-theme-9 cursor-pointer",attrs:{tag:"div",content:"33% Higher than last month"}},[t._v(" 33% "),a("ChevronUpIcon",{staticClass:"w-4 h-4"})],1)],1)],1),a("div",{staticClass:"text-3xl font-bold leading-8 mt-6"},[t._v("4.510")]),a("div",{staticClass:"text-base text-gray-600 mt-1"},[t._v("Item Sales")])])])]),a("div",{staticClass:"col-span-12 sm:col-span-6 xl:col-span-3"},[a("div",{staticClass:"report-box zoom-in"},[a("div",{staticClass:"box p-5"},[a("div",{staticClass:"flex"},[a("CreditCardIcon",{staticClass:"report-box__icon text-theme-11"}),a("div",{staticClass:"ml-auto"},[a("Tippy",{staticClass:"report-box__indicator bg-theme-6 cursor-pointer",attrs:{tag:"div",content:"2% Lower than last month"}},[t._v(" 2% "),a("ChevronDownIcon",{staticClass:"w-4 h-4"})],1)],1)],1),a("div",{staticClass:"text-3xl font-bold leading-8 mt-6"},[t._v("3.521")]),a("div",{staticClass:"text-base text-gray-600 mt-1"},[t._v("New Orders")])])])]),a("div",{staticClass:"col-span-12 sm:col-span-6 xl:col-span-3"},[a("div",{staticClass:"report-box zoom-in"},[a("div",{staticClass:"box p-5"},[a("div",{staticClass:"flex"},[a("MonitorIcon",{staticClass:"report-box__icon text-theme-12"}),a("div",{staticClass:"ml-auto"},[a("Tippy",{staticClass:"report-box__indicator bg-theme-9 cursor-pointer",attrs:{tag:"div",content:"12% Higher than last month"}},[t._v(" 12% "),a("ChevronUpIcon",{staticClass:"w-4 h-4"})],1)],1)],1),a("div",{staticClass:"text-3xl font-bold leading-8 mt-6"},[t._v("2.145")]),a("div",{staticClass:"text-base text-gray-600 mt-1"},[t._v("Total Products")])])])]),a("div",{staticClass:"col-span-12 sm:col-span-6 xl:col-span-3"},[a("div",{staticClass:"report-box zoom-in"},[a("div",{staticClass:"box p-5"},[a("div",{staticClass:"flex"},[a("UserIcon",{staticClass:"report-box__icon text-theme-9"}),a("div",{staticClass:"ml-auto"},[a("Tippy",{staticClass:"report-box__indicator bg-theme-9 cursor-pointer",attrs:{tag:"div",content:"22% Higher than last month"}},[t._v(" 22% "),a("ChevronUpIcon",{staticClass:"w-4 h-4"})],1)],1)],1),a("div",{staticClass:"text-3xl font-bold leading-8 mt-6"},[t._v("152.000")]),a("div",{staticClass:"text-base text-gray-600 mt-1"},[t._v("Unique Visitor")])])])])]),a("div",{staticClass:"w-full flex flex-col items-center lg:px-6 px-2"},[a("div",{staticClass:"w-full mb-4 max-w-full bg-white rounded-lg shadow-md"},[t._m(0),a("div",{staticClass:"py-4 px-4 lg:px-6"},[a("BarChart",{attrs:{chartdata:t.chartdata,options:t.options}})],1)])]),a("div",{staticClass:"w-full flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 items-center gap-4 lg:px-6 px-2"},[a("div",{staticClass:"w-full mb-4 max-w-full bg-white rounded-lg shadow-md"},[t._m(1),a("div",{staticClass:"py-4 px-4 lg:px-6"},[a("BarChart",{attrs:{chartdata:t.chartdata,options:t.options}})],1)]),a("div",{staticClass:"w-full mb-4 max-w-full bg-white rounded-lg shadow-md"},[t._m(2),a("div",{staticClass:"py-4 px-4 lg:px-6"},[a("BarChart",{attrs:{chartdata:t.chartdata,options:t.options}})],1)]),a("div",{staticClass:"w-full mb-4 max-w-full bg-white rounded-lg shadow-md"},[t._m(3),a("div",{staticClass:"py-4 px-4 lg:px-6"},[a("BarChart",{attrs:{chartdata:t.chartdata,options:t.options}})],1)])])])]),a("Footer",{attrs:{className:"bg-white"}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col items-center p-4 border-b border-gray-200 dark:border-dark-5"},[a("h2",{staticClass:"font-medium text-base mr-auto"},[t._v("Vertical Bar Chart")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col items-center p-4 border-b border-gray-200 dark:border-dark-5"},[a("h2",{staticClass:"font-medium text-base mr-auto"},[t._v("Vertical Bar Chart")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col items-center p-4 border-b border-gray-200 dark:border-dark-5"},[a("h2",{staticClass:"font-medium text-base mr-auto"},[t._v("Vertical Bar Chart")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col items-center p-4 border-b border-gray-200 dark:border-dark-5"},[a("h2",{staticClass:"font-medium text-base mr-auto"},[t._v("Vertical Bar Chart")])])}],r=(a("caad"),a("c975"),a("a434"),a("2532"),a("c3ab")),s=a("34c7"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-tags-input",{class:t.className,attrs:{"only-existing-tags":!0,"add-tags-on-comma":!0,"add-tags-on-blur":!0,typeahead:!0,"typeahead-style":"dropdown","typeahead-url":t.url}})},l=[],c=function(){var t,e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"tags-input-root",staticStyle:{position:"relative"}},[n("div",{class:(t={},t[e.wrapperClass+" tags-input"]=!0,t["active"]=e.isActive,t["disabled"]=e.disabled,t)},[e._l(e.tags,(function(t,a){return n("span",{key:a,staticClass:"tags-input-badge tags-input-badge-pill tags-input-badge-selected-default",class:{disabled:e.disabled}},[e._t("selected-tag",[n("span",{domProps:{innerHTML:e._s(t[e.textField])}}),n("a",{directives:[{name:"show",rawName:"v-show",value:!e.disabled,expression:"!disabled"}],staticClass:"tags-input-remove",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.removeTag(a)}}})],{tag:t,index:a,removeTag:e.removeTag})],2)})),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"},{name:"show",rawName:"v-show",value:!e.hideInputField,expression:"!hideInputField"}],ref:"taginput",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.input},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.tagFromInput(!1))},function(t){return t.type.indexOf("key")||8===t.keyCode?e.removeLastTag(t):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.nextSearchResult(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.prevSearchResult(t)},e.onKeyDown],keyup:[e.onKeyUp,function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.clearSearchResults(t)}],focus:e.onFocus,click:e.onClick,blur:e.onBlur,value:e.tags,input:function(t){t.target.composing||(e.input=t.target.value)}}}),e.elementId?n("div",{staticStyle:{display:"none"}},e._l(e.tags,(function(t,a){return n("input",{key:a,attrs:{type:"hidden",name:e.elementId+"[]"},domProps:{value:e.hiddenInputValue(t)}})})),0):e._e()],2),n("div",{directives:[{name:"show",rawName:"v-show",value:e.searchResults.length,expression:"searchResults.length"}]},["badges"===e.typeaheadStyle?n("p",{class:"typeahead-"+e.typeaheadStyle},[e.typeaheadHideDiscard?e._e():n("span",{staticClass:"tags-input-badge typeahead-hide-btn tags-input-typeahead-item-default",domProps:{textContent:e._s(e.discardSearchText)},on:{click:function(t){return t.preventDefault(),e.clearSearchResults(!0)}}}),e._l(e.searchResults,(function(t,a){return n("span",{key:a,staticClass:"tags-input-badge",class:{"tags-input-typeahead-item-default":a!=e.searchSelection,"tags-input-typeahead-item-highlighted-default":a==e.searchSelection},domProps:{innerHTML:e._s(t[e.textField])},on:{mouseover:function(t){e.searchSelection=a},mousedown:function(a){return a.preventDefault(),e.tagFromSearchOnClick(t)}}})}))],2):"dropdown"===e.typeaheadStyle?n("ul",{class:"typeahead-"+e.typeaheadStyle},[e.typeaheadHideDiscard?e._e():n("li",{staticClass:"tags-input-typeahead-item-default typeahead-hide-btn",domProps:{textContent:e._s(e.discardSearchText)},on:{click:function(t){return t.preventDefault(),e.clearSearchResults(!0)}}}),e._l(e.searchResults,(function(t,a){return n("li",{key:a,class:{"tags-input-typeahead-item-default":a!=e.searchSelection,"tags-input-typeahead-item-highlighted-default":a==e.searchSelection},domProps:{innerHTML:e._s(t[e.textField])},on:{mouseover:function(t){e.searchSelection=a},mousedown:function(a){return a.preventDefault(),e.tagFromSearchOnClick(t)}}})}))],2):e._e()])])},u=[];a("99af"),a("d81d"),a("fb6a"),a("a9e3"),a("ac1f"),a("8a79"),a("5319"),a("841c"),a("1276"),a("498a");function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var h=a("6b75");function p(t){if(Array.isArray(t))return Object(h["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function f(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var g=a("06c5");function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(t){return p(t)||f(t)||Object(g["a"])(t)||v()}function m(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=Object(g["a"])(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return s=t.done,t},e:function(t){o=!0,r=t},f:function(){try{s||null==a["return"]||a["return"]()}finally{if(o)throw r}}}}var x={props:{elementId:String,existingTags:{type:Array,default:function(){return[]}},value:{type:Array,default:function(){return[]}},idField:{type:String,default:"key"},textField:{type:String,default:"value"},valueFields:{type:String,default:null},disabled:{type:Boolean,default:!1},typeahead:{type:Boolean,default:!1},typeaheadStyle:{type:String,default:"badges"},typeaheadActivationThreshold:{type:Number,default:1},typeaheadMaxResults:{type:Number,default:0},typeaheadAlwaysShow:{type:Boolean,default:!1},typeaheadShowOnFocus:{type:Boolean,default:!0},typeaheadHideDiscard:{type:Boolean,default:!1},typeaheadUrl:{type:String,default:""},placeholder:{type:String,default:"Add a tag"},discardSearchText:{type:String,default:"Discard Search Results"},limit:{type:Number,default:0},hideInputOnLimit:{type:Boolean,default:!1},onlyExistingTags:{type:Boolean,default:!1},deleteOnBackspace:{type:Boolean,default:!0},allowDuplicates:{type:Boolean,default:!1},validate:{type:Function,default:function(){return!0}},addTagsOnComma:{type:Boolean,default:!1},addTagsOnSpace:{type:Boolean,default:!1},addTagsOnBlur:{type:Boolean,default:!1},wrapperClass:{type:String,default:"tags-input-wrapper-default"},sortSearchResults:{type:Boolean,default:!0},caseSensitiveTags:{type:Boolean,default:!1},beforeAddingTag:{type:Function,default:function(){return!0}},beforeRemovingTag:{type:Function,default:function(){return!0}}},data:function(){return{badgeId:0,tags:[],input:"",oldInput:"",hiddenInput:"",searchResults:[],searchSelection:0,selectedTag:-1,isActive:!1}},created:function(){this.typeaheadTags=this.cloneArray(this.existingTags),this.tagsFromValue(),this.typeaheadAlwaysShow&&this.searchTag(!1)},mounted:function(){var t=this;this.$emit("initialized"),document.addEventListener("click",(function(e){e.target!==t.$refs["taginput"]&&t.clearSearchResults()}))},computed:{hideInputField:function(){return this.hideInputOnLimit&&this.limit>0&&this.tags.length>=this.limit||this.disabled}},watch:{input:function(t,e){if(this.searchTag(!1),t.length&&t!=e){t.substring(e.length,t.length);this.addTagsOnSpace&&t.endsWith(" ")&&(this.input=t.trim(),this.tagFromInput(!0)),this.addTagsOnComma&&(t=t.trim(),t.endsWith(",")&&(this.input=t.substring(0,t.length-1),this.tagFromInput(!0))),this.$emit("change",t)}},existingTags:function(t){this.typeaheadTags.splice(),this.typeaheadTags=this.cloneArray(t),this.searchTag()},tags:function(){this.hiddenInput=JSON.stringify(this.tags),this.$emit("input",this.tags)},value:function(){this.tagsFromValue()},typeaheadAlwaysShow:function(t){t?this.searchTag(!1):this.clearSearchResults()}},methods:{escapeRegExp:function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},tagFromInput:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.searchResults.length&&this.searchSelection>=0&&!t)this.tagFromSearch(this.searchResults[this.searchSelection]),this.input="";else{var e=this.input.trim();if(!this.onlyExistingTags&&e.length&&this.validate(e)){this.input="";var a,n={key:"",value:e},i=this.escapeRegExp(this.caseSensitiveTags?n[this.textField]:n[this.textField].toLowerCase()),r=m(this.typeaheadTags);try{for(r.s();!(a=r.n()).done;){var s=a.value,o=this.escapeRegExp(this.caseSensitiveTags?s[this.textField]:s[this.textField].toLowerCase());if(i===o){n=Object.assign({},s);break}}}catch(l){r.e(l)}finally{r.f()}this.addTag(n)}}},tagFromSearchOnClick:function(t){this.tagFromSearch(t),this.$refs["taginput"].blur()},tagFromSearch:function(t){var e=this;this.clearSearchResults(),this.addTag(t),this.$nextTick((function(){e.input="",e.oldInput=""}))},addTag:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.disabled||a)return!!this.beforeAddingTag(t)&&(this.limit>0&&this.tags.length>=this.limit?(this.$emit("limit-reached"),!1):void(this.tagSelected(t)||(this.tags.push(t),this.$nextTick((function(){e.$emit("tag-added",t),e.$emit("tags-updated")})))))},removeLastTag:function(){!this.input.length&&this.deleteOnBackspace&&this.tags.length&&this.removeTag(this.tags.length-1)},removeTag:function(t){var e=this;if(!this.disabled){var a=this.tags[t];if(!this.beforeRemovingTag(a))return!1;this.tags.splice(t,1),this.$nextTick((function(){e.$emit("tag-removed",a),e.$emit("tags-updated"),e.typeaheadAlwaysShow&&e.searchTag()}))}},searchTag:function(){if(!0!==this.typeahead)return!1;if(this.oldInput!=this.input||!this.searchResults.length&&0==this.typeaheadActivationThreshold||this.typeaheadAlwaysShow||this.typeaheadShowOnFocus){this.searchResults=[],this.searchSelection=0;var t=this.input.trim();if(t.length&&t.length>=this.typeaheadActivationThreshold||0==this.typeaheadActivationThreshold||this.typeaheadAlwaysShow){var e=this.escapeRegExp(this.caseSensitiveTags?t:t.toLowerCase());if(this.typeaheadUrl.length>0){this.typeaheadTags.splice();var a=new XMLHttpRequest,n=this;a.onreadystatechange=function(){4==this.readyState&&200==this.status&&(n.typeaheadTags=JSON.parse(a.responseText),n.doSearch(e))};var i=this.typeaheadUrl.replace(":search",e);a.open("GET",i,!0),a.send()}else this.doSearch(e)}this.oldInput=this.input}},doSearch:function(t){var e,a=this,n=m(this.typeaheadTags);try{for(n.s();!(e=n.n()).done;){var i=e.value,r=this.caseSensitiveTags?i[this.textField]:i[this.textField].toLowerCase();r.search(t)>-1&&!this.tagSelected(i)&&this.searchResults.push(i)}}catch(s){n.e(s)}finally{n.f()}this.sortSearchResults&&this.searchResults.sort((function(t,e){return t[a.textField]<e[a.textField]?-1:t[a.textField]>e[a.textField]?1:0})),this.typeaheadMaxResults>0&&(this.searchResults=this.searchResults.slice(0,this.typeaheadMaxResults))},hideTypeahead:function(){var t=this;this.input.length||this.$nextTick((function(){t.clearSearchResults()}))},nextSearchResult:function(){this.searchSelection+1<=this.searchResults.length-1&&this.searchSelection++},prevSearchResult:function(){this.searchSelection>0&&this.searchSelection--},clearSearchResults:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.searchResults=[],this.searchSelection=0,this.typeaheadAlwaysShow&&this.$nextTick((function(){t.searchTag()})),e&&this.$refs["taginput"].focus()},clearTags:function(){this.tags.splice(0,this.tags.length)},tagsFromValue:function(){if(this.value&&this.value.length){if(!Array.isArray(this.value))return void console.error("Voerro Tags Input: the v-model value must be an array!");var t=this.value;if(this.tags==t)return;this.clearTags();var e,a=m(t);try{for(a.s();!(e=a.n()).done;){var n=e.value;this.addTag(n,!0)}}catch(i){a.e(i)}finally{a.f()}}else{if(0==this.tags.length)return;this.clearTags()}},tagSelected:function(t){if(this.allowDuplicates)return!1;if(!t)return!1;var e,a=this.escapeRegExp(this.caseSensitiveTags?t[this.textField]:t[this.textField].toLowerCase()),n=m(this.tags);try{for(n.s();!(e=n.n()).done;){var i=e.value,r=this.caseSensitiveTags?i[this.textField]:i[this.textField].toLowerCase();if(i[this.idField]===t[this.idField]&&this.escapeRegExp(r).length==a.length&&r.search(a)>-1)return!0}}catch(s){n.e(s)}finally{n.f()}return!1},clearInput:function(){this.input=""},onKeyUp:function(t){this.$emit("keyup",t)},onKeyDown:function(t){this.$emit("keydown",t)},onFocus:function(t){this.$emit("focus",t),this.isActive=!0},onClick:function(t){this.$emit("click",t),this.isActive=!0,this.searchTag()},onBlur:function(t){this.$emit("blur",t),this.addTagsOnBlur&&this.tagFromInput(!0),this.typeaheadAlwaysShow?this.searchTag():this.hideTypeahead(),this.isActive=!1},hiddenInputValue:function(t){if(!this.valueFields)return JSON.stringify(t);var e=this.valueFields.replace(/\s/,"").split(",");return 1===e.length?t[e[0]]:JSON.stringify(Object.assign.apply(Object,[{}].concat(y(e.map((function(e){return d({},e,t[e])}))))))},cloneArray:function(t){return t.map((function(t){return Object.assign({},t)}))}}},b=x,C=a("2877"),S=Object(C["a"])(b,c,u,!1,null,null,null),w=S.exports;window.VoerroTagsInput=w;var T=w,_={name:"TagsInput",props:["url","className"],components:{VueTagsInput:T}},E=_,A=Object(C["a"])(E,o,l,!1,null,"55bd9f66",null),I=A.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex justify-start"},[a("h1",{staticClass:"text-xs leading-15 cursor-pointer flex items-center inline-block px-3 py-1 rounded-full leading-20 text-white"},[t._t("default",[t._v("Fraud")])],2)])},R=[],F={name:"StatePill"},O=F,B=Object(C["a"])(O,k,R,!1,null,"5908cd2c",null),$=B.exports,P=a("33c7"),N={name:"ResultPageByDataPoints",created:function(){this.gridData=r["a"]},mounted:function(){this.url="http://example.com"},components:{BarChart:s["a"],TagsInput:I,StatePill:$,Footer:P["a"]},data:function(){return{activeParameter:"location",selectedLocationCategory:[],selectedEntityCategory:[],selectedPersonaCategory:[],selectedCrimeCategory:[],selectedAgencyCategory:[],gridData:[],url:"http://example.com",mockState:["Lagos","Kogi","Ekiti","Abia","Kaduna","Kano","Adamawa","Bauchi"],mockCourt:["Federal High Court, Awka, Anambra","Federal High Court, Abuja, FCT","Federal High Court, Barnawa Kaduna"],mockJudge:["Hon. Justice I.B. Gafai","Hon. Justice U. Abiola","Hon. Justice M.A Olayinka"],mockCrime:["Money Laundering","Fraud","Bribery"],mockAgency:["ICPC","EFCC"],dropdownParameters:[{id:"location",title:"Location",dropMenu:"Select State"},{id:"entity",title:"Entity",dropMenu:"Court"},{id:"persona",title:"Persona",dropMenu:"Judges"},{id:"crime",title:"Crime",dropMenu:"Select type"},{id:"enforcement",title:"Enforcement",dropMenu:"Agency"}],columns:["Accused Person/Defendent","Alleged Offence","Presiding Judge","Court","Agency","Date of sittings"],chartdata:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],datasets:[{label:"Html Template",barPercentage:.5,barThickness:6,maxBarThickness:8,minBarLength:2,data:[0,200,250,200,500,450,850,1050],backgroundColor:"#3160D8"},{label:"VueJs Template",barPercentage:.5,barThickness:6,maxBarThickness:8,minBarLength:2,data:[0,300,400,560,320,600,720,850],backgroundColor:"#BCBABA"}]},options:{scales:{xAxes:[{ticks:{fontSize:"12",fontColor:"#777777"},gridLines:{display:!1}}],yAxes:[{ticks:{fontSize:"12",fontColor:"#777777",callback:function(t){return"$"+t}},gridLines:{color:"#D8D8D8",zeroLineColor:"#D8D8D8",borderDash:[2,2],zeroLineBorderDash:[2,2],drawBorder:!1}}]}}}},methods:{addToLocation:function(t){!this.selectedLocationCategory.includes(t)&&this.selectedLocationCategory.push(t)},addToEntity:function(t){!this.selectedEntityCategory.includes(t)&&this.selectedEntityCategory.push(t)},addToPersona:function(t){!this.selectedPersonaCategory.includes(t)&&this.selectedPersonaCategory.push(t)},addToCrime:function(t){!this.selectedCrimeCategory.includes(t)&&this.selectedCrimeCategory.push(t)},addToAgency:function(t){!this.selectedAgencyCategory.includes(t)&&this.selectedAgencyCategory.push(t)},removeItemFromSelectedCategory:function(t,e){if("location"===t){var a=this.selectedLocationCategory.indexOf(e);console.log(a),this.selectedLocationCategory.splice(a,1)}if("entity"===t){var n=this.selectedEntityCategory.indexOf(e);console.log(n),this.selectedEntityCategory.splice(n,1)}if("persona"===t){var i=this.selectedPersonaCategory.indexOf(e);console.log(i),this.selectedPersonaCategory.splice(i,1)}if("crime"===t){var r=this.selectedCrimeCategory.indexOf(e);console.log(r),this.selectedCrimeCategory.splice(r,1)}if("agency"===t){var s=this.selectedAgencyCategory.indexOf(e);console.log(s),this.selectedAgencyCategory.splice(s,1)}}},computed:{filteredData:function(){var t=this.filterQuery,e=this.gridData;return t&&e.sort((function(e,a){return e=e[t],a=a[t],e===a?0:e>a?1:-1})),e}}},D=N,L=Object(C["a"])(D,n,i,!1,null,"fa473dce",null);e["default"]=L.exports},"44e7":function(t,e,a){var n=a("861d"),i=a("c6b6"),r=a("b622"),s=r("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},"498a":function(t,e,a){"use strict";var n=a("23e7"),i=a("58a8").trim,r=a("c8d2");n({target:"String",proto:!0,forced:r("trim")},{trim:function(){return i(this)}})},5319:function(t,e,a){"use strict";var n=a("d784"),i=a("825a"),r=a("7b0b"),s=a("50c4"),o=a("a691"),l=a("1d80"),c=a("8aa5"),u=a("14c3"),d=Math.max,h=Math.min,p=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a,n){var y=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,x=y?"$":"$0";return[function(a,n){var i=l(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,i,n):e.call(String(i),a,n)},function(t,n){if(!y&&m||"string"===typeof n&&-1===n.indexOf(x)){var r=a(e,t,this,n);if(r.done)return r.value}var l=i(t),p=String(this),f="function"===typeof n;f||(n=String(n));var g=l.global;if(g){var C=l.unicode;l.lastIndex=0}var S=[];while(1){var w=u(l,p);if(null===w)break;if(S.push(w),!g)break;var T=String(w[0]);""===T&&(l.lastIndex=c(p,s(l.lastIndex),C))}for(var _="",E=0,A=0;A<S.length;A++){w=S[A];for(var I=String(w[0]),k=d(h(o(w.index),p.length),0),R=[],F=1;F<w.length;F++)R.push(v(w[F]));var O=w.groups;if(f){var B=[I].concat(R,k,p);void 0!==O&&B.push(O);var $=String(n.apply(void 0,B))}else $=b(I,p,k,R,O,n);k>=E&&(_+=p.slice(E,k)+$,E=k+I.length)}return _+p.slice(E)}];function b(t,a,n,i,s,o){var l=n+t.length,c=i.length,u=g;return void 0!==s&&(s=r(s),u=f),e.call(o,u,(function(e,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,n);case"'":return a.slice(l);case"<":o=s[r.slice(1,-1)];break;default:var u=+r;if(0===u)return e;if(u>c){var d=p(u/10);return 0===d?e:d<=c?void 0===i[d-1]?r.charAt(1):i[d-1]+r.charAt(1):e}o=i[u-1]}return void 0===o?"":o}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),i=a("5899"),r="["+i+"]",s=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),l=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:l(1),end:l(2),trim:l(3)}},"5a34":function(t,e,a){var n=a("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},7156:function(t,e,a){var n=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var r,s;return i&&"function"==typeof(r=e.constructor)&&r!==a&&n(s=r.prototype)&&s!==a.prototype&&i(t,s),t}},"841c":function(t,e,a){"use strict";var n=a("d784"),i=a("825a"),r=a("1d80"),s=a("129f"),o=a("14c3");n("search",1,(function(t,e,a){return[function(e){var a=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a):new RegExp(e)[t](String(a))},function(t){var n=a(e,t,this);if(n.done)return n.value;var r=i(t),l=String(this),c=r.lastIndex;s(c,0)||(r.lastIndex=0);var u=o(r,l);return s(r.lastIndex,c)||(r.lastIndex=c),null===u?-1:u.index}]}))},"8a79":function(t,e,a){"use strict";var n=a("23e7"),i=a("06cf").f,r=a("50c4"),s=a("5a34"),o=a("1d80"),l=a("ab13"),c=a("c430"),u="".endsWith,d=Math.min,h=l("endsWith"),p=!c&&!h&&!!function(){var t=i(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!p&&!h},{endsWith:function(t){var e=String(o(this));s(t);var a=arguments.length>1?arguments[1]:void 0,n=r(e.length),i=void 0===a?n:d(r(a),n),l=String(t);return u?u.call(e,l,i):e.slice(i-l.length,i)===l}})},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},9263:function(t,e,a){"use strict";var n=a("ad6d"),i=a("9f7f"),r=RegExp.prototype.exec,s=String.prototype.replace,o=r,l=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||c;d&&(o=function(t){var e,a,i,o,d=this,h=c&&d.sticky,p=n.call(d),f=d.source,g=0,v=t;return h&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(f="(?: "+f+")",v=" "+v,g++),a=new RegExp("^(?:"+f+")",p)),u&&(a=new RegExp("^"+f+"$(?!\\s)",p)),l&&(e=d.lastIndex),i=r.call(h?a:d,v),h?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:l&&i&&(d.lastIndex=d.global?i.index+i[0].length:e),u&&i&&i.length>1&&s.call(i[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),t.exports=o},"99af":function(t,e,a){"use strict";var n=a("23e7"),i=a("d039"),r=a("e8b5"),s=a("861d"),o=a("7b0b"),l=a("50c4"),c=a("8418"),u=a("65f0"),d=a("1dde"),h=a("b622"),p=a("2d00"),f=h("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",y=p>=51||!i((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=d("concat"),x=function(t){if(!s(t))return!1;var e=t[f];return void 0!==e?!!e:r(t)},b=!y||!m;n({target:"Array",proto:!0,forced:b},{concat:function(t){var e,a,n,i,r,s=o(this),d=u(s,0),h=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?s:arguments[e],x(r)){if(i=l(r.length),h+i>g)throw TypeError(v);for(a=0;a<i;a++,h++)a in r&&c(d,h,r[a])}else{if(h>=g)throw TypeError(v);c(d,h++,r)}return d.length=h,d}})},"9f7f":function(t,e,a){"use strict";var n=a("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,a){"use strict";var n=a("23e7"),i=a("23cb"),r=a("a691"),s=a("50c4"),o=a("7b0b"),l=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),h=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,g=Math.min,v=9007199254740991,y="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h||!p},{splice:function(t,e){var a,n,u,d,h,p,m=o(this),x=s(m.length),b=i(t,x),C=arguments.length;if(0===C?a=n=0:1===C?(a=0,n=x-b):(a=C-2,n=g(f(r(e),0),x-b)),x+a-n>v)throw TypeError(y);for(u=l(m,n),d=0;d<n;d++)h=b+d,h in m&&c(u,d,m[h]);if(u.length=n,a<n){for(d=b;d<x-n;d++)h=d+n,p=d+a,h in m?m[p]=m[h]:delete m[p];for(d=x;d>x-n+a;d--)delete m[d-1]}else if(a>n)for(d=x-n;d>b;d--)h=d+n-1,p=d+a-1,h in m?m[p]=m[h]:delete m[p];for(d=0;d<a;d++)m[d+b]=arguments[d+2];return m.length=x-n+a,u}})},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),s=a("6eeb"),o=a("5135"),l=a("c6b6"),c=a("7156"),u=a("c04e"),d=a("d039"),h=a("7c73"),p=a("241c").f,f=a("06cf").f,g=a("9bf2").f,v=a("58a8").trim,y="Number",m=i[y],x=m.prototype,b=l(h(x))==y,C=function(t){var e,a,n,i,r,s,o,l,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=v(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(r=c.slice(2),s=r.length,o=0;o<s;o++)if(l=r.charCodeAt(o),l<48||l>i)return NaN;return parseInt(r,n)}return+c};if(r(y,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var S,w=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof w&&(b?d((function(){x.valueOf.call(a)})):l(a)!=y)?c(new m(C(e)),a,w):C(e)},T=n?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;T.length>_;_++)o(m,S=T[_])&&!o(w,S)&&g(w,S,f(m,S));w.prototype=x,x.constructor=w,s(i,y,w)}},ab13:function(t,e,a){var n=a("b622"),i=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[i]=!1,"/./"[t](e)}catch(n){}}return!1}},ac1f:function(t,e,a){"use strict";var n=a("23e7"),i=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},c3ab:function(t,e,a){"use strict";var n=[{id:1,accused:"Emmanuel Amakom & 4 Others",offense:"Fraud",type:"fraud",amount:"N15,200,000.00",presidingJudge:"Hon. Justice I.B. Gafai",court:"Federal High Court, Awka, Anambra",agency:"EFCC",date:"25 June 2020"},{id:3,accused:"Okafor James & 3 Others",offense:"Bribery",type:"bribery",amount:"N15,200,000.00",presidingJudge:"Hon. Justice U. Abiola",court:"Federal High Court, Wuse II Abuja FCT.",agency:"ICPC",date:"26 June 2020"},{id:3,accused:"Osagie Aghedo & 2 Others",offense:"Money Laundering",type:"ml",amount:"N15,200,000.00",presidingJudge:"Hon. Justice M.A. Olayinka",court:"Federal High Court, Barnawa, Kaduna",agency:"EFCC",date:"28 June 2020"},{id:4,accused:"Danjuma Sheu & 4 Others",offense:"Fraud",type:"fraud",amount:"N15,200,000.00",presidingJudge:"Hon. Justice I.B. Gafai",court:"Federal High Court, Awka, Anambra",agency:"EFCC",date:"27 June 2020"}];e["a"]=n},c8d2:function(t,e,a){var n=a("d039"),i=a("5899"),r="​᠎";t.exports=function(t){return n((function(){return!!i[t]()||r[t]()!=r||i[t].name!==t}))}},c975:function(t,e,a){"use strict";var n=a("23e7"),i=a("4d64").indexOf,r=a("a640"),s=a("ae40"),o=[].indexOf,l=!!o&&1/[1].indexOf(1,-0)<0,c=r("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?o.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,e,a){"use strict";var n=a("23e7"),i=a("4d64").includes,r=a("44d2"),s=a("ae40"),o=s("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!o},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d784:function(t,e,a){"use strict";a("ac1f");var n=a("6eeb"),i=a("d039"),r=a("b622"),s=a("9263"),o=a("9112"),l=r("species"),c=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=r("replace"),h=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,d){var f=r(t),g=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),v=g&&!i((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[f]=/./[f]),a.exec=function(){return e=!0,null},a[f](""),!e}));if(!g||!v||"replace"===t&&(!c||!u||h)||"split"===t&&!p){var y=/./[f],m=a(f,""[t],(function(t,e,a,n,i){return e.exec===s?g&&!i?{done:!0,value:y.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),x=m[0],b=m[1];n(String.prototype,t,x),n(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}d&&o(RegExp.prototype[f],"sham",!0)}}}]);
//# sourceMappingURL=datapoint.da0d79e6.js.map