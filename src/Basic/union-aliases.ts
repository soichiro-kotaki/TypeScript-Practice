//エイリアス型：肩の定義をひとつの値に代入してその定数名を型定義で利用できる。エイリアス型は、その定義を行う場所を、実際に変数名を使う場所よりも、前に定義すること。エイリアス型には、オブジェクトを指定することもできる。

// ex. type User = {name: string, age: number, gender: 'Man' | 'Woman',  birth: string};
//const U1: User = {name: 'Kotaki', age: 20, gender: 'Man', birth: 'Nagano'};

// type Combinable = number | string;
// type ConversionDescripter =  'as-number' | 'as-text';
// //ユニオン型（Union型）：複数のデータ型の指定を可能にする。
// //リテラル型（Literal型）：特定の文字列を型に指定する。

// function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescripter,)  {
// let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   };

//   return result;
// }

// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);


// const combineNames = combine('Max', 'Anna', 'as-text');
// console.log(combineNames);
