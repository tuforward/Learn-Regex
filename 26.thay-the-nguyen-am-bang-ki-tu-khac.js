/**
    Thay thế nguyên âm bằng ký tự khác

    Yêu cầu: 
        - Tạo một hàm nhận vào một chuỗi và thay thế các nguyên âm bằng một ký tự khác.
        - a = 1
        - e = 2
        - i = 3
        - o = 4
        - u = 5

    Ví dụ:
        replaceVowel("karachi") ➞ "k1r1ch3"

        replaceVowel("chembur") ➞ "ch2mb5r"

        replaceVowel("khandbari") ➞ "kh1ndb1r3"

    Ghi chú: Đầu vào sẽ luôn ở dạng chữ thường.
*/

const thamChieu = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5
}

const replaceVowel = function (str) {
    const regex = /[aeiou]/g;

    return str.replace(regex, (match) => thamChieu[match]);
}

let vidu_01 = replaceVowel("karachi");
let vidu_02 = replaceVowel("chembur");
let vidu_03 = replaceVowel("khandbari");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);