(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[125],{2521:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var n=a(831),r=a(51),s=a(13),l=a(14),i=a(16),o=a(15),c=a(0),u=a.n(c),f=a(1159),d=a(1160),m=a(1157),p=a(1158),b=a(1161),h=a(172),g=a(1164),v=a(805),y=a(801),E=a(803),O=a(169),j=a(806),N=a.n(j),x=a(56),z=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(r.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),console.log(l.state);var t=new FormData;t.append("title",l.state.title),t.append("desc",l.state.desc),t.append("img",l.state.selectedFile,l.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var s=a.value;console.log(s)}}catch(u){r.e(u)}finally{r.f()}var i,o=Object(n.a)(t.keys());try{for(o.s();!(i=o.n()).done;){var c=i.value;console.log(c)}}catch(u){o.e(u)}finally{o.f()}O.a.post("/add_notification",t).then((function(e){console.log(e.data),N()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/trade/generalNotifList")})).catch((function(e){console.log(e)}))},l.state={title:"",desc:"",img:"",selectedName:"",selectedFile:null},l}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(f.a,null,u.a.createElement(d.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(m.a,{listTag:"div"},u.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(p.a,{href:"/app/trade/generalNotifList",tag:"a"},"General Notification List"),u.a.createElement(p.a,{active:!0},"Add General Notification"))))),u.a.createElement(b.a,null,u.a.createElement(f.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add General Notification")),u.a.createElement(d.a,null,u.a.createElement(x.b,{render:function(e){var t=e.history;return u.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/trade/generalNotifList")}},"Back")}}))),u.a.createElement(g.a,null,u.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(f.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Title"),u.a.createElement(E.a,{required:!0,type:"text",name:"title",placeholder:"",value:this.state.title,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Image"),u.a.createElement(E.a,{required:!0,type:"file",name:"img",onChange:this.onChangeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Descripition"),u.a.createElement(E.a,{required:!0,type:"textarea",name:"desc",placeholder:"",value:this.state.desc,onChange:this.changeHandler}))),u.a.createElement(f.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(c.Component)},801:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(0),l=a.n(s),i=a(1),o=a.n(i),c=a(4),u=a.n(c),f=a(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],m=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:m,order:m,offset:m})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:f.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.hidden,i=e.widths,o=e.tag,c=e.check,m=e.size,p=e.for,b=Object(r.a)(e,d),h=[];i.forEach((function(t,n){var r=e[t];if(delete b[t],r||""===r){var s,l=!n;if(Object(f.isObject)(r)){var i,o=l?"-":"-"+t+"-";s=g(l,t,r.size),h.push(Object(f.mapToCssModules)(u()(((i={})[s]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i))),a)}else s=g(l,t,r),h.push(s)}}));var v=Object(f.mapToCssModules)(u()(t,!!s&&"sr-only",!!c&&"form-check-label",!!m&&"col-form-label-"+m,h,!!h.length&&"col-form-label"),a);return l.a.createElement(o,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=h,t.a=v},803:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(11),l=a(12),i=a(0),o=a.n(i),c=a(1),u=a.n(c),f=a(4),d=a.n(f),m=a(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,i=e.valid,c=e.invalid,u=e.tag,f=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,p),v=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),E=u||("select"===s||"textarea"===s?s:"input"),O="form-control";b?(O+="-plaintext",E=u||"input"):"file"===s?O+="-file":"range"===s?O+="-range":v&&(O=f?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(m.mapToCssModules)(d()(t,c&&"is-invalid",i&&"is-valid",!!l&&"form-control-"+l,O),a);return("input"===E||u&&"function"===typeof u)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(m.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(E,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":c}))},t}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},805:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(11),l=a(12),i=a(0),o=a.n(i),c=a(1),u=a.n(c),f=a(4),d=a.n(f),m=a(3),p=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,i=e.innerRef,c=Object(r.a)(e,p),u=Object(m.mapToCssModules)(d()(t,!!s&&"form-inline"),a);return o.a.createElement(l,Object(n.a)({},c,{ref:i,className:u}))},t}(i.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h},831:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(91);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,l=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw s}}}}}}]);
//# sourceMappingURL=125.c85426fa.chunk.js.map