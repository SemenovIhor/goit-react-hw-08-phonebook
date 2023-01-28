"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[763],{5763:function(t,e,n){n.r(e),n.d(e,{default:function(){return dt}});var o=n(4942),a=n(9439),r=n(1413);function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=n(3433),c=n(2791);function u(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=u(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var l=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=u(t))&&(o&&(o+=" "),o+=e);return o},d=["theme","type"],f=["delay","staleId"],m=function(t){return"number"==typeof t&&!isNaN(t)},p=function(t){return"string"==typeof t},v=function(t){return"function"==typeof t},h=function(t){return p(t)||v(t)?t:null},g=function(t){return(0,c.isValidElement)(t)||p(t)||v(t)||m(t)};function y(t){var e=t.enter,n=t.exit,o=t.appendPosition,a=void 0!==o&&o,r=t.collapse,s=void 0===r||r,u=t.collapseDuration,l=void 0===u?300:u;return function(t){var o=t.children,r=t.position,u=t.preventExitTransition,d=t.done,f=t.nodeRef,m=t.isIn,p=a?"".concat(e,"--").concat(r):e,v=a?"".concat(n,"--").concat(r):n,h=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var t,e=f.current,n=p.split(" "),o=function t(o){var a;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===h.current&&"animationcancel"!==o.type&&(a=e.classList).remove.apply(a,(0,i.Z)(n)))};(t=e.classList).add.apply(t,(0,i.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var t=f.current,e=function e(){t.removeEventListener("animationend",e),s?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,a=t.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(e,n)}))}))}(t,d,l):d()};m||(u?e():(h.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[m]),c.createElement(c.Fragment,null,o)}}function _(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}var T={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,i.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(a)}))}},E=function(t){var e=t.theme,n=t.type,o=s(t,d);return c.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},b={info:function(t){return c.createElement(E,(0,r.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(E,(0,r.Z)({},t),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(E,(0,r.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(E,(0,r.Z)({},t),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function C(t){var e=(0,c.useReducer)((function(t){return t+1}),0),n=(0,a.Z)(e,2)[1],o=(0,c.useState)([]),u=(0,a.Z)(o,2),l=u[0],d=u[1],y=(0,c.useRef)(null),E=(0,c.useRef)(new Map).current,C=function(t){return-1!==l.indexOf(t)},I=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:C,getToast:function(t){return E.get(t)}}).current;function N(t){var e=t.containerId;!I.props.limit||e&&I.containerId!==e||(I.count-=I.queue.length,I.queue=[])}function x(t){d((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function Z(){var t=I.queue.shift();O(t.toastContent,t.toastProps,t.staleId)}function L(t,e){var o=e.delay,a=e.staleId,i=s(e,f);if(g(t)&&!function(t){return!y.current||I.props.enableMultiContainer&&t.containerId!==I.props.containerId||E.has(t.toastId)&&null==t.updateId}(i)){var u=i.toastId,l=i.updateId,d=i.data,C=I.props,N=function(){return x(u)},L=null==l;L&&I.count++;var w,R,k=(0,r.Z)((0,r.Z)((0,r.Z)({},C),{},{style:C.toastStyle,key:I.toastKey++},i),{},{toastId:u,updateId:l,data:d,closeToast:N,isIn:!1,className:h(i.className||C.toastClassName),bodyClassName:h(i.bodyClassName||C.bodyClassName),progressClassName:h(i.progressClassName||C.progressClassName),autoClose:!i.isLoading&&(w=i.autoClose,R=C.autoClose,!1===w||m(w)&&w>0?w:R),deleteToast:function(){var t=_(E.get(u),"removed");E.delete(u),T.emit(4,t);var e=I.queue.length;if(I.count=null==u?I.count-I.displayedToast:I.count-1,I.count<0&&(I.count=0),e>0){var o=null==u?I.props.limit:1;if(1===e||1===o)I.displayedToast++,Z();else{var a=o>e?e:o;I.displayedToast=a;for(var r=0;r<a;r++)Z()}}else n()}});k.iconOut=function(t){var e=t.theme,n=t.type,o=t.isLoading,a=t.icon,r=null,s={theme:e,type:n};return!1===a||(v(a)?r=a(s):(0,c.isValidElement)(a)?r=(0,c.cloneElement)(a,s):p(a)||m(a)?r=a:o?r=b.spinner():function(t){return t in b}(n)&&(r=b[n](s))),r}(k),v(i.onOpen)&&(k.onOpen=i.onOpen),v(i.onClose)&&(k.onClose=i.onClose),k.closeButton=C.closeButton,!1===i.closeButton||g(i.closeButton)?k.closeButton=i.closeButton:!0===i.closeButton&&(k.closeButton=!g(C.closeButton)||C.closeButton);var j=t;(0,c.isValidElement)(t)&&!p(t.type)?j=(0,c.cloneElement)(t,{closeToast:N,toastProps:k,data:d}):v(t)&&(j=t({closeToast:N,toastProps:k,data:d})),C.limit&&C.limit>0&&I.count>C.limit&&L?I.queue.push({toastContent:j,toastProps:k,staleId:a}):m(o)?setTimeout((function(){O(j,k,a)}),o):O(j,k,a)}}function O(t,e,n){var o=e.toastId;n&&E.delete(n);var a={content:t,props:e};E.set(o,a),d((function(t){return[].concat((0,i.Z)(t),[o]).filter((function(t){return t!==n}))})),T.emit(4,_(a,null==a.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return I.containerId=t.containerId,T.cancelEmit(3).on(0,L).on(1,(function(t){return y.current&&x(t)})).on(5,N).emit(2,I),function(){E.clear(),T.emit(3,I)}}),[]),(0,c.useEffect)((function(){I.props=t,I.isToastActive=C,I.displayedToast=l.length})),{getToastToRender:function(e){var n=new Map,o=Array.from(E.values());return t.newestOnTop&&o.reverse(),o.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:y,isToastActive:C}}function I(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function N(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function x(t){var e=(0,c.useState)(!1),n=(0,a.Z)(e,2),o=n[0],r=n[1],s=(0,c.useState)(!1),i=(0,a.Z)(s,2),u=i[0],l=i[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,m=(0,c.useRef)(t),p=t.autoClose,h=t.pauseOnHover,g=t.closeToast,y=t.onClick,_=t.closeOnClick;function T(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",Z),document.addEventListener("touchmove",x),document.addEventListener("touchend",Z);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=I(e.nativeEvent),f.y=N(e.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function E(e){if(f.boundingRect){var n=f.boundingRect,o=n.top,a=n.bottom,r=n.left,s=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&f.x>=r&&f.x<=s&&f.y>=o&&f.y<=a?C():b()}}function b(){r(!0)}function C(){r(!1)}function x(e){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&C(),f.x=I(e),f.y=N(e),f.delta="x"===t.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function Z(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",Z),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",Z);var e=d.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,c.useEffect)((function(){m.current=t})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",b,{once:!0}),v(t.onOpen)&&t.onOpen((0,c.isValidElement)(t.children)&&t.children.props),function(){var t=m.current;v(t.onClose)&&t.onClose((0,c.isValidElement)(t.children)&&t.children.props)}}),[]),(0,c.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",b),window.addEventListener("blur",C)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",C))}}),[t.pauseOnFocusLoss]);var L={onMouseDown:T,onTouchStart:T,onMouseUp:E,onTouchEnd:E};return p&&h&&(L.onMouseEnter=C,L.onMouseLeave=b),_&&(L.onClick=function(t){y&&y(t),f.canCloseOnClick&&g()}),{playToast:b,pauseToast:C,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:L}}function Z(t){var e=t.closeToast,n=t.theme,o=t.ariaLabel,a=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":a},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(t){var e=t.delay,n=t.isRunning,a=t.closeToast,s=t.type,i=void 0===s?"default":s,u=t.hide,d=t.className,f=t.style,m=t.controlledProgress,p=t.progress,h=t.rtl,g=t.isIn,y=t.theme,_=u||m&&0===p,T=(0,r.Z)((0,r.Z)({},f),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:_?0:1});m&&(T.transform="scaleX(".concat(p,")"));var E=l("Toastify__progress-bar",m?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":h}),b=v(d)?d({rtl:h,type:i,defaultClassName:E}):l(E,d);return c.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":_?"true":"false","aria-label":"notification timer",className:b,style:T},m&&p>=1?"onTransitionEnd":"onAnimationEnd",m&&p<1?null:function(){g&&a()}))}var O=function(t){var e=x(t),n=e.isRunning,o=e.preventExitTransition,a=e.toastRef,s=e.eventHandlers,i=t.closeButton,u=t.children,d=t.autoClose,f=t.onClick,m=t.type,p=t.hideProgressBar,h=t.closeToast,g=t.transition,y=t.position,_=t.className,T=t.style,E=t.bodyClassName,b=t.bodyStyle,C=t.progressClassName,I=t.progressStyle,N=t.updateId,O=t.role,w=t.progress,R=t.rtl,k=t.toastId,j=t.deleteToast,M=t.isIn,P=t.isLoading,A=t.iconOut,D=t.closeOnClick,B=t.theme,F=l("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(m),{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":D}),z=v(_)?_({rtl:R,position:y,type:m,defaultClassName:F}):l(F,_),S=!!w||!d,H={closeToast:h,type:m,theme:B},q=null;return!1===i||(q=v(i)?i(H):(0,c.isValidElement)(i)?(0,c.cloneElement)(i,H):Z(H)),c.createElement(g,{isIn:M,done:j,position:y,preventExitTransition:o,nodeRef:a},c.createElement("div",(0,r.Z)((0,r.Z)({id:k,onClick:f,className:z},s),{},{style:T,ref:a}),c.createElement("div",(0,r.Z)((0,r.Z)({},M&&{role:O}),{},{className:v(E)?E({type:m}):l("Toastify__toast-body",E),style:b}),null!=A&&c.createElement("div",{className:l("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},A),c.createElement("div",null,u)),q,c.createElement(L,(0,r.Z)((0,r.Z)({},N&&!S?{key:"pb-".concat(N)}:{}),{},{rtl:R,theme:B,delay:d,isRunning:n,isIn:M,closeToast:h,hide:p,type:m,style:I,className:C,controlledProgress:S,progress:w||0}))))},w=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},R=y(w("bounce",!0)),k=(y(w("slide",!0)),y(w("zoom")),y(w("flip")),(0,c.forwardRef)((function(t,e){var n=C(t),o=n.getToastToRender,a=n.containerRef,s=n.isToastActive,i=t.className,u=t.style,d=t.rtl,f=t.containerId;function m(t){var e=l("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":d});return v(i)?i({position:t,rtl:d,defaultClassName:e}):l(e,h(i))}return(0,c.useEffect)((function(){e&&(e.current=a.current)}),[]),c.createElement("div",{ref:a,className:"Toastify",id:f},o((function(t,e){var n=e.length?(0,r.Z)({},u):(0,r.Z)((0,r.Z)({},u),{},{pointerEvents:"none"});return c.createElement("div",{className:m(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var o=t.content,a=t.props;return c.createElement(O,(0,r.Z)((0,r.Z)({},a),{},{isIn:s(a.toastId),style:(0,r.Z)((0,r.Z)({},a.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(a.key)}),o)})))})))})));k.displayName="ToastContainer",k.defaultProps={position:"top-right",transition:R,autoClose:5e3,closeButton:Z,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var j,M=new Map,P=[],A=1;function D(){return""+A++}function B(t){return t&&(p(t.toastId)||m(t.toastId))?t.toastId:D()}function F(t,e){return M.size>0?T.emit(0,t,e):P.push({content:t,options:e}),e.toastId}function z(t,e){return(0,r.Z)((0,r.Z)({},e),{},{type:e&&e.type||t,toastId:B(e)})}function S(t){return function(e,n){return F(e,z(t,n))}}function H(t,e){return F(t,z("default",e))}H.loading=function(t,e){return F(t,z("default",(0,r.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},H.promise=function(t,e,n){var o,a=e.pending,s=e.error,i=e.success;a&&(o=p(a)?H.loading(a,n):H.loading(a.render,(0,r.Z)((0,r.Z)({},n),a)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(t,e,a){if(null!=e){var s=(0,r.Z)((0,r.Z)((0,r.Z)({type:t},c),n),{},{data:a}),i=p(e)?{render:e}:e;return o?H.update(o,(0,r.Z)((0,r.Z)({},s),i)):H(i.render,(0,r.Z)((0,r.Z)({},s),i)),a}H.dismiss(o)},l=v(t)?t():t;return l.then((function(t){return u("success",i,t)})).catch((function(t){return u("error",s,t)})),l},H.success=S("success"),H.info=S("info"),H.error=S("error"),H.warning=S("warning"),H.warn=H.warning,H.dark=function(t,e){return F(t,z("default",(0,r.Z)({theme:"dark"},e)))},H.dismiss=function(t){M.size>0?T.emit(1,t):P=P.filter((function(e){return null!=t&&e.options.toastId!==t}))},H.clearWaitingQueue=function(t){return void 0===t&&(t={}),T.emit(5,t)},H.isActive=function(t){var e=!1;return M.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},H.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=M.get(n||j);return o&&o.getToast(t)}(t,e);if(n){var o=n.props,a=n.content,s=(0,r.Z)((0,r.Z)((0,r.Z)({},o),e),{},{toastId:e.toastId||t,updateId:D()});s.toastId!==t&&(s.staleId=t);var i=s.render||a;delete s.render,F(i,s)}}),0)},H.done=function(t){H.update(t,{progress:1})},H.onChange=function(t){return T.on(4,t),function(){T.off(4,t)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},T.on(2,(function(t){j=t.containerId||t,M.set(j,t),P.forEach((function(t){T.emit(0,t.content,t.options)})),P=[]})).on(3,(function(t){M.delete(t.containerId||t),0===M.size&&T.off(0).off(1).off(5)}));var q=n(9434),Q=function(t){return t.contacts.items},V=function(t){return t.filter},G=function(t){return t.contacts.isLoading},W=function(t){return t.contacts.error},K=n(3064),U="ContactForm_form__dhl+T",X="ContactForm_form__label__8W82B",Y="ContactForm_form__input__VGD4-",$="ContactForm_input__button__+QPeE",J=n(184);function tt(){var t=(0,c.useState)(""),e=(0,a.Z)(t,2),n=e[0],o=e[1],r=(0,c.useState)(""),s=(0,a.Z)(r,2),i=s[0],u=s[1],l=(0,q.v9)(Q),d=(0,q.I0)(),f=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":u(a)}},m=function(){o(""),u("")};return(0,J.jsxs)("form",{className:U,onSubmit:function(t){if(t.preventDefault(),l.find((function(t){return n.toLowerCase()===t.name.toLowerCase()})))H.info("".concat(n," is already in contacts."));else{var e={name:n,number:i},o=(0,K.ky)(e);d(o),m()}},children:[(0,J.jsxs)("label",{className:X,children:["Name",(0,J.jsx)("input",{value:n,className:Y,onChange:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Ihor Semenov"})]}),(0,J.jsxs)("label",{className:X,children:["Number",(0,J.jsx)("input",{value:i,className:Y,onChange:f,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"906-0402-0402"})]}),(0,J.jsx)("button",{className:$,type:"submit",children:"Add contact"})]})}var et={filter:"Filter_filter__vxThR",filter__input:"Filter_filter__input__toa89"},nt=n(4808),ot=function(){var t=(0,q.I0)(),e=(0,q.v9)(V);return(0,J.jsx)("div",{className:et.filter,children:(0,J.jsxs)("label",{className:et.filter__label,children:["Find contacts by name",(0,J.jsx)("input",{className:et.filter__input,type:"text",value:e,onChange:function(e){var n=(0,nt.M)(e.target.value);t(n)}})]})})},at="ContactList_contacts__jDmyV",rt="ContactList_contact__list__2jNwc",st="ContactList_contact__item__PFoNH",it="ContactList_contacts__button__uwkrO",ct=function(){var t=(0,q.v9)(Q),e=(0,q.v9)(V),n=(0,q.I0)(),o=function(){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}();return(0,J.jsx)("ul",{className:at,children:o.map((function(t){var e=t.id,o=t.name,a=t.number;return(0,J.jsxs)("li",{className:rt,children:[(0,J.jsxs)("span",{className:st,children:[o,": "]}),(0,J.jsxs)("span",{className:st,children:[a," "]}),(0,J.jsx)("button",{className:it,type:"button",onClick:function(){var t=(0,K.GK)(e);n(t)},children:"Delete"})]},e)}))})},ut="Contacts_phonebook__form__bxg-3",lt="Contacts_contacts__name__OaSx+";function dt(){var t=(0,q.v9)(Q),e=(0,q.v9)(G),n=(0,q.v9)(W),o=(0,q.I0)();return(0,c.useEffect)((function(){o((0,K.yF)())}),[o]),(0,J.jsxs)("div",{className:ut,children:[(0,J.jsx)(k,{position:"top-center"}),(0,J.jsx)("h1",{className:lt,children:"Phonebook"}),(0,J.jsx)("h2",{className:lt,children:"Add new contact"}),(0,J.jsx)(tt,{}),t.length>0&&(0,J.jsxs)("div",{children:[(0,J.jsx)("h2",{className:lt,children:"Contacts list"}),(0,J.jsx)(ot,{}),(0,J.jsx)(ct,{})]}),e&&!n&&(0,J.jsx)("p",{children:"Sorry, but i have paws"})]})}}}]);
//# sourceMappingURL=763.6bff96f6.chunk.js.map