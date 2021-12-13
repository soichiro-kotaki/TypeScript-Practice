//unknown型：anyと基本的なは同じ意味を表す型。違いは、特定の方が指定されている変数などに、unknownで指定した変数を代入する時に、if文でチェックをしなければならないということ。以下がその例。
// let userInput: unknown;
// let userName:  string;

// //どんなデータ型を代入しても、エラーにはならない。
// userInput = 5;
// userInput = 'Max';


// //データ型のチェックをしている。if文がない場合、エラーとなる。
// if (typeof userInput === 'string') {
//   userName = userInput;
// }

// //never型：void型と基本的には同じ意味であるが、より強い意味、絶対に値を返さないということを明示的に表すことに用いる。コードの品質を向上するという観点では、使っても良い。
// function generateError(message: string, code: number): never {
//   throw {message: message, errorCode: code};
//   //エラーを投げて、これ以降のコード、プログラムを停止させる。
// }
// // const result = generateError('エラーが発生しました。', 500);
// // console.log(result);

// //スプレッド演算子： スプレッド演算子の後に書かれた配列の全ての値を取り出し、指定した変数に対して、個別の値として展開してくれる（es6以降の機能）
// const sports = ['soccer', ' baseball', 'volleyball'];
// const e_sport = ['ウィイレ'];
// e_sport.push(...sports) //  ...がスプレッド演算子。
// //スプレッド演算子は、配列だけでなく、オブジェクトにも使える。

// //分割代入：配列から取り出している訳ではなく、あくまでコピーしているだけ。
// let [hobbies1, hobbies2, ...hobbiesRest] = sports;
// console.log(sports, hobbies1, hobbies2);


// //オブジェクトバージョン(分割代入)
// const persons = {
//   e_name: 'Kotaki',
//   age: 20,
//   gender: 'Man'
// }
// const {e_name, age, ...personsRest} = persons;
// console.log(e_name, age, personsRest, persons);

