let n=11;

if (typeof n==='number') {
    alert('number');
} else if (typeof n==='string') {
    alert('string');
} else if (typeof n==='undefined') {
    alert('undefined');
} else if  (typeof n==='null') {
    alert('null');
} else if (typeof n==='boolean') {
    alert('boolean');
}

///////////////////////////////////////////////


/*
let a=prompt('Введите номер пункта, тип которого вы хотите узнать, а я подскажу!\n'+
    'a. 11\n' +
    'b. “Hello”\n' +
    'c. { a: 1 }\n' +
    'd. null\n' +
    'e. false\n')

if (a==='a') {
    alert(`11 имеет числовой тип (number)`)
} else {
    if (a==='b') {
        alert(`'Hello' имеет строковый тип (string)`)
    } else {
        if (a==='c') {
            alert(`{ a: 1 } имеет тип undefined`)
        } else {
            if (a==='d') {
                alert(`null имеет тип null`)
            } else {
                if (a==='e') {
                    alert(`false имеет логический/булевый тип (boolean)`)
                }
            }
        }
    }
}
*/
