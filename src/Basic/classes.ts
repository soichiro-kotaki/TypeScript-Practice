class Department {
    // private readonly id: string
    //  name: string;
    protected employees: string[] = [];

    static createEmployee(name: string) {
        return { name: name };
    }

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    describe(this: Department) {
        console.log(`Department: (${this.id}):  ${this.name}`);
    }

    addEmployees(employee: string) {
        this.employees.push(employee);
    }

    printEmpoyee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

//クラスの継承（extendsを使う。継承できるクラスは一つだけ。）
class ITDepartment extends Department {
    private lastReport: string;
    private reports: string[];

    //getterとsetterの書き方（es６以降の機能）
    get mostRecentReports() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("レポートが見つかりません。");
    }

    set mostRecentReports(value: string) {
        if (!value) {
            throw new Error("正しい値を設定してください。");
        }
        this.addReport(value);
    }

    constructor(id: string, private admins: string[], reports: string[]) {
        super(id, "IT");
        this.reports = reports;
        this.lastReport = reports[0];
        //superは、クラスを継承したクラスで、新たにコンストラクタを設定した時に、関数のように使う特別なもの。
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    addemployee(name: string) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
}

//クラスのインスタンス化（実体化。このようにクラスを変数に格納することで、クラスを実際に使用することができる。）
const accounting = new Department("D1", "Accounting");

const employee1 = Department.createEmployee("Max");
console.log(employee1);

const it = new ITDepartment("D2", ["Kotaki Soichiro"], []);

//メソッドのなどの実行
console.log(accounting);
accounting.addEmployees("Max");
accounting.addEmployees("Manu");
// accounting.printEmpoyee();
accounting.describe();

//ITバージョン
console.log(it);
it.mostRecentReports = "通期会計レポート";
it.addemployee("Suguru");
it.addReport("Something");
console.log(it.mostRecentReports);

// privateと、publicキーは、クラスの各プロパティの前に指定するもの。デフォルトは、public。つまり、外部からもそのプロパティにアクセスすることができる。
// accounting.employees[2] = "aas";
// privateと設定してあるプロパティなので、クラス外からは参照できない。
