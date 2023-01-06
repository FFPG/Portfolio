document.querySelectorAll(".ffpg-js-project").forEach(project => {
    let modal = project.querySelector('dialog'); 
    project.querySelector('.ffpg-js-modal__open').addEventListener('click', ()=>{
        modal.showModal(); 
    });
    modal.querySelector('.modal-close-btn').addEventListener('click', ()=>{
        modal.close(); 
    });
}); 

console.clear(); 