(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[189],{1859:function(e,a,t){},2453:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return _}));var l=t(51),n=t(13),s=t(14),o=t(175),c=t(16),r=t(15),m=t(0),i=t.n(m),u=t(1146),d=t(1147),g=t(1144),h=t(1145),p=t(1148),v=t(172),E=t(1151),y=t(805),f=t(801),N=(t(1859),t(169)),b=t(56),x=t(806),C=t.n(x),_=(t(1015),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).changeHandler1=function(e){s.setState({aprv_status:e.target.value})},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandlerupdate=function(e){e.preventDefault();var a=s.props.match.params.id;N.a.post("/admin/edit_submit_rsrc/".concat(a),s.state).then((function(e){console.log(e),C()("Submitted Successfully!","Success")})).catch((function(e){console.log(e.response.data)}))},s.submitHandler=function(e){e.preventDefault();var a=s.props.match.params.id;N.a.post("/admin/approve_submit_resrc/".concat(a),s.state).then((function(e){console.log(e.data.data),console.log(e.data.data.status),"Deactive"==e.data.data.aprv_status&&(C()("Submitted Successfully!","Deactived"),s.props.history.push("/app/brahmaand/resource/userResourceList")),"Active"==e.data.data.aprv_status&&(C()("Submitted Successfully!","Actived"),s.props.history.push("/app/brahmaand/resource/userResourceList"))})).catch((function(e){console.log(e)}))},s.state={desc:"",link:"",comment:"",creatorName:"",topics:[],type:"",format:"",language:[],languageshow:[],relYearshow:"",relYear:[],category:"",categoryshow:"",resTitle:"",sub_category:"",sub_categoryshow:"",status:"",aprv_status:"",img:"",getallcat:[],getallsub:[],getrelYear:[],getalllang:[]},s.handleChange=s.handleChange.bind(Object(o.a)(s)),s}return Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"onSelect",value:function(e,a){console.log(e);for(var t=[],l=0;l<e.length;l++)t.push(e[l]._id);console.log("aaaa",t),this.setState({language:t})}},{key:"onRemove",value:function(e,a){}},{key:"componentDidUpdate",value:function(){var e=this,a=this.state.category;a&&N.a.get("/admin/listbycategory/".concat(a)).then((function(a){console.log(a.data.data),e.setState({getallsub:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;N.a.get("/admin/getone_reslist/".concat(a)).then((function(a){var t,l;console.log(a.data.data.language),e.setState({desc:a.data.data.desc,link:a.data.data.link,comment:a.data.data.comment,creatorName:a.data.data.creatorName,topics:a.data.data.topics,type:a.data.data.type,format:a.data.data.format,resTitle:a.data.data.resTitle,languageshow:a.data.data.language,language:a.data.data.language,relYearshow:null===(t=a.data.data.relYear[0])||void 0===t?void 0:t.yrName,relYear:null===(l=a.data.data.relYear[0])||void 0===l?void 0:l._id,img:a.data.data.img,categoryshow:a.data.data.category.title,category:a.data.data.category._id,sub_categoryshow:a.data.data.sub_category.title,sub_category:a.data.data.sub_category._id})})).catch((function(e){console.log(e)})),N.a.get("/admin/getallCategory").then((function(a){console.log(a.data.data),e.setState({getallcat:a.data.data})})).catch((function(e){console.log(e)})),N.a.get("/user/allYear").then((function(a){console.log(a.data.data),e.setState({getrelYear:a.data.data})})).catch((function(e){console.log(e)})),N.a.get("/user/allLang").then((function(a){console.log(a.data.data),e.setState({getalllang:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a,t,l,n,s,o;return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(g.a,{listTag:"div"},i.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(h.a,{href:"/app/brahmaand/resource/resourceList",tag:"a"},"Resource List"),i.a.createElement(h.a,{active:!0},"Edit Resource List"))))),i.a.createElement(p.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Promotion Resource")),i.a.createElement(d.a,null,i.a.createElement(b.b,{render:function(e){var a=e.history;return i.a.createElement(v.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/brahmaand/resource/userResourceList")}},"Back")}}))),i.a.createElement(E.a,null,i.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandlerupdate},i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"12",md:"12",sm:"12"},i.a.createElement("h2",{className:" mb-2 d-flex justify-content-center"},i.a.createElement("b",null,"Update here")),i.a.createElement(u.a,{className:""},i.a.createElement(d.a,{lg:"6",className:"mt-1"},i.a.createElement(f.a,{style:{fontSize:"20px"},className:"mx-1"},"Category :-"," ",i.a.createElement("span",{style:{color:"green"}},this.state.categoryshow)),i.a.createElement("select",{name:"category",placeholder:this.state.categoryshow,className:"mx-2 form-control",onChange:this.handleChange},i.a.createElement("option",null,this.state.categoryshow),null===(e=this.state.getallcat)||void 0===e?void 0:e.map((function(e){return i.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.title)})))),i.a.createElement(d.a,{lg:"6",className:"mt-1"},i.a.createElement(f.a,{style:{fontSize:"20px"},className:"mx-1"},"Sub_category :-"," ",i.a.createElement("span",{style:{color:"green"}},this.state.sub_categoryshow)),i.a.createElement("select",{name:"sub_category",placeholder:this.state.sub_categoryshow,className:"mx-2  form-control",onChange:this.handleChange},i.a.createElement("option",null,this.state.sub_categoryshow),null===(a=this.state.getallsub)||void 0===a?void 0:a.map((function(e){return i.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.title)})))),i.a.createElement(d.a,{lg:"6",className:"mt-1"},i.a.createElement(f.a,{style:{fontSize:"20px"},className:"mx-1"},"Rel-Year : -",i.a.createElement("span",{style:{color:"green"}},this.state.relYearshow)),i.a.createElement("select",{name:"relYear",placeholder:this.state.relYearshow,className:"mx-2 form-control",onChange:this.handleChange},i.a.createElement("option",null,this.state.relYearshow),null===(t=this.state.getrelYear)||void 0===t?void 0:t.map((function(e){return i.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.yrName)})))),i.a.createElement(d.a,{lg:"6",className:"mt-1"},i.a.createElement(f.a,{style:{fontSize:"20px"},className:"mx-1"},"Language : -",i.a.createElement("span",{className:"mx-2",style:{color:"green"}},null===(l=this.state.languageshow)||void 0===l?void 0:l.map((function(e){return i.a.createElement("span",{key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.language," ")})))),i.a.createElement("select",{name:"language",placeholder:null===(n=this.state.languageshow)||void 0===n?void 0:n.map((function(e){return i.a.createElement("span",{key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.language," ")})),className:"mx-2 form-control",onChange:this.handleChange},i.a.createElement("option",null,null===(s=this.state.languageshow[0])||void 0===s?void 0:s.language),null===(o=this.state.getalllang)||void 0===o?void 0:o.map((function(e){return i.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.language)})))),i.a.createElement(d.a,{lg:"6",className:"mt-1"},i.a.createElement(f.a,{style:{fontSize:"20px"},className:"mx-1"},"CreatorName :"),i.a.createElement("input",{type:"text",name:"creatorName",value:this.state.creatorName,className:"mx-2 py-2 form-control",onChange:this.handleChange})),i.a.createElement(d.a,{lg:"6",className:"mt-1"},i.a.createElement(f.a,{style:{fontSize:"20px"},className:"mx-1"},"Comment :"),i.a.createElement("input",{type:"text",name:"comment",value:this.state.comment,className:"mx-2 py-2 form-control",onChange:this.handleChange})),i.a.createElement(d.a,{lg:"6",className:"mt-1"}," ",i.a.createElement(f.a,{style:{fontSize:"20px"},className:"mx-2"},"Topic :"),i.a.createElement("input",{type:"text",name:"topics",value:this.state.topics,className:"mx-2 py-2 form-control",onChange:this.handleChange})),i.a.createElement(d.a,{lg:"6",className:"mt-1"},i.a.createElement(f.a,{style:{fontSize:"20px"},className:"mx-2"},"Type :-",this.state.type),i.a.createElement("select",{name:"type",value:this.state.type,className:"mx-2  form-control",onChange:this.handleChange},i.a.createElement("option",{className:"mb-1 mt-1"},this.state.type),i.a.createElement("option",{className:"mb-1 mt-1"},"Free"),i.a.createElement("option",{className:"mb-1 mt-1"},"Paid"))),i.a.createElement(d.a,{lg:"6",className:"mt-1"},i.a.createElement(f.a,{style:{fontSize:"20px"},className:"mx-2"},"Format :",this.state.format),i.a.createElement("select",{name:"format",value:this.state.format,className:"mx-2  form-control",onChange:this.handleChange},i.a.createElement("option",{className:"mb-1 mt-1"},this.state.format),i.a.createElement("option",{className:"mb-1 mt-1"},"Video"),i.a.createElement("option",{className:"mb-1 mt-1"},"Text"))),i.a.createElement(d.a,{lg:"6",className:"mt-1"}," ",i.a.createElement(f.a,{style:{fontSize:"20px"},className:"mx-2"},"link :"," "),i.a.createElement("input",{type:"text",name:"link",value:this.state.link,className:"mx-2 py-2 form-control",onChange:this.handleChange})),i.a.createElement(d.a,{lg:"6",className:"mt-1"}," ",i.a.createElement(f.a,{style:{fontSize:"20px"},className:"mx-2"},"Opt-Title :"," "),i.a.createElement("input",{type:"text",name:"resTitle",value:this.state.resTitle,className:"mx-2 py-2 form-control",onChange:this.handleChange})),i.a.createElement(d.a,{lg:"6",className:"mt-1"}," ",i.a.createElement(f.a,{style:{fontSize:"20px"},className:"mx-2"},"Description :"," "),i.a.createElement("textarea",{name:"desc",type:"text",rows:"5",cols:"20",value:this.state.desc,className:"mx-2 py-2 form-control",onChange:this.handleChange})),i.a.createElement(d.a,{lg:"6",className:"mt-1"}," ",i.a.createElement(f.a,{style:{fontSize:"20px"},className:"mx-2"},"Image :"," "),i.a.createElement(u.a,null,i.a.createElement(u.a,null,i.a.createElement("img",{style:{borderRadius:"15px"},className:"mx-3",height:160,src:this.state.img,alt:"uploaded Image"})),i.a.createElement("textarea",{type:"file",rows:"5",cols:"20",name:"img",value:this.state.img,className:"mx-2 mt-2 py-2 form-control",onChange:this.handleChange})))),i.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mr-2 mb-1 mx-2 mt-2"},"Update Data")))),i.a.createElement(y.a,{className:"m-1 mx-2",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(f.a,{className:"mb-1"},i.a.createElement("h4",null,"Status")),i.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler1},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"aprv_status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"aprv_status",value:"Deactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Deactive"))))),i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mr-2 mb-1 mx-2"},"Update")))))))}}]),t}(m.Component))}}]);
//# sourceMappingURL=189.ec25dccc.chunk.js.map