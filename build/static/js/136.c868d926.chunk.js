(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[136],{2512:function(e,a,t){"use strict";t.r(a);var n=t(36),s=t(0),l=t.n(s),o=t(997),r=t(1152),c=t(791),i=t(1153),d=t(859),u=t(41),m=t.n(u),b=t(796),p=t.n(b);a.default=function(){var e=Object(s.useState)(""),a=Object(n.a)(e,2),t=a[0],u=a[1],b=Object(s.useState)(""),f=Object(n.a)(b,2),g=f[0],h=f[1];return Object(s.useEffect)((function(){m.a.get("http://15.207.117.200:9000/admin/getTrending").then((function(e){console.log(e.data.data),h(e.data.data)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{style:{height:"auto",width:"100%"},className:"card"},l.a.createElement(r.a,{className:""},l.a.createElement(c.a,{className:"mt-2 mx-5 mb-2"},l.a.createElement("h3",null,"Add Trending Topic-",l.a.createElement("span",{style:{fontSize:"16px"}},"Single at a time")))),l.a.createElement(r.a,{className:"mb-2"},l.a.createElement(i.a,{className:"mx-3",lg:"3"},l.a.createElement("input",{value:t,onChange:function(e){u(e.target.value)},className:"form-control",type:"text"})),l.a.createElement(i.a,{lg:"3"},l.a.createElement("button",{onClick:function(e){e.preventDefault(),m.a.post("http://15.207.117.200:9000/admin/addTrending",{topics:t.toLowerCase()}).then((function(e){console.log(e.data.data),"success"==e.data.message&&p()("Topics added Successfully")})).catch((function(e){console.log(e)}))},type:"button",class:"btn btn-success"},"Add"))),l.a.createElement(r.a,{className:"d-flex justify-content-center mt-2 mb-2"},l.a.createElement("h4",null,"Your Trending Topics")),l.a.createElement(r.a,null,l.a.createElement(i.a,null,l.a.createElement(d.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",{"aria-colspan":1},l.a.createElement("tr",null,l.a.createElement("th",null,"No."),l.a.createElement("th",null,"Trending Topic"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,""!==g?null===g||void 0===g?void 0:g.map((function(e,a){return l.a.createElement("tr",{key:null===e||void 0===e?void 0:e._id},l.a.createElement("td",null,a+1),l.a.createElement("td",null,null===e||void 0===e?void 0:e.topics),l.a.createElement("td",null,l.a.createElement(r.a,null,l.a.createElement(i.a,{lg:"3"},l.a.createElement("button",{onClick:function(){return a=e._id,console.log(a),void(""!==a&&m.a.get("http://15.207.117.200:9000/admin/dltTrending/".concat(a)).then((function(e){console.log(e.data.message),"deleted"==e.data.message&&p()("Deleted Successfully")})).catch((function(e){console.log(e)})));var a},type:"button",class:"btn btn-success"},"Delete")))))})):null))))))}},791:function(e,a,t){"use strict";var n=t(5),s=t(9),l=t(0),o=t.n(l),r=t(1),c=t.n(r),i=t(4),d=t.n(i),u=t(3),m=["className","cssModule","hidden","widths","tag","check","size","for"],b=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:b,order:b,offset:b})]),f={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,l=e.hidden,r=e.widths,c=e.tag,i=e.check,b=e.size,p=e.for,f=Object(s.a)(e,m),g=[];r.forEach((function(a,n){var s=e[a];if(delete f[a],s||""===s){var l,o=!n;if(Object(u.isObject)(s)){var r,c=o?"-":"-"+a+"-";l=h(o,a,s.size),g.push(Object(u.mapToCssModules)(d()(((r={})[l]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r))),t)}else l=h(o,a,s),g.push(l)}}));var v=Object(u.mapToCssModules)(d()(a,!!l&&"sr-only",!!i&&"form-check-label",!!b&&"col-form-label-"+b,g,!!g.length&&"col-form-label"),t);return o.a.createElement(c,Object(n.a)({htmlFor:p},f,{className:v}))};v.propTypes=f,v.defaultProps=g,a.a=v},859:function(e,a,t){"use strict";var n=t(5),s=t(9),l=t(0),o=t.n(l),r=t(1),c=t.n(r),i=t(4),d=t.n(i),u=t(3),m=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],b={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:u.tagPropType,responsiveTag:u.tagPropType,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},p=function(e){var a=e.className,t=e.cssModule,l=e.size,r=e.bordered,c=e.borderless,i=e.striped,b=e.dark,p=e.hover,f=e.responsive,g=e.tag,h=e.responsiveTag,v=e.innerRef,E=Object(s.a)(e,m),T=Object(u.mapToCssModules)(d()(a,"table",!!l&&"table-"+l,!!r&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!b&&"table-dark",!!p&&"table-hover"),t),y=o.a.createElement(g,Object(n.a)({},E,{ref:v,className:T}));if(f){var j=Object(u.mapToCssModules)(!0===f?"table-responsive":"table-responsive-"+f,t);return o.a.createElement(h,{className:j},y)}return y};p.propTypes=b,p.defaultProps={tag:"table",responsiveTag:"div"},a.a=p},997:function(e,a,t){"use strict";var n=t(5),s=t(9),l=t(0),o=t.n(l),r=t(1),c=t.n(r),i=t(4),d=t.n(i),u=t(3),m=["className","cssModule","fluid","tag"],b={tag:u.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.fluid,r=e.tag,c=Object(s.a)(e,m),i="container";!0===l?i="container-fluid":l&&(i="container-"+l);var b=Object(u.mapToCssModules)(d()(a,i),t);return o.a.createElement(r,Object(n.a)({},c,{className:b}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p}}]);
//# sourceMappingURL=136.c868d926.chunk.js.map