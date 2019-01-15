function email1(str) {
    var regexp = /^[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;


    if (regexp.test(str)) {
        return true;
    }
    return false;
}

var a = "a@gmail.com";
var b = "ab@yahoo.com"; 
var c = "abc@hotmail.com";
var d = "@gmail.com";
var e = "ab@gmail.";
var f = "@#abc@gmail.com";
console.log(email1(a));
console.log(email1(b));
console.log(email1(c));
console.log(email1(d));
console.log(email1(e));
console.log(email1(f));