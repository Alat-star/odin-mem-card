(this["webpackJsonpodin-mem-card"]=this["webpackJsonpodin-mem-card"]||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(26),s=c.n(r),i=c(18),l=c(8),d=c(17),j=c(3),o=c(9),b=c(12),m=c(11),u=c(14),h=c(1);var O=function(e){var t=e.count,c=e.newMedal,n=e.bestScore;return Object(h.jsxs)("div",{className:"score-div",children:[Object(h.jsx)("h2",{style:{color:"#fefefe"},className:"score-header",children:"Score Board"}),Object(h.jsxs)("div",{className:"score-board",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Best Score:"}),Object(h.jsx)("p",{children:Object(h.jsx)("i",{children:n})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Player Score:"}),Object(h.jsx)("p",{children:Object(h.jsx)("i",{children:t})})]}),Object(h.jsx)("div",{className:"medal-div",children:c})]})]})},f=c(21),x=c.n(f),v=c(27),p=c(28),g=c.n(p);var y=function(e){for(var t=e.increment,c=e.decrement,a=e.medal,r=[],s=0;s<100;s++){var d=Math.floor(10*Math.random());r.includes(d)||r.length<=9&&r.push(d)}var j=Object(n.useState)(r),o=Object(l.a)(j,2),b=(o[0],o[1],Object(n.useState)("")),m=Object(l.a)(b,2),u=(m[0],m[1]),O=Object(n.useState)([]),f=Object(l.a)(O,2),p=f[0],y=f[1],S=Object(n.useState)([]),N=Object(l.a)(S,2),M=N[0],w=N[1],k=Object(n.useState)([]),C=Object(l.a)(k,2),G=C[0],z=C[1];Object(n.useEffect)((function(){(function(){var e=Object(v.a)(x.a.mark((function e(){var t,c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.giphy.com/v1/gifs/trending?api_key=e5zaQR8aSiKeUbQ07wbaLq0PiiATCmyS",{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=[],c.data.map((function(e){return n.push(e.images.original.url)})),y(n),u(c.data[0].images.original.url);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var A=function(){for(var e=[],t=0;t<=20;t++){var c=Math.floor(50*Math.random());if(!e.includes(p[c])){if(e.length>=15)break;e.push(p[c])}}return w(e),e};Object(n.useEffect)((function(){A()}),[p]);var E=function(e){a();var n=e.target.id;G.includes(e.target.id)?(c(),z(null),console.log(G)):t();a(),z([].concat(Object(i.a)(G),[n]));for(var r=[],s=A(),l=0;l<=15;l++){var d=Math.floor(15*Math.random());if(!r.includes(s[d])){if(r.length>=15)break;r.push(s[d])}}return r},B=M.map((function(e){var t=g()();return Object(h.jsx)("div",{onClick:E,className:"img-div",value:e,id:t,children:Object(h.jsx)("img",{id:e,src:e,alt:"pic"})},t)}));return Object(h.jsx)("div",{className:"game-div",children:B})},S=c.p+"static/media/ALAT.cf138455.png";var N=function(){return Object(h.jsxs)("div",{className:"header",style:{backgroundColor:"rgba(37,37,37,.1)"},children:[Object(h.jsx)("div",{className:"logo-div",children:Object(h.jsx)("img",{src:S,alt:"logo"})}),Object(h.jsx)("h1",{children:"giphyMemGame"})]})};function M(e){e.startGame;return Object(h.jsxs)("div",{style:{display:"grid",gridGap:"20px",justifyContent:"center",alignItems:"center"},children:[Object(h.jsxs)("div",{style:{display:"grid",justifyContent:"center"},className:"home-text-div",children:[Object(h.jsx)("h3",{style:{textAlign:"center",color:"#fefefe"},children:"Welcome to memGame"}),Object(h.jsxs)("p",{children:["Simple rule tho, but hard to live by with time. ",Object(h.jsx)("em",{children:"!!!Never click an image twice."})]})]}),Object(h.jsx)("div",{style:{paddingLeft:"20px"},className:"home-img-div",children:Object(h.jsx)("img",{src:"https://miro.medium.com/max/550/0*GJ1K5CSaIgHc560m.gif",alt:"giphy"})}),Object(h.jsx)("button",{style:{color:"#fefefe",fontSize:"3.5vmin",paddingTop:"10px"},children:Object(h.jsx)(d.b,{to:"/gamep",style:{color:"#fefefe",textDecoration:"none"},children:"Play"})})]})}var w=function(e){var t=e.count,c=e.newMedal,n=e.bestScore,a=e.increment,r=e.decrement,s=e.medal;return Object(h.jsxs)("div",{style:{display:"grid",gridGap:"10px"},children:[Object(h.jsx)(O,{count:t,newMedal:c,bestScore:n}),Object(h.jsx)(y,{decrement:r,medal:s,increment:a})]})};c(42);o.b.add(b.e,m.e,m.d,m.a,m.b,m.f,m.c,b.a,b.d,b.c,b.b);var k=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),s=Object(l.a)(r,2),o=s[0],b=s[1],m=Object(n.useState)([]),O=Object(l.a)(m,2),f=O[0],x=O[1];Object(n.useEffect)((function(){v(),x([].concat(Object(i.a)(f),[c])),console.log(o)}),[c]);var v=function(){for(var e=0,t=0;t<f.length;t++)f[t]>e&&(e=f[t]);return b(e),e},p=Object(n.useState)(""),g=Object(l.a)(p,2),y=g[0],S=g[1],k=function(){c<10&&S(null),c>=10&&c<20&&S(Object(h.jsxs)("div",{className:"medal",style:{color:""},children:[Object(h.jsx)("p",{children:"Bronze "}),Object(h.jsx)("div",{className:"icon-div",style:{color:"#CD7F32"},children:Object(h.jsx)(u.a,{size:"2x",icon:["fas","medal"]})})]})),c>=20&&c<30&&S(Object(h.jsxs)("div",{className:"medal",style:{color:"silver"},children:[Object(h.jsx)("p",{children:"Silver "}),Object(h.jsx)("div",{className:"icon-div",children:Object(h.jsx)(u.a,{size:"2x",icon:["fas","medal"]})})]})),c>=60&&c<100&&S(Object(h.jsxs)("div",{className:"medal",style:{color:"#FFD700"},children:[Object(h.jsx)("p",{children:"Gold "}),Object(h.jsx)("div",{className:"icon-div",children:Object(h.jsx)(u.a,{size:"2x",icon:["fas","medal"]})})]}))};return Object(n.useEffect)((function(){k()}),[c]),Object(h.jsx)(d.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(N,{}),Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/",component:M,exact:!0}),Object(h.jsx)(j.a,{path:"/gamep",exact:!0,children:Object(h.jsx)(w,{count:c,newMedal:y,bestScore:o,decrement:function(){c&&k(),a((function(e){return e-5}))},medal:k,increment:function(){c&&k(),a((function(e){return e+2}))}})})]})]})})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.dafaa905.chunk.js.map