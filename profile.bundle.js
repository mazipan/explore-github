webpackJsonp([0],{104:function(t,e){"use strict";e.a={ADS:{client:"ca-pub-5442972248172818",slotInFeed:"2105028631",slotInArticle:"7974047383",layout:"-fg+5n+6t-e7+r"}}},105:function(t,e,a){"use strict";var s=a(104);e.a={name:"repositorylist",props:["repositories"],data:function(){return{layout:s.a.ADS.layout,slot:s.a.ADS.slotInFeed,client:s.a.ADS.client}}}},108:function(t,e,a){"use strict";e.a={name:"userprofile",props:["userData","isBookmarked"],components:{TrophyIcon:a(121).a,IosBookmarksIcon:a(126).a},computed:{profileImg:function(){var t=this,e="assets/images/brand.png";return t.userData&&t.userData.avatar_url&&(e=t.userData.avatar_url),e}},methods:{bookmarkUser:function(){this.isBookmarked?alert("User has been bookmarked"):this.$store.commit("setBookmarkUser",this.userData.login)}}}},109:function(t,e){"use strict";e.a={name:"trophy-icon",data:function(){return{iconTitle:this.title?this.title:"Trophy Icon"}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"14px"},h:{type:String,default:"14px"}}}},110:function(t,e){"use strict";e.a={name:"ios-bookmarks-icon",data:function(){return{iconTitle:this.title?this.title:"Ios Bookmarks Icon"}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"14px"},h:{type:String,default:"14px"}}}},111:function(t,e,a){"use strict";function s(){a(112)}var n=a(0),r=a(105),o=a(114),i=s;e.a=Object(n.a)(r.a,o.a,!1,i,"data-v-5db768a8",null).exports},112:function(t,e,a){var s=a(113);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=a(3).default;n("2396a65c",s,!0,{})},113:function(t,e,a){e=t.exports=a(2)(!1),e.push([t.i,"\n.google-ads[data-v-5db768a8] {\n  width: 90%;\n}\n.repos[data-v-5db768a8] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  background-color: #fff;\n  border: 1px #d1d5da solid;\n  border-radius: 3px;\n  margin: 0 0 60px;\n}\n.repo .octicon[data-v-5db768a8] {\n  color: #282828;\n  top: 14px;\n  left: 12px;\n  width: 16px;\n  text-align: center;\n  vertical-align: bottom;\n}\n.repo:first-child a[data-v-5db768a8] {\n  border-top: 0;\n}\n.repo a[data-v-5db768a8] {\n  position: relative;\n  display: block;\n  padding: 14px 15px 14px 14px;\n  line-height: inherit;\n  text-align: left;\n  color: #0096d9;\n  text-decoration: none;\n  border-top: 1px solid #eaecef;\n}\n.repo__name[data-v-5db768a8] {\n  display: inline-block;\n  width: 70%;\n  line-height: 1.2;\n  vertical-align: top;\n  word-wrap: break-word;\n}\n.star[data-v-5db768a8] {\n  float: right;\n  margin-bottom: 3px;\n  margin-right: 25px;\n  font-size: 12px;\n  color: #6a737d;\n}\n",""])},114:function(t,e){"use strict";e.a={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"repos"},t._l(t.repositories,function(e,s){return a("li",{key:e.id,staticClass:"repo"},[s>0&&s%5==0?a("div",{staticClass:"google-ads"},[a("InFeedAdsense",{attrs:{"root-class":"wrapper VueInFeedAdsense","data-ad-layout-key":t.layout,"data-ad-client":t.client,"data-ad-slot":t.slot}})],1):t._e(),t._v(" "),a("a",{attrs:{href:e.html_url,target:"_blank",rel:"noopener"}},[e.fork?a("svg",{staticClass:"octicon octicon-git-branch",attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 10 16",width:"10"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})]):t._e(),t._v(" "),e.fork?t._e():a("svg",{staticClass:"octicon octicon-repo",attrs:{version:"1.1",width:"12",height:"16",viewBox:"0 0 12 16","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"}})]),t._v(" "),a("div",{staticClass:"repo__name"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"star"},[t._v("\n        "+t._s(e.stargazers_count)+"\n        "),a("svg",{staticClass:"octicon octicon-star",attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 14 16",width:"14"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"}})])])])])}))},staticRenderFns:[]}},121:function(t,e,a){"use strict";var s=a(0),n=a(109),r=a(125);e.a=Object(s.a)(n.a,r.a,!1,null,null,null).exports},122:function(t,e,a){"use strict";function s(){a(123)}var n=a(0),r=a(108),o=a(128),i=s;e.a=Object(n.a)(r.a,o.a,!1,i,"data-v-65c7ce03",null).exports},123:function(t,e,a){var s=a(124);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=a(3).default;n("5a7b4e69",s,!0,{})},124:function(t,e,a){e=t.exports=a(2)(!1),e.push([t.i,"\n.profile[data-v-65c7ce03] {\n  text-align: center;\n  color: #282828;\n}\n.profile__img[data-v-65c7ce03] {\n    height: 100px;\n    border-radius: 50%;\n    border: 5px solid #0096d9;\n}\n.profile__identity[data-v-65c7ce03], .profile__bio[data-v-65c7ce03] {\n    margin-bottom: 10px;\n}\n.profile__name[data-v-65c7ce03] {\n    font-size: 24px;\n    margin: 10px 0 0px;\n}\n.profile__login[data-v-65c7ce03] {\n    color: #a49c9c;\n    font-size: 16px;\n}\n.thropy[data-v-65c7ce03] {\n  position: absolute;\n  top: 70px;\n  left: 10px;\n  cursor: pointer;\n  color: #0096d9;\n  font-size: 50px;\n}\n.is-bookmarked[data-v-65c7ce03] {\n  position: absolute;\n  top: 70px;\n  right: 10px;\n  cursor: pointer;\n  color: #282828;\n}\n.is-bookmarked--yes[data-v-65c7ce03] {\n    color: #0096d9;\n}\n",""])},125:function(t,e){"use strict";e.a={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ion",class:t.rootClass,attrs:{name:"trophy-icon","aria-labelledby":t.iconTitle}},[a("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:t.w,height:t.h}},[a("path",{attrs:{d:"M479.863 103.342c-.051-2.833-.096-5.279-.096-7.342h-80.835c1.56-34.617.512-64 .512-64H256.876a9.76 9.76 0 0 0-1 .056 9.728 9.728 0 0 0-1-.056H111.945s-1.048 29.383.512 64H32V128h.161c.811 26.096 4.98 60.999 22.333 96.729 14.718 30.307 35.912 55.664 62.996 75.367 22.422 16.312 48.041 28.064 76.205 35.084C209.96 352.539 226 362.109 240 365.957v35.625C238 412.165 225.86 448 141.234 448H128v32h256v-32h-13.178C271.538 448 272 398.666 272 398.666v-32.714c14-3.843 29.73-13.374 45.91-30.644 28.369-7.004 54.072-18.801 76.633-35.213 27.082-19.703 48.262-45.06 62.98-75.367 23.68-48.761 22.803-96.005 22.34-121.386zM83.262 210.745C68.802 180.966 65.018 150.996 64.187 128h50.487c.868 8.914 1.966 17.701 3.356 25.98 8.513 50.709 20.213 95.493 42.354 135.009-33.838-17.141-60.414-43.84-77.122-78.244zm345.475 0c-16.807 34.61-43.603 61.421-77.729 78.55 22.215-39.591 33.816-84.475 42.352-135.314 1.39-8.28 2.488-17.067 3.356-25.98h51.096c-.831 22.995-4.614 52.965-19.075 82.744z"}})])])},staticRenderFns:[]}},126:function(t,e,a){"use strict";var s=a(0),n=a(110),r=a(127);e.a=Object(s.a)(n.a,r.a,!1,null,null,null).exports},127:function(t,e){"use strict";e.a={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ion",class:t.rootClass,attrs:{name:"ios-bookmarks-icon","aria-labelledby":t.iconTitle}},[a("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:t.w,height:t.h}},[a("path",{attrs:{d:"M342.9 165.4l9.1-6.4 9.1 6.4 22.9 14.5V64h-64v115.9l22.9-14.5z"}}),a("path",{attrs:{d:"M432 64h-32v146.5l-48-32-48 32V64h-22.4c-8.1 0-17.6 7.2-17.6 15v329l-8 5.5-8-5.5V79c0-7-9.2-15-17.6-15H80c-18.8 0-33 13.3-33 32v286.1c0 18.8 14.2 33.9 33 33.9h143.3c13.8 0 24.7 4.2 24.7 19.4V448h16v-12.6c0-15.3 10.9-19.4 24.7-19.4H432c18.8 0 33-15.1 33-33.9V96c0-18.7-14.2-32-33-32z"}})])])},staticRenderFns:[]}},128:function(t,e){"use strict";e.a={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.profileImg,expression:"profileImg"}],staticClass:"profile__img"}),t._v(" "),a("a",{staticClass:"thropy",attrs:{title:"See Git Award",href:"http://git-awards.com/users/search?login="+t.userData.login,target:"_blank",rel:"noopener"}},[a("TrophyIcon",{attrs:{w:"50px",h:"50px"}})],1),t._v(" "),a("div",{staticClass:"is-bookmarked",class:{"is-bookmarked--yes":t.isBookmarked},attrs:{title:"Bookmark User"},on:{click:t.bookmarkUser}},[a("IosBookmarksIcon",{attrs:{w:"50px",h:"50px"}})],1),t._v(" "),a("div",{staticClass:"profile__identity"},[a("div",{staticClass:"profile__name"},[t._v(t._s(t.userData.name))]),t._v(" "),a("small",{staticClass:"profile__login"},[t._v(t._s(t.userData.login))])]),t._v(" "),a("div",{staticClass:"profile__bio"},[t._v("\n    "+t._s(t.userData.bio)+"\n  ")])])},staticRenderFns:[]}},130:function(t,e,a){"use strict";e.a={name:"ProfilePage",components:{UserProfile:a(122).a,RepositoryList:a(111).a},computed:{showingUserData:function(){var t=this;return!(!t.userData||!t.userData.avatar_url)},showingRepoData:function(){var t=this;return!(!t.userRepositories||0>=t.userRepositories.length)},userShowing:function(){return this.$route.params.user},isBookmarkUser:function(){return this.$store.getters.isBookmarkUser},userData:function(){return this.$store.getters.userData},userRepositories:function(){return this.$store.getters.userRepositories}},activated:function(){var t=this,e=function(){t.$store.dispatch("getUserData",t.userShowing),setTimeout(function(){t.$store.dispatch("getUserRepositories",t.userShowing)},1e3)};null===t.userData?e():t.userData.login!==t.userShowing&&e()}}},141:function(t,e,a){var s=a(142);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=a(3).default;n("4aeacfe4",s,!0,{})},142:function(t,e,a){e=t.exports=a(2)(!1),e.push([t.i,"",""])},143:function(t,e){"use strict";e.a={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid__row"},[t.showingUserData?a("user-profile",{attrs:{isBookmarked:t.isBookmarkUser,userData:t.userData}}):t._e(),t._v(" "),t.showingRepoData?a("repository-list",{attrs:{repositories:t.userRepositories}}):t._e()],1)},staticRenderFns:[]}},98:function(t,e,a){"use strict";function s(){a(141)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),r=a(130),o=a(143),i=s;e.default=Object(n.a)(r.a,o.a,!1,i,"data-v-533ee72a",null).exports}});