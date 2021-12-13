// 交差型（typeは、インターフェースに変更しても同じことができる。
// type Admin = {
//   name: string;
//   privileges: string[];
// }

// type Employee = {
//   name: string;
//   startDate: Date;
// }

// type ElevatedEmploee = Admin & Employee;

// const e1: ElevatedEmploee = {
//   name: 'Max',
//   privileges: ['create-server'],
//   startDate: new Date()
// }

// type Combainable = string | number;

// //関数オーバーロード
// function typeGuard(a: number, b: number): number;
// function typeGuard(a: string, b: string): string;
// function typeGuard(a: string, b: number): string;
// function typeGuard(a: number, b: string): string;
// function typeGuard(a: Combinable, b: Combinable) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// const result = typeGuard(3,'Hello');
// result.split('');
// console.log(result);

// //オプショナルチェーン
// const fetchedUserData = {
//   id: 'u1',
//   name: 'user1',
//   job: {
//     title: 'Developer',
//     descriptiom: 'TypeScript',
//   },
// };
// console.log(fetchedUserData?.job?.descriptiom);

// //型キャスティングの方法（２種類ある。オブジェクトの前か後に何の要素を取得するかを指定する。）
// // const $userInput = <HTMLInputElement>document.getElementById('user-input')!;
// //!マークをつけると、Htmlタグが、nullではなく、必ず何かのDOM要素を返すこと示す。

// const $userInput = document.getElementById('user-input') as HTMLInputElement;
//  //Reactでは、こちらの方法をほうが好ましい。<>の記号をコンポーネント作成時に頻繁に使うので、分かりにくくなる。

// $userInput.value = 'こんにちは。';

// //インデックス型。オブジェクトの中のプロパティの数がわからない場合などの時に使う。
// interface ErrorContainer {
//   [key: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: '正しいメールアドレスではありません。',
//   username: 'ユーザ名に記号を含めることはできません',
// }
