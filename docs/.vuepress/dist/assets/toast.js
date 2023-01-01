import{useCssVars as L,unref as e,useAttrs as M,ref as _,computed as x,watch as C,openBlock as r,createElementBlock as c,normalizeClass as b,createElementVNode as o,withDirectives as O,createVNode as q,Transition as B,withCtx as N,createCommentVNode as u,createTextVNode as T,toDisplayString as V,renderSlot as j,vShow as A,defineCustomElement as H}from"vue";(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const D=`#toast-wrapper{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;position:fixed;top:0;bottom:0;left:0;right:0;z-index:-9;display:flex;min-height:80vh}.infront{z-index:9999!important}.toast__open:after{position:absolute;top:0;left:0;right:0;bottom:0;background:transparent;content:"";transition:all 5s;opacity:1}.backdrop:after{background:rgba(0,0,0,.5)}.toast__open.hide{display:none;opacity:0}.toast{max-width:500px;min-width:150px;background-color:#fff;border-radius:.5em;box-shadow:5px 5px 12px #00000026;display:flex;flex-direction:column;padding:1em;z-index:999;font-family:var(--75a806c8);transition:.5s all ease;opacity:1;overflow:hidden;height:auto;margin:1em}.toast.hide{padding:.5em;opacity:0;height:3.5em;z-index:-1}.toast__title{display:flex;justify-content:space-between;align-items:center;font-weight:600;margin:-1rem;padding:.5rem;border-bottom:2px solid var(--4308342a)}#toast-title{display:flex;align-items:center;column-gap:.5rem;color:var(--4308342a)}.toast__close{color:var(--4308342a);cursor:pointer;transition:all 1.4s ease}.toast__close:hover svg{filter:brightness(.55)}.toast__content{display:flex;align-items:center;column-gap:.5em;text-align:left;padding-top:2em;word-break:break-all}.center{justify-content:center;align-items:center}.left-top{justify-content:flex-start;align-items:flex-start}.right-top{justify-content:flex-end;align-items:flex-start}.left-bottom{justify-content:flex-start;align-items:flex-end}.right-bottom{justify-content:flex-end;align-items:flex-end}.colorized{border:2px solid var(--4308342a)}.colorized .toast__title{background-color:var(--4308342a);border:2px solid var(--4308342a)}.colorized .toast__title span{background-color:var(--4308342a);color:#fff!important}.colorized .toast__title svg{fill:#fff}.wobble-enter-active{animation:wobbles .8s ease}.wobble-leave-active{transition:all 1s ease}@keyframes wobbles{0%{transform:translateY(-20px);opacity:0}50%{transform:translateY(0);opacity:.3}60%{transform:translate(8px);opacity:.3}70%{transform:translate(-8px);opacity:.7}80%{transform:translate(4px);opacity:.7}90%{transform:translate(-4px);opacity:1}to{transform:translate(0);opacity:1}}
`,E=(g,h)=>{const i=g.__vccOpts||g;for(const[n,t]of h)i[n]=t;return i},J={id:"toast-title"},Z={key:0},P={key:0,width:"24",height:"24",fill:"rgb(110, 181, 49)",class:"bi bi-check-square",viewBox:"0 0 16 16"},I=o("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"},null,-1),W=o("path",{d:"M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"},null,-1),Y=[I,W],F={key:1,width:"24",height:"24",fill:"rgb(195, 27, 25)",class:"bi bi-exclamation-square",viewBox:"0 0 16 16"},K=o("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"},null,-1),R=o("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"},null,-1),U=[K,R],$={key:2,width:"24",height:"24",fill:"rgb(13, 43, 237)",class:"bi bi-info-square",viewBox:"0 0 16 16"},G=o("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"},null,-1),Q=o("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"},null,-1),X=[G,Q],tt=o("svg",{width:"32",height:"32",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16"},[o("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1),et=[tt],ot={class:"toast__content"},st={key:0},at={key:0,width:"48",height:"48",fill:"rgb(195, 27, 25)",class:"bi bi-exclamation-lg",viewBox:"0 0 16 16"},it=o("path",{d:"M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"},null,-1),nt=[it],lt={key:1,width:"48",height:"48",fill:"rgb(110, 181, 49)",class:"bi bi-check-lg",viewBox:"0 0 16 16"},rt=o("path",{d:"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"},null,-1),ct=[rt],dt={key:2,width:"48",height:"48",fill:"rgb(13, 43, 237)",class:"bi bi-info-lg",viewBox:"0 0 16 16"},pt=o("path",{d:"m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"},null,-1),ut=[pt],ft=["innerHTML"],ht={__name:"Custom-Toast.ce",props:{isActive:{type:String,default:"false"},toastData:{type:String},toastStyle:{type:String}},emits:["close-toast"],setup(g,{emit:h}){const i=g;L(a=>({"75a806c8":e(p).font,"4308342a":e(w)}));const n=M(),t=["decoration","colorized","backdrop"],s=a=>{Object.keys(n).forEach(l=>{Object.keys(a).includes(l)&&(t.includes(a[l])?a[l]=n[l]===!0:a[l]=n[l])})},d=_({title:"set custom title",message:`<h3>custom-toast - Usage</h3>
<h5>In HTML header:</h5>
<p><code>&lt;script type="module" crossorigin src="/toast.js"&gt;&lt;/script&gt;</code></p>
<p><code>&lt;link rel="modulepreload" href="/vue.js" /&gt;</code></p>
<h5>Place component with or without attributes</h5>
<h5>(named slot can be passed):</h5>
<pre>
  <code>
    &lt;custom-toast is-active toast-data toast-style&gt;
    &lt;span slot=&quot;additionalData&quot;&gt;
    &lt;h3&gt;additional info in slot&lt;/h3&gt;
    &lt;p&gt;additional message&lt;/p&gt;
    &lt;/span&gt;
    &lt;/custom-toast&gt;
  </code>
</pre>
<h5>Reference component:</h5>
<h5>
  <code>const toast = document.querySelector('custom-toast')</code>
</h5>
<h5>Set <code>is-active</code> attribute to <code>true</code> to show
  toast:</h5>
<pre><code>const showToast = () =&gt; {
  toast.setAttribute(&#39;is-active&#39;, &#39;true&#39;)
}</code></pre>
<h5>Listen to event <code>close-toast</code>:</h5>
<pre><code>window.addEventListener(&#39;close-toast&#39;, toastClosed)
function toastClosed() {
  toast.setAttribute(&#39;is-active&#39;, &#39;false&#39;)
}</code></pre>
<h5>* Set component attribute <code>toast-data</code> as JSON
  object</h5>
<h5>with following properties:</h5>
<ul>
  <li><strong><em><code>title</code></em></strong> (String)</li>
  <li><strong><em><code>message</code></em></strong> (String - <em>can be used html</em>)</li>
  <li><strong><em><code>type</code></em></strong> (String - <em>info, success, error</em>)&gt;</li>
</ul>
<h6>example:</h6>
<pre>
  <code>
    const td = { title: &#39;some title&#39;, 
            message: &#39;some message&#39;, 
            type: &#39;info&#39; }
    document.querySelector(&#39;custom-toast&#39;)
      .setAttribute(&#39;toast-data&#39;, JSON.stringify(td))
  </code>
</pre>
<h5>* Styles can be set by setting attribute
  <code>toast-style</code></h5>
<h5>with following properties:</h5>
<ul>
  <li><strong><em><code>position</code></em></strong> (String - <em>center, left-top, right-top, left-bottom,
      right-bottom</em>)</li>
  <li><strong><em><code>decoration</code></em></strong> (Boolean)</li>
  <li><strong><em><code>backdrop</code></em></strong> (Boolean)</li>
  <li><strong><em><code>colorized</code></em></strong> (Boolean)</li>
  <li><strong><em><code>color</code></em></strong> (String - <em>any color</em>)</li>
  <li><strong><em><code>font</code></em></strong> (String - <em>any font-family</em>)</span></li>
</ul>
<h6>example:</h6>
<pre>
  <code>
    const ts = { position: &#39;center&#39;, 
            decoration: false, 
            colorized: false, 
            backdrop: false, 
            color: &quot;#ffffff&quot;, 
            font: &quot;&#39;Open Sans&#39;, sans-serif&quot; }
  </code>
  <code>
    document.querySelector(&#39;custom-toast&#39;)
        .setAttribute(&#39;toast-style&#39;, JSON.stringify(ts))
  </code>
</pre>
<style>
  h3, h4, h5, h6, p, pre, code, ul {
    margin: 0;
  }
</style>`,type:"info"}),v=x(()=>(i.toastData&&(d.value={...d.value,...JSON.parse(i.toastData)}),n&&s(d.value),d.value));let w=_(null),z=[{type:"error",val:"rgb(195, 27, 25)"},{type:"info",val:"rgb(13, 43, 237)"},{type:"success",val:"rgb(110, 181, 49)"}];const f=x(()=>{const a=z.find(l=>l.type===v.value.type);return w.value=a.val,a.type}),y=_({position:"center",decoration:!1,colorized:!1,backdrop:!1,color:"#ffb700",font:"'Open Sans', sans-serif"}),p=x(()=>(i.toastStyle&&(y.value={...y.value,...JSON.parse(i.toastStyle)}),n&&s(y.value),y.value)),m=_(!1);C(()=>i.isActive,(a,l)=>{m.value=a==="true"});const k=_(null),S=()=>{m.value=!1,k.value.dispatchEvent(new CustomEvent("close-toast",{bubbles:!0,composed:!0}))};return(a,l)=>(r(),c("div",{ref_key:"toastWrapper",ref:k,class:b([e(p).position,{infront:m.value}]),id:"toast-wrapper"},[o("div",{class:b(["toast__open",[{hide:!m.value},{backdrop:e(p).backdrop}]]),onClick:S},null,2),O(q(B,{name:"wobble",appear:""},{default:N(()=>[o("div",{id:"toast",class:b(["toast",[{hide:!m.value},{colorized:e(p).colorized}]])},[o("div",{class:b(["toast__title",e(f)])},[o("span",J,[!e(p).colorized&&!e(p).decoration?(r(),c("div",Z,[e(f)==="success"?(r(),c("svg",P,Y)):u("",!0),e(f)==="error"?(r(),c("svg",F,U)):u("",!0),e(f)==="info"?(r(),c("svg",$,X)):u("",!0)])):u("",!0),T(" "+V(e(v).title),1)]),o("span",{class:"toast__close",onClick:S},et)],2),o("div",ot,[e(p).decoration||e(p).colorized?(r(),c("span",st,[e(f)==="error"?(r(),c("svg",at,nt)):u("",!0),e(f)==="success"?(r(),c("svg",lt,ct)):u("",!0),e(f)==="info"?(r(),c("svg",dt,ut)):u("",!0)])):u("",!0),o("div",{id:"toast-msg",innerHTML:e(v).message},null,8,ft)]),j(a.$slots,"additionalData")],2)]),_:3},512),[[A,m.value]])],2))}},mt=E(ht,[["styles",[D]]]),gt=H(mt);customElements.define("custom-toast",gt);
