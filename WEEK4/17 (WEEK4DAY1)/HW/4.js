

const randomIntervalGenerator = (min, max) => {
    return Math.round((max - min) * Math.random() + min)
}

    let promise = new Promise((resolve, reject) =>
        for (let i = 0; i < 20; i++) {
            randomIntervalGenerator(1, 30);
            if (randomIntervalGenerator() > 10)
                reject('Получилосб число больше 10');
}


/*
const randomIntervalGenerator = (min, max) => {
    return Math.round((max - min) * Math.random() + min)
}

for (let i = 0; i < 20; i++) {
    console.log(i, ':', randomIntervalGenerator(3, 10))
}*/
