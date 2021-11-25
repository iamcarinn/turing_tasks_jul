let myPromise = new Promise(
    resolve => setTimeout(() => resolve('done'), 3000)
)

myPromise.then(alert)