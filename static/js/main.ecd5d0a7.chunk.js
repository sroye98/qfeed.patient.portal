(this["webpackJsonpqfeed.patient.portal"]=this["webpackJsonpqfeed.patient.portal"]||[]).push([[0],{132:function(e,t,c){},208:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(22),r=c.n(s),a=(c(131),c(132),c(65)),j=c(217),o=c(6),l=function(e){return Object(o.jsx)("div",{className:"logo"})},d=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{children:"\xa9 2021 All Rights Reserved."})})},b=c(20),u=c(123),h=c(214),x=c(122),O=c(211),p=c(210),m=c(219),y=c.p+"static/media/recording-screen.24d7ece6.png",g=function(e){return Object(o.jsxs)("div",{style:{marginBottom:"100px"},children:[Object(o.jsx)("h2",{children:"How was your experience with Dr. Dewan?"}),Object(o.jsx)(O.a,{width:250,height:375,src:y}),Object(o.jsx)(p.a,{}),Object(o.jsxs)(m.b,{children:[Object(o.jsx)(x.a,{type:"primary",children:"Record"}),Object(o.jsx)(x.a,{type:"ghost",children:"Stop"})]})]})},f=function(e){return Object(o.jsxs)("div",{style:{marginBottom:"100px"},children:[Object(o.jsx)("h2",{children:"Was your surgery a success?"}),Object(o.jsx)(O.a,{width:250,height:375,src:y}),Object(o.jsx)(p.a,{}),Object(o.jsxs)(m.b,{children:[Object(o.jsx)(x.a,{type:"primary",children:"Record"}),Object(o.jsx)(x.a,{type:"ghost",children:"Stop"})]})]})},v=function(e){return Object(o.jsxs)("div",{style:{marginBottom:"100px"},children:[Object(o.jsx)("h2",{children:"How has your recovery been?"}),Object(o.jsx)(O.a,{width:250,height:375,src:y}),Object(o.jsx)(p.a,{}),Object(o.jsxs)(m.b,{children:[Object(o.jsx)(x.a,{type:"primary",children:"Record"}),Object(o.jsx)(x.a,{type:"ghost",children:"Stop"})]})]})},w=c(213),S=c(212),H=c(218),F=w.a.Title,k=function(e){return Object(o.jsxs)("div",{style:{marginLeft:"25%",marginRight:"20px",marginBottom:"100px",textAlign:"left"},children:[Object(o.jsx)(F,{level:2,children:"Do you give us consent to ..."}),Object(o.jsxs)(S.a,{children:[Object(o.jsx)("div",{children:Object(o.jsx)(H.a,{children:Object(o.jsx)(F,{level:3,children:"use your photo on our Social Media Platforms?"})})}),Object(o.jsx)("div",{children:Object(o.jsx)(H.a,{children:Object(o.jsx)(F,{level:3,children:"use your name on our Social Media Platforms?"})})}),Object(o.jsx)("div",{children:Object(o.jsx)(H.a,{children:Object(o.jsx)(F,{level:3,children:"use your video on our Social Media Platforms?"})})}),Object(o.jsx)("div",{children:Object(o.jsx)(H.a,{children:Object(o.jsx)(F,{level:3,children:"tag you on our Social Media Platforms?"})})})]})]})},C=c(216),P=c(215),T=function(e){return Object(o.jsxs)("div",{style:{marginBottom:"100px"},children:[Object(o.jsx)(C.a,{title:"Are you satisfied with your testimonial?",subTitle:"Please enter your social media handles to be tagged on the post and increase your brand."}),Object(o.jsxs)(S.a,{layout:"vertical",style:{marginLeft:"25%",marginRight:"25%"},children:[Object(o.jsx)(S.a.Item,{label:"Facebook Handle",tooltip:"Enter your Facebook Handle",children:Object(o.jsx)(P.a,{placeholder:"Facebook Handle"})}),Object(o.jsx)(S.a.Item,{label:"Instagram Handle",tooltip:"Enter your Instagram Handle",children:Object(o.jsx)(P.a,{placeholder:"Instagram Handle"})}),Object(o.jsx)(S.a.Item,{label:"Twitter Handle",tooltip:"Enter your Twitter Handle",children:Object(o.jsx)(P.a,{placeholder:"Twitter Handle"})})]})]})},B=h.a.Step,I=[{title:"Question #1"},{title:"Question #2"},{title:"Question #3"},{title:"Consent"},{title:"Submission"}],R=function(e){var t=Object(n.useState)(0),c=Object(u.a)(t,2),i=c[0],s=c[1],r=Object(b.f)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h.a,{current:i,children:I.map((function(e){return Object(o.jsx)(B,{title:e.title},e.title)}))}),Object(o.jsx)("div",{className:"steps-content",children:function(){switch(I[i].title){case"Question #1":return Object(o.jsx)(g,{});case"Question #2":return Object(o.jsx)(f,{});case"Question #3":return Object(o.jsx)(v,{});case"Consent":return Object(o.jsx)(k,{});case"Submission":return Object(o.jsx)(T,{});default:return Object(o.jsx)(o.Fragment,{})}}()}),Object(o.jsxs)("div",{className:"steps-action",children:[i<I.length-1&&Object(o.jsx)(x.a,{type:"primary",onClick:function(){s(i+1)},children:"Next"}),i===I.length-1&&Object(o.jsx)(x.a,{type:"primary",onClick:function(){r.push("/confirmation")},children:"Yes"}),i>0&&Object(o.jsx)(x.a,{style:{margin:"0 8px"},onClick:function(){s(i-1)},children:"Previous"})]})]})},Q=function(e){return Object(o.jsx)(C.a,{status:"success",title:"You have successfully submitted your testimonial",subTitle:"Keep a watch out on your social media for your mention on <Practice Name>"})},M=function(e){var t=Object(b.f)();return Object(o.jsx)(C.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:Object(o.jsx)(x.a,{type:"primary",onClick:function(){t.push("/")},children:"Back Home"})})},N=function(e){return Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{exact:!0,path:"/",component:R}),Object(o.jsx)(b.a,{exact:!0,path:"/confirmation",component:Q}),Object(o.jsx)(b.a,{path:"*",component:M})]})},D=j.a.Header,E=j.a.Footer,L=j.a.Content,A=function(e){return Object(o.jsxs)(j.a,{children:[Object(o.jsx)(D,{children:Object(o.jsx)(l,{})}),Object(o.jsx)(L,{style:{margin:"20px"},children:Object(o.jsx)(a.a,{children:Object(o.jsx)(N,{})})}),Object(o.jsx)(E,{children:Object(o.jsx)(d,{})})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,220)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(A,{})}),document.getElementById("root")),q()}},[[208,1,2]]]);
//# sourceMappingURL=main.ecd5d0a7.chunk.js.map