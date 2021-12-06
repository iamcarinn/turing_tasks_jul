const worker = {
    id: 12,
    name: 'Dmitriy',
    work: () => {
        console.log('I am working')
    },
    rest: () => {
        console.log('I am resting')
    },
}

console.log(worker);
worker.work();
worker.rest();

const remoteWorker = {
    address: 'Moscow, Kremlin'
};

console.log(remoteWorker);
console.log(remoteWorker.name);

remoteWorker.__proto__=worker;

console.log(remoteWorker);
console.log(remoteWorker.name);

function foo() {
    this.num = 10
}

foo.prototype = {
    name: 'John',
}

const fooObj = new foo();

console.log(fooObj.toString());
alert(fooObj);

foo.prototype.toString = function objToString() {
    return `obj transferred to string: ${this.num}`
};

console.log(fooObj.toString());
alert(fooObj);
