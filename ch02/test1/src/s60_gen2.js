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
 
var promise = job1(3);
promise
  .then(job2)
  .then(job3)
  .then(console.log);