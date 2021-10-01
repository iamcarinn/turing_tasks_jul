let obj1={
    a:1,
    b:2,
    c:3,
}

function keyVal(obj) {
    for(let key in obj){
        console.log(key,' - ', obj[key])
    }
}

keyVal(obj1);