var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var num = Math.round(Math.random()*20);
        var isValid = num % 2;
        if (isValid) { resolve(num); }
        else { reject(num); }
    }, 1000);
});

p.then(function(num) {
    console.log("SUCCESS1 : " + num);
    return num*2;
}).then(function(num) {
    console.log("SUCCESS2 : " + num);
    return num*2;
}).then(function(num) {
    console.log("SUCCESS3 : " + num);
})