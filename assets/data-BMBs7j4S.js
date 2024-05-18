import{a as U,r as g}from"./index-BZvD_NE6.js";function z(t){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(t)}function kt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?kt(Object(r),!0).forEach(function(n){Te(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):kt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Te(t,e,r){return e=Pe(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Pe(t){var e=je(t,"string");return z(e)=="symbol"?e:e+""}function je(t,e){if(z(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(z(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function Bt(t){return Me(t)||Ie(t)||Kt(t)||Ae()}function Ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ie(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Me(t){if(Array.isArray(t))return ft(t)}function R(t,e){return Be(t)||ke(t,e)||Kt(t,e)||Re()}function Re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kt(t,e){if(t){if(typeof t=="string")return ft(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ft(t,e)}}function ft(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function ke(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,a,l,m,v=[],s=!0,d=!1;try{if(l=(r=r.call(t)).next,e!==0)for(;!(s=(n=l.call(r)).done)&&(v.push(n.value),v.length!==e);s=!0);}catch(y){d=!0,a=y}finally{try{if(!s&&r.return!=null&&(m=r.return(),Object(m)!==m))return}finally{if(d)throw a}}return v}}function Be(t){if(Array.isArray(t))return t}var Wt={exports:{}},rt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le=U,$e=Symbol.for("react.element"),He=Symbol.for("react.fragment"),Fe=Object.prototype.hasOwnProperty,Ue=Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ze={key:!0,ref:!0,__self:!0,__source:!0};function Jt(t,e,r){var n,a={},l=null,m=null;r!==void 0&&(l=""+r),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(m=e.ref);for(n in e)Fe.call(e,n)&&!ze.hasOwnProperty(n)&&(a[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)a[n]===void 0&&(a[n]=e[n]);return{$$typeof:$e,type:t,key:l,ref:m,props:a,_owner:Ue.current}}rt.Fragment=He;rt.jsx=Jt;rt.jsxs=Jt;Wt.exports=rt;var C=Wt.exports;function Xe(t){var e=g.useState([]),r=R(e,2),n=r[0],a=r[1],l=g.useRef(null);return{append:function(v){if(JSON.stringify(v)!==JSON.stringify(l.current)){var s=[].concat(Bt(n.length>t?n.slice(1):n),[v]);a(s)}},undo:function(){var v,s=Bt(n),d=(v=s.pop())!==null&&v!==void 0?v:null;return a(s),l.current=d,d}}}function Ke(t){var e=t.options,r=t.onOptionSelected,n=t.activeOption,a=t.onActiveOptionChanged,l=t.onMouseEnteredDropDown,m=t.onMouseLeftDropDown,v=function(y){a&&a(y)},s=function(y){r(y)};return C.jsx("div",{id:"DropDownList",className:"dropDownList",onMouseEnter:function(){return l()},onMouseLeave:function(){return m()},children:C.jsx("ul",{"aria-activedescendant":e[n],role:"listbox",tabIndex:-1,children:e.map(function(d,y){return C.jsx("li",{"aria-selected":n===y,role:"option",tabIndex:0,onClick:function(){return s(d)},onMouseEnter:function(){return v(y)},children:d},d)})})})}var Zt=function(e,r){for(var n=0;n<e.length;n+=1)if(r.length<=n||r[n]!==e[n])return n;return r.length>e.length?e.length:null},dt=function(e){var r="";return e.childNodes.length===1&&e.firstChild&&"innerText"in e.firstChild&&e.firstChild.innerText===`
`||e.childNodes.forEach(function(n){n.nodeName==="BR"?r+=`
`:n.nodeName==="#text"?r+=n.textContent:n.nodeName==="DIV"&&n.childNodes.length>1?r="".concat(r,`
`).concat(n.innerText):"innerText"in n?r+=n.innerText:r+=n.textContent}),r},Lt=function(e){var r;try{var n=document.getSelection();if(n){var a,l=n.rangeCount>0?n.getRangeAt(0):null,m=!1;if(!l||!l.collapsed||l.startContainer.nodeName==="BR"){if(!n.anchorNode)return null;if(n.anchorNode===e)return 0;l=document.createRange(),l.setStart(n.anchorNode,n.anchorOffset),l.setEnd(n.anchorNode,n.anchorOffset),n.addRange(l),m=!0}var v=l.cloneRange(),s=e.innerText?"\0":"¬",d=document.createTextNode(s);v.insertNode(d);var y=(e.innerText?e.innerText:(a=e.textContent)!==null&&a!==void 0?a:"").indexOf(s);if((r=d.parentNode)==null||r.removeChild(d),m)try{n.removeRange(l)}catch(D){console.log("Failed to remove range: ".concat(D))}return y}}catch(D){console.log("Failed to find position: ".concat(D))}return null},$t=function(e){return"innerText"in e?e.innerText:e.textContent},We=function(e,r){for(var n,a,l,m,v=e[r],s=r;s>0&&v.nodeName==="BR";)s-=1,v=e[s];var d=null;return v.nodeName==="#text"?d=v:((n=v.firstChild)==null?void 0:n.nodeName)==="#text"?d=v.firstChild:((l=(a=v.firstChild)==null?void 0:a.firstChild)==null?void 0:l.nodeName)==="#text"&&(d=(m=v.firstChild)==null?void 0:m.firstChild),{textElement:d,actualIndex:s}},Je=function(e,r){if(r!==-1)for(var n=0,a=0;a<e.childNodes.length;a+=1){var l,m=e.childNodes[a],v=(l=$t(m))!==null&&l!==void 0?l:"";if(r>=n&&(r<n+(m.nodeName==="BR"?1:v.length)||a===e.childNodes.length-1)){var s=document.getSelection();if(s)try{var d=We(e.childNodes,a),y=d.textElement,D=d.actualIndex;if(y){var S,k,P=(S=y.textContent)!==null&&S!==void 0?S:"",B=void 0;D<a?B=((k=y.textContent)!==null&&k!==void 0?k:" ").length:B=r-n>=P.length?P.length:r-n,s.setPosition(y,B)}}catch(I){console.log(I)}return}m.nodeName==="BR"?n+=1:n+=v.length}var j=document.getSelection();if(e.lastChild&&j){var A=$t(e.lastChild);j.setPosition(e.lastChild,A==null?void 0:A.length)}},Ze=function(e,r,n){var a=Zt(r,n);return a!==null&&a<=e&&n.length>r.length?e+(n.length-r.length):e},Ht=function(e){if(e){var r=document.createElement("div");return r.appendChild(document.createElement("br")),r}return document.createElement("br")},Ye=function(e,r){var n=document.createElement("span");return n.id=e.id,n.textContent=e.text,e.style&&(n.style.cssText=e.style,r.set(e.id,e.style)),n},Ge=function(e,r,n){return e.childNodes.length>r+1&&"id"in e.childNodes[r+1]&&n.id===e.childNodes[r+1].id},Ft=function(e,r,n){e.textContent!==r.text&&(e.textContent=r.text),r.style&&n.get(r.id)!==r.style&&(e.style.cssText=r.style,n.set(r.id,r.style))},Ut=function(e,r,n){n?e.insertBefore(r,n):e.appendChild(r)},W=function(e){var r=e.target;return{event:e,id:r.id,blockText:r.textContent?r.textContent:void 0}},Ve="position: relative;z-index: 2;";function cn(t){var e,r,n=t.className,a=t.style,l=t.tabIndex,m=t.lineHeight,v=t.clipInput,s=t.text,d=t.textBlocks,y=t.DropDownComponent,D=t.inputDecorator,S=t.onChange,k=t.onBlockCreated,P=t.onBlockClick,B=t.onBlockDblClick,j=t.onBlockMouseDown,A=t.onBlockMouseUp,I=t.onBlockMouseEnter,G=t.onBlockMouseLeave,V=t.onBlockMouseOver,q=t.onClientScrolled,Z=t.onFocus,X=t.onBlur,Q=t.onClick,vt=t.onDoubleClick,pt=t.onMouseUp,mt=t.onMouseDown,gt=t.onMouseEnter,ht=t.onMouseLeave,yt=t.onMouseOver,bt=t.onKeyDown,St=t.onKeyUp,ot=t.onCursorPositionChanged,_=t.onDropDownItemSelected,N=g.useRef(null),Vt=g.useState(0),xt=R(Vt,2),K=xt[0],qt=xt[1],Qt=g.useState(0),Nt=R(Qt,2),it=Nt[0],_t=Nt[1],te=g.useState([]),Ot=R(te,2),M=Ot[0],ee=Ot[1],ne=g.useState([]),Et=R(ne,2),re=Et[0],oe=Et[1],ie=g.useState(null),Dt=R(ie,2),b=Dt[0],H=Dt[1],tt=g.useRef([]),T=g.useRef(""),L=g.useRef(0),ue=g.useState(0),wt=R(ue,2),ae=wt[0],ut=wt[1],at=g.useRef(new Map),ct=g.useRef(null),Ct=Xe(100),Tt=Ct.append,ce=Ct.undo,le=function(o){var u=document.getElementById(o);u&&k&&k(o,u,{left:it,top:K})},Pt=function(o,u){return{top:o.offsetTop+(u?o.offsetHeight+2:0),left:o.offsetLeft,width:o.offsetWidth,height:o.offsetHeight}};function jt(i){var o=i.id,u=i.dropDown,c=document.getElementById(o);return c&&u?w(w({id:o,dropDown:u},Pt(c,!0)),{},{element:c,activeItem:0}):null}var At=function(o){var u=M.find(function(f){var p;return"id"in f&&"dropDown"in f&&((p=f.dropDown)==null?void 0:p.activation)==="mouseover"&&f.id===o});if(u){var c=jt(u);c&&H(c),ct.current&&clearTimeout(ct.current)}},It=function(){ct.current=setTimeout(function(){return H(null)},200)},se=function(o){P&&P(W(o))},de=function(o){B&&B(W(o))},fe=function(o){j&&j(W(o))},ve=function(o){A&&A(W(o))},pe=function(o){I&&I(W(o));var u=o.target;u&&u.id&&At(u.id)},me=function(o){G&&G(W(o));var u=o.target;u&&u.id&&M.find(function(c){var f;return"id"in c&&"dropDown"in c&&((f=c.dropDown)==null?void 0:f.activation)==="mouseover"&&c.id===u.id})&&It()},ge=function(o){V&&V(W(o))},he=function(o){o.addEventListener("click",se),o.addEventListener("dblclick",de),o.addEventListener("mousedown",fe),o.addEventListener("mouseup",ve),o.addEventListener("mouseenter",pe),o.addEventListener("mouseleave",me),o.addEventListener("mouseover",ge)},Mt=function(o){var u=M.find(function(f){var p;return"id"in f&&"dropDown"in f&&((p=f.dropDown)==null?void 0:p.activation)==="cursorposition"&&o>=f.start&&o<=f.end+1});if(u){var c=jt(u);c&&H(c)}else H(null)};g.useEffect(function(){var i=function($,J,F){var Y=Ye(J,at.current);he(Y),Ut($,Y,F),le(Y.id)};if(N.current){for(var o=N.current,u="",c=0;c<M.length;){var f=M[c],p=c<o.childNodes.length?o.childNodes[c]:null;if("text"in f)if(u+=f.text,"id"in f)p&&(!("id"in p)||f.id!==p.id)?Ge(o,c,f)?(o.removeChild(p),Ft(o.childNodes[c],f,at.current)):i(o,f,p):p&&p.id===f.id?Ft(p,f,at.current):i(o,f,p);else if(p&&!("id"in p))p.textContent!==f.text&&(p.textContent=f.text);else{var E=document.createTextNode(f.text);Ut(o,E,p)}else{var x=c===M.length-1;p?p.nodeName!=="BR"&&o.insertBefore(Ht(x),p):o.appendChild(Ht(x)),u+=`
`}c+=1}for(;M.length<o.childNodes.length;)o.removeChild(o.childNodes[o.childNodes.length-1]);var h=Ze(L.current,T.current,u);Je(o,h),L.current=h,ut(h),T.current=u,Tt({text:s,position:L.current}),Mt(h)}},[M]),g.useEffect(function(){var i=M.filter(function(o){return"Decorator"in o&&o.Decorator!==void 0}).map(function(o){var u=document.getElementById(o.id);return u?w(w(w({},o),Pt(u)),{},{element:u}):null}).filter(function(o){return o!==null});oe(i)},[M]),g.useEffect(function(){var i=[],o=function(O,$,J){var F=O.start,Y=O.id,st=O.style,Ee=O.customProps,De=O.Decorator,we=O.dropDown,Ce=O.decoratorStyle;i.push({start:F,end:$,text:J,id:Y,style:Ve+(st??""),customProps:Ee,Decorator:De,dropDown:we,decoratorStyle:Ce})},u=function(O,$){i.push({start:O,end:O+$.length,text:$})},c=function(O){i.push({start:O})},f=function(){var O,$,J,F=document.getSelection();return((O=F==null?void 0:F.focusNode)==null?void 0:O.nodeName)==="SPAN"||((J=($=F==null?void 0:F.focusNode)==null?void 0:$.parentNode)==null?void 0:J.nodeName)==="SPAN"};if(JSON.stringify(tt.current)!==JSON.stringify(d)||s!==T.current||TextDecoderStream.length>L.current&&s[L.current]===`
`||M.length<d.length*2||f()){for(var p=[],E=s.indexOf(`
`,0);E!==-1;)p.push({start:E}),E=s.indexOf(`
`,E+1);var x=0;p.concat(d).sort(function(h,O){return h.start-O.start}).forEach(function(h){h.start-x>0&&u(x,s.substring(x,h.start)),"length"in h?(o(h,h.start+h.length-1,s.substring(h.start,h.start+h.length)),x=h.start+h.length):(c(h.start),x=h.start+1)}),s.length-x>0&&u(x,s.substring(x)),ee(i),tt.current=d}else Tt({text:s,position:L.current})},[d,s]);var Rt=function(o){var u=null,c=d.find(function(E){return o>E.start&&o<E.start+E.length+1});if(c){var f,p=document.getElementById(c.id);if(p)return u=(f=p.textContent)!==null&&f!==void 0?f:"",{id:c.id,text:u,element:p}}return null},lt=function(){if(N.current){var o=N.current,u=Lt(o);if(u&&u!==L.current){if(ot){var c=Rt(u);c?ot(T.current,u,c.id,c.text,c.element):ot(T.current,u)}L.current=u,ut(u),Mt(u)}}};function ye(){if(N.current){lt();var i=dt(N.current);if(i!==T.current){var o,u=(o=Zt(T.current,i))!==null&&o!==void 0?o:0;if(T.current=i,S){var c=Rt(u);c?S(T.current,u,c.id,c.text,c.element):S(T.current,u)}}}}var be=function(o){if(N.current){var u=document.getSelection();u&&o.clipboardData.setData("text",u==null?void 0:u.toString()),o.preventDefault(),o.stopPropagation()}},Se=function(o){if(T.current="",tt.current=[],N.current){var u=N.current,c=o.clipboardData.getData("text");if(c&&S){var f=document.getSelection();if(f){var p;f.rangeCount>0&&f.getRangeAt(0).deleteContents(),T.current=dt(u);var E=dt(u),x=(p=Lt(u))!==null&&p!==void 0?p:E.length-1;x===0&&(x=1);var h=x===0?c+E:x>=E.length-1?E+c:E.substring(0,x)+c+E.substring(x);L.current=x,ut(x),S(h,x);return}T.current="",tt.current=[],S(c,0)}}},xe=function(){N.current&&(qt(N.current.scrollTop),_t(N.current.scrollLeft),q&&q({left:N.current.scrollLeft,top:N.current.scrollTop}))},Ne=function(o){switch(o.key){case"Escape":H(null);break;case"Z":case"z":if(o.ctrlKey){var u=ce();u&&S&&S(u.text,u.position),o.preventDefault(),o.stopPropagation()}break;case"ArrowUp":b&&(b.activeItem>0&&H(w(w({},b),{},{activeItem:b.activeItem-1})),o.preventDefault(),o.stopPropagation());break;case"ArrowDown":b&&(b.activeItem<b.dropDown.options.length-1&&H(w(w({},b),{},{activeItem:b.activeItem+1})),o.preventDefault(),o.stopPropagation());break;case"SpaceBar":case"Enter":b&&(_&&_(b.id,b.dropDown.options[b.activeItem]),o.preventDefault(),o.stopPropagation());break}},Oe=y??Ke;return C.jsxs("div",{className:"shadowDiv",style:{lineHeight:m,overflow:v?"hidden":"visible"},children:[C.jsx("pre",{id:"EnhancedInput",className:n?"enhancedInput ".concat(n):"enhancedInput ",style:w({lineHeight:m},a),tabIndex:l,contentEditable:"true",ref:N,autoCapitalize:"none",autoCorrect:"off",spellCheck:"false",onCopy:function(o){return be(o)},onPaste:function(o){return Se(o)},onInput:function(){return ye()},onScroll:function(){return xe()},onKeyUp:function(o){St&&St(o),lt()},onKeyDown:function(o){bt&&bt(o),o.isPropagationStopped()||Ne(o)},onFocus:function(o){Z&&Z(o)},onBlur:function(o){X&&X(o)},onClick:function(o){Q&&Q(o)},onDoubleClick:function(o){vt&&vt(o)},onMouseDown:function(o){mt&&mt(o)},onMouseUp:function(o){pt&&pt(o),lt()},onMouseEnter:function(o){gt&&gt(o)},onMouseLeave:function(o){ht&&ht(o)},onMouseOver:function(o){yt&&yt(o)}}),D&&D,re.filter(function(i){var o,u;return i.top-K+i.height>=0&&i.top-K<((o=(u=N.current)==null?void 0:u.offsetHeight)!==null&&o!==void 0?o:0)}).map(function(i){var o,u,c,f;return C.jsx("div",{style:{position:"absolute",lineHeight:"normal",left:i.left-it,top:i.top-K,width:i.width,height:i.top-K+i.height<((o=(c=N.current)==null?void 0:c.offsetHeight)!==null&&o!==void 0?o:0)?i.height:((u=(f=N.current)==null?void 0:f.offsetHeight)!==null&&u!==void 0?u:0)-(i.top-K)},children:C.jsx(i.Decorator,{id:i.id,text:i.text,start:i.start,end:i.end,cursorPosition:ae,textElement:i.element,customProps:i.customProps,style:i.decoratorStyle})},i.id)}),b&&C.jsx("div",{className:"dropDownHints",style:{top:((e=b.top)!==null&&e!==void 0?e:0)-K,left:((r=b.left)!==null&&r!==void 0?r:0)-it},children:C.jsx(Oe,{onMouseLeftDropDown:function(){b.dropDown.activation==="mouseover"&&It()},onMouseEnteredDropDown:function(){b.dropDown.activation==="mouseover"&&setTimeout(function(){return At(b.id)},1)},options:b.dropDown.options,onOptionSelected:function(o){_&&_(b.id,o)},activeOption:b.activeItem,onActiveOptionChanged:function(o){return H(w(w({},b),{},{activeItem:o}))}})})]})}function ln(t){var e=t.textElement,r=t.text,n=t.start,a=t.end,l=t.cursorPosition,m=t.clasName,v=t.style,s=g.useRef(null),d=g.useState("hidden"),y=R(d,2),D=y[0],S=y[1],k=g.useState(0),P=R(k,2),B=P[0],j=P[1],A=g.useState(0),I=R(A,2),G=I[0],V=I[1],q=function(){setTimeout(function(){S("hidden")},1)},Z=function(){S(l>=n&&l<=a+1?"hidden":"visible")};return g.useEffect(function(){return e.addEventListener("mouseleave",Z),S(l>=n&&l<=a+1?"hidden":"visible"),function(){e.removeEventListener("mouseleave",Z)}},[e,n,a,l]),g.useEffect(function(){if(s.current){var X=(s.current.offsetHeight-e.offsetHeight)/2*-1,Q=(s.current.offsetWidth-e.offsetWidth)/2*-1;j(X),V(Q)}},[e]),C.jsx("div",{ref:s,className:"pillDecorator ".concat(m??""),style:w({top:B,left:G,visibility:D},v),onMouseEnter:function(){return q()},children:r})}function sn(t){var e,r=t.customProps,n=t.textElement,a=t.clasName,l=t.style,m,v=g.useRef(null),s=g.useState("hidden"),d=R(s,2),y=d[0],D=d[1],S=g.useRef(null),k=r.title,P=r.position,B=P===void 0?"top":P,j=function(){setTimeout(function(){D("visible"),S.current&&(clearTimeout(S.current),S.current=null)},1)},A=function(){S.current=setTimeout(function(){D("hidden"),S.current=null},200)};return g.useEffect(function(){return n.addEventListener("mouseenter",j),n.addEventListener("mouseleave",A),function(){n.removeEventListener("mouseenter",j),n.removeEventListener("mouseleave",A)}},[n]),C.jsx("div",{ref:v,className:"titleDecorator ".concat(a??""),style:w({visibility:y,top:B==="top"?((e=(m=v.current)==null?void 0:m.clientHeight)!==null&&e!==void 0?e:18)*-1:n.offsetHeight,left:0},l),onMouseEnter:function(){return j()},onMouseLeave:function(){return A()},children:C.jsx("span",{style:{fontSize:"9px",padding:"2px 8px 2px 7px"},children:k})})}var Yt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},zt=U.createContext&&U.createContext(Yt),qe=["attr","size","title"];function Qe(t,e){if(t==null)return{};var r=_e(t,e),n,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function _e(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function et(){return et=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},et.apply(this,arguments)}function Xt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function nt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Xt(Object(r),!0).forEach(function(n){tn(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Xt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function tn(t,e,r){return e=en(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function en(t){var e=nn(t,"string");return z(e)=="symbol"?e:e+""}function nn(t,e){if(z(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(z(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function Gt(t){return t&&t.map(function(e,r){return U.createElement(e.tag,nt({key:r},e.attr),Gt(e.child))})}function rn(t){return function(e){return U.createElement(on,et({attr:nt({},t.attr)},e),Gt(t.child))}}function on(t){var e=function(n){var a=t.attr,l=t.size,m=t.title,v=Qe(t,qe),s=l||n.size||"1em",d;return n.className&&(d=n.className),t.className&&(d=(d?d+" ":"")+t.className),U.createElement("svg",et({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,v,{className:d,style:nt(nt({color:t.color||n.color},n.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),m&&U.createElement("title",null,m),t.children)};return zt!==void 0?U.createElement(zt.Consumer,null,function(r){return e(r)}):e(Yt)}function un(t){return rn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(t)}function dn(t){var e=t.onClick;return C.jsx("div",{className:"clearButton",onClick:function(){return e()},children:C.jsx(un,{})})}const fn=/[A-Z]/,vn=/[A-Z]{2}[-]{0,1}[0-9]/,pn=/[A-Z]{2}[-]{0,1}[0-9A-Z]{8}[-]{0,1}[0-9]/,mn=["FR0127717439","FR0127733782","IT0004534522","IT0004534530","IT0004534548","IT0004534555","IT0004534571","IT0004534589","IT0004534605","IT0004545890","IT0004548282","IT0004548290","IT0004548308","FR0127694406","FR0127694349","FR0013053329","FR0127739029","XS2421195848","XS2430047212","XS2430287362","XS2430287529","XS2398750922","XS2343528571","XS2344772426","XS2499654643","AT000B066055","AT000B088455","AT0000A20877","XS1966819226","XS1966037860","AT000B126958","AT000B014642","AT000B126966","AT0000A282J7","AT0000A28603","AT0000A286S9","AT000B093190"],gn=["ABD","BDA","CAT","DE","EGG","FAN","GAF","HI","INN","JAK","LON","MON","NO","OPO","PAR","QAR","RAT","SEA","TUN","URN","VAN","WX","YY","ZEN"],hn=t=>{if(t.length>2&&!t.includes(".")){const e=t.toLocaleLowerCase()[t.length-1];if(e==="m"||e==="k"){const r=Number(t.substring(0,t.length-1));return!Number.isNaN(Number(r))}return!Number.isNaN(Number(t))}return!1},yn=t=>Text.length>2&&t.includes(".")?!Number.isNaN(Number.parseFloat(t)):!1;export{ln as C,sn as O,dn as S,mn as a,hn as b,yn as c,vn as d,fn as e,cn as f,pn as i,gn as t};
