/**
    Tìm bomb

    Yêu cầu: Tạo một hàm để tìm từ "bomb" trong chuỗi được cung cấp (không phân biệt chữ hoa và chữ thường). Nếu tìm thấy, trả về "Duck!!!", ngược lại trả về "There is no bomb, relax.".

    Ví dụ:
        bomb("There is a bomb.") ➞ "Duck!!!"

        bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"

        bomb("This goes boom!!!") ➞ "There is no bomb, relax."
*/

function bomb(str) {
    const regex = /bomb/i;

    return (regex.test(str) ? "Duck!!!" : "There is no bomb, relax.");
}

let vidu_01 = bomb("There is a bomb.");
let vidu_02 = bomb("Hey, did you think there is a bomb?");
let vidu_03 = bomb("This goes boom!!!");
let vidu_04 = bomb("There is a ahahabomb."); // chữ kết hợp

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);