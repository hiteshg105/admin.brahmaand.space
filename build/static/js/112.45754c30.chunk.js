(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[112],{2533:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(845),r=a(54),s=a(15),l=a(16),o=a(18),c=a(17),i=a(0),u=a.n(i),d=a(1415),f=a(1416),m=a(1413),p=a(1414),h=a(1417),g=a(182),b=a(1420),y=a(823),v=a(819),E=a(821),O=a(806),j=a(174),N=a(58),C=a(824),S=a.n(C),x=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler=function(e){l.setState({selectedFile:e.target.files}),l.setState({selectedName:e.target.files.name}),console.log(e.target.files)},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(r.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var t=l.props.match.params.id,a=new FormData;a.append("title",l.state.title),a.append("desc",l.state.desc);var r,s=Object(n.a)(l.state.selectedFile);try{for(s.s();!(r=s.n()).done;){var o=r.value;null!==l.state.selectedFile&&a.append("cat_img",o,o.name)}}catch(p){s.e(p)}finally{s.f()}var c,i=Object(n.a)(a.values());try{for(i.s();!(c=i.n()).done;){var u=c.value;console.log(u)}}catch(p){i.e(p)}finally{i.f()}var d,f=Object(n.a)(a.keys());try{for(f.s();!(d=f.n()).done;){var m=d.value;console.log(m)}}catch(p){f.e(p)}finally{f.f()}j.a.post("/admin/editCategory/".concat(t),a).then((function(e){console.log(e),S()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/brahmaand/category/categoryList")})).catch((function(e){console.log(e)}))},l.state={title:"",desc:"",cat_img:"",selectedFile:null,selectedName:""},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;j.a.get("/admin/getoneCategory/".concat(t),{}).then((function(t){console.log(t),e.setState({title:t.data.data.title,desc:t.data.data.desc,cat_img:t.data.data.cat_img})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(f.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(m.a,{listTag:"div"},u.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(p.a,{href:"/app/brahmaand/category/categoryList",tag:"a"},"Category List"),u.a.createElement(p.a,{active:!0},"Edit Category"))))),u.a.createElement(h.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Category")),u.a.createElement(f.a,null,u.a.createElement(N.b,{render:function(e){var t=e.history;return u.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/brahmaand/category/categoryList")}},"Back")}}))),u.a.createElement(b.a,null,u.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(d.a,null,u.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Title"),u.a.createElement(E.a,{required:!0,type:"text",name:"title",placeholder:"",value:this.state.title,onChange:this.changeHandler})),u.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Note"),u.a.createElement(E.a,{required:!0,type:"text",name:"desc",placeholder:"",value:this.state.desc,onChange:this.changeHandler})),u.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Upload Image"),u.a.createElement(O.a,{type:"file",onChange:this.onChangeHandler}))),u.a.createElement(d.a,null,u.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),a}(i.Component)},819:function(e,t,a){"use strict";var n=a(5),r=a(8),s=a(0),l=a.n(s),o=a(2),c=a.n(o),i=a(13),u=a.n(i),d=a(4),f=["className","cssModule","hidden","widths","tag","check","size","for"],m=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:m,order:m,offset:m})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,s=e.hidden,o=e.widths,c=e.tag,i=e.check,m=e.size,p=e.for,h=Object(r.a)(e,f),g=[];o.forEach((function(t,n){var r=e[t];if(delete h[t],r||""===r){var s,l=!n;if(Object(d.isObject)(r)){var o,c=l?"-":"-"+t+"-";s=b(l,t,r.size),g.push(Object(d.mapToCssModules)(u()(((o={})[s]=r.size||""===r.size,o["order"+c+r.order]=r.order||0===r.order,o["offset"+c+r.offset]=r.offset||0===r.offset,o))),a)}else s=b(l,t,r),g.push(s)}}));var y=Object(d.mapToCssModules)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,g,!!g.length&&"col-form-label"),a);return l.a.createElement(c,Object(n.a)({htmlFor:p},h,{className:y}))};y.propTypes=h,y.defaultProps=g,t.a=y},821:function(e,t,a){"use strict";var n=a(5),r=a(8),s=a(12),l=a(14),o=a(0),c=a.n(o),i=a(2),u=a.n(i),d=a(13),f=a.n(d),m=a(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,d=e.addon,h=e.plaintext,g=e.innerRef,b=Object(r.a)(e,p),y=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),E=u||("select"===s||"textarea"===s?s:"input"),O="form-control";h?(O+="-plaintext",E=u||"input"):"file"===s?O+="-file":"range"===s?O+="-range":y&&(O=d?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var j=Object(m.mapToCssModules)(f()(t,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),a);return("input"===E||u&&"function"===typeof u)&&(b.type=s),b.children&&!h&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(m.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(E,Object(n.a)({},b,{ref:g,className:j,"aria-invalid":i}))},t}(c.a.Component);g.propTypes=h,g.defaultProps={type:"text"},t.a=g},823:function(e,t,a){"use strict";var n=a(5),r=a(8),s=a(12),l=a(14),o=a(0),c=a.n(o),i=a(2),u=a.n(i),d=a(13),f=a.n(d),m=a(4),p=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,o=e.innerRef,i=Object(r.a)(e,p),u=Object(m.mapToCssModules)(f()(t,!!s&&"form-inline"),a);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:u}))},t}(o.Component);g.propTypes=h,g.defaultProps={tag:"form"},t.a=g},845:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(95);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,l=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){o=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(o)throw s}}}}}}]);
//# sourceMappingURL=112.45754c30.chunk.js.map