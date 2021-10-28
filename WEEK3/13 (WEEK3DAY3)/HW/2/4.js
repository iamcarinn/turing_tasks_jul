let obj = {};

obj.name = 'Иван';
obj.lastName = 'Иванов';
obj.salary = '5';

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}