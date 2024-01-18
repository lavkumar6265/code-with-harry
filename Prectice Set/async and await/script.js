console.log('hello all of you');

async function print(){
    console.log('can i help you');

    setTimeout(()=>{
        console.log('inside the settimeout');
    },5000);
    
    console.log('outside settimeout but inside the function');
}


async function Useawait(){
    try{
        const result = await print();
        console.log('Data fetched : ',result);
    }

    catch(error){
        console.log('Error fetching data : ',error);
    }
}

Useawait();