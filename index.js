
function receivesAFunction(callback) {
   
    callback();
}


function returnsANamedFunction() {
    
   const fn = function intro() {
        console.log("My name is Mayar")
    }

    return fn;

    
}


function returnsAnAnonymousFunction() {

    return (function () {
        console.log('before all');
    });
}

