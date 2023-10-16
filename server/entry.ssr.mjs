import{j as k,_ as ke,a as je,F as O,s as xe,c as Q,i as C,b as x,d as me,e as Se,u as W,f as H,g as S,S as Ee,h as Ie,k as P,l as Ce,m as B,n as I,o as Ae,p as Ne,q as Le,r as pe,t as A,v as Re,w as fe,x as De,y as le,z as Te,A as J}from"./assets/@qwik-city-plan-12f0cb0d.mjs";/**
 * @license
 * @builder.io/qwik/server 1.2.13
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var ze=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});function Pe(t,e){const n=e==null?void 0:e.mapper,o=t.symbolMapper?t.symbolMapper:r=>{var c;if(n){const i=K(r),a=n[i];if(!a){if((c=globalThis.__qwik_reg_symbols)==null?void 0:c.has(i))return[r,"_"];console.error("Cannot resolve symbol",r,"in",n)}return a}};return{isServer:!0,async importSymbol(r,c,i){var q;const a=K(i),d=(q=globalThis.__qwik_reg_symbols)==null?void 0:q.get(a);if(d)return d;let u=String(c);u.endsWith(".js")||(u+=".js");const p=ze(u);if(!(i in p))throw new Error(`Q-ERROR: missing symbol '${i}' in module '${u}'.`);return p[i]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:r=>new Promise(c=>{setTimeout(()=>{c(r())})}),chunkForSymbol(r){return o(r,n)}}}async function Fe(t,e){const n=Pe(t,e);xe(n)}var K=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t};function U(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function ye(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var Oe=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,Qe=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,$e=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,Me=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function Be(t={}){return Array.isArray(t.events)&&t.events.length>0?(t.debug?Me:$e).replace("window.qEvents",JSON.stringify(t.events)):t.debug?Qe:Oe}function Je(t,e,n){if(!n)return[];const o=e.prefetchStrategy,s=ye(e);if(o!==null){if(!o||!o.symbolsToPrefetch||o.symbolsToPrefetch==="auto")return Ue(t,n,s);if(typeof o.symbolsToPrefetch=="function")try{return o.symbolsToPrefetch({manifest:n.manifest})}catch(r){console.error("getPrefetchUrls, symbolsToPrefetch()",r)}}return[]}function Ue(t,e,n){const o=[],s=t==null?void 0:t.qrls,{mapper:r,manifest:c}=e,i=new Map;if(Array.isArray(s))for(const a of s){const d=a.getHash(),u=r[d];u&&be(c,i,o,n,u[1])}return o}function be(t,e,n,o,s){const r=o+s;let c=e.get(r);if(!c){c={url:r,imports:[]},e.set(r,c);const i=t.bundles[s];if(i&&Array.isArray(i.imports))for(const a of i.imports)be(t,e,c.imports,o,a)}n.push(c)}function Ke(t){if(t!=null&&t.mapping!=null&&typeof t.mapping=="object"&&t.symbols!=null&&typeof t.symbols=="object"&&t.bundles!=null&&typeof t.bundles=="object")return t}function V(){let s=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return s+="w.postMessage(u.map(u=>new URL(u,origin)+''));",s+="w.onmessage=()=>{w.terminate()};",s}function Ve(t){const e={bundles:$(t).map(n=>n.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(e)}}))`}function $(t){const e=[],n=o=>{if(Array.isArray(o))for(const s of o)e.includes(s.url)||(e.push(s.url),n(s.imports))};return n(t),e}function We(t){const e=new Map;let n=0;const o=(i,a)=>{if(Array.isArray(i))for(const d of i){const u=e.get(d.url)||0;e.set(d.url,u+1),n++,a.has(d.url)||(a.add(d.url),o(d.imports,a))}},s=new Set;for(const i of t)s.clear(),o(i.imports,s);const r=n/e.size*2,c=Array.from(e.entries());return c.sort((i,a)=>a[1]-i[1]),c.slice(0,5).filter(i=>i[1]>r).map(i=>i[0])}function He(t,e,n){const o=et(t==null?void 0:t.implementation),s=[];return o.prefetchEvent==="always"&&Ye(s,e,n),o.linkInsert==="html-append"&&Ze(s,e,o),o.linkInsert==="js-append"?Xe(s,e,o,n):o.workerFetchInsert==="always"&&Ge(s,e,n),s.length>0?k(O,{children:s}):null}function Ye(t,e,n){const o=We(e);for(const s of o)t.push(k("link",{rel:"modulepreload",href:s,nonce:n}));t.push(k("script",{dangerouslySetInnerHTML:Ve(e),nonce:n}))}function Ze(t,e,n){const o=$(e),s=n.linkRel||"prefetch";for(const r of o){const c={};c.href=r,c.rel=s,(s==="prefetch"||s==="preload")&&r.endsWith(".js")&&(c.as="script"),t.push(k("link",c,void 0))}}function Xe(t,e,n,o){const s=n.linkRel||"prefetch";let r="";n.workerFetchInsert==="no-link-support"&&(r+="let supportsLinkRel = true;"),r+=`const u=${JSON.stringify($(e))};`,r+="u.map((u,i)=>{",r+="const l=document.createElement('link');",r+='l.setAttribute("href",u);',r+=`l.setAttribute("rel","${s}");`,n.workerFetchInsert==="no-link-support"&&(r+="if(i===0){",r+="try{",r+=`supportsLinkRel=l.relList.supports("${s}");`,r+="}catch(e){}",r+="}"),r+="document.body.appendChild(l);",r+="});",n.workerFetchInsert==="no-link-support"&&(r+="if(!supportsLinkRel){",r+=V(),r+="}"),n.workerFetchInsert==="always"&&(r+=V()),t.push(k("script",{type:"module",dangerouslySetInnerHTML:r,nonce:o}))}function Ge(t,e,n){let o=`const u=${JSON.stringify($(e))};`;o+=V(),t.push(k("script",{type:"module",dangerouslySetInnerHTML:o,nonce:n}))}function et(t){return t&&typeof t=="object"?t:tt}var tt={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},nt="<!DOCTYPE html>";async function st(t,e){var N;let n=e.stream,o=0,s=0,r=0,c=0,i="",a;const d=((N=e.streaming)==null?void 0:N.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},u=e.containerTagName??"html",p=e.containerAttributes??{},q=n,E=U(),g=ye(e),y=ot(e.manifest);function m(){i&&(q.write(i),i="",o=0,r++,r===1&&(c=E()))}function v(h){const b=h.length;o+=b,s+=b,i+=h}switch(d.strategy){case"disabled":n={write:v};break;case"direct":n=q;break;case"auto":let h=0,b=!1;const Z=d.maximunChunk??0,M=d.maximunInitialChunk??0;n={write(T){T==="<!--qkssr-f-->"?b||(b=!0):T==="<!--qkssr-pu-->"?h++:T==="<!--qkssr-po-->"?h--:v(T),h===0&&(b||o>=(r===0?M:Z))&&(b=!1,m())}};break}u==="html"?n.write(nt):(n.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"}),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Fe(e,y);const _=y==null?void 0:y.manifest.injections,l=_?_.map(h=>k(h.tag,h.attributes??{})):void 0,f=U(),w=[];let z=0,R=0;await ke(t,{stream:n,containerTagName:u,containerAttributes:p,serverData:e.serverData,base:g,beforeContent:l,beforeClose:async(h,b,Z,M)=>{var te,ne,se,oe,re,ie,ae;z=f();const T=U();a=await je(h,b,void 0,M);const L=[];if(e.prefetchStrategy!==null){const j=Je(a,e,y);if(j.length>0){const ce=He(e.prefetchStrategy,j,(te=e.serverData)==null?void 0:te.nonce);ce&&L.push(ce)}}const ge=JSON.stringify(a.state,void 0,void 0);L.push(k("script",{type:"qwik/json",dangerouslySetInnerHTML:rt(ge),nonce:(ne=e.serverData)==null?void 0:ne.nonce})),a.funcs.length>0&&L.push(k("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:at(a.funcs),nonce:(se=e.serverData)==null?void 0:se.nonce}));const we=!a||a.mode!=="static",X=((oe=e.qwikLoader)==null?void 0:oe.include)??"auto",G=X==="always"||X==="auto"&&we;if(G){const j=Be({events:(re=e.qwikLoader)==null?void 0:re.events,debug:e.debug});L.push(k("script",{id:"qwikloader",dangerouslySetInnerHTML:j,nonce:(ie=e.serverData)==null?void 0:ie.nonce}))}const ee=Array.from(b.$events$,j=>JSON.stringify(j));if(ee.length>0){let j=`window.qwikevents.push(${ee.join(", ")})`;G||(j=`window.qwikevents||=[];${j}`),L.push(k("script",{dangerouslySetInnerHTML:j,nonce:(ae=e.serverData)==null?void 0:ae.nonce}))}return it(w,h),R=T(),k(O,{children:L})},manifestHash:(y==null?void 0:y.manifest.manifestHash)||"dev"}),u!=="html"&&n.write("<!--/cq-->"),m();const D=a.resources.some(h=>h._cache!==1/0);return{prefetchResources:void 0,snapshotResult:a,flushes:r,manifest:y==null?void 0:y.manifest,size:s,isStatic:!D,timing:{render:z,snapshot:R,firstFlush:c},_symbols:w}}function ot(t){if(t){if("mapper"in t)return t;if(t=Ke(t),t){const e={};return Object.entries(t.mapping).forEach(([n,o])=>{e[K(n)]=[n,o]}),{mapper:e,manifest:t}}}}var rt=t=>t.replace(/<(\/?script)/g,"\\x3C$1");function it(t,e){var n;for(const o of e){const s=(n=o.$componentQrl$)==null?void 0:n.getSymbol();s&&!t.includes(s)&&t.push(s)}}function at(t){return`document.currentScript.qFuncs=[${t.join(`,
`)}]`}const ct={manifestHash:"jgsoxw",symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26295,35258]},s_0vphQYqOdZI:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_0vphqyqodzi",hash:"0vphQYqOdZI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,854]},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[37211,38862]},s_B0lqk5IDDy4:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_b0lqk5iddy4",hash:"B0lqk5IDDy4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[4556,4877]},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[48816,50167]},s_RQjhsJ90NAg:{origin:"components/Search/search.tsx",displayName:"Search_component",canonicalFilename:"s_rqjhsj90nag",hash:"RQjhsJ90NAg",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[149,313]},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[23025,35545]},s_VKFlAWJuVm8:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vkflawjuvm8",hash:"VKFlAWJuVm8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[589,617]},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[35829,37092]},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7931,8645]},s_eelgJ6tV0Bw:{origin:"components/Dropdown/dropdown.tsx",displayName:"Dropdown_component",canonicalFilename:"s_eelgj6tv0bw",hash:"eelgJ6tV0Bw",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[241,711]},s_tntnak2DhJ8:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_tntnak2dhj8",hash:"tntnak2DhJ8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[268,793]},s_45qwH067I5I:{origin:"components/Dropdown/dropdown.tsx",displayName:"Dropdown_component_div_document_onClick",canonicalFilename:"s_45qwh067i5i",hash:"45qwH067I5I",ctxKind:"eventHandler",ctxName:"document:onClick$",captures:!0,parent:"s_eelgJ6tV0Bw",loc:[348,376]},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[23080,23114]},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[40230,41864]},s_DyVc0YBIqQU:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[44878,46702]},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36230,36291]},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[37738,37801]},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24364,25683]},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[37919,38434]},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[49123,49820]},s_w3LqkU0SMCY:{origin:"components/Dropdown/dropdown.tsx",displayName:"Dropdown_component_div_button_onClick",canonicalFilename:"s_w3lqku0smcy",hash:"w3LqkU0SMCY",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_eelgJ6tV0Bw",loc:[403,439]}},mapping:{s_02wMImzEAbk:"q-893359c7.js",s_0vphQYqOdZI:"q-5aafaaa6.js",s_8gdLBszqbaM:"q-e8dc5be8.js",s_B0lqk5IDDy4:"q-4ea11a68.js",s_Nk9PlpjQm9Y:"q-b016eeeb.js",s_RQjhsJ90NAg:"q-057c7e1b.js",s_TxCFOy819ag:"q-893359c7.js",s_VKFlAWJuVm8:"q-3e9e0de6.js",s_WmYC5H00wtI:"q-bf1636e9.js",s_e0ssiDXoeAM:"q-0258df90.js",s_eelgJ6tV0Bw:"q-f15f01ec.js",s_tntnak2DhJ8:"q-2b02c517.js",s_45qwH067I5I:"q-f15f01ec.js",s_RPDJAz33WLA:"q-893359c7.js",s_A5bZC7WO00A:"q-1269fe1c.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-988ad6b2.js",s_BUbtvTyvVRE:"q-bf1636e9.js",s_eBQ0vFsFKsk:"q-4aa489c3.js",s_fX0bDjeJa0E:"q-893359c7.js",s_i1Cv0pYJNR0:"q-e8dc5be8.js",s_p9MSze0ojs4:"q-b016eeeb.js",s_w3LqkU0SMCY:"q-f15f01ec.js"},bundles:{"q-0258df90.js":{size:457,imports:["q-982e3dfd.js","q-ba2b7e5d.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-057c7e1b.js":{size:253,imports:["q-ba2b7e5d.js"],origins:["src/entry_Search.js","src/s_rqjhsj90nag.js"],symbols:["s_RQjhsJ90NAg"]},"q-1269fe1c.js":{size:751,imports:["q-ba2b7e5d.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-2b02c517.js":{size:543,imports:["q-982e3dfd.js","q-ba2b7e5d.js"],dynamicImports:["q-5aafaaa6.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_tntnak2dhj8.js"],symbols:["s_tntnak2DhJ8"]},"q-2b14568d.js":{size:125,imports:["q-ba2b7e5d.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-39ac8683.js":{size:288,imports:["q-ba2b7e5d.js"],dynamicImports:["q-3e9e0de6.js"],origins:["src/routes/layout.tsx"]},"q-3e9e0de6.js":{size:102,imports:["q-ba2b7e5d.js"],origins:["src/entry_layout.js","src/s_vkflawjuvm8.js"],symbols:["s_VKFlAWJuVm8"]},"q-4aa489c3.js":{size:128,imports:["q-982e3dfd.js","q-ba2b7e5d.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-4ea11a68.js":{size:557,imports:["q-ba2b7e5d.js","q-d1822d6d.js"],dynamicImports:["q-057c7e1b.js","q-f15f01ec.js"],origins:["src/components/Dropdown/dropdown.tsx","src/components/Search/search.tsx","src/entry_routes.js","src/s_b0lqk5iddy4.js"],symbols:["s_B0lqk5IDDy4"]},"q-5aafaaa6.js":{size:671,imports:["q-982e3dfd.js","q-ba2b7e5d.js"],origins:["src/entry_RouterHead.js","src/s_0vphqyqodzi.js"],symbols:["s_0vphQYqOdZI"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-893359c7.js":{size:5592,imports:["q-982e3dfd.js","q-ba2b7e5d.js"],dynamicImports:["q-2b14568d.js","q-39ac8683.js","q-d1822d6d.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-8ea06850.js":{size:2539,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-972ac3e1.js":{size:202,imports:["q-ba2b7e5d.js"],dynamicImports:["q-2b02c517.js"],origins:["src/global.css","src/root.tsx"]},"q-982e3dfd.js":{size:7500,imports:["q-ba2b7e5d.js"],dynamicImports:["q-0258df90.js","q-663033b0.js","q-893359c7.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-988ad6b2.js":{size:889,imports:["q-982e3dfd.js","q-ba2b7e5d.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-b016eeeb.js":{size:1032,imports:["q-982e3dfd.js","q-ba2b7e5d.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-ba2b7e5d.js":{size:46664,origins:["node_modules/@builder.io/qwik/core.min.mjs"]},"q-bf1636e9.js":{size:787,imports:["q-982e3dfd.js","q-ba2b7e5d.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-d1822d6d.js":{size:3076,imports:["q-ba2b7e5d.js"],dynamicImports:["q-4ea11a68.js"],origins:["src/routes/index.tsx"]},"q-e8dc5be8.js":{size:1144,imports:["q-982e3dfd.js","q-ba2b7e5d.js"],dynamicImports:["q-4aa489c3.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-f15f01ec.js":{size:835,imports:["q-ba2b7e5d.js"],origins:["src/entry_Dropdown.js","src/s_45qwh067i5i.js","src/s_eelgj6tv0bw.js","src/s_w3lqku0smcy.js"],symbols:["s_45qwH067I5I","s_eelgJ6tV0Bw","s_w3LqkU0SMCY"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-c71edaa7.css",dangerouslySetInnerHTML:`html{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:monospace}body{padding:0;line-height:inherit;font-family:monospace;--bg: #333;--fg: #ccc;--bgr: 37, 37, 37;--fgr: 218, 218, 210;background:var(--bg);color:var(--fg)}button{color:rgba(var(--fgr),.5);padding:10px 16px;font-size:18px;background:var(--bg);border:1px solid rgba(var(--fgr),.5);transition:.15s}button:hover{color:rgba(var(--fgr),1);border:1px solid rgba(var(--fgr),1)}main{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;width:70vw;height:50vh;margin:64px auto}.top,.bottom{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}button{height:45px}.dropdown{position:relative}ul{z-index:9001;transition:.15s;position:absolute;top:48px;left:0;list-style-type:none;border:1px solid var(--fg);margin:0;padding:3px;background:var(--bg)}ul:not(.active){pointer-events:none;opacity:.01}.active{opacity:.99}a{display:flex;padding:8px;margin:3px;color:inherit;text-decoration:none;border:1px solid rgba(var(--fgr),.1)}a:hover{border:1px solid rgba(var(--fgr),1)}form{display:flex;justify-content:center;align-items:stretch;gap:3px}input{color:rgba(var(--fgr),1);padding:10px;font-size:18px;line-height:18px;background:var(--bg);border:1px solid rgba(var(--fgr),.5);transition:.15s}form:hover input,form:hover button,form:focus input,form:focus button,form:active input,form:active button{color:rgba(var(--fgr),1);border:1px solid rgba(var(--fgr),1)}
`}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.13",vite:"",rollup:"3.29.4",env:"node",os:"darwin",node:"18.16.0"}},lt='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',ut=A("qc-s"),dt=A("qc-c"),ve=A("qc-ic"),he=A("qc-h"),qe=A("qc-l"),mt=A("qc-n"),pt=A("qc-a"),ft=A("qc-ir"),yt=t=>{const e=window,n=location.pathname+location.search,o="_qCitySPA",s="_qCityHistoryPatch",r="_qCityBootstrap",c="_qCityInitPopstate",i="_qCityInitAnchors",a="_qCityInitVisibility",d="_qCityInitScroll",u="_qCityScrollEnabled",p="_qCityScrollDebounce",q="_qCityScroll",E=m=>{m&&e.scrollTo(m.x,m.y)},g=()=>{const m=document.documentElement;return{x:m.scrollLeft,y:m.scrollTop,w:Math.max(m.scrollWidth,m.clientWidth),h:Math.max(m.scrollHeight,m.clientHeight)}},y=m=>{const v=history.state||{};v[q]=m||g(),history.replaceState(v,"")};if(!e[o]&&!e[c]&&!e[i]&&!e[a]&&!e[d]){if(y(),e[c]=()=>{var m;if(!e[o]){if(e[u]=!1,clearTimeout(e[p]),n!==location.pathname+location.search){const _=t.closest("[q\\:container]").querySelector('a[q\\:key="AD_1"]');if(_){const l=_.closest("[q\\:container]"),f=_.cloneNode();f.setAttribute("q:nbs",""),f.style.display="none",l.appendChild(f),e[r]=f,f.click()}else location.reload()}else if(history.scrollRestoration==="manual"){const v=(m=history.state)==null?void 0:m[q];E(v),e[u]=!0}}},!e[s]){e[s]=!0;const m=history.pushState,v=history.replaceState,_=l=>(l===null||typeof l>"u"?l={}:(l==null?void 0:l.constructor)!==Object&&(l={_data:l}),l._qCityScroll=l._qCityScroll||g(),l);history.pushState=(l,f,w)=>(l=_(l),m.call(history,l,f,w)),history.replaceState=(l,f,w)=>(l=_(l),v.call(history,l,f,w))}e[i]=m=>{if(e[o]||m.defaultPrevented)return;const v=m.target.closest("a[href]");if(v&&!v.hasAttribute("preventdefault:click")){const _=v.getAttribute("href"),l=new URL(location.href),f=new URL(_,l),w=f.origin===l.origin,z=f.pathname+f.search===l.pathname+l.search;if(w&&z)if(m.preventDefault(),f.href!==l.href&&history.pushState(null,"",f),!f.hash)f.href.endsWith("#")?window.scrollTo(0,0):(e[u]=!1,clearTimeout(e[p]),y({...g(),x:0,y:0}),location.reload());else{const R=f.hash.slice(1),D=document.getElementById(R);D&&D.scrollIntoView()}}},e[a]=()=>{!e[o]&&e[u]&&document.visibilityState==="hidden"&&y()},e[d]=()=>{e[o]||!e[u]||(clearTimeout(e[p]),e[p]=setTimeout(()=>{y(),e[p]=void 0},200))},e[u]=!0,setTimeout(()=>{addEventListener("popstate",e[c]),addEventListener("scroll",e[d],{passive:!0}),document.body.addEventListener("click",e[i]),e.navigation||document.addEventListener("visibilitychange",e[a],{passive:!0})},0)}},bt=C(yt,"s_DyVc0YBIqQU"),vt=()=>{{const[t,e]=Le().chunkForSymbol(bt.getSymbol(),null),n=Re+"build/"+e;return`(${ht.toString()})('${n}','${t}');`}},ht=async(t,e)=>{var n;if(!window._qcs&&history.scrollRestoration==="manual"){window._qcs=!0;const o=(n=history.state)==null?void 0:n._qCityScroll;o&&window.scrollTo(o.x,o.y);const s=document.currentScript;(await import(t))[e](s)}},qt=()=>{const t=vt();Se();const e=W("nonce"),n=H(ve);if(n.value&&n.value.length>0){const o=n.value.length;let s=null;for(let r=o-1;r>=0;r--)n.value[r].default&&(s=S(n.value[r].default,{children:s},1,"zl_0"));return S(O,{children:[s,x("script",{dangerouslySetInnerHTML:t},{nonce:e},null,3,null)]},1,"zl_1")}return Ee},_t=Q(C(qt,"s_e0ssiDXoeAM")),gt=(t,e)=>new URL(t,e.href),wt=(t,e)=>t.origin===e.origin,kt=(t,e)=>t.pathname+t.search===e.pathname+e.search,jt=t=>t&&typeof t.then=="function",xt=(t,e,n,o)=>{const s=_e(),c={head:s,withLocale:i=>le(o,i),resolveValue:i=>{const a=i.__id;if(i.__brand==="server_loader"&&!(a in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const d=t.loaders[a];if(jt(d))throw new Error("Loaders returning a function can not be referred to in the head function.");return d},...e};for(let i=n.length-1;i>=0;i--){const a=n[i]&&n[i].head;a&&(typeof a=="function"?ue(s,le(o,()=>a(c))):typeof a=="object"&&ue(s,a))}return c.head},ue=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),F(t.meta,e.meta),F(t.links,e.links),F(t.styles,e.styles),F(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},F=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const o=t.findIndex(s=>s.key===n.key);if(o>-1){t[o]=n;continue}}t.push(n)}},_e=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});let de;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(de||(de={}));const St=()=>H(he),Et=()=>H(qe),It=()=>pe(W("qwikcity")),Ct=":root{view-transition-name:none}",At=async(t,e)=>{const[n,o,s,r]=fe(),{type:c="link",forceReload:i=t===void 0,replaceState:a=!1,scroll:d=!0}=typeof e=="object"?e:{forceReload:e},u=s.value.dest,p=t===void 0?u:gt(t,r.url);if(wt(p,u)&&!(!i&&kt(p,u)))return s.value={type:c,dest:p,forceReload:i,replaceState:a,scroll:d},n.value=void 0,r.isNavigating=!0,new Promise(q=>{o.r=q})},Nt=({track:t})=>{const[e,n,o,s,r,c,i,a,d,u,p]=fe();async function q(){const[g,y]=t(()=>[u.value,e.value]),m=De(""),v=p.url,_=y?"form":g.type;g.replaceState;let l,f,w=null;if(l=new URL(g.dest,p.url),w=r.loadedRoute,f=r.response,w){const[z,R,D,Y]=w,N=D,h=N[N.length-1];p.prevUrl=v,p.url=l,p.params={...R},u.untrackedValue={type:_,dest:l};const b=xt(f,p,N,m);n.headings=h.headings,n.menu=Y,o.value=pe(N),s.links=b.links,s.meta=b.meta,s.styles=b.styles,s.scripts=b.scripts,s.title=b.title,s.frontmatter=b.frontmatter}}return q()},Lt=t=>{Ie(C(Ct,"s_RPDJAz33WLA"));const e=It();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data");const n=W("url");if(!n)throw new Error("Missing Qwik URL Env Data");const o=new URL(n),s=P({url:o,params:e.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),r={},c=Ce(P(e.response.loaders,{deep:!1})),i=B({type:"initial",dest:o,forceReload:!1,replaceState:!1,scroll:!0}),a=P(_e),d=P({headings:void 0,menu:void 0}),u=B(),p=e.response.action,q=p?e.response.loaders[p]:void 0,E=B(q?{id:p,data:e.response.formData,output:{result:q,status:e.response.status}}:void 0),g=C(At,"s_fX0bDjeJa0E",[E,r,i,s]);return I(dt,d),I(ve,u),I(he,a),I(qe,s),I(mt,g),I(ut,c),I(pt,E),I(ft,i),Ae(C(Nt,"s_02wMImzEAbk",[E,d,u,a,e,g,c,r,t,i,s])),S(Ne,null,3,"qY_0")},Rt=Q(C(Lt,"s_TxCFOy819ag")),Dt=t=>x("script",{nonce:me(t,"nonce")},{dangerouslySetInnerHTML:lt},null,3,"1Z_0"),Tt=()=>{const t=St(),e=Et();return S(O,{children:[x("title",null,null,t.title,1,null),x("link",null,{href:Te(n=>n.url.href,[e],"p0.url.href"),rel:"canonical"},null,3,null),x("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),x("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),t.meta.map(n=>J("meta",{...n},null,0,n.key)),t.links.map(n=>J("link",{...n},null,0,n.key)),t.styles.map(n=>J("style",{...n.props,dangerouslySetInnerHTML:me(n,"style")},null,0,n.key))]},1,"0D_0")},zt=Q(C(Tt,"s_0vphQYqOdZI"));const Pt=()=>S(Rt,{children:[x("head",null,null,[x("meta",null,{charSet:"utf-8"},null,3,null),x("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),S(zt,null,3,"vp_0")],1,null),x("body",null,{lang:"en"},[S(_t,null,3,"vp_1"),S(Dt,null,3,"vp_2")],1,null)]},1,"vp_3"),Ft=Q(C(Pt,"s_tntnak2DhJ8"));function Qt(t){return st(S(Ft,null,3,"Qb_0"),{manifest:ct,...t,containerAttributes:{lang:"en-us",...t.containerAttributes}})}export{Qt as default};
