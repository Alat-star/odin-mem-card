(this["webpackJsonpodin-mem-card"]=this["webpackJsonpodin-mem-card"]||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(26),i=c.n(r),s=c(18),l=c(8),d=c(17),j=c(3),o=c(9),b=c(12),u=c(11),m=c(14),O=c(1);var h=function(e){var t=e.count,c=e.newMedal,n=e.bestScore;return Object(O.jsxs)("div",{className:"score-div",children:[Object(O.jsx)("h2",{style:{color:"#fefefe"},className:"score-header",children:"Score Board"}),Object(O.jsxs)("div",{className:"score-board",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Best Score:"}),Object(O.jsx)("p",{children:Object(O.jsx)("i",{children:n})})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Player Score:"}),Object(O.jsx)("p",{children:Object(O.jsx)("i",{children:t})})]}),Object(O.jsx)("div",{className:"medal-div",children:c})]})]})},f=c(21),x=c.n(f),v=c(27),p=c(28),g=c.n(p);var y=function(e){for(var t=e.increment,c=e.decrement,a=e.medal,r=[],i=0;i<100;i++){var d=Math.floor(10*Math.random());r.includes(d)||r.length<=9&&r.push(d)}var j=Object(n.useState)(r),o=Object(l.a)(j,2),b=(o[0],o[1],Object(n.useState)("")),u=Object(l.a)(b,2),m=(u[0],u[1]),h=Object(n.useState)([]),f=Object(l.a)(h,2),p=f[0],y=f[1],S=Object(n.useState)([]),N=Object(l.a)(S,2),M=N[0],w=N[1],k=Object(n.useState)([]),G=Object(l.a)(k,2),z=G[0],C=G[1];Object(n.useEffect)((function(){(function(){var e=Object(v.a)(x.a.mark((function e(){var t,c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.giphy.com/v1/gifs/trending?api_key=e5zaQR8aSiKeUbQ07wbaLq0PiiATCmyS",{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=[],c.data.map((function(e){return n.push(e.images.original.url)})),y(n),m(c.data[0].images.original.url);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var A=function(){for(var e=[],t=0;t<=20;t++){var c=Math.floor(50*Math.random());if(!e.includes(p[c])){if(e.length>=15)break;e.push(p[c])}}return w(e),e};Object(n.useEffect)((function(){A()}),[p]);var E=function(e){a();var n=e.target.id;z.includes(e.target.id)?(c(),C(null),console.log(z)):t();a(),C([].concat(Object(s.a)(z),[n]));for(var r=[],i=A(),l=0;l<=15;l++){var d=Math.floor(15*Math.random());if(!r.includes(i[d])){if(r.length>=15)break;r.push(i[d])}}return r},B=M.map((function(e){var t=g()();return Object(O.jsx)("div",{onClick:E,className:"img-div",value:e,id:t,children:Object(O.jsx)("img",{id:e,src:e,alt:"pic"})},t)}));return Object(O.jsx)("div",{className:"game-div",children:B})},S=c.p+"static/media/ALAT.cf138455.png";var N=function(){return Object(O.jsxs)("div",{className:"header",style:{backgroundColor:"rgba(37,37,37,.1)"},children:[Object(O.jsx)("div",{className:"logo-div",children:Object(O.jsx)("img",{src:S,alt:"logo"})}),Object(O.jsx)("h1",{children:"giphyMemGame"})]})};function M(e){e.startGame;return Object(O.jsxs)("div",{style:{display:"grid",gridGap:"20px",justifyContent:"center",alignItems:"center"},children:[Object(O.jsxs)("div",{style:{display:"grid"},children:[Object(O.jsx)("h3",{style:{textAlign:"center",color:"#fefefe"},children:"Welcome to memGame"}),Object(O.jsxs)("p",{children:["Simple rule tho, but hard to live by with time. ",Object(O.jsx)("em",{children:"!!!Never click an image twice."})]})]}),Object(O.jsx)("div",{style:{paddingLeft:"20px"},children:Object(O.jsx)("img",{src:"https://miro.medium.com/max/550/0*GJ1K5CSaIgHc560m.gif",alt:"giphy"})}),Object(O.jsx)("button",{style:{color:"#fefefe",fontSize:"3.5vmin",paddingTop:"10px"},children:Object(O.jsx)(d.b,{to:"/gamep",style:{color:"#fefefe",textDecoration:"none"},children:"Play"})})]})}var w=function(e){var t=e.count,c=e.newMedal,n=e.bestScore,a=e.increment,r=e.decrement,i=e.medal;return Object(O.jsxs)("div",{style:{display:"grid",gridGap:"10px"},children:[Object(O.jsx)(h,{count:t,newMedal:c,bestScore:n}),Object(O.jsx)(y,{decrement:r,medal:i,increment:a})]})};c(42);o.b.add(b.e,u.e,u.d,u.a,u.b,u.f,u.c,b.a,b.d,b.c,b.b);var k=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),i=Object(l.a)(r,2),o=i[0],b=i[1],u=Object(n.useState)([]),h=Object(l.a)(u,2),f=h[0],x=h[1];Object(n.useEffect)((function(){v(),x([].concat(Object(s.a)(f),[c])),console.log(o)}),[c]);var v=function(){for(var e=0,t=0;t<f.length;t++)f[t]>e&&(e=f[t]);return b(e),e},p=Object(n.useState)(""),g=Object(l.a)(p,2),y=g[0],S=g[1],k=function(){c<10&&S(null),c>=10&&c<20&&S(Object(O.jsxs)("div",{className:"medal",style:{color:""},children:[Object(O.jsx)("p",{children:"Bronze "}),Object(O.jsx)("div",{className:"icon-div",style:{color:"#CD7F32"},children:Object(O.jsx)(m.a,{size:"2x",icon:["fas","medal"]})})]})),c>=20&&c<30&&S(Object(O.jsxs)("div",{className:"medal",style:{color:"silver"},children:[Object(O.jsx)("p",{children:"Silver "}),Object(O.jsx)("div",{className:"icon-div",children:Object(O.jsx)(m.a,{size:"2x",icon:["fas","medal"]})})]})),c>=60&&c<100&&S(Object(O.jsxs)("div",{className:"medal",style:{color:"#FFD700"},children:[Object(O.jsx)("p",{children:"Gold "}),Object(O.jsx)("div",{className:"icon-div",children:Object(O.jsx)(m.a,{size:"2x",icon:["fas","medal"]})})]}))};return Object(n.useEffect)((function(){k()}),[c]),Object(O.jsx)(d.a,{children:Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(N,{}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/",component:M,exact:!0}),Object(O.jsx)(j.a,{path:"/gamep",exact:!0,children:Object(O.jsx)(w,{count:c,newMedal:y,bestScore:o,decrement:function(){c&&k(),a((function(e){return e-5}))},medal:k,increment:function(){c&&k(),a((function(e){return e+2}))}})})]})]})})})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.e02002af.chunk.js.map