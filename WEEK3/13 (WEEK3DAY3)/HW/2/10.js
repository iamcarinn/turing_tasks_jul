//Находим элемент в разметке
const content = document.querySelector('.content');

//Создаем новый элемент-таблицу
const table = document.createElement('table');

//Добавляем таблицу внутрь блока content
content.append(table);

//Создаем матрицу
for (let i=0; i<2; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < 3; j++) {
        let td = document.createElement('td');
        //Получаем рандомное число от 0 до 10
        td.textContent = String(Math.floor(Math.random() * 10));
        tr.append(td);
    }

    table.append(tr);
};


