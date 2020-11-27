(this["webpackJsonpshowwcase-challenge"]=this["webpackJsonpshowwcase-challenge"]||[]).push([[0],{68:function(n,e,t){},71:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(2),i=t.n(a),c=t(26),o=t.n(c),s=t(16),l=t(5),d=t(3),u=t(4);function b(){var n=Object(d.a)(["\n  border-radius: 4px;\n  background: ",";\n  white-space: nowrap;\n  padding: ",";\n  margin-top: 20px;\n  color: #fff;\n  font-size: ",";\n  outline: none;\n  border: none;\n  cursor: pointer;\n\n  &:hover {\n    transition: all 0.3s ease-out;\n    background: #fff;\n    background: ",";\n  }\n\n  @media screen and (max-width: 960px) {\n    width: 100%;\n  }\n"]);return b=function(){return n},n}function j(){var n=Object(d.a)(["\n  z-index: 1;\n  width: 100%;\n  max-width: 1300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (max-width: 991px) {\n    padding-right: 30px;\n    padding-left: 30px;\n  }\n"]);return j=function(){return n},n}function f(){var n=Object(d.a)(["\n*{\n    box-sizing:border-box;\n    margin:0;\n    padding:0;\n    font-family: 'Source Sans Pro', sans-serif\n}\n"]);return f=function(){return n},n}var m=Object(u.a)(f()),p=(u.b.div(j()),u.b.button(b(),(function(n){return n.primary?"#101522":"#0467FB"}),(function(n){return n.big?"12px 64px":"10px 20px"}),(function(n){return n.fontBig?"20px":"16px"}),(function(n){return n.primary?"#314c75":"#101522"}))),x=m,h=t(7),O=t(8),g=t(20),v=t(11),y=t(12),S=t.n(y),w=t.p+"static/media/undraw_Memory_storage_reh0.9e02b871.svg";function k(){var n=Object(d.a)(["\n  padding: 10px 50px;\n\n  border-radius: 2px;\n  margin-right: 10px;\n  outline: none;\n  border: none;\n  font-size: 16px;\n  border: 1px solid #06194b;\n\n  &::placeholder {\n    color: #242424;\n    margin-right: 60px;\n  }\n\n  @media screen and (max-width: 820px) {\n    width: 100%;\n    margin: 0 0 16px 0;\n  }\n"]);return k=function(){return n},n}function N(){var n=Object(d.a)(["\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  color: #fff;\n  background-color: #8bc34a;\n  border-color: #cddc39;\n  display: ",";\n"]);return N=function(){return n},n}function Y(){var n=Object(d.a)(["\n  position: relative;\n  /* padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; */\n  color: #721c24;\n  /* background-color: rgb(237 104 95 / 73%);\n  border-color: #f5c6cb; */\n"]);return Y=function(){return n},n}function C(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n    width: 80%;\n  } ;\n"]);return C=function(){return n},n}function z(){var n=Object(d.a)(["\n  margin-bottom: 24px;\n  font-size: 20px;\n"]);return z=function(){return n},n}function E(){var n=Object(d.a)(['\n  font-family: "Trebuchet Ms", "Lucida Sans Unicode", "Lucida Grande",\n    "Lucida Sans", Arial, sans-serif;\n  margin-bottom: 24px;\n  font-size: 24px;\n']);return E=function(){return n},n}function M(){var n=Object(d.a)(["\n  padding-right: 0;\n  border: 0;\n  max-width: 100%;\n  vertical-align: middle;\n  display: inline-block;\n  max-height: 150px;\n"]);return M=function(){return n},n}function F(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 24px;\n  padding: 24px;\n  color: #fff;\n"]);return F=function(){return n},n}function B(){var n=Object(d.a)(["\n  background-color: #4b59f7;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return B=function(){return n},n}function _(){var n=Object(d.a)(["\n  color: #fff;\n  min-height: 100vh;\n  padding: 160px 0;\n  background-color: #4b59f7;\n"]);return _=function(){return n},n}u.b.div(_());var q=u.b.div(B()),P=u.b.section(F()),A=u.b.img(M()),L=u.b.p(E()),D=u.b.p(z()),G=u.b.form(C()),T=u.b.p(Y()),W=u.b.p(N(),(function(n){return n.active?"block":"none"})),H=u.b.input(k()),J=function(n){var e=Object(a.useState)({username:""}),t=Object(v.a)(e,2),i=t[0],c=t[1],o=Object(a.useState)({errors:""}),s=Object(v.a)(o,2),l=s[0],d=s[1],u={username:S.a.string().required().label("Name")};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(q,{children:Object(r.jsxs)(P,{children:[Object(r.jsx)(A,{src:w}),Object(r.jsx)(L,{children:"Hi there! Welcome to your education showcase"}),Object(r.jsx)(D,{children:"Type your name and click 'Enter' below to begin"}),Object(r.jsxs)(G,{onSubmit:function(e){e.preventDefault();var t=function(){var n=S.a.validate(i,u,{abortEarly:!1}).error,e={};if(!n)return null;var t,r=Object(g.a)(n.details);try{for(r.s();!(t=r.n()).done;){var a=t.value;e[a.path[0]]=a.message}}catch(c){r.e(c)}finally{r.f()}return e}();d(Object(h.a)(Object(h.a)({},t),{},Object(O.a)({},t,t||{}))),t||n.history.replace("/Main/".concat(i.username))},children:[l.username&&Object(r.jsx)(T,{children:l.username}),Object(r.jsx)(H,{name:"username",type:"text",placeholder:"Your Name",value:i.username,onChange:function(n){n.persist();var e=n.target,t=e.name,r=e.value,a=function(n){var e=n.name,t=n.value,r=Object(O.a)({},e,t),a=Object(O.a)({},e,u[e]),i=S.a.validate(r,a);return i?i.message:null}(n.target);a?l[t]=a:delete l[t],c((function(n){return Object(h.a)(Object(h.a)({},n),{},Object(O.a)({},t,r))})),d(Object(h.a)(Object(h.a)({},l),{},Object(O.a)({},l,a)))}}),Object(r.jsx)(p,{big:!0,fontBig:!0,primary:!0,children:"Enter"})]})]})})})},R=function(n){return Object(r.jsx)(J,Object(h.a)({},n))},U=t(38),V=t.n(U),I=t(27),K=t.n(I),Q=t(15),X=t(0);t(68);K.a.setAppElement("#root");var Z=function(n){var e=n.values,t=n.handleAutoComplete,i=n.serverMsg,c=n.errors,o=n.handleChange,l=n.handleSubmit,d=n.isOpen,u=n.toggleModal,b=!1,j=Object(a.useState)(""),f=Object(v.a)(j,2),m=f[0],p=f[1],x=Object(a.useState)([]),h=Object(v.a)(x,2),O=h[0],g=h[1];return""!==i&&(b=!0),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(X.b.Provider,{value:{color:"#101522"},children:Object(r.jsxs)(K.a,{isOpen:d,onRequestClose:u,contentLabel:"My dialog",className:"mymodal",overlayClassName:"myoverlay",closeTimeoutMS:500,children:[Object(r.jsx)("div",{className:"form-content-right",children:Object(r.jsxs)("form",{className:"form",onSubmit:l,children:[Object(r.jsx)(W,{active:b,children:i}),Object(r.jsx)("h1",{children:"Create your educational profile with Showwcase! start by filling out the information below."}),Object(r.jsx)("div",{className:"form-inputs",children:Object(r.jsx)(V.a,{suggestions:O,onSuggestionsFetchRequested:function(n){var e=n.value;p(e),fetch("http://universities.hipolabs.com/search?name=".concat(e)).then((function(n){return n.json()})).then((function(n){return g(n)}))},onSuggestionsClearRequested:function(){return g([])},onSuggestionSelected:function(n,e){var t=e.suggestionValue;return console.log(t)},getSuggestionValue:function(n){return n.name},renderSuggestion:function(n){return Object(r.jsx)("span",{children:n.name})},inputProps:{placeholder:"Search University",value:m,onChange:function(n,e){var r=e.newValue;p(r),t(r)}},highlightFirstSuggestion:!0})}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"degree",className:"form-label",children:"Degree"}),Object(r.jsxs)("select",{id:"degree",name:"degree",value:e.degree,onChange:o,className:"form-input",children:[Object(r.jsx)("option",{children:"Select Select"}),Object(r.jsx)("option",{value:"B.Sc",children:"B.Sc"}),Object(r.jsx)("option",{value:"M.Sc",children:"M.Sc"}),Object(r.jsx)("option",{value:"M.Ba",children:"M.Ba"}),Object(r.jsx)("option",{value:"Phd",children:"Phd"})]}),c.degree&&Object(r.jsx)(T,{children:c.degree})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"fieldOfStudy",className:"form-label",children:"Field of Study"}),Object(r.jsx)("input",{id:"fieldOfStudy",type:"text",name:"fieldOfStudy",value:e.fieldOfStudy,onChange:o,className:"form-input",placeholder:"Enter your Field of Study"}),c.fieldOfStudy&&Object(r.jsx)(T,{children:c.fieldOfStudy})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"startYear",className:"form-label",children:"Start Year"}),Object(r.jsx)("input",{id:"startYear",type:"date",name:"startYear",value:e.startYear,onChange:o,className:"form-input",placeholder:"Enter Start Year"}),c.startYear&&Object(r.jsx)(T,{children:c.startYear})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"endYear",className:"form-label",children:"End Year"}),Object(r.jsx)("input",{id:"endYear",type:"date",name:"endYear",value:e.endYear,onChange:o,className:"form-input",placeholder:"Enter End Year"}),c.endYear&&Object(r.jsx)(T,{children:c.endYear})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"grade",className:"form-label",children:"Grade"}),Object(r.jsx)("input",{id:"grade",type:"text",name:"grade",value:e.grade,onChange:o,className:"form-input",placeholder:"Enter End Grade"}),c.grade&&Object(r.jsx)(T,{children:c.grade})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(r.jsx)("input",{id:"description",type:"text",name:"description",value:e.description,onChange:o,className:"form-input",placeholder:"Brief description on Project"}),c.description&&Object(r.jsx)(T,{children:c.description})]}),Object(r.jsx)("button",{className:"form-input-btn",children:"Submit"})]})}),Object(r.jsx)(s.b,{to:"#",onClick:u,className:"closeModal",children:Object(r.jsx)(Q.e,{})})]})})})},$=t(39),nn=t.n($),en=[];function tn(n){var e=en.filter((function(e){return e.user===n}));return nn.a.reverse(e)}function rn(){var n=Object(d.a)(["\n  border-radius: 4px;\n  background: ",";\n  white-space: nowrap;\n  padding: ",";\n  margin-top: 20px;\n  color: #fff;\n  font-size: ",";\n  outline: none;\n  border: none;\n  cursor: pointer;\n\n  &:hover {\n    transition: all 0.3s ease-out;\n    background: #fff;\n    background: ",";\n  }\n\n  @media screen and (max-width: 960px) {\n    width: 100%;\n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(d.a)(["\n  position: absolute;\n  top: 50%;\n  left: 35%;\n  padding-right: 0;\n  border: 0;\n  max-width: 100%;\n  vertical-align: middle;\n  display: inline-block;\n  max-height: 150px;\n\n  @media screen and (max-width: 960px) {\n    top: 60%;\n    left: 4%;\n  }\n"]);return an=function(){return n},n}function cn(){var n=Object(d.a)(["\n  position: absolute;\n  top: 30%;\n  text-align: center;\n  color: #4b59f7;\n  font-size: 2rem;\n  padding: 1rem 0;\n  @media screen and (max-width: 960px) {\n    top: 20%;\n    font-size: 1.5rem;\n  }\n"]);return cn=function(){return n},n}function on(){var n=Object(d.a)(["\n  position: relative;\n  display: flex;\n  background: #060b26;\n  width: 55%;\n  margin: auto;\n  min-height: 75vh;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return on=function(){return n},n}function sn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 16px;\n  text-align: left;\n  box-sizing: border-box;\n  color: #fff;\n  list-style: none;\n  font-size: 1.2rem;\n\n  @media screen and (max-width: 420px) {\n    margin: 0;\n    padding: 10px;\n    width: 100%;\n  }\n"]);return sn=function(){return n},n}function ln(){var n=Object(d.a)(["\n  margin-top: 4px;\n  margin-bottom: 5px;\n  font-size: 1.2rem;\n"]);return ln=function(){return n},n}function dn(){var n=Object(d.a)(["\n  margin-top: 4px;\n  margin-bottom: 5px;\n  font-size: 1.8rem;\n"]);return dn=function(){return n},n}function un(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  } ;\n"]);return un=function(){return n},n}function bn(){var n=Object(d.a)(["\n  background: #060b26;\n  width: 80%;\n  min-height: 90vh;\n  color: #fff;\n  border-radius: 4px;\n  margin-top: 20px;\n  margin-left: 60px;\n  padding: 0 20px;\n  border: 3px solid #4b59f7;\n  @media screen and (max-width: 960px) {\n    width: 100%;\n    margin-left: 1px;\n  }\n"]);return bn=function(){return n},n}function jn(){var n=Object(d.a)(['\n  font-family: "Trebuchet Ms", "Lucida Sans Unicode", "Lucida Grande",\n    "Lucida Sans", Arial, sans-serif;\n  margin-bottom: 24px;\n  font-size: 24px;\n']);return jn=function(){return n},n}function fn(){var n=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 120px;\n  margin-bottom: 24px;\n  padding: 24px;\n  color: #101522;\n  position: absolute;\n  top: 90px;\n\n  @media screen and (max-width: 960px) {\n    margin-left: 4px;\n  }\n"]);return fn=function(){return n},n}function mn(){var n=Object(d.a)(["\n  display: flex;\n  background-color: #ffffff;\n  min-height: 90vh;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n"]);return mn=function(){return n},n}function pn(){var n=Object(d.a)(["\n  margin-left: 16px;\n"]);return pn=function(){return n},n}function xn(){var n=Object(d.a)(["\n  text-decoration: none;\n  color: #f5f5f5;\n  font-size: 18px;\n  width: 95%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  border-radius: 4px;\n\n  &:hover {\n    background-color: #1a83ff;\n  }\n"]);return xn=function(){return n},n}function hn(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  padding: 8px 0px 8px 16px;\n  list-style: none;\n  height: 60px;\n"]);return hn=function(){return n},n}function On(){var n=Object(d.a)(['\n  display: flex;\n  color: #fff;\n  text-decoration: none;\n  margin-left: 2rem;\n  font-size: 2rem;\n  font-family: "Josefin Sans", sans-serif;\n  background: none;\n']);return On=function(){return n},n}function gn(){var n=Object(d.a)(["\n  background-color: #060b26;\n  width: 100%;\n  height: 80px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n"]);return gn=function(){return n},n}function vn(){var n=Object(d.a)(["\n  width: 100%;\n"]);return vn=function(){return n},n}function yn(){var n=Object(d.a)(["\n  background-color: #060b26;\n  width: 250px;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: ",";\n  transition: ",";\n  z-index: 1;\n  @media screen and (max-width: 960px) {\n    display: ",";\n  }\n"]);return yn=function(){return n},n}function Sn(){var n=Object(d.a)(["\n  margin-left: 2rem;\n  font-size: 2rem;\n  background: none;\n"]);return Sn=function(){return n},n}function wn(){var n=Object(d.a)(["\n  background-color: #060b26;\n  height: 80px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n"]);return wn=function(){return n},n}var kn=u.b.div(wn()),Nn=Object(u.b)(s.b)(Sn()),Yn=u.b.nav(yn(),(function(n){return n.active?"-100%":0}),(function(n){return n.active?"850ms":"350ms"}),(function(n){return n.click?"none":"block"})),Cn=u.b.ul(vn()),zn=u.b.li(gn()),En=Object(u.b)(s.b)(On()),Mn=u.b.li(hn()),Fn=Object(u.b)(s.b)(xn()),Bn=u.b.span(pn()),_n=u.b.div(mn()),qn=u.b.section(fn()),Pn=u.b.p(jn()),An=u.b.div(bn()),Ln=u.b.div(un()),Dn=u.b.h2(dn()),Gn=u.b.h4(ln()),Tn=u.b.ul(sn()),Wn=u.b.div(on()),Hn=u.b.p(cn()),Jn=u.b.img(an()),Rn=u.b.button(rn(),(function(n){return n.primary?"#101522":"#0467FB"}),(function(n){return n.big?"12px 64px":"10px 20px"}),(function(n){return n.fontBig?"20px":"16px"}),(function(n){return n.primary?"#4b59f7":"#101522"})),Un=t.p+"static/media/undraw_No_data_re_kwbl.ffdad94d.svg",Vn=function(n){var e,t;console.log(n);var i=n.data,c=n.user,o=Object(a.useState)(!1),s=Object(v.a)(o,2),l=s[0],d=s[1],u=Object(a.useState)(!1),b=Object(v.a)(u,2),j=b[0],f=b[1],m=Object(a.useState)({degree:"",fieldOfStudy:"",startYear:"",endYear:"",grade:"",description:""}),p=Object(v.a)(m,2),x=p[0],y=p[1],w=Object(a.useState)(""),k=Object(v.a)(w,2),N=k[0],Y=k[1],C=Object(a.useState)({errors:""}),z=Object(v.a)(C,2),E=z[0],M=z[1],F=Object(a.useState)(""),B=Object(v.a)(F,2),_=B[0],q=B[1],P={degree:S.a.string().required().label("Degree"),fieldOfStudy:S.a.string().required().label("Field of Study"),startYear:S.a.string().required().label("Start Year"),endYear:S.a.string().required().label("End Year"),grade:S.a.string().required().label("Grade"),description:S.a.string().required().label("Description")},A=function(){var n=S.a.validate(x,P,{abortEarly:!1}).error,e={};if(!n)return null;var t,r=Object(g.a)(n.details);try{for(r.s();!(t=r.n()).done;){var a=t.value;e[a.path[0]]=a.message}}catch(i){r.e(i)}finally{r.f()}return e},L=function(n){return tn(n)},D=function(){f(!j),y({degree:"",fieldOfStudy:"",startYear:"",endYear:"",grade:"",description:""}),q("")},G=function(){d(!l)};switch(i.path){case"/Main/:name/:education":e=function(n){return en.filter((function(e){return e.school===n}))}(i.params.education),t=L(i.params.name);break;case"/Main/:name":e=t=L(i.params.name)}return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(X.b.Provider,{value:{color:"#fff"},children:[Object(r.jsx)(kn,{children:Object(r.jsx)(Nn,{to:"#",onClick:G,children:Object(r.jsx)(Q.a,{onClick:G})})}),t.length>0?Object(r.jsx)(Yn,{active:l,click:l,children:Object(r.jsxs)(Cn,{onClick:G,children:[Object(r.jsx)(zn,{children:Object(r.jsx)(En,{to:"#",children:"SHOWCASE"})}),Object(r.jsxs)(Cn,{children:[t.map((function(n,e){return Object(r.jsx)(Mn,{children:Object(r.jsxs)(Fn,{to:"/Main/".concat(c.name,"/").concat(n.school),children:[Object(r.jsx)(Q.c,{}),Object(r.jsx)(Bn,{children:n.school})]})})})),Object(r.jsx)(Mn,{children:Object(r.jsxs)(Fn,{to:"/",children:[Object(r.jsx)(Q.d,{}),Object(r.jsx)(Bn,{children:"Exit"})]})})]})]})}):Object(r.jsx)(Yn,{active:!l,click:!l,children:Object(r.jsxs)(Cn,{onClick:G,active:!0,children:[Object(r.jsx)(zn,{children:Object(r.jsx)(En,{to:"#",children:"SHOWCASE"})}),Object(r.jsx)(Cn,{children:Object(r.jsx)(Mn,{children:Object(r.jsxs)(Fn,{to:"/",children:[Object(r.jsx)(Q.d,{}),Object(r.jsx)(Bn,{children:"Exit"})]})})})]})}),Object(r.jsx)(_n,{children:Object(r.jsxs)(qn,{children:[Object(r.jsxs)(Pn,{children:["Welcome to ","".concat(c.name,"'s")," education page"]}),Object(r.jsx)(Rn,{big:!0,fontBig:!0,primary:!0,onClick:D,children:"Add New Education"}),Object(r.jsx)(An,{children:e.length>0?e.map((function(n,e){return Object(r.jsxs)(Ln,{children:[Object(r.jsx)(Dn,{children:n.school}),Object(r.jsx)(Gn,{children:"".concat(n.startYear," - ").concat(n.endYear)}),Object(r.jsxs)(Tn,{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)(Q.b,{size:15})," ","".concat(n.degree," in ").concat(n.fieldOfStudy)]}),Object(r.jsxs)("li",{children:[Object(r.jsx)(Q.b,{size:15})," ","".concat(n.grade)]}),Object(r.jsxs)("li",{children:[Object(r.jsx)(Q.b,{size:15})," ","".concat(n.description)]})]})]})})):Object(r.jsx)(Ln,{children:Object(r.jsxs)(Wn,{children:[Object(r.jsx)(Hn,{children:"No Educational Profile Created"}),Object(r.jsx)(Jn,{src:Un})]})})})]})}),Object(r.jsx)(Z,{values:x,handleAutoComplete:function(n){Y({school:n})},serverMsg:_,errors:E,handleChange:function(n){n.persist();var e=n.target,t=e.name,r=e.value;console.log(t);var a=function(n){var e=n.name,t=n.value,r=Object(O.a)({},e,t),a=Object(O.a)({},e,P[e]),i=S.a.validate(r,a);return i?i.message:null}(n.target);console.log(a),a?E[t]=a:delete E[t],y((function(n){return Object(h.a)(Object(h.a)({},n),{},Object(O.a)({},t,r))})),M(Object(h.a)(Object(h.a)({},E),{},Object(O.a)({},E,a))),q("")},handleSubmit:function(n){var e;n.preventDefault();var t=A();if(M(Object(h.a)(Object(h.a)({},t),{},Object(O.a)({},t,t||{}))),!t){var r=tn(c.name),a=N.school;e=r.length>0?r.length+1:1;try{(function(n){en.push(n)})(Object(h.a)({id:e,school:a,user:c.name},x));q("Education Profile Saved")}catch(i){q("Some problems were encountered")}}},validate:A,isOpen:j,toggleModal:D})]})})},In=function(n){var e=n.match,t=n.match.params;return Object(r.jsx)(Vn,{data:e,user:t})},Kn=t.p+"static/media/undraw_page_not_found_su7k.4861ae77.svg";var Qn=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(q,{children:Object(r.jsx)(P,{children:Object(r.jsx)(A,{src:Kn})})})})};var Xn=function(){return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(x,{}),Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{path:"/Main/:name/:education",component:In}),Object(r.jsx)(l.b,{path:"/Main/:name",component:In}),Object(r.jsx)(l.b,{path:"/not-found",component:Qn}),Object(r.jsx)(l.b,{path:"/",exact:!0,component:R}),Object(r.jsx)(l.a,{to:"/not-found"})]})]})};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Xn,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.7ba79195.chunk.js.map