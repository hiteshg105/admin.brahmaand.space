(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[147],{2521:function(e,a,t){"use strict";t.r(a);var n=t(15),o=t(16),r=t(18),s=t(17),l=t(896),c=t.n(l),i=t(0),d=t.n(i),m=t(1417),u=t(1415),p=t(1416),f=t(182),h=t(1420),b=t(823),g=t(819),E=(t(855),t(859)),v=t(864),C=(t(881),t(851),t(174)),O=(t(30),t(824)),j=t.n(O),w=t(58),N=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).onEditorStateChange=function(e){o.setState({editorState:e,desc:c()(Object(E.convertToRaw)(e.getCurrentContent()))})},o.uploadImageCallBack=function(e){return new Promise((function(a,t){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var o=new FormData;o.append("image",e),n.send(o),n.addEventListener("load",(function(){var e=JSON.parse(n);a(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n);t(e)}))}))},o.submitHandler=function(e){e.preventDefault(),C.a.post("/admin/add_term_cond",o.state).then((function(e){console.log(e),o.props.history.push("/app/brahmaand/termscondition/termConditionList"),j()("Good job!","You clicked the button!","success")})).catch((function(e){console.log(e)}))},o.state={desc:"",editorState:E.EditorState.createEmpty()},o}return Object(o.a)(t,[{key:"render",value:function(){return d.a.createElement(m.a,null,d.a.createElement(u.a,{className:"m-2"},d.a.createElement(p.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Term And Condition")),d.a.createElement(p.a,null,d.a.createElement(w.b,{render:function(e){var a=e.history;return d.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/brahmaand/termscondition/termConditionList")}},"Back")}}))),d.a.createElement(h.a,null,d.a.createElement(b.a,{onSubmit:this.submitHandler},d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(g.a,null,"Descripition"),d.a.createElement(v.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!1,mandatory:!1},uploadEnabled:!0,inputAccept:"image/gif,image/jpeg,image/jpg,image/png,image/svg"}}}),d.a.createElement("br",null),d.a.createElement(f.a,{color:"primary"},"Add New T&C")))))}}]),t}(d.a.Component);a.default=N},819:function(e,a,t){"use strict";var n=t(5),o=t(8),r=t(0),s=t.n(r),l=t(2),c=t.n(l),i=t(13),d=t.n(i),m=t(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.hidden,l=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,h=Object(o.a)(e,u),b=[];l.forEach((function(a,n){var o=e[a];if(delete h[a],o||""===o){var r,s=!n;if(Object(m.isObject)(o)){var l,c=s?"-":"-"+a+"-";r=g(s,a,o.size),b.push(Object(m.mapToCssModules)(d()(((l={})[r]=o.size||""===o.size,l["order"+c+o.order]=o.order||0===o.order,l["offset"+c+o.offset]=o.offset||0===o.offset,l))),t)}else r=g(s,a,o),b.push(r)}}));var E=Object(m.mapToCssModules)(d()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return s.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:E}))};E.propTypes=h,E.defaultProps=b,a.a=E},851:function(e,a,t){}}]);
//# sourceMappingURL=147.1f7bc541.chunk.js.map