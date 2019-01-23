var msg = "hello";
function test() {
    console.log(msg);
    if (false) {
        var msg = "world";
    }
    console.log(msg);
}
test();