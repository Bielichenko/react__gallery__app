(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),s=c(7),a=c.n(s),u=(c(24),c(5)),i=c(10),o=Object(i.b)({name:"selectedPicture",initialState:{selectedPicture:null},reducers:{setSelectedPicture:function(e,t){e.selectedPicture=t.payload}}}),l=o.actions.setSelectedPicture,d=o.reducer,j=Object(i.a)({reducer:{selectedPicture:d}}),p=c(17),b=c.n(p),f=c(6),O=c(18),m=function(){return Object(u.b)()},h=u.c,x=(c(32),c(1)),P=function(e){var t=e.pictureData,c=t.user,r=t.urls,n=m(),s=function(){n(l(t))};return Object(x.jsxs)("div",{className:"pictureCard",children:[Object(x.jsx)("div",{className:"pictureCard__wrapper",onClick:function(){return s()},onKeyUp:function(){return s()},role:"button",tabIndex:0,children:Object(x.jsx)("img",{className:"pictureCard__wrapper__content",src:r.regular,alt:"img"})}),Object(x.jsx)("a",{className:"pictureCard__author",target:"_blank",href:"https://unsplash.com/@".concat(c.username),rel:"noreferrer",children:c.name})]})},g=(c(34),function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),c=t[0],s=t[1],a=Object(O.a)({accessKey:"CXSxgho7UrQo1qLwGLXpY256CmINGXQgvO1zWuLL6Xo"});return Object(r.useEffect)((function(){a.search.getPhotos({query:"parrots",page:1,perPage:30}).then((function(e){e.response&&s(e.response.results)}))}),[]),Object(x.jsx)("div",{className:"picturesCatalog",children:c.map((function(e){return Object(x.jsx)(n.a.Fragment,{children:Object(x.jsx)(P,{pictureData:e})},e.id)}))})}),_=(c(35),function(){var e=m(),t=h((function(e){return e.selectedPicture.selectedPicture})),c=function(){e(l(null))};return t?Object(x.jsxs)("div",{className:"selectedPicture",children:[Object(x.jsx)("div",{className:"selectedPicture__closeButton",onClick:function(){return c()},onKeyDown:function(){return c()},tabIndex:0,role:"button"}),Object(x.jsx)("img",{className:"selectedPicture__content",src:t.urls.regular,alt:"img"})]}):null}),v=(c(36),function(){var e=h((function(e){return e.selectedPicture.selectedPicture}));return Object(x.jsxs)("div",{className:b()("app",{"app--displayPicture":e}),children:[Object(x.jsx)(g,{}),Object(x.jsx)(_,{})]})});a.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(u.a,{store:j,children:Object(x.jsx)(v,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.2940c0d5.chunk.js.map