(this["webpackJsonppractical-react"]=this["webpackJsonppractical-react"]||[]).push([[0],{20:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),s=n(14),i=n.n(s),r=(n(20),n(10)),o=(n.p,n(15).a.initializeApp({apiKey:"AIzaSyBXvehHFTpyMYX6Nwux4nwB_ngk-SCE6vI",authDomain:"se-project-5deee.firebaseapp.com",projectId:"se-project-5deee",storageBucket:"se-project-5deee.appspot.com",messagingSenderId:"61955322519",appId:"1:61955322519:web:c683df4e36a3cd60ae2fd2"})),u=n(3),d=function(e){var t=e.email,n=e.setEmail,a=e.password,c=e.setPassword,s=e.handleLogin,i=e.handleSignup,r=e.hasAccount,o=e.setHasAccount,d=e.emailError,l=e.passwordError;return Object(u.jsx)("section",{className:"login",children:Object(u.jsxs)("div",{className:"loginContainer",children:[Object(u.jsx)("body",{children:"WeCook"}),Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:t,onChange:function(e){return n(e.target.value)}}),Object(u.jsx)("p",{className:"errorMsg",children:d}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",required:!0,value:a,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("p",{className:"errorMsg",children:l}),Object(u.jsx)("div",{className:"btnContainer",children:r?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:s,children:"Sign in"}),Object(u.jsxs)("p",{children:["Don't have an account ?",Object(u.jsx)("span",{onClick:function(){return o(!r)},children:"Sign up"})]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:i,children:"Sign up"}),Object(u.jsxs)("p",{children:["Have an account ?",Object(u.jsx)("span",{onClick:function(){return o(!r)},children:"Sign in"})]})]})})]})})},l=function(e){var t=e.handleLogout;return Object(u.jsx)("section",{className:"HomePage",children:Object(u.jsxs)("nav",{children:[Object(u.jsx)("h2",{children:"Welcome"}),Object(u.jsx)("button",{onClick:t,children:"Logout"})]})})},j=(n(25),function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),j=i[0],h=i[1],b=Object(a.useState)(""),p=Object(r.a)(b,2),O=p[0],g=p[1],m=Object(a.useState)(""),x=Object(r.a)(m,2),f=x[0],w=x[1],v=Object(a.useState)(""),S=Object(r.a)(v,2),C=S[0],k=S[1],E=Object(a.useState)(!1),A=Object(r.a)(E,2),y=A[0],F=A[1],I=function(){w(""),k("")},N=function(){o.auth().onAuthStateChanged((function(e){e?(h(""),g(""),c(e)):c("")}))};return Object(a.useEffect)((function(){N()}),[]),Object(u.jsx)("div",{className:"App",children:n?Object(u.jsx)(l,{handleLogout:function(){o.auth().signOut()}}):Object(u.jsx)(d,{email:j,setEmail:h,password:O,setPassword:g,handleLogin:function(){I(),o.auth().signInWithEmailAndPassword(j,O).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":w(e.message);break;case"auth/wrong-password":k(e.message)}}))},handleSignup:function(){I(),o.auth().createUserWithEmailAndPassword(j,O).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":w(e.message);break;case"auth/weak-password":k(e.message)}}))},hasAccount:y,setHasAccount:F,emailError:f,passwordError:C})})}),h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),h()}},[[26,1,2]]]);
//# sourceMappingURL=main.04464f2a.chunk.js.map