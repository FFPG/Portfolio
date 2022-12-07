const headlinout = document.querySelector("h1");
const underheadlineout = document.querySelector("#h1subt");
const speed = 70;
let txt1 ="Fabian Grießbach";
let i1 = 0; 
let i2 = 0; 
setTimeout(write, 200);
function write(){
    if(i1<txt1.length)
    {
        headlinout.innerHTML+=txt1.charAt(i1);
        i1++;
        setTimeout(write, speed);
    }
}
