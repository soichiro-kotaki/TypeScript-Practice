//デコレータ作成編
function Logger() {
    console.log("bbb");
    //以下デコレータ関数
    return function (target: Function) {
        console.log("ログ主力中...");
        console.log(target);
    };
}
//デコレータ関数字体の作成は、JavaScriptと同じく、上から順番に行われるが、その中のデコレータ関数の実行は、したから順に実行される。returnで返している関数の上に書いてある処理は、上から順に行われるが、returnで返す関数の処理は、したから順に行われる。
function withTemplate(template: string, hookid: string) {
    console.log("aaa");
    //以下デコレータ関数
    return function (_: Function) {
        console.log("ログ");
        const $hookEl = document.getElementById(hookid);
        if ($hookEl) {
            $hookEl.innerHTML = template;
        }
    };
}

//クラスには、複数のデコレータを指定することができる。
@Logger()
@withTemplate("<h1>Personを作成中...", "app")
class Person {
    name = "Max";

    constructor() {
        console.log("Personオブジェクトを作成中... ");
    }
}
const pers = new Person();

console.log(pers);
