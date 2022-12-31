
document.querySelector('#visitencardbtnfront').addEventListener('click', ()=>{
    let visitencard = document.querySelector('#visitencarte-content'); 
    let slideDown = document.querySelector('#visitencard_back-open'); 
    visitencard.classList.add('turnback');
    slideDown.classList.add('openbackbox'); 
}); 
document.querySelector('#visitencardbtnback').addEventListener('click', ()=>{
    let visitencard = document.querySelector('#visitencarte-content'); 
    let slideDown = document.querySelector('#visitencard_back-open'); 
    visitencard.classList.remove('turnback');
    slideDown.classList.remove('openbackbox'); 
})

