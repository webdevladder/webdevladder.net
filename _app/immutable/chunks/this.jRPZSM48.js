import{y as O,S as m,z as r,A as D,B as I,C as S,D as b,F as T,n as d,j as R,g as h,G as g,a as x,H as A,I as E,J as j,K as B}from"./runtime.B5t0gBws.js";import{U as u}from"./disclose-version.C04bJlKT.js";function w(e,t=null,s){if(typeof e=="object"&&e!=null&&!O(e)&&!(m in e)){if(r in e){const n=e[r];if(n.t===e||n.p===e)return n.p}const f=A(e);if(f===D||f===I){const n=new Proxy(e,K);return S(e,r,{value:{s:new Map,v:b(0),a:T(e),p:n,t:e},writable:!0,enumerable:!1}),n}}return e}function _(e,t=1){d(e,e.v+t)}const K={defineProperty(e,t,s){if(s.value){const f=e[r],n=f.s.get(t);n!==void 0&&d(n,w(s.value,f))}return Reflect.defineProperty(e,t,s)},deleteProperty(e,t){const s=e[r],f=s.s.get(t),n=s.a,i=delete e[t];if(n&&i){const a=s.s.get("length"),l=e.length-1;a!==void 0&&a.v!==l&&d(a,l)}return f!==void 0&&d(f,u),i&&_(s.v),i},get(e,t,s){var i;if(t===r)return Reflect.get(e,r);const f=e[r];let n=f.s.get(t);if(n===void 0&&(!(t in e)||(i=R(e,t))!=null&&i.writable)&&(n=b(w(e[t],f)),f.s.set(t,n)),n!==void 0){const a=h(n);return a===u?void 0:a}return Reflect.get(e,t,s)},getOwnPropertyDescriptor(e,t){const s=Reflect.getOwnPropertyDescriptor(e,t);if(s&&"value"in s){const n=e[r].s.get(t);n&&(s.value=h(n))}return s},has(e,t){var i;if(t===r)return!0;const s=e[r],f=Reflect.has(e,t);let n=s.s.get(t);return(n!==void 0||g!==null&&(!f||(i=R(e,t))!=null&&i.writable))&&(n===void 0&&(n=b(f?w(e[t],s):u),s.s.set(t,n)),h(n)===u)?!1:f},set(e,t,s,f){const n=e[r];let i=n.s.get(t);i===void 0&&(x(()=>f[t]),i=n.s.get(t)),i!==void 0&&d(i,w(s,n));const a=n.a,l=!(t in e);if(a&&t==="length")for(let c=s;c<e.length;c+=1){const o=n.s.get(c+"");o!==void 0&&d(o,u)}var y=Reflect.getOwnPropertyDescriptor(e,t);if(y!=null&&y.set?y.set.call(f,s):e[t]=s,l){if(a){const c=n.s.get("length"),o=e.length;c!==void 0&&c.v!==o&&d(c,o)}_(n.v)}return!0},ownKeys(e){const t=e[r];return h(t.v),Reflect.ownKeys(e)}};function P(e,t){var f;var s=e&&((f=e[r])==null?void 0:f.t);return e===t||s===t}function N(e={},t,s,f){return E(()=>{var n,i;return j(()=>{n=i,i=(f==null?void 0:f())||[],x(()=>{e!==s(...i)&&(t(e,...i),n&&P(s(...n),e)&&t(null,...n))})}),()=>{B(()=>{i&&P(s(...i),e)&&t(null,...i)})}}),e}export{N as b,w as p};
