(this.webpackJsonpAfrobank=this.webpackJsonpAfrobank||[]).push([[0],{127:function(e,t,n){e.exports=n(280)},280:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),c=n.n(o),i=n(3),s=n(4),l=n(5),u=n(6),m=n(13),p=n(26),d=n(293),f=n(294),h=n(295),b=n(14),g=n(42);function v(){var e=Object(m.a)(["\n    height: 50px;\n"]);return v=function(){return e},e}var E=b.a.div(v()),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:100}},r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(E,{className:"d-flex justify-content-between align-items-center"},r.a.createElement(f.a,{xl:6}),r.a.createElement(f.a,{xl:6,className:"d-flex justify-content-between"},r.a.createElement(g.b,{to:"/signin"},"sign in"),r.a.createElement(g.b,{to:"/register"},"register")))))))}}]),n}(a.Component),O=Object(p.b)((function(e){return{isSignedIn:e.user.signIn.isSignedIn}}),{})(j),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Dashboard"))}}]),n}(r.a.Component),w=n(10),x=n.n(w),k=n(19),S=n(114),C=n.n(S).a.create({baseURL:"https://afrobank.herokuapp.com/Api/v1"}),L=function(){var e=Object(k.a)(x.a.mark((function e(t,n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.post("/login",t);case 3:return a=e.sent,n(a.data.data,!0),e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),N=n(21),I=n(73),R=n(32),q=R.a().shape({email:R.b().required("email is required"),password:R.b().required("password is required")}),T=R.a().shape({recipient:R.b().trim().required("recipient account number is required"),pin:R.b().trim().required("pin is required to complete transaction"),amount:R.b().trim().required()}),A=n(120),M=n.n(A);function _(){var e=Object(m.a)(["\n    color: red;\n    font-weight: 600;\n    text-align: start;\n    font-size: 12px;\n"]);return _=function(){return e},e}function P(){var e=Object(m.a)(["\n    width: 70%;\n    height: 50px;\n    border: none;\n    outline: none;\n    color: white;\n    background: #0d3153;\n    border-radius: 7px;\n"]);return P=function(){return e},e}function B(){var e=Object(m.a)(["\n    border: 1px solid black;\n    border-radius: 12px;\n    height: 50px;\n    width: 100%;\n    padding-left: 20px;\n    padding-right: 20px;\n    outline: none;\n"]);return B=function(){return e},e}var z=b.a.input(B()),H=b.a.button(P()),D=b.a.p(_());function G(){var e=Object(m.a)(["\n    color: ",";\n"]);return G=function(){return e},e}var J=b.a.p(G(),(function(e){return e.color})),V=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(k.a)(x.a.mark((function e(t){var n,r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props,r=n.user_login,o=n.history,a.setState({formLoading:!0}),e.prev=2,e.next=5,L(t,r);case 5:a.setState({error:"",formLoading:!1}),o.push("/dashboard"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a.setState({error:e.t0.response.data.message||"An error occured",formLoading:!1});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),a.state={error:"",formLoading:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.formLoading;return r.a.createElement("div",{className:"bg-dark d-flex justify-content-center align-items-center m-auto"},function(e,t){var n={width:"200px"};return r.a.createElement(I.a,{validationSchema:q,initialValues:{email:"",password:""},onSubmit:e,validateOnBlur:!1,validateOnChange:!1},(function(e){var a=e.errors,o=e.handleChange,c=e.handleSubmit;return r.a.createElement("form",{onSubmit:c},r.a.createElement(z,{type:"email",name:"email",onChange:o,placeholder:"Enter your email",autoComplete:"false",style:n}),r.a.createElement("br",null),!!a.email&&r.a.createElement("p",{style:{color:"red"}},a.email),r.a.createElement(z,{type:"password",name:"password",onChange:o,placeholder:"Enter your password",autoComplete:"false",style:n}),r.a.createElement("br",null),!!a.password&&r.a.createElement("p",{style:{color:"red"}},a.password),r.a.createElement(H,{type:"submit"},t?"...":"sign in"))}))}(this.handleSubmit,e),r.a.createElement("br",null),!!this.state.error&&r.a.createElement(J,{color:"red"},this.state.error))}}]),n}(r.a.Component),W=Object(p.b)(null,{user_login:function(e,t){return function(n){n({type:"LOGIN",payload:e,isSignedIn:t})}}})(V),U=n(59),$=n.n(U);function F(){var e=Object(m.a)(["\n    color: red;\n    font-weight: 500;\n    font-size: 18px;\n    width: 100%;\n"]);return F=function(){return e},e}var K=b.a.p(F()),Q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement($.a,Object.assign({},this.props,{title:this.props.title,timeout:3e3,show:this.props.show,showConfirm:!1,onConfirm:function(){},showCancel:!1}),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(K,null,this.props.text)))}}]),n}(r.a.Component),X=function(){var e=Object(k.a)(x.a.mark((function e(t){var n,a,r,o,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.recipient,a=t.amount,r=t.pin,o=t.sender,c={recipient:n.toString(),amount:a.toString(),pin:r.toString(),sender:o.toString()},e.prev=2,e.next=5,C.post("/transfer",c);case 5:i=e.sent,console.log(i),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(k.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/history/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.message);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0.response;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();function Z(){var e=Object(m.a)(["\n    color: #0d3153;\n    font-size: 23px;\n    font-weight: 500;\n"]);return Z=function(){return e},e}var ee=b.a.p(Z()),te=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(k.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.accountNumber,a.setState({formLoading:!0}),r=Object(N.a)({sender:n},t),console.log(r),e.prev=4,e.next=7,X(r);case 7:a.setState({formLoading:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),a.setState({transferError:e.t0.response.data.message,formLoading:!1,show:!0});case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}(),a.state={formLoading:!1,show:!1,transferError:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e,t,n=this,a=this.state,o=a.transferError,c=a.show;return r.a.createElement($.a,{title:"",show:this.props.show,showConfirm:!1,onConfirm:this.props.confirm},o&&r.a.createElement(Q,{danger:!0,show:c,text:"failed transfer",title:o,onConfirm:function(){return n.setState({transferError:""})}}),r.a.createElement("div",{className:"mb-3 d-flex align-items-center justify-content-center"},r.a.createElement(ee,null,"Transfer")),(e=this.handleSubmit,t=this.state.formLoading,r.a.createElement(I.a,{validateOnBlur:!1,validateOnChange:!1,initialValues:{recipient:"",amount:"",pin:""},validationSchema:T,onSubmit:e},(function(e){var n=e.errors,a=e.handleChange,o=e.handleSubmit;return e.values,r.a.createElement("form",{onSubmit:o},r.a.createElement(z,{className:"mb-3",type:"number",name:"recipient",placeholder:"recipient",onChange:a})," ",!!n.recipient&&r.a.createElement(D,null,n.recipient),r.a.createElement(z,{type:"number",name:"amount",className:"mb-3",placeholder:"enter amount",onChange:a}),!!n.amount&&r.a.createElement(D,null,n.amount),r.a.createElement(z,{className:"mb-3",type:"number",placeholder:"enter pin",onChange:a,name:"pin",maxLength:4}),!!n.pin&&r.a.createElement(D,null,n.pin),r.a.createElement(H,{type:"submit",className:"mt-3 mb-2"},t?r.a.createElement(M.a,{styles:{spinner:function(e){return Object(N.a)(Object(N.a)({},e),{},{width:"20px","& svg circle":{stroke:"white"}})}},spinner:!0,active:!0}):"send"))}))))}}]),n}(r.a.Component),ne=Object(p.b)((function(e){return{accountNumber:e.user.signIn.payLoad.accountNumber}}),{})(te),ae=n(296),re=n(297);function oe(){var e=Object(m.a)(["\n    color: ",";\n"]);return oe=function(){return e},e}function ce(){var e=Object(m.a)(["\n    background: purple;\n    width: 250px;\n    border-radius: 10px;\n"]);return ce=function(){return e},e}function ie(){var e=Object(m.a)(["\n    height: 240px;\n    width: 200px;\n    background: ",";\n    border-radius: 10px;\n"]);return ie=function(){return e},e}function se(){var e=Object(m.a)(["\n    height: 40px;\n    width: 120px;\n    background: #cdc7ce;\n"]);return se=function(){return e},e}function le(){var e=Object(m.a)(["\n    width: 450px;\n    height: 240px;\n    border-radius: 10px;\n    background: #0d3153;\n"]);return le=function(){return e},e}var ue=b.a.div(le()),me=b.a.div(se()),pe=b.a.div(ie(),(function(e){return e.color})),de=b.a.div(ce()),fe=b.a.span(oe(),(function(e){return e.color})),he=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(k.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.payLoad.accountNumber,e.t0=a,e.next=4,Y(t);case 4:e.t1=e.sent,e.t2={AllTransactionHistory:e.t1},e.t0.setState.call(e.t0,e.t2);case 7:case"end":return e.stop()}}),e)}))),a.toggleModal=function(){a.setState({toggleTransferModal:!a.state.toggleTransferModal})},a.state={toggleTransferModal:!1,AllTransactionHistory:[]},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.payLoad,n=t.firstName,a=t.accountNumber,o=t.surName,c=this.state,i=c.toggleTransferModal,s=c.AllTransactionHistory;return console.log(this.props),r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(f.a,{className:"pt-2"},r.a.createElement(h.a,{className:"d-flex justify-content-between"},r.a.createElement(f.a,{xl:3},r.a.createElement("h1",null,"Overview")),r.a.createElement(f.a,{xl:6},r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(me,{className:"d-flex justify-content-center align-items-center rounded-pill"},r.a.createElement("h6",null,"".concat(n," ").concat(o[0]))))))),r.a.createElement(f.a,{className:"mt-5"},r.a.createElement(h.a,null,r.a.createElement(f.a,{xl:5},r.a.createElement(ue,null,r.a.createElement(d.a,null,r.a.createElement("h4",null,"hello ",n),r.a.createElement("p",null,"Account number ",a)))),r.a.createElement(f.a,{xl:6},r.a.createElement(h.a,{className:"d-flex justify-content-between"},r.a.createElement(f.a,{xl:2},r.a.createElement(pe,{color:"#8d7a91"})),r.a.createElement(f.a,{xl:2},r.a.createElement(pe,{color:"#0d3153"})),r.a.createElement(f.a,{xl:2},r.a.createElement(pe,{color:"#c4aec9"}))))))),r.a.createElement("button",{onClick:function(){return e.toggleModal()}},"Transfer money"),r.a.createElement(ne,{show:i,confirm:function(){return e.toggleModal()}}),r.a.createElement(de,null,!!s&&s.map((function(e,t){return r.a.createElement("div",{key:t},e.transaction_date,r.a.createElement(fe,{color:"credit"===e.transaction_type?"green":"red"},r.a.createElement("div",{className:"d-flex"},"credit"===e.transaction_type?r.a.createElement(ae.a,null):r.a.createElement(re.a,null),"credit"===e.transaction_type?"+".concat(e.amount):"-".concat(e.amount))))}))))}}]),n}(r.a.Component),be=Object(p.b)((function(e){return{payLoad:e.user.signIn.payLoad}}),{})(he),ge=n(9),ve=[{path:"/register",component:y},{path:"/signin",component:W},{path:"/dashboard",component:be}],Ee=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(ge.c,null,ve.map((function(e,t){return r.a.createElement(ge.a,{key:t,path:e.path,component:e.component})})),r.a.createElement(ge.a,{path:"/",component:O})))}}]),n}(a.Component),je=n(23),Oe=n(121),ye=n(74),we=n(122),xe=n.n(we),ke={signIn:{isSignedIn:!1,payLoad:{}},userReg:{isRegistered:!1,payLoad:{}},userPinReset:{isPinReset:!1,payLoad:{}}},Se=Object(je.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{signIn:Object(N.a)(Object(N.a)({},e),{},{isSignedIn:t.isSignedIn,payLoad:t.payload})};case"register":return{userReg:Object(N.a)(Object(N.a)({},e),{},{isRegistered:t.isRegistered,payLoad:t.payload})};case"pinReset":return{userPinReset:Object(N.a)(Object(N.a)({},e),{},{isPinReset:t.isPinReset,payLoad:t.payload})};default:return e}}}),Ce={key:"root",storage:xe.a,whitelist:["user"]},Le=[Oe.a],Ne=Object(ye.a)(Ce,Se),Ie=function(){var e=Object(je.d)(Ne,je.a.apply(void 0,Le));return{store:e,persiststore:Object(ye.b)(e)}},Re=n(123);n(279);var qe=function(){return r.a.createElement(p.a,{store:Ie().store},r.a.createElement(Re.a,{loading:null,persistor:Ie().persiststore},r.a.createElement(Ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[127,1,2]]]);
//# sourceMappingURL=main.342515b7.chunk.js.map