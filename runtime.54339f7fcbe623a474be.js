(()=>{"use strict";var e,v={},g={};function r(e){var n=g[e];if(void 0!==n)return n.exports;var t=g[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(n,t,o,s)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,o,s]=e[i],d=!0,l=0;l<t.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every(b=>r.O[b](t[l]))?t.splice(l--,1):(d=!1,s<a&&(a=s));if(d){e.splice(i--,1);var u=o();void 0!==u&&(n=u)}}return n}s=s||0;for(var i=e.length;i>0&&e[i-1][2]>s;i--)e[i]=e[i-1];e[i]=[t,o,s]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+".0236ea2d6cdd3517dc88.js",r.miniCssF=e=>"styles.1cddd966711b94a06f1c.css",r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="single-web-page:";r.l=(t,o,s,i)=>{if(e[t])e[t].push(o);else{var a,d;if(void 0!==s)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var f=l[u];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==n+s){a=f;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+s),a.src=r.tu(t)),e[t]=[o];var c=(h,b)=>{a.onerror=a.onload=null,clearTimeout(p);var _=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),_&&_.forEach(m=>m(b)),h)return h(b)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),d&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tu=n=>(void 0===e&&(e={createScriptURL:t=>t},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e.createScriptURL(n))})(),r.p="",(()=>{var e={666:0};r.f.j=(o,s)=>{var i=r.o(e,o)?e[o]:void 0;if(0!==i)if(i)s.push(i[2]);else if(666!=o){var a=new Promise((f,c)=>i=e[o]=[f,c]);s.push(i[2]=a);var d=r.p+r.u(o),l=new Error;r.l(d,f=>{if(r.o(e,o)&&(0!==(i=e[o])&&(e[o]=void 0),i)){var c=f&&("load"===f.type?"missing":f.type),p=f&&f.target&&f.target.src;l.message="Loading chunk "+o+" failed.\n("+c+": "+p+")",l.name="ChunkLoadError",l.type=c,l.request=p,i[1](l)}},"chunk-"+o,o)}else e[o]=0},r.O.j=o=>0===e[o];var n=(o,s)=>{var l,u,[i,a,d]=s,f=0;for(l in a)r.o(a,l)&&(r.m[l]=a[l]);if(d)var c=d(r);for(o&&o(s);f<i.length;f++)r.o(e,u=i[f])&&e[u]&&e[u][0](),e[i[f]]=0;return r.O(c)},t=self.webpackChunksingle_web_page=self.webpackChunksingle_web_page||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();