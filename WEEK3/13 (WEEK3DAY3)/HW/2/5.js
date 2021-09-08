let arr = [];

for (let i=0; i<=10; i++) {
    arr.push(i);
}

/*/////////////////////////*/
for (let value in arr) {
    console.log(value);
}
/*/////////////////////////*/
for (let value of arr) {
    console.log(value);
}

