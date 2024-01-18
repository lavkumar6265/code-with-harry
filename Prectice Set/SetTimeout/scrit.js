// // let first = document.getElementById('first');

// setTimeout((a,b)=>{
//     console.log(` The sum is ${a+b}`);
// },3000,2,3);

// setTimeout(myFun,4000,'chandu');

// function myFun(str){
//     console.log(`My name is ${str}`);
// }

// myFun('love');

let btn = document.getElementById("stop");

let click = setTimeout(() =>{
    console.log('hello');

},4000);
    setTimeout(()=>{
        console.log("time 6s");
    },6000);

    setTimeout(()=>{
        console.log('time 8s')
    },8000);

btn.addEventListener("click",()=>{
    clearTimeout(click);
})