/**
        Ký tự Cuối Cùng là "N"?

        Yêu cầu: Tạo ra một hàm nhận một chuỗi (một tên ngẫu nhiên). Nếu ký tự cuối cùng của tên là "n", trả về true,
        ngược lại trả về false

        Ví dụ:
            ● isLastCharacterN("Aiden") ➞ true
            ● isLastCharacterN("Piet") ➞ false
            ● isLastCharacterN("Bert") ➞ false
            ● isLastCharacterN("Dean") ➞ true
*/

function isLastCharacterN(str) {
    const regex = /n$/;

    const isValid = regex.test(str);
    return isValid;
}

let vidu_01 = isLastCharacterN("Aiden");
let vidu_02 = isLastCharacterN("Piet");
let vidu_03 = isLastCharacterN("Bert");
let vidu_04 = isLastCharacterN("Dean");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);