/*! For license information please see 179.0a280ff7.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[179],{2399:function(t,e,n){"use strict";n.r(e);var r=n(71),i=n(13),o=n(14),a=n(16),s=n(15),l=n(0),c=n.n(l),h=n(1148),u=n(1149),d=n(1150),p=n(1153),f=n(785),m=n(788),v=n(786),g=n(784),y=n(793),w=n(172),b=n(169),E=n(797),k=n(170),x=n(259),S=(n(798),n(42));n(796),n(906);function N(){N=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(L){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof u?e:u,o=Object.create(i.prototype),a=new x(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return D()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=b(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=c(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),o}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=l;var h={};function u(){}function d(){}function p(){}var f={};s(f,i,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(S([])));v&&v!==e&&n.call(v,i)&&(f=v);var g=p.prototype=u.prototype=Object.create(f);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var r;this._invoke=function(i,o){function a(){return new e((function(r,a){!function r(i,o,a,s){var l=c(t[i],t,o);if("throw"!==l.type){var h=l.arg,u=h.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(u).then((function(t){h.value=t,a(h)}),(function(t){return r("throw",t,a,s)}))}s(l.arg)}(i,o,r,a)}))}return r=r?r.then(a,a):a()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=c(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:D}}function D(){return{value:void 0,done:!0}}return d.prototype=p,s(g,"constructor",p),s(p,"constructor",d),d.displayName=s(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),s(w.prototype,o,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new w(l(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),s(g,a,"Generator"),s(g,i,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var D=function(t){Object(a.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={status:"",rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Name",field:"username",width:180,cellRendererFramework:function(t){var e;return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.username))}},{headerName:"Email Id",field:"email",width:180,cellRendererFramework:function(t){var e;return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.email))}},{headerName:"Image",field:"profileImg",filter:!0,width:170,cellRendererFramework:function(t){var e;return c.a.createElement("img",{className:"w-50 h-50  rounded-circle",src:null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.profileImg})}},{headerName:"Meteors",field:"meteors",width:180,cellRendererFramework:function(t){var e;return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.meteors))}},{headerName:"Dollar",field:"creaditedAmt",width:180,cellRendererFramework:function(t){var e;return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.creaditedAmt))}},{headerName:"Remaining",field:"remaining",width:180,cellRendererFramework:function(t){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,t.data.remaining))}},{headerName:"Status",field:"status",filter:!0,width:180,cellRendererFramework:function(t){return"true"==t.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},"Active"):"false"==t.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},"Deactive"):null}},{headerName:"Actions",field:"sortorder",width:250,cellRendererFramework:function(t){var e;return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(S.b,{key:t.data._id,to:"/app/brahmaand/leaderboard/edituserdata/".concat(null===(e=t.data)||void 0===e?void 0:e._id)},c.a.createElement("button",{className:"aifillediticon btn btn-success",size:30},"Payout")))}}]},t.onGridReady=function(e){t.gridApi=e.api,t.gridColumnApi=e.columnApi,t.setState({currenPageSize:t.gridApi.paginationGetCurrentPage()+1,getPageSize:t.gridApi.paginationGetPageSize(),totalPages:t.gridApi.paginationGetTotalPages()})},t.updateSearchQuery=function(e){t.gridApi.setQuickFilter(e)},t.filterSize=function(e){t.gridApi&&(t.gridApi.paginationSetPageSize(Number(e)),t.setState({currenPageSize:e,getPageSize:e}))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=Object(r.a)(N().mark((function t(){var e=this;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("/user/payoutlist").then((function(t){var n=t.data.data;console.log(n),e.setState({rowData:n})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var t=Object(r.a)(N().mark((function t(e){return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,b.a.get("/admin/dltUser/".concat(e)).then((function(t){console.log(t)}),(function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,n=e.rowData,r=e.columnDefs,i=e.defaultColDef;return c.a.createElement(h.a,{className:"app-user-list"},c.a.createElement(u.a,{sm:"12"}),c.a.createElement(u.a,{sm:"12"},c.a.createElement(d.a,null,c.a.createElement(h.a,{className:"m-2"},c.a.createElement(u.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"User's Earning"))),c.a.createElement(p.a,{className:"py-0"},null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(f.a,{className:"p-1 ag-dropdown"},c.a.createElement(m.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(x.a,{className:"ml-50",size:15})),c.a.createElement(v.a,{right:!0},c.a.createElement(g.a,{tag:"div",onClick:function(){return t.filterSize(20)}},"20"),c.a.createElement(g.a,{tag:"div",onClick:function(){return t.filterSize(50)}},"50"),c.a.createElement(g.a,{tag:"div",onClick:function(){return t.filterSize(100)}},"100"),c.a.createElement(g.a,{tag:"div",onClick:function(){return t.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(y.a,{placeholder:"search...",onChange:function(e){return t.updateSearchQuery(e.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(w.a.Ripple,{color:"primary",onClick:function(){return t.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(k.a.Consumer,null,(function(e){return c.a.createElement(E.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:r,rowData:n,onGridReady:t.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:t.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===e.state.direction})})))))))}}]),n}(c.a.Component);e.default=D},906:function(t,e,n){t.exports=n(907)},907:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(0);function i(){return(i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var o=r.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},r.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=r.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},r.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function s(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function l(t,e,n,r,i){return function(t,e,n,r,i){var o=(t-n)/(e-n);if(0===o)return r;if(1===o)return i;for(var a="#",s=1;s<6;s+=2){var l=parseInt(r.substr(s,2),16),c=parseInt(i.substr(s,2),16),h=Math.round((1-o)*l+o*c).toString(16);1===h.length&&(h="0"+h),a+=h}return a}(t,e,n,s(r),s(i))}var c=function(t){function e(e){t.call(this,e);var n=e.height,r=e.width,i=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(r-n,r-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:i?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.O=this.O.bind(this),this.D=this.D.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({j:t,R:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.j,r=e.h,i=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var o=Math.min(this.i,Math.max(this.o,i));o!==r&&this.setState({h:o})},e.prototype.U=function(t){var e=this.state,n=e.h,r=e.N,i=e.B,o=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var s=Date.now()-i;(!r||s<250||o&&n<=a||!o&&n>=a)&&this.A(t),this.W&&this.setState({N:!1,R:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({R:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.O=function(){this.setState({R:!0})},e.prototype.D=function(){this.setState({R:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({R:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,o=t.className,a=t.offColor,s=t.onColor,c=t.offHandleColor,h=t.onHandleColor,u=t.checkedIcon,d=t.uncheckedIcon,p=t.checkedHandleIcon,f=t.uncheckedHandleIcon,m=t.boxShadow,v=t.activeBoxShadow,g=t.height,y=t.width,w=t.borderRadius,b=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),E=this.state,k=E.h,x=E.N,S=E.R,N={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:g/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},D={height:g,width:y,margin:Math.max(0,(this.t-g)/2),position:"relative",background:l(k,this.i,this.o,a,s),borderRadius:"number"==typeof w?w:g/2,cursor:n?"default":"pointer",WebkitTransition:x?null:"background 0.25s",MozTransition:x?null:"background 0.25s",transition:x?null:"background 0.25s"},L={height:g,width:Math.min(1.5*g,y-(this.t+g)/2+1),position:"relative",opacity:(k-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},C={height:g,width:Math.min(1.5*g,y-(this.t+g)/2+1),position:"absolute",opacity:1-(k-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},z={height:this.t,width:this.t,background:l(k,this.i,this.o,c,h),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof w?w-1:"50%",position:"absolute",transform:"translateX("+k+"px)",top:Math.max(0,(g-this.t)/2),outline:0,boxShadow:S?v:m,border:0,WebkitTransition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},M={height:this.t,width:this.t,opacity:Math.max(2*(1-(k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},P={height:this.t,width:this.t,opacity:Math.max(2*((k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"};return r.createElement("div",{className:o,style:N},r.createElement("div",{className:"react-switch-bg",style:D,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},u&&r.createElement("div",{style:L},u),d&&r.createElement("div",{style:C},d)),r.createElement("div",{className:"react-switch-handle",style:z,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.D},f&&r.createElement("div",{style:M},f),p&&r.createElement("div",{style:P},p)),r.createElement("input",i({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},b,{ref:this.S,onFocus:this.O,onBlur:this.D,onKeyUp:this.C,onChange:this.$})))},e}(r.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:o,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=c}}]);
//# sourceMappingURL=179.0a280ff7.chunk.js.map