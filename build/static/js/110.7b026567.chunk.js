(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[110],{2555:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(54),s=a(15),l=a(16),r=a(18),c=a(17),o=a(0),i=a.n(o),m=(a(951),a(1415)),d=a(1416),u=a(1413),p=a(1414),g=a(1417),b=a(182),f=a(1420),h=a(823),y=a(819),E=a(821),v=a(806),N=a(174),O=a(58),_=a(824),j=a.n(_),x=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler1=function(e){l.setState({selectedFile1:e.target.files[0]}),l.setState({selectedName:e.target.files.name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var t=l.props.match.params.id;console.log(l.state.status);var a=new FormData;a.append("blog_title",l.state.blog_title),a.append("posted_by",l.state.posted_by),a.append("desc",l.state.desc),a.append("blog_type",l.state.blog_type),a.append("status",l.state.status),""!==l.state.selectedFile&&a.append("blogImg",l.state.selectedFile),""!==l.state.selectedFile1&&a.append("posted_by_img",l.state.selectedFile1),N.a.post("admin/editBlog/".concat(t),a).then((function(e){console.log(e),"success"==e.data.message&&(j()("Success!","Submitted SuccessFully!","success"),l.props.history.push("/app/brahmaand/blogs/blogList"))})).catch((function(e){console.log(e)}))},l.state={blog_title:"",blogImg:"",posted_by_img:"",posted_by:"",desc:"",blog_type:"",selectedFile:null,selectedFile1:null,selectedName:"",status:""},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;N.a.get("/admin/viewoneBlog/".concat(t)).then((function(t){console.log(t),e.setState({blog_title:t.data.data.blog_title,posted_by:t.data.data.posted_by,desc:t.data.data.desc,blog_type:t.data.data.blog_type,blogImg:t.data.data.blogImg,posted_by_img:t.data.data.posted_by_img,status:t.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(p.a,{href:"/app/brahmaand/blogs/blogList",tag:"a"},"Blog List"),i.a.createElement(p.a,{active:!0},"Edit Blog "))))),i.a.createElement(g.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Blog")),i.a.createElement(d.a,null,i.a.createElement(O.b,{render:function(e){var t=e.history;return i.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/brahmaand/blogs/blogList")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"Title"),i.a.createElement(E.a,{required:!0,type:"text",name:"blog_title",placeholder:"",value:this.state.blog_title,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"Posted By"),i.a.createElement(E.a,{required:!0,type:"text",name:"posted_by",placeholder:"Enter Name",value:this.state.posted_by,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"Thumnail Image"),i.a.createElement(v.a,{type:"file",onChange:this.onChangeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"Posted by Image"),i.a.createElement(v.a,{type:"file",onChange:this.onChangeHandler1})),i.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(y.a,{for:"exampleSelect"}," Blog Type"),i.a.createElement(E.a,{name:"blog_type",type:"select",value:this.state.blog_type,onChange:this.changeHandler},i.a.createElement("option",null,"Select Type"),i.a.createElement("option",{value:"Recommended"},"Recommended"),i.a.createElement("option",{value:"Popular"},"Popular"))),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2 "},i.a.createElement(y.a,null,"Descripiton"),i.a.createElement("textarea",{required:!0,type:"text",name:"desc",rows:6,className:"form-control",placeholder:"",value:this.state.desc,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-2"},i.a.createElement(y.a,null,"Thumnail Image"),i.a.createElement("img",{className:"mx-2",width:200,style:{borderRadius:"12px"},src:this.state.blogImg})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-2"},i.a.createElement(y.a,null,"Posted By Image"),i.a.createElement("img",{className:"mx-2",width:100,src:this.state.posted_by_img}))),i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(y.a,{className:"mb-1"},i.a.createElement("h4",null,"Status")),i.a.createElement("div",{className:"form-label-group"},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",onChange:function(){return e.setState({status:"Active"})}}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",onChange:function(){return e.setState({status:"Deactive"})}}),i.a.createElement("span",{style:{marginRight:"3px"}},"Deactive"))))),i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),a}(o.Component)},819:function(e,t,a){"use strict";var n=a(5),s=a(8),l=a(0),r=a.n(l),c=a(2),o=a.n(c),i=a(13),m=a.n(i),d=a(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),g=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:g,sm:g,md:g,lg:g,xl:g,widths:o.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,l=e.hidden,c=e.widths,o=e.tag,i=e.check,p=e.size,g=e.for,b=Object(s.a)(e,u),f=[];c.forEach((function(t,n){var s=e[t];if(delete b[t],s||""===s){var l,r=!n;if(Object(d.isObject)(s)){var c,o=r?"-":"-"+t+"-";l=h(r,t,s.size),f.push(Object(d.mapToCssModules)(m()(((c={})[l]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c))),a)}else l=h(r,t,s),f.push(l)}}));var y=Object(d.mapToCssModules)(m()(t,!!l&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,f,!!f.length&&"col-form-label"),a);return r.a.createElement(o,Object(n.a)({htmlFor:g},b,{className:y}))};y.propTypes=b,y.defaultProps=f,t.a=y},821:function(e,t,a){"use strict";var n=a(5),s=a(8),l=a(12),r=a(14),c=a(0),o=a.n(c),i=a(2),m=a.n(i),d=a(13),u=a.n(d),p=a(4),g=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,r=e.bsSize,c=e.valid,i=e.invalid,m=e.tag,d=e.addon,b=e.plaintext,f=e.innerRef,h=Object(s.a)(e,g),y=["radio","checkbox"].indexOf(l)>-1,E=new RegExp("\\D","g"),v=m||("select"===l||"textarea"===l?l:"input"),N="form-control";b?(N+="-plaintext",v=m||"input"):"file"===l?N+="-file":"range"===l?N+="-range":y&&(N=d?null:"form-check-input"),h.size&&E.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=h.size,delete h.size);var O=Object(p.mapToCssModules)(u()(t,i&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,N),a);return("input"===v||m&&"function"===typeof m)&&(h.type=l),h.children&&!b&&"select"!==l&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(v,Object(n.a)({},h,{ref:f,className:O,"aria-invalid":i}))},t}(o.a.Component);f.propTypes=b,f.defaultProps={type:"text"},t.a=f},823:function(e,t,a){"use strict";var n=a(5),s=a(8),l=a(12),r=a(14),c=a(0),o=a.n(c),i=a(2),m=a.n(i),d=a(13),u=a.n(d),p=a(4),g=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,r=e.tag,c=e.innerRef,i=Object(s.a)(e,g),m=Object(p.mapToCssModules)(u()(t,!!l&&"form-inline"),a);return o.a.createElement(r,Object(n.a)({},i,{ref:c,className:m}))},t}(c.Component);f.propTypes=b,f.defaultProps={tag:"form"},t.a=f},952:function(e,t){}}]);
//# sourceMappingURL=110.7b026567.chunk.js.map