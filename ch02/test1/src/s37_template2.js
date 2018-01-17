var getPercent = function(str, ...values) {
    var result = "";
    console.log(str);
    console.log(values);
    for (var i=0; i < str.length; i++) {
        result += str[i];
        if (values[i])
            result += Math.round(values[i] * 100) + "%";
    }
    return result;
}

var v1 = 0.222;
var v2 = 0.78999; 
var r2 = getPercent`첫번째 값은 ${v1}이고, 두번째 값은 ${v2}이다.`;
console.log(r2);