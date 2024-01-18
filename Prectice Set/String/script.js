// console.log('hello');

// // reverse a string

// let str = "love"

// let reverseStr =  str.split("").reverse().join("");

// console.log(reverseStr);


let str = prompt('Enter value of string');

// let arr = str.slice("");
// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }

function Vowel(){
    let ans = 0;
    for (let i = 0;i<str.length;i++) {
        
       if(str[i]==='a' || str[i]==='i' || str[i] === 'o' || str[i]=== 'u' || str[i]==='e'){
            ans++;
       }
    }
    return ans;
   
}

console.log(Vowel(str));

// console.log(typeof (str));

// let str1 = 'love';
// console.log(str1);
// str1 = 'ajju';

// console.log(str1);
