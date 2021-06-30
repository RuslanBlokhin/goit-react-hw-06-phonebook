(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{23:function(t,e,n){t.exports={contactItem:"ContactsListItem_contactItem__ynUHM",buttonDel:"ContactsListItem_buttonDel__3u4FY"}},28:function(t,e,n){t.exports={container:"Container_container__tKtss"}},29:function(t,e,n){t.exports={contactList:"ContactsList_contactList__3svZr"}},38:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),o=(n(38),n(33)),s=n(16),u=n(17),d=n(20),b=n(18),l=n(27),j=n(10),m=n(11),h=n.n(m),p=n(3),O=n.n(p),f=n(9),C=n(7),v="app/addContact",x="app/deleteContact",g="app/changeFilter",y={addContact:Object(C.b)(v,(function(t){var e=t.name,n=t.number;return{payload:{id:h.a.generate(),name:e,number:n}}})),deleteContact:Object(C.b)(x),filterUpdate:Object(C.b)(g)},I=n(1),_={name:"",number:""},F=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=h.a.generate(),t.numberInputId=h.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(j.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();t.props.onSubmit(Object(l.a)({},t.state)),t.reset()},t.reset=function(){t.setState(_)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(I.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(I.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(I.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange,id:this.nameInputId})]}),Object(I.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(I.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleChange,id:this.numberInputId})]}),Object(I.jsx)("button",{className:R.button,type:"submit",children:"Add contact"})]})}}]),n}(r.a.Component);F.PropsType={onSubmit:O.a.func.isRequired};var R=Object(f.b)((function(t){return{items:t.contacts.ContactsReducer}}),(function(t){return{onSubmit:function(e){var n=e.name,a=e.number;return t(y.addContact({name:n,number:a}))}}}))(F),k=Object(f.b)((function(t){return{value:t.contacts.FilterReducer}}),(function(t){return{onChange:function(e){return t(y.filterUpdate(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h3",{children:"Find contacts by name"}),Object(I.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})})),S=n(28),A=n.n(S),D=function(t){var e=t.children;return Object(I.jsx)("div",{className:A.a.container,children:e})},L=n(29),N=n.n(L),q=function(t){var e=t.children;return Object(I.jsx)("ul",{className:N.a.contactList,children:e})};q.prototype={children:O.a.node};var w=q,z=n(23),U=n.n(z),Z=function(t){var e=t.onDeleteContact,n=t.contacts;return Object(I.jsx)(I.Fragment,{children:n.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(I.jsxs)("li",{className:U.a.contactItem,children:[a,": ",r,Object(I.jsx)("button",{className:U.a.buttonDel,type:"submit",onClick:function(){return e(n)},children:"Delete"})]},n)}))})};Z.prototype={contacts:O.a.arrayOf(O.a.shape({id:O.a.string.isRequired,name:O.a.string.isRequired,number:O.a.string.isRequired})),onDeleteContact:O.a.func};var B,J=function(t,e){var n=e.toLowerCase();return e?t.filter((function(t){return t.name.toLowerCase().includes(n)})):t},M=Object(f.b)((function(t){return{contacts:J(t.contacts.ContactsReducer,t.contacts.FilterReducer)}}),(function(t){return{onDeleteContact:function(e){return t(y.deleteContact(e))}}}))(Z),T=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(I.jsxs)(D,{children:[Object(I.jsx)("h1",{children:"PhoneBook"}),Object(I.jsx)(R,{}),Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:"Contacts"}),Object(I.jsx)(k,{}),Object(I.jsx)(w,{children:Object(I.jsx)(M,{})})]})]})}}]),n}(r.a.Component),P=n(19),E=n(4),H=Object(C.c)([],(B={},Object(j.a)(B,y.addContact,(function(t,e){var n=e.payload;return[].concat(Object(P.a)(t),[n])})),Object(j.a)(B,y.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),B)),K=Object(C.c)("",Object(j.a)({},y.filterUpdate,(function(t,e){return e.payload}))),Y=Object(E.b)({ContactsReducer:H,FilterReducer:K}),$=n(30),G=n.n($),Q=n(8),V=n(31),W=n.n(V),X=[].concat(Object(P.a)(Object(C.d)({serializableCheck:{ignoredActions:[Q.a,Q.f,Q.b,Q.c,Q.d,Q.e]}})),[G.a]),tt={key:"contacts",storage:W.a,blacklist:["filter"]},et=Object(C.a)({reducer:{contacts:Object(Q.g)(tt,Y)},middleware:X,devToolss:!1}),nt={store:et,persistor:Object(Q.h)(et)},at=n(32);n(53);i.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(f.a,{store:nt.store,children:Object(I.jsx)(at.a,{loading:null,persistor:nt.persistor,children:Object(I.jsx)(o.a,{children:Object(I.jsx)(T,{})})})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.25c47b6c.chunk.js.map