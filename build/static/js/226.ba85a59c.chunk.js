(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[226],{2406:function(e,t,a){"use strict";a.r(t);var n=a(36),l=a(0),c=a.n(l),r=a(56),s=a(1152),o=a(1153),u=a(41),m=a.n(u),i=a(796),d=a.n(i);t.default=function(){var e=Object(l.useState)({}),t=Object(n.a)(e,2),a=(t[0],t[1],Object(r.g)()),u=Object(l.useState)(""),i=Object(n.a)(u,2),p=i[0],b=i[1],g=Object(l.useState)(""),h=Object(n.a)(g,2),f=h[0],E=h[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"d-flex justify-content-center"},"Update Planet Positions Metors"),c.a.createElement(s.a,{className:" mx-1 mt-2 mb-2 "},c.a.createElement(o.a,null),c.a.createElement(o.a,{lg:"2"},c.a.createElement(r.b,{render:function(e){var t=e.history;return c.a.createElement("button",{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/brahmaand/leaderboard/updatemetors")}},"Back")}}))),c.a.createElement(s.a,{className:"mb-3"},c.a.createElement(o.a,{lg:"4"},c.a.createElement("h5",null,"Meteors Range value"),c.a.createElement("input",{value:f,onChange:function(e){E(e.target.value)},className:"form-control",type:"text"})),c.a.createElement(o.a,{lg:"4"},c.a.createElement("h5",null,"Dollar value "),c.a.createElement("input",{value:p,onChange:function(e){b(e.target.value)},className:"form-control",type:"text"})),c.a.createElement(o.a,{style:{marginTop:"26px"}},c.a.createElement("button",{onClick:function(){""!==p&&null!==p&&""!==f&&null!==f?m.a.post("http://13.233.99.196:9000/admin/edit_planet_position/".concat(a.id),{point_range:f,doller_rupees:p}).then((function(e){console.log(e.data.message),"success"==e.data.message&&(d()("Updated Succesfully"),b(""),E(""))})).catch((function(e){console.log(e.data.data)})):d()("Enter value in both fields")},type:"button",class:"btn btn-success"},"Update"))))}}}]);
//# sourceMappingURL=226.ba85a59c.chunk.js.map