(window.webpackJsonp=window.webpackJsonp||[]).push([[26,6],{358:function(t,e,r){"use strict";r.r(e);var n={props:["alert"]},c=r(20),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert mt-2 p-4"},[r("div",[r("div",{staticClass:"w-max"},[t._t("default")],2),t._v(" "),r("span",{staticClass:"text-sm font-medium text-gray-900",domProps:{innerHTML:t._s(t.alert)}})])])}),[],!1,null,null,null);e.default=component.exports},361:function(t,e,r){"use strict";r.r(e);var n=r(13),c=(r(76),r(61),r(79),r(29),r(62),r(159),r(356)),o=r(227)({accessToken:"pk.eyJ1IjoianVsaWVucmJydCIsImEiOiJja2pjM2owN3YzaTI3MnlsZzhzNHF0bTJiIn0.tHQupCsIuKuWNg6oP2d19Q"}),l={components:{InformationCircleIcon:c.e,XIcon:c.h},props:["city"],data:function(){return{suggestedDistricts:this.city.district}},methods:{selectDistrict:function(input){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,i,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],!t.suggestedDistricts){e.next=8;break}if(0!=input.length){e.next=7;break}for(i=0;i<t.suggestedDistricts.length;i++)r.push(t.suggestedDistricts[i]);return e.abrupt("return",r);case 7:for(i=0;i<t.suggestedDistricts.length;i++)t.suggestedDistricts[i].toLowerCase().includes(input.toLowerCase())&&r.push(t.suggestedDistricts[i]);case 8:if(!(input.length>0)){e.next=14;break}return e.next=11,o.forwardGeocode({query:input,countries:["nl"],proximity:[t.city.longitude,t.city.latitude],types:["neighborhood","locality"],autocomplete:!0,language:["nl-NL"]}).send();case 11:for(n=e.sent,c=n.body,i=0;i<c.features.length;i++)c.features[i].place_name.includes(t.city.name)&&r.push(t.districtWithoutCity(c.features[i].place_name));case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})))()},districtWithoutCity:function(t){return t.split(",",1)[0]},addCityDistrict:function(t){t&&(this.$store.commit("register/addCityDistrict",{city:this.city,district:t}),this.$refs.autocomplete.setValue(""),document.activeElement.blur(),this.$forceUpdate())},removeCityDistrict:function(t){t&&this.$store.commit("register/removeCityDistrict",{city:this.city,district:t}),this.$forceUpdate()}},computed:{getCity:function(){var t=this.$store.getters["register/getCity"](this.city);return t.district||(t.district=[]),t}}},d=r(20),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.city.district?r("p",{staticClass:"mt-2 text-base text-gray-500"},[t._v("\n    Er zijn "+t._s(t.city.district.length)+" voorgestelde wijken voor deze stad.\n  ")]):t._e(),t._v(" "),r("autocomplete",{ref:"autocomplete",staticClass:"mt-4",attrs:{search:t.selectDistrict,type:"text",placeholder:"Zoek buurt, wijk, etc.","aria-label":"Zoek buurt, wijk, etc.","debounce-time":200,"auto-select":""},on:{submit:t.addCityDistrict}}),t._v(" "),t.getCity.district.length>0?r("div",{staticClass:"mt-6 space-y-4"},t._l(t.getCity.district,(function(e){return r("div",{key:e,staticClass:"\n        relative\n        flex\n        items-center\n        rounded-lg\n        border border-gray-400\n        bg-white\n        shadow-sm\n        px-6\n        py-2\n        justify-between\n      "},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("\n        "+t._s(e)+"\n      ")]),t._v(" "),r("button",{staticClass:"\n          inline-flex\n          rounded-md\n          p-1.5\n          text-gray-300\n          hover:text-red-300\n          focus:outline-none\n        ",attrs:{type:"button"},on:{click:function(r){return t.removeCityDistrict(e)}}},[r("XIcon",{attrs:{size:"1.5x"}})],1)])})),0):r("AlertInfo",{staticClass:"mt-4",attrs:{alert:"Je hebt nog geen wijk voorkeur. WoningFinder reageert daarom over de hele stad."}},[r("InformationCircleIcon",{staticClass:"h-5 w-5 text-gray-400"})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AlertInfo:r(358).default})}}]);