var john = new Set(["사과", "포도", "배"]);
var susan = new Set(["파인애플", "키위", "배"]);
//합집합
var union = new Set([...john.values(), ...susan.values()]);
console.log(union);
//교집합
var intersection = new Set([...john.values()].filter(e => susan.has(e)));
console.log(intersection);
//차집합
var diff = new Set([...john.values()].filter(e => !susan.has(e)));
console.log(diff);