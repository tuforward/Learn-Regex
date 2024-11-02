/**
    Có bao nhiêu nguyên âm?

    Yêu cầu:
        +   Tạo một hàm nhận vào một chuỗi và trả về số lượng nguyên âm có trong chuỗi đó.
        
        +   a, e, i, o, u được coi là nguyên âm.

        +   Tất cả các trường hợp kiểm tra đều là một từ và chỉ chứa các ký tự chữ cái.

    Ví dụ:
        countVowels("Celebration") ➞ 5

        countVowels("Palm") ➞ 1

        countVowels("Prediction") ➞ 4
*/

const countVowels = (str) => {
    const regex = /[aeiou]/gi;

    const match = str.match(regex);

    return match ? match.length : 0;
}

let vidu_01 = countVowels("Celebration");
let vidu_02 = countVowels("Palm");
let vidu_03 = countVowels("Prediction");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);