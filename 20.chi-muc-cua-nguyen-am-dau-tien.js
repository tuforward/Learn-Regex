/**
    Trả về chỉ mục của nguyên âm đầu tiên

    Yêu cầu: 
        +   Viết một hàm trả về chỉ số của nguyên âm đầu tiên trong một chuỗi.
        +   a, e, i, o, u được coi là nguyên âm.

    Ví dụ:
        firstVowel("apple") ➞ 0

        firstVowel("hello") ➞ 1

        firstVowel("STRAWBERRY") ➞ 3

        firstVowel("pInEaPPLe") ➞ 1

    Ghi chú:
        - Đầu vào sẽ là các từ đơn.
        - Các ký tự trong từ sẽ ở dạng chữ hoa hoặc chữ thường.
        - "y" không được coi là nguyên âm.
        - Đầu vào luôn chứa một nguyên âm.
*/

const firstVowel = (str) => {
    const regex = /[aeiou]/i;

    const index = str.match(regex).index;
    return index;
}

let vidu_01 = firstVowel("apple");
let vidu_02 = firstVowel("hello");
let vidu_03 = firstVowel("STRAWBERRY");
let vidu_04 = firstVowel("pInEaPPLe");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);