/*let someGlobalVar=42;

function foo() {
    let strHello='Hello';

    function bar() {
        let strWorld='World';
        console.log(strHello,strWorld);
        console.log('someGlobalVar', someGlobalVar);
    }

    bar()
}*/

/////////////////////////////////

let someStr='Some string'

function logStr() {
    console.log('someStr: ', someStr)
}

function logStrWrapper() {
    let someStr='Some str wrapped'
    console.log('Wrapper someStr: ', someStr)
    logStr()
}

logStrWrapper()



foo()