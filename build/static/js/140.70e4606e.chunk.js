(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[140],{2380:function(e,t,a){"use strict";a.r(t),a.d(t,"AddNotification",(function(){return y}));var n=a(51),s=a(13),i=a(14),r=a(16),o=a(15),c=a(0),l=a.n(c),u=a(1150),f=a(1148),d=a(1149),p=a(172),m=a(1153),b=a(795),h=a(792),g=a(793),v=a(56),O=a(169),y=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).handleChange=function(e){i.setState({dealer:e},(function(){return console.log("Option selected:",i.state.dealer)}))},i.changeHandler=function(e){i.setState(Object(n.a)({},e.target.name,e.target.value))},i.submitHandler=function(e){e.preventDefault(),O.a.post("/admin/add_notification",i.state).then((function(e){console.log(e),i.props.history.push("/app/notif/notification")})).catch((function(e){console.log(e)}))},i.state={desc:""},i}return Object(i.a)(a,[{key:"render",value:function(){this.state.dealer;return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(f.a,{className:"m-2"},l.a.createElement(d.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Notification")),l.a.createElement(d.a,null,l.a.createElement(v.b,{render:function(e){var t=e.history;return l.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/notif/notification")}},"Back")}}))),l.a.createElement(m.a,null,l.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},l.a.createElement(f.a,{className:"mb-2"},l.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},l.a.createElement(h.a,null,"Title"),l.a.createElement(g.a,{type:"text",name:"title",value:this.state.title,onChange:this.changeHandler})),l.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},l.a.createElement(h.a,null,"Descripiton"),l.a.createElement(g.a,{type:"textarea",name:"desc",value:this.state.desc,onChange:this.changeHandler}))),l.a.createElement(f.a,null,l.a.createElement(p.a.Ripple,{className:"mr-1 mb-1",type:"submit",color:"primary"},"Add Notification List"))))))}}]),a}(c.Component);t.default=y},792:function(e,t,a){"use strict";var n=a(5),s=a(9),i=a(0),r=a.n(i),o=a(1),c=a.n(o),l=a(4),u=a.n(l),f=a(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:f.tagPropType,className:c.a.string,cssModule:c.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,i=e.hidden,o=e.widths,c=e.tag,l=e.check,p=e.size,m=e.for,b=Object(s.a)(e,d),h=[];o.forEach((function(t,n){var s=e[t];if(delete b[t],s||""===s){var i,r=!n;if(Object(f.isObject)(s)){var o,c=r?"-":"-"+t+"-";i=g(r,t,s.size),h.push(Object(f.mapToCssModules)(u()(((o={})[i]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),a)}else i=g(r,t,s),h.push(i)}}));var v=Object(f.mapToCssModules)(u()(t,!!i&&"sr-only",!!l&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),a);return r.a.createElement(c,Object(n.a)({htmlFor:m},b,{className:v}))};v.propTypes=b,v.defaultProps=h,t.a=v},793:function(e,t,a){"use strict";var n=a(5),s=a(9),i=a(11),r=a(12),o=a(0),c=a.n(o),l=a(1),u=a.n(l),f=a(4),d=a.n(f),p=a(3),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,r=e.bsSize,o=e.valid,l=e.invalid,u=e.tag,f=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,m),v=["radio","checkbox"].indexOf(i)>-1,O=new RegExp("\\D","g"),y=u||("select"===i||"textarea"===i?i:"input"),j="form-control";b?(j+="-plaintext",y=u||"input"):"file"===i?j+="-file":"range"===i?j+="-range":v&&(j=f?null:"form-check-input"),g.size&&O.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var E=Object(p.mapToCssModules)(d()(t,l&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,j),a);return("input"===y||u&&"function"===typeof u)&&(g.type=i),g.children&&!b&&"select"!==i&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(y,Object(n.a)({},g,{ref:h,className:E,"aria-invalid":l}))},t}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},795:function(e,t,a){"use strict";var n=a(5),s=a(9),i=a(11),r=a(12),o=a(0),c=a.n(o),l=a(1),u=a.n(l),f=a(4),d=a.n(f),p=a(3),m=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.submit=a.submit.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.inline,r=e.tag,o=e.innerRef,l=Object(s.a)(e,m),u=Object(p.mapToCssModules)(d()(t,!!i&&"form-inline"),a);return c.a.createElement(r,Object(n.a)({},l,{ref:o,className:u}))},t}(o.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h}}]);
//# sourceMappingURL=140.70e4606e.chunk.js.map