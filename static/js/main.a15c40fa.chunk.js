(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{60:function(e,t,a){e.exports=a(77)},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(49),r=a(5),c=a.n(r),l=a(50),o=a.n(l),i=a(10),u=a(34),s=a(16),m=a(0),b=a.n(m),f=a(3),p=a(18);var d=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(""),o=Object(i.a)(l,2),u=o[0],s=o[1],m=Object(r.useState)(!0),d=Object(i.a)(m,2),j=d[0],O=d[1],h=Object(r.useState)(""),g=Object(i.a)(h,2),v=g[0],E=g[1],y=function(e){var t=e.target,a=t.name,r=t.value;"email"===a?n(r):"password"===a&&s(r)},w=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,r=Object(p.d)(),!j){e.next=9;break}return e.next=6,Object(p.c)(r,a,u);case 6:n=e.sent,e.next=12;break;case 9:return e.next=11,Object(p.e)(r,a,u);case 11:n=e.sent;case 12:console.log(n),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),E(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:w,className:"container"},c.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:y,className:"authInput"}),c.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:y,className:"authInput"}),c.a.createElement("input",{type:"submit",value:j?"Create Account":"Sign In",className:"authInput authSubmit"}),v&&c.a.createElement("span",{className:"authError"},v)),c.a.createElement("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch"},j?"Sign In":"Create Account"))};var j=function(){var e=function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new p.b:"github"===a&&(n=new p.a),r=Object(p.d)(),e.next=5,Object(p.f)(r,n);case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement("div",null,c.a.createElement("button",{onClick:e,name:"google"},"Continue with Google"),c.a.createElement("button",{onClick:e,name:"github"},"Continue with Github")))},O=a(30),h=a(51),g=a(14),v=a(27),E=Object(h.a)({apiKey:"AIzaSyCW80rAhXQjoV21B9MsoHFjp4e_tlmZlCU",authDomain:"nwtter-2f877.firebaseapp.com",databaseURL:"https://nwtter-2f877-default-rtdb.firebaseio.com/",projectId:"nwtter-2f877",storageBucket:"nwtter-2f877.appspot.com",messagingSenderId:"500567874727",appId:"1:500567874727:web:ef550ba27cac64bb71cf82"}),y=E,w=Object(p.d)(E),x=Object(g.e)(),k=Object(v.c)(),N=a(28),S=a(29),C=function(e){var t=e.nweetObj,a=e.isOwner,n=Object(r.useState)(!1),l=Object(i.a)(n,2),o=l[0],u=l[1],s=Object(r.useState)(t.text),m=Object(i.a)(s,2),p=m[0],d=m[1],j=Object(g.d)(x,"nweets","".concat(t.id)),O=Object(v.d)(k,t.attachmentUrl),h=function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=14;break}return e.prev=2,e.next=5,Object(g.c)(j);case 5:if(window.alert("Success to Delete"),""===t.attachmentUrl){e.next=9;break}return e.next=9,Object(v.a)(O);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),window.alert("Fail to Delete");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),E=function(){return u((function(e){return!e}))},y=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(g.j)(j,{text:p});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"nweet"},o?c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:y,className:"container nweetEdit"},c.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:p,required:!0,onChange:function(e){var t=e.target.value;d(t)}}),c.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),c.a.createElement("button",{onClick:E,className:"formBtn cancelBtn"},"Cancel")):c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",null,t.text),t.attachmentUrl&&c.a.createElement("img",{src:t.attachmentUrl,alt:"img"}),a&&c.a.createElement("div",{className:"nweet__actions"},c.a.createElement("span",{onClick:h},c.a.createElement(N.a,{icon:S.d})),c.a.createElement("span",{onClick:E},c.a.createElement(N.a,{icon:S.a})))))},I=a(52);var F=function(e){var t=e.userObj,a=Object(r.useState)(""),n=Object(i.a)(a,2),l=n[0],o=n[1],u=Object(r.useState)(""),s=Object(i.a)(u,2),m=s[0],p=s[1],d=function(){var e=Object(f.a)(b.a.mark((function e(a){var n,r,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==l){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===m){e.next=12;break}return r=Object(v.d)(k,"".concat(t.uid,"/").concat(Object(I.v4)())),e.next=8,Object(v.e)(r,m,"data_url");case 8:return c=e.sent,e.next=11,Object(v.b)(c.ref);case 11:n=e.sent;case 12:return i={text:l,createdAt:Object(g.i)(),creatorId:t.uid,attachmentUrl:n},e.next=15,Object(g.a)(Object(g.b)(x,"nweets"),i);case 15:o(""),p("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=Object(r.useRef)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:d,className:"factoryForm"},c.a.createElement("div",{className:"factoryInput__container"},c.a.createElement("input",{className:"factoryInput__input",value:l,onChange:function(e){var t=e.target.value;o(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),c.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),c.a.createElement("label",{htmlFor:"attach-file",className:"factoryInput__label"},c.a.createElement("span",null,"Add photos"),c.a.createElement(N.a,{icon:S.b})),c.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;p(t)},t&&a.readAsDataURL(t)},style:{opacity:0},ref:j}),m&&c.a.createElement("div",{className:"factoryForm__attachment"},c.a.createElement("img",{src:m,style:{backgroundImage:m},alt:"img"}),c.a.createElement("div",{className:"factoryForm__clear",onClick:function(){p("")}},c.a.createElement("span",null,"Remove"),c.a.createElement(N.a,{icon:S.c})))))};var U=function(e){var t=e.userObj,a=Object(r.useState)([]),n=Object(i.a)(a,2),l=n[0],o=n[1];return Object(r.useEffect)((function(){var e=Object(g.h)(Object(g.b)(x,"nweets"),Object(g.g)("createdAt","desc"));Object(g.f)(e,(function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));o(t)}))}),[]),c.a.createElement("div",null,c.a.createElement(F,{userObj:t}),c.a.createElement("div",null,l.map((function(e){return c.a.createElement(C,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))};var _=function(e){var t=e.refreshUser,a=e.userObj,n=Object(s.f)(),l=Object(r.useState)([]),o=Object(i.a)(l,2),u=o[0],m=o[1],d=Object(r.useState)(a.displayName),j=Object(i.a)(d,2),h=j[0],v=j[1],E=Object(p.d)();Object(g.d)(x,"profile","".concat(a.displayName)),Object(r.useEffect)((function(){var e=Object(g.h)(Object(g.b)(x,"profile"));Object(g.f)(e,(function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));m(t)}))}),[]);var y=function(){var e=Object(f.a)(b.a.mark((function e(n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===h){e.next=5;break}return e.next=4,Object(p.g)(E.currentUser,{displayName:h});case 4:t();case 5:return r={text:h,creatorId:a.uid,createdAt:Object(g.i)()},e.next=9,Object(g.a)(Object(g.b)(x,"profile"),r);case 9:return e.next=11,Object(g.j)(Object(g.b)(x,"profile"),{text:h});case 11:v(h);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(u),c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:y,className:"profileForm"},c.a.createElement("input",{onChange:function(e){var t=e.target.value;v(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:h,required:!0,className:"formInput"}),c.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),c.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){E.signOut(),n.push("/")}},"Log Out"))},A=a(54);var q=function(e){var t=e.userObj;return c.a.createElement("nav",null,c.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},c.a.createElement("li",null,c.a.createElement(u.b,{to:"/",style:{marginRight:10}},c.a.createElement(N.a,{icon:A.a,color:"#04AAFF",size:"2x"}))),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},c.a.createElement(N.a,{icon:S.e,color:"#04AAFF",size:"2x"}),c.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},D=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return c.a.createElement(u.a,{basename:"/react-twitter"},c.a.createElement(c.a.Fragment,null),a&&c.a.createElement(q,{userObj:n}),c.a.createElement(s.c,null,c.a.createElement(c.a.Fragment,null,a?c.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(U,{userObj:n})),c.a.createElement(s.a,{exact:!0,path:"/profile"},c.a.createElement(_,{userObj:n,refreshUser:t}))):c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(j,null)))))};var B,L=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(null),o=Object(i.a)(l,2),u=o[0],s=o[1];return Object(r.useEffect)((function(){w.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(e){return Object(p.g)(e,{displayName:e.displayName})}}:null),n(!0)}))}),[]),c.a.createElement(c.a.Fragment,null,a?c.a.createElement(D,{refreshUser:function(){var e=w.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(e){return Object(p.g)(e,{displayName:e.displayName})}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing...",c.a.createElement("footer",null,"\xa9 ",(new Date).getFullYear()," Nwitter"))},z=a(55);a(75);console.log(y);var P=Object(z.a)(B||(B=Object(n.a)(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\n/* body {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:black;\n  line-height: 1.2;\n  background-color: whitesmoke;\n} */\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null),c.a.createElement(L,null)),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.a15c40fa.chunk.js.map