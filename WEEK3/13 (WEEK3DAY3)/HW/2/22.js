let foo={
    a:1,
    b: {
        c:2,
    },
}

function cloningFunc(obj) {
    let newFoo=Object.assign({},obj);
    console.log(newFoo);
};


cloningFunc(foo);