(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[192],{2489:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(51),r=a(13),o=a(14),c=a(16),s=a(15),l=a(0),i=a.n(l),m=a(56),u=a(1159),d=a(1160),h=a(1157),p=a(1158),E=a(1161),b=a(172),f=a(1164),g=a(805),v=(a(848),a(857)),k=a(865),S=a(895),w=a.n(S),C=(a(884),a(843),a(169)),y=a(806),H=a.n(y),j=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).onEditorStateChange=function(e){o.setState({editorState:e,desc:w()(Object(v.convertToRaw)(e.getCurrentContent()))})},o.changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.changeHandler1=function(e){o.setState({status:e.target.value})},o.submitHandler=function(e){e.preventDefault();var t=o.props.match.params.id;C.a.post("/admin/edit_term_cond/".concat(t),o.state).then((function(e){console.log(e),H()("Success!","Submitted SuccessFull!","success"),o.props.history.push("/app/brahmaand/works/works")})).catch((function(e){console.log(e)}))},o.state={desc:"",editorState:v.EditorState.createEmpty()},o}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(h.a,{listTag:"div"},i.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(p.a,{href:"/app/brahmaand/works/works",tag:"a"},"How Its Works"),i.a.createElement(p.a,{active:!0},"Edit Works "))))),i.a.createElement(E.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Works")),i.a.createElement(d.a,null,i.a.createElement(m.b,{render:function(e){var t=e.history;return i.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/brahmaand/works/works")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(g.a,{onSubmit:this.submitHandler},i.a.createElement(k.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange}),i.a.createElement("br",null),i.a.createElement(b.a,{color:"primary"},"Update How Its Works")))))}}]),a}(l.Component)},843:function(e,t,a){}}]);
//# sourceMappingURL=192.44bb3470.chunk.js.map