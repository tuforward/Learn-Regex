/**
    Xóa nguyên âm khỏi chuỗi

    Yêu cầu: 
        +   Tạo một hàm nhận vào một chuỗi và trả về một chuỗi mới với tất cả các nguyên âm được loại bỏ.

        +   a, e, i, o, u được coi là nguyên âm.

    Ví dụ:
        removeVowels("I have never seen a thin person drinking Diet Coke.")
        ➞ " hv nvr sn  thn prsn drnkng Dt Ck."

        removeVowels("We're gonna build a wall!")
        ➞ "W'r gnn bld  wll!"

        removeVowels("Happy Thanksgiving to all--even the haters and losers!")
        ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
*/
const removeVowels = (str) => {
    const regex = /[aeiou]/gi;

    return str.replace(regex, ""); // các này xóa nguyên âm
}

let vidu_01 = removeVowels("I have never seen a thin person drinking Diet Coke.");
let vidu_02 = removeVowels("We're gonna build a wall!");
let vidu_03 = removeVowels("Happy Thanksgiving to all--even the haters and losers!");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);