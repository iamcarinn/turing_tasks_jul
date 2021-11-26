const testFunc = () => {
    console.log('iFrame loaded')
};

const errorFunc = () => {
    console.log('Error on iframe')
}; // ловит ошибки в JS, а если не подгрузился файл, то и нечего ловить
// у нас ошибка не вызывается