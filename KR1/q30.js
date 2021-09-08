let arr=[-1,4,0,-5,9,16,-4,81,25];

function Positive(array) {
    let positivearr=[]
    for(let i=0;i<array.length;i++) {
        /*console.log(i)*/
        if (array[i]>0) {
            positivearr.push(Math.sqrt(array[i]));
        }
    }
return positivearr;
}

console.log(Positive(arr));
