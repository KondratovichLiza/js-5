// 1)
function isMozartHere(str) {
    if (str.trim().toLowerCase().indexOf("mozart") != -1) {
        return true;
    } else {
        return false;
    }
}

let result = isMozartHere("is Mozart here");
console.log(result);
// 2)
function showUppercaseFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1)
}
let result = showUppercaseFirstLetter("show uppercase first letter");
console.log(result);

// 3)
let book = ["«О дивный новый мир» Олдоса Хаксли (1932)", "«451 градус по Фаренгейту» Рэя Брэдбери (1953)", "«Винo из одуванчиков»  Рэя Брэдбери(1957)", "«Портрет Дориана Грея» Оскар Уайльд (1890)"]

console.log(book.length);
console.log(book.at(-1));
console.log(book.at(-2));
// 4)
let javaScriptTypes = [1, "string", true, NaN, { name: "Ivan", age: 24 }];
console.log(javaScriptTypes)
    // 5)
let str = "Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии."

console.log(str.indexOf('«451 градус по Фаренгейту»'));
console.log(str.slice(123, 149));
// 6)
console.log(Math.ceil(Math.random() * 100));
// 7)
let str = "Я учу JavaScript очень мало";
console.log(str.replace("мало", "много"));
// 8)
function text(a, b) {

    let str = "Дорогой, а вдруг он потеряется?";
    if (str.includes(a) && str.includes(b)) {
        console.log('Включает')
    } else {
        console.log('Не включает')
    }

}
text("вдруг", "рассвет");
// 9)
let color = ["red", "blue", "pink", "black"]
color.shift();
console.log(color);
color.pop();
console.log(color);
color.push("orange");
color.unshift("white");
console.log(color);