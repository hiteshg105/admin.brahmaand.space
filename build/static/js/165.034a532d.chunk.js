(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[165],{2436:function(e,a,t){"use strict";t.r(a),t.d(a,"AddEquityCash",(function(){return C}));var n=t(51),l=t(13),r=t(14),s=t(16),c=t(15),i=t(0),o=t.n(i),m=t(1150),u=t(1148),p=t(1149),d=t(172),h=t(1153),f=t(795),g=t(792),E=t(779),b=t(793),y=t(56),v=t(796),T=t.n(v),N=t(169),C=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),N.a.post("/add_equityCash",r.state).then((function(e){console.log(e),T()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/trade/equityCashList")})).catch((function(e){console.log(e)}))},r.state={script_type:"",cash_scrpt_name:"",active_value:"",active_value2:"",call_type:"",SL:"",sl_type:!1,T1:"",t1_type:!1,T2:"",t2_type:!1,T3:"",t3_type:!1,T4:"",t4_type:!1,t5:"",t5_type:!1,qty:"",investment_amt:"",no_of_lots:"",pl_type:"",profit_loss_amt:"",expiryDate:"",type:"Cash",cstmMsg:""},r.state={scriptN:[],expdateI:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/getCashScript").then((function(a){console.log(a),e.setState({scriptN:a.data.data})})).catch((function(e){console.log(e)})),N.a.get("/datelist").then((function(a){console.log(a),e.setState({expdateI:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a;return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(p.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Equity Cash")),o.a.createElement(p.a,null,o.a.createElement(y.b,{render:function(e){var a=e.history;return o.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/trade/equityCashList")}},"Back")}}))),o.a.createElement(h.a,null,o.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(g.a,null,"Script Name"),o.a.createElement(E.a,{type:"select",name:"cash_scrpt_name",value:this.state.scriptName,onChange:this.changeHandler},o.a.createElement("option",null,"select script"),null===(e=this.state.scriptN)||void 0===e?void 0:e.map((function(e){return o.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.scriptName)})))),o.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(g.a,null,"Expiry Date"),o.a.createElement(E.a,{type:"select",name:"expiryDate",value:this.state.expDate,onChange:this.changeHandler},o.a.createElement("option",null,"Expiry Date"),null===(a=this.state.expdateI)||void 0===a?void 0:a.map((function(e){return o.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.expDate)})))),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,{for:"exampleSelect"},"Equity Script"),o.a.createElement(b.a,{id:"exampleSelect",name:"script_type",type:"select",value:this.state.script_type,onChange:this.changeHandler},o.a.createElement("option",null,"Select Script"),o.a.createElement("option",null,"BUY"),o.a.createElement("option",null,"SELL"))),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,{for:"exampleSelect"},"Call Type"),o.a.createElement(b.a,{id:"exampleSelect",name:"call_type",type:"select",value:this.state.call_type,onChange:this.changeHandler},o.a.createElement("option",null,"Select Call Type"),o.a.createElement("option",null,"Intraday"),o.a.createElement("option",null,"BTST"),o.a.createElement("option",null,"Short Term"),o.a.createElement("option",null,"Intraday or BTST"),o.a.createElement("option",null,"Intraday (Risky)"),o.a.createElement("option",null,"Intraday (Trailed)"),o.a.createElement("option",null,"Intraday (Re-entry)"),o.a.createElement("option",null,"Intraday (Re-entry- Trailed)"),o.a.createElement("option",null,"Intraday (Hero-Zero)"))),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"Active Value"),o.a.createElement(b.a,{type:"number",placeholder:"Enter Active Value",name:"active_value",value:this.state.active_value,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"Range Value"),o.a.createElement(b.a,{type:"number",placeholder:"Enter Max. Value Price",name:"active_value2",value:this.state.active_value2,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"SL"),o.a.createElement(b.a,{name:"SL",type:"number",placeholder:"Enter Stop Loss",value:this.state.SL,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"T\u20b9 1 "),o.a.createElement(b.a,{type:"number",placeholder:"Enter Target 1",name:"T1",value:this.state.T1,onChange:this.changeHandler}))," ",o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"T\u20b9 2"),o.a.createElement(b.a,{type:"number",placeholder:"Enter Target 2",name:"T2",value:this.state.T2,onChange:this.changeHandler}))," ",o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"T\u20b9 3"),o.a.createElement(b.a,{type:"number",placeholder:"Enter Target 3",name:"T3",value:this.state.T3,onChange:this.changeHandler}))," ",o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"T\u20b9 4"),o.a.createElement(b.a,{type:"number",placeholder:"Enter Target 4",name:"T4",value:this.state.T4,onChange:this.changeHandler}))," ",o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"Quantity"),o.a.createElement(b.a,{type:"number",name:"qty",placeholder:"Enter Quantity",value:this.state.qty,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"Achieved Target+"),o.a.createElement(b.a,{type:"text",placeholder:"Enter Target 5",name:"t5",value:this.state.t5,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"Type"),o.a.createElement(b.a,{type:"select",name:"type",placeholder:"Enter Type ",value:this.state.type,onChange:this.changeHandler},o.a.createElement("option",null,"Cash"))),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"Trade Alert"),o.a.createElement(b.a,{type:"text",placeholder:"Keep booking or trailing stop loss",name:"cstmMsg",value:this.state.cstmMsg,onChange:this.changeHandler}))),o.a.createElement(u.a,null,o.a.createElement(d.a.Ripple,{className:"mr-1 mb-1",type:"submit",color:"primary"},"Add Equity Cash"))))))}}]),t}(i.Component);a.default=C},792:function(e,a,t){"use strict";var n=t(5),l=t(9),r=t(0),s=t.n(r),c=t(1),i=t.n(c),o=t(4),m=t.n(o),u=t(3),p=["className","cssModule","hidden","widths","tag","check","size","for"],d=i.a.oneOfType([i.a.number,i.a.string]),h=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:d,order:d,offset:d})]),f={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:i.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},b=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,i=e.tag,o=e.check,d=e.size,h=e.for,f=Object(l.a)(e,p),g=[];c.forEach((function(a,n){var l=e[a];if(delete f[a],l||""===l){var r,s=!n;if(Object(u.isObject)(l)){var c,i=s?"-":"-"+a+"-";r=E(s,a,l.size),g.push(Object(u.mapToCssModules)(m()(((c={})[r]=l.size||""===l.size,c["order"+i+l.order]=l.order||0===l.order,c["offset"+i+l.offset]=l.offset||0===l.offset,c))),t)}else r=E(s,a,l),g.push(r)}}));var b=Object(u.mapToCssModules)(m()(a,!!r&&"sr-only",!!o&&"form-check-label",!!d&&"col-form-label-"+d,g,!!g.length&&"col-form-label"),t);return s.a.createElement(i,Object(n.a)({htmlFor:h},f,{className:b}))};b.propTypes=f,b.defaultProps=g,a.a=b},793:function(e,a,t){"use strict";var n=t(5),l=t(9),r=t(11),s=t(12),c=t(0),i=t.n(c),o=t(1),m=t.n(o),u=t(4),p=t.n(u),d=t(3),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:d.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,s=e.bsSize,c=e.valid,o=e.invalid,m=e.tag,u=e.addon,f=e.plaintext,g=e.innerRef,E=Object(l.a)(e,h),b=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),v=m||("select"===r||"textarea"===r?r:"input"),T="form-control";f?(T+="-plaintext",v=m||"input"):"file"===r?T+="-file":"range"===r?T+="-range":b&&(T=u?null:"form-check-input"),E.size&&y.test(E.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=E.size,delete E.size);var N=Object(d.mapToCssModules)(p()(a,o&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,T),t);return("input"===v||m&&"function"===typeof m)&&(E.type=r),E.children&&!f&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete E.children),i.a.createElement(v,Object(n.a)({},E,{ref:g,className:N,"aria-invalid":o}))},a}(i.a.Component);g.propTypes=f,g.defaultProps={type:"text"},a.a=g},795:function(e,a,t){"use strict";var n=t(5),l=t(9),r=t(11),s=t(12),c=t(0),i=t.n(c),o=t(1),m=t.n(o),u=t(4),p=t.n(u),d=t(3),h=["className","cssModule","inline","tag","innerRef"],f={children:m.a.node,inline:m.a.bool,tag:d.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,s=e.tag,c=e.innerRef,o=Object(l.a)(e,h),m=Object(d.mapToCssModules)(p()(a,!!r&&"form-inline"),t);return i.a.createElement(s,Object(n.a)({},o,{ref:c,className:m}))},a}(c.Component);g.propTypes=f,g.defaultProps={tag:"form"},a.a=g}}]);
//# sourceMappingURL=165.034a532d.chunk.js.map