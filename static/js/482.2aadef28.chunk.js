"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[482],{5482:function(n,e,o){o.r(e),o.d(e,{default:function(){return J}});var t,r,i,c,a,s,d,p,l,u,h,x,m=o(1413),f=o(2791),g=o(5048),b=o(1134),w=o(5218),Z=o(4695),k=o(6727),y=o(7062),j=o(9273),v=o(6009),P=o(6004),z=o(585),_=o(168),S=o(1087),C=o(6444),T=C.ZP.p(t||(t=(0,_.Z)(["\n  display: block;\n  margin-bottom: 36px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.4;\n  color: ",";\n"])),(function(n){return n.theme.colors.secondaryText})),E=C.ZP.form(r||(r=(0,_.Z)(["\n  max-width: 353px;\n"]))),F=C.ZP.label(i||(i=(0,_.Z)(["\n  display: block;\n  margin-bottom: 24px;\n"]))),I=C.ZP.span(c||(c=(0,_.Z)(["\n  display: block;\n  margin-bottom: 5.5px;\n  font-size: 14px;\n  line-height: 1.4;\n"]))),q=C.ZP.input(a||(a=(0,_.Z)(["\n  display: block;\n  padding: 15px 20px;\n  width: 100%;\n  font-size: 14px;\n  line-height: 1.4;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 15px;\n  outline: none;\n\n  &::placeholder {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.4;\n    color: ",";\n  }\n\n  &:focus {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.inputBorder}),(function(n){return n.theme.colors.secondaryText}),(function(n){return n.theme.colors.accent})),R=C.ZP.button(s||(s=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 22px;\n  padding: 14px;\n  width: 100%;\n  font-weight: 700;\n  font-size: 10px;\n  line-height: 1.5;\n  text-transform: uppercase;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 12px;\n  transition: background-color\n      ",",\n    color ",";\n  cursor: pointer;\n\n  &:hover:not(:disabled) {\n    color: ",";\n    background-color: ",";\n  }\n\n  &:disabled {\n    opacity: 0.8;\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){var e=n.theme;return"".concat(e.duration," ").concat(e.timingFunction)}),(function(n){var e=n.theme;return"".concat(e.duration," ").concat(e.timingFunction)}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.primary})),V=C.ZP.span(d||(d=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.4;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.secondaryText})),Y=(0,C.ZP)(S.rU)(p||(p=(0,_.Z)(["\n  position: relative;\n  text-decoration: none;\n  color: ",";\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 1.5px;\n    left: 0;\n    display: block;\n    height: 1px;\n    width: 100%;\n    background-color: ",";\n    opacity: 0;\n    transition: opacity\n      ",";\n  }\n\n  &:hover::after {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){var e=n.theme;return"".concat(e.duration," ").concat(e.timingFunction)})),A=C.ZP.span(l||(l=(0,_.Z)(["\n  padding: 2px;\n  font-size: 12px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.colors.errorText})),B=o(184),D=k.Ry().shape({email:k.Z_().matches(z._e.email,z.N3.email).required(),password:k.Z_().required()}),L={email:"",password:""},N=function(){var n,e,o=(0,b.cI)({defaultValues:L,resolver:(0,Z.X)(D)}),t=o.register,r=o.handleSubmit,i=o.reset,c=o.formState.errors,a=(0,g.I0)(),s=(0,v.a)(),d=s.isLoading,p=s.error;(0,f.useEffect)((function(){p&&(w.Am.error("Something went wrong. \u0421heck your password and email"),a((0,y.fw)()))}),[p,a]);return(0,B.jsxs)(E,{autoComplete:"off",noValidate:!0,onSubmit:r((function(n){!function(n){a((0,j.Ib)(n)),i()}(n)})),children:[(0,B.jsx)(T,{children:"Enter your email and password to sign in"}),(0,B.jsxs)(F,{children:[(0,B.jsx)(I,{children:"Email"}),(0,B.jsx)(q,(0,m.Z)((0,m.Z)({},t("email")),{},{type:"email",placeholder:"Your email address"})),c.email&&(0,B.jsx)(A,{children:null===(n=c.email)||void 0===n?void 0:n.message})]}),(0,B.jsxs)(F,{children:[(0,B.jsx)(I,{children:"Password"}),(0,B.jsx)(q,(0,m.Z)((0,m.Z)({},t("password")),{},{type:"password",placeholder:"Your password"})),c.password&&(0,B.jsx)(A,{children:null===(e=c.password)||void 0===e?void 0:e.message})]}),(0,B.jsx)(R,{type:"submit",disabled:d,children:d?(0,B.jsx)(P.a,{width:"15",height:"15",color:"#fff"}):"Sing in"}),(0,B.jsxs)(V,{children:["Don't have an account?",(0,B.jsx)(Y,{to:"/register",children:"Sign up"})]})]})},U=o(6120),W=o(7406),X=C.ZP.section(u||(u=(0,_.Z)(["\n  padding-top: 188px;\n  padding-left: 24px;\n  padding-right: 24px;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    z-index: -1;\n    display: block;\n    width: 260px;\n    height: 260px;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;\n    border-radius: 15px;\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n      background-size: cover;\n      background-position: center;\n    }\n\n    @media screen and (min-width: ",") {\n      top: 24px;\n      right: 24px;\n      padding-left: 48px;\n      padding-right: 48px;\n    }\n\n    @media screen and (min-width: 730px) {\n      width: calc(100vw - 480px);\n      height: calc(100vw - 480px);\n    }\n\n    @media screen and (min-width: 1080px) {\n      width: 600px;\n      height: 600px;\n    }\n  }\n"])),U,W,(function(n){return n.theme.breakpoint})),G=C.ZP.h1(h||(h=(0,_.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  margin: -1px;\n"]))),H=C.ZP.p(x||(x=(0,_.Z)(["\n  margin-bottom: 8.5px;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1.3;\n  color: ",";\n"])),(function(n){return n.theme.colors.accent})),J=function(){return(0,B.jsxs)(X,{children:[(0,B.jsx)(G,{children:"Register form"}),(0,B.jsx)(H,{children:"Welcome!"}),(0,B.jsx)(N,{})]})}},6120:function(n,e,o){n.exports=o.p+"static/media/backgroundCube.98827983ba58b8b9f826.jpg"},7406:function(n,e,o){n.exports=o.p+"static/media/backgroundCube@2x.c29c442b89f8275f81e3.jpg"}}]);
//# sourceMappingURL=482.2aadef28.chunk.js.map