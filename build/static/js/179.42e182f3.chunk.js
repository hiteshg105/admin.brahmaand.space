/*! For license information please see 179.42e182f3.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[179],{2543:function(t,e,n){"use strict";n.r(e);var r=n(3),i=n(75),a=n(15),o=n(16),s=n(18),c=n(17),l=n(0),u=n.n(l),h=n(1415),d=n(1416),p=n(1417),f=n(1420),m=n(812),v=n(815),g=n(813),y=n(811),w=n(821),b=n(182),E=n(174),k=n(175),x=n(825),S=n(444),N=n(266),D=(n(30),n(826),n(571),n(58)),C=n(882),L=n.n(C);n(824);function O(){O=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,n){return t[e]=n}}function l(t,e,n,i){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),s=new N(i||[]);return r(o,"_invoke",{value:E(t,n,s)}),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=l;var h={};function d(){}function p(){}function f(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(D([])));g&&g!==e&&n.call(g,a)&&(m=g);var y=f.prototype=d.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var i;r(this,"_invoke",{value:function(r,a){function o(){return new e((function(i,o){!function r(i,a,o,s){var c=u(t[i],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,s)}))}s(c.arg)}(r,a,i,o)}))}return i=i?i.then(o,o):o()}})}function E(t,e,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return C()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=k(o,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function k(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=u(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function D(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=f,r(y,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:p,configurable:!0}),p.displayName=c(f,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new b(l(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(y),c(y,s,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=D,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:D(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var z=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={rowData:[],aprv_status:"",paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Link",field:"link",width:110,cellRendererFramework:function(t){var e;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},null===(e=t.data.link)||void 0===e?void 0:e.map((function(t,e){return u.a.createElement("span",{key:e},t)})))}},{headerName:"Category",field:"title",width:110,cellRendererFramework:function(t){var e;return u.a.createElement("div",{className:"d-flex  align-items-center cursor-pointer"},u.a.createElement("span",null,null===(e=t.data.category)||void 0===e?void 0:e.title))}},{headerName:"SubCategory",field:"title",width:110,cellRendererFramework:function(t){var e;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(e=t.data.sub_category)||void 0===e?void 0:e.title))}},{headerName:"Format",field:"format",width:110,cellRendererFramework:function(t){return u.a.createElement("div",{className:"d-flex  align-items-center cursor-pointer"},u.a.createElement("span",null,t.data.format))}},{headerName:"Language",field:"language",width:110,cellRendererFramework:function(t){var e;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},null===(e=t.data.language)||void 0===e?void 0:e.map((function(t){return u.a.createElement("span",{key:t._id},null===t||void 0===t?void 0:t.language)})))}},{headerName:"Image",field:"img",filter:!0,width:110,cellRendererFramework:function(t){return u.a.createElement("img",{className:"w-50 h-50  rounded-circle",src:"https://backend.brahmaand.space/".concat(t.data.img)})}},{headerName:"Topic",field:"topics",width:110,cellRendererFramework:function(t){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,t.data.topics))}},{headerName:"Descripition",field:"desc",width:110,cellRendererFramework:function(t){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,t.data.desc))}},{headerName:"Status",field:"aprv_status",filter:!0,width:110,cellRendererFramework:function(t){return"Active"==t.data.status?u.a.createElement("div",{className:"badge badge-pill badge-success"},t.data.status):"Deactive"==t.data.status?u.a.createElement("div",{className:"badge badge-pill badge-warning"},t.data.status):null}},{headerName:"Actions",field:"sortorder",width:110,display:"flex",alignItems:"center",cellRendererFramework:function(e){return u.a.createElement("div",{className:"actions cursor-pointer d-flex align-items-center",style:{height:"50px"}},u.a.createElement(D.b,{render:function(n){n.history;return u.a.createElement(L.a,{height:20,width:40,id:"exampleSwitch",checked:"Active"===e.data.status,onChange:function(n){t.updateContent(e.data._id,n)},color:"primary"})}}),u.a.createElement(S.a,{size:20,color:"red",onClick:function(){var n=t.gridApi.getSelectedRows();t.runthisfunction(e.data._id),t.gridApi.updateRowData({remove:n})}}))}}]},t.onGridReady=function(e){t.gridApi=e.api,t.gridColumnApi=e.columnApi,t.setState({currenPageSize:t.gridApi.paginationGetCurrentPage()+1,getPageSize:t.gridApi.paginationGetPageSize(),totalPages:t.gridApi.paginationGetTotalPages()})},t.updateSearchQuery=function(e){t.gridApi.setQuickFilter(e)},t.filterSize=function(e){t.gridApi&&(t.gridApi.paginationSetPageSize(Number(e)),t.setState({currenPageSize:e,getPageSize:e}))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=Object(i.a)(O().mark((function t(){var e=this;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("get_all/content/creator").then((function(t){var n=t.data.data;e.setState({rowData:n})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var t=Object(i.a)(O().mark((function t(e){return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,E.a.delete("/content/delete/admin/".concat(e)).then((function(t){console.log(t)}),(function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"updateContent",value:function(){var t=Object(i.a)(O().mark((function t(e,n){var i=this;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.put("/content/update/admin/".concat(e),{status:n?"Active":"Deactive"}).then((function(t){var a=i.state.rowData.map((function(t){return t._id===e?Object(r.a)(Object(r.a)({},t),{},{status:n?"Active":"Deactive"}):t}));i.setState({rowData:a})}),(function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,n=e.rowData,r=e.columnDefs,i=e.defaultColDef;return u.a.createElement(h.a,{className:"app-user-list"},u.a.createElement(d.a,{sm:"12"}),u.a.createElement(d.a,{sm:"12"},u.a.createElement(p.a,null,u.a.createElement(h.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{sm:"6",className:"float-left"},"Content Creator"))),u.a.createElement(f.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(m.a,{className:"p-1 ag-dropdown"},u.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(N.a,{className:"ml-50",size:15})),u.a.createElement(g.a,{right:!0},u.a.createElement(y.a,{tag:"div",onClick:function(){return t.filterSize(20)}},"20"),u.a.createElement(y.a,{tag:"div",onClick:function(){return t.filterSize(50)}},"50"),u.a.createElement(y.a,{tag:"div",onClick:function(){return t.filterSize(100)}},"100"),u.a.createElement(y.a,{tag:"div",onClick:function(){return t.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(w.a,{placeholder:"search...",onChange:function(e){return t.updateSearchQuery(e.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(b.a.Ripple,{color:"primary",onClick:function(){return t.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(k.a.Consumer,null,(function(e){return u.a.createElement(x.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:r,rowData:n,onGridReady:t.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:t.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===e.state.direction})})))))))}}]),n}(u.a.Component);e.default=z},882:function(t,e,n){t.exports=n(883)},883:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(0);function i(){return(i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var a=r.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},r.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),o=r.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},r.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function s(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function c(t,e,n,r,i){return function(t,e,n,r,i){var a=(t-n)/(e-n);if(0===a)return r;if(1===a)return i;for(var o="#",s=1;s<6;s+=2){var c=parseInt(r.substr(s,2),16),l=parseInt(i.substr(s,2),16),u=Math.round((1-a)*c+a*l).toString(16);1===u.length&&(u="0"+u),o+=u}return o}(t,e,n,s(r),s(i))}var l=function(t){function e(e){t.call(this,e);var n=e.height,r=e.width,i=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(r-n,r-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:i?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.O=this.O.bind(this),this.D=this.D.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({j:t,R:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.j,r=e.h,i=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var a=Math.min(this.i,Math.max(this.o,i));a!==r&&this.setState({h:a})},e.prototype.U=function(t){var e=this.state,n=e.h,r=e.N,i=e.B,a=this.props.checked,o=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var s=Date.now()-i;(!r||s<250||a&&n<=o||!a&&n>=o)&&this.A(t),this.W&&this.setState({N:!1,R:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({R:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.O=function(){this.setState({R:!0})},e.prototype.D=function(){this.setState({R:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({R:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,a=t.className,o=t.offColor,s=t.onColor,l=t.offHandleColor,u=t.onHandleColor,h=t.checkedIcon,d=t.uncheckedIcon,p=t.checkedHandleIcon,f=t.uncheckedHandleIcon,m=t.boxShadow,v=t.activeBoxShadow,g=t.height,y=t.width,w=t.borderRadius,b=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),E=this.state,k=E.h,x=E.N,S=E.R,N={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:g/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},D={height:g,width:y,margin:Math.max(0,(this.t-g)/2),position:"relative",background:c(k,this.i,this.o,o,s),borderRadius:"number"==typeof w?w:g/2,cursor:n?"default":"pointer",WebkitTransition:x?null:"background 0.25s",MozTransition:x?null:"background 0.25s",transition:x?null:"background 0.25s"},C={height:g,width:Math.min(1.5*g,y-(this.t+g)/2+1),position:"relative",opacity:(k-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},L={height:g,width:Math.min(1.5*g,y-(this.t+g)/2+1),position:"absolute",opacity:1-(k-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},O={height:this.t,width:this.t,background:c(k,this.i,this.o,l,u),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof w?w-1:"50%",position:"absolute",transform:"translateX("+k+"px)",top:Math.max(0,(g-this.t)/2),outline:0,boxShadow:S?v:m,border:0,WebkitTransition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},z={height:this.t,width:this.t,opacity:Math.max(2*(1-(k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},R={height:this.t,width:this.t,opacity:Math.max(2*((k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"};return r.createElement("div",{className:a,style:N},r.createElement("div",{className:"react-switch-bg",style:D,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},h&&r.createElement("div",{style:C},h),d&&r.createElement("div",{style:L},d)),r.createElement("div",{className:"react-switch-handle",style:O,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.D},f&&r.createElement("div",{style:z},f),p&&r.createElement("div",{style:R},p)),r.createElement("input",i({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},b,{ref:this.S,onFocus:this.O,onBlur:this.D,onKeyUp:this.C,onChange:this.$})))},e}(r.Component);l.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:a,checkedIcon:o,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=l}}]);
//# sourceMappingURL=179.42e182f3.chunk.js.map