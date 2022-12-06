// last page carte 
const lastpCard = document.getElementById("lastp-card-e"); 

lastpCard.addEventListener("click", lpsendemail);

//sen e-mail function

function lpsendemail()
{
    window.location = "mailto:fabian.ffpg.03@gmail.com?subject=Web Portfolio&body=Hallo Herr Grießbach,";
}

// section id 
const sectionend = document.getElementById("last-page"); 
// line 1
const textteil1 = document.getElementById("tspan-left-svg1");
const textteil2 = document.getElementById("tspan-left-svg2");
const textteil3 = document.getElementById("tspan-left-svg3");
const textteil4 = document.getElementById("tspan-left-svg4");
const textteil5 = document.getElementById("tspan-left-svg5");
const textteil6 = document.getElementById("tspan-left-svg6");
const textteil7 = document.getElementById("tspan-left-svg7");
const textteil8 = document.getElementById("tspan-left-svg8");
const textteil9 = document.getElementById("tspan-left-svg9");

const textteil11 = document.getElementById("tspan-left-svg11");
const textteil12 = document.getElementById("tspan-left-svg12");
const textteil13 = document.getElementById("tspan-left-svg13");
const textteil14 = document.getElementById("tspan-left-svg14");
const textteil15 = document.getElementById("tspan-left-svg15");
const textteil16 = document.getElementById("tspan-left-svg16");
const textteil17 = document.getElementById("tspan-left-svg17");
const textteil18 = document.getElementById("tspan-left-svg18");
const textteil19 = document.getElementById("tspan-left-svg19");
const textteil20 = document.getElementById("tspan-left-svg20");
const textteil21 = document.getElementById("tspan-left-svg21");
const textteil22 = document.getElementById("tspan-left-svg22");
const textteil23 = document.getElementById("tspan-left-svg23");
const textteil24 = document.getElementById("tspan-left-svg24");

const textleftall = [
    textteil1,
    textteil2,
    textteil3,
    textteil4,
    textteil5,
    textteil6,
    textteil7,
    textteil8,
    textteil9,    
    textteil11,
    textteil12,
    textteil13,
    textteil14,
    textteil15,
    textteil16,
    textteil17,
    textteil18,
    textteil19,
    textteil20,
    textteil21,
    textteil22,
    textteil23,
    textteil24
]

sectionend.addEventListener("mouseenter", lefttxtavl)
var lta = 0;
const remouve = 200;
function lefttxtavl(){    
        
        

    // add
     setTimeout(()=>{textteil1.classList.add("textavline1")},130);
     setTimeout(()=>{textteil2.classList.add("textavline1")},230);
     setTimeout(()=>{textteil3.classList.add("textavline1")},330);
     setTimeout(()=>{textteil4.classList.add("textavline1")},430);
     setTimeout(()=>{textteil5.classList.add("textavline1")},530);
     setTimeout(()=>{textteil6.classList.add("textavline1")},630);
     setTimeout(()=>{textteil7.classList.add("textavline1")},730);
     setTimeout(()=>{textteil8.classList.add("textavline1")},830);
     setTimeout(()=>{textteil9.classList.add("textavline1")},930);    
    setTimeout(()=>{textteil11.classList.add("textavline1")},1130);
    setTimeout(()=>{textteil12.classList.add("textavline1")},1230);
    setTimeout(()=>{textteil13.classList.add("textavline1")},1330);
    setTimeout(()=>{textteil14.classList.add("textavline1")},1430);
    setTimeout(()=>{textteil15.classList.add("textavline1")},1530);
    setTimeout(()=>{textteil16.classList.add("textavline1")},1630);
    setTimeout(()=>{textteil17.classList.add("textavline1")},1730);
    setTimeout(()=>{textteil18.classList.add("textavline1")},1830);
    setTimeout(()=>{textteil19.classList.add("textavline1")},1930);
    setTimeout(()=>{textteil20.classList.add("textavline1")},2030);
    setTimeout(()=>{textteil21.classList.add("textavline1")},2130);
    setTimeout(()=>{textteil22.classList.add("textavline1")},2230);
    setTimeout(()=>{textteil23.classList.add("textavline1")},2330);
    setTimeout(()=>{textteil24.classList.add("textavline1")},2430);
    // remouve
     setTimeout(()=>{textteil1.classList.remove("textavline1")},450);
     setTimeout(()=>{textteil2.classList.remove("textavline1")},550);
     setTimeout(()=>{textteil3.classList.remove("textavline1")},650);
     setTimeout(()=>{textteil4.classList.remove("textavline1")},750);
     setTimeout(()=>{textteil5.classList.remove("textavline1")},850);
     setTimeout(()=>{textteil6.classList.remove("textavline1")},950);
     setTimeout(()=>{textteil7.classList.remove("textavline1")},1050);
     setTimeout(()=>{textteil8.classList.remove("textavline1")},1150);
     setTimeout(()=>{textteil9.classList.remove("textavline1")},1250);
    setTimeout(()=>{textteil11.classList.remove("textavline1")},1450);
    setTimeout(()=>{textteil12.classList.remove("textavline1")},1550);
    setTimeout(()=>{textteil13.classList.remove("textavline1")},1650);
    setTimeout(()=>{textteil14.classList.remove("textavline1")},1750);
    setTimeout(()=>{textteil15.classList.remove("textavline1")},1850);
    setTimeout(()=>{textteil16.classList.remove("textavline1")},1950);
    setTimeout(()=>{textteil17.classList.remove("textavline1")},2050);
    setTimeout(()=>{textteil18.classList.remove("textavline1")},2150);
    setTimeout(()=>{textteil19.classList.remove("textavline1")},2250);
    setTimeout(()=>{textteil20.classList.remove("textavline1")},2350);
    setTimeout(()=>{textteil21.classList.remove("textavline1")},2450);
    setTimeout(()=>{textteil22.classList.remove("textavline1")},2550);
    setTimeout(()=>{textteil23.classList.remove("textavline1")},2650);
    setTimeout(()=>{textteil24.classList.remove("textavline1")},2750);
}

