//npm install system-sleep -g
var sleep = require('system-sleep');

var job1 = function(n){
  return new Promise(function(resolve,reject) {
    setTimeout(function(){  
       console.log("작업1 : " + n*2);
       resolve(n*2); 
    },1000);
  });
}

var job2 = function(n){
  return new Promise(function(resolve,reject) {
    setTimeout(function(){  
       console.log("작업2 : " + n*2);
       resolve(n*2); 
    },1000);
  });
}

var job3 = function(n){
  return new Promise(function(resolve,reject) {
    setTimeout(function(){  
       console.log("작업3 : " + n*2);
       resolve(n*2); 
    },1000);
  });
}

var genFunc = function* () {
    let num = 3;
    num = yield job1(num);
    num = yield job2(num);
    num = yield job3(num);
    console.log("리턴 : " + num);
}

function success(result) {
    console.log("5초 쉽니다.");
    sleep(5000);
    let obj = g.next(result);
    if (!obj.done) {
            obj.value.then(success, fail);
    }
}

function fail(err) {
    console.log("5초 쉽니다.");
    sleep(5000);
    let obj = g.throw(err);
    if (!obj.done) {
            obj.value.then(success, fail);
    }
}

let g = genFunc();
success();


