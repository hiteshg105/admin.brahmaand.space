(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[207],{1184:function(e,a,t){"use strict";t.r(a);var n=t(15),r=t(16),l=t(18),c=t(17),o=t(0),s=t.n(o),i=t(1416),u=t(1417),m=t(822),p=t(1418),d=t(1419),f=t(1420),b=t(1421),h=t(821),g=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement(f.a,null,"Default")),s.a.createElement(b.a,null,s.a.createElement("p",null,"To create a Textarea use ",s.a.createElement("code",null,'type="textarea"')," with reactstrap Input tag."),s.a.createElement(h.a,{type:"textarea",name:"text",id:"exampleText",rows:"3",placeholder:"Textarea"})))}}]),t}(s.a.Component),v=t(819),E=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement(f.a,null,"Floating label")),s.a.createElement(b.a,null,s.a.createElement("p",null,"Use ",s.a.createElement("code",null,".form-label-group")," as a wrapper to add a Floating Label with Textarea"),s.a.createElement("div",{className:"form-label-group mt-2"},s.a.createElement(h.a,{type:"textarea",name:"text",id:"exampleText",rows:"3",placeholder:"Floating Label"}),s.a.createElement(v.a,null,"Floating Label"))))}}]),t}(s.a.Component),O=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={value:""},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement(f.a,null,"Counter")),s.a.createElement(b.a,null,s.a.createElement("div",{className:"form-label-group mt-2 mb-0"},s.a.createElement(h.a,{type:"textarea",name:"text",id:"exampleText",rows:"3",value:this.state.value,placeholder:"Counter",onChange:function(a){return e.setState({value:a.target.value})}}),s.a.createElement(v.a,null,"Counter")),s.a.createElement("small",{className:"counter-value float-right ".concat(this.state.value.length>20?"bg-danger":"")},"".concat(this.state.value.length,"/20"))))}}]),t}(s.a.Component),y=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{breadCrumbTitle:"Textarea",breadCrumbParent:"Form Elements",breadCrumbActive:"Textarea"}),s.a.createElement(i.a,null,s.a.createElement(u.a,{sm:"12"},s.a.createElement(g,null)),s.a.createElement(u.a,{sm:"12"},s.a.createElement(E,null)),s.a.createElement(u.a,{sm:"12"},s.a.createElement(O,null))))}}]),t}(s.a.Component);a.default=y},819:function(e,a,t){"use strict";var n=t(5),r=t(8),l=t(0),c=t.n(l),o=t(2),s=t.n(o),i=t(13),u=t.n(i),m=t(4),p=["className","cssModule","hidden","widths","tag","check","size","for"],d=s.a.oneOfType([s.a.number,s.a.string]),f=s.a.oneOfType([s.a.bool,s.a.string,s.a.number,s.a.shape({size:d,order:d,offset:d})]),b={children:s.a.node,hidden:s.a.bool,check:s.a.bool,size:s.a.string,for:s.a.string,tag:m.tagPropType,className:s.a.string,cssModule:s.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:s.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,l=e.hidden,o=e.widths,s=e.tag,i=e.check,d=e.size,f=e.for,b=Object(r.a)(e,p),h=[];o.forEach((function(a,n){var r=e[a];if(delete b[a],r||""===r){var l,c=!n;if(Object(m.isObject)(r)){var o,s=c?"-":"-"+a+"-";l=g(c,a,r.size),h.push(Object(m.mapToCssModules)(u()(((o={})[l]=r.size||""===r.size,o["order"+s+r.order]=r.order||0===r.order,o["offset"+s+r.offset]=r.offset||0===r.offset,o))),t)}else l=g(c,a,r),h.push(l)}}));var v=Object(m.mapToCssModules)(u()(a,!!l&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,h,!!h.length&&"col-form-label"),t);return c.a.createElement(s,Object(n.a)({htmlFor:f},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},821:function(e,a,t){"use strict";var n=t(5),r=t(8),l=t(12),c=t(14),o=t(0),s=t.n(o),i=t(2),u=t.n(i),m=t(13),p=t.n(m),d=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,c=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,m=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,f),v=["radio","checkbox"].indexOf(l)>-1,E=new RegExp("\\D","g"),O=u||("select"===l||"textarea"===l?l:"input"),y="form-control";b?(y+="-plaintext",O=u||"input"):"file"===l?y+="-file":"range"===l?y+="-range":v&&(y=m?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=g.size,delete g.size);var j=Object(d.mapToCssModules)(p()(a,i&&"is-invalid",o&&"is-valid",!!c&&"form-control-"+c,y),t);return("input"===O||u&&"function"===typeof u)&&(g.type=l),g.children&&!b&&"select"!==l&&"string"===typeof O&&"select"!==O&&(Object(d.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),s.a.createElement(O,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":i}))},a}(s.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h}}]);
//# sourceMappingURL=207.895d67c2.chunk.js.map