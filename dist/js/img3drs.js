// bilder erst laden wenn section in sichtfeld von benutzer --> performens gründe 

//bilder 

const img1 = document.getElementById("b3dimgr1");
const img2 = document.getElementById("b3dimgr2");
const img3 = document.getElementById("b3dimgr3");
const img4 = document.getElementById("b3dimgr4");
const img5 = document.getElementById("b3dimgr5");
const img6 = document.getElementById("b3dimgr6");
const img7 = document.getElementById("b3dimgr7");
const img8 = document.getElementById("b3dimgr8");
const img9 = document.getElementById("b3dimgr9");
const img10 = document.getElementById("b3dimgr10");

// imgs btns 
const photoshopimg = document.getElementById("photoshop-img");
const illustratorimg = document.getElementById("illustrator-img");
const indesignimg = document.getElementById("indesign-img");
const blenderimg = document.getElementById("blender-img");

// section of 3d img rotation 
const secimgbx = document.getElementById("img3drotation"); 
// secimgbx.addEventListener("click", loaderotationd);
let r = false; 

//var number of thema
let ntm = 1; 


//Buttons 
    //Photoshop
    const btn1 = document.getElementById("sec2navbtn1");
    btn1.addEventListener("click", imgphotoshop); 
    btn1.addEventListener("touch", imgphotoshop); 

    //illustrator
    const btn2 = document.getElementById("sec2navbtn2");
    btn2.addEventListener("click", imgillustrator); 
    btn2.addEventListener("touch", imgillustrator); 

    //Indesign
    const btn3 = document.getElementById("sec2navbtn3");
    btn3.addEventListener("click", imgindesign); 
    btn3.addEventListener("touch", imgindesign); 

    //Blender
    const btn4 = document.getElementById("sec2navbtn4");
    btn4.addEventListener("click", imgblender);
    btn4.addEventListener("touch", imgblender);
    
//img arrays 
    // photoshop array 
    const imgph = [
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild1.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild2.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild3.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild4.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild5.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild6.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild7.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild8.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild9.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild10.webp"
    ];
    // illustrator array 
    const imgill =[
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild1.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild2.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild3.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild4.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild5.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild6.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild7.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild8.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild9.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild10.webp"
    ]; 
    // indesign array 
    const imgind =[
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild1.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild2.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild3.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild4.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild5.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild6.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild7.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild8.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild9.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild10.webp"
    ]; 
    // blender array 
    const imgble = [
        "./dist/images/mediendesign-bilder/Blender-imgs/bild1.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild2.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild3.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild4.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild5.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild6.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild7.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild8.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild9.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild10.webp"
    ];
    // all imgs 
    const imgall = [
        //Photoshop
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild1.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild2.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild3.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild4.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild5.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild6.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild7.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild8.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild9.webp",
        "./dist/images/mediendesign-bilder/Photoshop-imgs/bild10.webp",
        //illustrator
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild1.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild2.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild3.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild4.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild5.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild6.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild7.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild8.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild9.webp",
        "./dist/images/mediendesign-bilder/Illustrator-imgs/bild10.webp",
        //indesign
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild1.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild2.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild3.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild4.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild5.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild6.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild7.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild8.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild9.webp",
        "./dist/images/mediendesign-bilder/Indesign-imgs/bild10.webp",
        //blender
        "./dist/images/mediendesign-bilder/Blender-imgs/bild1.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild2.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild3.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild4.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild5.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild6.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild7.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild8.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild9.webp",
        "./dist/images/mediendesign-bilder/Blender-imgs/bild10.webp"

    ];
// defuld  
        // img1.src=imgall[Math.floor(Math.random()*imgall.length)+1]
        // img2.src=imgall[Math.floor(Math.random()*imgall.length)+1]
        // img3.src=imgall[Math.floor(Math.random()*imgall.length)+1]
        // img4.src=imgall[Math.floor(Math.random()*imgall.length)+1]
        // img5.src=imgall[Math.floor(Math.random()*imgall.length)+1]
        // img6.src=imgall[Math.floor(Math.random()*imgall.length)+1]
        // img7.src=imgall[Math.floor(Math.random()*imgall.length)+1]
        // img8.src=imgall[Math.floor(Math.random()*imgall.length)+1]
        // img9.src=imgall[Math.floor(Math.random()*imgall.length)+1]
        // img10.src=imgall[Math.floor(Math.random()*imgall.length)+1]




// change to chategory


function imgphotoshop()
{
    //var number of thema
    ntm = 1; 
    // toggle active
    photoshopimg.classList.add("sec-co-nav-btn-img-active-th");
    illustratorimg.classList.remove("sec-co-nav-btn-img-active-th");
    indesignimg.classList.remove("sec-co-nav-btn-img-active-th");
    blenderimg.classList.remove("sec-co-nav-btn-img-active-th");
    //img change
    img1.src = imgph[0]; 
    img2.src = imgph[1]; 
    img3.src = imgph[2]; 
    img4.src = imgph[3]; 
    img5.src = imgph[4]; 
    img6.src = imgph[5]; 
    img7.src = imgph[6]; 
    img8.src = imgph[7]; 
    img9.src = imgph[8]; 
    img10.src = imgph[9]; 
}

function imgillustrator()
{  
    //var number of thema
    ntm = 2; 
    // toggle active
    photoshopimg.classList.remove("sec-co-nav-btn-img-active-th");
    illustratorimg.classList.add("sec-co-nav-btn-img-active-th");
    indesignimg.classList.remove("sec-co-nav-btn-img-active-th");
    blenderimg.classList.remove("sec-co-nav-btn-img-active-th");
    //img change
    img1.src = imgill[0]; 
    img2.src = imgill[1]; 
    img3.src = imgill[2]; 
    img4.src = imgill[3]; 
    img5.src = imgill[4]; 
    img6.src = imgill[5]; 
    img7.src = imgill[6]; 
    img8.src = imgill[7]; 
    img9.src = imgill[8]; 
    img10.src = imgill[9]; 

}

function imgindesign()
{
    //var number of thema
    ntm = 3; 
    // toggle active
    photoshopimg.classList.remove("sec-co-nav-btn-img-active-th");
    illustratorimg.classList.remove("sec-co-nav-btn-img-active-th");
    indesignimg.classList.add("sec-co-nav-btn-img-active-th");
    blenderimg.classList.remove("sec-co-nav-btn-img-active-th");
    //img change
    img1.src = imgind[0]; 
    img2.src = imgind[1]; 
    img3.src = imgind[2]; 
    img4.src = imgind[3]; 
    img5.src = imgind[4]; 
    img6.src = imgind[5]; 
    img7.src = imgind[6]; 
    img8.src = imgind[7]; 
    img9.src = imgind[8]; 
    img10.src = imgind[9]; 
}

function imgblender()
{
    //var number of thema
    ntm = 4; 
    // toggle active
    photoshopimg.classList.remove("sec-co-nav-btn-img-active-th");
    illustratorimg.classList.remove("sec-co-nav-btn-img-active-th");
    indesignimg.classList.remove("sec-co-nav-btn-img-active-th");
    blenderimg.classList.add("sec-co-nav-btn-img-active-th");
    //img change
    img1.src = imgble[0]; 
    img2.src = imgble[1]; 
    img3.src = imgble[2]; 
    img4.src = imgble[3]; 
    img5.src = imgble[4]; 
    img6.src = imgble[5]; 
    img7.src = imgble[6]; 
    img8.src = imgble[7]; 
    img9.src = imgble[8]; 
    img10.src = imgble[9]; 
}

// open img 
let imgn = 0;
let dmimgn = 0; 

img1.addEventListener("click", ()=>{
    imgn = img1.src;
    dmimgn =0; 
    questopenimg()
}) 
img2.addEventListener("click", ()=>{
    imgn = img2.src;
    dmimgn =1; 
    questopenimg()
}) 
img3.addEventListener("click", ()=>{
    imgn = img3.src;
    dmimgn =2;
    questopenimg()
}) 
img4.addEventListener("click", ()=>{
    imgn = img4.src;
    dmimgn =3;
    questopenimg()
}) 
img5.addEventListener("click", ()=>{
    imgn = img5.src;
    dmimgn =4;
    questopenimg()
}) 
img6.addEventListener("click", ()=>{
    imgn = img6.src; 
    dmimgn =5;
    questopenimg()
}) 
img7.addEventListener("click", ()=>{
    imgn = img7.src;
    dmimgn =6;
    questopenimg()
}) 
img8.addEventListener("click", ()=>{
    imgn = img8.src;
    dmimgn =7;
    questopenimg()
}) 
img9.addEventListener("click", ()=>{
    imgn = img9.src;
    dmimgn =8;
    questopenimg()
}) 
img10.addEventListener("click", ()=>{
    imgn = img10.src; 
    dmimgn = 9;
    questopenimg()
}) 


function questopenimg() {
let scwidht = screen.width; 
if(scwidht < 600){
    
} else{
        d3turinfomodalop();
}}

//3d modal info 
const dmodal = document.getElementById("d-modal");
const dmodalh2 = document.getElementById("d-modal-h2");
const dmodaltext = document.getElementById("d-modal-text");
const dmodalimgopen = document.getElementById("d-modal-openimg"); 
const dmodalclose = document.getElementById("d-modal-close"); 
//photoshop content
const dmodalph = [
    {h2:"Baum unter Sternen", text:"Dieses kleine Projekt habe ich erstellt, um verschiedene Photoshop-Filter auszuprobieren. <br> Das momentan angezeigte Bild, ist das Bild vor der Bearbeitung."},
    {h2:"Baum unter Sternen", text:"Dieses kleine Projekt habe ich erstellt, um verschiedene Photoshop-Filter auszuprobieren. <br> Das momentan angezeigte Bild, ist das Bild nach der Bearbeitung."},
    {h2:"Glaskugel", text:"Bei diesem Projekt habe ich versucht, ein Bild, das ich im Internet gesehen habe, nachzuahmen. <br> Das momentan angezeigte Bild, ist das Bild vor der Bearbeitung."},
    {h2:"Glaskugel", text:"Bei diesem Projekt habe ich versucht, ein Bild, das ich im Internet gesehen habe, nachzuahmen. <br> Das momentan angezeigte Bild, ist das Bild nach der Bearbeitung."},
    {h2:"Tiere im Wald", text:"Bei diesem Projekt war die Aufgabenstellung, verschiedene Tiere möglichst realistisch in den Wald einzufügen. <br> Das momentan angezeigte Bild, ist das Bild vor der Bearbeitung."},
    {h2:"Tiere im Wald", text:"Bei diesem Projekt war die Aufgabenstellung, verschiedene Tiere möglichst realistisch in den Wald einzufügen. <br> Das momentan angezeigte Bild, ist das Bild nach der Bearbeitung."},
    {h2:"Berge Composing", text:"Die Aufgabe bei diesem Projekt war es, eine Szene aus verschiedenen Bildern zusammenzufügen. <br> Das momentan angezeigte Bild, ist das Bild vor der Bearbeitung."},
    {h2:"Berge Composing", text:"Die Aufgabe bei diesem Projekt war es, eine Szene aus verschiedenen Bildern zusammenzufügen. <br> Das momentan angezeigte Bild, ist das Bild nach der Bearbeitung."},
    {h2:"Astronaut", text:"Diese Projekt war die abschließenede Aufgabe [Schule] im Thema Photoshop. Das Ziel war es, verschiedenste Objekte, so einzufügen, dass das Composing der Vorlage so ähnlich wie möglich entspricht. <br> Das momentan angezeigte Bild, ist das Bild vor der Bearbeitung."},
    {h2:"Astronaut", text:"Diese Projekt war die abschließenede Aufgabe [Schule] im Thema Photoshop. Das Ziel war es, verschiedenste Objekte, so einzufügen, dass das Composing der Vorlage so ähnlich wie möglich entspricht. <br> Das momentan angezeigte Bild, ist das Bild nach der Bearbeitung."}
]; 
// illustrator content
const dmodalill = [
    {h2:"Cola-Dose", text:"Dieses Projekt habe ich privat erstellt, um die Möglichkeiten und Funktionen von Illustrator kennen zu lernen. "},
    {h2:"Ford Fiesta", text:"Dieses Projekt  habe ich privat erstellt, um die Möglichkeiten und Funktionen von Illustrator kennen zu lernen."},
    {h2:"Wüste", text:"Dieses Projekt war eine Übungsaufgabe [Schule], um Illustrator kennen zu lernen. Aufgabe war es, das vorgegebene Bild so gut wie möglich nachzuahmen."},
    {h2:"Icons", text:"Dieses Projekt war eine Übungsaufgabe [Schule], um meine Fähigkeiten in Illustrator zu verbessern. Das Ziel war es die Vorlage so detailgetreu wie möglich nachzubauen."},
    {h2:"Icons", text:"Dieses Projekt war eine Übungsaufgabe [Schule], um meine Fähigkeiten in Illustrator zu verbessern. Das Ziel war es die Vorlage so detailgetreu wie möglich nachzubauen."},
    {h2:"Plakat", text:"In dieser Übung ging es darum, die Schrift so zu verändern, dass sie zum Thema des Plakates passt."},
    {h2:"BMW Logo", text:"Das BMW Logo war eine bewertete [Schule] Aufgabe in der es darum ging, das BMW Logo so detailgetreu wie möglich nachzubauen."},
    {h2:"Uhr", text:"Die Uhr war die Abschlussarbeit [Schule] von dem Thema Illustrator. Die Aufgabe war es, die Uhr mit all ihren Elemeneten in Illustrator nachzubauen, so realistisch wie möglich."},
    {h2:"Uhr", text:"Die Uhr war die Abschlussarbeit [Schule] von dem Thema Illustrator. Die Aufgabe war es, die Uhr mit all ihren Elemeneten in Illustrator nachzubauen, so realistisch wie möglich."},
    {h2:"Uhr", text:"Die Uhr war die Abschlussarbeit [Schule] von dem Thema Illustrator. Die Aufgabe war es, die Uhr mit all ihren Elemeneten in Illustrator nachzubauen, so realistisch wie möglich."}
]; 
// indesign content
const dmodalind = [
    {h2:"Kalender", text:"Die Aufgabe von diesem Projekt war es, einen Kalender zu erstellen. Wichtig war, dass man die Mondphasen und die Feiertage ablesen kann."},
    {h2:"Kalender", text:"Die Aufgabe von diesem Projekt war es, einen Kalender zu erstellen. Wichtig war, dass man die Mondphasen und die Feiertage ablesen kann."},
    {h2:"Kalender", text:"Die Aufgabe von diesem Projekt war es, einen Kalender zu erstellen. Wichtig war, dass man die Mondphasen und die Feiertage ablesen kann."},
    {h2:"Cooperate Design", text:"Im Projekt Cooperate Design war es die Aufgabe, zu einer selbst ausgedachten Firma ein Cooperate Design Manual zu erstellen. Wichtig war es, eine gegeignete Hausschrift herauszusuchen, ein Logo mit Bild und Wortmarke zu entwerfen, eine Visitenkarte, einen Briefkopf, eine Bilderwelt und ein Mockup zu erstellen."},
    {h2:"Cooperate Design", text:"Im Projekt Cooperate Design war es die Aufgabe, zu einer selbst ausgedachten Firma ein Cooperate Design Manual zu erstellen. Wichtig war es, eine gegeignete Hausschrift herauszusuchen, ein Logo mit Bild und Wortmarke zu entwerfen, eine Visitenkarte, einen Briefkopf, eine Bilderwelt und ein Mockup zu erstellen."},
    {h2:"Cooperate Design", text:"Im Projekt Cooperate Design war es die Aufgabe, zu einer selbst ausgedachten Firma ein Cooperate Design Manual zu erstellen. Wichtig war es, eine gegeignete Hausschrift herauszusuchen, ein Logo mit Bild und Wortmarke zu entwerfen, eine Visitenkarte, einen Briefkopf, eine Bilderwelt und ein Mockup zu erstellen."},
    {h2:"Cooperate Design", text:"Im Projekt Cooperate Design war es die Aufgabe, zu einer selbst ausgedachten Firma ein Cooperate Design Manual zu erstellen. Wichtig war es, eine gegeignete Hausschrift herauszusuchen, ein Logo mit Bild und Wortmarke zu entwerfen, eine Visitenkarte, einen Briefkopf, eine Bilderwelt und ein Mockup zu erstellen."},
    {h2:"Cooperate Design", text:"Im Projekt Cooperate Design war es die Aufgabe, zu einer selbst ausgedachten Firma ein Cooperate Design Manual zu erstellen. Wichtig war es, eine gegeignete Hausschrift herauszusuchen, ein Logo mit Bild und Wortmarke zu entwerfen, eine Visitenkarte, einen Briefkopf, eine Bilderwelt und ein Mockup zu erstellen."},
    {h2:"Cooperate Design", text:"Im Projekt Cooperate Design war es die Aufgabe, zu einer selbst ausgedachten Firma ein Cooperate Design Manual zu erstellen. Wichtig war es, eine gegeignete Hausschrift herauszusuchen, ein Logo mit Bild und Wortmarke zu entwerfen, eine Visitenkarte, einen Briefkopf, eine Bilderwelt und ein Mockup zu erstellen."},
    {h2:"Broschüre", text:"Bei diesem Projekt war es die Aufgabe, eine Broschüre mit gegebenem Inhalt zu erstellen. Wichtig war es, dass die Schriftart an das Thema angepasst ist, der Flattersatz stimmt und die Bilder richtig eingebettet werden."}
]; 
// blender content
const dmodalblen = [
    {h2:"Text Animation", text:"Das ist mein erster Versuch in Blender eine Textanimation zu erstellen. Der Text erscheint in dieser Animation aus dem Boden."},
    {h2:"Licht und Schatten", text:"Das sind meine ersten Experimente mit Licht und Schatten in Blender."},
    {h2:"Flummi", text:"In diesem kleinen Projekt habe ich versucht die Kugel in einer Animation zum Springen zu bringen."},
    {h2:"Zahnbürste", text:"Die Zahnbürste habe ich im Laufe des Unterrichts erstellt."},
    {h2:"Kamerafahrt", text:"Um mich mehr mit Blender vertraut zu machen, habe ich versucht eine Kamerafahrt durch eine selbst erstellte Welt zu animieren."},
    {h2:"Schalter", text:"Der Schalter war das Hauptprojekt im Unterricht. Anhand von diesem Beispiel wurden die Grundlagen von Blender und die Arbeit mit einem 3D Programm beigebracht."},
    {h2:"Schalter", text:"Der Schalter war das Hauptprojekt im Unterricht. Anhand von diesem Beispiel wurden die Grundlagen von Blender und die Arbeit mit einem 3D Programm beigebracht."},
    {h2:"Schalter", text:"Der Schalter war das Hauptprojekt im Unterricht. Anhand von diesem Beispiel wurden die Grundlagen von Blender und die Arbeit mit einem 3D Programm beigebracht."},
    {h2:"Schalter", text:"Der Schalter war das Hauptprojekt im Unterricht. Anhand von diesem Beispiel wurden die Grundlagen von Blender und die Arbeit mit einem 3D Programm beigebracht."},
    {h2:"Schalter", text:"Der Schalter war das Hauptprojekt im Unterricht. Anhand von diesem Beispiel wurden die Grundlagen von Blender und die Arbeit mit einem 3D Programm beigebracht."}
]; 

dmodalimgopen.addEventListener("click", ()=>{open(imgn)});
dmodalclose.addEventListener("click", ()=>{dmodal.close()});

function d3turinfomodalop()
{
    dmodal.showModal(); 
    switch(ntm)
    {
        case 1:
            dmodalh2.innerHTML = dmodalph[dmimgn].h2; 
            dmodaltext.innerHTML = dmodalph[dmimgn].text; 
            break; 
        case 2: 
            dmodalh2.innerHTML = dmodalill[dmimgn].h2; 
            dmodaltext.innerHTML = dmodalill[dmimgn].text; 
            break; 
        case 3: 
            dmodalh2.innerHTML = dmodalind[dmimgn].h2; 
            dmodaltext.innerHTML = dmodalind[dmimgn].text; 
            break; 
        case 4: 
            dmodalh2.innerHTML = dmodalblen[dmimgn].h2; 
            dmodaltext.innerHTML = dmodalblen[dmimgn].text; 
            break; 
    }
}

console.clear(); 