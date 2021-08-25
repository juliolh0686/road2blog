const navBotton = document.querySelector(".navbutton");
const navMenu = document.querySelector(".navmenu");

navBotton.addEventListener("click",()=>{
    
    navMenu.classList.toggle("visible");
 
    if(navMenu.classList.contains("nav-menu_visible")){
        navBotton.setAttribute("aria-label","Cerrar Menú");
    }else{
        navBotton.setAttribute("aria-label","Abrir Menú");
    }
 })