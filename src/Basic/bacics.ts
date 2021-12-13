const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
};

//「型推論」により、パラメータなどで一度、データの型を定義してしまえば、その後はTypeScriptが型を推測して異なる型のデータが入れば、自動的に知らせてくれるので、変数にデータの型を定義する必要はない。
const number1 = 5; //型を、指定する必要がない。
const number2 = 2.8;
let printResult = true;
const resultPhrase = "Result: ";

add(number1, number2, printResult, resultPhrase);
