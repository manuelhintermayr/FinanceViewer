(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{184:function(e,t,s){var a=s(186);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s(10).default)("c719d564",a,!0,{sourceMap:!1})},185:function(e,t,s){"use strict";var a=s(184);s.n(a).a},186:function(e,t,s){(e.exports=s(9)(!1)).push([e.i,"\n.bg-bubbles[data-v-0dc39524]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1\n}\n.bg-bubbles li[data-v-0dc39524]{position:absolute;list-style:none;display:block;width:40px;height:40px;background-color:hsla(0,0%,100%,.15);bottom:-160px;-webkit-animation:square-data-v-0dc39524 25s infinite;animation:square-data-v-0dc39524 25s infinite;transition-timing-function:linear\n}\n.bg-bubbles li[data-v-0dc39524]:first-child{left:10%\n}\n.bg-bubbles li[data-v-0dc39524]:nth-child(2){left:20%;width:80px;height:80px;-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-duration:17s;animation-duration:17s\n}\n.bg-bubbles li[data-v-0dc39524]:nth-child(3){left:25%;-webkit-animation-delay:4s;animation-delay:4s\n}\n.bg-bubbles li[data-v-0dc39524]:nth-child(4){left:40%;width:60px;height:60px;-webkit-animation-duration:22s;animation-duration:22s;background-color:hsla(0,0%,100%,.25)\n}\n.bg-bubbles li[data-v-0dc39524]:nth-child(5){left:70%\n}\n.bg-bubbles li[data-v-0dc39524]:nth-child(6){left:80%;width:120px;height:120px;-webkit-animation-delay:3s;animation-delay:3s;background-color:hsla(0,0%,100%,.2)\n}\n.bg-bubbles li[data-v-0dc39524]:nth-child(7){left:32%;width:160px;height:160px;-webkit-animation-delay:7s;animation-delay:7s\n}\n.bg-bubbles li[data-v-0dc39524]:nth-child(8){left:55%;width:20px;height:20px;-webkit-animation-delay:15s;animation-delay:15s;-webkit-animation-duration:40s;animation-duration:40s\n}\n.bg-bubbles li[data-v-0dc39524]:nth-child(9){left:25%;width:10px;height:10px;-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-duration:40s;animation-duration:40s;background-color:hsla(0,0%,100%,.3)\n}\n.bg-bubbles li[data-v-0dc39524]:nth-child(10){left:90%;width:160px;height:160px;-webkit-animation-delay:11s;animation-delay:11s\n}\n@-webkit-keyframes square-data-v-0dc39524{\n0%{-webkit-transform:translateY(0);transform:translateY(0)\n}\nto{-webkit-transform:translateY(-700px) rotate(600deg);transform:translateY(-700px) rotate(600deg)\n}\n}\n@keyframes square-data-v-0dc39524{\n0%{-webkit-transform:translateY(0);transform:translateY(0)\n}\nto{-webkit-transform:translateY(-700px) rotate(600deg);transform:translateY(-700px) rotate(600deg)\n}\n}",""])},187:function(e,t,s){"use strict";var a={},o=(s(185),s(15)),n=Object(o.a)(a,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"bg-bubbles"},[s("li"),e._v(" "),s("li"),e._v(" "),s("li"),e._v(" "),s("li"),e._v(" "),s("li"),e._v(" "),s("li"),e._v(" "),s("li"),e._v(" "),s("li"),e._v(" "),s("li"),e._v(" "),s("li")])}],!1,null,"0dc39524",null);n.options.__file="bobbles.vue";t.a=n.exports},188:function(e,t,s){var a=s(194);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s(10).default)("a5f5e20c",a,!0,{sourceMap:!1})},193:function(e,t,s){"use strict";var a=s(188);s.n(a).a},194:function(e,t,s){(e.exports=s(9)(!1)).push([e.i,"\n#content[data-v-041dc68e]{position:absolute;width:100%;left:0;height:93.5%;height:calc(100% - 59px);overflow-y:scroll\n}\n.table thead th[data-v-041dc68e]{border-top:none\n}\n.table .custom-checkbox .custom-control-label[data-v-041dc68e]:before{height:31px;width:31px;position:relative\n}\n.table .custom-checkbox .custom-control-label[data-v-041dc68e]:after{width:100%;height:100%\n}\n.custom-checkbox[data-v-041dc68e]{padding-left:2.5rem\n}",""])},203:function(e,t,s){"use strict";s.r(t);s(47),s(100),s(101),s(27);var a={components:{Bobbles:s(187).a},layout:"loggedIn",data:function(){return{users:[],itemUsername:"",itemPassword:"",itemFirstname:"",itemLastname:"",itemIsLocked:!1,currentId:1,passwordChangeIsActivated:!1,newYear:"",currentUserToChangePassword:{}}},mounted:function(){this.loadAll()},methods:{loadAll:function(){var e=this;this.$axios.get("admin/options.php?action=getUsers").then(function(t){var s=t.data;s.forEach(function(t){e.users.push({id:e.currentId++,username:t.username,originalUsername:t.username,firstname:t.firstname,lastname:t.lastname,isLocked:t.isLocked,password:"",years:t.years})}),console.log(s)}).catch(function(e){alert("Could not load users. An error calling the middleware occured. Look in the console for further information.")})},addUser:function(){var e=this,t={id:this.currentId++,username:this.itemUsername,firstname:this.itemFirstname,lastname:this.itemLastname,isLocked:this.itemIsLocked,password:this.itemPassword};""==t.username||""==t.firstname||""==t.lastname||""==t.password||" "==t.password?alert("Please fill out all fields."):t.username.includes(" ")?alert("Username is not allowed to have wite spaces."):this.doesUserAlreadyExists(t.username)?alert('Username "'+t.username+'" exists already.'):this.$axios.post("admin/options.php?action=addUser",t).then(function(t){var s=t.data;null!=s.username?(e.users.push(s),e.itemUsername=e.itemPassword=e.itemFirstname=e.itemLastname=e.itemIsLocked="",e.scrollToEnd()):(console.log(reponse),alert("Could not add a new User. Check console for more info."))}).catch(function(e){alert("Could not add a new User. Check console for more info.")})},doesUserAlreadyExists:function(e){var t=!1;return this.users.forEach(function(s){e===s.username&&(t=!0)}),t},removeUser:function(e){var t=this;confirm("Are you sure you want to delte user "+e.username+"?")&&this.$axios.post("admin/options.php?action=removeUser",{username:e.username}).then(function(s){"User deleted."==s.data.message?(t.users.splice(t.users.indexOf(e),1),t.passwordChangeIsActivated=!1):(console.log(reponse),alert("Could not delete user. Check console for more info."))}).catch(function(e){alert("Could not delete user. Check console for more info.")})},updateUser:function(e){this.$axios.post("admin/options.php?action=updateUser",e).then(function(t){var s=t.data;null!=s.username?(e.firstname=s.firstname,e.lastname=s.lastname,e.isLocked=s.isLocked,setTimeout(function(){alert("User "+e.username+" was successfully updated!")},100)):(console.log(reponse),alert("Could not update user. Check console for more info."))}).catch(function(e){alert("Could not update user. Check console for more info.")})},setPasswordView:function(e){var t=this;this.currentUserToChangePassword=e,this.passwordChangeIsActivated=!0,setTimeout(function(){t.scrollToEnd()},100)},setNewPassword:function(){var e=this;this.$axios.post("admin/options.php?action=setPassword",{username:this.currentUserToChangePassword.username,newPassword:this.currentUserToChangePassword.password}).then(function(t){"Password set."==t.data.message?(e.currentUserToChangePassword.password="",setTimeout(function(){alert("Pasword for user "+e.currentUserToChangePassword.username+" was successfully set!")},100)):(console.log(reponse),alert("Could not set password. Check console for more info."))}).catch(function(e){alert("Could not set password. Check console for more info.")})},addYear:function(){var e=this,t={username:this.currentUserToChangePassword.username,year:this.newYear};this.doesYearForUserAlreadyExists(this.currentUserToChangePassword.username,this.newYear)?alert("Year "+this.newYear+" does already exist."):this.$axios.post("admin/options.php?action=addYear",t).then(function(t){var s=t.data;null!=s.newYear?(e.currentUserToChangePassword.years.push(s.newYear),e.newYear=""):(console.log(reponse),alert("Could not add a new year. Check console for more info."))}).catch(function(e){alert("Could not add a new year. Check console for more info.")})},doesYearForUserAlreadyExists:function(e,t){var s=!1;return this.users.forEach(function(a){e===a.username&&a.years.forEach(function(e){t==e&&(s=!0)})}),s},removeYear:function(e){var t=this;confirm("Are you sure you want to delte the year entry "+e+"?")&&(this.currentUserToChangePassword.years.length>1?this.$axios.post("admin/options.php?action=removeYear",{username:this.currentUserToChangePassword.username,year:e}).then(function(s){"Year deleted."==s.data.message?t.currentUserToChangePassword.years.splice(t.currentUserToChangePassword.years.indexOf(e),1):(console.log(reponse),alert("Could not delete year. Check console for more info."))}).catch(function(e){alert("Could not delete year. Check console for more info.")}):alert("There has to be at least one year."))},setView:function(e){var t=this;this.$axios.post("admin/options.php?action=setView",{username:e.username}).then(function(e){"Username for view set."==e.data.message?t.$router.replace("/dashboard"):(console.log(reponse),alert("Could not set View. Check console for more info."))}).catch(function(e){alert("Could not set View. Check console for more info.")})},scrollToEnd:function(){var e=this.$el.querySelector("#content");e.scrollTop=e.scrollHeight},scrollToTop:function(){this.$el.querySelector("#content").scrollTop=0}}},o=(s(193),s(15)),n=Object(o.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("bobbles"),e._v(" "),s("div",{attrs:{id:"content"}},[s("main",{staticClass:"container",attrs:{role:"main"}},[s("h1",{staticClass:"mt-5"},[e._v("Admin Dashboard")]),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"my-3 p-3 bg-white rounded shadow-sm text-dark transparentModal"},[s("h3",{staticClass:"border-bottom border-gray pb-2 mb-0"},[e._v("Create new user")]),e._v(" "),s("br"),e._v(" "),s("p",{staticClass:"lead"},[e._v("Add a new user:")]),e._v(" "),s("hr"),e._v(" "),s("form",{staticClass:"needs-validation",attrs:{novalidate:""}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 mb-3"},[s("label",{attrs:{for:"firstName"}},[e._v("First name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.itemFirstname,expression:"itemFirstname"}],staticClass:"form-control",attrs:{id:"firstName",type:"text",placeholder:"",value:"",maxlength:"45",required:""},domProps:{value:e.itemFirstname},on:{input:function(t){t.target.composing||(e.itemFirstname=t.target.value)}}}),e._v(" "),s("div",{staticClass:"invalid-feedback"},[e._v("\n                Valid first name is required.\n              ")])]),e._v(" "),s("div",{staticClass:"col-md-6 mb-3"},[s("label",{attrs:{for:"lastName"}},[e._v("Last name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.itemLastname,expression:"itemLastname"}],staticClass:"form-control",attrs:{id:"lastName",type:"text",placeholder:"",value:"",maxlength:"45",required:""},domProps:{value:e.itemLastname},on:{input:function(t){t.target.composing||(e.itemLastname=t.target.value)}}}),e._v(" "),s("div",{staticClass:"invalid-feedback"},[e._v("\n                Valid last name is required.\n              ")])])]),e._v(" "),s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),s("div",{staticClass:"input-group"},[e._m(1),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.itemUsername,expression:"itemUsername"}],staticClass:"form-control",attrs:{id:"username",type:"text",placeholder:"Username",required:"",maxlength:"45"},domProps:{value:e.itemUsername},on:{input:function(t){t.target.composing||(e.itemUsername=t.target.value)}}}),e._v(" "),s("div",{staticClass:"invalid-feedback",staticStyle:{width:"100%"}},[e._v("\n                Your username is required.\n              ")])])]),e._v(" "),s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"address"}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.itemPassword,expression:"itemPassword"}],staticClass:"form-control",attrs:{id:"password",maxlength:"45",type:"password",placeholder:"Password",required:""},domProps:{value:e.itemPassword},on:{input:function(t){t.target.composing||(e.itemPassword=t.target.value)}}}),e._v(" "),s("div",{staticClass:"invalid-feedback"},[e._v("\n              Please enter your password.\n            ")])]),e._v(" "),s("hr",{staticClass:"mb-4"}),e._v(" "),s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.itemIsLocked,expression:"itemIsLocked"}],staticClass:"custom-control-input",attrs:{id:"is-Locked",type:"checkbox"},domProps:{checked:Array.isArray(e.itemIsLocked)?e._i(e.itemIsLocked,null)>-1:e.itemIsLocked},on:{change:function(t){var s=e.itemIsLocked,a=t.target,o=!!a.checked;if(Array.isArray(s)){var n=e._i(s,null);a.checked?n<0&&(e.itemIsLocked=s.concat([null])):n>-1&&(e.itemIsLocked=s.slice(0,n).concat(s.slice(n+1)))}else e.itemIsLocked=o}}}),e._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"is-Locked"}},[e._v("Lock this user")])]),e._v(" "),s("hr",{staticClass:"mb-4"}),e._v(" "),s("button",{staticClass:"btn btn-secondary btn-lg btn-block",on:{click:function(t){return t.preventDefault(),e.addUser(t)}}},[e._v("Add User")])])]),e._v(" "),s("br"),e._v(" "),s("div",{staticClass:"my-3 p-3 bg-white rounded shadow-sm text-dark transparentModal"},[s("h3",{staticClass:"border-bottom border-gray pb-2 mb-0"},[e._v("Change user")]),e._v(" "),s("br"),e._v(" "),s("p",{staticClass:"lead"},[e._v("Change a current user:")]),e._v(" "),s("table",{staticClass:"table table-striped table-hover"},[e._m(2),e._v(" "),s("tbody",e._l(e.users,function(t){return s("tr",{key:t.username},[s("th",{attrs:{scope:"row"}},[e._v(e._s(t.id))]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"u.username"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"45",disabled:""},domProps:{value:t.username},on:{input:function(s){s.target.composing||e.$set(t,"username",s.target.value)}}})]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstname,expression:"u.firstname"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"45"},domProps:{value:t.firstname},on:{input:function(s){s.target.composing||e.$set(t,"firstname",s.target.value)}}})]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastname,expression:"u.lastname"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"45"},domProps:{value:t.lastname},on:{input:function(s){s.target.composing||e.$set(t,"lastname",s.target.value)}}})]),e._v(" "),s("td",[s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.isLocked,expression:"u.isLocked"}],staticClass:"custom-control-input",attrs:{id:"is-Locked-"+t.id,type:"checkbox"},domProps:{checked:Array.isArray(t.isLocked)?e._i(t.isLocked,null)>-1:t.isLocked},on:{change:function(s){var a=t.isLocked,o=s.target,n=!!o.checked;if(Array.isArray(a)){var r=e._i(a,null);o.checked?r<0&&e.$set(t,"isLocked",a.concat([null])):r>-1&&e.$set(t,"isLocked",a.slice(0,r).concat(a.slice(r+1)))}else e.$set(t,"isLocked",n)}}}),e._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"is-Locked-"+t.id}})])]),e._v(" "),s("td",[s("button",{staticClass:"btn btn-secondary",on:{click:function(s){e.updateUser(t)}}},[e._v("Update")])]),e._v(" "),s("td",[s("button",{staticClass:"btn btn-secondary",on:{click:function(s){e.removeUser(t)}}},[e._v("Remove")])]),e._v(" "),s("td",[s("button",{staticClass:"btn btn-secondary",on:{click:function(s){e.setPasswordView(t)}}},[e._v("Set Password/Views")])]),e._v(" "),s("td",[s("button",{staticClass:"btn btn-secondary",on:{click:function(s){e.setView(t)}}},[e._v("View FinanceView")])])])}))]),e._v(" "),s("hr",{staticClass:"mb-4"}),e._v(" "),s("button",{staticClass:"btn btn-secondary btn-lg btn-block",on:{click:function(t){e.scrollToTop()}}},[e._v("Go to top")])]),e._v(" "),s("transition",{attrs:{name:"fade"}},[e.passwordChangeIsActivated?s("div",{staticClass:"my-3 p-3 bg-white rounded shadow-sm text-dark transparentModal"},[s("h3",{staticClass:"border-bottom border-gray pb-2 mb-0"},[e._v("Set password/years of user "),s("b",[e._v(e._s(e.currentUserToChangePassword.username))])]),e._v(" "),s("br"),e._v(" "),s("p",{staticClass:"lead"},[e._v("Set the password of the current user:")]),e._v(" "),s("table",{staticClass:"table table-striped table-hover"},[s("thead",{},[s("tr",[s("th",{attrs:{scope:"col"}},[e._v("#")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Username")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("New Password")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Update")])])]),e._v(" "),s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[e._v(e._s(e.currentUserToChangePassword.id))]),e._v(" "),s("td",[e._v(e._s(e.currentUserToChangePassword.username))]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentUserToChangePassword.password,expression:"currentUserToChangePassword.password"}],staticClass:"form-control",attrs:{type:"password",required:"",maxlength:"45"},domProps:{value:e.currentUserToChangePassword.password},on:{input:function(t){t.target.composing||e.$set(e.currentUserToChangePassword,"password",t.target.value)}}})]),e._v(" "),s("td",[s("button",{staticClass:"btn btn-secondary",attrs:{disabled:""==e.currentUserToChangePassword.password},on:{click:function(t){e.setNewPassword()}}},[e._v("Update Password")])])])])]),e._v(" "),s("br"),e._v(" "),s("p",{staticClass:"lead"},[e._v("Add and remove years for current user:")]),e._v(" "),s("table",{staticClass:"table table-striped table-hover"},[s("thead",{},[s("tr",[s("th",{attrs:{scope:"col"}},[e._v("Viewname")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Action")])])]),e._v(" "),s("tbody",[e._l(e.currentUserToChangePassword.years,function(t){return s("tr",{key:t},[s("th",{attrs:{scope:"row"}},[e._v(e._s(t))]),e._v(" "),s("td",[s("button",{staticClass:"btn btn-secondary",on:{click:function(s){e.removeYear(t)}}},[e._v("Remove Year")])])])}),e._v(" "),s("tr",{staticClass:"lastRow"},[s("th",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newYear,expression:"newYear"}],staticClass:"form-control",attrs:{type:"text",required:"",maxlength:"45"},domProps:{value:e.newYear},on:{input:function(t){t.target.composing||(e.newYear=t.target.value)}}})]),e._v(" "),s("td",[s("button",{staticClass:"btn btn-secondary",attrs:{disabled:""==e.newYear},on:{click:function(t){e.addYear()}}},[e._v("Add Year "+e._s(e.newYear))])])])],2)]),e._v(" "),s("hr",{staticClass:"mb-4"}),e._v(" "),s("button",{staticClass:"btn btn-secondary btn-lg btn-block",on:{click:function(t){e.scrollToTop(),e.passwordChangeIsActivated=!1}}},[e._v("Hide & go to top")])]):e._e()])],1)])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"lead"},[this._v("Update, edit, delete, create users and set a new password for them. "),t("a",{attrs:{href:"..\\logout.php"}},[this._v("Logout")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[this._v("@")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",{},[s("tr",[s("th",{attrs:{scope:"col"}},[e._v("#")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Username")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Firstname")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Lastname")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Locked")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Update")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Remove")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Password/Views")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("FinanceView")])])])}],!1,null,"041dc68e",null);n.options.__file="index.vue";t.default=n.exports}}]);