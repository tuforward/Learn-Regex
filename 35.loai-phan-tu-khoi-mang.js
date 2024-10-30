/**
    Loại phần tử khỏi một mảng

    Yêu cầu: 
        +       Bạn được cho một mảng với các từ ngẫu nhiên nhưng chương trình của bạn không chấp nhận các từ
        +       bắt đầu bằng chữ cái viết hoa "C".
        +       Loại bỏ các từ không được chấp nhận và trả về mảng mới

    Ví dụ:
        ● accepted(["Ducks", "Bears", "Cats"]) ➞ ["Ducks", "Bears"]
        ● accepted(["cars", "trucks", "planes"]) ➞ ["cars", trucks", "planes"]
        ● accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]) ➞ ["Worms", "Bugs", "Beans"]
*/
const isNotBeginWithC = (str) => {
    const patter = /^C/;
    return patter.test(str);
}
const accepted = (arr) => {
    const arrAns = arr.filter(str => !isNotBeginWithC(str));
    return arrAns;
}

let vidu_01 = accepted(["Ducks", "Bears", "Cats"]);
let vidu_02 = accepted(["cars", "trucks", "planes"]);
let vidu_03 = accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);