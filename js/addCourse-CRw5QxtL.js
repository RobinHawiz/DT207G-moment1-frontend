import{f as y}from"./fetch-data-D9mZ7fd1.js";/* empty css              */const g="https://dt207g-moment1-backend.azurewebsites.net";async function v(t){t.preventDefault();const s=t.target,n=s.querySelector("#course-code"),a=s.querySelector("#course-name"),c=s.querySelector("#progression"),u=s.querySelector("#syllabus"),i=n.value,l=a.value,d=c.value,p=u.value,m={courseCode:i,courseName:l,progression:d,syllabus:p};try{const o=await y(`${g}/courses/insert`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(m)});alert(o.message)}catch(o){o.errors!==void 0?o.errors.slice().reverse().forEach(r=>{switch(r.path){case"courseCode":e(n,r.msg);break;case"courseName":e(a,r.msg);break;case"progression":e(c,r.msg);break;case"syllabus":e(u,r.msg);break}}):console.log(o)}n.addEventListener("input",()=>{e(n,"")}),a.addEventListener("input",()=>{e(a,"")}),c.addEventListener("input",()=>{e(c,"")}),u.addEventListener("input",()=>{e(u,"")})}function e(t,s){t.setCustomValidity(s),t.reportValidity()}const b=document.querySelector("form");b.addEventListener("submit",v);
