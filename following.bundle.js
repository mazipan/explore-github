webpackJsonp([3],{"+3E4":function(t,n,e){n=t.exports=e("lcwS")(!1),n.push([t.i,"\n.google-ads[data-v-8a044034] {\n  width: 90%;\n}\n.empty-state[data-v-8a044034] {\n  text-align: center;\n  font-size: 24px;\n  margin-top: 100px;\n  color: #ccc;\n}\n.results[data-v-8a044034] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  background-color: #fff;\n  border: 1px #d1d5da solid;\n  border-radius: 3px;\n  margin: 0 0 60px;\n}\n.result:first-child a[data-v-8a044034] {\n  border-top: 0;\n}\n.result a[data-v-8a044034] {\n  position: relative;\n  display: block;\n  padding: 14px 15px 14px 14px;\n  line-height: inherit;\n  text-align: left;\n  color: #0096d9;\n  text-decoration: none;\n  border-top: 1px solid #eaecef;\n}\n.result__img[data-v-8a044034] {\n  height: 40px;\n  width: 40px;\n  vertical-align: middle;\n  margin-right: 15px;\n  border-radius: 50%;\n  border: 2px solid #0096d9;\n}\n.result__name[data-v-8a044034] {\n  font-size: 24px;\n}\n.title[data-v-8a044034] {\n  margin: 10px;\n  font-size: 24px;\n}\n.ion[data-v-8a044034] {\n  float: right;\n  padding-top: 10px;\n  font-size: 24px;\n  color: #DDD;\n}\n",""])},"2PNx":function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ion",class:t.rootClass,attrs:{name:"ios-arrow-right-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:t.w,height:t.h}},[e("path",{attrs:{d:"M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"}})])])},i=[]},"4LzA":function(t,n){"use strict";n.a={ADS:{client:"ca-pub-5442972248172818",slotInFeed:"2105028631",slotInArticle:"7974047383",layout:"-fg+5n+6t-e7+r"}}},JFoF:function(t,n,e){var a=e("+3E4");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("X/Wc").default;i("86cae2de",a,!0,{})},QDpa:function(t,n,e){var a=e("Xbj5");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("X/Wc").default;i("0bb505cd",a,!0,{})},QeP5:function(t,n){"use strict";n.a={name:"ios-arrow-right-icon",data:function(){return{iconTitle:this.title?this.title:"Ios Arrow Right Icon"}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"14px"},h:{type:String,default:"14px"}}}},SfQW:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.isEmptyResult?e("div",{staticClass:"empty-state"},[e("svg",{staticClass:"octicon octicon-broadcast",attrs:{version:"1.1",width:"100",height:"100",viewBox:"0 0 16 16","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9 9H8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1H6c-.55 0-1 .45-1 1v2h1v3c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-3h1v-2c0-.55-.45-1-1-1zM7 7h1v1H7V7zm2 4H8v4H7v-4H6v-1h3v1zm2.09-3.5c0-1.98-1.61-3.59-3.59-3.59A3.593 3.593 0 0 0 4 8.31v1.98c-.61-.77-1-1.73-1-2.8 0-2.48 2.02-4.5 4.5-4.5S12 5.01 12 7.49c0 1.06-.39 2.03-1 2.8V8.31c.06-.27.09-.53.09-.81zm3.91 0c0 2.88-1.63 5.38-4 6.63v-1.05a6.553 6.553 0 0 0 3.09-5.58A6.59 6.59 0 0 0 7.5.91 6.59 6.59 0 0 0 .91 7.5c0 2.36 1.23 4.42 3.09 5.58v1.05A7.497 7.497 0 0 1 7.5 0C11.64 0 15 3.36 15 7.5z"}})]),t._v(" "),e("br"),e("br"),t._v("\n      Not found any list here, Keep Work!\n      "),e("br")]):t._e(),t._v(" "),t.isEmptyResult?t._e():e("div",{staticClass:"title"},[t._v("\n      "+t._s(t.listTitle)+" "),e("b",[e("i",[t._v(t._s(t.userShowing))])])]),t._v(" "),e("ul",{staticClass:"results"},t._l(t.listUser,function(n,a){return e("li",{key:n.id,staticClass:"result"},[a>0&&a%5==0?e("div",{staticClass:"google-ads"},[e("InFeedAdsense",{attrs:{"root-class":"wrapper VueInFeedAdsense","data-ad-layout-key":t.layout,"data-ad-client":t.client,"data-ad-slot":t.slot}})],1):t._e(),t._v(" "),e("router-link",{attrs:{to:"/"+n.login+"/profile/"}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.avatar_url+"&s=44",expression:"res.avatar_url + '&s=44'"}],staticClass:"result__img",attrs:{alt:n.login}}),t._v(" "),e("span",{staticClass:"result__name"},[t._v(t._s(n.login))]),t._v(" "),e("IosArrowRightIcon",{attrs:{w:"1em",h:"1em"}})],1)],1)}))])},i=[]},Xbj5:function(t,n,e){n=t.exports=e("lcwS")(!1),n.push([t.i,"",""])},Y1wB:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"grid__row"},[e("user-list",{attrs:{"list-user":t.userFollowing,"user-showing":t.userShowing,"list-title":"Following list from user"}})],1)},i=[]},aOS5:function(t,n,e){"use strict";var a=e("QeP5"),i=e("2PNx"),s=e("xRi5");n.a=Object(s.a)(a.a,i.a,i.b,!1,null,null,null).exports},awph:function(t,n,e){"use strict";function a(){e("QDpa")}Object.defineProperty(n,"__esModule",{value:!0});var i=e("gjzg"),s=e("Y1wB"),r=e("xRi5"),o=a;n.default=Object(r.a)(i.a,s.a,s.b,!1,o,"data-v-6e479cbf",null).exports},gjzg:function(t,n,e){"use strict";n.a={name:"FollowingPage",components:{UserList:e("j8yw").a},computed:{userShowing:function(){return this.$route.params.user},userFollowing:function(){return this.$store.getters.userFollowing}},activated:function(){this.$store.dispatch("getUserFollowing",this.userShowing)}}},iM4z:function(t,n,e){"use strict";var a=e("4LzA");n.a={name:"followerlist",props:["listUser","listTitle","userShowing"],components:{IosArrowRightIcon:e("aOS5").a},computed:{isEmptyResult:function(){var t=!0;return this.listUser&&this.listUser.length>0&&(t=!1),t}},data:function(){return{layout:a.a.ADS.layout,slot:a.a.ADS.slotInFeed,client:a.a.ADS.client}}}},j8yw:function(t,n,e){"use strict";function a(){e("JFoF")}var i=e("iM4z"),s=e("SfQW"),r=e("xRi5"),o=a;n.a=Object(r.a)(i.a,s.a,s.b,!1,o,"data-v-8a044034",null).exports}});