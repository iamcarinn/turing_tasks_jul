//a) Получим результаты первого выполненного промиса
// (Promise.race)

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка!')), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert);

//b) Получим результаты всех промисов,
// которые выполняются (Promise.all)

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 1000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 3000)),
]).then(alert);

