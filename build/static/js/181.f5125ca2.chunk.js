(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[181],{2407:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return C}));var c=t(51),n=t(13),r=t(14),l=t(16),o=t(15),s=t(0),i=t.n(s),d=t(1148),m=t(1149),u=t(1146),p=t(1147),h=t(1150),b=t(172),f=t(1153),g=t(795),y=t(803),v=t(792),E=t(169),N=t(56),j=t(796),O=t.n(j),P=t(865),k=t(869),S=t(916),w=t.n(S),C=(t(846),t(904),function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).onEditorStateChange=function(e,a){r.setState({editorState:e,desc:w()(Object(P.convertToRaw)(e.getCurrentContent()))})},r.changeHandler=function(e){r.setState(Object(c.a)({},e.target.name,e.target.value))},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;E.a.post("/admin/editPrivcyPlcy/".concat(a),r.state).then((function(e){console.log(e),O()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/brahmaand/privacypolicy/privacyPolicy")})).catch((function(e){console.log(e)}))},r.state={desc:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;E.a.get("/admin/getonePrivcyPlcy/".concat(a),{}).then((function(a){console.log(a),e.setState({desc:a.data.data.desc})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(m.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(p.a,{href:"/app/brahmaand/privacypolicy/privacyPolicy",tag:"a"},"PrivacyPolicy"),i.a.createElement(p.a,{active:!0},"Edit PrivacyPolicy "))))),i.a.createElement(h.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit PrivacyPolicy")),i.a.createElement(m.a,null,i.a.createElement(N.b,{render:function(e){var a=e.history;return i.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/brahmaand/privacypolicy/privacyPolicy")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,null,i.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,i.a.createElement(v.a,null,"Descripition"),i.a.createElement(k.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,dangerouslySetInnerHTML:{__html:this.state.desc}})))),i.a.createElement(d.a,null,i.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(s.Component))},792:function(e,a,t){"use strict";var c=t(5),n=t(9),r=t(0),l=t.n(r),o=t(1),s=t.n(o),i=t(4),d=t.n(i),m=t(3),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=s.a.oneOfType([s.a.number,s.a.string]),h=s.a.oneOfType([s.a.bool,s.a.string,s.a.number,s.a.shape({size:p,order:p,offset:p})]),b={children:s.a.node,hidden:s.a.bool,check:s.a.bool,size:s.a.string,for:s.a.string,tag:m.tagPropType,className:s.a.string,cssModule:s.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:s.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,s=e.tag,i=e.check,p=e.size,h=e.for,b=Object(n.a)(e,u),f=[];o.forEach((function(a,c){var n=e[a];if(delete b[a],n||""===n){var r,l=!c;if(Object(m.isObject)(n)){var o,s=l?"-":"-"+a+"-";r=g(l,a,n.size),f.push(Object(m.mapToCssModules)(d()(((o={})[r]=n.size||""===n.size,o["order"+s+n.order]=n.order||0===n.order,o["offset"+s+n.offset]=n.offset||0===n.offset,o))),t)}else r=g(l,a,n),f.push(r)}}));var y=Object(m.mapToCssModules)(d()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,f,!!f.length&&"col-form-label"),t);return l.a.createElement(s,Object(c.a)({htmlFor:h},b,{className:y}))};y.propTypes=b,y.defaultProps=f,a.a=y},803:function(e,a,t){"use strict";var c=t(5),n=t(9),r=t(0),l=t.n(r),o=t(1),s=t.n(o),i=t(4),d=t.n(i),m=t(3),u=["className","cssModule","row","disabled","check","inline","tag"],p={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:m.tagPropType,className:s.a.string,cssModule:s.a.object},h=function(e){var a=e.className,t=e.cssModule,r=e.row,o=e.disabled,s=e.check,i=e.inline,p=e.tag,h=Object(n.a)(e,u),b=Object(m.mapToCssModules)(d()(a,!!r&&"row",s?"form-check":"form-group",!(!s||!i)&&"form-check-inline",!(!s||!o)&&"disabled"),t);return"fieldset"===p&&(h.disabled=o),l.a.createElement(p,Object(c.a)({},h,{className:b}))};h.propTypes=p,h.defaultProps={tag:"div"},a.a=h}}]);
//# sourceMappingURL=181.f5125ca2.chunk.js.map