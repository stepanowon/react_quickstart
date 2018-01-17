(function(owner){
  return new Promise(function(resolve,reject) {
    setTimeout(function(){  
       console.log("작업1 : " + owner);
       resolve(owner); 
    },1000);
  });
})("이몽룡")
.then(function(owner){
  return new Promise(function(resolve,reject) {
    setTimeout(function(){  
       console.log("작업2 : " + owner);
       resolve(owner); 
    },1000);
  });
})
.then(function(owner){
  return new Promise(function(resolve,reject) {
    setTimeout(function(){  
       console.log("작업3 : " + owner);
       resolve(owner); 
    },1000);
  });
})
.then(console.log);