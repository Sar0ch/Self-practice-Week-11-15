//sync
// console.log("starting...")
// console.log("working...")
// console.log("ending...")

//async
// console.log("starting...")
// setTimeout(() => console.log("working..."), 5000) // มี 2 parameter ตัวนึง (callback function , millisec)
// console.log("ending...")

//promise function
async function doSomething(hasProblem){
    return new Promise((resolve, reject) =>{
        setTimeout(() => (hasProblem ? reject('Fail Working') : resolve('Fully Complete')), 5000)
    })
}

//1) using .then().catch()
// console.log("starting...")
// doSomething(false).then((workingStatus) => {
//     console.log(workingStatus)
//     console.log("ending...")
// }).catch((errorMassage) => {
//     console.log(errorMassage)
// })

//2) async - await
console.log("starting...")
async function runworking(){
    try{
        const workingStatus = await doSomething(true)
        console.log(workingStatus)
        console.log("ending...")
    }
    catch(error){
        console.log(error)
    }
    
    
}

runworking()