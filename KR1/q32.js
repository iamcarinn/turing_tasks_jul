let now = new Date();
let end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
let res = Math.floor(end.getTime() - now.getTime() / 1000);
console.log(res)