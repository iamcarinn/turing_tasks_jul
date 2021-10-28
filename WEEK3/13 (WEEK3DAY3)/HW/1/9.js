
function createCounter () {
    let count=1;
    return() =>count++;
}
const counter=createCounter()
console.log(counter())
console.log(counter())
console.log(counter())

