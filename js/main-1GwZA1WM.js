(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function f(o,n={}){try{const r=await fetch(o,n);if(!r.ok){const e=r.headers.get("content-type");if(e&&e.includes("application/json"))throw await r.json();{const t=await r.text();throw new Error(`Request failed (${r.status}): ${t}`)}}return await r.json()}catch(r){throw r instanceof Error?r.message:r}}async function b(o){try{return await f("https://dt207g-moment1-backend.azurewebsites.net/courses/delete",{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:o})})}catch(n){throw n}}function w(o){let n=document.querySelector("tbody");n&&n.remove();let r=document.querySelector("table"),s=document.createElement("tbody");const e=document.createDocumentFragment();o.forEach(({id:t,courseCode:a,courseName:h,progression:y,syllabus:g})=>{const l=document.createElement("tr");[a,h,y,t.toString()].forEach((u,p)=>{const i=document.createElement("td");if(p===0){const c=document.createElement("a");c.innerText=u,c.href=g,c.target="_blank",i.appendChild(c)}else if(p===3){const c=document.createElement("button");c.addEventListener("click",async()=>{try{const d=await b(t);m(),alert(d.message)}catch(d){console.log(d)}}),c.innerText="X",i.appendChild(c)}else i.innerText=u;l.appendChild(i)}),e.appendChild(l)}),s.appendChild(e),r.appendChild(s)}async function m(){const o=await f("https://dt207g-moment1-backend.azurewebsites.net/courses/",{method:"GET"});w(o)}m();
