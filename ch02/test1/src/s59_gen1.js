function* testGenerator(v) {
    let arr = ["이몽룡", "성춘향", "박문수", "홍길동", "박명수" ];
    for (var i=0; i < arr.length; i++) {
        if (i < arr.length-1)
            yield arr[i] + v;
        else
            return arr[i] + v;
    }
}

let gen = testGenerator(100);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());