//インターフェースはオブジェクトの構造を指定することができる。type　Person ={}というようにカスタム型でも同様に指定することができ、一定の互換性がある。しかし、完全に同質的ではない。インターフェースはオブジェクトの構造のみしか指定できない。（ユニオン型などの特定の型は指定できない。）
// interface Named {
//   readonly name: string;
// }
// interface Greetable extends Named{  //インターフェースの拡張
//   greet(phrase: string): void;
// }

// //インターフェースは、クラスに対して下記のように実装することができる。一つのクラスに対して、カンマ区切りで、複数のインターフェースを指定することができる。後からプロパティを代入することができる。
// class Person implements Greetable {
//   name: string;
//   age = 30;

//   constructor(n: string) {
//     this.name = n;
//   }

//   greet(phrase: string) {
//     console.log(phrase + '' + this.name);
//   }
// }

// let user1: Greetable;

// user1 = new Person('Max');
// user1.greet('Hello I am')
// console.log(user1)


