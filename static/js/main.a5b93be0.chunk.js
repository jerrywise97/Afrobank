(this.webpackJsonpAfrobank=this.webpackJsonpAfrobank||[]).push([[0],{129:function(e,t,n){e.exports=n(267)},267:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(40),o=n.n(c),l=n(3),i=n(4),s=n(10),u=n(12),p=n(7),m=n(25),d=n(279),f=n(280),b=n(281),h=n(6),g=n(33);function E(){var e=Object(p.a)(["\n    height: 50px;\n"]);return E=function(){return e},e}var y=h.a.div(E()),v=Object(m.b)((function(e){return{isSignedIn:e.user.signIn.isSignedIn}}),{})((function(){return r.a.createElement("div",{style:{height:100}},r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(b.a,null,r.a.createElement(y,{className:"d-flex justify-content-between align-items-center"},r.a.createElement(f.a,{xl:6}),r.a.createElement(f.a,{xl:6,className:"d-flex justify-content-between"},r.a.createElement(g.b,{to:"/signin"},"sign in"),r.a.createElement(g.b,{to:"/register"},"register")))))))})),w=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Dashboard"))}}]),n}(r.a.Component),x=n(13),j=n.n(x),O=n(21),k=n(118),N=n.n(k).a.create({baseURL:"https://afrobank.herokuapp.com/Api/v1"}),L=function(){var e=Object(O.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/login",t);case 3:return a=e.sent,n(a.data.data,!0),e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),S=n(15),z=n(77),D=n(35),I=D.b().shape({email:D.c().required("email is required"),password:D.c().required("password is required")});D.b().shape({recipient:D.a().required("recipient account number is required"),pin:D.a().required("pin is required to complete transaction"),amount:D.a().required()}),n(124);function C(){var e=Object(p.a)(["\n    color: red;\n    font-weight: 600;\n    text-align: start;\n    font-size: 12px;\n"]);return C=function(){return e},e}function R(){var e=Object(p.a)(["\n    width: 70%;\n    height: 50px;\n    border: none;\n    outline: none;\n    color: white;\n    background: #0d3153;\n    border-radius: 7px;\n"]);return R=function(){return e},e}function A(){var e=Object(p.a)(["\n    border: 1px solid black;\n    border-radius: 12px;\n    height: 50px;\n    width: 100%;\n    padding-left: 20px;\n    padding-right: 20px;\n    outline: none;\n"]);return A=function(){return e},e}var T=h.a.input(A()),q=h.a.button(R());h.a.p(C());function B(){var e=Object(p.a)(["\n    color: ",";\n"]);return B=function(){return e},e}var W=h.a.p(B(),(function(e){return e.color})),P=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(O.a)(j.a.mark((function e(t){var n,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props,r=n.user_login,c=n.history,a.setState({formLoading:!0}),e.prev=2,e.next=5,L(t,r);case 5:a.setState({error:"",formLoading:!1}),c.push("/dashboard"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a.setState({error:e.t0.response.data.message||"An error occured",formLoading:!1});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),a.state={error:"",formLoading:!1},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.formLoading;return r.a.createElement("div",{className:"bg-dark d-flex justify-content-center align-items-center m-auto"},function(e,t){var n={width:"200px"};return r.a.createElement(z.a,{validationSchema:I,initialValues:{email:"",password:""},onSubmit:e,validateOnBlur:!1,validateOnChange:!1},(function(e){var a=e.errors,c=e.handleChange,o=e.handleSubmit;return r.a.createElement("form",{onSubmit:o},r.a.createElement(T,{type:"email",name:"email",onChange:c,placeholder:"Enter your email",autoComplete:"false",style:n}),r.a.createElement("br",null),!!a.email&&r.a.createElement("p",{style:{color:"red"}},a.email),r.a.createElement(T,{type:"password",name:"password",onChange:c,placeholder:"Enter your password",autoComplete:"false",style:n}),r.a.createElement("br",null),!!a.password&&r.a.createElement("p",{style:{color:"red"}},a.password),r.a.createElement(q,{type:"submit"},t?"...":"sign in"))}))}(this.handleSubmit,e),r.a.createElement("br",null),!!this.state.error&&r.a.createElement(W,{color:"red"},this.state.error))}}]),n}(r.a.Component),H=Object(m.b)(null,{user_login:function(e,t){return function(n){n({type:"LOGIN",payload:e,isSignedIn:t})}}})(P),_=n(282),G=n(283),J=n(284),F=n(285),M=n(286);function U(){var e=Object(p.a)(["\n  color: white;\n  font-wight: 500;\n  font-size: 15px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-left: 10px;\n  border-radius: 10px;\n  transition: all ease 0.3s;\n  &:hover {\n    background: #4004af,\n    color: white;\n  }\n  &."," {\n     background: #4004af;\n    color: white;\n  }\n"]);return U=function(){return e},e}function V(){var e=Object(p.a)(["\n    color: ",";\n    font-size: ","px;\n"]);return V=function(){return e},e}var $=h.a.span(V(),(function(e){return e.color}),(function(e){return e.size})),K=Object(h.a)((function(e){return r.a.createElement(g.c,Object.assign({},e,{activeClassName:"active"}))}))(U(),"active"),Q=[{path:"/dashboard",name:"Dashboard",icon:r.a.createElement(_.a,null)},{path:"/dashboard/analysis",name:"Send money",icon:r.a.createElement(G.a,null)},{path:"/dashboard/wallet",name:"Wallet",icon:r.a.createElement(J.a,null)},{path:"/dashboard/profile",name:"Profile",icon:r.a.createElement(F.a,null)},{path:"/dashboard/Settings",name:"Settings",icon:r.a.createElement(M.a,null)}],X=function(){return r.a.createElement("div",{style:{position:"static"}},r.a.createElement("div",{className:"pt-4"},r.a.createElement($,{size:"25",className:"font-weight-bold",color:"white"},"Afrobank")),r.a.createElement("div",{style:{marginTop:"55px"}},Q.map((function(e,t){return r.a.createElement(K,{key:t,exact:!0,to:e.path,style:{textDecoration:"none"}},e.icon,r.a.createElement("span",{className:"pl-3"},e.name))}))))},Y=n(9),Z=n(39),ee=function(){var e=Object(O.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.get("/history/".concat(t));case 3:a=e.sent,n(a.data.message),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),te=function(){var e=Object(O.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.get("/balance/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.message);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0.response;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ne=n(291),ae=n(287),re=n(288),ce=n(289),oe=n(290);function le(){var e=Object(p.a)(["\n    color: ",";\n    font-size: ","px;\n"]);return le=function(){return e},e}function ie(){var e=Object(p.a)(["\n    width: 100%;\n    background: #000000;\n    border-radius: 10px;\n"]);return ie=function(){return e},e}function se(){var e=Object(p.a)(["\n    border: none;\n    outline: none;\n    height: 100%;\n    background: transparent;\n    color: white;\n"]);return se=function(){return e},e}function ue(){var e=Object(p.a)(["\n    width: 230px;\n    background: #0f0f0f73;\n    height: 44px;\n    padding-right: 10px;\n    padding-left: 10px;\n    border-radius: 5px;\n"]);return ue=function(){return e},e}function pe(){var e=Object(p.a)(["\n    height: 100%;\n    background: #0f0f0fe5;\n"]);return pe=function(){return e},e}function me(){var e=Object(p.a)(["\n    height: 150px;\n    width: 100%;\n    border-radius: 10px;\n\n    background: #0d3153;\n    transition: all ease 0.3s;\n"]);return me=function(){return e},e}var de=h.a.div(me()),fe=h.a.div(pe()),be=h.a.div(ue()),he=h.a.input(se()),ge=h.a.div(ie()),Ee=h.a.span(le(),(function(e){return e.color}),(function(e){return e.size})),ye=Object(m.b)((function(e){return{payLoad:e.user.signIn.payLoad,transactions:e.user.transactions,balanceDisplay:e.user.balanceDisplay}}),{updateTransactionHistory:function(e){return function(t){t({type:"transactionHistory",payload:e})}},toggleDisplay:function(e){return function(t){t({type:"toggleBalanceDisplay",payload:e})}}})((function(e){var t=Object(a.useState)({toggleTransferModal:!1,balance:0,displayBal:!0}),n=Object(Z.a)(t,2),c=n[0],o=n[1],l=function(){o(Object(S.a)(Object(S.a)({},c),{},{displayBal:!c.displayBal})),e.toggleDisplay(c.displayBal)};return Object(a.useEffect)((function(){function t(){return(t=Object(O.a)(j.a.mark((function t(){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payLoad.accountNumber,t.next=3,ee(n,e.updateTransactionHistory);case 3:return t.next=5,te(n);case 5:a=t.sent,o({balance:a});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.payLoad,e.updateTransactionHistory]),r.a.createElement(f.a,null,r.a.createElement(b.a,null,r.a.createElement(f.a,{lg:12},r.a.createElement("div",{className:"d-flex justify-content-between pt-4 align-items-center"},r.a.createElement(Ee,{size:"25",className:"font-weight-bold",color:"white"},"Dashboard"),r.a.createElement(be,{className:"d-flex justify-content-between align-items-center"},r.a.createElement(ae.a,null),r.a.createElement(he,{placeholder:"Find something"}))),r.a.createElement(ge,{className:"pb-3 pt-3 mt-5"},r.a.createElement(d.a,{className:"pr-4 pl-4"},r.a.createElement(Ee,{color:"white",className:"pt-3 mb-4"},"Account overview"),r.a.createElement(b.a,{className:"pt-3"},r.a.createElement(f.a,{lg:4},r.a.createElement(de,{style:{background:"#4004af",color:"white"}},r.a.createElement(d.a,null,r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement(Ee,{size:"30"},"\u20a6"),r.a.createElement(re.a,{style:{cursor:"pointer"},onClick:function(){return alert("clicked")}})),r.a.createElement("div",{className:"d-flex justify-content-between"},e.balanceDisplay?r.a.createElement(ce.a,{onClick:function(){return l()},style:{position:"absolute",top:"70%"}}):r.a.createElement(oe.a,{onClick:function(){return l()},style:{position:"absolute",top:"70%"}}),r.a.createElement(Ee,{size:"24",style:{position:"absolute",top:"65%",right:"10%"}},e.balanceDisplay?"****":c.balance))))),r.a.createElement(f.a,{lg:4},r.a.createElement(de,{style:{background:"#f707eb",color:"white"},className:"pt-2"},r.a.createElement(d.a,null,r.a.createElement(Ee,{size:"15",className:"mt-5 font-weight-bold"},"Account Details"),r.a.createElement("br",null),r.a.createElement(Ee,{size:"12",style:{position:"absolute",top:"60%",fontWeight:550}},"Name:"," ","".concat(e.payLoad.firstName," ").concat(e.payLoad.surName)),r.a.createElement("br",null),r.a.createElement(Ee,{size:"15",style:{position:"absolute",top:"75%",fontWeight:550}},"Account Number:"," ",e.payLoad.accountNumber)))),r.a.createElement(f.a,{lg:4},r.a.createElement(de,{className:"d-flex justify-content-center align-items-center"},r.a.createElement(Ee,{color:"white"},"Coming Soon")))),r.a.createElement("div",{className:"d-flex justify-content-between pt-4"},r.a.createElement(Ee,{size:"18",color:"white"},"Transactions"),r.a.createElement(Ee,{color:"green"},"Show all")),r.a.createElement("div",{className:"pt-3"},r.a.createElement(ne.a,{striped:!0,responsive:!0,borderless:!0},r.a.createElement("thead",{style:{color:"whitesmoke"}},r.a.createElement("tr",null,r.a.createElement("th",null,"S/N"),r.a.createElement("th",null,"Transaction ID"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Date/Time"))),r.a.createElement("tbody",{style:{color:"white"}},!!e.transactions&&e.transactions.map((function(e,t){var n,a=e.transaction_id,c=e.amount,o=e.transaction_date,l=e.transaction_type,i=(n=o,{day:new Date(n).toLocaleDateString(),time:new Date(n).toLocaleTimeString()});return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",{style:{color:"".concat("credit"===l?"green":"red"),fontWeight:600}},"\u20a6",c),r.a.createElement("td",{style:{color:"".concat("credit"===l?"green":"red"),fontWeight:600}},l),r.a.createElement("td",null,i.day,",",i.time))}))))))))))})),ve=n(292);function we(){var e=Object(p.a)(["\n    color: ",";\n    font-size: ","px;\n"]);return we=function(){return e},e}var xe=h.a.span(we(),(function(e){return e.color}),(function(e){return e.size})),je=function(){return r.a.createElement(f.a,null,r.a.createElement(b.a,null,r.a.createElement(f.a,{lg:12},r.a.createElement("div",{className:"d-flex pt-4 align-items-center"},r.a.createElement(xe,{size:"25",className:"font-weight-bold",color:"white"},"Wallet")))))};function Oe(){var e=Object(p.a)(["\n    color: ",";\n    font-size: ","px;\n"]);return Oe=function(){return e},e}var ke=h.a.span(Oe(),(function(e){return e.color}),(function(e){return e.size})),Ne=function(){return r.a.createElement(f.a,null,r.a.createElement(b.a,null,r.a.createElement(f.a,{lg:12},r.a.createElement("div",{className:"d-flex pt-4 align-items-center"},r.a.createElement(ke,{size:"25",className:"font-weight-bold",color:"white"},"Analysis")))))};function Le(){var e=Object(p.a)(["\n    height: 44px;\n    width: 44px;\n    background: #0f0f0f73;\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return Le=function(){return e},e}function Se(){var e=Object(p.a)(["\n    color: white;\n    font-weight: 500;\n    font-size: 18px;\n"]);return Se=function(){return e},e}var ze=h.a.p(Se()),De=h.a.div(Le()),Ie=[{path:"/register",component:w},{path:"/signin",component:H},{path:"/dashboard",component:Object(m.b)((function(e){return{payLoad:e.user.signIn.payLoad}}),{})((function(e){return r.a.createElement(fe,{className:"pb-4"},r.a.createElement(f.a,null,r.a.createElement(b.a,null,r.a.createElement(f.a,{xl:2},r.a.createElement(X,null)),r.a.createElement(Y.c,null,r.a.createElement(Y.a,{exact:!0,path:"/dashboard",component:ye}),r.a.createElement(Y.a,{exact:!0,path:"/dashboard/wallet",component:je}),r.a.createElement(Y.a,{exact:!0,path:"/dashboard/analysis",component:Ne})),r.a.createElement(f.a,{xl:2},r.a.createElement(d.a,null,r.a.createElement("div",{className:"d-flex justify-content-between align-items-center pl-2 pr-3 pt-4"},r.a.createElement(De,null,r.a.createElement(ve.a,{style:{color:"white"}})),r.a.createElement(ze,{className:"text-center"},e.payLoad.firstName)))))))}))}],Ce=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(g.a,{basename:"/Afrobank"},r.a.createElement(Y.c,null,Ie.map((function(e,t){return r.a.createElement(Y.a,{key:t,path:e.path,component:e.component})})),r.a.createElement(Y.a,{path:"/",component:v})))}}]),n}(a.Component),Re=n(23),Ae=n(125),Te=n(78),qe=n(126),Be=n.n(qe),We={signIn:{isSignedIn:!1,payLoad:{}},userReg:{isRegistered:!1,payLoad:{}},userPinReset:{isPinReset:!1,payLoad:{}},balanceDisplay:!1,transactions:[]},Pe=Object(Re.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{signIn:Object(S.a)(Object(S.a)({},e),{},{isSignedIn:t.isSignedIn,payLoad:t.payload})};case"register":return{userReg:Object(S.a)(Object(S.a)({},e),{},{isRegistered:t.isRegistered,payLoad:t.payload})};case"pinReset":return{userPinReset:Object(S.a)(Object(S.a)({},e),{},{isPinReset:t.isPinReset,payLoad:t.payload})};case"transactionHistory":return Object(S.a)(Object(S.a)({},e),{},{transactions:t.payload});case"toggleBalanceDisplay":return Object(S.a)(Object(S.a)({},e),{},{balanceDisplay:t.payload});default:return e}}}),He={key:"root",storage:Be.a,whitelist:["user"]},_e=[Ae.a],Ge=Object(Te.a)(He,Pe),Je=function(){var e=Object(Re.d)(Ge,Re.a.apply(void 0,_e));return{store:e,persiststore:Object(Te.b)(e)}},Fe=n(127);n(266);var Me=function(){return r.a.createElement(m.a,{store:Je().store},r.a.createElement(Fe.a,{loading:null,persistor:Je().persiststore},r.a.createElement(Ce,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[129,1,2]]]);
//# sourceMappingURL=main.a5b93be0.chunk.js.map