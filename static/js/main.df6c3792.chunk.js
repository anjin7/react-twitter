(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{60:function(e,t,a){e.exports=a(77)},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(4),c=a.n(r),l=a(52),i=a.n(l),o=a(10),u=a(36),s=a(16),m=a(0),b=a.n(m),f=a(3),d=a(18);var p,j=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(""),i=Object(o.a)(l,2),u=i[0],s=i[1],m=Object(r.useState)(!0),p=Object(o.a)(m,2),j=p[0],h=p[1],O=Object(r.useState)(""),v=Object(o.a)(O,2),g=v[0],E=v[1],y=function(e){var t=e.target,a=t.name,r=t.value;"email"===a?n(r):"password"===a&&s(r)},w=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,r=Object(d.d)(),!j){e.next=9;break}return e.next=6,Object(d.c)(r,a,u);case 6:n=e.sent,e.next=12;break;case 9:return e.next=11,Object(d.e)(r,a,u);case 11:n=e.sent;case 12:console.log(n),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),E(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:w,className:"container"},c.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:y,className:"authInput"}),c.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:y,className:"authInput"}),c.a.createElement("input",{type:"submit",value:j?"Create Account":"Sign In",className:"authInput authSubmit"}),g&&c.a.createElement("span",{className:"authError"},g)),c.a.createElement("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch"},j?"Sign In":"Create Account"))},h=a(35),O=a(24),v=a(37),g=h.b.div(p||(p=Object(n.a)(["\n"])));var E=function(){var e=function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new d.b:"github"===a&&(n=new d.a),r=Object(d.d)(),e.next=5,Object(d.f)(r,n);case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(g,{className:"authContainer"},c.a.createElement(O.a,{icon:v.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),c.a.createElement(j,null),c.a.createElement("div",{className:"authBtns"},c.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Continue with Google ",c.a.createElement(O.a,{icon:v.b})),c.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},"Continue with Github ",c.a.createElement(O.a,{icon:v.a}))))},y=a(30),w=a(56),x=a(15),N=a(28),k=Object(w.a)({apiKey:"AIzaSyCW80rAhXQjoV21B9MsoHFjp4e_tlmZlCU",authDomain:"nwtter-2f877.firebaseapp.com",databaseURL:"https://nwtter-2f877-default-rtdb.firebaseio.com/",projectId:"nwtter-2f877",storageBucket:"nwtter-2f877.appspot.com",messagingSenderId:"500567874727",appId:"1:500567874727:web:ef550ba27cac64bb71cf82"}),S=k,C=Object(d.d)(k),I=Object(x.e)(),F=Object(N.c)(),A=a(29),U=function(e){var t=e.nweetObj,a=e.isOwner,n=Object(r.useState)(!1),l=Object(o.a)(n,2),i=l[0],u=l[1],s=Object(r.useState)(t.text),m=Object(o.a)(s,2),d=m[0],p=m[1],j=Object(x.d)(I,"nweets","".concat(t.id)),h=Object(N.d)(F,t.attachmentUrl),v=function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=14;break}return e.prev=2,e.next=5,Object(x.c)(j);case 5:if(window.alert("Success to Delete"),""===t.attachmentUrl){e.next=9;break}return e.next=9,Object(N.a)(h);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),window.alert("Fail to Delete");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),g=function(){return u((function(e){return!e}))},E=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(x.j)(j,{text:d});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"nweet"},i?c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:E,className:"container nweetEdit"},c.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:d,required:!0,onChange:function(e){var t=e.target.value;p(t)}}),c.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),c.a.createElement("button",{onClick:g,className:"formBtn cancelBtn"},"Cancel")):c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",null,t.text),t.attachmentUrl&&c.a.createElement("img",{src:t.attachmentUrl,alt:"img"}),a&&c.a.createElement("div",{className:"nweet__actions"},c.a.createElement("span",{onClick:v},c.a.createElement(O.a,{icon:A.d})),c.a.createElement("span",{onClick:g},c.a.createElement(O.a,{icon:A.a})))))},_=a(57);var B=function(e){var t=e.userObj,a=Object(r.useState)(""),n=Object(o.a)(a,2),l=n[0],i=n[1],u=Object(r.useState)(""),s=Object(o.a)(u,2),m=s[0],d=s[1],p=function(){var e=Object(f.a)(b.a.mark((function e(a){var n,r,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==l){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===m){e.next=12;break}return r=Object(N.d)(F,"".concat(t.uid,"/").concat(Object(_.v4)())),e.next=8,Object(N.e)(r,m,"data_url");case 8:return c=e.sent,e.next=11,Object(N.b)(c.ref);case 11:n=e.sent;case 12:return o={text:l,createdAt:Object(x.i)(),creatorId:t.uid,attachmentUrl:n},e.next=15,Object(x.a)(Object(x.b)(I,"nweets"),o);case 15:i(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=Object(r.useRef)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:p,className:"factoryForm"},c.a.createElement("div",{className:"factoryInput__container"},c.a.createElement("input",{className:"factoryInput__input",value:l,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),c.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),c.a.createElement("label",{htmlFor:"attach-file",className:"factoryInput__label"},c.a.createElement("span",null,"Add photos"),c.a.createElement(O.a,{icon:A.b})),c.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;d(t)},t&&a.readAsDataURL(t)},style:{opacity:0},ref:j}),m&&c.a.createElement("div",{className:"factoryForm__attachment"},c.a.createElement("img",{src:m,style:{backgroundImage:m},alt:"img"}),c.a.createElement("div",{className:"factoryForm__clear",onClick:function(){d("")}},c.a.createElement("span",null,"Remove"),c.a.createElement(O.a,{icon:A.c})))))};var q=function(e){var t=e.userObj,a=Object(r.useState)([]),n=Object(o.a)(a,2),l=n[0],i=n[1];return Object(r.useEffect)((function(){var e=Object(x.h)(Object(x.b)(I,"nweets"),Object(x.g)("createdAt","desc"));Object(x.f)(e,(function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));i(t)}))}),[]),c.a.createElement("div",null,c.a.createElement(B,{userObj:t}),c.a.createElement("div",null,l.map((function(e){return c.a.createElement(U,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))};var D=function(e){var t=e.refreshUser,a=e.userObj,n=Object(s.f)(),l=Object(r.useState)([]),i=Object(o.a)(l,2),u=(i[0],i[1]),m=Object(r.useState)(a.displayName),p=Object(o.a)(m,2),j=p[0],h=p[1],O=Object(d.d)();Object(r.useEffect)((function(){var e=Object(x.h)(Object(x.b)(I,"profile"));Object(x.f)(e,(function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));u(t)}))}),[]);var v=function(){var e=Object(f.a)(b.a.mark((function e(n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===j){e.next=5;break}return e.next=4,Object(d.g)(O.currentUser,{displayName:j});case 4:t();case 5:return r={text:j,creatorId:a.uid,createdAt:Object(x.i)()},e.next=9,Object(x.a)(Object(x.b)(I,"profile"),r);case 9:return e.next=11,Object(x.j)(Object(x.b)(I,"profile"),{text:j});case 11:h(j);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:v,className:"profileForm"},c.a.createElement("input",{onChange:function(e){var t=e.target.value;h(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:j,required:!0,className:"formInput"}),c.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),c.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){O.signOut(),n.push("/")}},"Log Out"))};var L,z=function(e){var t=e.userObj;return c.a.createElement("nav",null,c.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},c.a.createElement("li",null,c.a.createElement(u.b,{to:"/",style:{marginRight:10}},c.a.createElement(O.a,{icon:v.c,color:"#04AAFF",size:"2x"}))),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},c.a.createElement(O.a,{icon:A.e,color:"#04AAFF",size:"2x"}),c.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},P=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return c.a.createElement(u.a,{basename:"/react-twitter"},c.a.createElement(c.a.Fragment,null),a&&c.a.createElement(z,{userObj:n}),c.a.createElement(s.c,null,c.a.createElement(c.a.Fragment,null,a?c.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(q,{userObj:n})),c.a.createElement(s.a,{exact:!0,path:"/profile"},c.a.createElement(D,{userObj:n,refreshUser:t}))):c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(E,null)))))},T=h.b.div(L||(L=Object(n.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  /* border: 1px solid blue; */\n"])));var R,M=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(null),i=Object(o.a)(l,2),u=i[0],s=i[1];return Object(r.useEffect)((function(){C.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(e){return Object(d.g)(e,{displayName:e.displayName})}}:null),n(!0)}))}),[]),c.a.createElement(T,null,a?c.a.createElement(P,{refreshUser:function(){var e=C.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(e){return Object(d.g)(e,{displayName:e.displayName})}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing...",c.a.createElement("footer",null,"\xa9 ",(new Date).getFullYear()," Nwitter"))};a(76);console.log(S);var H=Object(h.a)(R||(R=Object(n.a)(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\n/* body {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:black;\n  line-height: 1.2;\n  background-color: whitesmoke;\n} */\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(H,null),c.a.createElement(M,null)),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.df6c3792.chunk.js.map