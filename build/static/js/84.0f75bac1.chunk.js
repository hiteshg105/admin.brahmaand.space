(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[84],{2598:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),l=t(16),c=t(15),s=t(0),o=t.n(s),i=t(1146),m=t(1147),u=t(804),p=t(1148),g=t(1149),E=t(1150),b=t(814),d=t(791),v=t(792),f=t(1151),y=t(815),h=t(816),T=t(969),N=t(4),j=t.n(N),S=t(306),w=t(277),x=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Spinner} from "reactstrap"\n\nclass SpinnerBorder extends React.Component {\n\n  render() {\n    return(\n      <Spinner color="primary" />\n    )\n  }\n}\nexport default SpinnerBorder\n')),C=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Spinner} from "reactstrap"\n\nclass SpinnerColors extends React.Component {\n\n  render() {\n    return(\n      <Spinner color="primary" />\n      <Spinner color="success" />\n      <Spinner color="info" />\n      <Spinner color="danger" />\n      <Spinner color="warning" />\n      <Spinner color="light" />\n      <Spinner color="dark" />\n    )\n  }\n}\nexport default SpinnerColors\n')),O=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Spinner} from "reactstrap"\n\nclass SpinnerGrowing extends React.Component {\n\n  render() {\n    return(\n      <Spinner type="grow" color="primary" />\n    )\n  }\n}\nexport default SpinnerGrowing\n')),k=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\n  import React from "react"\n  import {Spinner} from "reactstrap"\n\n  class SpinnerColors extends React.Component {\n\n    render() {\n      return(\n        <Spinner type="grow" color="primary" />\n        <Spinner type="grow" color="success" />\n        <Spinner type="grow" color="info" />\n        <Spinner type="grow" color="danger" />\n        <Spinner type="grow" color="warning" />\n        <Spinner type="grow" color="light" />\n        <Spinner type="grow" color="dark" />\n      )\n    }\n  }\n  export default SpinnerColors\n        ')),z=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Spinner} from "reactstrap"\n\nclass SpinnerFlex extends React.Component {\n\n  render() {\n    return(\n      <div className="d-flex justify-content-between align-items-center">\n        <strong>Loading...</strong>\n        <Spinner color="primary" />\n      </div>\n    )\n  }\n}\nexport default SpinnerFlex\n')),R=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Spinner} from "reactstrap"\n\nclass SpinnerFloat extends React.Component {\n\n  render() {\n    return(\n        <Spinner color="primary" className="float-right" />\n    )\n  }\n}\nexport default SpinnerFloat\n')),B=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Spinner} from "reactstrap"\n\nclass SpinnerTextAlignment extends React.Component {\n\n  render() {\n    return(\n      <div className="text-center">\n        <Spinner color="primary" />\n      </div>\n    )\n  }\n}\nexport default SpinnerTextAlignment\n')),A=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Spinner} from "reactstrap"\n\nclass SpinnerSizes extends React.Component {\n\n  render() {\n    return(\n      <Spinner color="primary" size="sm" />\n      <Spinner type="grow" color="primary" size="sm" />\n\n      <Spinner color="primary" />\n      <Spinner type="grow" color="primary" />\n\n      <Spinner color="primary" size="lg" />\n      <Spinner type="grow" color="primary" size="lg" />\n    )\n  }\n}\nexport default SpinnerSizes\n')),I=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Spinner} from "reactstrap"\n\nclass SpinnerButton extends React.Component {\n\n  render() {\n    return(\n        <Button color="primary" className="mr-1 mb-1">\n          <Spinner color="white" size="sm" />\n        </Button>\n\n        <Button color="primary" className="mr-1 mb-1">\n          <Spinner color="white" size="sm" />\n          <span className="ml-50">Loading...</span>\n        </Button>\n\n        <Button color="primary" className="mr-1 mb-1">\n          <Spinner color="white" size="sm" type="grow" />\n        </Button>\n\n        <Button color="primary" className="mb-1">\n          <Spinner color="white" size="sm" type="grow" />\n          <span className="ml-50">Loading...</span>\n        </Button>\n    )\n  }\n}\nexport default SpinnerButton\n')),F=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(E.a,null,"Border Spinner"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(S.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(w.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"Spinner")," tag to create a bordered spinner."),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(h.a,{tabId:"1"},o.a.createElement(T.a,{color:"primary"})),o.a.createElement(h.a,{className:"component-code",tabId:"2"},x)))))}}]),t}(o.a.Component),M=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(E.a,null,"Colored Spinners"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(S.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(w.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"color")," attribute to create a colored spinner."),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(h.a,{tabId:"1"},o.a.createElement(T.a,{className:"mr-50",color:"primary"}),o.a.createElement(T.a,{className:"mr-50",color:"success"}),o.a.createElement(T.a,{className:"mr-50",color:"info"}),o.a.createElement(T.a,{className:"mr-50",color:"danger"}),o.a.createElement(T.a,{className:"mr-50",color:"warning"}),o.a.createElement(T.a,{className:"mr-50",color:"light"}),o.a.createElement(T.a,{className:"mr-50",color:"dark"})),o.a.createElement(h.a,{className:"component-code",tabId:"2"},C)))))}}]),t}(o.a.Component),P=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(E.a,null,"Growing Spinner"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(S.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(w.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,'type="grow"')," with spinner tag to create a growing spinner."),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(h.a,{tabId:"1"},o.a.createElement(T.a,{type:"grow",color:"primary"})),o.a.createElement(h.a,{className:"component-code",tabId:"2"},O)))))}}]),t}(o.a.Component),L=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(E.a,null,"Colored Growing Spinners"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(S.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(w.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"color")," and ",o.a.createElement("code",null,"type")," attribute to create a colored growing spinner."),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(h.a,{tabId:"1"},o.a.createElement(T.a,{type:"grow",className:"mr-50",color:"primary"}),o.a.createElement(T.a,{type:"grow",className:"mr-50",color:"success"}),o.a.createElement(T.a,{type:"grow",className:"mr-50",color:"info"}),o.a.createElement(T.a,{type:"grow",className:"mr-50",color:"danger"}),o.a.createElement(T.a,{type:"grow",className:"mr-50",color:"warning"}),o.a.createElement(T.a,{type:"grow",className:"mr-50",color:"light"}),o.a.createElement(T.a,{type:"grow",className:"mr-50",color:"dark"})),o.a.createElement(h.a,{className:"component-code",tabId:"2"},k)))))}}]),t}(o.a.Component),U=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(E.a,null,"Flex"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(S.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(w.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use Flexbox utilities to place spinners.Use ",o.a.createElement("code",null,".d-flex")," ","and ",o.a.createElement("code",null,".justify-content-[side]"),"."),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(h.a,{tabId:"1"},o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement("strong",null,"Loading..."),o.a.createElement(T.a,{color:"primary"}))),o.a.createElement(h.a,{className:"component-code",tabId:"2"},z)))))}}]),t}(o.a.Component),D=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(E.a,null,"Float"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(S.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(w.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,".float-[side]")," with spinner tag to change spinner's position."),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(h.a,{tabId:"1"},o.a.createElement(T.a,{color:"primary",className:"float-right"})),o.a.createElement(h.a,{className:"component-code",tabId:"2"},R)))))}}]),t}(o.a.Component),G=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(E.a,null,"Text Alignment"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(S.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(w.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"You can also use ",o.a.createElement("code",null,".text-[side]")," as a wrapper to spinner tag to change spinner's position."),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(h.a,{tabId:"1"},o.a.createElement("div",{className:"text-center"},o.a.createElement(T.a,{color:"primary"}))),o.a.createElement(h.a,{className:"component-code",tabId:"2"},B)))))}}]),t}(o.a.Component),J=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(E.a,null,"Sizes"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(S.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(w.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use attribute ",o.a.createElement("code",null,'size="sm/lg"')," for Small or Large spinner ."),o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(h.a,{tabId:"1"},o.a.createElement(T.a,{color:"primary",size:"sm"}),o.a.createElement(T.a,{type:"grow",color:"primary",size:"sm",className:"mr-2"}),o.a.createElement(T.a,{color:"primary"}),o.a.createElement(T.a,{type:"grow",color:"primary",className:"mr-2"}),o.a.createElement(T.a,{color:"primary",size:"lg"}),o.a.createElement(T.a,{type:"grow",color:"primary",size:"lg"})),o.a.createElement(h.a,{className:"component-code",tabId:"2"},A)))))}}]),t}(o.a.Component),Z=t(172),$=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(E.a,null,"Buttons"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(S.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(v.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(w.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement(y.a,{activeTab:this.state.activeTab},o.a.createElement(h.a,{tabId:"1"},o.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},o.a.createElement(Z.a.Ripple,{color:"primary"},o.a.createElement(T.a,{color:"white",size:"sm"}))),o.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},o.a.createElement(Z.a.Ripple,{color:"primary"},o.a.createElement(T.a,{color:"white",size:"sm"}),o.a.createElement("span",{className:"ml-50"},"Loading..."))),o.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},o.a.createElement(Z.a.Ripple,{color:"primary"},o.a.createElement(T.a,{color:"white",size:"sm",type:"grow"}))),o.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},o.a.createElement(Z.a.Ripple,{color:"primary"},o.a.createElement(T.a,{color:"white",size:"sm",type:"grow"}),o.a.createElement("span",{className:"ml-50"},"Loading...")))),o.a.createElement(h.a,{className:"component-code",tabId:"2"},I)))))}}]),t}(o.a.Component),Y=t(809),q=t.n(Y),H=(t(810),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){q.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{breadCrumbTitle:"Spinners",breadCrumbParent:"Components",breadCrumbActive:"Spinners"}),o.a.createElement(i.a,null,o.a.createElement(m.a,{md:"6",sm:"12"},o.a.createElement(F,null)),o.a.createElement(m.a,{md:"6",sm:"12"},o.a.createElement(M,null)),o.a.createElement(m.a,{md:"6",sm:"12"},o.a.createElement(P,null)),o.a.createElement(m.a,{md:"6",sm:"12"},o.a.createElement(L,null)),o.a.createElement(m.a,{md:"6",sm:"12"},o.a.createElement(U,null)),o.a.createElement(m.a,{md:"6",sm:"12"},o.a.createElement(D,null)),o.a.createElement(m.a,{md:"6",sm:"12"},o.a.createElement(G,null)),o.a.createElement(m.a,{md:"6",sm:"12"},o.a.createElement(J,null)),o.a.createElement(m.a,{md:"6",sm:"12"},o.a.createElement($,null))))}}]),t}(o.a.Component));a.default=H},802:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),r=t.n(n).a.createContext({})},810:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript),t="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function n(e,a){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return t})),RegExp(e,a)}t=n(t).source,e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=a.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:n("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:n("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var r=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""},l=function a(t){for(var n=[],l=0;l<t.length;l++){var c=t[l],s=!1;if("string"!=typeof c&&("tag"===c.type&&c.content[0]&&"tag"===c.content[0].type?"</"===c.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===r(c.content[0].content[1])&&n.pop():"/>"===c.content[c.content.length-1].content||n.push({tagName:r(c.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===c.type&&"{"===c.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===c.type&&"}"===c.content?n[n.length-1].openedBraces--:s=!0),(s||"string"==typeof c)&&n.length>0&&0===n[n.length-1].openedBraces){var o=r(c);l<t.length-1&&("string"==typeof t[l+1]||"plain-text"===t[l+1].type)&&(o+=r(t[l+1]),t.splice(l+1,1)),l>0&&("string"==typeof t[l-1]||"plain-text"===t[l-1].type)&&(o=r(t[l-1])+o,t.splice(l-1,1),l--),t[l]=new e.Token("plain-text",o,null,o)}c.content&&"string"!=typeof c.content&&a(c.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||l(e.tokens)}))}(Prism)},814:function(e,a,t){"use strict";var n=t(5),r=t(9),l=t(0),c=t.n(l),s=t(1),o=t.n(s),i=t(4),m=t.n(i),u=t(3),p=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],g={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},E=function(e){var a=e.className,t=e.cssModule,l=e.tabs,s=e.pills,o=e.vertical,i=e.horizontal,g=e.justified,E=e.fill,b=e.navbar,d=e.card,v=e.tag,f=Object(r.a)(e,p),y=Object(u.mapToCssModules)(m()(a,b?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":l,"card-header-tabs":d&&l,"nav-pills":s,"card-header-pills":d&&s,"nav-justified":g,"nav-fill":E}),t);return c.a.createElement(v,Object(n.a)({},f,{className:y}))};E.propTypes=g,E.defaultProps={tag:"ul",vertical:!1},a.a=E},815:function(e,a,t){"use strict";var n=t(5),r=t(12),l=t(0),c=t.n(l),s=t(1),o=t.n(s),i=t(4),m=t.n(i),u=t(802),p=t(3),g={tag:p.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(r.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.tag,l=Object(p.omit)(this.props,Object.keys(g)),s=Object(p.mapToCssModules)(m()("tab-content",a),t);return c.a.createElement(u.a.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(r,Object(n.a)({},l,{className:s})))},a}(l.Component);a.a=E,E.propTypes=g,E.defaultProps={tag:"div"}},816:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(5),r=t(9),l=t(0),c=t.n(l),s=t(1),o=t.n(s),i=t(4),m=t.n(i),u=t(802),p=t(3),g=["className","cssModule","tabId","tag"],E={tag:p.tagPropType,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function b(e){var a=e.className,t=e.cssModule,l=e.tabId,s=e.tag,o=Object(r.a)(e,g),i=function(e){return Object(p.mapToCssModules)(m()("tab-pane",a,{active:l===e}),t)};return c.a.createElement(u.a.Consumer,null,(function(e){var a=e.activeTabId;return c.a.createElement(s,Object(n.a)({},o,{className:i(a)}))}))}b.propTypes=E,b.defaultProps={tag:"div"}},969:function(e,a,t){"use strict";var n=t(5),r=t(9),l=t(0),c=t.n(l),s=t(1),o=t.n(s),i=t(4),m=t.n(i),u=t(3),p=["className","cssModule","type","size","color","children","tag"],g={tag:u.tagPropType,type:o.a.string,size:o.a.string,color:o.a.string,className:o.a.string,cssModule:o.a.object,children:o.a.string},E=function(e){var a=e.className,t=e.cssModule,l=e.type,s=e.size,o=e.color,i=e.children,g=e.tag,E=Object(r.a)(e,p),b=Object(u.mapToCssModules)(m()(a,!!s&&"spinner-"+l+"-"+s,"spinner-"+l,!!o&&"text-"+o),t);return c.a.createElement(g,Object(n.a)({role:"status"},E,{className:b}),i&&c.a.createElement("span",{className:Object(u.mapToCssModules)("sr-only",t)},i))};E.propTypes=g,E.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=E}}]);
//# sourceMappingURL=84.0f75bac1.chunk.js.map