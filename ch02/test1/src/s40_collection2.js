let teams = new Map();
teams.set('LG', '트윈스');     teams.set('삼성', '라이온스');
teams.set('NC', '다이노스');   teams.set('기아', '타이거스');
teams.set('한화', '이글즈');   teams.set('롯데', '자이언츠');

console.log(teams.has("SK"));       //false
console.log(teams.get("LG"));       //트윈스
console.log("--------------");

for (let [k, v] of teams) {
    console.log(k + " " + v);
}

//팀명이 마지막에 '스'가 아닌 것만으로 필터링
let teams2 = new Map(
    [...teams].filter(([k,v])=>{
        let endstr = v.substring(v.length-1);
        if (endstr != '스') {
           return [k,v];
        }
    })
);
console.log("--------------");
for (let [k2, v2] of teams2) {
    console.log(k2 + " " + v2);
}