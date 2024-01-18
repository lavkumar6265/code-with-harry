// let newPromise = new Promise(function(myResolve,myReject){
//     let x = 0;

//     if(x==0){
//         myResolve("ok");
//     }
//     else{
//         myReject("Error");
//     }
// });

// function myResolve(str){
//     console.log(str);
// }

// function myReject(str){
//     console.log(str);
// }

// newPromise.then()


const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const success = true; // Simulating a successful operation
      if (success) {
        resolve("Operation succeeded!");
      } else {
        reject("Operation failed!");
      }
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
  });
  
  // Using the Promise
  myPromise
    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  