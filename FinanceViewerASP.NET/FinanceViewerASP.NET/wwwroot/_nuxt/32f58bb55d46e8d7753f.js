(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{359:function(t,e,r){var content=r(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("8f897d22",content,!0,{sourceMap:!1})},360:function(t,e,r){"use strict";var n=r(359);r.n(n).a},361:function(t,e,r){(t.exports=r(33)(!1)).push([t.i,".bg-bubbles[data-v-0dc39524]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.bg-bubbles li[data-v-0dc39524]{position:absolute;list-style:none;display:block;width:40px;height:40px;background-color:hsla(0,0%,100%,.15);bottom:-160px;-webkit-animation:square-data-v-0dc39524 25s infinite;animation:square-data-v-0dc39524 25s infinite;transition-timing-function:linear}.bg-bubbles li[data-v-0dc39524]:first-child{left:10%}.bg-bubbles li[data-v-0dc39524]:nth-child(2){left:20%;width:80px;height:80px;-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-duration:17s;animation-duration:17s}.bg-bubbles li[data-v-0dc39524]:nth-child(3){left:25%;-webkit-animation-delay:4s;animation-delay:4s}.bg-bubbles li[data-v-0dc39524]:nth-child(4){left:40%;width:60px;height:60px;-webkit-animation-duration:22s;animation-duration:22s;background-color:hsla(0,0%,100%,.25)}.bg-bubbles li[data-v-0dc39524]:nth-child(5){left:70%}.bg-bubbles li[data-v-0dc39524]:nth-child(6){left:80%;width:120px;height:120px;-webkit-animation-delay:3s;animation-delay:3s;background-color:hsla(0,0%,100%,.2)}.bg-bubbles li[data-v-0dc39524]:nth-child(7){left:32%;width:160px;height:160px;-webkit-animation-delay:7s;animation-delay:7s}.bg-bubbles li[data-v-0dc39524]:nth-child(8){left:55%;width:20px;height:20px;-webkit-animation-delay:15s;animation-delay:15s;-webkit-animation-duration:40s;animation-duration:40s}.bg-bubbles li[data-v-0dc39524]:nth-child(9){left:25%;width:10px;height:10px;-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-duration:40s;animation-duration:40s;background-color:hsla(0,0%,100%,.3)}.bg-bubbles li[data-v-0dc39524]:nth-child(10){left:90%;width:160px;height:160px;-webkit-animation-delay:11s;animation-delay:11s}@-webkit-keyframes square-data-v-0dc39524{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-700px) rotate(600deg);transform:translateY(-700px) rotate(600deg)}}@keyframes square-data-v-0dc39524{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-700px) rotate(600deg);transform:translateY(-700px) rotate(600deg)}}",""])},362:function(t,e,r){"use strict";var n={},o=(r(360),r(23)),component=Object(o.a)(n,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"bg-bubbles"},[r("li"),t._v(" "),r("li"),t._v(" "),r("li"),t._v(" "),r("li"),t._v(" "),r("li"),t._v(" "),r("li"),t._v(" "),r("li"),t._v(" "),r("li"),t._v(" "),r("li"),t._v(" "),r("li")])}],!1,null,"0dc39524",null);e.a=component.exports},364:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(100),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(101),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(42),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(35),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__),_components_UI_bobbles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(362),jquery__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(369),jquery__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);__webpack_exports__.a={components:{Bobbles:_components_UI_bobbles__WEBPACK_IMPORTED_MODULE_4__.a},layout:"loggedIn",data:function(){return{loggedOut:!1,overviewIsEnabled:!0,createNewViewEnabled:!1,year:"",username:"",newView_name:"FVMarket2",newView_description:"Supermarket",newView_id:"fvmarket2",newView_notes:"This is my local market",newView_profile_url:"https://cdn.stocksnap.io/img-thumbs/960w/AWJD4WV6W1.jpg",tableViews:[]}},mounted:function(){this.loadAll()},methods:{loadAll:function(){var t=this;this.$axios.get("dashboard/options.php?action=getViews").then(function(e){var r=e.data.data;t.username=e.data.username,t.year=e.data.year,r.forEach(function(element){t.tableViews.push({name:element.name,description:element.description,id:element.id,count:element.count,notes:element.notes,viewEnabled:!1,profile_url:element.profile_url,data:{january:element.data.january,tempJanuary:element.data.january,february:element.data.february,tempFebruary:element.data.february,march:element.data.march,tempMarch:element.data.march,april:element.data.april,tempApril:element.data.april,may:element.data.may,tempMay:element.data.may,june:element.data.june,tempJune:element.data.june,july:element.data.july,tempJuly:element.data.july,august:element.data.august,tempAugust:element.data.august,september:element.data.september,tempSeptember:element.data.september,october:element.data.october,tempOctober:element.data.october,november:element.data.november,tempNovember:element.data.november,december:element.data.december,tempDecember:element.data.december}})}),console.log(r)}).catch(function(t){console.log(t),alert("Could not load views. An error calling the middleware occured. Look in the console for further information.")})},disableAll:function(){this.tableViews.forEach(function(element){element.viewEnabled=!1}),this.overviewIsEnabled=!1,this.createNewViewEnabled=!1},addView:function(){var t=this,e={name:this.newView_name,description:this.newView_description,id:this.newView_id,count:this.newView_id,notes:this.newView_notes,viewEnabled:!1,profile_url:this.newView_profile_url,data:{january:"0",tempJanuary:"0",february:"0",tempFebruary:"0",march:"0",tempMarch:"0",april:"0",tempApril:"0",may:"0",tempMay:"0",june:"0",tempJune:"0",july:"0",tempJuly:"0",august:"0",tempAugust:"0",september:"0",tempSeptember:"0",october:"0",tempOctober:"0",november:"0",tempNovember:"0",december:"0",tempDecember:"0"}};""==e.name||" "==e.name||""==e.description||" "==e.description||""==e.id||" "==e.id||""==e.notes||" "==e.notes||""==e.profile_url||" "==e.profile_url?alert("Please fill out all fields"):this.doesViewIdAlreadyExists(e.id)?alert("A view with the same id does already exist."):this.doesViewNameAlreadyExists(e.name)?alert("A view with the same name does already exist."):e.id.includes(" ")?alert("ID is not allowed to have wite spaces."):e.profile_url.includes(" ")?alert("Profile Url is not allowed to have wite spaces."):this.$axios.post("dashboard/options.php?action=addView",e).then(function(e){var r=e.data;null!=r.name?(t.tableViews.push(r),t.newView_name=t.newView_description=t.newView_id=t.newView_notes=t.newView_profile_url=""):(console.log(reponse),alert("Could not add a new view. Check console for more info."))}).catch(function(t){alert("Could not add a new view. Check console for more info.")})},doesViewIdAlreadyExists:function(t){var e=!1;return this.tableViews.forEach(function(element){t===element.id&&(e=!0)}),e},doesViewNameAlreadyExists:function(t){var e=!1;return this.tableViews.forEach(function(element){t===element.name&&(e=!0)}),e},removeView:function(view){var t=this;confirm("Are you sure you want to delte view "+view.name+"?")&&this.$axios.post("dashboard/options.php?action=removeView",{view_id:view.count}).then(function(e){"View deleted."==e.data.message?t.tableViews.splice(t.tableViews.indexOf(view),1):(console.log(reponse),alert("Could not delete view. Check console for more info."))}).catch(function(t){alert("Could not delete view. Check console for more info.")})},eval:function _eval(content){return Math.round(100*eval(content))/100},sumForYear:function(t){return this.eval(this.eval(t.january)+this.eval(t.february)+this.eval(t.march)+this.eval(t.april)+this.eval(t.may)+this.eval(t.june)+this.eval(t.july)+this.eval(t.august)+this.eval(t.september)+this.eval(t.october)+this.eval(t.november)+this.eval(t.december))},getSumJanuary:function getSumJanuary(){var result=0;return this.tableViews.forEach(function(element){result+=eval(element.data.january)}),this.eval(result)},getSumFebruary:function getSumFebruary(){var result=0;return this.tableViews.forEach(function(element){result+=eval(element.data.february)}),this.eval(result)},getSumMarch:function getSumMarch(){var result=0;return this.tableViews.forEach(function(element){result+=eval(element.data.march)}),this.eval(result)},getSumApril:function getSumApril(){var result=0;return this.tableViews.forEach(function(element){result+=eval(element.data.april)}),this.eval(result)},getSumMay:function getSumMay(){var result=0;return this.tableViews.forEach(function(element){result+=eval(element.data.may)}),this.eval(result)},getSumJune:function getSumJune(){var result=0;return this.tableViews.forEach(function(element){result+=eval(element.data.june)}),this.eval(result)},getSumJuly:function getSumJuly(){var result=0;return this.tableViews.forEach(function(element){result+=eval(element.data.july)}),this.eval(result)},getSumAugust:function getSumAugust(){var result=0;return this.tableViews.forEach(function(element){result+=eval(element.data.august)}),this.eval(result)},getSumSeptember:function getSumSeptember(){var result=0;return this.tableViews.forEach(function(element){result+=eval(element.data.september)}),this.eval(result)},getSumOctober:function getSumOctober(){var result=0;return this.tableViews.forEach(function(element){result+=eval(element.data.october)}),this.eval(result)},getSumNovember:function getSumNovember(){var result=0;return this.tableViews.forEach(function(element){result+=eval(element.data.november)}),this.eval(result)},getSumDecember:function getSumDecember(){var result=0;return this.tableViews.forEach(function(element){result+=eval(element.data.december)}),this.eval(result)},getTotalSum:function(){return this.eval(this.getSumJanuary()+this.getSumFebruary()+this.getSumMarch()+this.getSumApril()+this.getSumMay()+this.getSumJune()+this.getSumJuly()+this.getSumAugust()+this.getSumSeptember()+this.getSumOctober()+this.getSumNovember()+this.getSumDecember())},updateMonth:function(view,t){var e=this,r=this.$moment((t>9?"0"+t:t)+"/01/2000").format("MMMM");if("Inavalid date"!=t){var n="";try{n=this.getTempMonthValue(view,t);var o=this.eval(n);if(n.includes(","))alert("Please do not use , use . instead");else if(isFinite(o)){var l={view_id:view.count,updatedMonth:t,value:n};this.$axios.post("dashboard/options.php?action=updateViewMonth",l).then(function(n){"Month updated."==n.data.message?(e.updateMonthValue(view,t),setTimeout(function(){alert(r+" was successfully updated!")},100)):(console.log(reponse),alert("Could not update "+r+". Check console for more info."))}).catch(function(t){alert("Could not update "+r+". Check console for more info.")})}else alert("New "+r+" value is invalid: "+o)}catch(t){alert("New "+r+" value is invalid: "+t),console.log(t)}}else alert('Month "'+r+'" is invalid.')},getTempMonthValue:function(view,t){switch(t){case 1:return view.data.tempJanuary;case 2:return view.data.tempFebruary;case 3:return view.data.tempMarch;case 4:return view.data.tempApril;case 5:return view.data.tempMay;case 6:return view.data.tempJune;case 7:return view.data.tempJuly;case 8:return view.data.tempAugust;case 9:return view.data.tempSeptember;case 10:return view.data.tempOctober;case 11:return view.data.tempNovember;case 12:return view.data.tempDecember;default:throw t+" is not a valid month"}},updateMonthValue:function(view,t){switch(t){case 1:view.data.january=""+view.data.tempJanuary;break;case 2:view.data.february=""+view.data.tempFebruary;break;case 3:view.data.march=""+view.data.tempMarch;break;case 4:view.data.april=""+view.data.tempApril;break;case 5:view.data.may=""+view.data.tempMay;break;case 6:view.data.june=""+view.data.tempJune;break;case 7:view.data.july=""+view.data.tempJuly;break;case 8:view.data.august=""+view.data.tempAugust;break;case 9:view.data.september=""+view.data.tempSeptember;break;case 10:view.data.october=""+view.data.tempOctober;break;case 11:view.data.november=""+view.data.tempNovember;break;case 12:view.data.december=""+view.data.tempDecember}}}}},365:function(t,e,r){var content=r(371);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("9891e610",content,!0,{sourceMap:!1})},370:function(t,e,r){"use strict";var n=r(365);r.n(n).a},371:function(t,e,r){(t.exports=r(33)(!1)).push([t.i,'#content{height:93.5%;height:calc(100% - 59px)}#main_nav{border-radius:0;background:rgba(34,34,34,.86);border-color:#080808;border-bottom:2px solid #080808}#menu_left{border-right:2px solid #080808;position:relative;max-width:100%;overflow-x:hidden;padding-right:0;background-color:rgba(0,0,0,.6)}#menu_right{position:relative;overflow:scroll;flex:0 0 74.17%;max-width:100%!important}#menu_left input{position:absolute;visibility:hidden}#background{width:102%;background-size:cover;background-position:50%;-webkit-filter:blur(3px);z-index:0}#background,#menu_left label{position:absolute;height:100%}#menu_left label{left:0;width:100%;cursor:pointer}#menu_right>span>div>table>tbody>tr>td:nth-child(4),#menu_right>span>div>table>thead>tr>th:nth-child(4){text-align:right}.item{width:100%;height:6em;padding:1px 0;z-index:3;overflow:hidden;-webkit-transition:background-color .7s}.item,.portrait{position:relative;float:left}.portrait{height:3em;width:3em;border-radius:50%;margin:1.5em;background-size:cover}.portrait:after{content:" ";position:absolute;top:-.3em;left:-.3em;height:3.5em;width:3.5em;border:1px solid hsla(0,0%,100%,.5);border-radius:50%;-webkit-transition:border .3s}.details{top:0;width:55%;margin:1em 0 0 .75em;-webkit-transition:top .5s}.description,.details,.name{position:relative;float:left}.description,.name{clear:left;margin:0}.name{font-size:1.5em;font-weight:300}.description{font-size:.9em;color:hsla(0,0%,100%,.8);width:95%}.actions{top:7em}.actions,.actions>div{position:absolute;width:100%}.actions>div{color:transparent;-webkit-text-stroke-width:.5px;-webkit-text-stroke-color:#fff;cursor:pointer}.actions>div:nth-child(2){left:30%}.actions>div:nth-child(3){left:60%}.actions>div:nth-child(4){left:90%}.actions>div:hover{-webkit-text-stroke-width:0;color:#fff!important}.info{font-size:100%!important}.info:after{font-size:1.7em;content:"i";font-family:Consolas!important;color:#fff;-webkit-text-stroke-width:0;border:1px solid #fff;border-radius:50%;padding:2px 11px}.plus:after{content:"+"}.equals:after{content:"="}.info:hover:after{background-color:hsla(0,0%,100%,.2)}#sampleItem{float:none;width:370px;left:35%;left:calc(50% - 185px);background-color:rgba(0,0,0,.6);color:#fff}#menu_left .item:hover>.portrait:after{border:1px solid #74e215;box-shadow:0 0 3px rgba(116,226,21,.5)}#menu_left input:checked+.item{background-color:rgba(0,0,0,.3);padding-top:0;border-top:1px solid hsla(0,0%,100%,.1);border-bottom:1px solid rgba(0,0,0,.5)}#menu_left input:checked+.item>.details{top:-6em;z-index:2}.container{position:inherit}.scrollbar::-webkit-scrollbar{width:8px;height:8px}.scrollbar.thin::-webkit-scrollbar{width:2px}.scrollbar::-webkit-scrollbar-track,.scrollbar::-webkit-scrollbar-track-piece{border-radius:0}.scrollbar::-webkit-scrollbar-thumb{border-radius:10px}.scrollbarLeft::-webkit-scrollbar-track,.scrollbarLeft::-webkit-scrollbar-track-piece{background:#204b42}.scrollbarLeft::-webkit-scrollbar-thumb{background:#52d0a5}.scrollbarLeft::-webkit-scrollbar-thumb:window-inactive{background:#3fb68d}.scrollbarRight::-webkit-scrollbar{width:14px;height:14px}.scrollbarRight::-webkit-scrollbar-track,.scrollbarRight::-webkit-scrollbar-track-piece{background:#52d0a5}.scrollbarRight::-webkit-scrollbar-thumb,.scrollbarRight::-webkit-scrollbar-thumb:window-inactive{background:#204b42}',""])},376:function(t,e,r){"use strict";r.r(e);var n=r(364).a,o=(r(370),r(23)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fill-height"},[r("bobbles"),t._v(" "),r("div",{attrs:{id:"content"}},[r("div",{staticClass:"row fill-height",attrs:{id:"menu"}},[r("div",{staticClass:"col-md-3 scrollbar scrollbarLeft fill-height",attrs:{id:"menu_left"}},[r("span",[r("input",{attrs:{id:"overview-view",type:"radio",name:"views"}}),t._v(" "),r("div",{staticClass:"item",on:{click:function(e){t.disableAll(),t.overviewIsEnabled=!0}}},[t._m(0),t._v(" "),r("label",{attrs:{for:"overview-view"}})])]),t._v(" "),r("span",[r("input",{attrs:{id:"addNew-view",type:"radio",name:"views"}}),t._v(" "),r("div",{staticClass:"item",on:{click:function(e){t.disableAll(),t.createNewViewEnabled=!0}}},[t._m(1),t._v(" "),r("label",{attrs:{for:"addNew-view"}})])]),t._v(" "),t._l(t.tableViews,function(u){return r("span",{key:u.count},[r("input",{attrs:{id:"view-"+u.count,type:"radio",name:"views"}}),t._v(" "),r("div",{staticClass:"item",on:{click:function(e){t.disableAll(),u.viewEnabled=!0}}},[r("div",{staticClass:"portrait",attrs:{id:u.id}}),t._v(" "),r("div",{staticClass:"details"},[r("p",{staticClass:"name"},[t._v(t._s(u.name))]),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(u.description))]),t._v(" "),r("div",{staticClass:"actions"},[r("div",{staticClass:"info"}),t._v(" "),r("div",[r("p",{staticClass:"description"},[t._v(" "+t._s(u.notes)+" ")])])])]),t._v(" "),r("label",{attrs:{for:"view-"+u.count}})]),t._v(" "),r("style",[t._v("\n            #view-"+t._s(u.count)+":checked ~ #menu_right {\n            background-image: url('"+t._s(u.profile_url)+"');\n            }\n            #"+t._s(u.id)+" {\n            background-image: url('"+t._s(u.profile_url)+"');\n            }\n          ")])])})],2),t._v(" "),r("div",{staticClass:"col-md-8 center-block scrollbar scrollbarRight fill-height",attrs:{id:"menu_right"}},[t.overviewIsEnabled?r("span",[r("h1",[t._v(" Overview for all views for year "),r("b",[t._v(t._s(t.year))]),t._v(" for user "),r("b",[t._v(t._s(t.username))]),t._v(":")]),t._v(" "),r("table",{staticClass:"table table-striped table-hover"},[t._m(2),t._v(" "),r("tbody",[t._l(t.tableViews,function(u){return r("tr",{key:u.name,staticClass:"text-right"},[r("th",{staticClass:"text-left",attrs:{scope:"row"}},[t._v(t._s(u.name))]),t._v(" "),r("td",{staticClass:"tableBorderLeft"},[t._v("£"+t._s(t.eval(u.data.january)))]),t._v(" "),r("td",[t._v("£"+t._s(t.eval(u.data.february)))]),t._v(" "),r("td",[t._v("£"+t._s(t.eval(u.data.march)))]),t._v(" "),r("td",[t._v("£"+t._s(t.eval(u.data.april)))]),t._v(" "),r("td",[t._v("£"+t._s(t.eval(u.data.may)))]),t._v(" "),r("td",[t._v("£"+t._s(t.eval(u.data.june)))]),t._v(" "),r("td",[t._v("£"+t._s(t.eval(u.data.july)))]),t._v(" "),r("td",[t._v("£"+t._s(t.eval(u.data.august)))]),t._v(" "),r("td",[t._v("£"+t._s(t.eval(u.data.september)))]),t._v(" "),r("td",[t._v("£"+t._s(t.eval(u.data.october)))]),t._v(" "),r("td",[t._v("£"+t._s(t.eval(u.data.november)))]),t._v(" "),r("td",[t._v("£"+t._s(t.eval(u.data.december)))]),t._v(" "),r("td",{staticClass:"tableBorderLeft"},[r("b",[t._v("£"+t._s(t.sumForYear(u.data)))])]),t._v(" "),r("td",{staticClass:"tableBorderLeft"},[r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.removeView(u)}}},[t._v("Delete")])])])}),t._v(" "),r("tr",{staticClass:"lastRow text-right"},[r("th",{staticClass:"text-left",attrs:{scope:"row"}},[t._v("Sum")]),t._v(" "),r("td",{staticClass:"tableBorderLeft"},[r("b",[t._v("£"+t._s(t.getSumJanuary()))])]),t._v(" "),r("td",[r("b",[t._v("£"+t._s(t.getSumFebruary()))])]),t._v(" "),r("td",[r("b",[t._v("£"+t._s(t.getSumMarch()))])]),t._v(" "),r("td",[r("b",[t._v("£"+t._s(t.getSumApril()))])]),t._v(" "),r("td",[r("b",[t._v("£"+t._s(t.getSumMay()))])]),t._v(" "),r("td",[r("b",[t._v("£"+t._s(t.getSumJune()))])]),t._v(" "),r("td",[r("b",[t._v("£"+t._s(t.getSumJuly()))])]),t._v(" "),r("td",[r("b",[t._v("£"+t._s(t.getSumAugust()))])]),t._v(" "),r("td",[r("b",[t._v("£"+t._s(t.getSumSeptember()))])]),t._v(" "),r("td",[r("b",[t._v("£"+t._s(t.getSumOctober()))])]),t._v(" "),r("td",[r("b",[t._v("£"+t._s(t.getSumNovember()))])]),t._v(" "),r("td",[r("b",[t._v("£"+t._s(t.getSumDecember()))])]),t._v(" "),r("td",{staticClass:"tableBorderLeft"},[r("b",[t._v(t._s(t.getTotalSum()))])]),t._v(" "),r("td",{staticClass:"tableBorderLeft text-center"},[t._v("-")])])],2)])]):t._e(),t._v(" "),t._l(t.tableViews,function(u){return u.viewEnabled?r("span",{key:u.id},[r("div",{staticClass:"my-3 p-3 bg-white rounded shadow-sm text-dark transparentModal"},[r("h3",{staticClass:"border-bottom border-gray pb-2 mb-0"},[t._v("Change content for "),r("b",[t._v(t._s(u.name))]),t._v(":")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"lead"},[t._v("Edit current entries:")]),t._v(" "),r("table",{staticClass:"table table-striped table-hover"},[t._m(3,!0),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("January")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:u.data.tempJanuary,expression:"u.data.tempJanuary"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"1000"},domProps:{value:u.data.tempJanuary},on:{input:function(e){e.target.composing||t.$set(u.data,"tempJanuary",e.target.value)}}})]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.updateMonth(u,1)}}},[t._v("Update")])]),t._v(" "),r("td",[t._v("£ "),r("b",[t._v(t._s(t.eval(u.data.january)))])])]),t._v(" "),r("tr",[r("td",[t._v("February")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:u.data.tempFebruary,expression:"u.data.tempFebruary"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"1000"},domProps:{value:u.data.tempFebruary},on:{input:function(e){e.target.composing||t.$set(u.data,"tempFebruary",e.target.value)}}})]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.updateMonth(u,2)}}},[t._v("Update")])]),t._v(" "),r("td",[t._v("£ "),r("b",[t._v(t._s(t.eval(u.data.february)))])])]),t._v(" "),r("tr",[r("td",[t._v("March")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:u.data.tempMarch,expression:"u.data.tempMarch"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"1000"},domProps:{value:u.data.tempMarch},on:{input:function(e){e.target.composing||t.$set(u.data,"tempMarch",e.target.value)}}})]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.updateMonth(u,3)}}},[t._v("Update")])]),t._v(" "),r("td",[t._v("£ "),r("b",[t._v(t._s(t.eval(u.data.march)))])])]),t._v(" "),r("tr",[r("td",[t._v("April")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:u.data.tempApril,expression:"u.data.tempApril"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"1000"},domProps:{value:u.data.tempApril},on:{input:function(e){e.target.composing||t.$set(u.data,"tempApril",e.target.value)}}})]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.updateMonth(u,4)}}},[t._v("Update")])]),t._v(" "),r("td",[t._v("£ "),r("b",[t._v(t._s(t.eval(u.data.april)))])])]),t._v(" "),r("tr",[r("td",[t._v("May")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:u.data.tempMay,expression:"u.data.tempMay"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"1000"},domProps:{value:u.data.tempMay},on:{input:function(e){e.target.composing||t.$set(u.data,"tempMay",e.target.value)}}})]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.updateMonth(u,5)}}},[t._v("Update")])]),t._v(" "),r("td",[t._v("£ "),r("b",[t._v(t._s(t.eval(u.data.may)))])])]),t._v(" "),r("tr",[r("td",[t._v("June")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:u.data.tempJune,expression:"u.data.tempJune"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"1000"},domProps:{value:u.data.tempJune},on:{input:function(e){e.target.composing||t.$set(u.data,"tempJune",e.target.value)}}})]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.updateMonth(u,6)}}},[t._v("Update")])]),t._v(" "),r("td",[t._v("£ "),r("b",[t._v(t._s(t.eval(u.data.june)))])])]),t._v(" "),r("tr",[r("td",[t._v("July")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:u.data.tempJuly,expression:"u.data.tempJuly"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"1000"},domProps:{value:u.data.tempJuly},on:{input:function(e){e.target.composing||t.$set(u.data,"tempJuly",e.target.value)}}})]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.updateMonth(u,7)}}},[t._v("Update")])]),t._v(" "),r("td",[t._v("£ "),r("b",[t._v(t._s(t.eval(u.data.july)))])])]),t._v(" "),r("tr",[r("td",[t._v("August")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:u.data.tempAugust,expression:"u.data.tempAugust"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"1000"},domProps:{value:u.data.tempAugust},on:{input:function(e){e.target.composing||t.$set(u.data,"tempAugust",e.target.value)}}})]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.updateMonth(u,8)}}},[t._v("Update")])]),t._v(" "),r("td",[t._v("£ "),r("b",[t._v(t._s(t.eval(u.data.august)))])])]),t._v(" "),r("tr",[r("td",[t._v("September")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:u.data.tempSeptember,expression:"u.data.tempSeptember"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"1000"},domProps:{value:u.data.tempSeptember},on:{input:function(e){e.target.composing||t.$set(u.data,"tempSeptember",e.target.value)}}})]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.updateMonth(u,9)}}},[t._v("Update")])]),t._v(" "),r("td",[t._v("£ "),r("b",[t._v(t._s(t.eval(u.data.september)))])])]),t._v(" "),r("tr",[r("td",[t._v("October")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:u.data.tempOctober,expression:"u.data.tempOctober"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"1000"},domProps:{value:u.data.tempOctober},on:{input:function(e){e.target.composing||t.$set(u.data,"tempOctober",e.target.value)}}})]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.updateMonth(u,10)}}},[t._v("Update")])]),t._v(" "),r("td",[t._v("£ "),r("b",[t._v(t._s(t.eval(u.data.october)))])])]),t._v(" "),r("tr",[r("td",[t._v("November")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:u.data.tempNovember,expression:"u.data.tempNovember"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"1000"},domProps:{value:u.data.tempNovember},on:{input:function(e){e.target.composing||t.$set(u.data,"tempNovember",e.target.value)}}})]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.updateMonth(u,11)}}},[t._v("Update")])]),t._v(" "),r("td",[t._v("£ "),r("b",[t._v(t._s(t.eval(u.data.november)))])])]),t._v(" "),r("tr",[r("td",[t._v("December")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:u.data.tempDecember,expression:"u.data.tempDecember"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"1000"},domProps:{value:u.data.tempDecember},on:{input:function(e){e.target.composing||t.$set(u.data,"tempDecember",e.target.value)}}})]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.updateMonth(u,12)}}},[t._v("Update")])]),t._v(" "),r("td",[t._v("£ "),r("b",[t._v(t._s(t.eval(u.data.december)))])])])])])])]):t._e()}),t._v(" "),t.createNewViewEnabled?r("span",[r("div",{staticClass:"my-3 p-3 bg-white rounded shadow-sm text-dark transparentModal"},[r("h3",{staticClass:"border-bottom border-gray pb-2 mb-0"},[t._v("Add a new view")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"lead"},[t._v("Add a new view:")]),t._v(" "),r("form",{staticClass:"needs-validation",attrs:{novalidate:""}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 mb-3"},[r("label",{attrs:{for:"viewName"}},[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newView_name,expression:"newView_name"}],staticClass:"form-control",attrs:{id:"viewName",type:"text",placeholder:"",value:"",maxlength:"45",required:""},domProps:{value:t.newView_name},on:{input:function(e){e.target.composing||(t.newView_name=e.target.value)}}}),t._v(" "),r("div",{staticClass:"invalid-feedback"},[t._v("\n                    Valid name is required.\n                  ")])]),t._v(" "),r("div",{staticClass:"col-md-6 mb-3"},[r("label",{attrs:{for:"viewDescription"}},[t._v("Description")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newView_description,expression:"newView_description"}],staticClass:"form-control",attrs:{id:"viewDescription",type:"text",placeholder:"",value:"",maxlength:"80",required:""},domProps:{value:t.newView_description},on:{input:function(e){e.target.composing||(t.newView_description=e.target.value)}}}),t._v(" "),r("div",{staticClass:"invalid-feedback"},[t._v("\n                    Valid description is required.\n                  ")])])]),t._v(" "),r("div",{staticClass:"mb-3"},[r("label",{attrs:{for:"viewID"}},[t._v("ID")]),t._v(" "),r("div",{staticClass:"input-group"},[t._m(4),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newView_id,expression:"newView_id"}],staticClass:"form-control",attrs:{id:"viewID",type:"text",placeholder:"Username",required:"",maxlength:"45"},domProps:{value:t.newView_id},on:{input:function(e){e.target.composing||(t.newView_id=e.target.value)}}}),t._v(" "),r("div",{staticClass:"invalid-feedback",staticStyle:{width:"100%"}},[t._v("\n                    A id is required.\n                  ")])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 mb-3"},[r("label",{attrs:{for:"viewNotes"}},[t._v("Notes")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newView_notes,expression:"newView_notes"}],staticClass:"form-control",attrs:{id:"viewNotes",type:"text",placeholder:"",value:"",maxlength:"80",required:""},domProps:{value:t.newView_notes},on:{input:function(e){e.target.composing||(t.newView_notes=e.target.value)}}}),t._v(" "),r("div",{staticClass:"invalid-feedback"},[t._v("\n                    Valid notes are required.\n                  ")])]),t._v(" "),r("div",{staticClass:"col-md-6 mb-3"},[r("label",{attrs:{for:"viewPicUrl"}},[t._v("Profile Url")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newView_profile_url,expression:"newView_profile_url"}],staticClass:"form-control",attrs:{id:"viewPicUrl",type:"text",placeholder:"",value:"",maxlength:"180",required:""},domProps:{value:t.newView_profile_url},on:{input:function(e){e.target.composing||(t.newView_profile_url=e.target.value)}}}),t._v(" "),r("div",{staticClass:"invalid-feedback"},[t._v("\n                    Valid profile url is required.\n                  ")])])]),t._v(" "),r("hr",{staticClass:"mb-4"}),t._v(" "),r("p",{staticClass:"lead"},[t._v("Preview:")]),t._v(" "),r("span",{staticStyle:{border:"none"},attrs:{id:"menu_left"}},[r("input",{attrs:{id:"view-x",type:"radio",name:"sample"}}),t._v(" "),r("div",{staticClass:"item",attrs:{id:"sampleItem"}},[r("div",{staticClass:"portrait",attrs:{id:"sampleView"}}),t._v(" "),r("div",{staticClass:"details"},[r("p",{staticClass:"name"},[t._v(t._s(t.newView_name))]),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(t.newView_description))]),t._v(" "),r("div",{staticClass:"actions"},[r("div",{staticClass:"info"}),t._v(" "),r("div",[r("p",{staticClass:"description"},[t._v(" "+t._s(t.newView_notes)+" ")])])])]),t._v(" "),r("label",{attrs:{for:"view-x"}})]),t._v(" "),r("style",[t._v("\n                  #view-x:checked ~ #menu_right {\n                  background-image: url('"+t._s(t.newView_profile_url)+"');\n                  }\n                  #sampleView {\n                  background-image: url('"+t._s(t.newView_profile_url)+"');\n                  }\n                ")])]),t._v(" "),t._m(5),t._v(" "),r("hr",{staticClass:"mb-4"}),t._v(" "),r("button",{staticClass:"btn btn-secondary btn-lg btn-block",on:{click:function(e){return e.preventDefault(),t.addView(e)}}},[t._v("Add View")])])])]):t._e()],2)])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"details"},[e("p",{staticClass:"name"},[this._v("Overview")]),this._v(" "),e("p",{staticClass:"description"},[this._v("Overview of all views.")]),this._v(" "),e("div",{staticClass:"actions"},[e("div",{staticClass:"info equals"}),this._v(" "),e("div",[e("p",{staticClass:"description"},[this._v("This view shows all views in an overall view.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"details"},[e("p",{staticClass:"name"},[this._v("Add view")]),this._v(" "),e("p",{staticClass:"description",staticStyle:{width:"230px"}},[this._v("Add a new view to your current entries.")]),this._v(" "),e("div",{staticClass:"actions"},[e("div",{staticClass:"info plus"}),this._v(" "),e("div",[e("p",{staticClass:"description",staticStyle:{width:"250px"}},[this._v(" This creates a new view for FinanceViewer with the current selected year. ")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{},[r("tr",[r("th",{attrs:{scope:"col"}},[r("b",[t._v("Name")])]),t._v(" "),r("th",{staticClass:"tableBorderLeft",attrs:{scope:"col"}},[t._v("January")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("February")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("March")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("April")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("May")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("June")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("July")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("August")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("September")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("October")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("November")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("December")]),t._v(" "),r("th",{staticClass:"tableBorderLeft",attrs:{scope:"col"}},[t._v("Sum")]),t._v(" "),r("th",{staticClass:"tableBorderLeft",attrs:{scope:"col"}},[t._v("Delete")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("Month")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("New Value")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Update")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Current Value")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("@")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"custom-control custom-radio"},[e("input",{staticClass:"custom-control-input",attrs:{id:"sampleReset",name:"sample",type:"radio",checked:"",required:""}}),this._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"sampleReset"}},[this._v("Reset")])])}],!1,null,null,null);e.default=component.exports}}]);