(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[111],{2441:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a(831),r=a(51),s=a(13),l=a(14),o=a(16),c=a(15),i=a(0),u=a.n(i),d=a(1159),f=a(1160),m=a(1157),p=a(1158),b=a(1161),h=a(172),g=a(1164),y=a(805),v=a(801),O=a(803),E=a(789),j=a(169),N=a(806),x=a.n(N),z=a(56),C=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler=function(e){l.setState({selectedFile:e.target.files}),l.setState({selectedName:e.target.files.name}),console.log(e.target.files)},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(r.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("title",l.state.title),t.append("desc",l.state.desc);var a,r=Object(n.a)(l.state.selectedFile);try{for(r.s();!(a=r.n()).done;){var s=a.value;null!==l.state.selectedFile&&t.append("cat_img",s,s.name)}}catch(m){r.e(m)}finally{r.f()}var o,c=Object(n.a)(t.values());try{for(c.s();!(o=c.n()).done;){var i=o.value;console.log(i)}}catch(m){c.e(m)}finally{c.f()}var u,d=Object(n.a)(t.keys());try{for(d.s();!(u=d.n()).done;){var f=u.value;console.log(f)}}catch(m){d.e(m)}finally{d.f()}j.a.post("/admin/addCategory",t).then((function(e){console.log(e),x()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/brahmaand/category/categoryList")})).catch((function(e){console.log(e)}))},l.state={title:"",desc:"",cat_img:"",selectedFile:null,selectedName:""},l}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(f.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(m.a,{listTag:"div"},u.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(p.a,{href:"/app/brahmaand/category/categoryList",tag:"a"},"Category List"),u.a.createElement(p.a,{active:!0},"Add Category"))))),u.a.createElement(b.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Category")),u.a.createElement(f.a,null,u.a.createElement(z.b,{render:function(e){var t=e.history;return u.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/brahmaand/category/categoryList")}},"Back")}}))),u.a.createElement(g.a,null,u.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(d.a,null,u.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Title"),u.a.createElement(O.a,{required:!0,type:"text",name:"title",value:this.state.title,onChange:this.changeHandler})),u.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Note"),u.a.createElement(O.a,{required:!0,type:"text",name:"desc",value:this.state.desc,onChange:this.changeHandler})),u.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Upload Image"),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler}))),u.a.createElement(d.a,null,u.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(i.Component)},801:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(0),l=a.n(s),o=a(1),c=a.n(o),i=a(4),u=a.n(i),d=a(3),f=["className","cssModule","hidden","widths","tag","check","size","for"],m=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:m,order:m,offset:m})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,s=e.hidden,o=e.widths,c=e.tag,i=e.check,m=e.size,p=e.for,b=Object(r.a)(e,f),h=[];o.forEach((function(t,n){var r=e[t];if(delete b[t],r||""===r){var s,l=!n;if(Object(d.isObject)(r)){var o,c=l?"-":"-"+t+"-";s=g(l,t,r.size),h.push(Object(d.mapToCssModules)(u()(((o={})[s]=r.size||""===r.size,o["order"+c+r.order]=r.order||0===r.order,o["offset"+c+r.offset]=r.offset||0===r.offset,o))),a)}else s=g(l,t,r),h.push(s)}}));var y=Object(d.mapToCssModules)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,h,!!h.length&&"col-form-label"),a);return l.a.createElement(c,Object(n.a)({htmlFor:p},b,{className:y}))};y.propTypes=b,y.defaultProps=h,t.a=y},803:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(11),l=a(12),o=a(0),c=a.n(o),i=a(1),u=a.n(i),d=a(4),f=a.n(d),m=a(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,p),y=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),O=u||("select"===s||"textarea"===s?s:"input"),E="form-control";b?(E+="-plaintext",O=u||"input"):"file"===s?E+="-file":"range"===s?E+="-range":y&&(E=d?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(m.mapToCssModules)(f()(t,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,E),a);return("input"===O||u&&"function"===typeof u)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof O&&"select"!==O&&(Object(m.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(O,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":i}))},t}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},805:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(11),l=a(12),o=a(0),c=a.n(o),i=a(1),u=a.n(i),d=a(4),f=a.n(d),m=a(3),p=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,o=e.innerRef,i=Object(r.a)(e,p),u=Object(m.mapToCssModules)(f()(t,!!s&&"form-inline"),a);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:u}))},t}(o.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h},831:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(91);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,l=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){o=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(o)throw s}}}}}}]);
//# sourceMappingURL=111.f8f340d0.chunk.js.map