(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-214343c4"],{"170a":function(s,t,e){s.exports=e.p+"img/decision.29e08470.svg"},"2f74":function(s,t,e){s.exports=e.p+"img/scale.d0e7be13.svg"},"353c":function(s,t,e){s.exports=e.p+"img/judge.0278f91a.svg"},"37e0":function(s,t,e){s.exports=e.p+"img/date.287eaab3.svg"},4595:function(s,t,e){s.exports=e.p+"img/accused.273a9c13.svg"},"99af":function(s,t,e){"use strict";var a=e("23e7"),i=e("d039"),l=e("e8b5"),n=e("861d"),c=e("7b0b"),r=e("50c4"),o=e("8418"),d=e("65f0"),_=e("1dde"),u=e("b622"),f=e("2d00"),v=u("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",p=f>=51||!i((function(){var s=[];return s[v]=!1,s.concat()[0]!==s})),C=_("concat"),F=function(s){if(!n(s))return!1;var t=s[v];return void 0!==t?!!t:l(s)},h=!p||!C;a({target:"Array",proto:!0,forced:h},{concat:function(s){var t,e,a,i,l,n=c(this),_=d(n,0),u=0;for(t=-1,a=arguments.length;t<a;t++)if(l=-1===t?n:arguments[t],F(l)){if(i=r(l.length),u+i>m)throw TypeError(g);for(e=0;e<i;e++,u++)e in l&&o(_,u,l[e])}else{if(u>=m)throw TypeError(g);o(_,u++,l)}return _.length=u,_}})},"9fe4":function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"pt-6 lg:pt-16"},[a("div",{staticClass:"px-3 md:px-10 xl:px-16"},[!s.isLoading&&Object.keys(s.caseFile).length>0&&s.caseFile.constructor===Object?a("div",{staticClass:"mb-8"},[a("div",{staticClass:"mb-5"},[a("div",{staticClass:"flex items-center"},[s._m(0),a("p",{staticClass:"text-xl p-2 pl-2 ml-2"},[s._v(s._s(s.caseFile.type))])])]),a("div",{staticClass:"mx-auto my-10 max-w-2/3"},[a("h2",{staticClass:"text-2xl lg:text-4xl text-center"},[a("strong",[s._v(s._s(s.caseFile.title))])])]),a("div",{staticClass:"lg:grid lg:grid-cols-2 gap-6"},[a("div",{staticClass:"w-full order-1 mb-16"},[a("div",{staticClass:"flex mb-2 items-start"},[a("img",{staticClass:"img-fluid info-icon",attrs:{alt:"Humans",src:e("4595")}}),a("p",{staticClass:"pl-2 info-detail",class:{"pt-3":s.caseFile.defendants.desc}},[a("span",{staticClass:"info-title"},[s._v(s._s(s.caseFile.lead_defendant.name))]),a("br"),a("span",{staticClass:"size-sm"},[a("small",[s._v(s._s(s.caseFile.defendants_desc))])])])]),a("div",{staticClass:"flex mb-2 items-start"},[a("img",{staticClass:"img-fluid info-icon",attrs:{alt:"Money bag",src:e("f6e0")}}),a("p",{staticClass:"pl-2 info-detail",class:{"pt-3":s.caseFile.offence_desc}},[a("span",{staticClass:"info-title"},[s._v(s._s(s.caseFile.amount?s.caseFile.amount:s.caseFile.type))]),a("br"),s.caseFile.amount&&s.caseFile.offence_desc?a("span",{staticClass:"size-sm"},[a("small",[s._v(s._s(s.caseFile.offence_desc))])]):s._e()])]),s.caseFile&&s.caseFile.description?a("div",{staticClass:"flex mb-2 items-start"},[a("img",{staticClass:"img-fluid info-icon",attrs:{alt:"File summary",src:e("d831")}}),a("p",{staticClass:"pl-2 info-detail pt-3 text-justify"},[a("span",{staticClass:"info-title"},[s._v("Case Summary")]),a("br"),a("span",{staticClass:"size-sm"},[a("small",[s._v(s._s(s.caseFile.description))])])])]):s._e(),a("div",{staticClass:"flex mb-2 items-start"},[a("img",{staticClass:"img-fluid info-icon",attrs:{alt:"Calendar",src:e("37e0")}}),a("p",{staticClass:"pt-3 pl-2 info-detail"},[s.caseFile.days?[a("span",{staticClass:"info-title"},[s._v(s._s(s.caseFile.days))]),s._v(" "),a("br"),a("span",{staticClass:"size-sm"},[a("small",[s._v(" "+s._s(s.caseFile.update.end_date||s.caseFile.hasEnded?"Day(s) case lasted in court":"Day(s) since arraignment")+" ")])])]:[a("span",{staticClass:"info-title"},[s._v(s._s(s.caseFile.years))]),s._v(" "),a("br"),a("span",{staticClass:"size-sm"},[a("small",[s._v(" "+s._s(s.caseFile.update.end_year||s.caseFile.hasEnded?"Year(s) case lasted in court":"Year(s) since arraignment")+" ")])])]],2)]),s.caseFile&&s.caseFile.update?a("div",{staticClass:"flex mb-2 items-start"},[a("img",{staticClass:"img-fluid info-icon",attrs:{alt:"Gavel",src:e("170a")}}),a("p",{staticClass:"pt-3 pl-2 info-detail text-justify"},[a("span",{staticClass:"info-title"},[s._v("Case Update")]),s._v(" "),a("br"),a("span",{staticClass:"size-sm"},[a("small",[s._v(s._s(s.caseFile.update.court_decision))])])])]):s._e(),s.caseFile&&s.caseFile.next_sitting?a("div",{staticClass:"flex mb-2 items-start"},[a("img",{staticClass:"img-fluid info-icon",attrs:{alt:"calendar",src:e("37e0")}}),a("p",{staticClass:"pl-2 info-detail pt-3"},[a("span",{staticClass:"info-title"},[s._v("Date of Next Sitting")]),a("br"),a("span",{staticClass:"size-sm"},[a("small",[s._v(s._s(s.caseFile.next_sitting))])])])]):s._e(),s.caseFile&&s.caseFile.judge?a("div",{staticClass:"flex mb-2 items-start"},[a("img",{staticClass:"img-fluid info-icon",attrs:{alt:"Court house",src:e("353c")}}),a("p",{staticClass:"pt-3 pl-2 info-detail"},[a("span",{staticClass:"info-title"},[s._v(s._s(s.caseFile.judge.name))]),s._v(" "),a("br"),a("span",{staticClass:"size-sm"},[a("small",[s._v(s._s(s.caseFile.court.name)+", "+s._s(s.caseFile.court.state.name))])])])]):s._e(),s.caseFile.update?a("div",{staticClass:"flex mb-2 items-start"},[a("img",{staticClass:"img-fluid info-icon",attrs:{alt:"Legislation",src:e("fc46")}}),a("p",{staticClass:"pt-3 pl-2 info-detail text-justify"},[a("span",{staticClass:"info-title"},[s._v("ACJA/ACJL Compliance "),a("br"),a("small",[3==s.caseFile.update.compliance?a("strong",[s._v("(violated)")]):1==s.caseFile.update.compliance?a("strong",[s._v("(complied)")]):a("strong",[s._v("(not applicable)")])])]),s.caseFile.update.note?[a("br"),a("span",{staticClass:"size-sm"},[a("small",[s._v(s._s(s.caseFile.update.note))])])]:s._e()],2)]):s._e(),a("div",{staticClass:"hidden lg:block my-5"},[a("a",{staticClass:"flex justify-center btn rounded-lg w-full p-4 bg-transpurple text-white",attrs:{href:s.url+"/export/"+s.case_slug,target:"_blank",rel:"noreferrer noopener"}},[s._v("Download Case Summary")])])]),a("div",{staticClass:"w-full mb-12"},[a("div",{staticClass:"case-info"},[a("div",{staticClass:"card"},[s._m(1),a("div",{staticClass:"card-body bg-light p-0"},[a("div",{staticClass:"info"},[s._v(" "+s._s(s.caseFile.lead_defendant.name)+" "+s._s(s.caseFile.defendants_desc)+" ")]),s._m(2),a("div",{staticClass:"info"},[s._v(" "+s._s(s.caseFile.judge.name)+", "+s._s(s.caseFile.court.name)+", "+s._s(s.caseFile.court.state.name)+" ")]),s._m(3),a("div",{staticClass:"info"},[s._v(" "+s._s(s.caseFile.charge)+" ")]),s._m(4),a("div",{staticClass:"info"},[s._v(" "+s._s(s.caseFile.date_of_arraignment)+" ")]),s._m(5),a("div",{staticClass:"info text-justify"},[s._v(" "+s._s(s.caseFile.description)+" ")]),s._m(6),a("div",{staticClass:"info"},s._l(s.caseFile.defendants,(function(t,e){return a("div",{key:e},[s._v(" "+s._s(e+1)+". "+s._s(t.name)+" "),t.designation?a("small",[s._v("("+s._s(t.designation)+")")]):s._e(),s._v(" – "),a("strong",[s._v(s._s(t.pivot.plea))])])})),0),s._m(7),a("div",{staticClass:"info"},[s.caseFile.counsels.length<1?a("div",[s._v(" No defence counsel ")]):s._l(s.caseFile.counsels,(function(t,e){return a("div",{key:e},[s._v(" "+s._s(e+1)+". "+s._s(t.name)+" "),t.designation?a("small",[s._v("("+s._s(t.designation)+")")]):s._e()])}))],2),s._m(8),a("div",{staticClass:"info"},[s._v(" "+s._s(s.caseFile.agency.name)+" ")]),s._m(9),a("div",{staticClass:"info"},[s.caseFile.prosecutors.length<1?a("div",[s._v(" No prosecutors recorded ")]):s._l(s.caseFile.prosecutors,(function(t,e){return a("div",{key:e},[s._v(" "+s._s(e+1)+". "+s._s(t.name)+" "),t.designation?a("small",[s._v("("+s._s(t.designation)+")")]):s._e()])}))],2),s._m(10),a("div",{staticClass:"info"},[s._v(" "+s._s(s.caseFile.status)+" ")]),a("div",{staticClass:"title bg-white"},["decided"==s.caseFile.status.toLowerCase()?a("strong",[s._v("Decision")]):a("strong",[s._v("Stage of Trial")])]),a("div",{staticClass:"info"},[s._v(" "+s._s(s.caseFile.stage)+" ")]),s._m(11),a("div",{staticClass:"info"},[s._v(" "+s._s(s.caseFile.days?s.caseFile.days+" day(s)":s.caseFile.years+" year(s)")+" ")]),"decided"!=s.caseFile.status.toLowerCase()&&s.caseFile.update?[s._m(12),a("div",{staticClass:"info text-justify"},[s._v(" "+s._s(s.caseFile.update.court_decision)+" ")])]:s._e(),s.caseFile.update?a("div",{staticClass:"title bg-white"},[a("strong",[s._v("ACJA/ACJL Compliance")])]):s._e(),a("div",{staticClass:"info text-justify"},[s._v(" "+s._s(3==parseInt(s.caseFile.update.compliance)?"Violated":1==parseInt(s.caseFile.update.compliance)?"Complied":"Not Applicable")+" "+s._s(s.caseFile.update.note?"-"+s.caseFile.update.note:"")+" ")]),"decided"==s.caseFile.status.toLowerCase()?[s._m(13),a("div",{staticClass:"info text-justify"},[s._v(" "+s._s(s.caseFile.update?s.caseFile.update.court_decision:"Nil")+" ")])]:s._e()],2)])])])]),a("div",{staticClass:"lg:hidden mb-12"},[a("a",{staticClass:"flex justify-center btn rounded-lg w-full p-4 bg-transpurple text-white",attrs:{href:s.url+"/export/"+s.case_slug,target:"_blank",rel:"noreferrer noopener"}},[s._v("Download Case Summary")])])]):s.isLoading?a("div",{staticClass:"h-64 flex items-center justify-center"},[a("h4",{staticClass:"text-2xl"},[s._v("Loading...")])]):a("div",{staticClass:"h-64 flex items-center justify-center"},[a("h4",{staticClass:"text-2xl"},[s._v(s._s(s.message))])])]),a("Footer",{attrs:{className:"bg-hero"}})],1)},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"rounded-full shadow-lg bg-transpurple p-3"},[a("img",{staticClass:"h-30",attrs:{alt:"Scale of justice",src:e("2f74")}})])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"text-white bg-dark px-8 py-6 text-lg rounded-t-lg"},[e("strong",[s._v("Case Information")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title bg-white"},[e("strong",[s._v("Presiding Judge & Designated Court")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title bg-white"},[e("strong",[s._v("Nature and Number of Charges")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title bg-white"},[e("strong",[s._v("Date of 1st Arraignment")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title bg-white"},[e("strong",[s._v("Summary of Case")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title bg-white"},[e("strong",[s._v("Defendant(s) and Plea entered on Arraignment")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title bg-white"},[e("strong",[s._v("Defence Counsel(s)")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title bg-white"},[e("strong",[s._v("Prosecuting Agency")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title bg-white"},[e("strong",[s._v("Prosecutor(s) ")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title bg-white"},[e("strong",[s._v("Status of Case")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title bg-white"},[e("strong",[s._v("Length of Trial")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title bg-white"},[e("strong",[s._v("Case Update")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title bg-white"},[e("strong",[s._v("Court Decision")])])}],l=(e("99af"),e("33c7")),n=e("bc3a"),c=e.n(n),r={components:{Footer:l["a"]},mounted:function(){this.getCase()},data:function(){return{case_slug:"",caseFile:{},message:"No Case Found!",url:window.host,isLoading:!0}},methods:{getCase:function(){var s=this;this.case_slug=this.$route.params.slug,c.a.get("".concat(window.host,"/api/case/").concat(this.case_slug)).then((function(t){t.data?(s.caseFile=t.data,s.isLoading=!1):s.message="No Case Found!"})).catch((function(t){console.error(t),s.isLoading=!1}))}}},o=r,d=(e("b654"),e("2877")),_=Object(d["a"])(o,a,i,!1,null,null,null);t["default"]=_.exports},b654:function(s,t,e){"use strict";var a=e("e8c6"),i=e.n(a);i.a},d831:function(s,t,e){s.exports=e.p+"img/summary.53a2bd90.svg"},e8c6:function(s,t,e){},f6e0:function(s,t,e){s.exports=e.p+"img/amount.d270dd24.svg"},fc46:function(s,t,e){s.exports=e.p+"img/acja.b57ae4a6.svg"}}]);
//# sourceMappingURL=chunk-214343c4.bd875677.js.map