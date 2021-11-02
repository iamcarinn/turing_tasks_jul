let panda = {
    nutrition: 'plants',
};

function Animals() {
    this.age = 'adult';
}
let rabbit = new Animals();
rabbit.__proto__ = panda;

console.log('rabbit nutrition:',rabbit.nutrition);
