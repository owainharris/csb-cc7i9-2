(this["webpackJsonpmaterial-ui-date-picker-w-inititial-datetime"]=this["webpackJsonpmaterial-ui-date-picker-w-inititial-datetime"]||[]).push([[0],{124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),o=a.n(i),c=a(86),s=a(16),l=a(76),d=a.n(l),m=a(84),j=a(45),b=a(90),u=a(88),p=a(21),h=a(176),O=a(166),g=a(168),x=a(169),f=a(171),w=a(170),k=a(93),C=a(179),v=a(173),y=a(89),S=a(167),B=a(180),D=a(178),T=a(9);function W(e){return Object(T.jsx)(D.a,Object(b.a)({elevation:6,variant:"filled"},e))}var F=Object(O.a)((function(e){return{root:{minWidth:75,flexGrow:1,width:"35em"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},paper:{height:140,width:100,left:"25em"},title:{fontSize:14},pos:{marginTop:12},control:{padding:e.spacing(0)}}}));function A(){var e=[{id:"1",name:"DDB",label:"DDB"},{id:"180",name:"OPRG",label:"OPRG"},{id:"179",name:"Eigen Fabrikaat",label:"Eigen Fabrikaat"}],t=Object(n.useState)(new Date),a=Object(j.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)([]),s=Object(j.a)(c,2),l=s[0],b=s[1],O=Object(n.useState)(!1),D=Object(j.a)(O,2),A=(D[0],D[1]),M=Object(n.useState)(!1),N=Object(j.a)(M,2),R=N[0],L=N[1],P=Object(n.useState)(new Array(e.length).fill(!1)),E=Object(j.a)(P,2),I=E[0],q=E[1],J=r.a.useState(!1),z=Object(j.a)(J,2),G=z[0],H=z[1],Y=function(e,t){"clickaway"!==t&&H(!1)},Q=F(),U=function(){var e=Object(m.a)(d.a.mark((function e(t){var a,n,r,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("1"),!1===R&&L(!0),console.log("2"),(a=new Headers).append("Content-Type","application/json"),a.append("Access-Control-Allow-Credentials","true"),a.append("Access-Control-Allow-Origin","*"),n=JSON.stringify({Parameters:{1:Object(y.a)(i,"dd/MM/yyyy"),2:l.toString()}}),console.log("RaW"+n),r={method:"POST",headers:a,body:n,redirect:"follow"},e.next=12,fetch("https://immense-shore-64867.herokuapp.com/https://ddb-databoard-functions-test.azurewebsites.net/api/ddb-databoard-downloader-test?code=RY8iEYBB%2Fwap%2FAMsaFikiRpLwsvzc%2FJM6BceWqhI4nwgPkQ7BslerA%3D%3D",r);case 12:return o=e.sent,e.next=15,o.data;case 15:return c=e.sent,e.next=18,c;case 18:console.log(c),L(!1),H(!0);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return onClickChangeDate=function(e){o(e),console.log("meow "+e)},onCheckBoxChange=function(e,t){var a=I.map((function(e,a){return a===t?!e:e}));q(a);var n=l.includes(e.target.value);A(!0),n?(A(!1),l.splice(l.indexOf(e.target.value),1)):l.push(e.target.value),b(l),console.log(l)},Object(T.jsxs)(n.Fragment,{children:[R&&Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{style:{marginTop:"2em",marginLeft:"2em"},children:"Running Export ..."}),Object(T.jsx)(S.a,{style:{marginTop:"4em",marginLeft:"7em"}})]}),!R&&Object(T.jsxs)(g.a,{className:Q.root,children:[Object(T.jsx)(x.a,{title:"HFM Databoards"}),Object(T.jsxs)(k.a,{className:Q.control,children:[Object(T.jsxs)(w.a,{container:!0,children:[Object(T.jsx)(w.a,{item:!0,children:Object(T.jsx)("h2",{children:"Date"})}),Object(T.jsx)(w.a,{item:!0,children:Object(T.jsx)(p.a,{utils:u.a,children:Object(T.jsx)(h.a,{autoOk:!0,orientation:"landscape",openTo:"date",value:i,format:"dd/MM/yyyy",onChange:onClickChangeDate,style:{marginTop:"1em",marginLeft:"1em"}})})})]}),Object(T.jsx)(w.a,{item:!0,children:Object(T.jsx)("h2",{children:"Companies"})}),Object(T.jsx)(w.a,{item:!0,children:e.map((function(e){return Object(T.jsx)(v.a,{control:Object(T.jsx)(C.a,{name:e.name,value:e.id,label:e.name,checked:I[e.index],onChange:onCheckBoxChange},e.id),label:e.name})}))}),Object(T.jsx)(w.a,{item:!0,style:{marginLeft:"13em"},children:Object(T.jsx)(f.a,{variant:"contained",color:"primary",style:{marginTop:"3em",marginLeft:"1em",marginBottom:"1em"},value:"React",onClick:U,children:"Submit"})})]})]}),G?Object(T.jsx)(B.a,{open:G,autoHideDuration:6e3,onClose:Y,children:Object(T.jsx)(W,{onClose:Y,severity:"success",children:"Databoards uploaded to storage!"})}):null]})}var M=a(175),N=a(177),R=a(54),L=a(174),P=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"#00b8d4"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),backgroundColor:"#00b8d4"},mainColor:{backgroundColor:"#00b8d4"},mainColorBd:{borderColor:"#00b8d4"}}}));function E(){var e=P();return Object(T.jsxs)(L.a,{component:"main",maxWidth:"xs",children:[Object(T.jsx)(M.a,{}),Object(T.jsxs)("div",{className:e.paper,children:[Object(T.jsx)(R.a,{component:"h1",variant:"h5",children:"WorkBook Sign in"}),Object(T.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(T.jsx)(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"WorkBook User Name",name:"email",autoComplete:"email",autoFocus:!0}),Object(T.jsx)(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"WorkBook Password",type:"password",id:"password",autoComplete:"current-password"}),Object(T.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){console.log("h"),window.location.href="https://cc7i9.csb.app/SimpleCard"},children:"Sign In"})]})]})]})}function I(){return Object(T.jsxs)(c.a,{children:[Object(T.jsx)(s.c,{children:Object(T.jsx)(s.a,{path:"/SignIn",children:Object(T.jsx)(E,{})})}),Object(T.jsx)(s.c,{children:Object(T.jsx)(s.a,{path:"/SimpleCard",children:Object(T.jsx)(A,{})})})]})}o.a.render(Object(T.jsx)(E,{}),document.querySelector("#root")),o.a.render(Object(T.jsx)(I,{}),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.2766fcc2.chunk.js.map