var e,n,t,_,r,o,l={},u=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,n){for(var t in n)e[t]=n[t];return e}function s(e){var n=e.parentNode;n&&n.removeChild(e)}function a(e,n,t){var _,r,o,l=arguments,u={};for(o in n)"key"==o?_=n[o]:"ref"==o?r=n[o]:u[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(l[o]);if(null!=t&&(u.children=t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===u[o]&&(u[o]=e.defaultProps[o]);return f(e,u,_,r,null)}function f(n,t,_,r,o){var l={type:n,props:t,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e.__v:o};return null!=e.vnode&&e.vnode(l),l}function p(e){return e.children}function h(e,n){this.props=e,this.context=n}function d(e,n){if(null==n)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?d(e):null}function v(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return v(e)}}function y(r){(!r.__d&&(r.__d=!0)&&n.push(r)&&!m.__r++||_!==e.debounceRendering)&&((_=e.debounceRendering)||t)(m)}function m(){for(var e;m.__r=n.length;)e=n.sort((function(e,n){return e.__v.__b-n.__v.__b})),n=[],e.some((function(e){var n,t,_,r,o,l,u;e.__d&&(l=(o=(n=e).__v).__e,(u=n.__P)&&(t=[],(_=c({},o)).__v=o.__v+1,r=S(u,o,_,n.__n,void 0!==u.ownerSVGElement,null!=o.__h?[l]:null,t,null==l?d(o):l,o.__h),H(t,o),r!=l&&v(o)))}))}function g(e,n,t,_,r,o,i,c,a,h){var v,y,m,g,k,w,x,E=_&&_.__k||u,$=E.length;for(a==l&&(a=null!=i?i[0]:$?d(_,0):null),t.__k=[],v=0;v<n.length;v++)if(null!=(g=t.__k[v]=null==(g=n[v])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?f(null,g,null,null,g):Array.isArray(g)?f(p,{children:g},null,null,null):null!=g.__e||null!=g.__c?f(g.type,g.props,g.key,null,g.__v):g)){if(g.__=t,g.__b=t.__b+1,null===(m=E[v])||m&&g.key==m.key&&g.type===m.type)E[v]=void 0;else for(y=0;y<$;y++){if((m=E[y])&&g.key==m.key&&g.type===m.type){E[y]=void 0;break}m=null}k=S(e,g,m=m||l,r,o,i,c,a,h),(y=g.ref)&&m.ref!=y&&(x||(x=[]),m.ref&&x.push(m.ref,null,g),x.push(y,g.__c||k,g)),null!=k?(null==w&&(w=k),a=b(e,g,m,E,i,k,a),h||"option"!=t.type?"function"==typeof t.type&&(t.__d=a):e.value=""):a&&m.__e==a&&a.parentNode!=e&&(a=d(m))}if(t.__e=w,null!=i&&"function"!=typeof t.type)for(v=i.length;v--;)null!=i[v]&&s(i[v]);for(v=$;v--;)null!=E[v]&&A(E[v],E[v]);if(x)for(v=0;v<x.length;v++)L(x[v],x[++v],x[++v])}function k(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){k(e,n)})):n.push(e)),n}function b(e,n,t,_,r,o,l){var u,i,c;if(void 0!==n.__d)u=n.__d,n.__d=void 0;else if(r==t||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),u=null;else{for(i=l,c=0;(i=i.nextSibling)&&c<_.length;c+=2)if(i==o)break e;e.insertBefore(o,l),u=l}return void 0!==u?u:o.nextSibling}function w(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||i.test(n)?t:t+"px"}function x(e,n,t,_,r){var o,l,u;if(r&&"className"==n&&(n="class"),"style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||w(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||w(e.style,n,t[n])}else"o"===n[0]&&"n"===n[1]?(o=n!==(n=n.replace(/Capture$/,"")),(l=n.toLowerCase())in e&&(n=l),n=n.slice(2),e.l||(e.l={}),e.l[n+o]=t,u=o?$:E,t?_||e.addEventListener(n,u,o):e.removeEventListener(n,u,o)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&"download"!==n&&"href"!==n&&!r&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function E(n){this.l[n.type+!1](e.event?e.event(n):n)}function $(n){this.l[n.type+!0](e.event?e.event(n):n)}function C(e,n,t){var _,r;for(_=0;_<e.__k.length;_++)(r=e.__k[_])&&(r.__=e,r.__e&&("function"==typeof r.type&&r.__k.length>1&&C(r,n,t),n=b(t,r,r,e.__k,null,r.__e,n),"function"==typeof e.type&&(e.__d=n)))}function S(n,t,_,r,o,l,u,i,s){var a,f,d,v,y,m,k,b,w,x,E,$=t.type;if(void 0!==t.constructor)return null;null!=_.__h&&(s=_.__h,i=t.__e=_.__e,t.__h=null,l=[i]),(a=e.__b)&&a(t);try{e:if("function"==typeof $){if(b=t.props,w=(a=$.contextType)&&r[a.__c],x=a?w?w.props.value:a.__:r,_.__c?k=(f=t.__c=_.__c).__=f.__E:("prototype"in $&&$.prototype.render?t.__c=f=new $(b,x):(t.__c=f=new h(b,x),f.constructor=$,f.render=N),w&&w.sub(f),f.props=b,f.state||(f.state={}),f.context=x,f.__n=r,d=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=$.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=c({},f.__s)),c(f.__s,$.getDerivedStateFromProps(b,f.__s))),v=f.props,y=f.state,d)null==$.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==$.getDerivedStateFromProps&&b!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,x)||t.__v===_.__v){f.props=b,f.state=f.__s,t.__v!==_.__v&&(f.__d=!1),f.__v=t,t.__e=_.__e,t.__k=_.__k,f.__h.length&&u.push(f),C(t,i,n);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,y,m)}))}f.context=x,f.props=b,f.state=f.__s,(a=e.__r)&&a(t),f.__d=!1,f.__v=t,f.__P=n,a=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(r=c(c({},r),f.getChildContext())),d||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(v,y)),E=null!=a&&a.type==p&&null==a.key?a.props.children:a,g(n,Array.isArray(E)?E:[E],t,_,r,o,l,u,i,s),f.base=t.__e,t.__h=null,f.__h.length&&u.push(f),k&&(f.__E=f.__=null),f.__e=!1}else null==l&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=P(_.__e,t,_,r,o,l,u,s);(a=e.diffed)&&a(t)}catch(n){t.__v=null,(s||null!=l)&&(t.__e=i,t.__h=!!s,l[l.indexOf(i)]=null),e.__e(n,t,_)}return t.__e}function H(n,t){e.__c&&e.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(e){e.call(t)}))}catch(n){e.__e(n,t.__v)}}))}function P(e,n,t,_,r,o,i,c){var s,a,f,p,h,d=t.props,v=n.props;if(r="svg"===n.type||r,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===n.type?3===a.nodeType:a.localName===n.type)||e==a)){e=a,o[s]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,v.is&&{is:v.is}),o=null,c=!1}if(null===n.type)d===v||c&&e.data===v||(e.data=v);else{if(null!=o&&(o=u.slice.call(e.childNodes)),f=(d=t.props||l).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=o)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}(function(e,n,t,_,r){var o;for(o in t)"children"===o||"key"===o||o in n||x(e,o,null,t[o],_);for(o in n)r&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||x(e,o,n[o],t[o],_)})(e,v,d,r,c),p?n.__k=[]:(s=n.props.children,g(e,Array.isArray(s)?s:[s],n,t,_,"foreignObject"!==n.type&&r,o,i,l,c)),c||("value"in v&&void 0!==(s=v.value)&&(s!==e.value||"progress"===n.type&&!s)&&x(e,"value",s,d.value,!1),"checked"in v&&void 0!==(s=v.checked)&&s!==e.checked&&x(e,"checked",s,d.checked,!1))}return e}function L(n,t,_){try{"function"==typeof n?n(t):n.current=t}catch(n){e.__e(n,_)}}function A(n,t,_){var r,o,l;if(e.unmount&&e.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||L(r,null,t)),_||"function"==typeof n.type||(_=null!=(o=n.__e)),n.__e=n.__d=void 0,null!=(r=n.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){e.__e(n,t)}r.base=r.__P=null}if(r=n.__k)for(l=0;l<r.length;l++)r[l]&&A(r[l],t,_);null!=o&&s(o)}function N(e,n,t){return this.constructor(e,t)}function T(n,t,_){var o,i,c;e.__&&e.__(n,t),i=(o=_===r)?null:_&&_.__k||t.__k,n=a(p,null,[n]),c=[],S(t,(o?t:_||t).__k=n,i||l,l,void 0!==t.ownerSVGElement,_&&!o?[_]:i?null:t.childNodes.length?u.slice.call(t.childNodes):null,c,_||l,o),H(c,n)}function U(e,n,t){var _,r,o,l=arguments,u=c({},e.props);for(o in n)"key"==o?_=n[o]:"ref"==o?r=n[o]:u[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(l[o]);return null!=t&&(u.children=t),f(e.type,u,_||e.key,r||e.ref,null)}e={__e:function(e,n){for(var t,_,r,o=n.__h;n=n.__;)if((t=n.__c)&&!t.__)try{if((_=t.constructor)&&null!=_.getDerivedStateFromError&&(t.setState(_.getDerivedStateFromError(e)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),r=t.__d),r)return n.__h=o,t.__E=t}catch(n){e=n}throw e},__v:0},h.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},t),this.props)),e&&c(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),y(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},h.prototype.render=p,n=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,r=l,o=0;var D=function(e,n,t,_){var r;n[0]=0;for(var o=1;o<n.length;o++){var l=n[o++],u=n[o]?(n[0]|=l?1:2,t[n[o++]]):n[++o];3===l?_[0]=u:4===l?_[1]=Object.assign(_[1]||{},u):5===l?(_[1]=_[1]||{})[n[++o]]=u:6===l?_[1][n[++o]]+=u+"":l?(r=e.apply(u,D(e,u,t,["",null])),_.push(r),u[0]?n[0]|=2:(n[o-2]=0,n[o]=r)):_.push(u)}return _},F=new Map;var M=function(e){var n=F.get(this);return n||(n=new Map,F.set(this,n)),(n=D(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,_=1,r="",o="",l=[0],u=function(e){1===_&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,e,r):3===_&&(e||r)?(l.push(3,e,r),_=2):2===_&&"..."===r&&e?l.push(4,e,0):2===_&&r&&!e?l.push(5,0,!0,r):_>=5&&((r||!e&&5===_)&&(l.push(_,0,r,t),_=6),e&&(l.push(_,e,0,t),_=6)),r=""},i=0;i<e.length;i++){i&&(1===_&&u(),u(i));for(var c=0;c<e[i].length;c++)n=e[i][c],1===_?"<"===n?(u(),l=[l],_=3):r+=n:4===_?"--"===r&&">"===n?(_=1,r=""):r=n+r[0]:o?n===o?o="":r+=n:'"'===n||"'"===n?o=n:">"===n?(u(),_=1):_&&("="===n?(_=5,t=r,r=""):"/"===n&&(_<5||">"===e[i][c+1])?(u(),3===_&&(l=l[0]),_=l,(l=l[0]).push(2,0,_),_=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),_=2):r+=n),3===_&&"!--"===r&&(_=4,l=l[0])}return u(),l}(e)),n),arguments,[])).length>1?n:n[0]}.bind(a);let W;var q,j,O,R=0,I=[],z=e.__b,B=e.__r,G=e.diffed,V=e.__c,K=e.unmount;function J(n,t){e.__h&&e.__h(j,n,R||t),R=0;var _=j.__H||(j.__H={__:[],__h:[]});return n>=_.__.length&&_.__.push({}),_.__[n]}function Q(e){return R=1,X(le,e)}function X(e,n,t){var _=J(q++,2);return _.t=e,_.__c||(_.__=[t?t(n):le(void 0,n),function(e){var n=_.t(_.__[0],e);_.__[0]!==n&&(_.__=[n,_.__[1]],_.__c.setState({}))}],_.__c=j),_.__}function Y(n,t){var _=J(q++,3);!e.__s&&oe(_.__H,t)&&(_.__=n,_.__H=t,j.__H.__h.push(_))}function Z(e){return R=5,ee((function(){return{current:e}}),[])}function ee(e,n){var t=J(q++,7);return oe(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function ne(){I.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(_e),t.__H.__h.forEach(re),t.__H.__h=[]}catch(n){t.__H.__h=[],e.__e(n,t.__v)}})),I=[]}e.__b=function(e){j=null,z&&z(e)},e.__r=function(e){B&&B(e),q=0;var n=(j=e.__c).__H;n&&(n.__h.forEach(_e),n.__h.forEach(re),n.__h=[])},e.diffed=function(n){G&&G(n);var t=n.__c;t&&t.__H&&t.__H.__h.length&&(1!==I.push(t)&&O===e.requestAnimationFrame||((O=e.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(_),te&&cancelAnimationFrame(n),setTimeout(e)},_=setTimeout(t,100);te&&(n=requestAnimationFrame(t))})(ne)),j=void 0},e.__c=function(n,t){t.some((function(n){try{n.__h.forEach(_e),n.__h=n.__h.filter((function(e){return!e.__||re(e)}))}catch(o){t.some((function(e){e.__h&&(e.__h=[])})),t=[],e.__e(o,n.__v)}})),V&&V(n,t)},e.unmount=function(n){K&&K(n);var t=n.__c;if(t&&t.__H)try{t.__H.__.forEach(_e)}catch(n){e.__e(n,t.__v)}};var te="function"==typeof requestAnimationFrame;function _e(e){var n=j;"function"==typeof e.__c&&e.__c(),j=n}function re(e){var n=j;e.__c=e.__(),j=n}function oe(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function le(e,n){return"function"==typeof n?n(e):n}const ue=(e,n,t)=>{if(n&&"click"===n.type){const _=n.target.closest("a[href]");if(!_||_.origin!=location.origin)return e;n.preventDefault(),t=!0,n=_.href.replace(location.origin,"")}else"string"!=typeof n&&(n=location.pathname+location.search);return!0===t?history.pushState(null,"",n):!1===t&&history.replaceState(null,"",n),n};function ie(e){const[n,t]=X(ue,location.pathname+location.search),_=ee(()=>{const e=new URL(n,location.origin),_=e.pathname.replace(/(.)\/$/g,"$1");return{url:n,path:_,query:Object.fromEntries(e.searchParams),route:t}},[n]);return Y(()=>(addEventListener("click",t),addEventListener("popstate",t),()=>{removeEventListener("click",t),removeEventListener("popstate",t)})),a(ie.ctx.Provider,{value:_},e.children)}function ce(e){const[,n]=X(e=>e+1,0),t=se(),{url:_,path:r,query:o}=t,l=Z(t),u=Z(),i=Z(),c=Z(),s=Z();_!==l.current.url&&(s.current=null,u.current=l.current,c.current=i.current,l.current=t),this.componentDidCatch=e=>{e&&e.then&&(s.current=e)},Y(()=>{let t=s.current;const r=()=>{l.current.url===_&&s.current===t&&(e.onLoadEnd&&e.onLoadEnd(_),u.current=c.current=null,n(0))};t?(e.onLoadStart&&e.onLoadStart(_),t.then(r)):r()},[_]);const a=[].concat(...e.children);let f=a.filter(e=>e.props.path===r);return 0==f.length&&(f=a.filter(e=>e.props.default)),i.current=f.map((e,n)=>U(e,{path:r,query:o})),i.current.concat(c.current||[])}ce.Provider=ie,ie.ctx=function(e,n){var t={__c:n="__cC"+o++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e,t,_){return this.getChildContext||(t=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(y)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}({});const se=()=>function(e){var n=j.context[e.__c],t=J(q++,9);return t.__c=e,n?(null==t.__&&(t.__=!0,n.sub(j)),n.props.value):e.__}(ie.ctx);function ae(e){let n,t;return _=>{n||(n=e().then(e=>(t=e&&e.default||e,1)));const[,r]=Q(0),o=Z(t);if(o.current||(o.current=n.then(r)),void 0===t)throw n;return a(t,_)}}function fe(e){return this.componentDidCatch=pe,e.children}function pe(e){e&&e.then?this.__d=!0:this.props.onError&&this.props.onError(e)}function he(e){if(document.querySelector('link[rel=stylesheet][href="'+e+'"]'))return;const n=document.createElement("link");n.rel="stylesheet",n.href=e,document.head.appendChild(n)}he("/assets/style.module.7b16dcc3.css");const de="home_7pwwsk";function ve(){const[e,n]=Q(0);return M`
      <section class=${de}>
        <h1>Home</h1>
        <p>This is the home page.</p>
        ${M`
          <button style=${{width:30}} onClick=${()=>n(e-1)}>
            -
          </button>
          <output style=${{padding:10}}>Count: ${e}</output>
          <button style=${{width:30}} onClick=${()=>n(e+1)}>
            +
          </button>
        `}
      </section>
    `}const ye=()=>M`<section>
    <h1>404: Not Found</h1>
    <p>It's gone :(</p>
  </section>`;function me(){const{url:e}=se();return M`<header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/kings">Kings</a>
        <a href="/error">Error</a>
      </nav>
      <label>
        URL:
        <input readonly value=${e} ref=${e=>e&&(e.size=e.value.length)}/>
      </label>
    </header>`}null;const ge=ae(()=>import("./chunks/index.580b3e6b.js")),ke=ae(()=>(he("/assets/style.module.1bb8ab26.css"),import("./chunks/index.04e5b53e.js")));function be(){return M`<${ie}>
      <div class="app">
        <${me}/>
        <${fe}>
          <${ce}>
            <${ve} path="/"/>
            <${ge} path="/about"/>
            <${ke} path="/kings"/>
            <${ye} default/>
          </${ce}>
        </${fe}>
      </div>
    </${ie}>`}async function we(e){const{default:n}=await import("./chunks/prerender.60d7ef3b.js");return await n(M`<${be} ...${e}/>`)}!function(e,n){if("undefined"==typeof window)return;let t=document.querySelector("script[type=isodata]");n=n||t&&t.parentNode||document.body,!W&&t?function(e,n){T(e,n,r)}(e,n):T(e,n),W=!0}(M`<${be}/>`);export{be as App,Z as a,k as b,h as d,Q as l,M as m,e as n,p,we as prerender,U as q,he as s,a as v,Y as y};