"use strict";(self.webpackChunktwl=self.webpackChunktwl||[]).push([[210],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2280:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={id:"spark-intro-01",title:"Spark\ub780",sidebar_position:1},c=void 0,s={unversionedId:"Data Engineering/Spark/spark-intro-01",id:"Data Engineering/Spark/spark-intro-01",isDocsHomePage:!1,title:"Spark\ub780",description:"spark-arch",source:"@site/docs/Data Engineering/Spark/intro.md",sourceDirName:"Data Engineering/Spark",slug:"/Data Engineering/Spark/spark-intro-01",permalink:"/Data Engineering/Spark/spark-intro-01",editUrl:"https://github.com/wookiist/twl/edit/documentation/docs/Data Engineering/Spark/intro.md",tags:[],version:"current",lastUpdatedAt:1636790314,formattedLastUpdatedAt:"11/13/2021",sidebarPosition:1,frontMatter:{id:"spark-intro-01",title:"Spark\ub780",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CH5 - \ube45\ub370\uc774\ud130\uc758 \ud30c\uc774\ud504\ub77c\uc778",permalink:"/Data Engineering/Introduction/de-intro-5"},next:{title:"Spark Reference",permalink:"/Data Engineering/Spark/spark-reference"}},u=[],l={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://getto215.github.io/assets/img/2018-05-24-spark-Internals-of-job-execution-in-spark.jpg",alt:"spark-arch"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJPO7Q%2FbtqIhYGHU4K%2F70ZblAQys8BkEh7eLEqR40%2Fimg.png",alt:"spark-arch2"}),"\n(",(0,o.kt)("a",{parentName:"p",href:"https://artist-developer.tistory.com/8"},"https://artist-developer.tistory.com/8"),")"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"spark-submit"),"\uc744 \uc2e4\ud589\ud558\uba74, driver\ub97c \uc0dd\uc131\ud558\uac8c \ub41c\ub2e4. driver\ub294 executor\uc758 \uc2e4\ud589, \ubc30\ud3ec \ub4f1\uc758 \uad00\ub9ac \uc5ed\ud560\uc744 \ub2f4\ub2f9\ud55c\ub2e4. \uc0ac\uc6a9\uc790\uac00 \uad6c\uc131\ud55c \ud504\ub85c\uadf8\ub7a8(Job)\uc744 Task \ub2e8\uc704\ub85c \ubcc0\ud658\ud574\uc11c Executor\ub85c \uc804\ub2ec\ud55c\ub2e4.\nSpark Submit\uc744 \ud558\uba74 Cluster Manager\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\uc131\ud55c JAR \ud30c\uc77c \ub4f1\uc744 \ubc1b\uac8c \ub418\ub294\ub370, \uc774 \ub54c, on K8S, on Yarn, on Mesos \ub4f1\uc5d0 \ub530\ub77c \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc2e4\uc81c\ub85c \uc774\ub7ec\ud55c \ud30c\uc77c\uc744 \ubc1b\uc544 \ucc98\ub9ac\ud558\uac8c \ub420\uc9c0\uac00 \ub2ec\ub77c\uc9c4\ub2e4. on Yarn\uc758 \uacbd\uc6b0, Resource Manager\uac00 \uc774\ub97c \uc2a4\ucf00\uc904\ub9c1\ud558\uc5ec, Node Manager\uc5d0 \ubfcc\ub9ac\uac8c \ub418\uba70, Node Manager\uac00 \uc788\ub294 Node\uc5d0\uc120 Executor\ub97c \ub9cc\ub4e4\uc5b4 \uc2e4\uc81c \ud574\ub2f9 Job \uc744 \uc218\ud589\ud55c\ub2e4."))}f.isMDXComponent=!0}}]);