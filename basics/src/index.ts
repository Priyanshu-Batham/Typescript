console.log("Hello how are you?");

// we can define a union variable that can be of more than one types
// let a:string|number|boolean = "Priyanshu"
// console.log(a);
// a = 1234;
// console.log(a);
// a = true;
// console.log(a);

//how functions should be written
// const func = (n:number, m:number):number =>{
//     return n * m;
// }
// console.log(func(2, 4));

// type aliases - here we define our custom datatype which can later be used
// type Mytype = (n:number, m:number) => number;
// const func:Mytype = (n, m)=>{
//     return n*m;
// }
// console.log(func(3, 5));

//how arrays should be written
// const arr:number[] = [1, 2, 3];
//generic style is preferred
// const arr:Array<string | number> = ["one", "two", 3]
// console.log(arr);

// how objects should be written
// const obj: {
//     height: number,
//     weight: number,
//     name: string,
//optional properties can also be specified with a "?"
//     age?:number
// } = {
//     height: 36,
//     weight: 32,
//     name: "anyone"
// }
// console.log(obj)

// interfaces for objects
// interface User {
//     username: string,
//     email: string,
//     password: string,
//     age: number
//     func?: ()=>void
// }
// const user1:User = {
//     username: "Priyanshu",
//     email: "priyanshubatham24733@gmail.com",
//     password: "very strong password",
//     age: 21,
//     func: function(){console.log(this.username)}
// }
// user1.func?.();

// default parameters in function
// const func = (n: number, m: number = 10): number => {
//   return n * m;
// };
// console.log(func(12))

//classes and interfaces
// interface attributes {
//   name: string;
//   power: number;
//   isSpecial?: boolean;
// }
// class User implements attributes {
//   private readonly id: string = String(Math.random() * 1000000);
//   name: string;
//   power: number;
//   constructor(name: string, power: number) {
//     this.name = name;
//     this.power = power;
//   }
//   get getId(): string {
//     return this.id;
//   }
// }
// const user1 = new User("Priyanshu", 4);
// console.log(user1.getId);

// Dom manipulation
// const btn = <HTMLButtonElement> document.querySelector('#btn');
// const btn:HTMLButtonElement = document.querySelector("#btn")!;
// console.log(btn);

//generics
// const fn = <T>(data: T): T=>{
//     return data;
// }
// function fn<T>(data: T):T{
//     return data;
// }
// console.log(fn(20));
// console.log(fn("Hello"));
// console.log(fn<number>(20))
// console.log(fn<string>("Hello"))

