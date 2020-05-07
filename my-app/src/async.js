const myPromise= new Promise((resolve,reject)=>{
if(false){
    reject('i have failed')

}else{
    
    resolve('i have succeeded')
}


});

myPromise.then(value=>console.log(value)).catch(rejectValue=>console.log(rejectValue))