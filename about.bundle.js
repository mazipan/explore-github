webpackJsonp([5],{"+6m3":function(t,e,n){e=t.exports=n("lcwS")(!1),e.push([t.i,"\n.google-ads[data-v-4342694a] {\n  width: 90%;\n}\n.about[data-v-4342694a] {\n  text-align: center;\n}\n.about a[data-v-4342694a] {\n    color: #0096d9;\n    text-decoration: none;\n}\n.about .badge[data-v-4342694a] {\n    width: auto;\n    height: 20px;\n}\n.about .author[data-v-4342694a] {\n    margin-bottom: 1em;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    width: 100%;\n}\n.ion[data-v-4342694a] {\n  fill: red;\n  margin: 0 5px;\n}\n",""])},"/BEM":function(t,e,n){"use strict";var a=n("qWRk"),i=n("SSn2"),r=n("xRi5");e.a=Object(r.a)(a.a,i.a,i.b,!1,null,null,null).exports},"2uPt":function(t,e,n){"use strict";var a=n("CIT6"),i=n("wHf8"),r=n("xRi5");e.a=Object(r.a)(a.a,i.a,i.b,!1,null,null,null).exports},"4LzA":function(t,e){"use strict";e.a={ADS:{client:"ca-pub-5442972248172818",slotInFeed:"2105028631",slotInArticle:"7974047383",layout:"-fg+5n+6t-e7+r"}}},"5dOm":function(t,e,n){var a=n("+6m3");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("X/Wc").default;i("7d39a072",a,!0,{})},"8MOk":function(t,e,n){"use strict";function a(){n("5dOm")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("Ri1K"),r=n("gSuf"),o=n("xRi5"),s=a;e.default=Object(o.a)(i.a,r.a,r.b,!1,s,"data-v-4342694a",null).exports},CIT6:function(t,e){"use strict";e.a={name:"android-favorite-icon",data:function(){return{iconTitle:this.title?this.title:"Android Favorite Icon"}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"14px"},h:{type:String,default:"14px"}}}},Ri1K:function(t,e,n){"use strict";var a=n("4LzA");e.a={name:"AboutPage",components:{AndroidFavoriteIcon:n("2uPt").a,CodeIcon:n("/BEM").a},data:function(){return{slot:a.a.ADS.slotInArticle,client:a.a.ADS.client}},methods:{openSimplert:function(){this.$Simplert.open({title:"Welcome!!!",message:"Welcome to Vue-Github-Explorer",type:"success"})}}}},SSn2:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ion",class:t.rootClass,attrs:{name:"code-icon"}},[n("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:t.w,height:t.h}},[n("path",{attrs:{d:"M168 392a23.929 23.929 0 0 1-16.971-7.029l-112-112c-9.373-9.373-9.373-24.569 0-33.941l112-112c9.373-9.372 24.568-9.372 33.941 0 9.371 9.372 9.371 24.568 0 33.941L89.941 256l95.029 95.029c9.371 9.373 9.371 24.568 0 33.941A23.925 23.925 0 0 1 168 392zM344 392a23.929 23.929 0 0 0 16.971-7.029l112-112c9.373-9.373 9.373-24.569 0-33.941l-112-112c-9.373-9.372-24.568-9.372-33.941 0-9.371 9.372-9.371 24.568 0 33.941L422.059 256l-95.029 95.029c-9.371 9.373-9.371 24.568 0 33.941A23.925 23.925 0 0 0 344 392z"}})])])},i=[]},gSuf:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid__row about"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"assets/images/github-explorer-blue.png",expression:"'assets/images/github-explorer-blue.png'"}],attrs:{alt:"Vue Github Explorer"},on:{click:t.openSimplert}}),t._v(" "),n("h1",[t._v("Vue Github Explorer")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"author"},[n("CodeIcon"),t._v("\n        with\n        "),n("AndroidFavoriteIcon"),t._v("\n        by \n        "),n("a",{attrs:{href:"https://github.com/mazipan",target:"_blank",rel:"noopener"}},[t._v("\n            Irfan Maulana\n        ")])],1),t._v(" "),n("div",{staticClass:"author"},[t._v("\n    Copyright © 2017\n  ")]),t._v(" "),n("div",{staticClass:"google-ads"},[n("InArticleAdsense",{attrs:{"root-class":"wrapper VueInArticleAdsense","data-ad-client":t.client,"data-ad-slot":t.slot}})],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[t._v("See Source Code :\n    "),n("a",{attrs:{href:"https://github.com/mazipan/explore-github",target:"_blank",rel:"noopener"}},[t._v("\n      https://github.com/mazipan/explore-github\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[t._v("API by Github API v3 :\n    "),n("a",{attrs:{href:"https://developer.github.com/v3/",target:"_blank",rel:"noopener"}},[t._v("\n      https://developer.github.com/v3/\n    ")])])}]},qWRk:function(t,e){"use strict";e.a={name:"code-icon",data:function(){return{iconTitle:this.title?this.title:"Code Icon"}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"14px"},h:{type:String,default:"14px"}}}},wHf8:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ion",class:t.rootClass,attrs:{name:"android-favorite-icon"}},[n("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:t.w,height:t.h}},[n("path",{attrs:{d:"M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"}})])])},i=[]}});