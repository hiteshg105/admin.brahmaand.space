(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[149],{2459:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(51),r=a(13),s=a(14),l=a(16),i=a(15),c=a(0),o=a.n(c),u=a(1148),d=a(1149),m=a(1146),p=a(1147),f=a(1150),h=a(172),b=a(1153),g=a(795),v=a(792),y=a(793),E=a(169),O=(a(27),a(796)),j=a.n(O),T=a(56),x=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),E.a.post("/add_Tuniversity",s.state,{}).then((function(e){console.log(e),j()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/explore/Trupee/trupeeUnivercity")})).catch((function(e){console.log(e)}))},s.state={title:"",desc:"",video_link:""},s}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(d.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(m.a,{listTag:"div"},o.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),o.a.createElement(p.a,{href:"/app/explore/Trupee/trupeeUnivercity",tag:"a"},"Trupee Univercity List"),o.a.createElement(p.a,{active:!0},"Add Trupee Univercity"))))),o.a.createElement(f.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Trupee Univercity")),o.a.createElement(d.a,null,o.a.createElement(T.b,{render:function(e){var t=e.history;return o.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/explore/Trupee/trupeeUnivercity")}},"Back")}}))),o.a.createElement(b.a,null,o.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Title"),o.a.createElement(y.a,{required:!0,type:"text",name:"title",placeholder:"",value:this.state.title,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Video Link"),o.a.createElement(y.a,{required:!0,type:"text",name:"video_link",placeholder:"",value:this.state.video_link,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Descripition"),o.a.createElement(y.a,{required:!0,type:"textarea",name:"desc",placeholder:"",value:this.state.desc,onChange:this.changeHandler}))),o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(c.Component)},792:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(0),l=a.n(s),i=a(1),c=a.n(i),o=a(4),u=a.n(o),d=a(3),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.hidden,i=e.widths,c=e.tag,o=e.check,p=e.size,f=e.for,h=Object(r.a)(e,m),b=[];i.forEach((function(t,n){var r=e[t];if(delete h[t],r||""===r){var s,l=!n;if(Object(d.isObject)(r)){var i,c=l?"-":"-"+t+"-";s=g(l,t,r.size),b.push(Object(d.mapToCssModules)(u()(((i={})[s]=r.size||""===r.size,i["order"+c+r.order]=r.order||0===r.order,i["offset"+c+r.offset]=r.offset||0===r.offset,i))),a)}else s=g(l,t,r),b.push(s)}}));var v=Object(d.mapToCssModules)(u()(t,!!s&&"sr-only",!!o&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),a);return l.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=b,t.a=v},793:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(11),l=a(12),i=a(0),c=a.n(i),o=a(1),u=a.n(o),d=a(4),m=a.n(d),p=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,i=e.valid,o=e.invalid,u=e.tag,d=e.addon,h=e.plaintext,b=e.innerRef,g=Object(r.a)(e,f),v=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),E=u||("select"===s||"textarea"===s?s:"input"),O="form-control";h?(O+="-plaintext",E=u||"input"):"file"===s?O+="-file":"range"===s?O+="-range":v&&(O=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(p.mapToCssModules)(m()(t,o&&"is-invalid",i&&"is-valid",!!l&&"form-control-"+l,O),a);return("input"===E||u&&"function"===typeof u)&&(g.type=s),g.children&&!h&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":o}))},t}(c.a.Component);b.propTypes=h,b.defaultProps={type:"text"},t.a=b},795:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(11),l=a(12),i=a(0),c=a.n(i),o=a(1),u=a.n(o),d=a(4),m=a.n(d),p=a(3),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,i=e.innerRef,o=Object(r.a)(e,f),u=Object(p.mapToCssModules)(m()(t,!!s&&"form-inline"),a);return c.a.createElement(l,Object(n.a)({},o,{ref:i,className:u}))},t}(i.Component);b.propTypes=h,b.defaultProps={tag:"form"},t.a=b}}]);
//# sourceMappingURL=149.b7e6ffdd.chunk.js.map