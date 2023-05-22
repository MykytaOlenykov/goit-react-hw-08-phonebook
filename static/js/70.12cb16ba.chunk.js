"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[70],{9070:function(n,e,t){t.r(e),t.d(e,{default:function(){return qn}});var r,o,i,a,c,d,u,s,p,l,h,x,m,f,b,g,w,Z,y,j,k,v,P,C,z,_,N,T=t(5913),F=t(1413),E=t(5861),L=t(9439),S=t(4687),I=t.n(S),M=t(1134),A=t(5218),B=t(6004),q=t(6440),J=t(1688),K=t(168),Y=t(6444),D=Y.ZP.form(r||(r=(0,K.Z)(["\n  max-width: 452px;\n  width: 100%;\n  padding: 28px 24px;\n  background-color: ",";\n  border-radius: 15px;\n  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.05);\n\n  @media screen and (min-width: ",") {\n    padding: 45px 51px;\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.breakpoint})),V=Y.ZP.input(o||(o=(0,K.Z)(["\n  display: block;\n  padding: 15px 20px;\n  width: 100%;\n  font-size: 14px;\n  line-height: 1.4;\n  border: 1px solid ",";\n  border-radius: 15px;\n  outline: none;\n\n  &::placeholder {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.4;\n    color: ",";\n  }\n\n  &:focus {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.colors.inputBorder}),(function(n){return n.theme.colors.secondaryText}),(function(n){return n.theme.colors.accent})),X=Y.ZP.label(i||(i=(0,K.Z)(["\n  display: block;\n  margin-bottom: 24px;\n"]))),$=Y.ZP.span(a||(a=(0,K.Z)(["\n  display: block;\n  margin-bottom: 5.5px;\n  font-size: 14px;\n  line-height: 1.4;\n"]))),G=Y.ZP.button(c||(c=(0,K.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 14px;\n  width: 100%;\n  font-weight: 700;\n  font-size: 10px;\n  line-height: 1.5;\n  text-transform: uppercase;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 12px;\n  transition: background-color\n      ",",\n    color ",";\n  cursor: pointer;\n\n  &:hover:not(:disabled) {\n    color: ",";\n    background-color: ",";\n  }\n\n  &:disabled {\n    opacity: 0.8;\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){var e=n.theme;return"".concat(e.duration," ").concat(e.timingFunction)}),(function(n){var e=n.theme;return"".concat(e.duration," ").concat(e.timingFunction)}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.primary})),H=t(184),O={name:"",number:""},Q=function(n){var e=n.contacts,t=(0,M.cI)({defaultValues:O}),r=t.register,o=t.handleSubmit,i=t.reset,a=(0,T.Tn)(),c=(0,L.Z)(a,2),d=c[0],u=c[1].isLoading,s=function(n){return e.some((function(e){return e.name===n}))},p=function(){var n=(0,E.Z)(I().mark((function n(e){var t,r,o;return I().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.name,r=e.number,o=(0,J.K)(t),!s(o)){n.next=5;break}return A.Am.error("".concat(o," is already in contacts.")),n.abrupt("return");case 5:return n.next=7,d({name:o,number:r});case 7:i();case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,H.jsxs)(D,{autoComplete:"off",onSubmit:o((function(n){p(n)})),children:[(0,H.jsxs)(X,{children:[(0,H.jsx)($,{children:"Name"}),(0,H.jsx)(V,(0,F.Z)((0,F.Z)({},r("name")),{},{type:"text",pattern:q._e.name,title:q.N3.name,placeholder:"Full name",required:!0}))]}),(0,H.jsxs)(X,{children:[(0,H.jsx)($,{children:"Number"}),(0,H.jsx)(V,(0,F.Z)((0,F.Z)({},r("number")),{},{type:"tel",pattern:q._e.number,title:q.N3.number,placeholder:"Phone number",required:!0}))]}),(0,H.jsx)(G,{type:"submit",disabled:u,children:u?(0,H.jsx)(B.a,{width:"15",height:"15",color:"#fff"}):"Add contact"})]})},R={name:"",number:""},U=function(n){var e=n.id,t=n.name,r=n.number,o=(0,M.cI)({defaultValues:R}),i=o.register,a=o.handleSubmit,c=o.reset,d=(0,T.wv)(),u=(0,L.Z)(d,2),s=u[0],p=u[1].isLoading,l=(0,T.Jx)().data,h=function(n){return n===t?(A.Am.error("You entered the old name."),!0):!!l.some((function(e){return e.name===n}))&&(A.Am.error("".concat(n," is already in contacts.")),!0)},x=function(){var n=(0,E.Z)(I().mark((function n(t){var o,i,a,d;return I().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.name,i=t.number,a=(0,J.K)(o),d={},!a){n.next=7;break}if(!h(a)){n.next=6;break}return n.abrupt("return");case 6:d.name=a;case 7:if(!i){n.next=11;break}if(i!==r||(A.Am.error("You entered the old phone number."),0)){n.next=10;break}return n.abrupt("return");case 10:d.number=i;case 11:return n.next=13,s({id:e,data:d});case 13:c();case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,H.jsxs)(D,{autoComplete:"off",onSubmit:a((function(n){x(n)})),children:[(0,H.jsxs)(X,{children:[(0,H.jsxs)($,{children:["Current name: ",t]}),(0,H.jsx)(V,(0,F.Z)((0,F.Z)({},i("name")),{},{type:"text",pattern:q._e.name,title:q.N3.name,placeholder:"New name"}))]}),(0,H.jsxs)(X,{children:[(0,H.jsxs)($,{children:["Current number: ",r]}),(0,H.jsx)(V,(0,F.Z)((0,F.Z)({},i("number")),{},{type:"tel",pattern:q._e.number,title:q.N3.number,placeholder:"New phone number"}))]}),(0,H.jsx)(G,{type:"submit",disabled:p,children:p?(0,H.jsx)(B.a,{width:"15",height:"15",color:"#fff"}):"Edit contact"})]})},W=t(5048),nn=t(1273),en=function(n){return n.filter},tn=Y.ZP.p(d||(d=(0,K.Z)(["\n  margin-bottom: 12px;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 140%;\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryText})),rn=Y.ZP.label(u||(u=(0,K.Z)(["\n  display: block;\n  margin-bottom: 24px;\n"]))),on=Y.ZP.input(s||(s=(0,K.Z)(["\n  display: block;\n  padding: 15px 20px;\n  max-width: 200px;\n  width: 100%;\n  font-size: 14px;\n  line-height: 1.4;\n  border: 1px solid ",";\n  border-radius: 15px;\n  outline: none;\n\n  &::placeholder {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.4;\n    color: ",";\n  }\n\n  &:focus {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.colors.inputBorder}),(function(n){return n.theme.colors.secondaryText}),(function(n){return n.theme.colors.accent})),an=function(){var n=(0,W.v9)(en),e=(0,W.I0)();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(tn,{children:"Find contacts by name"}),(0,H.jsx)(rn,{"aria-label":"Contacts filter by name",children:(0,H.jsx)(on,{onChange:function(n){e((0,nn.M)(n.target.value.toLowerCase().trim()))},value:n,name:"filter",type:"text",placeholder:"Type here..."})})]})},cn=t(2791),dn=t(4925),un=t(4164),sn=t(1213),pn=Y.ZP.div(p||(p=(0,K.Z)(["\n  position: fixed;\n  z-index: 4;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(79, 209, 197, 0.2);\n  overflow-y: auto;\n"]))),ln=Y.ZP.div(l||(l=(0,K.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  max-width: 452px;\n  width: 100%;\n  transform: translate(-50%, -50%);\n\n  @media screen and (max-height: 380px) {\n    top: 30px;\n    left: 50%;\n    max-width: 452px;\n    width: 100%;\n    transform: translateX(-50%);\n  }\n"]))),hn=(0,Y.ZP)(sn.$iT)(h||(h=(0,K.Z)(["\n  width: 20px;\n  height: 20px;\n  color: ",";\n"])),(function(n){return n.theme.colors.accent})),xn=Y.ZP.button(x||(x=(0,K.Z)(["\n  position: absolute;\n  z-index: 1;\n  top: 8px;\n  right: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  background-color: ",";\n  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);\n  border: 1px solid ",";\n  border-radius: 12px;\n  transition: border-color\n    ",";\n  cursor: pointer;\n\n  &:hover {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){var e=n.theme;return"".concat(e.duration," ").concat(e.timingFunction)}),(function(n){return n.theme.colors.accent})),mn=["onCloseModal"],fn=document.querySelector("#modal-root"),bn=function(n){var e=n.onCloseModal,t=(0,dn.Z)(n,mn);return(0,cn.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return document.body.style.overflow="hidden",window.addEventListener("keydown",n),function(){document.body.style.overflow="auto",window.removeEventListener("keydown",n)}}),[e]),(0,un.createPortal)((0,H.jsx)(pn,{children:(0,H.jsxs)(ln,{children:[(0,H.jsx)(xn,{type:"button",onClick:e,children:(0,H.jsx)(hn,{})}),(0,H.jsx)(U,(0,F.Z)({},t))]})}),fn)},gn=t(4373),wn=t(71),Zn=Y.ZP.div(m||(m=(0,K.Z)(["\n  position: relative;\n  width: 100%;\n  padding-top: 28px;\n  padding-bottom: 28px;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: ",";\n  border-radius: 12px;\n\n  @media screen and (min-width: ",") {\n    padding: 26px;\n  }\n"])),(function(n){return n.theme.colors.primaryBg}),(function(n){return n.theme.breakpoint})),yn=Y.ZP.p(f||(f=(0,K.Z)(["\n  margin-bottom: 7.5px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.4;\n  color: ",";\n"])),(function(n){return n.theme.colors.secondary})),jn=Y.ZP.p(b||(b=(0,K.Z)(["\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  color: ",";\n\n  & > span {\n    font-weight: 700;\n    color: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    gap: 8px;\n  }\n"])),(function(n){return n.theme.colors.secondaryText}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.breakpoint})),kn=Y.ZP.ul(g||(g=(0,K.Z)(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n\n  display: flex;\n  gap: 2px;\n\n  @media screen and (min-width: ",") {\n    top: 12px;\n    right: 12px;\n    gap: 8px;\n  }\n"])),(function(n){return n.theme.breakpoint})),vn=Y.ZP.button(w||(w=(0,K.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  min-width: 50px;\n  font-weight: 700;\n  font-size: 10px;\n  line-height: 1.5;\n  text-transform: uppercase;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  transition: background-color\n    ",";\n  cursor: pointer;\n\n  &.delete {\n    color: ",";\n  }\n\n  &.edit {\n    color: ",";\n  }\n\n  &:hover:not(:disabled) {\n    color: ",";\n  }\n\n  &:disabled {\n    opacity: 0.5;\n  }\n"])),(function(n){var e=n.theme;return"".concat(e.duration," ").concat(e.timingFunction)}),(function(n){return n.theme.colors.iconBtn}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.colors.accent})),Pn=(0,Y.ZP)(gn.hME)(Z||(Z=(0,K.Z)(["\n  width: 15px;\n  height: 15px;\n  fill: currentColor;\n"]))),Cn=(0,Y.ZP)(wn.JIY)(y||(y=(0,K.Z)(["\n  width: 12px;\n  height: 12px;\n  fill: currentColor;\n"]))),zn=function(n){var e=n.contactId,t=n.name,r=n.number,o=(0,T.Nt)(),i=(0,L.Z)(o,2),a=i[0],c=i[1].isLoading,d=(0,cn.useState)(!1),u=(0,L.Z)(d,2),s=u[0],p=u[1],l=function(){var n=(0,E.Z)(I().mark((function n(e){return I().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a(e);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,H.jsxs)(Zn,{children:[(0,H.jsx)(yn,{children:t}),(0,H.jsxs)(jn,{children:["Phone number:",(0,H.jsx)("span",{children:r})]}),(0,H.jsxs)(kn,{children:[(0,H.jsx)("li",{children:(0,H.jsxs)(vn,{type:"button",onClick:function(){return l(e)},disabled:c,className:"delete",children:[(0,H.jsx)(Pn,{}),"Delete"]})}),(0,H.jsx)("li",{children:(0,H.jsxs)(vn,{type:"button",className:"edit",onClick:function(){p(!0)},children:[(0,H.jsx)(Cn,{}),"Edit"]})})]}),s&&(0,H.jsx)(bn,{id:e,name:t,number:r,onCloseModal:function(){p(!1)}})]})},_n=Y.ZP.ul(j||(j=(0,K.Z)(["\n  height: 350px;\n  overflow: auto;\n  padding-right: 12px;\n\n  &::-webkit-scrollbar {\n    width: 6px;\n    background-color: ",";\n    border-radius: 12px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 12px;\n    background-color: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    padding-right: 24px;\n  }\n"])),(function(n){return n.theme.colors.secondaryBg}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.breakpoint})),Nn=Y.ZP.li(k||(k=(0,K.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 24px;\n  }\n"]))),Tn=function(n){var e=n.contacts,t=(0,W.v9)(en),r=(0,cn.useMemo)((function(){return e.filter((function(n){return n.name.toLowerCase().includes(t)}))}),[e,t]);return(0,H.jsx)(_n,{children:r.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,H.jsx)(Nn,{children:(0,H.jsx)(zn,{contactId:e,name:t,number:r})},e)}))})},Fn=t(1942),En=t(4585),Ln=Y.ZP.section(v||(v=(0,K.Z)(["\n  display: flex;\n  gap: 48px;\n  flex-wrap: wrap;\n  align-items: center;\n  padding-top: 64px;\n  padding-bottom: 64px;\n  padding-left: 24px;\n  padding-right: 24px;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 12px;\n    left: 50%;\n    z-index: -1;\n    display: block;\n    width: calc(100% - 24px);\n    height: 300px;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;\n    border-radius: 15px;\n    transform: translateX(-50%);\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n      background-size: cover;\n      background-position: center;\n    }\n\n    @media screen and (min-width: ",") {\n      top: 24px;\n      width: calc(100% - 48px);\n    }\n  }\n\n  @media screen and (min-width: ",") {\n    padding-left: 48px;\n    padding-right: 48px;\n  }\n\n  @media screen and (min-width: 1000px) {\n    flex-wrap: nowrap;\n  }\n"])),Fn,En,(function(n){return n.theme.breakpoint}),(function(n){return n.theme.breakpoint})),Sn=Y.ZP.h1(P||(P=(0,K.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  margin: -1px;\n"]))),In=Y.ZP.div(C||(C=(0,K.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),Mn=Y.ZP.h2(z||(z=(0,K.Z)(["\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1.4;\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryText})),An=Y.ZP.div(_||(_=(0,K.Z)(["\n  width: 100%;\n  padding: 28px 24px;\n  background-color: ",";\n  border-radius: 15px;\n  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.05);\n\n  @media screen and (min-width: ",") {\n    padding: 45px 51px;\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.breakpoint})),Bn=Y.ZP.p(N||(N=(0,K.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 350px;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.colors.secondaryText})),qn=function(){var n=(0,T.Jx)(),e=n.data,t=n.isSuccess,r=n.isFetching;return(0,H.jsxs)(Ln,{children:[(0,H.jsx)(Sn,{children:"Phonebook"}),(0,H.jsx)(Q,{contacts:e}),(0,H.jsxs)(An,{children:[(0,H.jsxs)(In,{children:[(0,H.jsx)(Mn,{children:"Contacts"}),r&&(0,H.jsx)(B.a,{width:"20",height:"20",color:"#4FD1C5"})]}),(0,H.jsx)(an,{}),t&&e.length?(0,H.jsx)(Tn,{contacts:e}):(0,H.jsx)(Bn,{children:"This page is empty, add some contacts."})]})]})}},1688:function(n,e,t){t.d(e,{K:function(){return r}});var r=function(n){return n.split(" ").reduce((function(n,e){var t=e.trim();return t?n+(t+" "):n}),"").trim()}},1942:function(n,e,t){n.exports=t.p+"static/media/background.96bc49b89cb75c9b2d86.jpg"},4585:function(n,e,t){n.exports=t.p+"static/media/background@2x.7e6498e626a8f128f875.jpg"}}]);
//# sourceMappingURL=70.12cb16ba.chunk.js.map