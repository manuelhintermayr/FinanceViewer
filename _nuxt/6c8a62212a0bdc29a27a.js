(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(n,t,e){var i=e(166);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,e(28).default)("3cb208db",i,!0,{sourceMap:!1})},165:function(n,t,e){"use strict";var i=e(164);e.n(i).a},166:function(n,t,e){(n.exports=e(27)(!1)).push([n.i,"\n.bg-bubbles{position:absolute;top:0;left:0;width:100%;height:100%\n}\n.bg-bubbles li{position:absolute;list-style:none;display:block;width:40px;height:40px;background-color:hsla(0,0%,100%,.15);bottom:-160px;-webkit-animation:square 25s infinite;animation:square 25s infinite;transition-timing-function:linear\n}\n.bg-bubbles li:first-child{left:10%\n}\n.bg-bubbles li:nth-child(2){left:20%;width:80px;height:80px;-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-duration:17s;animation-duration:17s\n}\n.bg-bubbles li:nth-child(3){left:25%;-webkit-animation-delay:4s;animation-delay:4s\n}\n.bg-bubbles li:nth-child(4){left:40%;width:60px;height:60px;-webkit-animation-duration:22s;animation-duration:22s;background-color:hsla(0,0%,100%,.25)\n}\n.bg-bubbles li:nth-child(5){left:70%\n}\n.bg-bubbles li:nth-child(6){left:80%;width:120px;height:120px;-webkit-animation-delay:3s;animation-delay:3s;background-color:hsla(0,0%,100%,.2)\n}\n.bg-bubbles li:nth-child(7){left:32%;width:160px;height:160px;-webkit-animation-delay:7s;animation-delay:7s\n}\n.bg-bubbles li:nth-child(8){left:55%;width:20px;height:20px;-webkit-animation-delay:15s;animation-delay:15s;-webkit-animation-duration:40s;animation-duration:40s\n}\n.bg-bubbles li:nth-child(9){left:25%;width:10px;height:10px;-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-duration:40s;animation-duration:40s;background-color:hsla(0,0%,100%,.3)\n}\n.bg-bubbles li:nth-child(10){left:90%;width:160px;height:160px;-webkit-animation-delay:11s;animation-delay:11s\n}\n@-webkit-keyframes square{\n0%{-webkit-transform:translateY(0);transform:translateY(0)\n}\nto{-webkit-transform:translateY(-700px) rotate(600deg);transform:translateY(-700px) rotate(600deg)\n}\n}\n@keyframes square{\n0%{-webkit-transform:translateY(0);transform:translateY(0)\n}\nto{-webkit-transform:translateY(-700px) rotate(600deg);transform:translateY(-700px) rotate(600deg)\n}\n}",""])},167:function(n,t,e){"use strict";var i={},a=(e(165),e(15)),o=Object(a.a)(i,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ul",{staticClass:"bg-bubbles"},[e("li"),n._v(" "),e("li"),n._v(" "),e("li"),n._v(" "),e("li"),n._v(" "),e("li"),n._v(" "),e("li"),n._v(" "),e("li"),n._v(" "),e("li"),n._v(" "),e("li"),n._v(" "),e("li")])}],!1,null,null,null);o.options.__file="bobbles.vue";t.a=o.exports},170:function(n,t,e){var i=e(177);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,e(28).default)("0bf79fce",i,!0,{sourceMap:!1})},171:function(n,t,e){var i=e(179);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,e(28).default)("d4be674c",i,!0,{sourceMap:!1})},176:function(n,t,e){"use strict";var i=e(170);e.n(i).a},177:function(n,t,e){(t=n.exports=e(27)(!1)).push([n.i,"@import url(http://fonts.googleapis.com/css?family=Source+Sans+Pro:200);",""]),t.push([n.i,"\n.container{max-width:600px;text-align:center;text-align:-webkit-center;position:absolute;left:50%;top:40%;margin:-144px 0 0 -300px\n}\n.container h1{font-size:40px;transition-duration:1s;transition-timing-function:ease-in-put;font-weight:200\n}\nform{padding:20px 0;position:relative;z-index:2\n}\nform input{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;border:1px solid hsla(0,0%,100%,.4);background-color:hsla(0,0%,100%,.2);width:250px;border-radius:3px;padding:10px 15px;margin:0 auto 10px;display:block;text-align:center;font-size:18px;color:#fff;transition-duration:.25s;font-weight:300\n}\nform input:hover{background-color:hsla(0,0%,100%,.4)\n}\nform input:focus{width:300px\n}\nform button,form input:focus{background-color:#fff;color:#53e3a6\n}\nform button{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;border:0;padding:10px 15px;border-radius:3px;width:250px;cursor:pointer;font-size:18px;transition-duration:.25s\n}\nform button:hover{background-color:#f5f7f9\n}\n::-webkit-input-placeholder{color:#fff\n}\n:-moz-placeholder{color:#fff;opacity:1\n}\n:-ms-input-placeholder{color:#fff\n}\n.fade-enter-active,.fade-leave-active,.fadeEnterActive{transition:opacity .5s\n}\n.fade-enter,.fade-leave-to,.fadeEnter{opacity:0\n}\n.formSuccess .container h1{-webkit-transform:translateY(85px);transform:translateY(85px)\n}\n.loggingEnd .container h1{-webkit-transform:translateY(20px);transform:translateY(20px)\n}\n.close:hover{cursor:pointer\n}\n.closed{-webkit-transform:translateY(-60px);transform:translateY(-60px);transition:.7s\n}\n#error-close{background:#e74c3c;padding:5px;top:-6px;position:relative;border:1px solid #371e1e\n}\n.error{-moz-animation:error .35s linear;-webkit-animation:error .35s linear\n}\n@-webkit-keyframes error{\n0%{-webkit-transform:translateX(0)\n}\n25%{-webkit-transform:translateX(30px)\n}\n45%{-webkit-transform:translateX(-30px)\n}\n65%{-webkit-transform:translateX(30px)\n}\n82%{-webkit-transform:translateX(-30px)\n}\n94%{-webkit-transform:translateX(30px)\n}\n35%,55%,75%,87%,97%,to{-webkit-transform:translateX(0)\n}\n}\n.alert{font-family:Helvetica Neue,Helvetica,Arial,sans-serif\n}",""])},178:function(n,t,e){"use strict";var i=e(171);e.n(i).a},179:function(n,t,e){(n.exports=e(27)(!1)).push([n.i,"",""])},180:function(n,t,e){"use strict";e.r(t);var i=e(167),a=(e(29),{data:function(){return{username:"",password:"",fullName:"",errorMessage:"",errorAnimationActivated:!1,loginSucceeded:!1,loginAnimationGetTextDown:!1,loginAnimationGetTextUp:!1,loginIsFinished:!1}},methods:{login:function(){var n=this,t={username:this.username,password:this.password};""==t.username||""==t.password?this.loginError("Please fill out all fields."):this.$axios.post("login.php",t).then(function(t){n.loginSuccessfull(t.data.name,t.data.url)}).catch(function(t){n.loginError("The following error occured: <b>"+t.response.data+"</b>")})},loginError:function(n){this.errorMessage=n,this.errorAnimationActivated=!0;var t=this;setTimeout(function(){t.errorAnimationActivated=!1},1e3)},loginSuccessfull:function(n,t){var e=this;setTimeout(function(){e.animateUsername(n,0)},1e3),this.errorMessage="",this.loginSucceeded=!0,this.loginAnimationGetTextDown=!0,setTimeout(function(){e.loginAnimationGetTextUp=!0},3e3),setTimeout(function(){e.loginIsFinished=!0},3200),setTimeout(function(){window.location="/"+t},3300)},animateUsername:function(n,t){var e=n.substring(0,t);if(this.fullName=e,t==n.length)this.fullName=n+"!";else{var i=this;setTimeout(function(){i.animateUsername(n,t+1)},70)}}}}),o=(e(176),e(15)),r=Object(o.a)(a,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{class:{formSuccess:n.loginAnimationGetTextDown,loggingEnd:n.loginAnimationGetTextUp,fadeEnter:n.loginIsFinished,fadeEnterActive:n.loginIsFinished}},[e("div",{staticClass:"container",attrs:{id:"login-container"}},[e("h1",{staticClass:"welcome-message"},[n._v("Welcome "),e("span",{attrs:{id:"messageForTheUser"}}),n._v(n._s(n.fullName))]),n._v(" "),e("transition",{attrs:{name:"fade"}},[n.loginSucceeded?n._e():e("form",{staticClass:"form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.username,expression:"username"}],attrs:{id:"user",type:"text",name:"username",placeholder:"Username",required:""},domProps:{value:n.username},on:{input:function(t){t.target.composing||(n.username=t.target.value)}}}),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.password,expression:"password"}],attrs:{id:"pass",type:"password",name:"password",placeholder:"Password",required:""},domProps:{value:n.password},on:{input:function(t){t.target.composing||(n.password=t.target.value)}}}),n._v(" "),e("button",{attrs:{id:"login-button"},on:{click:function(t){return t.preventDefault(),n.login(t)}}},[n._v("Login")])])])],1),n._v(" "),e("div",{ref:"loginError",staticClass:"alert alert-danger",class:{closed:""==n.errorMessage,error:n.errorAnimationActivated},attrs:{id:"login_error",role:"alert"}},[e("span",{staticClass:"glyphicon glyphicon-exclamation-sign",attrs:{"aria-hidden":"true"}}),n._v(" "),e("span",{staticClass:"sr-only"},[n._v("Error:")]),n._v(" "),e("span",{attrs:{id:"error_message"},domProps:{innerHTML:n._s(n.errorMessage)}}),n._v(" "),e("span",{staticClass:"close",attrs:{id:"error-close"},on:{click:function(t){n.errorMessage=""}}},[n._v("X")])])])},[],!1,null,null,null);r.options.__file="LoginForm.vue";var s=r.exports,l={components:{Bobbles:i.a,Login:s}},c=(e(178),Object(o.a)(l,function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("bobbles"),this._v(" "),t("login")],1)},[],!1,null,null,null));c.options.__file="index.vue";t.default=c.exports}}]);