(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[186],{2370:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(51),s=t(13),l=t(14),c=t(174),r=t(16),m=t(15),o=t(0),i=t.n(o),u=t(1148),p=t(1149),d=t(1146),h=t(1147),f=t(1150),g=t(172),b=t(1153),E=t(795),y=t(792),v=t(169),x=t(56),N=t(796),C=t.n(N),j=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandlerupdate=function(e){e.preventDefault();var a=l.props.match.params.id;v.a.post("/admin/edit_promotion/".concat(a),l.state).then((function(e){console.log(e),C()("Success!","Submitted Successfully!","Success"),l.props.history.push("/app/brahmaand/resource/resourceList")})).catch((function(e){console.log(e)}))},l.submitHandler=function(e){e.preventDefault();var a=l.props.match.params.id;v.a.post("/admin/approve_submit_resrc/".concat(a),l.state).then((function(e){console.log(e),"Deactive"==e.data.data.status&&(C()("Submitted Successfully!","Deactived"),l.props.history.push("/app/brahmaand/resource/resourceList")),"Active"==e.data.data.status&&(C()("Submitted Successfully!","Actived"),l.props.history.push("/app/brahmaand/resource/resourceList"))})).catch((function(e){console.log(e)}))},l.state={desc:"",link:"",comment:"",topics:"",type:"",format:"",resTitle:"",status:"",aprv_status:"",img:""},l.handleChange=l.handleChange.bind(Object(c.a)(l)),l}return Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/admin/getone_reslist/".concat(a)).then((function(a){console.log(a),e.setState({desc:a.data.data.desc,link:a.data.data.link,comment:a.data.data.comment,topics:a.data.data.topics,type:a.data.data.type,format:a.data.data.format,resTitle:a.data.data.resTitle,img:a.data.data.img})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(p.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(d.a,{listTag:"div"},i.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(h.a,{href:"/app/brahmaand/resource/resourceList",tag:"a"},"Resource List"),i.a.createElement(h.a,{active:!0},"Edit Resource List"))))),i.a.createElement(f.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(p.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Promotion Resource")),i.a.createElement(p.a,null,i.a.createElement(x.b,{render:function(e){var a=e.history;return i.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/brahmaand/resource/resourceList")}},"Back")}}))),i.a.createElement(b.a,null,i.a.createElement(E.a,{className:"m-1",onSubmit:this.submitHandlerupdate},i.a.createElement(u.a,null,i.a.createElement(p.a,{lg:"12",md:"12",sm:"12"},i.a.createElement("h2",{className:" mb-2 d-flex justify-content-center"},i.a.createElement("b",null,"Update here")),i.a.createElement(u.a,{className:""},i.a.createElement(p.a,{lg:"6",className:"mt-1"},i.a.createElement(y.a,{style:{fontSize:"20px"},className:"mx-1"},"Comment :"),i.a.createElement("input",{type:"text",name:"comment",value:this.state.comment,className:"mx-2 py-2 form-control",onChange:this.handleChange})),i.a.createElement(p.a,{lg:"6",className:"mt-1"}," ",i.a.createElement(y.a,{style:{fontSize:"20px"},className:"mx-2"},"Topic :"," "),i.a.createElement("input",{type:"text",name:"topics",value:this.state.topics,className:"mx-2 py-2 form-control",onChange:this.handleChange})),i.a.createElement(p.a,{lg:"6",className:"mt-1"},i.a.createElement(y.a,{style:{fontSize:"20px"},className:"mx-2"},"Type :"," "),i.a.createElement("input",{name:"type",value:this.state.type,type:"text",className:"mx-2 py-2 form-control",onChange:this.handleChange})),i.a.createElement(p.a,{lg:"6",className:"mt-1"},i.a.createElement(y.a,{style:{fontSize:"20px"},className:"mx-2"},"Format :"," "),i.a.createElement("input",{type:"text",name:"format",value:this.state.format,className:"mx-2 py-2 form-control",onChange:this.handleChange})),i.a.createElement(p.a,{lg:"6",className:"mt-1"}," ",i.a.createElement(y.a,{style:{fontSize:"20px"},className:"mx-2"},"link :"," "),i.a.createElement("input",{type:"text",name:"link",value:this.state.link,className:"mx-2 py-2 form-control",onChange:this.handleChange})),i.a.createElement(p.a,{lg:"6",className:"mt-1"}," ",i.a.createElement(y.a,{style:{fontSize:"20px"},className:"mx-2"},"Opt-Title :"," "),i.a.createElement("input",{type:"text",name:"resTitle",value:this.state.resTitle,className:"mx-2 py-2 form-control",onChange:this.handleChange})),i.a.createElement(p.a,{lg:"6",className:"mt-1"}," ",i.a.createElement(y.a,{style:{fontSize:"20px"},className:"mx-2"},"Image :"," "),i.a.createElement(u.a,null,i.a.createElement("img",{className:"mx-3",height:160,src:this.state.img,alt:"uploaded Image"})),i.a.createElement(u.a,null,i.a.createElement("textarea",{type:"file",rows:"5",cols:"20",name:"img",value:this.state.img,className:"mx-2 mt-2 py-2 form-control",onChange:this.handleChange}))),i.a.createElement(p.a,{lg:"6",className:"mt-1"}," ",i.a.createElement(y.a,{style:{fontSize:"20px"},className:"mx-2"},"Description :"," "),i.a.createElement("textarea",{name:"desc",type:"text",rows:"5",cols:"20",value:this.state.desc,className:"mx-2 py-2 form-control",onChange:this.handleChange}))),i.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-2 mb-1 mx-2 mt-2"},"Update Data")))),i.a.createElement(E.a,{className:"m-1 mx-2",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(y.a,{className:"mb-1"},i.a.createElement("h4",null,"Status")),i.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler1},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"aprv_status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"aprv_status",value:"Deactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Deactive"))))),i.a.createElement(u.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-2 mb-1 mx-2"},"Update")))))))}}]),t}(o.Component)},792:function(e,a,t){"use strict";var n=t(5),s=t(9),l=t(0),c=t.n(l),r=t(1),m=t.n(r),o=t(4),i=t.n(o),u=t(3),p=["className","cssModule","hidden","widths","tag","check","size","for"],d=m.a.oneOfType([m.a.number,m.a.string]),h=m.a.oneOfType([m.a.bool,m.a.string,m.a.number,m.a.shape({size:d,order:d,offset:d})]),f={children:m.a.node,hidden:m.a.bool,check:m.a.bool,size:m.a.string,for:m.a.string,tag:u.tagPropType,className:m.a.string,cssModule:m.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:m.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,l=e.hidden,r=e.widths,m=e.tag,o=e.check,d=e.size,h=e.for,f=Object(s.a)(e,p),g=[];r.forEach((function(a,n){var s=e[a];if(delete f[a],s||""===s){var l,c=!n;if(Object(u.isObject)(s)){var r,m=c?"-":"-"+a+"-";l=b(c,a,s.size),g.push(Object(u.mapToCssModules)(i()(((r={})[l]=s.size||""===s.size,r["order"+m+s.order]=s.order||0===s.order,r["offset"+m+s.offset]=s.offset||0===s.offset,r))),t)}else l=b(c,a,s),g.push(l)}}));var E=Object(u.mapToCssModules)(i()(a,!!l&&"sr-only",!!o&&"form-check-label",!!d&&"col-form-label-"+d,g,!!g.length&&"col-form-label"),t);return c.a.createElement(m,Object(n.a)({htmlFor:h},f,{className:E}))};E.propTypes=f,E.defaultProps=g,a.a=E},795:function(e,a,t){"use strict";var n=t(5),s=t(9),l=t(11),c=t(12),r=t(0),m=t.n(r),o=t(1),i=t.n(o),u=t(4),p=t.n(u),d=t(3),h=["className","cssModule","inline","tag","innerRef"],f={children:i.a.node,inline:i.a.bool,tag:d.tagPropType,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),className:i.a.string,cssModule:i.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,c=e.tag,r=e.innerRef,o=Object(s.a)(e,h),i=Object(d.mapToCssModules)(p()(a,!!l&&"form-inline"),t);return m.a.createElement(c,Object(n.a)({},o,{ref:r,className:i}))},a}(r.Component);g.propTypes=f,g.defaultProps={tag:"form"},a.a=g}}]);
//# sourceMappingURL=186.700f31cc.chunk.js.map