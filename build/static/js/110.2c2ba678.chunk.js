(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[110],{2402:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var n=a(822),r=a(51),s=a(13),l=a(14),o=a(16),i=a(15),c=a(0),u=a.n(c),f=a(1148),d=a(1149),m=a(1146),p=a(1147),b=a(1150),h=a(172),g=a(1153),v=a(795),y=a(792),O=a(793),j=a(779),E=a(169),N=a(796),C=a.n(N),k=a(56),z=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler=function(e){l.setState({selectedFile:e.target.files}),l.setState({selectedName:e.target.files.name}),console.log(e.target.files)},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(r.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("video_link",l.state.video_link),t.append("status",l.state.status);var a,r=Object(n.a)(l.state.selectedFile);try{for(r.s();!(a=r.n()).done;){var s=a.value;null!==l.state.selectedFile&&t.append("thumbnail_img",s,s.name)}}catch(m){r.e(m)}finally{r.f()}var o,i=Object(n.a)(t.values());try{for(i.s();!(o=i.n()).done;){var c=o.value;console.log(c)}}catch(m){i.e(m)}finally{i.f()}var u,f=Object(n.a)(t.keys());try{for(f.s();!(u=f.n()).done;){var d=u.value;console.log(d)}}catch(m){f.e(m)}finally{f.f()}E.a.post("/admin/add_feature_cnt",t).then((function(e){console.log(e.data.data),C()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/brahmaand/content/featureContent")})).catch((function(e){console.log(e)}))},l.state={thumbnail_img:"",video_link:"",selectedFile:null,selectedName:"",status:""},l}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(f.a,null,u.a.createElement(d.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(m.a,{listTag:"div"},u.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(p.a,{href:"/app/brahmaand/content/featureContent",tag:"a"},"Featuer Content List"),u.a.createElement(p.a,{active:!0},"Add Content "))))),u.a.createElement(b.a,null,u.a.createElement(f.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Content")),u.a.createElement(d.a,null,u.a.createElement(k.b,{render:function(e){var t=e.history;return u.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/brahmaand/content/featureContent")}},"Back")}}))),u.a.createElement(g.a,null,u.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(f.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Video Link"),u.a.createElement(O.a,{required:!0,name:"video_link",placeholder:"Enter title",value:this.state.video_link,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Thumnail Image"),u.a.createElement(j.a,{type:"file",onChange:this.onChangeHandler}))),u.a.createElement(f.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(c.Component)},792:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(0),l=a.n(s),o=a(1),i=a.n(o),c=a(4),u=a.n(c),f=a(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],m=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:m,order:m,offset:m})]),b={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:f.tagPropType,className:i.a.string,cssModule:i.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.hidden,o=e.widths,i=e.tag,c=e.check,m=e.size,p=e.for,b=Object(r.a)(e,d),h=[];o.forEach((function(t,n){var r=e[t];if(delete b[t],r||""===r){var s,l=!n;if(Object(f.isObject)(r)){var o,i=l?"-":"-"+t+"-";s=g(l,t,r.size),h.push(Object(f.mapToCssModules)(u()(((o={})[s]=r.size||""===r.size,o["order"+i+r.order]=r.order||0===r.order,o["offset"+i+r.offset]=r.offset||0===r.offset,o))),a)}else s=g(l,t,r),h.push(s)}}));var v=Object(f.mapToCssModules)(u()(t,!!s&&"sr-only",!!c&&"form-check-label",!!m&&"col-form-label-"+m,h,!!h.length&&"col-form-label"),a);return l.a.createElement(i,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=h,t.a=v},793:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(11),l=a(12),o=a(0),i=a.n(o),c=a(1),u=a.n(c),f=a(4),d=a.n(f),m=a(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,o=e.valid,c=e.invalid,u=e.tag,f=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,p),v=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),O=u||("select"===s||"textarea"===s?s:"input"),j="form-control";b?(j+="-plaintext",O=u||"input"):"file"===s?j+="-file":"range"===s?j+="-range":v&&(j=f?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var E=Object(m.mapToCssModules)(d()(t,c&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,j),a);return("input"===O||u&&"function"===typeof u)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof O&&"select"!==O&&(Object(m.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(O,Object(n.a)({},g,{ref:h,className:E,"aria-invalid":c}))},t}(i.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},795:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(11),l=a(12),o=a(0),i=a.n(o),c=a(1),u=a.n(c),f=a(4),d=a.n(f),m=a(3),p=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,o=e.innerRef,c=Object(r.a)(e,p),u=Object(m.mapToCssModules)(d()(t,!!s&&"form-inline"),a);return i.a.createElement(l,Object(n.a)({},c,{ref:o,className:u}))},t}(o.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h},822:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(90);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,l=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){o=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(o)throw s}}}}}}]);
//# sourceMappingURL=110.2c2ba678.chunk.js.map