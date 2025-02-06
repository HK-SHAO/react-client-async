(()=>{"use strict";var e={1424:function(e,n,t){var r,s=t(5893),l=t(7294),c=t(745),i=t(5710),a=t(9442),o=t(4354),u=t(5046),d=t(9166);a.Z.registerLanguage("tsx",u.Z),a.Z.registerLanguage("bash",o.Z);let h=/language-(\w+)/,f={display:"contents"},x=Symbol("Siganl for Async Function Component");function m(e){let n,{$fc:t,$waiting:r,$fallback:c,...i}=e,a=t;(null==t?void 0:t.$$typeof)===Symbol.for("react.memo")&&(a=t.type,n=t.compare);let{state:o}=g((0,l.useCallback)((e,n)=>{let{signal:t}=n;return a({...e,[x]:t})},[a]),i,{sameArgs:n}),{pending:u,result:d,error:h}=o;if(u)return void 0===r?d:"function"!=typeof r?r:(0,s.jsx)(m,{$fc:r,state:o});if(h&&void 0!==c)return"function"!=typeof c?c:(0,s.jsx)(m,{$fc:c,$waiting:r,$fallback:c,state:o});if(h&&h!==j)throw h;return d}let p=(e,n)=>{if(e===n)return!0;if("object"!=typeof e||"object"!=typeof n||null===e||null===n)return!1;let t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(let r of t)if(e[r]!==n[r])return!1;return!0},b=Symbol("Aborted By Rerender"),j=Symbol("Aborted By Unmounted");function g(e,n){var t,r,s;let c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};c.autoLoad??(c.autoLoad=!0),c.sameArgs??(c.sameArgs=p);let[i,a]=(0,l.useState)(),[o,u]=(0,l.useState)(),[d,h]=(0,l.useState)(),f=(0,l.useRef)(null),x=(0,l.useRef)(e),m=(0,l.useRef)(n),g=(0,l.useRef)(null),[y,v]=(0,l.useState)(Symbol()),k=(0,l.useRef)(y);(0,l.useEffect)(()=>()=>{var e;return null===(e=f.current)||void 0===e?void 0:e.abort(j)},[]);let w={state:{pending:i,result:o,error:d},load:(0,l.useCallback)(()=>(v(()=>Symbol()),g.current=Promise.withResolvers(),g.current.promise),[]),stop:(0,l.useCallback)(e=>{var n;null===(n=f.current)||void 0===n||n.abort(e)},[])},N=x.current===e,S=null===(t=c.sameArgs)||void 0===t?void 0:t.call(c,m.current,n),A=k.current===y,C=void 0!==i||!c.autoLoad,O=null===(r=f.current)||void 0===r?void 0:r.signal.reason;if(N&&S&&A&&C&&O!==j)return w;x.current=e,m.current=n,k.current=y,a(!0);let R=new AbortController,E=R.signal;null===(s=f.current)||void 0===s||s.abort(b),f.current=R;let $=g.current;return Promise.resolve(e(n,{signal:E})).then(e=>{h(void 0),u(()=>e),null==$||$.resolve(e)}).catch(e=>{h(()=>e),null==$||$.reject(e)}).finally(()=>{var e;(null===(e=f.current)||void 0===e?void 0:e.signal)===E&&a(!1)}),w}function y(e,n){let{promise:t,resolve:r,reject:s}=Promise.withResolvers(),l=setTimeout(r,e);return n.addEventListener("abort",()=>{clearTimeout(l),s(n.reason)}),t}let v=(r=async e=>{let{[x]:n,n:t,seed:r}=e;await y(99,n);let l=360*(.5+(0xffffffff&0x9e3779b1*r%0x100000000)/0xffffffff);return t<=0?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{color:`oklch(0.623 0.214 ${l+0})`},children:t})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{style:{color:`oklch(0.623 0.214 ${l+t})`},children:t}),(0,s.jsx)(v,{n:t-1,seed:r}),(0,s.jsx)("span",{style:{color:`oklch(0.623 0.214 ${l-t})`},children:t})]})},e=>(0,s.jsx)(m,{$fc:r,...e}));function k(){let[e,n]=(0,l.useState)(0),[t,r]=(0,l.useState)(!1),c=(0,l.useCallback)(()=>n(e=>e+1),[]),i=(0,l.useCallback)(()=>{requestAnimationFrame(()=>r(!1)),r(!0)},[]);return(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center gap-4",children:[(0,s.jsxs)("div",{className:"flex gap-4 mb-2 w-full",children:[(0,s.jsx)("button",{type:"button",className:"flex flex-1 justify-center items-center btn btn-blue",onClick:c,children:(0,s.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"0.15em",strokeLinecap:"round",strokeLinejoin:"round",className:"m-1",children:[(0,s.jsx)("title",{children:"reload"}),(0,s.jsx)("rect",{width:"16",height:"6",x:"2",y:"2",rx:"2"}),(0,s.jsx)("path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}),(0,s.jsx)("rect",{width:"4",height:"6",x:"8",y:"16",rx:"1"})]})}),(0,s.jsx)("button",{type:"button",className:"flex flex-1 justify-center items-center btn btn-red",onClick:i,children:(0,s.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"0.15em",strokeLinecap:"round",strokeLinejoin:"round",className:"m-1",children:[(0,s.jsx)("title",{children:"refresh"}),(0,s.jsx)("path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),(0,s.jsx)("path",{d:"M3 3v5h5"}),(0,s.jsx)("path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}),(0,s.jsx)("path",{d:"M16 16h5v5"})]})})]}),(0,s.jsx)("div",{className:"place-items-center grid grid-cols-[repeat(auto-fill,minmax(1.75em,1fr))] inner-bg-flash p-3 rounded-md [&_*]:rounded-full w-full h-fit prose-pre",style:{textShadow:"rgba(0, 0, 0, 0.1) 0px 1px"},children:t?null:(0,s.jsx)(v,{n:52,seed:e})})]})}v.displayName="Rec";var w=t(7570);let N={...w.i6,BASE_BACKGROUND_COLOR:"transparent",BASE_FONT_SIZE:"var(--text-sm)",ARROW_FONT_SIZE:"var(--text-sm)",TREENODE_FONT_SIZE:"var(--text-sm)"},S=Symbol("Aborted By Stop"),A=async(e,n)=>{let{cntRef:t}=e,{signal:r}=n;return await y(1e3,r),`${++t.current} times`};function C(){let e=g(A,{cntRef:(0,l.useRef)(0)}),n=(0,l.useCallback)(async()=>{i.Am.promise(e.load,{pending:"Promise is pending",success:{render:e=>{let{data:n}=e;return`Result: ${String(n)}`}},error:{render:e=>{let{data:n}=e;return`Error: ${String(n)}`}}})},[e.load]),t=(0,l.useCallback)(()=>e.stop(S),[e.stop]),{pending:r}=e.state;return(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2 py-4 p-2 rounded-md prose-pre",style:{textShadow:"rgba(0, 0, 0, 0.3) 0px 1px"},children:[(0,s.jsx)(w.vu,{data:e,expandLevel:3,theme:N}),(0,s.jsx)("div",{className:"bg-gray-500/10 m-2 py-[0.5px] w-full"}),(0,s.jsxs)("div",{className:"flex gap-4 w-[24em]",children:[(0,s.jsx)("button",{type:"button",className:"flex-1 text-base btn btn-blue",onClick:n,disabled:r,children:r?"Loading...":"Load"}),(0,s.jsx)("button",{type:"button",className:"flex-1 text-base btn btn-red",onClick:t,disabled:!r,children:"Stop"})]})]})}let O=(0,l.memo)(async e=>{let{[x]:n,count:t,addCount:r}=e;if(await y(1e3,n),t%2!=0)throw Error("Error when count is odd");return(0,s.jsxs)("button",{type:"button",className:"flex justify-center items-center w-full btn btn-blue",onClick:r,children:["Async component has loaded",(0,s.jsx)("span",{className:"inline bg-black/20 ml-2 px-4 py-0.5 rounded-full text-sm",children:t})]})});function R(){let[e,n]=(0,l.useState)(0),t=(0,l.useCallback)(()=>{n(e=>e+1)},[]),r=(0,l.useCallback)(n=>{let{state:r}=n;return(0,s.jsxs)("button",{type:"button",className:"flex justify-center items-center w-full btn btn-red",onClick:t,children:[r.error instanceof Error?r.error.message:"Unknown Error",(0,s.jsx)("span",{className:"inline bg-black/20 ml-2 px-4 py-0.5 rounded-full text-sm",children:e})]})},[e,t]),c=(0,l.useMemo)(()=>(0,s.jsxs)("button",{type:"button",className:"flex justify-center items-center w-full btn btn-gray",onClick:t,children:["Loading...",(0,s.jsx)("span",{className:"inline bg-black/20 ml-2 px-4 py-0.5 rounded-full text-sm",children:e})]}),[e,t]);return(0,s.jsx)("div",{className:"flex flex-col items-center gap-2",children:(0,s.jsx)(m,{$fc:O,$waiting:c,$fallback:r,count:e,addCount:t})})}function E(){var e,n;let{state:{result:r="unknown",pending:c,error:i},load:a,stop:o}=(e=async e=>{let{signal:n}=e,[r]=await Promise.all([t.e("83").then(t.bind(t,8628)).then(e=>e.default),y(400,n)]);return r},n=[],g((0,l.useMemo)(()=>(n,t)=>e(t),n),null)),u=(0,l.useCallback)(()=>{c?o():a()},[c,o,a]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("button",{type:"button",className:"btn",disabled:c,onClick:u,children:c?"loading":i?"latest":`v${r}`})})}function $(){let e=new Date().getUTCFullYear(),n=2025===e?"":`-${e}`;return(0,s.jsx)("div",{className:"mb-6 p-0 w-full text-center",children:(0,s.jsxs)("p",{className:"m-0 p-0 font-bold text-base/snug text-gray-500",children:["Copyright \xa9 2025",n," React Async for Client",(0,s.jsx)("br",{}),"Built by"," ",(0,s.jsx)("a",{href:"https://github.com/HK-SHAO",target:"_blank",rel:"noreferrer",children:"@HK-SHAO"})," ","MIT License"]})})}let L="React Async for Client";function _(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"relative w-full min-h-[6rem] font-bold scale-120 hover:scale-150 transition-transform",children:[(0,s.jsx)("div",{className:"absolute flex justify-center items-center bg-clip-text blur-2xl py-4 w-full font-stretch-50% text-7xl text-center text-transparent pointer-events-none select-none gradient-bg",children:L}),(0,s.jsx)("div",{className:"absolute flex justify-center items-center bg-clip-text py-4 w-full font-stretch-50% text-7xl text-center text-transparent select-auto gradient-bg",children:L})]})})}function I(e){let{className:n,children:t}=e;return(0,s.jsx)("div",{className:`bg-gray-100 dark:bg-gray-100/10 rounded-lg [&>h2]:mt-0 p-8 ${n??""}`,children:t})}function F(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"w-full flex justify-center -mb-6 mt-10",children:(0,s.jsx)("div",{className:"w-fit text-5xl relative hover:rotate-180 transition-transform select-none aspect-square grid place-items-center",children:"⚛️⏳"})}),"\n",(0,s.jsx)(n.h1,{children:(0,s.jsx)(_,{})}),"\n",(0,s.jsx)("div",{className:"w-full text-center -mt-4 mb-10 p-0",children:(0,s.jsx)("p",{className:"m-0 p-0 text-base/snug text-gray-500 font-bold",children:"Easy to use async function in React components! \uD83D\uDE80"})}),"\n",(0,s.jsx)("div",{className:"w-full flex justify-center -mt-4",children:(0,s.jsx)("div",{className:"place-items-center grid bg-pink-600 dark:bg-pink-800 rounded-md w-fit font-bold font-stretch-130% text-sm text-white hover:shadow-lg transition-shadow dark:hover:bg-pink-700 hover:bg-pink-500",children:(0,s.jsx)(E,{})})}),"\n",(0,s.jsxs)(I,{className:"pb-4 mt-10",children:[(0,s.jsx)(n.h2,{children:(0,s.jsx)("a",{href:"#Intro",id:"Intro",children:"\uD83D\uDC4B Introduction"})}),(0,s.jsxs)("p",{align:"center",children:[(0,s.jsx)("a",{href:"#",type:"button",onClick:()=>{i.Am.info("Here is the demo page! \uD83C\uDF89")},children:"\uD83C\uDFAC Demo"}),(0,s.jsx)("span",{children:" \xb7 "}),(0,s.jsx)("a",{href:"https://github.com/HK-SHAO/react-client-async",target:"_blank",rel:"noreferrer",children:"\uD83C\uDF1F GitHub"}),(0,s.jsx)("span",{children:" \xb7 "}),(0,s.jsx)("a",{href:"https://www.npmjs.com/package/react-client-async",target:"_blank",rel:"noreferrer",children:"\uD83D\uDCE6 Package"})]}),(0,s.jsxs)(n.p,{children:["This package helps you use async function ",(0,s.jsx)(n.strong,{children:(0,s.jsx)("u",{children:"without"})})," the need to migrate to ",(0,s.jsx)(n.code,{children:"⚛️ React 19"})," and server-side rendering!"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"✨ Supports utility hooks to create and render async tasks."}),"\n",(0,s.jsxs)(n.li,{children:["✨ Supports ",(0,s.jsx)(n.code,{children:"AbortSignal"})," and automatic abort on re-render."]}),"\n"]}),(0,s.jsx)(n.h2,{children:(0,s.jsx)("a",{href:"#Install",id:"Install",children:"\uD83D\uDE80 Install"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i react-client-async\n"})})]}),"\n",(0,s.jsxs)(I,{className:"mt-10 pb-8",children:[(0,s.jsx)(n.h2,{children:(0,s.jsxs)("a",{href:"#useAsync",id:"useAsync",children:["✅ ",(0,s.jsx)(n.code,{children:"useAsync"})," Hook"]})}),(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"useAsync"})," hook to create a task."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"console.log(useAsync(fn, args, options));\n"})}),(0,s.jsx)(C,{})]}),"\n",(0,s.jsxs)(I,{className:"mt-10 pb-8",children:[(0,s.jsx)(n.h2,{children:(0,s.jsxs)("a",{href:"#Async",id:"Async",children:["✅ ",(0,s.jsx)(n.code,{children:"Async"})," Component"]})}),(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"Async"})," to render an async component."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Async\n  $fc={fc} // may be an async function component\n  $waiting={waiting} // waiting component\n  $fallback={fallback} // fallback component\n  {...props} // props for the function component\n/>\n"})}),(0,s.jsx)(R,{})]}),"\n",(0,s.jsxs)(I,{className:"mt-10 pb-8",children:[(0,s.jsx)(n.h2,{children:(0,s.jsxs)("a",{href:"#RecursiveDemo",id:"RecursiveDemo",children:["\uD83C\uDFAC ",(0,s.jsx)(n.code,{children:"Demo"})," of Recursive Async Component"]})}),(0,s.jsxs)(n.p,{children:["Easy to ",(0,s.jsx)(n.code,{children:"wrap"})," a recursive async component and memoize it."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const Rec: FC<{ n: number }> = wrap(\n  async ({ [$signal]: signal, n }) =>\n    // break the recursion\n    (n <= 0) ? 0 : (\n    // delay and recursion\n      <>\n        {await delay(99, signal)}\n        {n} <Rec n={n - 1} /> {n}\n      </>\n    )\n);\n"})}),(0,s.jsx)(k,{})]}),"\n",(0,s.jsxs)(I,{className:"mt-10 pb-2 mb-10",children:[(0,s.jsx)(n.h2,{children:(0,s.jsx)("a",{href:"#Next",id:"Next",children:"⏳ What is Next?"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["⏳ ",(0,s.jsx)(n.code,{children:"useAsyncIterable"})," hook"]}),"\n",(0,s.jsxs)(n.li,{children:["⏳ ",(0,s.jsx)(n.code,{children:"AsyncIterable"})," component"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"async function* IterableComponent() {\n  yield* OtherIterableComponent();\n  yield  await component1();\n  yield  await component2();\n  yield  <div>...</div>;\n}\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uD83C\uDF1F Star this repo if you like it! \uD83E\uDD29\uD83E\uDD29\uD83E\uDD29"}),"\n",(0,s.jsxs)(n.li,{children:["\uD83D\uDC49 ",(0,s.jsx)(n.a,{href:"https://github.com/HK-SHAO/react-client-async",children:"github.com/hk-shao/react-client-async"})]}),"\n"]}),(0,s.jsx)(n.p,{children:"Looking forward to your feedback or contribution! \uD83D\uDE80\uD83D\uDE80\uD83D\uDE80"})]}),"\n",(0,s.jsx)($,{})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(F,{...e})}):F(e)}let B={code:function(e){let{className:n,children:t,...r}=e,l=n?h.exec(n):null;return l?(0,s.jsx)(a.Z,{language:l[1],customStyle:f,style:d.Z,...r,children:t}):(0,s.jsx)("code",{className:n,...r,children:t})}};function M(){if("undefined"==typeof window)return;let e=window.location.hash.substring(1),n=document.getElementById(e);null==n||n.scrollIntoView({behavior:"smooth"})}function P(){return(0,l.useEffect)(M,[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"flex justify-center items-center",children:(0,s.jsx)("div",{className:"p-4 dark:prose-invert prose",children:(0,s.jsx)(T,{components:B})})})})}let H=document.getElementById("root");H&&c.createRoot(H).render((0,s.jsx)(l.StrictMode,{children:(0,s.jsx)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Ix,{}),(0,s.jsx)(P,{})]}),{})}))}},n={};function t(r){var s=n[r];if(void 0!==s)return s.exports;var l=n[r]={exports:{}};return e[r](l,l.exports,t),l.exports}t.m=e,t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce(function(n,r){return t.f[r](e,n),n},[]))},t.u=function(e){return"static/js/async/"+e+".71b86e15.js"},t.miniCssF=function(e){return""+e+".css"},t.h=function(){return"3070d2baaefd12d5"},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},(()=>{var e={},n="react-client-async:";t.l=function(r,s,l,c){if(e[r]){e[r].push(s);return}if(void 0!==l)for(var i,a,o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var d=o[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+l){i=d;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+l),i.src=r),e[r]=[s];var h=function(n,t){i.onerror=i.onload=null,clearTimeout(f);var s=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach(function(e){return e(t)}),n)return n(t)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),a&&document.head.appendChild(i)}})(),t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];t.O=function(n,r,s,l){if(r){l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[r,s,l];return}for(var i=1/0,c=0;c<e.length;c++){for(var r=e[c][0],s=e[c][1],l=e[c][2],a=!0,o=0;o<r.length;o++)(!1&l||i>=l)&&Object.keys(t.O).every(function(e){return t.O[e](r[o])})?r.splice(o--,1):(a=!1,l<i&&(i=l));if(a){e.splice(c--,1);var u=s();void 0!==u&&(n=u)}}return n}})(),t.p="./",t.rv=function(){return"1.2.2"},(()=>{var e={980:0};t.f.j=function(n,r){var s=t.o(e,n)?e[n]:void 0;if(0!==s){if(s)r.push(s[2]);else{var l=new Promise(function(t,r){s=e[n]=[t,r]});r.push(s[2]=l);var c=t.p+t.u(n),i=Error();t.l(c,function(r){if(t.o(e,n)&&(0!==(s=e[n])&&(e[n]=void 0),s)){var l=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+l+": "+c+")",i.name="ChunkLoadError",i.type=l,i.request=c,s[1](i)}},"chunk-"+n,n)}}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var s,l,c=r[0],i=r[1],a=r[2],o=0;if(c.some(function(n){return 0!==e[n]})){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(a)var u=a(t)}for(n&&n(r);o<c.length;o++)l=c[o],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(u)},r=self.webpackChunkreact_client_async=self.webpackChunkreact_client_async||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})(),t.ruid="bundler=rspack@1.2.2";var r=t.O(void 0,["361","471"],function(){return t(1424)});r=t.O(r)})();