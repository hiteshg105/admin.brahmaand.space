(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[107],{2462:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return T}));var l=a(51),n=a(13),s=a(14),o=a(16),r=a(15),c=a(0),i=a.n(c),d=a(857),m=a(858),u=a(893),p=a.n(u),g=(a(848),a(882),a(843),a(1146)),b=a(1147),f=a(1144),h=a(1145),E=a(1148),y=a(172),v=a(1151),S=a(805),O=a(801),N=a(803),C=a(789),_=a(169),j=a(806),x=a.n(j),z=a(56),T=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).onEditorStateChange=function(e){s.setState({editorState:e,desc:p()(Object(d.convertToRaw)(e.getCurrentContent()))})},s.onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler1=function(e){s.setState({selectedFile1:e.target.files[0]}),s.setState({selectedName:e.target.files.name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("blog_title",s.state.blog_title),t.append("posted_by",s.state.posted_by),t.append("desc",s.state.desc),t.append("blog_type",s.state.blog_type),null!==s.state.selectedFile&&t.append("blogImg",s.state.selectedFile),null!==s.state.selectedFile1&&t.append("posted_by_img",s.state.selectedFile1),""!==s.state.blog_title&&""!==s.state.desc&&""!==s.state.blog_type&&""!==s.state.selectedFile?_.a.post("/admin/addBlog",t).then((function(e){console.log(e.data.data),x()("Success!","Submitted SuccessFully !","Success"),s.props.history.push("/app/brahmaand/blogs/blogList"),s.setState({blog_title:""}),s.setState({desc:""}),s.setState({blog_type:""}),s.setState({selectedFile:""}),s.setState({posted_by:""})})).catch((function(e){console.log(e.response)})):x()("Fill * Marks")},s.state={blog_title:"",desc:"",blogImg:"",posted_by:"",posted_by_img:"",blog_type:"",selectedFile:null,selectedName:"",status:"",selectedFile1:null},s}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g.a,null,i.a.createElement(b.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(f.a,{listTag:"div"},i.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(h.a,{href:"/app/brahmaand/blogs/BlogList",tag:"a"},"Blog List"),i.a.createElement(h.a,{active:!0},"Add Blog "))))),i.a.createElement(E.a,null,i.a.createElement(g.a,{className:"m-2"},i.a.createElement(b.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Blog")),i.a.createElement(b.a,null,i.a.createElement(z.b,{render:function(e){var t=e.history;return i.a.createElement(y.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/brahmaand/blogs/BlogList")}},"Back")}}))),i.a.createElement(v.a,null,i.a.createElement(S.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(g.a,null,i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(O.a,null,"Title *"),i.a.createElement(N.a,{required:!0,type:"text",name:"blog_title",placeholder:"Enter title",value:this.state.blog_title,onChange:this.changeHandler})),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(O.a,null,"Posted By"),i.a.createElement(N.a,{required:!0,type:"text",name:"posted_by",placeholder:"Enter name",value:this.state.posted_by,onChange:this.changeHandler})),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(O.a,null,"Descripition *"),i.a.createElement(m.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange})),i.a.createElement(b.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(O.a,{for:"exampleSelect"}," Blog Type *"),i.a.createElement(N.a,{name:"blog_type",type:"select",value:this.state.blog_type,onChange:this.changeHandler},i.a.createElement("option",null,"Select Type "),i.a.createElement("option",{value:"Recommended"},"Recommended"),i.a.createElement("option",{value:"Popular"},"Popular"))),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(O.a,null,"Thumnail Image *"),i.a.createElement(C.a,{type:"file",onChange:this.onChangeHandler})),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(O.a,null,"Posted Image"),i.a.createElement(C.a,{type:"file",onChange:this.onChangeHandler1}))),i.a.createElement(g.a,null,i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a.Ripple,{color:"primary",onClick:this.submitHandler,className:"mr-1 mb-1"},"Add")))))))}}]),a}(c.Component)},801:function(e,t,a){"use strict";var l=a(5),n=a(9),s=a(0),o=a.n(s),r=a(1),c=a.n(r),i=a(4),d=a.n(i),m=a(3),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),g=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object,xs:g,sm:g,md:g,lg:g,xl:g,widths:c.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,s=e.hidden,r=e.widths,c=e.tag,i=e.check,p=e.size,g=e.for,b=Object(n.a)(e,u),f=[];r.forEach((function(t,l){var n=e[t];if(delete b[t],n||""===n){var s,o=!l;if(Object(m.isObject)(n)){var r,c=o?"-":"-"+t+"-";s=h(o,t,n.size),f.push(Object(m.mapToCssModules)(d()(((r={})[s]=n.size||""===n.size,r["order"+c+n.order]=n.order||0===n.order,r["offset"+c+n.offset]=n.offset||0===n.offset,r))),a)}else s=h(o,t,n),f.push(s)}}));var E=Object(m.mapToCssModules)(d()(t,!!s&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,f,!!f.length&&"col-form-label"),a);return o.a.createElement(c,Object(l.a)({htmlFor:g},b,{className:E}))};E.propTypes=b,E.defaultProps=f,t.a=E},803:function(e,t,a){"use strict";var l=a(5),n=a(9),s=a(11),o=a(12),r=a(0),c=a.n(r),i=a(1),d=a.n(i),m=a(4),u=a.n(m),p=a(3),g=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,o=e.bsSize,r=e.valid,i=e.invalid,d=e.tag,m=e.addon,b=e.plaintext,f=e.innerRef,h=Object(n.a)(e,g),E=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),v=d||("select"===s||"textarea"===s?s:"input"),S="form-control";b?(S+="-plaintext",v=d||"input"):"file"===s?S+="-file":"range"===s?S+="-range":E&&(S=m?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=h.size,delete h.size);var O=Object(p.mapToCssModules)(u()(t,i&&"is-invalid",r&&"is-valid",!!o&&"form-control-"+o,S),a);return("input"===v||d&&"function"===typeof d)&&(h.type=s),h.children&&!b&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(v,Object(l.a)({},h,{ref:f,className:O,"aria-invalid":i}))},t}(c.a.Component);f.propTypes=b,f.defaultProps={type:"text"},t.a=f},843:function(e,t,a){}}]);
//# sourceMappingURL=107.bdcdcada.chunk.js.map