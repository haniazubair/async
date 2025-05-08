function orderfood() {
    return new Promise ((resolve)=>{
       console.log("orderfood");
       resolve()
    });
}
function cookfood() {
    return new Promise ((resolve)=>{
        console.log("cookfood");
        resolve()
     });

}
function servefood() {
    return new Promise ((resolve)=>{
        console.log("servefood");
        resolve()
     });
}
function eatfood() {
    return new Promise ((resolve)=>{
        console.log("eatfood");
        resolve()
     });
}

async function runname() {
    try {
        await eatfood();
        await servefood();
        await orderfood();
        await cookfood();
    }
    catch (error){
        console.log(error);
    }
    
}
runname();