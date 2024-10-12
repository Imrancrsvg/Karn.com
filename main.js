 const barEl =document.querySelector(".icon") 
 
 const  navigationEl=document.querySelector("#small .menu ") 
 
 const closeEL =document.querySelector("#close") 
 
 barEl.addEventListener("click",()=>{
   navigationEl.classList.add("active")
   barEl.classList.add("active")
 })
 
 closeEL.addEventListener("click",()=>{
    navigationEl.classList.remove("active")
 })