"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[801],{801:function(t,n,e){e.r(n),e.d(n,{default:function(){return N}});var a=e(439),r=e(791),c="ContactForm_contactForm__bNqot",s="ContactForm_contactFormBtn__1vy6T",o="ContactForm_contactFormInput__Q35jK",i=e(434),l=e(634),u=e(184),m=function(){var t=(0,r.useState)(""),n=(0,a.Z)(t,2),e=n[0],m=n[1],_=(0,r.useState)(""),d=(0,a.Z)(_,2),f=d[0],h=d[1],p=(0,i.v9)((function(t){return t.contacts.contacts})),b=(0,i.I0)(),v=function(t){var n=t.currentTarget,e=n.name,a=n.value;"name"===e?m(a):"number"===e&&h(a)};return(0,u.jsxs)("form",{className:c,onSubmit:function(t){t.preventDefault(),console.log(e,f),function(t,n){var e=p.find((function(n){return t===n.name}));e?alert("".concat(e.name," is already in contacts")):b((0,l.uK)({name:t,number:n}))}(e,f),m(""),h("")},children:[(0,u.jsxs)("label",{children:["Name"," ",(0,u.jsx)("input",{className:o,value:e,onChange:v,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{children:["Number"," ",(0,u.jsx)("input",{className:o,value:f,onChange:v,type:"tel",name:"number",placeholder:"Phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{type:"submit",className:s,children:"Add contact"})]})},_="ContactList_contactList__UFVCg",d="ContactList_contactListItem__3th7-",f="ContactList_contactListBtn__iwQAv",h="ContactList_ContactListText__Fqzb4",p=function(){var t=(0,i.v9)((function(t){return t.contacts.contacts})),n=(0,i.v9)((function(t){return t.filter})),e=(0,i.I0)(),a=function(t){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}(t);return(0,u.jsx)("ul",{className:_,children:a.map((function(t){return(0,u.jsxs)("li",{className:d,children:[(0,u.jsxs)("p",{className:h,children:[t.name,": ",t.number]}),(0,u.jsx)("button",{className:f,type:"button",onClick:function(){return n=t.id,void e((0,l.GK)(n));var n},children:"Delete"})]},t.id)}))})},b="Filter_filterInput__1Cysk",v="Filter_filter__label__ttfPR",x=e(307),C=function(){var t=(0,i.v9)((function(t){return t.filter})),n=(0,i.I0)();return(0,u.jsxs)("label",{className:v,children:["Find contacts by name"," ",(0,u.jsx)("input",{className:b,type:"text",value:t,onChange:function(t){n((0,x.T)(t.currentTarget.value))}})," "]})},j={container__title:"App_container__title__pDBfu",container__loading:"App_container__loading__cOlhg"},N=function(){var t=(0,i.I0)(),n=(0,i.v9)((function(t){return t.contacts.isLoading})),e=(0,i.v9)((function(t){return t.contacts.error}));return(0,r.useEffect)((function(){t((0,l.yF)())}),[t]),(0,u.jsxs)("div",{className:j.container,children:[(0,u.jsx)("h2",{className:j.container__title,children:"Phonebook"}),(0,u.jsx)(m,{}),(0,u.jsx)("h2",{className:j.container__title,children:"Contacts"}),(0,u.jsx)(C,{}),n&&!e&&(0,u.jsx)("b",{className:j.container__loading,children:" Loading your contacts..."}),(0,u.jsx)(p,{})]})}}}]);
//# sourceMappingURL=801.f10d2b15.chunk.js.map