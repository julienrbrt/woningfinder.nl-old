(window.webpackJsonp=window.webpackJsonp||[]).push([[31,6,18],{358:function(n,t,e){"use strict";e.r(t);var o={props:["alert"]},r=e(20),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"alert mt-2 p-4"},[e("div",[e("div",{staticClass:"w-max"},[n._t("default")],2),n._v(" "),e("span",{staticClass:"text-sm font-medium text-gray-900",domProps:{innerHTML:n._s(n.alert)}})])])}),[],!1,null,null,null);t.default=component.exports},371:function(n,t,e){var map={"./dewoningzoeker.png":372,"./dewoonplaats.png":373,"./domijn.png":374,"./ikwilhuren.png":375,"./mijande_wonen.png":376,"./onshuis.png":377,"./roomspot.png":378,"./woningnet.png":379,"./woonburoalmelo.png":380,"./woonnethaaglanden.png":381};function o(n){var t=r(n);return e(t)}function r(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=371},372:function(n,t,e){n.exports=e.p+"img/dewoningzoeker.cf75324.png"},373:function(n,t,e){n.exports=e.p+"img/dewoonplaats.1b444a8.png"},374:function(n,t,e){n.exports=e.p+"img/domijn.d0f7801.png"},375:function(n,t,e){n.exports=e.p+"img/ikwilhuren.b3d7ff2.png"},376:function(n,t,e){n.exports=e.p+"img/mijande_wonen.5729dc1.png"},377:function(n,t,e){n.exports=e.p+"img/onshuis.dfaac73.png"},378:function(n,t,e){n.exports=e.p+"img/roomspot.80cc900.png"},379:function(n,t,e){n.exports=e.p+"img/woningnet.3f907c7.png"},380:function(n,t,e){n.exports=e.p+"img/woonburoalmelo.849e89c.png"},381:function(n,t,e){n.exports=e.p+"img/woonnethaaglanden.94f5613.png"},405:function(n,t,e){"use strict";e.r(t);var o={props:["name","image","website"]},r=e(20),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("a",{staticClass:"cursor-pointer",attrs:{href:n.website,target:"_blank"}},[o("div",{staticClass:"\n      tooltip\n      col-span-1\n      flex\n      justify-center\n      py-8\n      px-8\n      bg-gray-50\n      rounded-lg\n    ",attrs:{"data-tip":n.name}},[o("img",{staticClass:"max-h-12",attrs:{src:e(371)("./"+n.image),alt:n.name}})])])}),[],!1,null,null,null);t.default=component.exports},441:function(n,t,e){"use strict";e.r(t);var o={components:{InformationCircleIcon:e(356).e},data:function(){return{title:"Beschikbare woningcorporaties en verhuurders"}},head:function(){return{title:this.title}}},r=e(20),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("Hero",[e("div",{staticClass:"mt-6 sm:max-w-xl"},[e("h1",{staticClass:"\n        text-3xl\n        font-extrabold\n        text-wf-purple\n        tracking-tight\n        sm:text-4xl\n      "},[n._v("\n      "+n._s(n.title)+"\n    ")]),n._v(" "),e("p",{staticClass:"mt-6 text-lg text-gray-500"},[n._v("\n      Hier zijn de woningaanbod websites waarin je automatisch kan reageren\n      met WoningFinder.\n    ")]),n._v(" "),e("AlertInfo",{staticClass:"mt-6",attrs:{alert:'Zoek je een site die hier nog niet staat? Neem dan\n            <a\n              to="/contact"\n              class="underline text-gray-700 hover:text-gray-900"\n              >contact</a>\n            met ons op.'}},[e("InformationCircleIcon",{staticClass:"h-5 w-5 text-gray-400"})],1),n._v(" "),e("h2",{staticClass:"mt-4 mb-2 text-xl text-gray-900"},[n._v("Heel Nederland")]),n._v(" "),e("div",{staticClass:"\n        mt-8\n        grid grid-cols-2\n        gap-0.5\n        md:grid-cols-3\n        lg:mt-0 lg:grid-cols-2\n      "},[e("LandingCorporationLogo",{attrs:{name:"Ikwilhuren",image:"ikwilhuren.png",website:"https://ikwilhuren.nu"}}),n._v(" "),e("LandingCorporationLogo",{attrs:{name:"WoningNet",image:"woningnet.png",website:"https://www.woningnet.nl"}})],1),n._v(" "),e("h2",{staticClass:"mt-4 mb-2 text-xl text-gray-900"},[n._v("Regio Overijssel")]),n._v(" "),e("div",{staticClass:"\n        mt-8\n        grid grid-cols-2\n        gap-0.5\n        md:grid-cols-3\n        lg:mt-0 lg:grid-cols-2\n      "},[e("LandingCorporationLogo",{attrs:{name:"De Woonplaats",image:"dewoonplaats.png",website:"https://www.dewoonplaats.nl"}}),n._v(" "),e("LandingCorporationLogo",{attrs:{name:"Domijn",image:"domijn.png",website:"https://www.domijn.nl"}}),n._v(" "),e("LandingCorporationLogo",{attrs:{name:"OnsHuis",image:"onshuis.png",website:"https://www.onshuis.com"}}),n._v(" "),e("LandingCorporationLogo",{attrs:{name:"Mijande Wonen",image:"mijande_wonen.png",website:"https://www.mijande.nl"}}),n._v(" "),e("LandingCorporationLogo",{attrs:{name:"De WoningZoeker",image:"dewoningzoeker.png",website:"https://www.dewoningzoeker.nl"}}),n._v(" "),e("LandingCorporationLogo",{attrs:{name:"Woonburo Almelo",image:"woonburoalmelo.png",website:"https://www.woonburoalmelo.nl"}}),n._v(" "),e("LandingCorporationLogo",{attrs:{name:"Roomspot",image:"roomspot.png",website:"https://www.roomspot.nl"}})],1),n._v(" "),e("h2",{staticClass:"mt-4 mb-2 text-xl text-gray-900"},[n._v("Regio Zuid-Holland")]),n._v(" "),e("div",{staticClass:"\n        mt-8\n        grid grid-cols-2\n        gap-0.5\n        md:grid-cols-3\n        lg:mt-0 lg:grid-cols-2\n      "},[e("LandingCorporationLogo",{attrs:{name:"Woonnet Haaglanden",image:"woonnethaaglanden.png",website:"https://www.woonnet-haaglanden.nl"}})],1),n._v(" "),e("AlertInfo",{staticClass:"mt-4",attrs:{alert:"Let op: WoningFinder is zelf geen woninganbood website maar een aggregator, alle namen en\n      logo's op deze pagina zijn eigendom van de verhuurders zelf."}},[e("InformationCircleIcon",{staticClass:"h-5 w-5 text-gray-400"})],1),n._v(" "),e("div",{staticClass:"\n        mt-4\n        inline-flex\n        flex-col\n        sm:flex-row\n        w-max\n        items-start\n        sm:items-center\n        justify-center\n      "},[e("p",{staticClass:"text-gray-500"},[n._v("Reageer je nog steeds niet automatisch?")]),n._v(" "),e("NuxtLink",{staticClass:"mt-2 sm:mt-0 sm:ml-4 w-auto py-2 btn btn-secondary",attrs:{to:"/start"}},[n._v("\n        Begin nu\n      ")])],1),n._v(" "),e("div",{staticClass:"items-center mt-5 space-x-4"},[e("BackButton")],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AlertInfo:e(358).default,LandingCorporationLogo:e(405).default,BackButton:e(226).default,Hero:e(225).default})}}]);