const arr = [1,2,3,4];

function count(array) {
    let sum = 0;
    array.forEach(function(item){sum += item})
    return sum;
}

console.log(count(arr));

