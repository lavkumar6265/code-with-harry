// let arr = [11,22,33,44];

// let arr1 = arr.map(add);

// console.log(arr1);
// console.log(arr);


// function add(arr3,index){
//     console.log("hello");
//     console.log("my name is");

//     console.log(arr3*10);
//     console.log(index);   
// }

let arr = [
    {name:"love",age:20,from:"Bhopal"},
    {name:"chandu",age:21,from:"Balaghat"},
    {name:"ajju",age:22,from:"Bilai"},
]

let newArr = arr.map(print);

function print(data1){
    console.log(data1.name);
    console.log(data1.age);
    console.log(data1.from);
}