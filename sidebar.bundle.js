webpackJsonp([7],{133:function(t,n,i){"use strict";n.a={name:"Sidebar",components:{IosHomeIcon:i(25).a,IosBoxIcon:i(26).a,IosPawIcon:i(27).a,IosPeopleIcon:i(28).a,HelpCircledIcon:i(29).a,AndroidContactIcon:i(30).a},computed:{isShowSidebar:function(){return this.$store.getters.isShowSidebar},userActionTab:function(){return this.$store.getters.userActionTab}},methods:{navigateTo:function(t){this.$store.commit("setShowSidebar",!1),t.preventDefault()},hideSidebar:function(){this.$store.commit("setShowSidebar",!1)}}}},159:function(t,n,i){var e=i(160);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i(3).default;a("89ea25bc",e,!0,{})},160:function(t,n,i){n=t.exports=i(2)(!1),n.push([t.i,"\n.sidebar[data-v-eb6fd358] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  width: 70%;\n  height: 40em;\n  height: 100vh;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 20;\n  transform: translateX(-100%);\n  -webkit-transition: transform 300ms;\n  -moz-transition: transform 300ms;\n  -o-transition: transform 300ms;\n  transition: transform 300ms;\n}\n.sidebar--open[data-v-eb6fd358] {\n    -ms-transform: translateX(0);\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n}\n.sidebar__head[data-v-eb6fd358] {\n    height: 60px;\n    background-color: #0096d9;\n}\n.sidebar__head img[data-v-eb6fd358] {\n      height: 50px;\n      padding: 5px 0 0 15px;\n}\n.sidebar__content[data-v-eb6fd358] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    overflow: auto;\n    background: #fff;\n}\n.sidebar__menu[data-v-eb6fd358] {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.sidebar__link[data-v-eb6fd358] {\n    display: block;\n    color: #000;\n    text-decoration: none;\n    padding: 15px 25px;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n}\n",""])},161:function(t,n,i){"use strict";i.d(n,"a",function(){return e}),i.d(n,"b",function(){return a});var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("aside",{staticClass:"sidebar"},[i("div",{staticClass:"sidebar__content"},[i("div",{staticClass:"sidebar__head"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"assets/images/github-explorer-white.png",expression:"'assets/images/github-explorer-white.png'"}],attrs:{alt:"Vue Github Explorer Logo White"}})]),t._v(" "),i("ul",{staticClass:"sidebar__menu"},[i("li",{staticClass:"sidebar__item"},[i("router-link",{staticClass:"sidebar__link",attrs:{to:"/"},nativeOn:{click:function(n){t.navigateTo(n)}}},[i("IosHomeIcon",{attrs:{w:"30px",h:"30px"}}),t._v("  Home\n        ")],1)],1),t._v(" "),i("li",{staticClass:"sidebar__item"},[t.userActionTab.hideHomeIcon?i("router-link",{staticClass:"sidebar__link",attrs:{to:"/"+t.userActionTab.login+"/profile/"},nativeOn:{click:function(n){t.navigateTo(n)}}},[i("AndroidContactIcon",{attrs:{w:"30px",h:"30px"}}),t._v("  Profile\n        ")],1):t._e()],1),t._v(" "),i("li",{staticClass:"sidebar__item"},[i("router-link",{staticClass:"sidebar__link",attrs:{to:"/"+t.userActionTab.login+"/repositories/"},nativeOn:{click:function(n){t.navigateTo(n)}}},[i("IosBoxIcon",{attrs:{w:"30px",h:"30px"}}),t._v("  Repositories\n        ")],1)],1),t._v(" "),t.userActionTab.isOrg?t._e():i("li",{staticClass:"sidebar__item"},[i("router-link",{staticClass:"sidebar__link",attrs:{to:"/"+t.userActionTab.login+"/followers/"},nativeOn:{click:function(n){t.navigateTo(n)}}},[i("IosPawIcon",{attrs:{w:"30px",h:"30px"}}),t._v("  Followers\n        ")],1)],1),t._v(" "),t.userActionTab.isOrg?t._e():i("li",{staticClass:"sidebar__item"},[i("router-link",{staticClass:"sidebar__link",attrs:{to:"/"+t.userActionTab.login+"/following/"},nativeOn:{click:function(n){t.navigateTo(n)}}},[i("IosPeopleIcon",{attrs:{w:"30px",h:"30px"}}),t._v("  Following\n        ")],1)],1),t._v(" "),i("li",{staticClass:"sidebar__item"},[i("router-link",{staticClass:"sidebar__link",attrs:{to:"/about"},nativeOn:{click:function(n){t.navigateTo(n)}}},[i("HelpCircledIcon",{attrs:{w:"30px",h:"30px"}}),t._v(" About\n        ")],1)],1)])])])},a=[]},98:function(t,n,i){"use strict";function e(){i(159)}Object.defineProperty(n,"__esModule",{value:!0});var a=i(133),s=i(161),o=i(1),r=e;n.default=Object(o.a)(a.a,s.a,s.b,!1,r,"data-v-eb6fd358",null).exports}});