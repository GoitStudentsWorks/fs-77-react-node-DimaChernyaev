import{r as be,K as me,N as ve,n as he,R as J,j as X}from"./index-628beb06.js";var ce={exports:{}};(function(s,m){(function(f,y){s.exports=y(be)})(me,f=>(()=>{var y={703:(p,l,L)=>{var t=L(414);function K(){}function Z(){}Z.resetWarningCache=K,p.exports=function(){function C(oe,B,$,G,se,Y){if(Y!==t){var ee=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ee.name="Invariant Violation",ee}}function j(){return C}C.isRequired=C;var U={array:C,bigint:C,bool:C,func:C,number:C,object:C,string:C,symbol:C,any:C,arrayOf:j,element:C,elementType:C,instanceOf:j,node:C,objectOf:j,oneOf:j,oneOfType:j,shape:j,exact:j,checkPropTypes:Z,resetWarningCache:K};return U.PropTypes=U,U}},697:(p,l,L)=>{p.exports=L(703)()},414:p=>{p.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:p=>{p.exports=f}},P={};function x(p){var l=P[p];if(l!==void 0)return l.exports;var L=P[p]={exports:{}};return y[p](L,L.exports,x),L.exports}x.n=p=>{var l=p&&p.__esModule?()=>p.default:()=>p;return x.d(l,{a:l}),l},x.d=(p,l)=>{for(var L in l)x.o(l,L)&&!x.o(p,L)&&Object.defineProperty(p,L,{enumerable:!0,get:l[L]})},x.o=(p,l)=>Object.prototype.hasOwnProperty.call(p,l),x.r=p=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})};var W={};return(()=>{x.r(W),x.d(W,{default:()=>de});var p=x(98),l=x.n(p),L=x(697),t=x.n(L);function K(){return K=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(r[u]=c[u])}return r},K.apply(this,arguments)}var Z=function(r){var i=r.pageClassName,c=r.pageLinkClassName,u=r.page,M=r.selected,q=r.activeClassName,A=r.activeLinkClassName,a=r.getEventListener,e=r.pageSelectedHandler,d=r.href,n=r.extraAriaContext,o=r.pageLabelBuilder,g=r.rel,v=r.ariaLabel||"Page "+u+(n?" "+n:""),k=null;return M&&(k="page",v=r.ariaLabel||"Page "+u+" is your current page",i=i!==void 0?i+" "+q:q,c!==void 0?A!==void 0&&(c=c+" "+A):c=A),l().createElement("li",{className:i},l().createElement("a",K({rel:g,role:d?void 0:"button",className:c,href:d,tabIndex:M?"-1":"0","aria-label":v,"aria-current":k,onKeyPress:e},a(e)),o(u)))};Z.propTypes={pageSelectedHandler:t().func.isRequired,selected:t().bool.isRequired,pageClassName:t().string,pageLinkClassName:t().string,activeClassName:t().string,activeLinkClassName:t().string,extraAriaContext:t().string,href:t().string,ariaLabel:t().string,page:t().number.isRequired,getEventListener:t().func.isRequired,pageLabelBuilder:t().func.isRequired,rel:t().string};const C=Z;function j(){return j=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(r[u]=c[u])}return r},j.apply(this,arguments)}var U=function(r){var i=r.breakLabel,c=r.breakAriaLabel,u=r.breakClassName,M=r.breakLinkClassName,q=r.breakHandler,A=r.getEventListener,a=u||"break";return l().createElement("li",{className:a},l().createElement("a",j({className:M,role:"button",tabIndex:"0","aria-label":c,onKeyPress:q},A(q)),i))};U.propTypes={breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabel:t().string,breakClassName:t().string,breakLinkClassName:t().string,breakHandler:t().func.isRequired,getEventListener:t().func.isRequired};const oe=U;function B(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r??i}function $(r){return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},$(r)}function G(){return G=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(r[u]=c[u])}return r},G.apply(this,arguments)}function se(r,i){for(var c=0;c<i.length;c++){var u=i[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(r,u.key,u)}}function Y(r,i){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Y(r,i)}function ee(r,i){if(i&&($(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O(r)}function O(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function te(r){return te=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},te(r)}function N(r,i,c){return i in r?Object.defineProperty(r,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[i]=c,r}var ne=function(r){(function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&Y(a,e)})(A,r);var i,c,u,M,q=(u=A,M=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,e=te(u);if(M){var d=te(this).constructor;a=Reflect.construct(e,arguments,d)}else a=e.apply(this,arguments);return ee(this,a)});function A(a){var e,d;return function(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}(this,A),N(O(e=q.call(this,a)),"handlePreviousPage",function(n){var o=e.state.selected;e.handleClick(n,null,o>0?o-1:void 0,{isPrevious:!0})}),N(O(e),"handleNextPage",function(n){var o=e.state.selected,g=e.props.pageCount;e.handleClick(n,null,o<g-1?o+1:void 0,{isNext:!0})}),N(O(e),"handlePageSelected",function(n,o){if(e.state.selected===n)return e.callActiveCallback(n),void e.handleClick(o,null,void 0,{isActive:!0});e.handleClick(o,null,n)}),N(O(e),"handlePageChange",function(n){e.state.selected!==n&&(e.setState({selected:n}),e.callCallback(n))}),N(O(e),"getEventListener",function(n){return N({},e.props.eventListener,n)}),N(O(e),"handleClick",function(n,o,g){var v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},k=v.isPrevious,T=k!==void 0&&k,V=v.isNext,Q=V!==void 0&&V,F=v.isBreak,E=F!==void 0&&F,S=v.isActive,_=S!==void 0&&S;n.preventDefault?n.preventDefault():n.returnValue=!1;var D=e.state.selected,b=e.props.onClick,R=g;if(b){var w=b({index:o,selected:D,nextSelectedPage:g,event:n,isPrevious:T,isNext:Q,isBreak:E,isActive:_});if(w===!1)return;Number.isInteger(w)&&(R=w)}R!==void 0&&e.handlePageChange(R)}),N(O(e),"handleBreakClick",function(n,o){var g=e.state.selected;e.handleClick(o,n,g<n?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),N(O(e),"callCallback",function(n){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:n})}),N(O(e),"callActiveCallback",function(n){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:n})}),N(O(e),"getElementPageRel",function(n){var o=e.state.selected,g=e.props,v=g.nextPageRel,k=g.prevPageRel,T=g.selectedPageRel;return o-1===n?k:o===n?T:o+1===n?v:void 0}),N(O(e),"pagination",function(){var n=[],o=e.props,g=o.pageRangeDisplayed,v=o.pageCount,k=o.marginPagesDisplayed,T=o.breakLabel,V=o.breakClassName,Q=o.breakLinkClassName,F=o.breakAriaLabels,E=e.state.selected;if(v<=g)for(var S=0;S<v;S++)n.push(e.getPageElement(S));else{var _=g/2,D=g-_;E>v-g/2?_=g-(D=v-E):E<g/2&&(D=g-(_=E));var b,R,w=function(I){return e.getPageElement(I)},h=[];for(b=0;b<v;b++){var ae=b+1;if(ae<=k)h.push({type:"page",index:b,display:w(b)});else if(ae>v-k)h.push({type:"page",index:b,display:w(b)});else if(b>=E-_&&b<=E+(E===0&&g>1?D-1:D))h.push({type:"page",index:b,display:w(b)});else if(T&&h.length>0&&h[h.length-1].display!==R&&(g>0||k>0)){var ie=b<E?F.backward:F.forward;R=l().createElement(oe,{key:b,breakAriaLabel:ie,breakLabel:T,breakClassName:V,breakLinkClassName:Q,breakHandler:e.handleBreakClick.bind(null,b),getEventListener:e.getEventListener}),h.push({type:"break",index:b,display:R})}}h.forEach(function(I,z){var re=I;I.type==="break"&&h[z-1]&&h[z-1].type==="page"&&h[z+1]&&h[z+1].type==="page"&&h[z+1].index-h[z-1].index<=2&&(re={type:"page",index:I.index,display:w(I.index)}),n.push(re.display)})}return n}),a.initialPage!==void 0&&a.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(a.initialPage,") and forcePage (").concat(a.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),d=a.initialPage?a.initialPage:a.forcePage?a.forcePage:0,e.state={selected:d},e}return i=A,(c=[{key:"componentDidMount",value:function(){var a=this.props,e=a.initialPage,d=a.disableInitialCallback,n=a.extraAriaContext,o=a.pageCount,g=a.forcePage;e===void 0||d||this.callCallback(e),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(o)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(o,"). Did you forget a Math.ceil()?")),e!==void 0&&e>o-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(o-1,").")),g!==void 0&&g>o-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(g," > ").concat(o-1,")."))}},{key:"componentDidUpdate",value:function(a){this.props.forcePage!==void 0&&this.props.forcePage!==a.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(a.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var a=this.state.selected,e=this.props,d=e.pageCount,n=a+e.pageRangeDisplayed;return n>=d?d-1:n}},{key:"getBackwardJump",value:function(){var a=this.state.selected-this.props.pageRangeDisplayed;return a<0?0:a}},{key:"getElementHref",value:function(a){var e=this.props,d=e.hrefBuilder,n=e.pageCount,o=e.hrefAllControls;if(d)return o||a>=0&&a<n?d(a+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(a){var e=a===this.state.selected;if(this.props.ariaLabelBuilder&&a>=0&&a<this.props.pageCount){var d=this.props.ariaLabelBuilder(a+1,e);return this.props.extraAriaContext&&!e&&(d=d+" "+this.props.extraAriaContext),d}}},{key:"getPageElement",value:function(a){var e=this.state.selected,d=this.props,n=d.pageClassName,o=d.pageLinkClassName,g=d.activeClassName,v=d.activeLinkClassName,k=d.extraAriaContext,T=d.pageLabelBuilder;return l().createElement(C,{key:a,pageSelectedHandler:this.handlePageSelected.bind(null,a),selected:e===a,rel:this.getElementPageRel(a),pageClassName:n,pageLinkClassName:o,activeClassName:g,activeLinkClassName:v,extraAriaContext:k,href:this.getElementHref(a),ariaLabel:this.ariaLabelBuilder(a),page:a+1,pageLabelBuilder:T,getEventListener:this.getEventListener})}},{key:"render",value:function(){var a=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&a!==void 0)return a&&a(this.props);var e=this.props,d=e.disabledClassName,n=e.disabledLinkClassName,o=e.pageCount,g=e.className,v=e.containerClassName,k=e.previousLabel,T=e.previousClassName,V=e.previousLinkClassName,Q=e.previousAriaLabel,F=e.prevRel,E=e.nextLabel,S=e.nextClassName,_=e.nextLinkClassName,D=e.nextAriaLabel,b=e.nextRel,R=this.state.selected,w=R===0,h=R===o-1,ae="".concat(B(T)).concat(w?" ".concat(B(d)):""),ie="".concat(B(S)).concat(h?" ".concat(B(d)):""),I="".concat(B(V)).concat(w?" ".concat(B(n)):""),z="".concat(B(_)).concat(h?" ".concat(B(n)):""),re=w?"true":"false",fe=h?"true":"false";return l().createElement("ul",{className:g||v,role:"navigation","aria-label":"Pagination"},l().createElement("li",{className:ae},l().createElement("a",G({className:I,href:this.getElementHref(R-1),tabIndex:w?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":re,"aria-label":Q,rel:F},this.getEventListener(this.handlePreviousPage)),k)),this.pagination(),l().createElement("li",{className:ie},l().createElement("a",G({className:z,href:this.getElementHref(R+1),tabIndex:h?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":fe,"aria-label":D,rel:b},this.getEventListener(this.handleNextPage)),E)))}}])&&se(i.prototype,c),Object.defineProperty(i,"prototype",{writable:!1}),A}(p.Component);N(ne,"propTypes",{pageCount:t().number.isRequired,pageRangeDisplayed:t().number,marginPagesDisplayed:t().number,previousLabel:t().node,previousAriaLabel:t().string,prevPageRel:t().string,prevRel:t().string,nextLabel:t().node,nextAriaLabel:t().string,nextPageRel:t().string,nextRel:t().string,breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabels:t().shape({forward:t().string,backward:t().string}),hrefBuilder:t().func,hrefAllControls:t().bool,onPageChange:t().func,onPageActive:t().func,onClick:t().func,initialPage:t().number,forcePage:t().number,disableInitialCallback:t().bool,containerClassName:t().string,className:t().string,pageClassName:t().string,pageLinkClassName:t().string,pageLabelBuilder:t().func,activeClassName:t().string,activeLinkClassName:t().string,previousClassName:t().string,nextClassName:t().string,previousLinkClassName:t().string,nextLinkClassName:t().string,disabledClassName:t().string,disabledLinkClassName:t().string,breakClassName:t().string,breakLinkClassName:t().string,extraAriaContext:t().string,ariaLabelBuilder:t().func,eventListener:t().string,renderOnZeroPageCount:t().func,selectedPageRel:t().string}),N(ne,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(r){return r},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const de=ne})(),W})())})(ce);var ye=ce.exports;const xe=ve(ye),Ce=he(xe)`
  display: flex;
  max-width: 295px;
  padding: 14px 0;
  margin: 0 auto;
  margin-botom: 80px;
  justify-content: space-between;
  align-items: center;
  // gap: 24px;

  @media (min-width: 768px) {
    max-width: 436px;
    padding: 14px 24px;
    margin-top: 80px;
    margin-botom: 100px;
  }

  li {
    color: var(--white-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 28px;
    height: 28px;
    cursor: pointer;

    &:hover {
      background-color: var(--hovergreen-color);
      border-radius: 50%;
    }

    &.active {
      background-color: var(--hovergreen-color);
      border-radius: 50%;
    }

    &.selected {
      background-color: var(--hovergreen-color);
      border-radius: 50%;
    }
  }

  a {
    text-decoration: none;
    display: inline-block;
    text-align: center;
    color: var(--white-color);
    font-weight: 500;
    font-size: 12px;
  }

  .previous {
    margin-right: 24px;

    &:hover {
      background-color: transparent;
    }

    @media (min-width: 768px) {
      margin-right: 16px;
    }
  }

  .next {
    margin-left: 24px;

    &:hover {
      background-color: transparent;
    }

    @media (min-width: 768px) {
      margin-left: 16px;
    }
  }
`;var pe={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},le=J.createContext&&J.createContext(pe),H=globalThis&&globalThis.__assign||function(){return H=Object.assign||function(s){for(var m,f=1,y=arguments.length;f<y;f++){m=arguments[f];for(var P in m)Object.prototype.hasOwnProperty.call(m,P)&&(s[P]=m[P])}return s},H.apply(this,arguments)},Pe=globalThis&&globalThis.__rest||function(s,m){var f={};for(var y in s)Object.prototype.hasOwnProperty.call(s,y)&&m.indexOf(y)<0&&(f[y]=s[y]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,y=Object.getOwnPropertySymbols(s);P<y.length;P++)m.indexOf(y[P])<0&&Object.prototype.propertyIsEnumerable.call(s,y[P])&&(f[y[P]]=s[y[P]]);return f};function ue(s){return s&&s.map(function(m,f){return J.createElement(m.tag,H({key:f},m.attr),ue(m.child))})}function ge(s){return function(m){return J.createElement(ke,H({attr:H({},s.attr)},m),ue(s.child))}}function ke(s){var m=function(f){var y=s.attr,P=s.size,x=s.title,W=Pe(s,["attr","size","title"]),p=P||f.size||"1em",l;return f.className&&(l=f.className),s.className&&(l=(l?l+" ":"")+s.className),J.createElement("svg",H({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},f.attr,y,W,{className:l,style:H(H({color:s.color||f.color},f.style),s.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),x&&J.createElement("title",null,x),s.children)};return le!==void 0?J.createElement(le.Consumer,null,function(f){return m(f)}):m(pe)}function Le(s){return ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z",opacity:".87"}},{tag:"path",attr:{d:"M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"}}]})(s)}function Ne(s){return ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(s)}const Oe=({handlePageClick:s,pageCount:m})=>X.jsx(X.Fragment,{children:!!(m-1)&&X.jsx(Ce,{breakLabel:"...",nextLabel:X.jsx(Ne,{fill:"rgba(243, 243, 243, 0.30)",size:15}),onPageChange:s,pageCount:m,previousLabel:X.jsx(Le,{fill:"rgba(243, 243, 243, 0.30)",size:15}),renderOnZeroPageCount:null,onPageActive:window.scrollTo({top:0,behavior:"smooth"})})});export{Oe as P};
