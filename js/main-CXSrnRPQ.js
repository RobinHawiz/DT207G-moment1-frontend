import{f as m}from"./fetch-data-LGYCcCCR.js";const b="https://dt207g-moment1-backend.azurewebsites.net";async function g(t){try{return await m(`${b}/courses/delete`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:t})})}catch(n){throw n}}function C(t){let n=document.querySelector("tbody");n&&n.remove();let u=document.querySelector("table"),c=document.createElement("tbody");const r=document.createDocumentFragment();t.forEach(({id:s,courseCode:h,courseName:y,progression:f,syllabus:E})=>{const d=document.createElement("tr");[h,y,f,s.toString()].forEach((i,l)=>{const o=document.createElement("td");if(l===0){const e=document.createElement("a");e.innerText=i,e.href=E,e.target="_blank",o.appendChild(e)}else if(l===3){const e=document.createElement("button");e.addEventListener("click",async()=>{try{const a=await g(s);p(),alert(a.message)}catch(a){console.log(a)}}),e.innerText="X",o.appendChild(e)}else o.innerText=i;d.appendChild(o)}),r.appendChild(d)}),c.appendChild(r),u.appendChild(c)}const T="https://dt207g-moment1-backend.azurewebsites.net";async function p(){const t=await m(`${T}/courses`,{method:"GET"});C(t)}p();
