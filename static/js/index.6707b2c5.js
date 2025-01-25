(()=>{"use strict";var e={2885:function(e,n,t){var r,s=t(5893),l=t(7294),c=t(745),a=t(5710),i=t(9442),o=t(4354),u=t(5046),d=t(9166);i.Z.registerLanguage("tsx",u.Z),i.Z.registerLanguage("bash",o.Z);let x=/language-(\w+)/,h={display:"contents"},m=Symbol("Siganl for Async Function Component");function f(e){let n,{$fc:t,$waiting:r,$fallback:c,...a}=e,i=t;(null==t?void 0:t.$$typeof)===Symbol.for("react.memo")&&(i=t.type,n=t.compare);let{state:o}=v((0,l.useCallback)((e,n)=>{let{signal:t}=n;return i({...e,[m]:t})},[i]),a,{autoLoad:!0,sampeArgs:n}),{pending:u,result:d,error:x}=o;if(u)return"function"!=typeof r?r:(0,s.jsx)(f,{$fc:r,state:o});if(x&&c)return"function"!=typeof c?c:(0,s.jsx)(f,{$fc:c,$waiting:r,$fallback:c,state:o});if(x)throw x;return d}Object.freeze({});let{MAX_SAFE_INTEGER:p,MIN_SAFE_INTEGER:j}=Number,b=(e,n)=>{if(e===n)return!0;if("object"!=typeof e||"object"!=typeof n||null===e||null===n)return!1;let t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(let r of t)if(e[r]!==n[r])return!1;return!0},g=Symbol("Aborted By Rerender"),y=Symbol("Aborted By Stop");function v(e,n){var t,r;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};s.autoLoad??(s.autoLoad=!1),s.sampeArgs??(s.sampeArgs=b);let[c,a]=(0,l.useState)(),[i,o]=(0,l.useState)(),[u,d]=(0,l.useState)(),x=(0,l.useRef)(null),h=(0,l.useRef)(e),m=(0,l.useRef)(n),f=(0,l.useRef)(null),[j,v]=(0,l.useState)(0),k=(0,l.useRef)(j),N=(0,l.useCallback)(e=>(null==e||e.addEventListener("abort",()=>{let n=x.current;null==n||n.abort(e.reason)}),v(e=>(e+1)%p),f.current=Promise.withResolvers(),f.current.promise),[]),w=(0,l.useCallback)(()=>{let e=x.current;null==e||e.abort(y)},[]),A=h.current===e,S=null===(t=s.sampeArgs)||void 0===t?void 0:t.call(s,m.current,n),C=k.current===j,R=void 0!==c||!s.autoLoad,O={state:{pending:c,result:i,error:u},load:N,stop:w};if(A&&S&&C&&R)return O;h.current=e,m.current=n,k.current=j,a(!0);let $=new AbortController,E=$.signal,_=Promise.resolve(e(n,{signal:E}));null===(r=x.current)||void 0===r||r.abort(g),x.current=$;let I=f.current;return _.then(e=>{d(void 0),o(()=>e),null==I||I.resolve(e)}).catch(e=>{d(()=>e),null==I||I.reject(e)}).finally(()=>{var e;(null===(e=x.current)||void 0===e?void 0:e.signal)===E&&a(!1)}),O}function k(e,n){let{promise:t,resolve:r,reject:s}=Promise.withResolvers(),l=setTimeout(r,e);return n.addEventListener("abort",()=>{clearTimeout(l),s(n.reason)}),t}let N=(0,l.memo)(async e=>{let{count:n,addCount:t,[m]:r}=e;if(await k(1e3,r),.5>Math.random())throw Error("Random Error");return(0,s.jsxs)("button",{type:"button",className:"flex justify-center items-center ml-2 btn btn-blue",onClick:t,children:["Async Component",(0,s.jsx)("span",{className:"inline bg-black/30 ml-2 px-4 py-0.5 rounded-full text-sm",children:n})]})});function w(){let[e,n]=(0,l.useState)(0),t=(0,l.useCallback)(()=>{n(e=>e+1)},[]),r=(0,l.useCallback)(n=>{let{state:r}=n;return(0,s.jsxs)("button",{type:"button",className:"flex justify-center items-center ml-2 btn btn-red",onClick:t,children:[r.error instanceof Error?r.error.message:"Unknown Error",(0,s.jsx)("span",{className:"inline bg-black/30 ml-2 px-4 py-0.5 rounded-full text-sm",children:e})]})},[e,t]),c=(0,l.useMemo)(()=>(0,s.jsxs)("button",{type:"button",className:"flex justify-center items-center ml-2 btn btn-gray",onClick:t,children:["Loading...",(0,s.jsx)("span",{className:"inline bg-black/30 ml-2 px-4 py-0.5 rounded-full text-sm",children:e})]}),[e,t]);return(0,s.jsx)("div",{className:"flex flex-col items-center gap-2",children:(0,s.jsx)(f,{$fc:N,$waiting:c,$fallback:r,count:e,addCount:t})})}let A=(r=async e=>{let{[m]:n,n:t,seed:r}=e;return t<=0?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{children:t})}):(0,s.jsxs)(s.Fragment,{children:[await k(99,n),(0,s.jsx)("span",{children:t}),(0,s.jsx)(A,{n:t-1,seed:r}),(0,s.jsx)("span",{children:t})]})},(0,l.memo)(e=>(0,s.jsx)(f,{$fc:r,...e})));function S(){let[e,n]=(0,l.useState)(0),t=(0,l.useCallback)(()=>n(e=>e+1),[]);return(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center gap-4",children:[(0,s.jsx)("div",{className:"w-[42em] text-xs [&>.grid]:place-items-center [&_*]:rounded-full",children:(0,s.jsx)("div",{className:"grid grid-cols-[repeat(auto-fill,minmax(2em,1fr))] min-h-28 inner-bg-text-flash",children:(0,s.jsx)(f,{$fc:A,n:52,seed:e})})}),(0,s.jsxs)("button",{type:"button",className:"flex justify-center items-center btn btn-blue",onClick:t,children:["\uD83D\uDC46 Reload",(0,s.jsx)("span",{className:"inline bg-black/30 ml-2 px-4 py-0.5 rounded-full text-sm",children:e})]})]})}var C=t(7570);let R={...C.iU,BASE_BACKGROUND_COLOR:"transparent",BASE_FONT_SIZE:"var(--text-sm)",ARROW_FONT_SIZE:"var(--text-sm)",TREENODE_FONT_SIZE:"var(--text-sm)"},O=async(e,n)=>{let{cntRef:t}=e,{signal:r}=n;return await k(1e3,r),`${++t.current} times`};function $(){let e=v(O,{cntRef:(0,l.useRef)(0)}),n=(0,l.useCallback)(async()=>{a.Am.promise(e.load(),{pending:"Promise is pending",success:{render(e){let{data:n}=e;return`Result: ${String(n)}`}},error:{render(e){let{data:n}=e;return`Error: ${String(n)}`}}})},[e.load]),t=(0,l.useCallback)(()=>e.stop(),[e.stop]),{pending:r}=e.state;return(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2 bg-gray-200/10 py-4 p-2 rounded-lg",children:[(0,s.jsx)("div",{className:"dark:invert",children:(0,s.jsx)(C.vu,{data:e,expandLevel:3,theme:R})}),(0,s.jsx)("div",{className:"bg-gray-500/10 m-2 py-[0.5px] w-full"}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)("button",{type:"button",className:"btn btn-blue",onClick:n,disabled:r,children:r?"Loading...":"Load"}),(0,s.jsx)("button",{type:"button",className:"btn btn-red",onClick:t,disabled:!r,children:"Stop"})]})]})}let E="React Async for Client";function _(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"box-content absolute flex bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 blur-xl mx-auto py-4 border w-fit font-extrabold text-5xl text-center text-transparent pointer-events-none select-none",children:E}),(0,s.jsx)("span",{className:"relative top-0 flex justify-center items-center bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 py-4 w-fit h-auto font-extrabold text-5xl text-center text-transparent select-auto",children:E})]})}function I(e){let{className:n,children:t}=e;return(0,s.jsx)("div",{className:`bg-gray-100 dark:bg-gray-100/10 rounded-lg [&>h2]:mt-0 p-8 ${n??""}`,children:t})}function L(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"w-full text-center text-5xl mt-10",children:"⚛️⏳"}),"\n",(0,s.jsx)(n.h1,{children:(0,s.jsx)(_,{})}),"\n",(0,s.jsxs)(I,{className:"pb-4 mt-10",children:[(0,s.jsx)(n.h2,{children:(0,s.jsx)("a",{href:"#Intro",id:"Intro",children:"\uD83D\uDC4B Introduction"})}),(0,s.jsxs)("p",{align:"center",children:[(0,s.jsx)("a",{href:"#",type:"button",onClick:()=>{a.Am.info("Here is the demo page! \uD83C\uDF89")},children:"\uD83C\uDFAC Demo"}),(0,s.jsx)("span",{children:" \xb7 "}),(0,s.jsx)("a",{href:"https://github.com/HK-SHAO/react-client-async",target:"_blank",children:"\uD83C\uDF1F Source"}),(0,s.jsx)("span",{children:" \xb7 "}),(0,s.jsx)("a",{href:"https://www.npmjs.com/package/react-client-async",target:"_blank",children:"\uD83D\uDE80 Package"})]}),(0,s.jsxs)(n.p,{children:["This package helps you use async function ",(0,s.jsx)(n.strong,{children:(0,s.jsx)("u",{children:"without"})})," the need to migrate to ",(0,s.jsx)(n.code,{children:"⚛️ React 19"})," and server-side rendering!"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["✨ Supports ",(0,s.jsx)(n.code,{children:"AbortSignal"})," and automatic abort on re-render."]}),"\n",(0,s.jsx)(n.li,{children:"✨ Supports utility hooks to create and render asynchronous tasks."}),"\n"]}),(0,s.jsx)(n.h2,{children:(0,s.jsx)("a",{href:"#Install",id:"Install",children:"\uD83D\uDE80 Install"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i react-client-async\n"})})]}),"\n",(0,s.jsxs)(I,{className:"mt-10 pb-4",children:[(0,s.jsx)(n.h2,{children:(0,s.jsxs)("a",{href:"#useAsync",id:"useAsync",children:["✅ ",(0,s.jsx)(n.code,{children:"useAsync"})," Hook"]})}),(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"useAsync"})," hook to create a task."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"console.log(useAsync(fn, args, options));\n"})}),(0,s.jsx)($,{})]}),"\n",(0,s.jsxs)(I,{className:"mt-10 pb-8",children:[(0,s.jsx)(n.h2,{children:(0,s.jsxs)("a",{href:"#Async",id:"Async",children:["✅ ",(0,s.jsx)(n.code,{children:"Async"})," Component"]})}),(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"Async"})," to render an async component."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Async\n  $fc={fc} // may be an async function component\n  $waiting={waiting} // waiting component\n  $fallback={fallback} // fallback component\n  {...props} // props for the function component\n/>\n"})}),(0,s.jsx)(w,{})]}),"\n",(0,s.jsxs)(I,{className:"mt-10 pb-8",children:[(0,s.jsx)(n.h2,{children:(0,s.jsxs)("a",{href:"#RecursiveDemo",id:"RecursiveDemo",children:["\uD83C\uDFAC ",(0,s.jsx)(n.code,{children:"Demo"})," of Recursive Async Component"]})}),(0,s.jsxs)(n.p,{children:["Easy to ",(0,s.jsx)(n.code,{children:"create"})," an memoized async component with recursion."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const Rec = create<{ n: number }>(\n  async ({ [$signal]: signal, n }) =>\n    // break the recursion\n    (n <= 0) ? 0 : (\n    // delay and recursion\n      <>\n        {await delay(99, signal)}\n        {n} <Rec n={n - 1} /> {n}\n      </>\n    )\n);\n"})}),(0,s.jsx)(S,{})]}),"\n",(0,s.jsxs)(I,{className:"mt-10 pb-2 mb-10",children:[(0,s.jsx)(n.h2,{children:(0,s.jsx)("a",{href:"#Next",id:"Next",children:"⏳ What is Next?"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["⏳ ",(0,s.jsx)(n.code,{children:"useAsyncIterable"})," hook"]}),"\n",(0,s.jsxs)(n.li,{children:["⏳ ",(0,s.jsx)(n.code,{children:"AsyncIterable"})," component"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"async function* IterableComponent() {\n  yield* OtherIterableComponent();\n  yield  await component1();\n  yield  await component2();\n  yield  <div>...</div>;\n}\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uD83C\uDF1F Star this repo if you like it! \uD83E\uDD29\uD83E\uDD29\uD83E\uDD29"}),"\n",(0,s.jsxs)(n.li,{children:["\uD83D\uDC49 ",(0,s.jsx)(n.a,{href:"https://github.com/HK-SHAO/react-client-async",children:"github.com/hk-shao/react-client-async"})]}),"\n"]}),(0,s.jsx)(n.p,{children:"Looking forward to your feedback or contribution! \uD83D\uDE80\uD83D\uDE80\uD83D\uDE80"})]})]})}function F(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(L,{...e})}):L(e)}let D={code:function(e){let{className:n,children:t,...r}=e,l=n?x.exec(n):null;return l?(0,s.jsx)(i.Z,{language:l[1],customStyle:h,style:d.Z,...r,children:t}):(0,s.jsx)("code",{className:n,...r,children:t})}};function T(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"flex justify-center items-center",children:(0,s.jsx)("div",{className:"p-4 dark:prose-invert prose",children:(0,s.jsx)(F,{components:D})})})})}let Z=document.getElementById("root");Z&&c.createRoot(Z).render((0,s.jsx)(l.StrictMode,{children:(0,s.jsx)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Ix,{}),(0,s.jsx)(T,{})]}),{})}))}},n={};function t(r){var s=n[r];if(void 0!==s)return s.exports;var l=n[r]={exports:{}};return e[r](l,l.exports,t),l.exports}t.m=e,t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},(()=>{var e=[];t.O=function(n,r,s,l){if(r){l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[r,s,l];return}for(var a=1/0,c=0;c<e.length;c++){for(var r=e[c][0],s=e[c][1],l=e[c][2],i=!0,o=0;o<r.length;o++)(!1&l||a>=l)&&Object.keys(t.O).every(function(e){return t.O[e](r[o])})?r.splice(o--,1):(i=!1,l<a&&(a=l));if(i){e.splice(c--,1);var u=s();void 0!==u&&(n=u)}}return n}})(),t.rv=function(){return"1.2.2"},(()=>{var e={980:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var s,l,c=r[0],a=r[1],i=r[2],o=0;if(c.some(function(n){return 0!==e[n]})){for(s in a)t.o(a,s)&&(t.m[s]=a[s]);if(i)var u=i(t)}for(n&&n(r);o<c.length;o++)l=c[o],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(u)},r=self.webpackChunkreact_client_async=self.webpackChunkreact_client_async||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})(),t.ruid="bundler=rspack@1.2.2";var r=t.O(void 0,["361","471"],function(){return t(2885)});r=t.O(r)})();