let arr=[-1,4,0,-5,9,16,-4,81,25];

function Positive(array) {
    let positivearr=[]
    for(i=0;i<array.length;i++) {
        if (array[i]>0) {
            positivearr.push(array[i]);
        }
    }
}



console.log(Positive(arr));
