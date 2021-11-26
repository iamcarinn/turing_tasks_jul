console.log('[]+[]:',[]+[]);
console.log('[10]+[1]:',[10]+[1]);
console.log('[]-[]:',[]-[]);
console.log('+[]:',+[]);
console.log('+{}:',+{});
console.log('{}+{}:',{}+{});
// {} не имеет числового значения, поэтому он дает NaN.
// Если вы заставите его вычисляться как выражение типа ({} + {}),
// вы получите [object Object][object Object]
console.log('{}-{}:',{}-{});
console.log('!{}:',!{});
console.log('[]==[]:',[]==[]);
console.log('{}==={}',{}==={});

console.log('1+[+[]]:',1+[+[]])