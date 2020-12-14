import{s as e,d as t,n,v as r,p as i,b as a,a as o,y as l,m as s,l as c}from"../index.27badcaa.js";e("/assets/style.module.1bb8ab26.css");const u={settings:"settings_1xafir7",description:"description_1xafir7",title:"title_1xafir7",conscript:"conscript_1xafir7",laborer:"laborer_1xafir7",miner:"miner_1xafir7",alchemist:"alchemist_1xafir7",soldier:"soldier_1xafir7",rider:"rider_1xafir7",bowman:"bowman_1xafir7","war-elephant":"war-elephant_1xafir7",trebuchet:"trebuchet_1xafir7",guide:"guide_1xafir7",kings:"kings_1xafir7",worldwrapper:"worldwrapper_1xafir7",world:"world_1xafir7",backboard:"backboard_1xafir7",grid:"grid_1xafir7",cell:"cell_1xafir7",king:"king_1xafir7",muster:"muster_1xafir7",deploy:"deploy_1xafir7",build:"build_1xafir7",troop:"troop_1xafir7",feature:"feature_1xafir7",dagger:"dagger_1xafir7",standard:"standard_1xafir7"};function p(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function d(e){this.props=e}(d.prototype=new t).isPureReactComponent=!0,d.prototype.shouldComponentUpdate=function(e,t){return p(this.props,e)||p(this.state,t)};var f=n.__b;n.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),f&&f(e)};var _=n.__e;function m(e){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),(e=function(e,t){for(var n in t)e[n]=t[n];return e}({},e)).__c=null,e.__k=e.__k&&e.__k.map(m)),e}function v(e){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(v)),e}function b(){this.__u=0,this.t=null,this.__b=null}function h(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function y(){this.u=null,this.o=null}n.__e=function(e,t,n){if(e.then)for(var r,i=t;i=i.__;)if((r=i.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);_(e,t,n)},(b.prototype=new t).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var i=h(r.__v),a=!1,o=function(){a||(a=!0,n.componentWillUnmount=n.__c,i?i(l):l())};n.__c=n.componentWillUnmount,n.componentWillUnmount=function(){o(),n.__c&&n.__c()};var l=function(){var e;if(!--r.__u)for(r.__v.__k[0]=v(r.state.__e),r.setState({__e:r.__b=null});e=r.t.pop();)e.forceUpdate()};!0===t.__h||r.__u++||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(o,o)},b.prototype.componentWillUnmount=function(){this.t=[]},b.prototype.render=function(e,t){this.__b&&(this.__v.__k&&(this.__v.__k[0]=m(this.__b)),this.__b=null);var n=t.__e&&r(i,null,e.fallback);return n&&(n.__h=null),[r(i,null,t.__e?null:e.children),n]};var g=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(y.prototype=new t).__e=function(e){var t=this,n=h(t.__v),r=t.o.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),g(t,e,r)):i()};n?n(a):a()}},y.prototype.render=function(e){this.u=null,this.o=new Map;var t=a(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},y.prototype.componentDidUpdate=y.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){g(e,n,t)}))};var $="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,k=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,x="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;t.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(t.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var w=n.event;function M(){}function C(){return this.cancelBubble}function U(){return this.defaultPrevented}n.event=function(e){return w&&(e=w(e)),e.persist=M,e.isPropagationStopped=C,e.isDefaultPrevented=U,e.nativeEvent=e};var S={configurable:!0,get:function(){return this.class}},O=n.vnode;n.vnode=function(e){var t=e.type,n=e.props,r=n;if("string"==typeof t){for(var i in r={},n){var o=n[i];"defaultValue"===i&&"value"in n&&null==n.value?i="value":"download"===i&&!0===o?o="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!x.test(n.type)?i="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(i)?i=i.toLowerCase():k.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[i]=o}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=a(n.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),e.props=r}t&&n.class!=n.className&&(S.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",S)),e.$$typeof=$,O&&O(e)};var P=n.__r;n.__r=function(e){P&&P(e),e.__c};const E=({name:e,icon:t,css:n="standard",attack:r=1,defense:i=0,speed:a=1,range:o=1,cap:l=50,cooldown:s=2.5,abilities:c=[]})=>{if(!e||!t)throw Error("Unit is missing a name or icon");return{name:e,icon:t,css:n,attack:r,defense:i,speed:a,range:o,cap:l,cooldown:s,abilities:c}},N={c:E({name:"conscript",icon:"🗡️",css:"dagger",defense:1,abilities:["labor","miner","soldier"]}),l:E({name:"laborer",icon:"🛠️",css:"standard",attack:1,defense:0,speed:1,cap:50,abilities:["build","conscript"]}),m:E({name:"miner",icon:"⛏️",css:"standard",attack:1,defense:0,speed:1,cap:50,abilities:["dig","conscript","alchemist"]}),a:E({name:"alchemist",icon:"⚗️",css:"standard",attack:1,defense:0,speed:1,cap:50,abilities:["research","miner"]}),s:E({name:"soldier",icon:"🛡️",css:"standard",attack:1,defense:2,speed:0,cap:50,abilities:["bowman","rider"]}),r:E({name:"rider",icon:"🐎",css:"standard",attack:2,defense:2,speed:3,cap:36,abilities:["charge","retreat","soldier"]}),e:E({name:"war-elephant",icon:"🐘",css:"standard",attack:4,defense:6,speed:1,cap:24,abilities:["charge","trample","rider"]}),b:E({name:"bowman",icon:"🏹",css:"standard",attack:1,defense:1,range:2,speed:1,cap:50,abilities:["soldier","retreat","skirmish"]}),t:E({name:"trebuchet",icon:"☄️",css:"standard",attack:4,defense:1,range:4,speed:1,cap:12,abilities:["trample","escort","bowman"]})},A=e=>{let t=["⛰️","⛰️","⛰️","⛰️","🌲","🌲","🌳","🌳","🌲","🌲"],n=Number(e);return[e=>e-1,e=>e**2-e,e=>2*e,e=>e**2-2*e-1,e=>Math.floor(e/2-1),e=>e**2-Math.floor(e/2+1),e=>Math.floor(2.5*e),e=>e**2-Math.floor(2.5*e),e=>Math.floor(4*e-1),e=>e**2-Math.floor(4*e)].map(e=>e(n)).reduce((e,n,r)=>(e[n]=t[r],e),{})};function T(e,t,n){return t%n==0&&(e+1)%n==0||(t+1)%n==0&&e%n==0}function D(e){const{abilities:t,callback:n}=e;return s`<div style=${{display:"none"}}>
      ${t.map(e=>s`<div onMouseUp=${()=>n(e)}>${e}</div>`)}
    </div>`}function W(e){const{delay:t,matrix:n,positionOne:r,positionTwo:i,resources:a}=e,{dimension:p}=e,d=o(null),f=e=>{let t=Math.ceil(e/8),n=e%8,r=t%2==0?-1:1;return t%2==0&&0===n&&(r=1),t%2==1&&0===n&&(r=0),[-p+r,-p,-1,1,p,p+r]},[_,m]=c([r]),[v,b]=c([null,null]),[h,y]=c([]),[g,$]=c(n);!function(e,t){const n=o();l(()=>{n.current=e},[e]),l(()=>{if(null!==t){const e=setInterval((function(){n.current()}),t);return()=>clearInterval(e)}},[t])}(()=>{console.log("active",h),$(e=>e.map((e,t)=>{let n=N[e.type].cap;if(e.total<0)return e.total=0,e;if(_.includes(t)){let t=function(e,t,n=1){return n/(1/(1-t/e)+Math.exp(-t))}(n,e.total);return e.total+=t,e}return e}))},t);return s`<div class=${u.worldwrapper}>
      <div class=${u.world} ref=${d}>
        <div class=${u.backboard}/>
        <section class=${u.grid} onDblClick=${()=>console.log(g)} onContextMenu=${e=>e.preventDefault()}>
          ${g.map((e,t)=>{return s`<div class=${`${u.cell} ${_.includes(t)?u.king:""} ${n=t,null===v[0]?"":v[0]===n?u.muster:f(v[0]).reduce((e,t)=>T(v[0],n,p)?e:[...e,v[0]+t],[]).includes(n)?u.deploy:""}`} onContextMenu=${n=>((e,t,n)=>{e.preventDefault();const r=v[0];if("number"!=typeof n||"number"!=typeof r)return;if(T(r,n,p))return;if(n===r||g[n].type!==t.type||g[n].total>=N[g[n].type].cap)return b([null,null]);let i;g[n].total+t.total>=N[t.type].cap&&(i=N[t.type].cap-t.total);const a=v[1].type,o=v[1].total,l=v[1].player;return a===t.type||l!==t.player?l!==t.player?console.log("Battles not yet supported"):void(f(r).reduce((e,t)=>T(v[0],n,p)?e:[...e,v[0]+t],[]).includes(n)&&($(e=>e.map((e,t)=>t===r?(e.total-=i??o,e):t===n?(e.total+=i??o,e):e)),b([null,null]))):void 0})(n,e,t)}>
              ${e.total>0?s`<div class=${""+u.troop} onClick=${n=>((e,t)=>{console.log(e,t),h.find(e=>e.id===t)||"number"==typeof t&&e.total>0&&b([t,e])})(e,t)} onContextMenu=${n=>((e,t,n)=>{if(e.preventDefault(),console.log(t,n,N[t.type].abilities),h.find(e=>e.id===n))return;let r=e.currentTarget;if("number"==typeof n&&t.total>0){y([...h,{id:n,type:t.type,total:t.total,ability:"build"}]);let e=Math.random()>.5?10:2;r.style.setProperty("animation-duration",e+"s"),r.classList.toggle("oncooldown"),setTimeout(()=>{y(e=>e.filter(e=>e.id!==n)),r.classList.remove("oncooldown")},1e3*e)}})(n,e,t)}>
                  <span>${Math.round(e.total)}</span>
                  <span class=${u[N[e.type].css]}>
                    ${N[e.type].icon}
                  </span>
                  <${D} abilities=${N[e.type].abilities}/>
                </div>`:null}
              ${"string"==typeof a[t]?s`<span class=${`${u.feature} ${a[t]}`}>
                  ${a[t]}
                </span>`:null}
            </div>`;var n})}
        </section>
      </div>
    </div>`}function j(e){let t;const[n,r]=c(!1);return s`<div className=${"Tooltip-Wrapper "+e.class} onMouseEnter=${()=>{t=setTimeout(()=>{r(!0)},e.delay||400)}} onMouseLeave=${()=>{clearInterval(t),r(!1)}}>
      ${e.children}
      ${n&&s`<div className=${"Tooltip-Tip "+(e.direction||"bottom")}>
          ${e.content.map(e=>s`<div className="tip-list">${e}</div>`)}
        </div>`}
    </div>`}null;export default function(){const[e,t]=c(8);let n=A(e);const[r,i]=c({delay:1e3,positionOne:0,positionTwo:e**2-1,resources:n,matrix:Array(e**2).fill(0).map(()=>({type:"c",total:0,player:1}))}),a=e=>{e.target.value&&t(Number(e.target.value))};return l(()=>{document.documentElement.style.setProperty("--grid-columns",String(e)),document.documentElement.style.setProperty("--grid-lines",String(e))},[e]),s`
      <section class=${u.kings}>
        <h1 class=${u.title}>King's Corvée</h1>
        <form class=${u.settings}>
          Choose difficulty:
          <label for="easy" onClick=${a}>
             
            Easy
            <input type="radio" id="easy" name="difficulty" value="8" checked/>
          </label>
          <label for="medium" onClick=${a}>
             
            Medium
            <input type="radio" id="medium" name="difficulty" value="12"/>
          </label>
          <label for="hard" onClick=${a}>
             
            Hard
            <input type="radio" id="hard" name="difficulty" value="20"/>
          </label>
          <button type="button" onClick=${e=>{e.preventDefault(),console.log(e)}}>
            Start Game
          </button>
        </form>
        <p class=${u.description}>
          A Cooldown-based Strategy game. Mouse over to see unit stats below:
        </p>
        <div class=${u.guide}>
          ${Object.values(N).map(e=>{return s`<${j} class=${u[e.name]} content=${t=e,["Attack: "+t.attack,"Defense: "+t.defense,"Speed: "+t.speed,"Range: "+(t.range??1),"Unit Cap: "+t.cap,"Cooldown: "+t.cooldown," --- ","Abilities: ",t.abilities.join(", ")].filter(e=>!!e)}>
              <p class=${e.name}>
                ${e.name} ​
                <span class=${u[e.css]} role="img" aria-label=${e.name+"-icon"}>
                  ​ ${e.icon}
                </span>
              </p>
            </${j}>`;var t})}
        </div>
      </section>
      <${W} dimension=${e} ...${r}/>
    `}