(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{357:function(t,n,e){"use strict";e.r(n);var o=e(356),r={props:["alert"],components:{XCircleIcon:o.g,XIcon:o.h}},l=e(20),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"alert shadow-md alert-error"},[e("div",{staticClass:"text-gray-900"},[e("div",{staticClass:"w-max"},[e("XCircleIcon",{staticClass:"h-6 w-6"})],1),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.alert)}})]),t._v(" "),e("div",{staticClass:"flex-none"},[e("button",{staticClass:"btn btn-sm btn-ghost",on:{click:function(n){return t.$emit("click")}}},[e("span",{staticClass:"sr-only"},[t._v("Ok")]),t._v(" "),e("XIcon")],1)])])}),[],!1,null,null,null);n.default=component.exports},409:function(t,n,e){"use strict";e.r(n);var o=e(13),r=(e(76),e(158)),l={components:{XIcon:r.l,KeyIcon:r.i,EyeIcon:r.e,EyeOffIcon:r.f},props:["credentials"],data:function(){return{login:{login:"",password:""},error:!1,passwordShow:!1}},methods:{sendCredentials:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$post("/me/corporation-credentials",{corporation_name:t.credentials.corporation_name,login:t.login.login,password:t.login.password},{headers:{Authorization:t.$cookies.get("auth")}}).then((function(){t.corporation_name="",t.password="",t.$emit("close"),window.location.reload()})).catch((function(n){t.error=!0}));case 2:case"end":return n.stop()}}),n)})))()},corporationTitle:function(t){return t.substring("https://".length)},togglePassword:function(){this.passwordShow=!this.passwordShow},hideAlert:function(){this.error=!1},getAlertMsg:function(t){return"Deze combinatie van gebruikersnaam en/of wachtwoord is niet bekend bij "+t.corporation_name+'. Let op: Je moet dezelfde inloggegevens gebruiken die je gebruikt om in te loggen op <a href="'+t.corporation_url+'"  target="_blank" class="underline text-sm hover:text-red-700">'+this.corporationTitle(t.corporation_url)+"</a>."}}},c=e(20),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fixed z-10 inset-0 overflow-y-auto",attrs:{"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"}},[e("div",{staticClass:"\n      flex\n      items-end\n      justify-center\n      min-h-screen\n      pt-4\n      px-4\n      pb-20\n      text-center\n      sm:block sm:p-0\n    "},[e("div",{staticClass:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen",attrs:{"aria-hidden":"true"}},[t._v("​")]),t._v(" "),e("div",{staticClass:"\n        inline-block\n        align-bottom\n        bg-white\n        rounded-lg\n        px-4\n        pt-5\n        pb-4\n        text-left\n        overflow-hidden\n        shadow-xl\n        transform\n        transition-all\n        sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6\n      "},[e("div",{staticClass:"absolute top-0 right-0 pt-4 pr-4"},[e("button",{staticClass:"\n            bg-white\n            rounded-md\n            text-gray-400\n            hover:text-gray-500\n            focus:outline-none\n            focus:ring-2\n            focus:ring-offset-2\n            focus:ring-bg-wf-orange\n          ",attrs:{type:"button"},on:{click:function(n){return t.$emit("close")}}},[e("span",{staticClass:"sr-only"},[t._v("Sluiten")]),t._v(" "),e("XIcon",{staticClass:"h-6 w-6"})],1)]),t._v(" "),e("div",{staticClass:"sm:flex items-start"},[e("div",{staticClass:"text-left sm:ml-4"},[t.credentials.is_known?e("h3",{staticClass:"text-xl py-2 leading-6 font-medium text-gray-900",attrs:{id:"modal-title"}},[t._v("\n            Opnieuw inloggen op "+t._s(t.credentials.corporation_name)+"\n          ")]):e("h3",{staticClass:"text-xl py-2 leading-6 font-medium text-gray-900",attrs:{id:"modal-title"}},[t._v("\n            Inloggen op "+t._s(t.credentials.corporation_name)+"\n          ")]),t._v(" "),e("p",{staticClass:"py-2 text-gray-500"},[t._v("\n            Log in met je "+t._s(t.credentials.corporation_name)+" account. Je\n            reageert daarna automatisch op het aanbod van\n            "+t._s(t.credentials.corporation_name)+" dat matcht met je zoekopdracht.\n          ")]),t._v(" "),t.error?e("AlertError",{attrs:{alert:t.getAlertMsg(t.credentials)},on:{click:t.hideAlert}}):t._e(),t._v(" "),e("div",{staticClass:"py-2 items-center w-full"},[e("label",{staticClass:"text-sm font-medium text-gray-900",attrs:{for:"username"}},[t._v("\n              Gebruikersnaam\n            ")]),t._v(" "),e("div",{staticClass:"mt-1 relative"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.login,expression:"login.login"}],staticClass:"\n                  mb-4\n                  shadow-sm\n                  focus:ring-wf-orange focus:border-wf-orange\n                  w-full\n                  sm:text-sm\n                  border-gray-300\n                  rounded-md\n                ",attrs:{id:"username",name:"username",type:"email",autocomplete:"username"},domProps:{value:t.login.login},on:{input:function(n){n.target.composing||t.$set(t.login,"login",n.target.value)}}})]),t._v(" "),e("label",{staticClass:"text-sm font-medium text-gray-900",attrs:{for:"password"}},[t._v("\n              Watchwoord\n            ")]),t._v(" "),e("div",{staticClass:"mt-1 relative"},["checkbox"==(t.passwordShow?"text":"password")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"\n                  shadow-sm\n                  focus:ring-wf-orange focus:border-wf-orange\n                  w-full\n                  sm:text-sm\n                  border-gray-300\n                  rounded-md\n                ",attrs:{id:"password",name:"password",type:"checkbox"},domProps:{checked:Array.isArray(t.login.password)?t._i(t.login.password,null)>-1:t.login.password},on:{change:function(n){var e=t.login.password,o=n.target,r=!!o.checked;if(Array.isArray(e)){var l=t._i(e,null);o.checked?l<0&&t.$set(t.login,"password",e.concat([null])):l>-1&&t.$set(t.login,"password",e.slice(0,l).concat(e.slice(l+1)))}else t.$set(t.login,"password",r)}}}):"radio"==(t.passwordShow?"text":"password")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"\n                  shadow-sm\n                  focus:ring-wf-orange focus:border-wf-orange\n                  w-full\n                  sm:text-sm\n                  border-gray-300\n                  rounded-md\n                ",attrs:{id:"password",name:"password",type:"radio"},domProps:{checked:t._q(t.login.password,null)},on:{change:function(n){return t.$set(t.login,"password",null)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"\n                  shadow-sm\n                  focus:ring-wf-orange focus:border-wf-orange\n                  w-full\n                  sm:text-sm\n                  border-gray-300\n                  rounded-md\n                ",attrs:{id:"password",name:"password",type:t.passwordShow?"text":"password"},domProps:{value:t.login.password},on:{input:function(n){n.target.composing||t.$set(t.login,"password",n.target.value)}}}),t._v(" "),e("button",{staticClass:"\n                  cursor-pointer\n                  absolute\n                  inset-y-0\n                  right-0\n                  pr-3\n                  flex\n                  items-center\n                ",on:{click:t.togglePassword}},[t.passwordShow?e("EyeOffIcon",{staticClass:"h-6 w-6 text-gray-500"}):e("EyeIcon",{staticClass:"h-6 w-6 text-gray-500"})],1)])])],1)]),t._v(" "),e("div",{staticClass:"mt-5 sm:mt-4 sm:flex flex-row-reverse"},[e("button",{staticClass:"sm:ml-3 btn btn-primary btn-block",attrs:{type:"button"},on:{click:t.sendCredentials}},[t._v("\n          Inloggen\n        ")])])])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{AlertError:e(357).default})}}]);