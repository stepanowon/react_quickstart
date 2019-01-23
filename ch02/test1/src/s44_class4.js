"use strict";

let _name = Symbol("name key");
let _tel = Symbol("tel key");
let _address = Symbol("address key");
let _count = Symbol("count key");

class Person {
    constructor(name, tel, address) {
        this[_name] = name;
        this[_tel] = tel;
        this[_address] = address;
        if (Person[_count]) { Person[_count]++; }
         else { Person[_count] = 1; }    
    }
    static getPersonCount() { 
        return Person[_count]; 
    }
    //이름은 getter만
    get name () {   return this[_name];   }
    //getter, sette!!
    get tel() { return this[_tel]; }
    set tel(tel) { this[_tel] = tel; }
    get address() { return this[_tel]; }
    set address(address) { this[_address] = address; }

    toString() {
        return `name=${this[_name]}, tel=${this[_tel]}, address=${this[_address]}`;
    }
}

var p1 = new Person('홍길동', '010-222-3331', '서울시');
//p1.age = "이몽룡";     //에러발생
p1.tel = "010-9999-2222";
console.log(p1.toString());