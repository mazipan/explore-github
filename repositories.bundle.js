webpackJsonp([9],{"4LzA":function(t,n){"use strict";n.a={ADS:{client:"ca-pub-5442972248172818",slotInFeed:"2105028631",slotInArticle:"7974047383",layout:"-fg+5n+6t-e7+r"}}},IfwA:function(t,n,a){"use strict";var e=a("4LzA");n.a={name:"repositorylist",props:["repositories"],data:function(){return{layout:e.a.ADS.layout,slot:e.a.ADS.slotInFeed,client:e.a.ADS.client}}}},JI9j:function(t,n,a){"use strict";function e(){a("rBCC")}Object.defineProperty(n,"__esModule",{value:!0});var o=a("IfwA"),r=a("mp7H"),i=a("xRi5"),s=e;n.default=Object(i.a)(o.a,r.a,r.b,!1,s,"data-v-5db768a8",null).exports},JbGP:function(t,n,a){n=t.exports=a("lcwS")(!1),n.push([t.i,"\n.google-ads[data-v-5db768a8] {\n  width: 90%;\n}\n.repos[data-v-5db768a8] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  background-color: #fff;\n  border: 1px #d1d5da solid;\n  border-radius: 3px;\n  margin: 0 0 60px;\n}\n.repo .octicon[data-v-5db768a8] {\n  color: #282828;\n  top: 14px;\n  left: 12px;\n  width: 16px;\n  text-align: center;\n  vertical-align: bottom;\n}\n.repo:first-child a[data-v-5db768a8] {\n  border-top: 0;\n}\n.repo a[data-v-5db768a8] {\n  position: relative;\n  display: block;\n  padding: 14px 15px 14px 14px;\n  line-height: inherit;\n  text-align: left;\n  color: #0096d9;\n  text-decoration: none;\n  border-top: 1px solid #eaecef;\n}\n.repo__name[data-v-5db768a8] {\n  display: inline-block;\n  width: 70%;\n  line-height: 1.2;\n  vertical-align: top;\n  word-wrap: break-word;\n}\n.star[data-v-5db768a8] {\n  float: right;\n  margin-bottom: 3px;\n  margin-right: 25px;\n  font-size: 12px;\n  color: #6a737d;\n}\n",""])},mp7H:function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"b",function(){return o});var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ul",{staticClass:"repos"},t._l(t.repositories,function(n,e){return a("li",{key:n.id,staticClass:"repo"},[e>0&&e%5==0?a("div",{staticClass:"google-ads"},[a("InFeedAdsense",{attrs:{"root-class":"wrapper VueInFeedAdsense","data-ad-layout-key":t.layout,"data-ad-client":t.client,"data-ad-slot":t.slot}})],1):t._e(),t._v(" "),a("a",{attrs:{href:n.html_url,target:"_blank",rel:"noopener"}},[n.fork?a("svg",{staticClass:"octicon octicon-git-branch",attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 10 16",width:"10"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})]):t._e(),t._v(" "),n.fork?t._e():a("svg",{staticClass:"octicon octicon-repo",attrs:{version:"1.1",width:"12",height:"16",viewBox:"0 0 12 16","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"}})]),t._v(" "),a("div",{staticClass:"repo__name"},[t._v(t._s(n.name))]),t._v(" "),a("span",{staticClass:"star"},[t._v("\n        "+t._s(n.stargazers_count)+"\n        "),a("svg",{staticClass:"octicon octicon-star",attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 14 16",width:"14"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"}})])])])])}))},o=[]},rBCC:function(t,n,a){var e=a("JbGP");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("X/Wc").default;o("2396a65c",e,!0,{})}});