let arr = [1,2,3,4,5,8];
let arr2 = [3,4,7,8,];

function commonElement(arr,arr2){
    let ans = [];
    for(let i = 0; i<arr.length;i++){
    
        for(let j = 0;j<arr2.length;j++){
            if(arr[i]==arr2[j]){
                ans.push(arr[i]);
            }
        }
    }
    return ans;
}

console.log(commonElement(arr,arr2));