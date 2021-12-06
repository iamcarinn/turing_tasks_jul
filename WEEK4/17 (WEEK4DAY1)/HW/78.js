const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const randomIntervalGenerator = (min, max) => {
            return Math.round((max - min) * Math.random() + min)
        }
        let num = randomIntervalGenerator(8, 12)
        if (num <= 10) {
            resolve(`Число ${num} удовлетворяет условию`)
        } else {
            reject(new Error(`Число ${num} больше 10`))
        }
    }, 1000)
    });

promise.then(alert);
promise.catch(alert);









/*

    const randomIntervalGenerator = (min, max) => {
        return Math.round((max - min) * Math.random() + min)
    }
    promise.result = randomIntervalGenerator(3,30)
    if (promise.result>10) {
        reject(new Error('Упс, получилось число больше 10' + randomIntervalGenerator))
    } else {
        resolve(randomIntervalGenerator)
    }*/


