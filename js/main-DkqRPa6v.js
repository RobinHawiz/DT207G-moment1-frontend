(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();class m{constructor(t=[]){this.list=t}getDataList(){return[...this.list]}addItem(t){this.list.push(t)}}async function f(a,t={}){try{const r=await fetch(a,t);if(!r.ok)throw new Error(`Network error: ${r.status}`);return await r.json()}catch(r){throw new Error(`Fetch error: ${r.message}`)}}function y(a){let t=document.querySelector("tbody");t&&t.remove();let r=document.querySelector("table"),n=document.createElement("tbody");const e=document.createDocumentFragment();a.forEach(({courseCode:o,courseName:s,progression:c,syllabus:i})=>{const l=document.createElement("tr");[o,s,c].forEach((u,h)=>{const p=document.createElement("td");if(h===0){const d=document.createElement("a");d.innerText=u,d.href=i,d.target="_blank",p.appendChild(d)}else p.innerText=u;l.appendChild(p)}),e.appendChild(l)}),n.appendChild(e),r.appendChild(n)}function g(a){const t=document.querySelector("form");t.addEventListener("submit",e);const r=t.querySelector("#course-code"),n=t.querySelector("#progression");r.addEventListener("input",()=>{o(r,"")}),n.addEventListener("input",()=>{o(n,"")});async function e(s){s.preventDefault();const c=new m(await f("http://localhost:4000/courses/",{method:"GET"}));let i=!0,l=c.getDataList().find(({courseCode:u})=>u===r.value);l&&(o(r,"Kurskoden finns redan. Var vänlig och ange en unik kurskod."),i=!1),!l&&!["A","B","C"].includes(n.value)&&(o(n,"Felaktig progression. Var vänlig och ange en korrekt progression: A, B eller C."),i=!1),i&&a(s)}function o(s,c){s.setCustomValidity(c),s.reportValidity()}}async function v(a){const t=a.target,r=t.querySelector("#course-code"),n=t.querySelector("#course-name"),e=t.querySelector("#progression"),o=r.value,s=n.value,c=e.value,u=await f("http://localhost:4000/courses/insert",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({courseCode:o,courseName:s,progression:c,syllabus:"https://www.youtube.com/watch?v=WIRK_pGdIdA&list=PLpQpolEIRhPtKIte1nTmjYcJCriNwj20L&ab_channel=doober43"})});alert(u.message)}async function w(){const a=new m(await f("http://localhost:4000/courses/",{method:"GET"}));y(a.getDataList()),g(v)}w();
