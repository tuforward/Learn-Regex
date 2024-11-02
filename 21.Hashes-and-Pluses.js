/**
    Hashes and Pluses

    Yêu cầu: Tạo một hàm trả về số lượng ký tự "#" và "+" trong một chuỗi.

    Ví dụ:
        hashPlusCount("###+") ➞ [3, 1]

        hashPlusCount("##+++#") ➞ [3, 3]

        hashPlusCount("#+++#+#++#") ➞ [4, 6]

        hashPlusCount("") ➞ [0, 0]

    Ghi chú:
        - Trả về [0, 0] cho một chuỗi rỗng.
        - Trả về theo thứ tự: [hashes, pluses].
*/

const hashPlusCount = (str) => {
    let hashes = str.match(/#/g);
    let pluses = str.match(/\+/g);
    
    hashes = hashes ? hashes.length : 0;
    pluses = pluses ? pluses.length : 0;

    return [hashes, pluses];
} 

let vidu_01 = hashPlusCount("###+");
let vidu_02 = hashPlusCount("##+++#");
let vidu_03 = hashPlusCount("#+++#+#++#");
let vidu_04 = hashPlusCount("");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);