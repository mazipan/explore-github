webpackJsonp([3],{109:function(t,n,e){var s=e(110);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(2)("2bc3d19c",s,!0)},110:function(t,n,e){n=t.exports=e(1)(!1),n.push([t.i,"",""])},111:function(t,n){"use strict";n.a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"grid__row"},[e("user-list",{attrs:{"list-user":t.userFollowing,"user-showing":t.userShowing,"list-title":"Following list from user"}})],1)},staticRenderFns:[]}},74:function(t,n,e){"use strict";function s(){e(109)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(96),a=e(111);n.default=e(3)(i.a,a.a,!1,s,"data-v-6e479cbf",null).exports},79:function(t,n){"use strict";n.a={name:"followerlist",props:["listUser","listTitle","userShowing"],computed:{isEmptyResult:function(){var t=!0;return this.listUser&&this.listUser.length>0&&(t=!1),t}},methods:{}}},85:function(t,n,e){"use strict";function s(){e(86)}var i=e(79),a=e(88);n.a=e(3)(i.a,a.a,!1,s,"data-v-04559cfb",null).exports},86:function(t,n,e){var s=e(87);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(2)("8dbf285c",s,!0)},87:function(t,n,e){n=t.exports=e(1)(!1),n.push([t.i,"\n.google-ads[data-v-04559cfb] {\n  width: 90%;\n}\n.empty-state[data-v-04559cfb] {\n  text-align: center;\n  font-size: 24px;\n  margin-top: 100px;\n  color: #ccc;\n}\n.results[data-v-04559cfb] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  background-color: #fff;\n  border: 1px #d1d5da solid;\n  border-radius: 3px;\n  margin: 0 0 60px;\n}\n.result:first-child a[data-v-04559cfb] {\n  border-top: 0;\n}\n.result a[data-v-04559cfb] {\n  position: relative;\n  display: block;\n  padding: 14px 15px 14px 14px;\n  line-height: inherit;\n  text-align: left;\n  color: #0096d9;\n  text-decoration: none;\n  border-top: 1px solid #eaecef;\n}\n.result__img[data-v-04559cfb] {\n  height: 40px;\n  width: 40px;\n  vertical-align: middle;\n  margin-right: 15px;\n  border-radius: 50%;\n  border: 2px solid #0096d9;\n}\n.result__name[data-v-04559cfb] {\n  font-size: 24px;\n}\n.title[data-v-04559cfb] {\n  margin: 10px;\n  font-size: 24px;\n}\n.icon[data-v-04559cfb] {\n  float: right;\n  padding-top: 10px;\n  font-size: 24px;\n  color: #DDD;\n}\n",""])},88:function(t,n){"use strict";n.a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.isEmptyResult?e("div",{staticClass:"empty-state"},[e("svg",{staticClass:"octicon octicon-broadcast",attrs:{version:"1.1",width:"100",height:"100",viewBox:"0 0 16 16","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9 9H8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1H6c-.55 0-1 .45-1 1v2h1v3c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-3h1v-2c0-.55-.45-1-1-1zM7 7h1v1H7V7zm2 4H8v4H7v-4H6v-1h3v1zm2.09-3.5c0-1.98-1.61-3.59-3.59-3.59A3.593 3.593 0 0 0 4 8.31v1.98c-.61-.77-1-1.73-1-2.8 0-2.48 2.02-4.5 4.5-4.5S12 5.01 12 7.49c0 1.06-.39 2.03-1 2.8V8.31c.06-.27.09-.53.09-.81zm3.91 0c0 2.88-1.63 5.38-4 6.63v-1.05a6.553 6.553 0 0 0 3.09-5.58A6.59 6.59 0 0 0 7.5.91 6.59 6.59 0 0 0 .91 7.5c0 2.36 1.23 4.42 3.09 5.58v1.05A7.497 7.497 0 0 1 7.5 0C11.64 0 15 3.36 15 7.5z"}})]),t._v(" "),e("br"),e("br"),t._v("\n      Not found any list here, Keep Work!\n      "),e("br")]):t._e(),t._v(" "),t.isEmptyResult?t._e():e("div",{staticClass:"title"},[t._v("\n      "+t._s(t.listTitle)+" "),e("b",[e("i",[t._v(t._s(t.userShowing))])])]),t._v(" "),e("ul",{staticClass:"results"},t._l(t.listUser,function(n,s){return e("li",{key:n.id,staticClass:"result"},[s>0&&s%5==0?e("div",{staticClass:"google-ads"},[e("InFeedAdsense",{attrs:{"root-class":"wrapper VueInFeedAdsense","data-ad-layout-key":"-fg+5n+6t-e7+r","data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"2105028631"}})],1):t._e(),t._v(" "),e("router-link",{attrs:{to:"/"+n.login+"/profile/"}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.avatar_url,expression:"res.avatar_url"}],staticClass:"result__img"}),t._v(" "),e("span",{staticClass:"result__name"},[t._v(t._s(n.login))]),t._v(" "),e("i",{staticClass:"fa fa-chevron-right icon"})])],1)}))])},staticRenderFns:[]}},96:function(t,n,e){"use strict";n.a={name:"FollowingPage",components:{UserList:e(85).a},computed:{userShowing:function(){return this.$route.params.user},userFollowing:function(){return this.$store.getters.userFollowing}},activated:function(){this.$store.dispatch("getUserFollowing",this.userShowing)}}}});