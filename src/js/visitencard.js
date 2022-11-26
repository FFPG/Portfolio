const cardcoo = document.getElementById("visitencarte-content"); 

// visitenkarte back open
const cardbackopen = document.getElementById("visitencard_back-open"); 

//visitenkarte buttons 
    // btn front 
    const vbtn1 = document.getElementById("visitencardbtnfront");    
    vbtn1.addEventListener("click", turntoback);
    vbtn1.addEventListener("touch", turntoback);
    // btn back
    const vbtn2 = document.getElementById("visitencardbtnback");
    vbtn2.addEventListener("click", turntofront);
    vbtn2.addEventListener("touch", turntofront);

// vars --> hat sich die karte schon gedret?
let turnb = 0; 

// functions

function turntoback(){
    // console.log('%c turn to back', 'background-color:green; color:white;');
    turnb = -1;
    visitencardturner();
}

function turntofront(){
    // console.log('%c turn to front', 'background-color:red; color:white;');
    turnb = 1;
    visitencardturner();
}

// controller function

function visitencardturner(){
    switch(turnb){
        case -1:
            // console.log("turning back");
            cardcoo.classList.add("turnback");
            cardbackopen.classList.add("openbackbox");
            break;
        case 1: 
            // console.log("turning front");
            cardcoo.classList.remove("turnback");
            cardbackopen.classList.remove("openbackbox");
            break; 
        case 0: 
            console.warn("visitencarte.js something went wrong"); 
        break; 
    }
}
