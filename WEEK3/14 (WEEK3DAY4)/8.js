let rus = ['Понедельник', 'Вторник', 'Cреда', 'Четверг', 'Пятница', 'Суббота', 'Вскресенье'];
let eng = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let map = new Map();

eng.forEach((item, index) => map.set(item, rus[index]));

console.log(map);