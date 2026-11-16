const __saltThemeAsset=(path)=>{const value=String(path);return new URL(value.startsWith("./")?value.slice(2):value,import.meta.url).href};
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-6048945c.js","./index-38fb6a54.js"])))=>i.map(i=>__saltThemeAsset(d[i]));
import{a9 as e}from"./salt-entry-1b94107aa39f.js";import{r as p}from"./index-38fb6a54.js";const i=p("App",{web:()=>e(()=>import("./web-6048945c.js"),__vite__mapDeps([0,1])).then(r=>new r.AppWeb)});export{i as App};
