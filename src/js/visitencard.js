let visitencard = document.querySelector('#visitencarte-content'); 
let slideDown = document.querySelector('#visitencard_back-open'); 
document.querySelector('#visitencardbtnfront').addEventListener('click', ()=>{
    visitencard.classList.add('turnback');
    slideDown.classList.add('openbackbox'); 
}); 
document.querySelector('#visitencardbtnback').addEventListener('click', ()=>{
    visitencard.classList.remove('turnback');
    slideDown.classList.remove('openbackbox'); 
})