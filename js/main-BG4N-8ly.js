(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function m(n,o={}){try{const r=await fetch(n,o);if(!r.ok){const e=r.headers.get("content-type");throw e&&e.includes("application/json")?await r.json():new Error("Unknown error from server")}return await r.json()}catch(r){throw r instanceof Error?r.message:r}}function h(n){let o=document.querySelector("tbody");o&&o.remove();let r=document.querySelector("table"),c=document.createElement("tbody");const e=document.createDocumentFragment();n.forEach(({courseCode:t,courseName:a,progression:u,syllabus:f})=>{const d=document.createElement("tr");[t,a,u].forEach((l,p)=>{const i=document.createElement("td");if(p===0){const s=document.createElement("a");s.innerText=l,s.href=f,s.target="_blank",i.appendChild(s)}else i.innerText=l;d.appendChild(i)}),e.appendChild(d)}),c.appendChild(e),r.appendChild(c)}async function y(){const n=await m("http://localhost:4000/courses/",{method:"GET"});h(n)}y();
