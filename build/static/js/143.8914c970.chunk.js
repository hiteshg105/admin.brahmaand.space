(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[143],{2487:function(e,a,t){"use strict";t.r(a);var o=t(13),r=t(14),n=t(16),c=t(15),s=t(895),l=t.n(s),i=t(0),d=t.n(i),u=t(1161),m=t(1159),p=t(1160),f=t(172),h=t(1164),b=t(805),y=t(801),g=(t(848),t(857)),E=t(865),v=(t(884),t(843),t(169)),j=(t(27),t(806)),C=t.n(j),N=t(56),O=function(e){Object(n.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).onEditorStateChange=function(e){r.setState({editorState:e,desc:l()(Object(g.convertToRaw)(e.getCurrentContent()))})},r.submitHandler=function(e){e.preventDefault(),v.a.post("/admin/addprivcyPlcy",r.state).then((function(e){console.log(e),r.props.history.push("/app/brahmaand/privacypolicy/privacyPolicy"),C()("Good job!","You clicked the button!","success")})).catch((function(e){console.log(e)}))},r.state={desc:"",editorState:g.EditorState.createEmpty()},r}return Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement(u.a,null,d.a.createElement(m.a,{className:"m-2"},d.a.createElement(p.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New PrivacyPolicy")),d.a.createElement(p.a,null,d.a.createElement(N.b,{render:function(e){var a=e.history;return d.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/brahmaand/privacypolicy/privacyPolicy")}},"Back")}}))),d.a.createElement(h.a,null,d.a.createElement(b.a,{onSubmit:this.submitHandler},d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(y.a,null,"Descripition"),d.a.createElement(E.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange}),d.a.createElement("br",null),d.a.createElement(f.a,{color:"primary"},"Add New T&C")))))}}]),t}(d.a.Component);a.default=O},801:function(e,a,t){"use strict";var o=t(5),r=t(9),n=t(0),c=t.n(n),s=t(1),l=t.n(s),i=t(4),d=t.n(i),u=t(3),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:p,order:p,offset:p})]),h={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:l.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},y=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,n=e.hidden,s=e.widths,l=e.tag,i=e.check,p=e.size,f=e.for,h=Object(r.a)(e,m),b=[];s.forEach((function(a,o){var r=e[a];if(delete h[a],r||""===r){var n,c=!o;if(Object(u.isObject)(r)){var s,l=c?"-":"-"+a+"-";n=y(c,a,r.size),b.push(Object(u.mapToCssModules)(d()(((s={})[n]=r.size||""===r.size,s["order"+l+r.order]=r.order||0===r.order,s["offset"+l+r.offset]=r.offset||0===r.offset,s))),t)}else n=y(c,a,r),b.push(n)}}));var g=Object(u.mapToCssModules)(d()(a,!!n&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return c.a.createElement(l,Object(o.a)({htmlFor:f},h,{className:g}))};g.propTypes=h,g.defaultProps=b,a.a=g},843:function(e,a,t){}}]);
//# sourceMappingURL=143.8914c970.chunk.js.map