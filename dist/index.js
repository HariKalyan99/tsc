"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 5;
let company = "Hello world";
let isPublished = true;
let x = "Hello";
let age;
age = 10;
let ids = [1, 2, 3, 4];
let arr = [1, 3, "hello", true];
ids.push(10);
arr.push(null);
let person = [
    1,
    { world: "hello" },
    [true],
];
let emp;
emp = [
    [1, "hello"],
    [2, "world"],
    [3, "true"],
];
let idUnion = "null";
idUnion = 89;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Right);
console.log(Direction2.Right);
const user = {
    id: 1,
    name: "John",
};
const user1 = {
    id: 121,
    name: "Hari",
    school: true,
};
let cid = 1;
let customerId = cid;
customerId = 2;
let customerInstance = cid;
customerInstance = "89";
function addNum(x, y) {
    return x + `${y}`;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log("hello");
function greet(message) {
    console.log(message);
}
console.log(greet("hello world"));
const user2 = {
    name: "Harikalyan",
    age: 10,
};
const p1 = { point: "1" };
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(10, 10));
console.log(sub(10, 9));
class Person {
    id;
    name;
    school;
    constructor(id, name, school) {
        this.id = id;
        this.name = name;
        this.school = school;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Person1 {
    id;
    name;
    school;
    constructor(id, name, school) {
        this.id = id;
        this.name = name;
        this.school = school;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const hari = new Person1(1, "Hari", true);
const kalyan = new Person1(1, "Kalyan", false);
if (hari instanceof Person1) {
    console.log(hari.name, kalyan);
    console.log(hari.register());
}
class Employee extends Person1 {
    position;
    constructor(id, name, school, position) {
        super(id, name, school);
        this.position = position;
    }
}
const emp1 = new Employee(3, "tron", true, "Developer");
console.log(emp1.register());
function getData(data) {
    return Array().concat(data);
}
let strData = getData(["hello", "how", "are", "you"]);
let numData = getData([1, 2, 3, 4]);
console.log(strData, numData);
//# sourceMappingURL=index.js.map