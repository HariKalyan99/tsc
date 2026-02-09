// Basic types
let id: number = 5;

let company: string = "Hello world";

let isPublished: boolean = true;

let x: any = "Hello";

let age: number;

age = 10;

let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, 3, "hello", true];

ids.push(10);

arr.push(null);

// tuple

let person: [number, { world: string }, boolean[]] = [
  1,
  { world: "hello" },
  [true],
];

// tuple array

let emp: [number, string][];

emp = [
  [1, "hello"],
  [2, "world"],
  [3, "true"],
];

// union

let idUnion: string | number = "null";
idUnion = 89;

// enums

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction1.Right); // 4
console.log(Direction2.Right); // Right

// objects

const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};
// or
type User1 = {
  id: number;
  name: string;
  school: true;
};

const user1: User1 = {
  id: 121,
  name: "Hari",
  school: true,
};

// type assertion
let cid: any = 1;
let customerId = <number>cid;

customerId = 2;

let customerInstance = cid as string;
customerInstance = "89";

// functions

function addNum(x: number, y: number): string {
  return x + `${y}`;
}

console.log(addNum(1, 2));

function log(message: string | number) {
  console.log(message);
}

log("hello");
// void
function greet(message: string): void {
  console.log(message);
}

console.log(greet("hello world"));

// interfaces

interface userInterface {
  name: string;
  readonly age: number;
  school?: string | boolean;
}

const user2: userInterface = {
  name: "Harikalyan",
  age: 10,
  //   even if you don't mention it would work as it is optional
};

// user2.age = 20; not possible to assign as it is only meant for reading

// works same like the type, but preferably it is actually used for objects.

// type Point = number | string;

// const p1: Point = 1;

interface Point {
  point: null | string;
}

const p1: Point = { point: "1" };

// interface with functions

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

console.log(add(10, 10));
console.log(sub(10, 9));

// classes

// classInterface

interface PersonInterface {
  id: number | any;
  name: string;
  school?: boolean;
  register(): void;
}

class Person {
  private id: number | any; // accessible inside its class
  public name: string; // accessible globally
  public school?: boolean; //accessible within the class and its extended or sub class

  constructor(id: number | any, name: string, school: boolean) {
    this.id = id;
    this.name = name;
    this.school = school;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

class Person1 implements PersonInterface {
  public id: number | any; // accessible inside its class
  public name: string; // accessible globally
  public school?: boolean; //accessible within the class and its extended or sub class

  constructor(id: number | any, name: string, school: boolean) {
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
  position: string;
  constructor(id: number, name: string, school: boolean, position: string) {
    super(id, name, school);
    this.position = position;
  }
}

const emp1 = new Employee(3, "tron", true, "Developer");

console.log(emp1.register());

// generics

function getData<T>(data: T[]): T[] {
  return Array().concat(data);
}

let strData = getData<string>(["hello", "how", "are", "you"]);
let numData = getData<number>([1, 2, 3, 4]);

// strData.push(1); not possible
console.log(strData, numData);
