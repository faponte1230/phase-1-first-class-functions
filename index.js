const receivesAFunction = cb => { console.log(cb())}

const returnsANamedFunction = function fn(){
    return fn
}

function returnsAnAnonymousFunction(){
    return () => {}
}