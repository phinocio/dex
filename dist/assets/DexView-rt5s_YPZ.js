import{u as B}from"./DexStore-C5PcEheZ.js";import{d as D,c as y,a as c,e,h as v,t as o,u as h,F as g,l as S,x as N,o as l,b as C,y as V}from"./index-CQEE4EVN.js";const E={class:"mb-4 flex items-baseline justify-between"},M={class:"text-2xl font-bold"},F={class:""},L={class:"flex space-x-2 font-bold capitalize text-white"},R={class:"rounded-full bg-pink-500 px-4 py-2"},T={class:"rounded-full bg-pink-500 px-4 py-2"},U={class:"grid grid-cols-1 gap-10 md:grid-cols-2"},q={class:"flex items-center justify-between p-4"},G={class:"text-2xl font-bold"},H=["onClick"],I=["onClick"],J={class:"grid grid-cols-1 md:grid-cols-6"},K=["onClick"],O={class:"text-sm font-bold capitalize"},P=["src","alt"],Q={class:"text-sm font-bold capitalize"},m=30,Z=D({__name:"DexView",setup(W){const w=B(),z=N(),s=w.getDex(z.params.id),$=y(()=>{var i;return(i=s==null?void 0:s.pokemon)==null?void 0:i.reduce((n,d,r)=>{const u=Math.floor(r/m);return n[u]||(n[u]=[]),n[u].push(d),n},[])}),j=y(()=>i=>{var r;const n=i*m+1,d=Math.min((i+1)*m,((r=s==null?void 0:s.pokemon)==null?void 0:r.length)||0);return`${n.toString().padStart(3,"0")}-${d.toString().padStart(3,"0")}`});return(i,n)=>{var d,r,u,p,f,b,k;return l(),c(g,null,[e("header",E,[e("h1",M,[v(o((d=h(s))==null?void 0:d.name)+" ",1),e("small",F,"("+o((u=(r=h(s))==null?void 0:r.pokemon)==null?void 0:u.filter(a=>a.caught).length)+"/"+o((f=(p=h(s))==null?void 0:p.pokemon)==null?void 0:f.length)+")",1)]),e("div",L,[e("p",R,o((b=h(s))==null?void 0:b.game),1),e("p",T,o((k=h(s))==null?void 0:k.type),1)])]),e("div",U,[(l(!0),c(g,null,S($.value,(a,x)=>(l(),c("article",{key:x,class:"rounded-t-xl border border-border-light dark:border-border-dark"},[e("header",q,[e("h2",G,[v(o(j.value(x))+" ",1),e("small",null,"("+o(a.filter(t=>t.caught).length)+"/"+o(a.length)+")",1)]),a.every(t=>t.caught)?C("",!0):(l(),c("button",{key:0,class:"text-pink-500",onClick:t=>a.forEach(_=>_.caught=!0)}," Mark All ",8,H)),a.every(t=>t.caught)?(l(),c("button",{key:1,class:"text-pink-500",onClick:t=>a.forEach(_=>_.caught=!1)}," Unmark All ",8,I)):C("",!0)]),e("section",J,[(l(!0),c(g,null,S(a,t=>(l(),c("div",{key:t.id,class:V(["border border-border-light dark:border-border-dark",{"bg-green-500 text-white":t.caught}])},[e("div",{class:"flex items-center justify-between p-4 md:h-32 md:w-32 md:flex-col md:justify-center",onClick:_=>t.caught=!t.caught},[e("p",O,"#"+o(t.id.toString().padStart(3,"0")),1),e("img",{src:t.sprite,alt:t.name,class:"h-16 w-16"},null,8,P),e("p",Q,o(t.name),1)],8,K)],2))),128))])]))),128))])],64)}}});export{Z as default};
