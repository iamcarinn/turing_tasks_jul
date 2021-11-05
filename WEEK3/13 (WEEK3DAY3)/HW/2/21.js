let arr1=[1,3,4,5];


function addItem(array,m,n) {
    array.splice(m,0,n);
    console.log(array);
}
addItem(arr1,1, 2);
