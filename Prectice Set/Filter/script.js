let arr = [1,2,3,4,5]

// let ans = arr.filter(num => num%2==0);

// let ans = arr.filter(print);

// function print(num){
//     console.log("hello how are you guys");
//     console.log(num*10)
//     return num%2==0;
// }

// console.log(ans);
// console.log(arr);

let ans = 0;

let arr1 = arr.forEach(sum);

function sum(indexValue) {
    ans += indexValue;
}

console.log(ans);
