(this["webpackJsonpnyt-search-board"]=this["webpackJsonpnyt-search-board"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(13),s=c.n(r),i=c(6),l=c(31),o=c(9),u=c(21),j=c(14),d=c.n(j),b=c(7),h={articleList:[],page:-1,searchClicked:!1,pageClicked:!1};var p=Object(o.a)({article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_STORE":return h;case"SET_ARTICLE_LIST":return Object(b.a)(Object(b.a)({},e),{},{articleList:t.payload});case"SET_NEXT_PAGE":return Object(b.a)(Object(b.a)({},e),{},{page:e.page+1,pageClicked:!0});case"SET_PREV_PAGE":var c=e.page-1>0?e.page-1:0;return Object(b.a)(Object(b.a)({},e),{},{page:c,pageClicked:!0});case"SEARCH_CLICKED":return Object(b.a)(Object(b.a)({},e),{},{searchClicked:!0});case"RESET_SEARCH_CLICKED":return Object(b.a)(Object(b.a)({},e),{},{searchClicked:!1});case"RESET_PAGINATION_CLICKED":return Object(b.a)(Object(b.a)({},e),{},{pageClicked:!1});default:return e}}}),O=function(e,t){return"RESET_STORE"===t.type?(d.a.removeItem("persist:root"),p(void 0,t)):p(e,t)},f={key:"root",storage:d.a},x=Object(u.a)(f,O),v=(c(46),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))}),g=c(10),m=c(2),E=(c(47),c(0)),C=function(e){var t=e.description;return Object(E.jsx)("div",{className:"description",children:t})},S=c(32),_=(c(51),function(e){var t=e.name,c=e.webURL,n=e.handleAction;return Object(E.jsxs)("a",{href:c,className:"article-action article-action-".concat(t),onClick:n,children:[" ",t," "]})});_.defaultProps={webLink:"",handleAction:S.noop};var y=_,N=(c(52),function(){return Object(E.jsx)("header",{children:Object(E.jsx)("div",{className:"banner",children:"\u201cThe New York Times\u201d article search application"})})}),T=function(){return Object(E.jsxs)("section",{children:[Object(E.jsx)(N,{}),Object(E.jsx)("div",{className:"page-body-wrapper",children:Object(E.jsx)("div",{className:"page-body",children:Object(E.jsxs)("div",{className:"article-error",children:[Object(E.jsx)(y,{name:"< Go to results page",webURL:"NYT-search-board/"}),Object(E.jsx)(C,{description:"Invalid URL please go back to the Results Page"})]})})})]})},k=(c(53),function(){return Object(E.jsx)(T,{})}),I=(c(17),c(54),function(){return Object(E.jsx)(k,{})}),w=c(8),R=function(e){var t=new Date(e);return[t.getDate(),t.getMonth()+1,t.getFullYear()].join(".")},L=(c(55),function(e){var t=e.headline,c=e.isSmall;return Object(E.jsx)("h3",{className:"title".concat(c?"-small":""),children:t})});L.defaultProps={isSmall:!1};var A=L,P=(c(56),function(e){var t=e.subtitle;return Object(E.jsx)("div",{className:"subtitle",children:t})}),D=(c(57),function(e){var t=e.headline,c=e.date;return Object(E.jsxs)("div",{className:"article-header-wrapper",children:[Object(E.jsx)(y,{name:"< Go to results page",webURL:"/NYT-search-board/"}),Object(E.jsxs)("div",{className:"article-header",children:[Object(E.jsx)(A,{headline:t}),Object(E.jsx)(P,{subtitle:R(c)})]})]})}),G=(c(58),function(e){var t=e.description,c=e.webURL;return Object(E.jsxs)("div",{className:"article-body",children:[Object(E.jsx)(C,{description:t}),Object(E.jsx)(y,{name:"Read the full article",webURL:c})]})}),U=function(e){var t=e.article;return Object(E.jsxs)("section",{children:[Object(E.jsx)(N,{}),Object(E.jsx)("div",{className:"page-body-wrapper",children:Object(E.jsxs)("div",{className:"page-body",children:[Object(E.jsx)(D,{headline:t.headline,date:t.pub_date}),Object(E.jsx)(G,{description:t.abstract,webURL:t.web_url})]})})]})},K=(c(59),function(e){var t=e.article;return Object(E.jsx)(U,{article:t})}),F=(c(60),{id:"",headline:"",abstract:"",keywords:[],section:"",snippet:"",pub_date:"",source:"",web_url:""}),H=Object(i.b)((function(e){return{articles:e.article.articleList}}))((function(e){var t=e.articles,c=Object(m.g)().id,a=Object(m.f)(),r=Object(n.useState)(F),s=Object(w.a)(r,2),i=s[0],l=s[1];return Object(n.useEffect)((function(){""===i.headline&&+c>=0&&+c<=t.length&&l(t[c]),(+c<0||+c>t.length)&&a("/article/error")}),[t,i,c,a]),Object(E.jsx)(K,{article:i})})),Y=c(19),W=c.n(Y),B=c(33),X=(c(62),function(){return Object(E.jsx)("div",{className:"loder",children:Object(E.jsxs)("div",{className:"lds-ellipsis",children:[Object(E.jsx)("div",{}),Object(E.jsx)("div",{}),Object(E.jsx)("div",{}),Object(E.jsx)("div",{})]})})}),q=(c(63),Object(i.b)(null,(function(e){return{searchClicked:function(){return e({type:"SEARCH_CLICKED"})}}}))((function(e){var t=e.searchClicked;return Object(E.jsx)("button",{type:"submit",className:"search-button",onClick:t,children:Object(E.jsx)("i",{className:"fas fa-search"})})}))),z=(c(64),function(e){var t=e.input,c=e.handleSearch;return Object(E.jsx)("input",{type:"text",className:"search-term",placeholder:"What are you looking for?",onChange:c,value:t})}),J=(c(65),function(e){var t=e.searchInput,c=e.handleSearch;return Object(E.jsxs)("div",{className:"search-wrapper",children:[Object(E.jsx)("h2",{children:"Type search query term in here: "}),Object(E.jsxs)("div",{className:"search",children:[Object(E.jsx)(z,{input:t,handleSearch:c}),Object(E.jsx)(q,{})]})]})}),M=function(e){var t=e.searchInput,c=e.handleSearch;return Object(E.jsx)("div",{className:"header-wrapper",children:Object(E.jsx)(J,{searchInput:t,handleSearch:c})})},Q=(c(66),function(e){var t=e.headline;return Object(E.jsx)("div",{className:"card-header",children:Object(E.jsx)(A,{headline:t,isSmall:!0})})}),V=(c(67),Object(i.b)(null,(function(e){return{handleCardClick:function(t){return e({type:"SET_ARTICLE_SHOWN",payload:t})}}}))((function(e){var t=e.headline,c=e.index,n=e.handleCardClick;return Object(E.jsx)(g.b,{to:"/article/".concat(c),style:{textDecoration:"none"},children:Object(E.jsx)("div",{className:"card-wrapper",onClick:function(){n(c)},children:Object(E.jsx)(Q,{headline:t})})})}))),Z=(c(68),function(e){var t=e.articles,c=t.length>0;return Object(E.jsxs)("div",{className:"articles-list",children:[Object(E.jsx)("h2",{children:"Results:"}),t.map((function(e,t){return Object(E.jsx)(V,{headline:e.headline,index:t},"".concat(e.id,"-index-").concat(t))})),!c&&Object(E.jsxs)("div",{className:"empty-list",children:[Object(E.jsx)("h3",{children:"No results."}),Object(E.jsx)("span",{children:"Search again or try removing filters."})]})]})}),$=(c(69),Object(i.b)(null,(function(e){return{prevPage:function(){return e({type:"SET_PREV_PAGE"})},nextPage:function(){return e({type:"SET_NEXT_PAGE"})}}}))((function(e){var t=e.prevPage,c=e.nextPage;return Object(E.jsxs)("div",{className:"pagination",children:[Object(E.jsx)(y,{name:"< Prev page",handleAction:t}),Object(E.jsx)(y,{name:"Next page >",handleAction:c})]})}))),ee=function(e){var t=e.searchInput,c=e.handleSearch,n=e.articles;return Object(E.jsxs)("section",{children:[Object(E.jsx)(N,{}),Object(E.jsx)("div",{className:"page-body-wrapper",children:Object(E.jsxs)("div",{className:"page-body",children:[Object(E.jsx)(M,{searchInput:t,handleSearch:c}),Object(E.jsx)(Z,{articles:n}),Object(E.jsx)($,{})]})})]})},te=(c(70),function(e){var t=e.searchInput,c=e.handleSearch,n=e.articles;return Object(E.jsx)(ee,{searchInput:t,handleSearch:c,articles:n})}),ce=c(20),ne=c.n(ce),ae="QtNaU4Z8fQz1SvUWHWI9jmC5nbA0f5zB",re=(c(89),Object(i.b)((function(e){return{articles:e.article.articleList,page:e.article.page,searchClicked:e.article.searchClicked,pageClicked:e.article.pageClicked}}))((function(e){var t=e.articles,c=e.page,a=e.searchClicked,r=e.pageClicked,s=Object(i.c)(),l=Object(n.useState)(""),o=Object(w.a)(l,2),u=o[0],j=o[1],d=Object(n.useState)(c),b=Object(w.a)(d,2),h=b[0],p=b[1],O=function(){var e=Object(B.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"RESET_STORE"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){-1===c&&s({type:"SET_NEXT_PAGE"}),-1!==c&&function(e){return ne.a.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?page=".concat(e,"&api-key=").concat(ae)).then((function(e){return e.data.response.docs.reduce((function(e,t){return e.push({id:t._id,abstract:t.abstract,headline:t.headline.main,keywords:t.keywords,section:t.section_name,snippet:t.snippet,pub_date:t.pub_date,source:t.source,web_url:t.web_url}),e}),[])})).catch((function(e){return e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)),[]}))}(c).then((function(e){p(c),s({type:"SET_ARTICLE_LIST",payload:e}),s({type:"RESET_PAGINATION_CLICKED"})})).catch((function(e){return console.log(e)}))},x=function(){var e;(e=u,ne.a.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=".concat(e,"&api-key=").concat(ae)).then((function(e){return e.data.response.docs.reduce((function(e,t){return e.push({abstract:t.abstract,headline:t.headline.main,keywords:t.keywords,section:t.section_name,snippet:t.snippet,pub_date:t.pub_date,source:t.source,web_url:t.web_url}),e}),[])})).catch((function(e){return e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)),[]}))).then((function(e){s({type:"SET_ARTICLE_LIST",payload:e}),s({type:"RESET_SEARCH_CLICKED"}),s({type:"RESET_PAGINATION_CLICKED"})})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){0==t.length&&O()}),[]),Object(n.useEffect)((function(){(h!==c||-1===c||r)&&f()}),[c,h,r]),Object(n.useEffect)((function(){a&&x()}),[u,a]),Object(E.jsx)(E.Fragment,{children:0==t.length||r?Object(E.jsx)(X,{}):Object(E.jsx)(te,{handleSearch:function(e){var t=e.target.value;j(t)},searchInput:u,articles:t})})}))),se=function(){return Object(E.jsx)(g.a,{basename:"/NYT-search-board",children:Object(E.jsxs)(m.c,{children:[Object(E.jsx)(m.a,{path:"/",element:Object(E.jsx)(re,{})}),Object(E.jsx)(m.a,{path:"/article/:id",element:Object(E.jsx)(H,{})}),Object(E.jsx)(m.a,{path:"/article/error",element:Object(E.jsx)(I,{})})]})})},ie=function(){var e=Object(o.b)(x);return{store:e,persistor:Object(u.b)(e)}}(),le=ie.store,oe=ie.persistor;s.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(l.a,{loading:null,persistor:oe,children:Object(E.jsx)(i.a,{store:le,children:Object(E.jsx)(se,{})})})}),document.getElementById("root")),v()}},[[90,1,2]]]);
//# sourceMappingURL=main.2e41329f.chunk.js.map