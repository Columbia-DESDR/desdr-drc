import{S as J,i as K,s as N,e as i,a as v,c as a,b as d,d as e,f,g as n,h as O,j as t,n as A,k as Q,l as R,o as U}from"./index.6651d26c.js";import{l as W,r as X,M as Y,C as Z,a as tt,B as et,b as G}from"./http_client.f450f176.js";function it(M){let o,h,u,I,E,D,s,p,c,V,B,_,H,b,S,r,x,j,C,q,w,P,y,T,k,z,L;return{c(){o=i("div"),h=i("div"),u=i("div"),I=v(),E=i("div"),D=v(),s=i("div"),p=i("div"),c=v(),V=i("div"),B=v(),_=i("div"),H=v(),b=i("div"),S=v(),r=i("div"),x=i("div"),j=v(),C=i("div"),q=v(),w=i("div"),P=v(),y=i("div"),T=v(),k=i("div"),z=v(),L=i("div"),this.h()},l($){o=a($,"DIV",{class:!0});var g=d(o);h=a(g,"DIV",{class:!0});var F=d(h);u=a(F,"DIV",{id:!0}),d(u).forEach(e),I=f(F),E=a(F,"DIV",{id:!0}),d(E).forEach(e),F.forEach(e),D=f(g),s=a(g,"DIV",{});var m=d(s);p=a(m,"DIV",{id:!0}),d(p).forEach(e),c=f(m),V=a(m,"DIV",{id:!0}),d(V).forEach(e),B=f(m),_=a(m,"DIV",{id:!0}),d(_).forEach(e),H=f(m),b=a(m,"DIV",{id:!0}),d(b).forEach(e),m.forEach(e),S=f(g),r=a(g,"DIV",{});var l=d(r);x=a(l,"DIV",{id:!0}),d(x).forEach(e),j=f(l),C=a(l,"DIV",{id:!0}),d(C).forEach(e),q=f(l),w=a(l,"DIV",{id:!0}),d(w).forEach(e),P=f(l),y=a(l,"DIV",{id:!0}),d(y).forEach(e),T=f(l),k=a(l,"DIV",{id:!0}),d(k).forEach(e),z=f(l),L=a(l,"DIV",{id:!0}),d(L).forEach(e),l.forEach(e),g.forEach(e),this.h()},h(){n(u,"id","login"),n(E,"id","dd-territory"),n(h,"class","col-span-1"),n(p,"id","clim-chart"),n(V,"id","season-buttons"),n(_,"id","crop-buttons"),n(b,"id","crop-chart"),n(x,"id","prep-slider"),n(C,"id","planting-slider"),n(w,"id","flowering-slider"),n(y,"id","tasseling-slider"),n(k,"id","harvesting-slider"),n(L,"id","rain-slider"),n(o,"class","grid grid-cols-1")},m($,g){O($,o,g),t(o,h),t(h,u),t(h,I),t(h,E),t(o,D),t(o,s),t(s,p),t(s,c),t(s,V),t(s,B),t(s,_),t(s,H),t(s,b),t(o,S),t(o,r),t(r,x),t(r,j),t(r,C),t(r,q),t(r,w),t(r,P),t(r,y),t(r,T),t(r,k),t(r,z),t(r,L)},p:A,i:A,o:A,d($){$&&e(o)}}}function at(M,o,h){let u;Q(M,G,c=>h(1,u=c));let I=tt;const E=new I("https://rightful-anteater-150.convex.cloud");let D=W(X,"utf8");console.log(D),R(G,u=new et,u);let s=new Y(u),p;return U(async()=>{(D.views??[]).forEach(c=>{c.type==="Login"&&(c.magic=s,c.exportFunc="saveToConvex",c.importFunc="getFromConvex",c.client=E)}),p=new Z(s,D),await p.init()}),[]}class ot extends J{constructor(o){super(),K(this,o,at,it,N,{})}}export{ot as default};
