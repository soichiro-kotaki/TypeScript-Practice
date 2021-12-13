// function kotakin(n1: number, n2: number) {
//   return n1 + n2;
// }

//二つの商品の代金の合計の消費税額を算出するプログラム。
// function average(f1:number, f2:number) {
//   const result =(f1 + f2) / 10;
//   return result;
// }
// console.log(average(80, 70));

//void型：戻り値（return）に何も返さないということを表すデータ型。void型の関数は、実行結果でundefined出力する。
// function addResult(num: number): void {
//   console.log('Result: ' + num);
// }

//fucntion型の定義の仕方
// let combineValues: (a: number, b: number) => number;
// combineValues = kotakin;     //１行目のsum関数の処理結果から得られる戻り値を、変数に代入。
// console.log(combineValues(8, 8));

//コールバック関数でのfunctionm型の定義の仕方
function addHandle(n1: number, n2: number, cb: (num: number) => void) {
    //cb移行が、コールバック関数を用いたfunction型の定義の仕方。
    const result = n1 + n2;
    cb(result);
}

//コールバック関数の実行
addHandle(10, 20, (result) => {
    console.log(result);
    return result; //上の関数宣言で、戻り値がvoidと指定されているので、戻り値が利用されないことが明示されている。よって、コールバック関数でreturn文を記述しても、エラーや問題はない。
});
