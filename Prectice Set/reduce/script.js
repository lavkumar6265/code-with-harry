const numbers = [1,2,3,4,5];

// console.log(numbers.reduce(sum,0));

let ans = numbers.reduce(sum,0);
console.log(ans);

function sum(total,num){
    return total+num;
}
