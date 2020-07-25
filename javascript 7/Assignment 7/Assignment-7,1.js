    console.log("Assignment 7");


const ctime = document.getElementById("time")
function clock(){
    let date =new Date();
    let time = date.toLocaleString();
    
    ctime.innerText = time;
}
// clock()
setInterval(clock,1000)


const name = prompt("...Enter Your Name...","Annoymous");

c_name.innerText += `I Welcome You ${name} in my family and i hope that you will enjoy my family company....`;