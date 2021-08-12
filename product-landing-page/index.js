const togglebtn = document.getElementsByClassName('toggler')[0]
const navlinks = document.getElementsByClassName('menu')[0]

navlinks.addEventListener('click',()=>{
    togglebtn.checked=false;
})
