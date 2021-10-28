const arr = {
    'Массив в виде таблицы': [
        [1,2,3],
        [4,5,6],
    ]
}


document.querySelector('.content').innerHTML = `<table class="phone"></table>`

for (key in arr) {
    let row = document.createElement('tr')
    row.innerHTML=`<td colspan="2">${key}</td>`
    document.querySelector('.phone').appendChild(row)
    for(let i=0; i<arr[key].length; i++) {
        let row = document.createElement('<tr>')
        row.innerHTML=`
        <td>${arr[key][i][0]}</td>
        <td>${arr[key][i][1]}</td>
        `
        document.querySelector('.phone').appendChild(row)

    }
}



