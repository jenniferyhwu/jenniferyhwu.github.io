(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{104:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t.n(i),r=t(12),o=t.n(r),c=t(2),l=t(3);function u(){var n=Object(c.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto Mono';\n  }\n\n  body, #root {\n    min-height: 100vh;\n    min-width: 100vw;\n  }\n"]);return u=function(){return n},n}var d=Object(l.a)(u()),m=t(6),s={color:{},breakpoint:{large:1440,medium:1024,tablet:768,smallTablet:675,mobile:425,smallMobile:350}};function p(){var n=Object(c.a)(["\n  display: flex;\n  margin-bottom: 5em;\n  align-items: center;\n\n  @media (max-width: ","px) {\n    flex-direction: column;\n    margin-bottom: 2em;\n  }\n"]);return p=function(){return n},n}function b(){var n=Object(c.a)(["0.8s ",""]);return b=function(){return n},n}function f(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: white;\n  border-radius: 50px;\n  box-sizing: border-box;\n  padding: 1em 3em;\n  box-shadow: 3px 4px 26px 2px rgba(61, 105, 122, 0.07);\n  position: relative;\n  animation: ",";\n  min-width: 500px;\n\n  @media (max-width: ","px) {\n    margin-top: 2em;\n    text-align: center;\n    min-width: auto;\n  }\n\n  @media (max-width: 768px) {\n    margin: 0;\n    padding: 0;\n    background: none;\n    box-shadow: none;\n    min-width: auto;\n  }\n"]);return f=function(){return n},n}function h(){var n=Object(c.a)(["\n  width: 250px;\n  height: auto;\n  border-radius: 50%;\n  margin-right: 5em;\n\n  @media (max-width: ","px) {\n    margin-right: 0;\n  }\n"]);return h=function(){return n},n}function g(){var n=Object(c.a)(["\n  color: #009bbd;\n  letter-spacing: 0.15em;\n  margin-bottom: 0.3em;\n\n  @media (max-width: ","px) {\n    margin-top: 1em;\n  }\n"]);return g=function(){return n},n}function x(){var n=Object(c.a)(["\n  color: #19798d;\n  font-size: 1.2em;\n  font-weight: 300;\n  font-family: Roboto;\n  line-height: 1.6em;\n\n  @media (max-width: 768px) {\n    margin-top: 0;\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(c.a)(["",""]);return v=function(){return n},n}var w=Object(l.d)(v(),m.fadeInDown),k=l.c.p(x()),j=l.c.h1(g(),s.breakpoint.medium),y=l.c.img(h(),s.breakpoint.medium),E=l.c.div(f(),Object(l.b)(b(),w),s.breakpoint.medium),O=l.c.div(p(),s.breakpoint.medium),z=function(){return a.a.createElement(O,null,a.a.createElement(y,{src:"/me.png"}),a.a.createElement(E,null,a.a.createElement(j,null,"Hi there!"),a.a.createElement(k,null,"I'm Jennifer, and I'm a software developer in my fourth year of Computer Science at the University of Waterloo. Mostly, I just like improving my skills and solving fun problems with fun people \ud83d\ude04")))},I=t(5),W=function(){var n=Object(i.useState)(0),e=Object(I.a)(n,2),t=e[0],a=e[1],r=Object(i.useState)(0),o=Object(I.a)(r,2),c=o[0],l=o[1],u=function(){a(window.innerWidth),l(window.innerHeight)};return Object(i.useLayoutEffect)((function(){return u(),window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}}),[]),{windowWidth:t,windowHeight:c}},L=t(17);function S(){var n=Object(c.a)(["\n  text-decoration: inherit;\n"]);return S=function(){return n},n}var T=l.c.a(S()),M=function(n){var e=n.children,t=Object(L.a)(n,["children"]);return a.a.createElement(T,Object.assign({},t,{target:"_blank"}),e)};function R(){var n=Object(c.a)(["\n  background: ",";\n  width: 100%;\n  min-width: 900px;\n  //border-radius: 20px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07), 0 6px 15px 0 rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 16em;\n  padding: 3em 4em;\n  margin: 20px;\n  position: relative;\n  transition: all 0.3s ease-in-out;\n  box-sizing: border-box;\n\n  @media (max-width: ","px) {\n    height: 100%;\n    margin: 20px 0;\n    min-width: auto;\n  }\n\n  @media (max-width: ",'px) {\n    width: 100vw;\n    margin: 20px 0;\n    height: 16em;\n    padding: 20px;\n    min-width: auto;\n  }\n\n  &::after {\n    content: "";\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.13),\n      0 6px 15px 0 rgba(0, 0, 0, 0.07);\n    opacity: 0;\n    height: 100%;\n    width: 100%;\n    //border-radius: 20px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: opacity 0.3s ease-in-out;\n  }\n\n  &:hover {\n    transform: scale(1.01);\n  }\n\n  &:hover::after {\n    opacity: 1;\n  }\n']);return R=function(){return n},n}function B(){var n=Object(c.a)(["\n  position: absolute;\n  display: flex;\n  top: 0;\n  right: 20px;\n  height: 30px;\n\n  > :not(:first-child) {\n    margin-left: 15px;\n  }\n"]);return B=function(){return n},n}function C(){var n=Object(c.a)(["\n  background: #009bbd;\n  padding: 5px 7px;\n"]);return C=function(){return n},n}function P(){var n=Object(c.a)(["\n  color: white;\n  font-weight: 300;\n  font-size: 0.9em;\n  margin: 0;\n"]);return P=function(){return n},n}function U(){var n=Object(c.a)(["\n  letter-spacing: 0.05em;\n  font-size: 1em;\n  margin: 0;\n"]);return U=function(){return n},n}function D(){var n=Object(c.a)(["\n  color: #009bbd;\n  margin-top: 0;\n"]);return D=function(){return n},n}function H(){var n=Object(c.a)(["\n  color: #19798d;\n  font-size: 1.3em;\n  font-weight: 300;\n  font-family: Roboto;\n  line-height: 1.5em;\n  margin-bottom: 0;\n"]);return H=function(){return n},n}var A=l.c.p(H()),_=l.c.h2(D()),N=Object(l.c)(_)(U()),J=l.c.p(P()),F=l.c.div(C()),G=l.c.div(B()),K=l.c.div(R(),(function(n){return n.background}),s.breakpoint.tablet,s.breakpoint.mobile),X=function(n){var e=n.title,t=n.link,i=n.subtitle,r=n.timePeriod,o=n.description,c=n.tools,l=n.background,u=void 0===l?"white":l,d=W().windowWidth<=s.breakpoint.tablet;return a.a.createElement(M,{href:t},a.a.createElement(K,{background:u},d?null:a.a.createElement(G,null,c.map((function(n){return a.a.createElement(F,{key:n},a.a.createElement(J,null,n))}))),a.a.createElement(_,null,e),a.a.createElement(N,null,i," | ",r),a.a.createElement(A,null,o)))};function Y(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 3em 0;\n"]);return Y=function(){return n},n}function q(){var n=Object(c.a)(["\n  color: #009bbd;\n  letter-spacing: 0.3em;\n"]);return q=function(){return n},n}var V=[{title:"NerdWallet",link:"https://www.nerdwallet.com/",subtitle:"Software Engineer Intern",timePeriod:"Jan 2022 - Apr 2022",description:"Adding support for unified tooling and creating new React components",tools:["react","redux","graphql","typescript","jest","mocha"],background:"#f5fdff"},{title:"PagerDuty (Frontend Team)",link:"https://www.pagerduty.com/",subtitle:"Software Developer Intern",timePeriod:"May 2021 - Aug 2021",description:"Revamping the invoices service, migrating apps to containers, and investigating design systems",tools:["react","redux","javascript","ruby","aws s3","jest"],background:"#f5fdff"},{title:"PagerDuty (Sustainability Team)",link:"https://www.pagerduty.com/",subtitle:"Software Developer Intern",timePeriod:"Sep 2020 - Dec 2020",description:"Refactoring to microservices and dynamic partitioning in Kafka",tools:["ruby","elixir","kafka","react","redux","javascript","jest"],background:"#ebf9ff"},{title:"Hack the North",link:"https://2020.hackthenorth.com/",subtitle:"Frontend Developer",timePeriod:"Mar 2020 - Jan 2021",description:"Creating the 2020 site, attendee dashboard, hacker applications, component library, and more at Canada's biggest hackathon",tools:["react","typescript","styled-components","jest","cypress"],background:"#ebf9ff"},{title:"FreshBooks",link:"https://www.freshbooks.com/",subtitle:"Full Stack Developer Intern",timePeriod:"Jan 2020 - Apr 2020",description:"Internal tooling and improving the third-party developer experience",tools:["python","ruby","ember.js","javascript"],background:"#e0f6ff"},{title:"Evertz",link:"https://evertz.com/",subtitle:"Software Developer Intern",timePeriod:"May 2019 - Aug 2019",description:"Building out the web client for a cloud orchestration product from the ground up",tools:["angular","typescript","java"],background:"#e0f6ff"}],$=l.c.h1(q()),Q=l.c.div(Y()),Z=function(){return a.a.createElement(Q,null,a.a.createElement($,null,"MY WORK"),V.map((function(n){return a.a.createElement(X,Object.assign({key:n.title},n))})))},nn=t(105),en=t(106),tn=t(107),an=t(108);function rn(){var n=Object(c.a)(["1s ",""]);return rn=function(){return n},n}function on(){var n=Object(c.a)(["\n  background: #009bbd;\n  border-radius: 50%;\n  box-shadow: 4px 10px 8px 0 rgba(0, 0, 0, 0.07),\n    0 10px 15px 0 rgba(0, 0, 0, 0.03);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 6em;\n  width: 6em;\n  padding: 2em;\n  margin: 2em;\n  animation: ",";\n\n  @media (max-width: ","px) {\n    height: 4em;\n    width: 4em;\n    margin: 1em;\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(c.a)(["",""]);return cn=function(){return n},n}var ln={resume:a.a.createElement(nn.a,{color:"white",size:64,strokeWidth:1}),github:a.a.createElement(en.a,{color:"white",size:64,strokeWidth:1}),linkedin:a.a.createElement(tn.a,{color:"white",size:64,strokeWidth:1}),contact:a.a.createElement(an.a,{color:"white",size:64,strokeWidth:1})},un=Object(l.d)(cn(),m.rollIn),dn=l.c.div(on(),Object(l.b)(rn(),un),s.breakpoint.medium),mn=function(n){var e=n.icon;return a.a.createElement(dn,{onMouseEnter:function(n){n.currentTarget.style.transition="all .15s ease-out",n.currentTarget.style.transform="scale(1.08)"},onMouseLeave:function(n){n.currentTarget.style.transition="all .2s ease-in",n.currentTarget.style.transform="scale(1)"}},ln[e])};function sn(){var n=Object(c.a)(["1s ",""]);return sn=function(){return n},n}function pn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2em 0;\n  animation: ",";\n\n  @media (max-width: ","px) {\n    margin: 1em 0;\n  }\n"]);return pn=function(){return n},n}function bn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  @media (max-width: ","px) {\n    max-width: 475px;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n"]);return bn=function(){return n},n}function fn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return fn=function(){return n},n}function hn(){var n=Object(c.a)(["\n  color: #00add2;\n  text-align: center;\n"]);return hn=function(){return n},n}function gn(){var n=Object(c.a)(["\n  color: #7ec0ce;\n  font-size: 1.2em;\n  margin-top: 0;\n"]);return gn=function(){return n},n}function xn(){var n=Object(c.a)(["",""]);return xn=function(){return n},n}var vn=[{label:"RESUME",icon:"resume",path:"/resume.pdf"},{label:"GITHUB",icon:"github",path:"https://github.com/jenniferyhwu"},{label:"LINKEDIN",icon:"linkedin",path:"https://www.linkedin.com/in/jyhwu/"},{label:"EMAIL",icon:"contact",path:"mailto:jyhwuuu@gmail.com"}],wn=Object(l.d)(xn(),m.fadeIn),kn=l.c.h3(gn()),jn=l.c.h2(hn()),yn=l.c.div(fn()),En=l.c.div(bn(),s.breakpoint.smallTablet),On=l.c.div(pn(),Object(l.b)(sn(),wn),s.breakpoint.smallTablet),zn=function(){var n=W().windowWidth<=s.breakpoint.smallTablet;return a.a.createElement(On,null,a.a.createElement(jn,null,"Looking for Fall 2022 internships!"),a.a.createElement(En,null,vn.map((function(e){return a.a.createElement(M,{key:e.label,href:e.path,target:"_blank"},a.a.createElement(yn,null,a.a.createElement(mn,{icon:e.icon}),n?null:a.a.createElement(kn,{key:e.label},e.label)))}))))};function In(){var n=Object(c.a)(["\n  background: #e1feff;\n  opacity: 0.3;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n\n  @media (max-width: ","px) {\n    background: #bff1ff;\n  }\n"]);return In=function(){return n},n}var Wn=l.c.div(In(),s.breakpoint.tablet),Ln=function(){return a.a.createElement(Wn,null)},Sn=t(109),Tn=t(110),Mn=t(111),Rn=t(16);function Bn(){var n=Object(c.a)(["\n  background: none;\n  border: none;\n  outline: none;\n\n  &.disabled {\n    svg {\n      stroke: gainsboro;\n    }\n  }\n\n  &:hover,\n  &:focus {\n    opacity: 0.8;\n  }\n"]);return Bn=function(){return n},n}var Cn=l.c.button(Bn());function Pn(){var n=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .chevrons {\n    color: #009bbd;\n    z-index: 2;\n\n    svg {\n      width: 64px;\n      height: 64px;\n\n      @media (max-width: ","px) {\n        width: 48px;\n        height: 48px;\n      }\n    }\n  }\n\n  .chevronsLeft {\n    margin-left: -64px;\n\n    @media (max-width: ","px) {\n      margin-left: -12px;\n      margin-right: -48px;\n    }\n  }\n\n  .chevronsRight {\n    margin-right: -64px;\n\n    @media (max-width: ","px) {\n      margin-right: -12px;\n      margin-left: -48px;\n    }\n\n    @media (max-width: ","px) {\n    }\n  }\n"]);return Pn=function(){return n},n}function Un(){var n=Object(c.a)(["\n  overflow: hidden;\n"]);return Un=function(){return n},n}function Dn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1.5em;\n  transition: all 0.4s cubic-bezier(0.45, 0.02, 0.04, 1.02);\n  transform: ",";\n"]);return Dn=function(){return n},n}function Hn(){var n=Object(c.a)(["\n  flex: 0 0 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  position: relative;\n\n  @media (max-width: ","px) {\n    padding: 0;\n  }\n"]);return Hn=function(){return n},n}function An(){var n=Object(c.a)(["\n  color: #009bbd;\n  display: flex;\n  justify-content: center;\n  position: relative;\n\n  svg {\n    font-size: 1em;\n\n    &:nth-child(n + 3) {\n      margin-left: 1em;\n    }\n  }\n\n  .tracker-icon {\n    position: absolute;\n    transition: all 0.4s cubic-bezier(0.45, 0.02, 0.04, 1.02);\n    transform: ",";\n    fill: #009bbd;\n  }\n"]);return An=function(){return n},n}var _n=l.c.div(An(),(function(n){return"translateX(calc(-".concat(n.numberOfItems+.5,"em + 50% + ").concat(n.shiftAmount," * 2.5em))")})),Nn=l.c.div(Hn(),s.breakpoint.smallMobile),Jn=l.c.div(Dn(),(function(n){return"translateX(calc(-1 * ".concat(n.shiftAmount," * 100%))")})),Fn=l.c.div(Un()),Gn=l.c.div(Pn(),s.breakpoint.mobile,s.breakpoint.tablet,s.breakpoint.tablet,s.breakpoint.tablet),Kn=function(n){var e=n.numberOfItems,t=n.content,r=Object(i.useState)(0),o=Object(I.a)(r,2),c=o[0],l=o[1],u=function(){c!==e-1&&l(c+1)},d=function(){0!==c&&l(c-1)},m=Object(Rn.a)({onSwipedLeft:u,onSwipedRight:d});return a.a.createElement(a.a.Fragment,null,a.a.createElement(Gn,null,a.a.createElement(Cn,{className:"chevrons chevronsLeft "+(0===c?"disabled":""),onClick:d},a.a.createElement(Sn.a,null)),a.a.createElement(Fn,null,a.a.createElement(Jn,Object.assign({shiftAmount:c},m),t.map((function(n,e){return a.a.createElement(Nn,{key:e},n)})))),a.a.createElement(Cn,{className:"chevrons chevronsRight "+(c===e-1?"disabled":""),onClick:u},a.a.createElement(Tn.a,null))),a.a.createElement(_n,{shiftAmount:c,numberOfItems:e},a.a.createElement(Mn.a,{className:"tracker-icon"}),t.map((function(n,e){return a.a.createElement(Mn.a,{key:e,onClick:function(){var n;c!==(n=e)&&l(n)}})}))))},Xn=t(112);function Yn(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 220px;\n  border-radius: 125px;\n  display: flex;\n  background: white;\n  box-shadow: 3px 4px 26px 2px rgba(61, 105, 122, 0.07);\n  margin: 30px 0;\n\n  @media (max-width: ","px) {\n    width: auto;\n  }\n\n  .devpost-cloud {\n    fill: #fffade;\n  }\n\n  .github-cloud {\n    fill: #f7ebff;\n  }\n"]);return Yn=function(){return n},n}function qn(){var n=Object(c.a)(["\n  color: #94474c;\n  margin: 0;\n  text-align: center;\n\n  @media (max-width: ","px) {\n    color: #009bbd;\n  }\n"]);return qn=function(){return n},n}function Vn(){var n=Object(c.a)(["\n  letter-spacing: 0.2em;\n  font-size: 2em;\n  color: #b86167;\n  margin: 0;\n  margin-bottom: 0.5em;\n  text-align: center;\n\n  @media (max-width: ","px) {\n    color: #009bbd;\n  }\n"]);return Vn=function(){return n},n}function $n(){var n=Object(c.a)(["\n  position: absolute;\n  text-decoration: none;\n  margin-top: 8%;\n  z-index: 4;\n  color: ",";\n"]);return $n=function(){return n},n}function Qn(){var n=Object(c.a)(["\n  bottom: -40px;\n  right: 120px;\n  height: 100px;\n  width: 100px;\n\n  @media (max-width: ","px) {\n    bottom: -60px;\n    right: 100px;\n  }\n"]);return Qn=function(){return n},n}function Zn(){var n=Object(c.a)(["\n  background: none;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  bottom: -40px;\n  right: 10px;\n  height: 150px;\n  width: 150px;\n  z-index: 3;\n\n  @media (max-width: ","px) {\n    bottom: -60px;\n    right: -10px;\n  }\n"]);return Zn=function(){return n},n}function ne(){var n=Object(c.a)(["\n  color: #19798d;\n  font-weight: 300;\n  font-family: Roboto;\n  font-size: 1.2em;\n  line-height: 1.5em;\n  margin: 0.5em;\n\n  @media (max-width: ","px) {\n    font-size: 1em;\n  }\n"]);return ne=function(){return n},n}function ee(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: calc(100% - 320px);\n  padding: 8em 0;\n  padding-left: 1em;\n  margin: 1.5em;\n\n  @media (max-width: ","px) {\n    padding: 0.5em;\n  }\n"]);return ee=function(){return n},n}function te(){var n=Object(c.a)(["\n  box-sizing: border-box;\n  border-radius: 50%;\n  background: #ffedf2;\n  box-shadow: 3px 4px 26px 2px rgba(61, 105, 122, 0.07);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  height: 300px;\n  z-index: 2;\n\n  @media (max-width: ","px) {\n    background: white;\n    width: 300px;\n    height: 300px;\n  }\n\n  @media (max-width: ","px) {\n    width: 280px;\n    height: 280px;\n    padding: 2em;\n  }\n\n  @media (max-width: ","px) {\n    width: 250px;\n    height: 250px;\n    box-shadow: 3px 4px 6px 2px rgba(61, 105, 122, 0.07);\n  }\n"]);return te=function(){return n},n}var ie=l.c.div(te(),s.breakpoint.tablet,s.breakpoint.mobile,s.breakpoint.smallMobile),ae=l.c.div(ee(),s.breakpoint.medium),re=l.c.p(ne(),s.breakpoint.medium),oe=l.c.div(Zn(),s.breakpoint.medium),ce=Object(l.c)(oe)(Qn(),s.breakpoint.medium),le=l.c.a($n(),(function(n){return n.color})),ue=l.c.h2(Vn(),s.breakpoint.tablet),de=l.c.p(qn(),s.breakpoint.tablet),me=l.c.div(Yn(),s.breakpoint.tablet),se=function(n){var e=W().windowWidth<=s.breakpoint.tablet;return a.a.createElement(me,null,a.a.createElement(M,{href:n.devpost},a.a.createElement(ie,null,a.a.createElement(ue,null,n.title),a.a.createElement(de,null,n.hackathon),a.a.createElement(de,null,"-"),a.a.createElement(de,null,n.award))),e?null:a.a.createElement(a.a.Fragment,null,a.a.createElement(ae,null,a.a.createElement(re,null,n.description)),a.a.createElement(oe,null,a.a.createElement(le,{href:n.devpost,target:"_blank",color:"#8c5900"},"Devpost"),a.a.createElement(Xn.a,{className:"cloud-shaped devpost-cloud",color:"#fffade",size:200})),a.a.createElement(ce,null,a.a.createElement(le,{href:n.github,target:"_blank",color:"#8553ad"},"GitHub"),a.a.createElement(Xn.a,{className:"cloud-shaped github-cloud",color:"#f7ebff",size:120}))))};function pe(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 4em 0;\n"]);return pe=function(){return n},n}function be(){var n=Object(c.a)(["\n  color: #009bbd;\n  letter-spacing: 0.3em;\n\n  @media (max-width: 767px) {\n    text-align: center;\n  }\n"]);return be=function(){return n},n}var fe=[{title:"LitDubs",description:"Pick a video! Then a language! And voila - a video with its audio dubbed over with the translation.",hackathon:"BrickHacks 2019",award:"Best Use of Google Cloud Platform",devpost:"https://devpost.com/software/lit-dubs",github:"https://github.com/kevin51jiang/lit-dubs",image:"process.env.PUBLIC_URL + '/me.png'"},{title:"Cali Or Bust",description:"Bad at interviews? Get some practice with a data-driven app that\u2019ll tell it to you like it is!",hackathon:"TOHacks 2019",award:"Best Use of Voiceflow",devpost:"https://devpost.com/software/tohacks2019",github:"https://github.com/jenniferyhwu/TOHacks2019",image:"process.env.PUBLIC_URL + '/me.png'"},{title:"Cordelia",description:"The first thing we did in Boston was get lost because no one had data. Turns out combining maps and SMS solves a similar problem :D",hackathon:"BostonHacks 2018",award:"Best Use of HERE.com",devpost:"https://devpost.com/software/bostonhacks-6mabpz",github:"https://github.com/jenniferyhwu/Cordelia",image:"process.env.PUBLIC_URL + '/me.png'"},{title:"Siloed",description:"When we made this, we told ourselves it was so dumb that we'd never put it on any resume or portfolio.",hackathon:"TerribleHacks 2019",award:"Most Millenial Hack",devpost:"https://devpost.com/software/siloed",github:"https://github.com/jenniferyhwu/siloed",image:"process.env.PUBLIC_URL + '/me.png'"}],he=l.c.h1(be()),ge=l.c.div(pe()),xe=function(n){return fe.map((function(n){return a.a.createElement(se,n)}))},ve=function(){var n=W().windowWidth,e=n<=s.breakpoint.tablet,t=n<=s.breakpoint.mobile,r=Object(i.useState)(xe()),o=Object(I.a)(r,2),c=o[0],l=o[1];return Object(i.useCallback)((function(){return l(xe())}),[e,t]),a.a.createElement(ge,null,a.a.createElement(he,null,"MY PROJECTS"),a.a.createElement(Kn,{numberOfItems:c.length,content:c}))};function we(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 7em;\n\n  @media (max-width: ","px) {\n    margin-top: 4em;\n  }\n"]);return we=function(){return n},n}function ke(){var n=Object(c.a)(["\n  color: #00add2;\n  margin-top: 10px;\n  text-decoration: inherit;\n  @media (max-width: 767px) {\n    text-align: center;\n  }\n\n  :hover {\n    opacity: 0.8;\n  }\n"]);return ke=function(){return n},n}function je(){var n=Object(c.a)(["\n  display: flex;\n"]);return je=function(){return n},n}function ye(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n\n  .separator-icon {\n    margin: 0 30px;\n  }\n\n  :hover {\n    opacity: 0.8;\n  }\n"]);return ye=function(){return n},n}function Ee(){var n=Object(c.a)(["\n  color: #00add2;\n  font-size: 1em;\n  text-decoration: none;\n  margin: 0 1em;\n"]);return Ee=function(){return n},n}var Oe={resume:a.a.createElement(nn.a,{color:"#00add2",size:32,strokeWidth:1}),github:a.a.createElement(en.a,{color:"#00add2",size:32,strokeWidth:1}),linkedin:a.a.createElement(tn.a,{color:"#00add2",size:32,strokeWidth:1}),contact:a.a.createElement(an.a,{color:"#00add2",size:32,strokeWidth:1})},ze=[{label:"resume",path:"/resume.pdf"},{label:"github",path:"https://github.com/jenniferyhwu"},{label:"linkedin",path:"https://www.linkedin.com/in/jyhwu"},{label:"contact",path:"mailto:jyhwuuu@gmail.com"}],Ie=l.c.a(Ee()),We=l.c.div(ye()),Le=l.c.div(je()),Se=l.c.a(ke()),Te=l.c.div(we(),s.breakpoint.tablet),Me=function(){return a.a.createElement(Te,null,a.a.createElement(Le,null,ze.map((function(n){return a.a.createElement(We,{key:n.label},a.a.createElement(Ie,{href:n.path,target:"_blank"},Oe[n.label]))}))),a.a.createElement(Se,{href:"https://github.com/jenniferyhwu/jenniferyhwu.github.io/tree/dev",target:"_blank"},"Made with"," ",a.a.createElement("span",{role:"img","aria-label":"hatching-chick emoji"},"\ud83d\udc23")," ","by Jennifer Wu"))};function Re(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Re=function(){return n},n}function Be(){var n=Object(c.a)(["\n  background: none;\n  min-height: 100vh;\n  max-width: 1200px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8vw 10vw;\n  padding-bottom: 3em;\n\n  @media (max-width: ","px) {\n    min-width: 100vw;\n    padding: 10vh 5vw;\n  }\n\n  @media (max-width: ","px) {\n    padding: 5vh 5vw;\n  }\n"]);return Be=function(){return n},n}var Ce=l.c.div(Be(),s.breakpoint.tablet,s.breakpoint.smallTablet),Pe=l.c.div(Re());var Ue=function(){return a.a.createElement(Pe,null,a.a.createElement(Ln,null),a.a.createElement(Ce,null,a.a.createElement(d,null),a.a.createElement(z,null),a.a.createElement(zn,null),a.a.createElement(Z,null),a.a.createElement(ve,null),a.a.createElement(Me,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},18:function(n,e,t){n.exports=t(104)}},[[18,1,2]]]);
//# sourceMappingURL=main.b9879b09.chunk.js.map