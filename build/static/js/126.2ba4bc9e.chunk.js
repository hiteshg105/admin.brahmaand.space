(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[126],{2508:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a(14),r=a(16),l=a(15),s=a(0),o=a.n(s),c=a(1150),u=a(1153),m=a(1151),p=a(1152),d=a(172),g=a(999),E=a(809),h=a(26),f=a(42),b=a(128),v=a(31),O=a(259),y=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={role:e.props.role},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{title:"Access Control",subTitle:"Add route protection using Vuexy's Access Control"}),o.a.createElement(c.a,null,o.a.createElement(u.a,{className:"pt-2"},"Your current role is: ",o.a.createElement("strong",null," ",this.state.role),o.a.createElement("div",{className:"d-flex justify-content-start flex-wrap align-items-center mt-1"},o.a.createElement(v.a,{name:"role-radio",label:"Editor",className:"mr-1",defaultChecked:"editor"===this.state.role,onClick:function(){return e.props.changeRole("editor")}}),o.a.createElement(v.a,{name:"role-radio",label:"Admin",defaultChecked:"admin"===this.state.role,onClick:function(){return e.props.changeRole("admin")}})),o.a.createElement(c.a,{className:"border mt-3"},o.a.createElement(m.a,null,o.a.createElement(p.a,null,"Buttons")),o.a.createElement(u.a,null,o.a.createElement(d.a,{color:"primary"},"Editor & Admin"),"admin"===this.state.role&&o.a.createElement(d.a,{className:"ml-2",color:"primary"},"Admin Only"))),o.a.createElement(c.a,{className:"border mt-3"},o.a.createElement(m.a,null,o.a.createElement(p.a,null,"Collapse")),o.a.createElement(u.a,null,o.a.createElement("div",{className:"vx-collapse collapse-bordered"},o.a.createElement(c.a,null,o.a.createElement(m.a,{id:"item-1"},o.a.createElement(p.a,{className:"lead collapse-title collapsed"},"Article 1"),o.a.createElement(O.a,{size:15,className:"collapse-icon"})),o.a.createElement(g.a,{toggler:"#item-1"},o.a.createElement(u.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo. Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex enim. Quisque consequat dui libero, vel blandit lorem porttitor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Nullam sed lobortis nisl, quis eleifend metus."))),o.a.createElement(c.a,null,o.a.createElement(m.a,{id:"item-2"},o.a.createElement(p.a,{className:"lead collapse-title collapsed"},"Article 2"),o.a.createElement(O.a,{size:15,className:"collapse-icon"})),o.a.createElement(g.a,{toggler:"#item-2"},o.a.createElement(u.a,null,"Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique. Maecenas tincidunt dui arcu, a aliquet nisl venenatis vitae. Praesent mauris ligula, porta at maximus ac, rutrum vitae sapien. Donec a sapien id erat dapibus dignissim sodales in est. Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex, eu aliquam erat sagittis eget. Suspendisse mollis felis nec ipsum vehicula, at posuere libero viverra. Nam hendrerit dapibus eleifend. Aliquam elit nulla, tincidunt pellentesque enim mollis, consectetur placerat enim. Integer condimentum tristique ante et ullamcorper. Mauris placerat pretium ex. Nam aliquam sed tortor sit amet efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus."))),"admin"===this.state.role&&o.a.createElement(c.a,null,o.a.createElement(m.a,{id:"item-3"},o.a.createElement(p.a,{className:"lead collapse-title collapsed"},"Article 3 - Admin Only"),o.a.createElement(O.a,{size:15,className:"collapse-icon"})),o.a.createElement(g.a,{toggler:"#item-3"},o.a.createElement(u.a,null,"Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu"))),o.a.createElement(c.a,null,o.a.createElement(m.a,{id:"item-4"},o.a.createElement(p.a,{className:"lead collapse-title collapsed"},"Article 4"),o.a.createElement(O.a,{size:15,className:"collapse-icon"})),o.a.createElement(g.a,{toggler:"#item-4"},o.a.createElement(u.a,null,"Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.")))))),o.a.createElement(c.a,{className:"border mt-3"},o.a.createElement(m.a,null,o.a.createElement(p.a,null,"Route Protection")),o.a.createElement(u.a,null,o.a.createElement("p",null,"You can add route protection using file"," ",o.a.createElement("strong",null,"navigationConfig"),". Only admin can visit eCommerce Dashboard."),o.a.createElement(d.a,{color:"admin"===this.state.role?"primary":"danger"},o.a.createElement(f.b,{to:"/ecommerce-dashboard",className:"text-white"},"Visit")))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.role!==t.role?{role:e.role}:null}}]),a}(o.a.Component);t.default=Object(h.b)((function(e){return{role:e.auth.login.userRole}}),{changeRole:b.a})(y)},809:function(e,t,a){"use strict";var n=a(13),i=a(14),r=a(16),l=a(15),s=a(0),o=a.n(s),c=a(1148),u=a(1149),m=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(c.a,{className:"mb-2"},o.a.createElement(u.a,{sm:"12",className:"ml-50"},o.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):o.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(o.a.Component);t.a=m},865:function(e,t,a){"use strict";var n,i=a(5),r=a(9),l=a(11),s=a(12),o=a(34),c=a(0),u=a.n(c),m=a(1),p=a.n(m),d=a(4),g=a.n(d),E=a(92),h=a(3),f=["tag","isOpen","className","navbar","cssModule","children","innerRef"];function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=v(v({},E.Transition.propTypes),{},{isOpen:p.a.bool,children:p.a.oneOfType([p.a.arrayOf(p.a.node),p.a.node]),tag:h.tagPropType,className:p.a.node,navbar:p.a.bool,cssModule:p.a.object,innerRef:p.a.oneOfType([p.a.func,p.a.string,p.a.object])}),y=v(v({},E.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:h.TransitionTimeouts.Collapse}),j=((n={})[h.TransitionStatuses.ENTERING]="collapsing",n[h.TransitionStatuses.ENTERED]="collapse show",n[h.TransitionStatuses.EXITING]="collapsing",n[h.TransitionStatuses.EXITED]="collapse",n);function N(e){return e.scrollHeight}var x=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(l.a)(a))})),a}Object(s.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:N(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:N(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,l=t.className,s=t.navbar,o=t.cssModule,c=t.children,m=(t.innerRef,Object(r.a)(t,f)),p=this.state.height,d=Object(h.pick)(m,h.TransitionPropTypeKeys),b=Object(h.omit)(m,h.TransitionPropTypeKeys);return u.a.createElement(E.Transition,Object(i.a)({},d,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=function(e){return j[e]||"collapse"}(t),r=Object(h.mapToCssModules)(g()(l,n,s&&"navbar-collapse"),o),m=null===p?null:{height:p};return u.a.createElement(a,Object(i.a)({},b,{style:v(v({},b.style),m),className:r,ref:e.props.innerRef}),c)}))},t}(c.Component);x.propTypes=O,x.defaultProps=y,t.a=x},999:function(e,t,a){"use strict";var n=a(5),i=a(11),r=a(12),l=a(0),s=a.n(l),o=a(1),c=a.n(o),u=a(865),m=a(3),p=["toggleEvents","defaultOpen"],d={defaultOpen:c.a.bool,toggler:c.a.string.isRequired,toggleEvents:c.a.arrayOf(c.a.string)},g={toggleEvents:m.defaultToggleEvents},E=function(e){function t(t){var a;return(a=e.call(this,t)||this).togglers=null,a.removeEventListeners=null,a.toggle=a.toggle.bind(Object(i.a)(a)),a.state={isOpen:t.defaultOpen||!1},a}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.togglers=Object(m.findDOMElements)(this.props.toggler),this.togglers.length&&(this.removeEventListeners=Object(m.addMultipleEventListeners)(this.togglers,this.toggle,this.props.toggleEvents))},a.componentWillUnmount=function(){this.togglers.length&&this.removeEventListeners&&this.removeEventListeners()},a.toggle=function(e){this.setState((function(e){return{isOpen:!e.isOpen}})),e.preventDefault()},a.render=function(){return s.a.createElement(u.a,Object(n.a)({isOpen:this.state.isOpen},Object(m.omit)(this.props,p)))},t}(l.Component);E.propTypes=d,E.defaultProps=g,t.a=E}}]);
//# sourceMappingURL=126.2ba4bc9e.chunk.js.map