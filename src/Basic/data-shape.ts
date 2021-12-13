const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "yota",
    age: 30,
    hobbies: ["Soprts", "Cokking"],
    role: [2, "author"],
};

//enum型：複数の定数を指定時に使用する。
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

// const person = {
//     name: "yota",
//     age: 30,
//     hobbies: ["Soprts", "Cooking"],
//     role: Role.ADMIN,
// };

//データ型のひとつ： array型
let favorite: string[];
favorite = ["test"];

for (const hobby of person.hobbies) {
    console.log(hobby);
}

// if (person.role === Role.ADMIN) {
//     console.log("読みと専用ユーザー");
// }
