
let ans = setInterval(()=>{
    console.log('hello');
    
},2000);

let btn = document.getElementById('btn');

btn.addEventListener("click",()=>{
    clearInterval(ans);
})