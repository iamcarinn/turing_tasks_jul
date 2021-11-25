let promise = new Promise((resolve,reject) =>
const randomIntervalGenerator = (min, max) => {
    return Math.round((max - min) * Math.random() + min)
}

for (let i = 0; i < 20; i++) {
    console.log(i, ':', randomIntervalGenerator(3, 10))
}
)








const randomIntervalGenerator = (min, max) => {
    return Math.round((max - min) * Math.random() + min)
}

for (let i = 0; i < 20; i++) {
    console.log(i, ':', randomIntervalGenerator(3, 10))
}

