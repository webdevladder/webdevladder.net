import{c as n,s as e,a as o,t as u,v as z,f,r as s,V as ae,W as te,b}from"../chunks/disclose-version.yQ-IbLbA.js";import{J as Ge,O as Me,p as R,t as g,b as X,k as l,n as j,x as F}from"../chunks/runtime.89JC0suQ.js";import{i as h}from"../chunks/if.CsHPqaYE.js";import{s as he,a as W,e as fe,i as Ee}from"../chunks/attributes.QoRRXiBy.js";import{s as E,t as V,a as T,b as Oe}from"../chunks/style.4LE4wnDR.js";import{s as Ze,a as De,p as Ne}from"../chunks/stores.PWlkfbC4.js";import{e as ke,s as xe,a as we}from"../chunks/string.CAoGIR8s.js";import{f as Be,p as Ie,L as Je,s as Ke,a as ee}from"../chunks/package.BK4ywsaH.js";import{t as Ve,s as Te}from"../chunks/index.DClsDKQq.js";import{p as Ue}from"../chunks/props.CD6fTDO-.js";import{Z as Ae,M as He,F as Qe,G as Re,a as Xe,C as Ye}from"../chunks/Fuzling.BJLw_5rQ.js";import{B as ye}from"../chunks/Breadcrumb.CD06jq2Y.js";function $e(L,a,m,k,x){var p=()=>{k(m[L])};m.addEventListener(a,p),x?Ge(()=>{m[L]=x()}):p(),(m===document.body||m===window||m===document)&&Me(()=>{m.removeEventListener(a,p)})}var ea=u("<div><!></div>"),aa=u("<details><summary><!></summary> <!></details>");function ta(L,a){R(a,!0);let m=Ue(a,"open",7);var k=aa();let x;var p=n(k);let d;var q=n(p);E(q,()=>a.summary),s(p);var y=e(e(p,!0));h(y,()=>a.eager,w=>{var S=z(),P=f(S);E(P,()=>a.children),o(w,S)},w=>{var S=z(),P=f(S);h(P,m,O=>{var C=ea(),B=n(C);E(B,()=>a.children),s(C),Ve(3,C,()=>Te),o(O,C)},null,!0),o(w,S)}),s(k),g(()=>{x=he(k,x,{...a.attrs},!0,""),d=he(p,d,{...a.summary_attrs},!0,"")}),$e("open","toggle",k,w=>m(w),m),o(L,k),X()}var ra=u('<div class="repo_name svelte-w7xguq"> <!></div>'),sa=u('<div class="description svelte-w7xguq"> </div>'),na=u('<div class="motto svelte-w7xguq"> </div>'),oa=u('<blockquote class="npm_url svelte-w7xguq"> </blockquote>'),va=u('<span class="title svelte-w7xguq">homepage</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq"><img> </a></div>',1),la=u('<span class="title svelte-w7xguq">repo</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="repo"> </a></div>',1),ia=u('<span class="title svelte-w7xguq">npm</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="npm"> </a></div>',1),_a=u('<span class="title svelte-w7xguq">version</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="version"> </a></div>',1),ca=u('<span class="title svelte-w7xguq">license</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="license"> </a></div>',1),da=u('<span class="title svelte-w7xguq">data</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="data">package.json</a> <a class="chip svelte-w7xguq" title="data">src.json</a></div>',1),ua=u('<div class="logo svelte-w7xguq"><img></div>'),ga=u("<li> </li>"),ma=u('<ul class="declarations unstyled svelte-w7xguq"></ul>'),pa=u('<li class="module svelte-w7xguq"><div class="module_content svelte-w7xguq"><a class="chip"> </a> <!></div></li>'),ha=u('<section class="svelte-w7xguq"><menu class="unstyled"></menu></section>'),fa=u("raw data for <code>pkg: Package_Meta</code>",1),ka=u("<pre><code> </code></pre>"),xa=u('<div class="package_detail svelte-w7xguq"><div class="info svelte-w7xguq"><div class="flex flex_1"><div><header class="svelte-w7xguq"><!></header> <!> <!> <!> <!> <section class="properties svelte-w7xguq"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-w7xguq"><!></section></div>');function wa(L,a){R(a,!0);const m=Ze(),k=()=>De(Ne,"$page",m),x=j(()=>a.pkg),p=j(()=>{let{package_json:i,src_json:r}=l(x);return[i,r]}),d=j(()=>l(p)[0]),q=j(()=>l(p)[1]),y=j(()=>l(q)),w=j(()=>{let{modules:i}=l(y);return[i]}),S=j(()=>l(w)[0]),P=j(()=>l(d).repository?xe(we(we(typeof l(d).repository=="string"?l(d).repository:l(d).repository.url,".git"),"/"),"git+"):null),O=j(()=>l(d).license&&l(P)?l(P)+"/blob/main/LICENSE":null),C=(i,r)=>i+"/blob/main/src/lib/"+(r.endsWith(".js")?r.slice(0,-3)+".ts":r),B=j(()=>l(d).exports&&Object.keys(l(d).exports)),Z=j(()=>l(d).exports?Object.keys(l(d).exports).map(i=>{const r=xe(i,"./");return r==="."?"index.js":r}):null);var I=xa(),J=n(I),U=n(J),K=n(U),Y=n(K),be=n(Y);h(be,()=>a.repo_name,i=>{var r=z(),_=f(r);E(_,()=>a.repo_name,()=>a.pkg.repo_name),o(i,r)},i=>{var r=ra(),_=n(r),v=e(_);h(v,()=>l(d).glyph,t=>{var c=ae();g(()=>b(c,` ${l(d).glyph??""}`)),o(t,c)}),s(r),g(()=>b(_,a.pkg.repo_name)),o(i,r)}),s(Y);var re=e(e(Y,!0));h(re,()=>a.children,i=>{var r=z(),_=f(r);E(_,()=>a.children,()=>a.pkg),o(i,r)});var se=e(e(re,!0));h(se,()=>l(d).description,i=>{var r=z(),_=f(r);h(_,()=>a.description,v=>{var t=z(),c=f(t);E(c,()=>a.description,()=>l(d).description),o(v,t)},v=>{var t=sa(),c=n(t);s(t),g(()=>b(c,l(d).description)),o(v,t)}),o(i,r)});var ne=e(e(se,!0));h(ne,()=>l(d).motto,i=>{var r=z(),_=f(r);h(_,()=>a.motto,v=>{var t=z(),c=f(t);E(c,()=>a.motto,()=>l(d).motto),o(v,t)},v=>{var t=na(),c=n(t);s(t),g(()=>b(c,l(d).motto)),o(v,t)}),o(i,r)});var oe=e(e(ne,!0));h(oe,()=>a.pkg.npm_url,i=>{var r=z(),_=f(r);h(_,()=>a.npm_url,v=>{var t=z(),c=f(t);E(c,()=>a.npm_url,()=>a.pkg.npm_url),o(v,t)},v=>{var t=oa(),c=n(t);s(t),g(()=>b(c,`npm i -D ${l(d).name??""}`)),o(v,t)}),o(i,r)});var ve=e(e(oe,!0)),le=n(ve);h(le,()=>a.pkg.homepage_url,i=>{var r=z(),_=f(r);h(_,()=>a.homepage_url,v=>{var t=z(),c=f(t);E(c,()=>a.homepage_url,()=>a.pkg.homepage_url),o(v,t)},v=>{var t=va(),c=f(t),G=e(e(c,!0)),N=n(G),D=n(N),A=e(D,!0);g(()=>b(A,` ${Be(a.pkg.homepage_url)??""}`)),s(N),s(G),g(()=>{W(N,"href",a.pkg.homepage_url),V(N,"selected",a.pkg.homepage_url===k().url.href),W(D,"src",a.pkg.logo_url),W(D,"alt",a.pkg.logo_alt),T(D,"width","16px"),T(D,"height","16px"),T(D,"margin-right","var(--space_xs)")}),o(v,t)}),o(i,r)});var ie=e(e(le,!0));h(ie,()=>a.pkg.repo_url,i=>{var r=la(),_=f(r),v=e(e(_,!0)),t=n(v),c=n(t);s(t),s(v),g(()=>{W(t,"href",a.pkg.repo_url),b(c,`${a.pkg.owner_name??""}/${a.pkg.repo_name??""}`)}),o(i,r)});var _e=e(e(ie,!0));h(_e,()=>a.pkg.npm_url,i=>{var r=ia(),_=f(r),v=e(e(_,!0)),t=n(v),c=n(t);s(t),s(v),g(()=>{W(t,"href",a.pkg.npm_url),b(c,l(d).name)}),o(i,r)});var ce=e(e(_e,!0));h(ce,()=>a.pkg.changelog_url,i=>{var r=_a(),_=f(r),v=e(e(_,!0)),t=n(v),c=n(t);s(t),s(v),g(()=>{W(t,"href",a.pkg.changelog_url),b(c,l(d).version)}),o(i,r)});var de=e(e(ce,!0));h(de,()=>l(O),i=>{var r=ca(),_=f(r),v=e(e(_,!0)),t=n(v),c=n(t);s(t),s(v),g(()=>{W(t,"href",l(O)),b(c,l(d).license)}),o(i,r)});var qe=e(e(de,!0));h(qe,()=>a.pkg.homepage_url,i=>{var r=da(),_=f(r),v=e(e(_,!0)),t=n(v);g(()=>W(t,"href",`${ke(a.pkg.homepage_url,"/")??""}.well-known/package.json`));var c=e(e(t,!0));g(()=>W(c,"href",`${ke(a.pkg.homepage_url,"/")??""}.well-known/src.json`)),s(v),o(i,r)}),s(ve),s(K),s(U);var je=e(e(U,!0));h(je,()=>a.pkg.logo_url,i=>{var r=ua(),_=n(r);s(r),g(()=>{W(_,"src",a.pkg.logo_url),W(_,"alt",a.pkg.logo_alt),T(_,"width","var(--size, var(--icon_size_xl2))"),T(_,"height","var(--size, var(--icon_size_xl2))")}),o(i,r)}),s(J);var ue=e(e(J,!0));h(ue,()=>l(Z)&&a.pkg.repo_url,i=>{var r=ha(),_=n(r);fe(_,78,()=>l(Z),(v,t)=>F(v),(v,t,c)=>{var G=pa();const N=j(()=>C(a.pkg.repo_url,F(t))),D=j(()=>{var M;return(M=l(B))==null?void 0:M[F(c)]}),A=j(()=>{var M;return l(D)&&((M=l(S))==null?void 0:M[l(D)])});g(()=>V(G,"ts",F(t).endsWith(".js"))),g(()=>V(G,"svelte",F(t).endsWith(".svelte"))),g(()=>V(G,"css",F(t).endsWith(".css"))),g(()=>V(G,"json",F(t).endsWith(".json")));var me=n(G),H=n(me),Le=n(H);s(H);var Se=e(e(H,!0));h(Se,()=>{var M;return(M=l(A))==null?void 0:M.declarations.length},M=>{var $=ma();fe($,73,()=>l(A).declarations,Ee,(Pe,pe,Pa)=>{let Fe=()=>F(F(pe)).name,We=()=>F(F(pe)).kind;var Q=ga(),Ce=n(Q);s(Q),g(()=>{Oe(Q,`declaration chip ${We()??""}_declaration svelte-w7xguq`),b(Ce,Fe())}),o(Pe,Q)}),s($),o(M,$)}),s(me),s(G),g(()=>{W(H,"href",l(N)),b(Le,F(t))}),o(v,G)}),s(_),s(r),o(i,r)});var ge=e(e(ue,!0)),ze=n(ge);ta(ze,{summary:r=>{te();var _=fa();e(f(_,!0)),o(r,_)},children:(r,_)=>{var v=ka(),t=n(v),c=n(t);g(()=>b(c,JSON.stringify(a.pkg,null,"	"))),s(t),s(v),o(r,v)},$$slots:{default:!0}}),s(ge),s(I),o(L,I),X()}var ya=u('<a class="project_link svelte-1bpnvy9" title="Zzz - social web app framework" href="https://zzz.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Zzz</span></a> <a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function ba(L){const a="var(--icon_size_lg)";var m=ya(),k=f(m),x=n(k);Ae(x,{size:a}),e(x),s(k);var p=e(e(k,!0)),d=n(p);He(d,{size:a}),e(d),s(p);var q=e(e(p,!0)),y=n(q);Qe(y,{size:a}),e(y),s(q);var w=e(e(q,!0)),S=n(w);Re(S,{size:a}),e(S),s(w);var P=e(e(w,!0)),O=n(P);Xe(O,{size:a}),e(O),s(P),o(L,m)}var qa=u('<h2 class="mt_0 mb_lg">Links</h2>'),ja=u('<section class="panel p_lg"><!> <!> <div class="box row"><!></div></section>');function za(L,a){R(a,!0);var m=ja(),k=n(m);h(k,()=>a.children,q=>{var y=z(),w=f(y);E(w,()=>a.children),o(q,y)},q=>{var y=qa();o(q,y)});var x=e(e(k,!0));Ye(x,{});var p=e(e(x,!0)),d=n(p);ba(d),s(p),s(m),o(L,m),X()}var La=u('<div class="mb_xl"><!></div>'),Sa=u('<main class="width_md svelte-1pyh03k"><section class="box svelte-1pyh03k"><header class="box"><h1 class="my_xl3 svelte-1pyh03k">webdevladder</h1></header> <!></section> <!> <section class="box w_100 mb_lg svelte-1pyh03k"><div class="panel p_md width_md"><!></div></section> <section class="box svelte-1pyh03k"><!></section></main>');function Ja(L,a){R(a,!0);const m=Ie(ee,Ke);var k=Sa(),x=n(k),p=n(x);n(p),s(p);var d=e(e(p,!0));ye(d,{children:(C,B)=>{te();var Z=ae();g(()=>b(Z,ee.glyph)),o(C,Z)},$$slots:{default:!0}}),s(x);var q=e(e(x,!0));za(q,{});var y=e(e(q,!0)),w=n(y),S=n(w);wa(S,{pkg:m}),s(w),s(y);var P=e(e(y,!0)),O=n(P);Je(O,{pkg:m,children:(C,B)=>{var Z=La(),I=n(Z);ye(I,{children:(J,U)=>{te();var K=ae();g(()=>b(K,ee.glyph)),o(J,K)},$$slots:{default:!0}}),s(Z),o(C,Z)},$$slots:{default:!0}}),s(P),s(k),o(L,k),X()}export{Ja as component};
