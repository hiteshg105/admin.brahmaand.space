(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[199],{1066:function(e,t,n){e.exports=n(2131)},2131:function(e,t,n){"use strict";var a,r=(a=n(0))&&"object"==typeof a&&"default"in a?a.default:a,o=n(35);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),function(e,t){for(var n=Object.getOwnPropertyNames(t),a=0;a<n.length;a++){var r=n[a],o=Object.getOwnPropertyDescriptor(t,r);o&&o.configurable&&void 0===e[r]&&Object.defineProperty(e,r,o)}}(e.prototype.constructor=e,t)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e,t,n,a,r,o,s,l){if(!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,a,r,o,s,l],c=0;(i=new Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw i.framesToPop=1,i}};function c(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var a=e.createTextRange();a.collapse(!0),a.moveStart("character",t),a.moveEnd("character",n-t),a.select()}}var m={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function f(e,t,n){var a="",r="",o=null,s=[];if(void 0===t&&(t="_"),null==n&&(n=m),!e||"string"!=typeof e)return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach((function(e){l=!l&&"\\"===e||(l||!n[e]?(s.push(a.length),a.length===s.length-1&&(r+=e)):o=a.length+1,a+=e,!1)})),{maskChar:t,formatChars:n,prefix:r,mask:a,lastEditablePosition:o,permanents:s}}function p(e,t){return-1!==e.permanents.indexOf(t)}function h(e,t,n){var a=e.mask,r=e.formatChars;if(!n)return!1;if(p(e,t))return a[t]===n;var o=r[a[t]];return new RegExp(o).test(n)}function d(e,t){return t.split("").every((function(t,n){return p(e,n)||!h(e,n,t)}))}function v(e,t){var n=e.maskChar,a=e.prefix;if(!n){for(;t.length>a.length&&p(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var r=a.length,o=t.length;o>=a.length;o--){var s=t[o];if(!p(e,o)&&h(e,o,s)){r=o+1;break}}return r}function g(e,t){return v(e,t)===e.mask.length}function k(e,t){var n=e.maskChar,a=e.mask,r=e.prefix;if(!n){for((t=E(e,"",t,0)).length<r.length&&(t=r);t.length<a.length&&p(e,t.length);)t+=a[t.length];return t}if(t)return E(e,k(e,""),t,0);for(var o=0;o<a.length;o++)p(e,o)?t+=a[o]:t+=n;return t}function E(e,t,n,a){var r=e.mask,o=e.maskChar,s=e.prefix,l=n.split(""),i=g(e,t);return!o&&a>t.length&&(t+=r.slice(t.length,a)),l.every((function(n){for(;c=n,p(e,u=a)&&c!==r[u];){if(a>=t.length&&(t+=r[a]),l=n,o&&p(e,a)&&l===o)return!0;if(++a>=r.length)return!1}var l,u,c;return!h(e,a,n)&&n!==o||(a<t.length?t=o||i||a<s.length?t.slice(0,a)+n+t.slice(a+1):(t=t.slice(0,a)+n+t.slice(a),k(e,t)):o||(t+=n),++a<r.length)})),t}function C(e,t){for(var n=e.mask,a=t;a<n.length;++a)if(!p(e,a))return a;return null}function w(e){return e||0===e?e+"":""}function O(e,t,n,a,r){var o=e.mask,s=e.prefix,l=e.lastEditablePosition,i=t,u="",c=0,m=0,f=Math.min(r.start,n.start);return n.end>r.start?m=(c=function(e,t,n,a){var r=e.mask,o=e.maskChar,s=n.split(""),l=a;return s.every((function(t){for(;s=t,p(e,n=a)&&s!==r[n];)if(++a>=r.length)return!1;var n,s;return(h(e,a,t)||t===o)&&a++,a<r.length})),a-l}(e,0,u=i.slice(r.start,n.end),f))?r.length:0:i.length<a.length&&(m=a.length-i.length),i=a,m&&(1!==m||r.length||(f=r.start===n.start?C(e,n.start):function(e,t){for(var n=t;0<=n;--n)if(!p(e,n))return n;return null}(e,n.start)),i=function(e,t,n,a){var r=n+a,o=e.maskChar,s=e.mask,l=e.prefix,i=t.split("");if(o)return i.map((function(t,a){return a<n||r<=a?t:p(e,a)?s[a]:o})).join("");for(var u=r;u<i.length;u++)p(e,u)&&(i[u]="");return n=Math.max(l.length,n),i.splice(n,r-n),t=i.join(""),k(e,t)}(e,i,f,m)),i=E(e,i,u,f),(f+=c)>=o.length?f=o.length:f<s.length&&!c?f=s.length:f>=s.length&&f<l&&c&&(f=C(e,f)),u||(u=null),{value:i=k(e,i),enteredString:u,selection:{start:f,end:f}}}function S(e){return"function"==typeof e}function b(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function y(e){return(b()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function M(e){(b()||clearTimeout)(e)}var I=function(e){function t(t){var n=e.call(this,t)||this;n.focused=!1,n.mounted=!1,n.previousSelection=null,n.selectionDeferId=null,n.saveSelectionLoopDeferId=null,n.saveSelectionLoop=function(){n.previousSelection=n.getSelection(),n.saveSelectionLoopDeferId=y(n.saveSelectionLoop)},n.runSaveSelectionLoop=function(){null===n.saveSelectionLoopDeferId&&n.saveSelectionLoop()},n.stopSaveSelectionLoop=function(){null!==n.saveSelectionLoopDeferId&&(M(n.saveSelectionLoopDeferId),n.saveSelectionLoopDeferId=null,n.previousSelection=null)},n.getInputDOMNode=function(){if(!n.mounted)return null;var e=o.findDOMNode(i(i(n))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},n.getInputValue=function(){var e=n.getInputDOMNode();return e?e.value:null},n.setInputValue=function(e){var t=n.getInputDOMNode();t&&(n.value=e,t.value=e)},n.setCursorToEnd=function(){var e=v(n.maskOptions,n.value),t=C(n.maskOptions,e);null!==t&&n.setCursorPosition(t)},n.setSelection=function(e,t,a){void 0===a&&(a={});var r=n.getInputDOMNode(),o=n.isFocused();r&&o&&(a.deferred||c(r,e,t),null!==n.selectionDeferId&&M(n.selectionDeferId),n.selectionDeferId=y((function(){n.selectionDeferId=null,c(r,e,t)})),n.previousSelection={start:e,end:t,length:Math.abs(t-e)})},n.getSelection=function(){return function(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var a=document.selection.createRange();a.parentElement()===e&&(t=-a.moveStart("character",-e.value.length),n=-a.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}(n.getInputDOMNode())},n.getCursorPosition=function(){return n.getSelection().start},n.setCursorPosition=function(e){n.setSelection(e,e)},n.isFocused=function(){return n.focused},n.getBeforeMaskedValueChangeConfig=function(){var e=n.maskOptions,t=e.mask,a=e.maskChar,r=e.permanents,o=e.formatChars;return{mask:t,maskChar:a,permanents:r,alwaysShowMask:!!n.props.alwaysShowMask,formatChars:o}},n.isInputAutofilled=function(e,t,a,r){var o=n.getInputDOMNode();try{if(o.matches(":-webkit-autofill"))return!0}catch(u){}return!n.focused||r.end<a.length&&t.end===e.length},n.onChange=function(e){var t=i(i(n)).beforePasteState,a=i(i(n)).previousSelection,r=n.props.beforeMaskedValueChange,o=n.getInputValue(),s=n.value,l=n.getSelection();n.isInputAutofilled(o,l,s,a)&&(s=k(n.maskOptions,""),a={start:0,end:0,length:0}),t&&(a=t.selection,s=t.value,l={start:a.start+o.length,end:a.start+o.length,length:0},o=s.slice(0,a.start)+o+s.slice(a.end),n.beforePasteState=null);var u=O(n.maskOptions,o,l,s,a),c=u.enteredString,m=u.selection,f=u.value;if(S(r)){var p=r({value:f,selection:m},{value:s,selection:a},c,n.getBeforeMaskedValueChangeConfig());f=p.value,m=p.selection}n.setInputValue(f),S(n.props.onChange)&&n.props.onChange(e),n.isWindowsPhoneBrowser?n.setSelection(m.start,m.end,{deferred:!0}):n.setSelection(m.start,m.end)},n.onFocus=function(e){var t=n.props.beforeMaskedValueChange,a=n.maskOptions,r=a.mask,o=a.prefix;if(n.focused=!0,n.mounted=!0,r){if(n.value)v(n.maskOptions,n.value)<n.maskOptions.mask.length&&n.setCursorToEnd();else{var s=k(n.maskOptions,o),l=k(n.maskOptions,s),i=v(n.maskOptions,l),u=C(n.maskOptions,i),c={start:u,end:u};if(S(t)){var m=t({value:l,selection:c},{value:n.value,selection:null},null,n.getBeforeMaskedValueChangeConfig());l=m.value,c=m.selection}var f=l!==n.getInputValue();f&&n.setInputValue(l),f&&S(n.props.onChange)&&n.props.onChange(e),n.setSelection(c.start,c.end)}n.runSaveSelectionLoop()}S(n.props.onFocus)&&n.props.onFocus(e)},n.onBlur=function(e){var t=n.props.beforeMaskedValueChange,a=n.maskOptions.mask;if(n.stopSaveSelectionLoop(),n.focused=!1,a&&!n.props.alwaysShowMask&&d(n.maskOptions,n.value)){var r="";S(t)&&(r=t({value:r,selection:null},{value:n.value,selection:n.previousSelection},null,n.getBeforeMaskedValueChangeConfig()).value);var o=r!==n.getInputValue();o&&n.setInputValue(r),o&&S(n.props.onChange)&&n.props.onChange(e)}S(n.props.onBlur)&&n.props.onBlur(e)},n.onMouseDown=function(e){if(!n.focused&&document.addEventListener){n.mouseDownX=e.clientX,n.mouseDownY=e.clientY,n.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(t){if(document.removeEventListener("mouseup",e),n.focused){var a=Math.abs(t.clientX-n.mouseDownX),r=Math.abs(t.clientY-n.mouseDownY),o=Math.max(a,r),s=(new Date).getTime()-n.mouseDownTime;(o<=10&&s<=200||o<=5&&s<=300)&&n.setCursorToEnd()}}))}S(n.props.onMouseDown)&&n.props.onMouseDown(e)},n.onPaste=function(e){S(n.props.onPaste)&&n.props.onPaste(e),e.defaultPrevented||(n.beforePasteState={value:n.getInputValue(),selection:n.getSelection()},n.setInputValue(""))},n.handleRef=function(e){null==n.props.children&&S(n.props.inputRef)&&n.props.inputRef(e)};var a=t.mask,r=t.maskChar,s=t.formatChars,l=t.alwaysShowMask,u=t.beforeMaskedValueChange,m=t.defaultValue,p=t.value;n.maskOptions=f(a,r,s),null==m&&(m=""),null==p&&(p=m);var h=w(p);if(n.maskOptions.mask&&(l||h)&&(h=k(n.maskOptions,h),S(u))){var g=t.value;null==t.value&&(g=m),h=u({value:h,selection:null},{value:g=w(g),selection:null},null,n.getBeforeMaskedValueChangeConfig()).value}return n.value=h,n}l(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,a=t.alwaysShowMask,r=t.mask,o=t.maskChar,s=t.formatChars,l=this.maskOptions,i=a||this.isFocused(),u=null!=this.props.value,c=u?w(this.props.value):this.value,m=e?e.start:null;if(this.maskOptions=f(r,o,s),this.maskOptions.mask){!l.mask&&this.isFocused()&&this.runSaveSelectionLoop();var p=this.maskOptions.mask&&this.maskOptions.mask!==l.mask;if(l.mask||u||(c=this.getInputValue()),(p||this.maskOptions.mask&&(c||i))&&(c=k(this.maskOptions,c)),p){var h=v(this.maskOptions,c);(null===m||h<m)&&(m=g(this.maskOptions,c)?h:C(this.maskOptions,h))}!this.maskOptions.mask||!d(this.maskOptions,c)||i||u&&this.props.value||(c="");var E={start:m,end:m};if(S(n)){var O=n({value:c,selection:E},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=O.value,E=O.selection}this.value=c;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):p&&this.forceUpdate();var y=!1;null!=E.start&&null!=E.end&&(y=!e||e.start!==E.start||e.end!==E.end),(y||b)&&this.setSelection(E.start,E.end)}else l.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&M(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var e,t=this.props,n=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),a=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],0<=t.indexOf(n)||(r[n]=e[n]);return r}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){S(n)||u(!1);var o=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],l=s({},a);o.forEach((function(e){return delete l[e]})),e=n(l),o.filter((function(t){return null!=e.props[t]&&e.props[t]!==a[t]})).length&&u(!1)}else e=r.createElement("input",s({ref:this.handleRef},a));var i={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(i.onChange=this.onChange,i.onPaste=this.onPaste,i.onMouseDown=this.onMouseDown),null!=a.value&&(i.value=this.value)),e=r.cloneElement(e,i)},t}(r.Component);e.exports=I},2625:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(14),o=n(16),s=n(15),l=n(0),i=n.n(l),u=n(1159),c=n(1160),m=n(1161),f=n(1162),p=n(1163),h=n(1164),d=n(804),v=n(1066),g=n.n(v),k=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"text-bold-600 font-medium-2 my-1"},"Date Mask ",i.a.createElement("small",null,"dd/mm/yyyy")),i.a.createElement(g.a,{className:"form-control",mask:"99/99/9999",placeholder:"Enter birthdate"}))},E=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"text-bold-600 font-medium-2 my-1"},"Currency Mask ",i.a.createElement("small",null,"$9999")),i.a.createElement(g.a,{className:"form-control",mask:"$9999",placeholder:"Enter Currency In USD"}))},C=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"text-bold-600 font-medium-2 my-1"},"Phone ",i.a.createElement("small",null,"+19 999 999 999")),i.a.createElement(g.a,{className:"form-control",mask:"+19 999 999 999",placeholder:"Enter Phone Number"}))},w=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={value:"",mask:"9999-9999-9999-9999"},e.onChange=function(t){var n=t.target.value,a={mask:"9999-9999-9999-9999",value:n};/^3[47]/.test(n)&&(a.mask="9999-999999-99999"),e.setState(a)},e}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"text-bold-600 font-medium-2 my-1"},"Credit Card"," ",i.a.createElement("small",null,"(autochange to Amex format if starts with 34 or 37)")),i.a.createElement(g.a,Object.assign({className:"form-control"},this.state,{onChange:this.onChange,placeholder:"Enter Credit Card Number"})))}}]),n}(i.a.Component),O=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"text-bold-600 font-medium-2 my-1"},"Purchase Order ",i.a.createElement("small",null,"aaaa 9999-****")),i.a.createElement(g.a,{className:"form-control",mask:"aaaa 9999-****",placeholder:"Enter Purchase Order"}))},S=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"text-bold-600 font-medium-2 my-1"},"Decimal ",i.a.createElement("small",null,"99.99")),i.a.createElement(g.a,{className:"form-control",mask:"99.99",placeholder:"Enter Digits"}))},b=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{breadCrumbTitle:"Input Mask",breadCrumbParent:"Form Elements",breadCrumbActive:"Input Mask"}),i.a.createElement(u.a,null,i.a.createElement(c.a,{sm:"12"},i.a.createElement(m.a,null,i.a.createElement(f.a,null,i.a.createElement(p.a,null,"Input Masks")),i.a.createElement(h.a,null,i.a.createElement(u.a,null,i.a.createElement(c.a,{md:"6",sm:"12"},i.a.createElement(k,null)),i.a.createElement(c.a,{md:"6",sm:"12"},i.a.createElement(E,null)),i.a.createElement(c.a,{md:"6",sm:"12"},i.a.createElement(C,null)),i.a.createElement(c.a,{md:"6",sm:"12"},i.a.createElement(w,null)),i.a.createElement(c.a,{md:"6",sm:"12"},i.a.createElement(O,null)),i.a.createElement(c.a,{md:"6",sm:"12"},i.a.createElement(S,null))))))))}}]),n}(i.a.Component);t.default=b}}]);
//# sourceMappingURL=199.bf2b29cc.chunk.js.map