(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[73],{1135:function(e,a,t){"use strict";var n=t(13),r=t(14),s=t(16),l=t(15),c=t(0),i=t.n(c),o=t(188),d=t(431),u=t(795),m=t(798),p=t(796),f=t(794),h=t(812),b=t(803),g=t(801),v=t(172),E=t(1058),y=t.n(E),O=(t(1136),t(955),{business:"chip-success",work:"chip-warning",personal:"chip-danger",others:"chip-primary"});i.a.Component},2470:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return T}));var n=t(51),r=t(13),s=t(14),l=t(16),c=t(15),i=t(0),o=t.n(i),d=t(1159),u=t(1160),m=t(1157),p=t(1158),f=t(1161),h=t(172),b=t(1164),g=t(805),v=t(801),E=t(803),y=t(169),O=t(806),j=t.n(O),N=t(56),T=(t(1135),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),y.a.post("/addScript",s.state,{}).then((function(e){console.log(e),j()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/brahmaand/leaderboard/leaderBoardList")})).catch((function(e){console.log(e)}))},s.state={title:"",desc:""},s}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(u.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(m.a,{listTag:"div"},o.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),o.a.createElement(p.a,{href:"/app/brahmaand/leaderboard/leaderBoardList",tag:"a"},"Leader Board List"),o.a.createElement(p.a,{active:!0},"Add Leader"))))),o.a.createElement(f.a,null,o.a.createElement(d.a,{className:"m-2"},o.a.createElement(u.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Leader")),o.a.createElement(u.a,null,o.a.createElement(N.b,{render:function(e){var a=e.history;return o.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/brahmaand/leaderboard/leaderBoardList")}},"Back")}}))),o.a.createElement(b.a,null,o.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(d.a,null,o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Name"),o.a.createElement(E.a,{required:!0,type:"text",name:"script_name",placeholder:"Enter name",value:this.state.script_name,onChange:this.changeHandler})),o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Current Point"),o.a.createElement(E.a,{required:!0,type:"text",name:"script_name",placeholder:"Enter name",value:this.state.script_name,onChange:this.changeHandler})),o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null," Total Point"),o.a.createElement(E.a,{required:!0,type:"text",name:"script_name",placeholder:"Enter name",value:this.state.script_name,onChange:this.changeHandler})),o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Image"),o.a.createElement(E.a,{required:!0,type:"file",name:"script_name",placeholder:"Enter name",value:this.state.script_name,onChange:this.changeHandler}))),o.a.createElement(d.a,null,o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(i.Component))},801:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(0),l=t.n(s),c=t(1),i=t.n(c),o=t(4),d=t.n(o),u=t(3),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),h={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,s=e.hidden,c=e.widths,i=e.tag,o=e.check,p=e.size,f=e.for,h=Object(r.a)(e,m),b=[];c.forEach((function(a,n){var r=e[a];if(delete h[a],r||""===r){var s,l=!n;if(Object(u.isObject)(r)){var c,i=l?"-":"-"+a+"-";s=g(l,a,r.size),b.push(Object(u.mapToCssModules)(d()(((c={})[s]=r.size||""===r.size,c["order"+i+r.order]=r.order||0===r.order,c["offset"+i+r.offset]=r.offset||0===r.offset,c))),t)}else s=g(l,a,r),b.push(s)}}));var v=Object(u.mapToCssModules)(d()(a,!!s&&"sr-only",!!o&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return l.a.createElement(i,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=b,a.a=v},803:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(11),l=t(12),c=t(0),i=t.n(c),o=t(1),d=t.n(o),u=t(4),m=t.n(u),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,l=e.bsSize,c=e.valid,o=e.invalid,d=e.tag,u=e.addon,h=e.plaintext,b=e.innerRef,g=Object(r.a)(e,f),v=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),y=d||("select"===s||"textarea"===s?s:"input"),O="form-control";h?(O+="-plaintext",y=d||"input"):"file"===s?O+="-file":"range"===s?O+="-range":v&&(O=u?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(p.mapToCssModules)(m()(a,o&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===y||d&&"function"===typeof d)&&(g.type=s),g.children&&!h&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(y,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":o}))},a}(i.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},805:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(11),l=t(12),c=t(0),i=t.n(c),o=t(1),d=t.n(o),u=t(4),m=t.n(u),p=t(3),f=["className","cssModule","inline","tag","innerRef"],h={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,l=e.tag,c=e.innerRef,o=Object(r.a)(e,f),d=Object(p.mapToCssModules)(m()(a,!!s&&"form-inline"),t);return i.a.createElement(l,Object(n.a)({},o,{ref:c,className:d}))},a}(c.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b},812:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(0),l=t.n(s),c=t(1),i=t.n(c),o=t(4),d=t.n(o),u=t(3),m=["className","cssModule","row","disabled","check","inline","tag"],p={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.row,c=e.disabled,i=e.check,o=e.inline,p=e.tag,f=Object(r.a)(e,m),h=Object(u.mapToCssModules)(d()(a,!!s&&"row",i?"form-check":"form-group",!(!i||!o)&&"form-check-inline",!(!i||!c)&&"disabled"),t);return"fieldset"===p&&(f.disabled=c),l.a.createElement(p,Object(n.a)({},f,{className:h}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},955:function(e,a,t){}}]);
//# sourceMappingURL=73.70dafa1e.chunk.js.map