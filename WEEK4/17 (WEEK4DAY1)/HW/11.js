const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(new Error(`Ошибка`))
    }, 1000)
});

promise.catch(alert);