
let mobile_nav = document.querySelector(".icons-div");
const header = document.querySelector(".header")
const toogleBtn = ()=>{
    // alert('kkkk')
    header.classList.toggle("active")
}

mobile_nav.addEventListener('click',()=>toogleBtn())