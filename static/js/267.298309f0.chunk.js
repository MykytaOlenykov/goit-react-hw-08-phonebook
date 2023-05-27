"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[267],{7267:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var o,r,i,a,c,s,d,l,p,u,h,m,x=t(1413),f=t(2791),g=t(5048),b=t(1134),w=t(5218),Z=t(4695),y=t(6727),k=t(7062),j=t(9273),v=t(6004),P=t(6009),_=t(4283),z=t(585),S=t(168),N=t(1087),T=t(6444),q=T.ZP.strong(o||(o=(0,S.Z)(["\n  display: block;\n  margin-bottom: 22px;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.4;\n  text-align: center;\n"]))),C=T.ZP.form(r||(r=(0,S.Z)(["\n  max-width: 452px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 28px 24px;\n  background-color: ",";\n  border-radius: 15px;\n  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.05);\n\n  @media screen and (min-width: ",") {\n    padding: 45px 51px;\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.breakpoint})),F=T.ZP.label(i||(i=(0,S.Z)(["\n  display: block;\n  margin-bottom: 24px;\n"]))),R=T.ZP.span(a||(a=(0,S.Z)(["\n  display: block;\n  margin-bottom: 5.5px;\n  font-size: 14px;\n  line-height: 1.4;\n"]))),Y=T.ZP.input(c||(c=(0,S.Z)(["\n  display: block;\n  padding: 15px 20px;\n  width: 100%;\n  font-size: 14px;\n  line-height: 1.4;\n  border: 1px solid ",";\n  border-radius: 15px;\n  outline: none;\n\n  &::placeholder {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.4;\n    color: ",";\n  }\n\n  &:focus {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.colors.inputBorder}),(function(n){return n.theme.colors.secondaryText}),(function(n){return n.theme.colors.accent})),A=T.ZP.button(s||(s=(0,S.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 22px;\n  padding: 14px;\n  width: 100%;\n  font-weight: 700;\n  font-size: 10px;\n  line-height: 1.5;\n  text-transform: uppercase;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 12px;\n  transition: background-color\n      ",",\n    color ",";\n  cursor: pointer;\n\n  &:hover:not(:disabled) {\n    color: ",";\n    background-color: ",";\n  }\n\n  &:disabled {\n    opacity: 0.8;\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){var e=n.theme;return"".concat(e.duration," ").concat(e.timingFunction)}),(function(n){var e=n.theme;return"".concat(e.duration," ").concat(e.timingFunction)}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.primary})),E=T.ZP.span(d||(d=(0,S.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.4;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.secondaryText})),I=(0,T.ZP)(N.rU)(l||(l=(0,S.Z)(["\n  position: relative;\n  text-decoration: none;\n  color: ",";\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 1.5px;\n    left: 0;\n    display: block;\n    height: 1px;\n    width: 100%;\n    background-color: ",";\n    opacity: 0;\n    transition: opacity\n      ",";\n  }\n\n  &:hover::after {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){var e=n.theme;return"".concat(e.duration," ").concat(e.timingFunction)})),V=T.ZP.span(p||(p=(0,S.Z)(["\n  padding: 2px;\n  font-size: 12px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.colors.errorText})),X=t(184),B=y.Ry().shape({name:y.Z_().matches(z._e.name,z.N3.name).required(),email:y.Z_().matches(z._e.email,z.N3.email).required(),password:y.Z_().matches(z._e.password,z.N3.password).required()}),L={name:"",email:"",password:""},U=function(){var n,e,t,o=(0,b.cI)({defaultValues:L,resolver:(0,Z.X)(B)}),r=o.register,i=o.handleSubmit,a=o.reset,c=o.formState.errors,s=(0,g.I0)(),d=(0,P.a)(),l=d.isLoading,p=d.error;(0,f.useEffect)((function(){p&&(w.Am.error("Something went wrong. There may already be a user with this email address."),s((0,k.fw)()))}),[p,s]);return(0,X.jsxs)(C,{autoComplete:"off",noValidate:!0,onSubmit:i((function(n){!function(n){var e=n.name,t=n.email,o=n.password,r=(0,_.P)(e);s((0,j.z2)({name:r,email:t,password:o})),a()}(n)})),children:[(0,X.jsx)(q,{children:"Register"}),(0,X.jsxs)(F,{children:[(0,X.jsx)(R,{children:"Name"}),(0,X.jsx)(Y,(0,x.Z)((0,x.Z)({},r("name")),{},{type:"text",placeholder:"Your full name"})),c.name&&(0,X.jsx)(V,{children:null===(n=c.name)||void 0===n?void 0:n.message})]}),(0,X.jsxs)(F,{children:[(0,X.jsx)(R,{children:"Email"}),(0,X.jsx)(Y,(0,x.Z)((0,x.Z)({},r("email")),{},{type:"email",placeholder:"Your email address"})),c.email&&(0,X.jsx)(V,{children:null===(e=c.email)||void 0===e?void 0:e.message})]}),(0,X.jsxs)(F,{children:[(0,X.jsx)(R,{children:"Password"}),(0,X.jsx)(Y,(0,x.Z)((0,x.Z)({},r("password")),{},{type:"password",placeholder:"Your password"})),c.password&&(0,X.jsx)(V,{children:null===(t=c.password)||void 0===t?void 0:t.message})]}),(0,X.jsx)(A,{type:"submit",disabled:l,children:l?(0,X.jsx)(v.a,{width:"15",height:"15",color:"#fff"}):"Sing up"}),(0,X.jsxs)(E,{children:["Already have an account?",(0,X.jsx)(I,{to:"/login",children:"Sign in"})]})]})},W=t(1942),D=t(4585),G=T.ZP.section(u||(u=(0,S.Z)(["\n  padding-top: 72px;\n  padding-left: 24px;\n  padding-right: 24px;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 12px;\n    left: 50%;\n    z-index: -1;\n    display: block;\n    width: calc(100% - 24px);\n    height: 400px;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;\n    border-radius: 15px;\n    transform: translateX(-50%);\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n      background-size: cover;\n      background-position: center;\n    }\n\n    @media screen and (min-width: ",") {\n      top: 24px;\n      width: calc(100% - 48px);\n    }\n  }\n"])),W,D,(function(n){return n.theme.breakpoint})),H=T.ZP.h1(h||(h=(0,S.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  margin: -1px;\n"]))),J=T.ZP.p(m||(m=(0,S.Z)(["\n  margin-bottom: 80px;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1.3;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.primary})),K=function(){return(0,X.jsxs)(G,{children:[(0,X.jsx)(H,{children:"Register form"}),(0,X.jsx)(J,{children:"Welcome!"}),(0,X.jsx)(U,{})]})}},4283:function(n,e,t){t.d(e,{P:function(){return o}});var o=function(n){return n.split(" ").reduce((function(n,e){var t=e.trim();return t?n+(t+" "):n}),"").trim()}},1942:function(n,e,t){n.exports=t.p+"static/media/background.96bc49b89cb75c9b2d86.jpg"},4585:function(n,e,t){n.exports=t.p+"static/media/background@2x.7e6498e626a8f128f875.jpg"}}]);
//# sourceMappingURL=267.298309f0.chunk.js.map