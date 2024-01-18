let a = document.querySelector('.navbar');

let btn = document.getElementById('menu2');

let menu1 = document.querySelector('.menu1');


// btn.addEventListener("click",()=>{
//     a.style.display = 'flex';
// })

btn.addEventListener("click",()=>{
    a.classList.add('active');
    menu1.style.display = 'none';
    menu4.style.display = 'flex';

})

let menu4 = document.querySelector('.menu4');

menu4.addEventListener("click",()=>{
    a.classList.remove('active');
    menu1.style.display = 'flex';
    menu4.style.display = 'none';
})