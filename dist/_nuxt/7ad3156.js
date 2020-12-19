/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{184:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"e",(function(){return c})),r.d(t,"b",(function(){return l})),r.d(t,"f",(function(){return f})),r.d(t,"d",(function(){return m})),r.d(t,"a",(function(){return d}));var o=r(58),n=function(data){return Object(o.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(o.b)({method:"POST",url:"/api/users",data:data})},l=function(data){return Object(o.b)({method:"GET",url:"/api/user"})},f=function(data){return Object(o.b)({method:"PUT",url:"/api/user",data:data})},m=function(e){return Object(o.b)({method:"GET",url:"/api/profiles/".concat(e)})},d=function(e){return Object(o.b)({method:"POST",url:"/api/profiles/".concat(e,"/follow")})}},186:function(e,t,r){var o,n;!function(c){if(void 0===(n="function"==typeof(o=c)?o.call(t,r,t,e):o)||(e.exports=n),!0,e.exports=c(),!!0){var l=window.Cookies,f=window.Cookies=c();f.noConflict=function(){return window.Cookies=l,f}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var r in t)e[r]=t[r]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(o){function n(){}function c(t,r,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},n.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(r);/^[\{\[]/.test(l)&&(r=l)}catch(e){}r=o.write?o.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var m in c)c[m]&&(f+="; "+m,!0!==c[m]&&(f+="="+c[m].split(";")[0]));return document.cookie=t+"="+r+f}}function l(e,r){if("undefined"!=typeof document){for(var n={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),f=l.slice(1).join("=");r||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var m=t(l[0]);if(f=(o.read||o)(f,m)||t(f),r)try{f=JSON.parse(f)}catch(e){}if(n[m]=f,e===m)break}catch(e){}}return e?n[e]:n}}return n.set=c,n.get=function(e){return l(e,!1)},n.getJSON=function(e){return l(e,!0)},n.remove=function(t,r){c(t,"",e(r,{expires:-1}))},n.defaults={},n.withConverter=r,n}((function(){}))}))},264:function(e,t,r){"use strict";r.r(t);r(77),r(31),r(32),r(10),r(59),r(30);var o=r(3),n=r(43),c=r(33),l=r(184);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=r(186),v={middleware:"authenticated",name:"SettingsIndex",computed:m({},Object(c.b)(["user"])),data:function(){return{form:{username:"",email:"",bio:"",image:"",password:""}}},mounted:function(){this.getUser()},methods:{logout:function(){this.$store.commit("setUser",null),this.$router.push("/")},getUser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(l.b)();case 3:r=t.sent,(data=r.data)&&data.user&&(e.form.username=data.user.username,e.form.email=data.user.email),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("请求失败",t.t0),e.errors=t.t0.response.data.errors;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},updateSetting:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(l.f)({user:m({},e.form)});case 3:r=t.sent,data=r.data,console.log("updateSetting",data),data&&data.user&&(e.$store.commit("setUser",data.user),d.set("user",data.user),e.$router.push("/")),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("请求失败",t.t0),e.errors=t.t0.response.data.errors;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},h=r(20),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"settings-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Your Settings")]),e._v(" "),r("form",[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.image,expression:"form.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:e.form.image},on:{input:function(t){t.target.composing||e.$set(e.form,"image",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.bio,expression:"form.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:e.form.bio},on:{input:function(t){t.target.composing||e.$set(e.form,"bio",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",on:{click:function(t){return t.preventDefault(),e.updateSetting(t)}}},[e._v("\n              Update Settings\n            ")])])]),e._v(" "),r("hr"),e._v(" "),r("button",{staticClass:"btn btn-outline-danger",on:{click:e.logout}},[e._v("\n          Or click here to logout.\n        ")])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);