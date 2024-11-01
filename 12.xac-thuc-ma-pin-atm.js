/**
        Xác thực mã PIN ATM

        Yêu cầu:
            +   Máy ATM cho phép mã PIN gồm 4 hoặc 6 chữ số và mã PIN không được chứa chữ cái.

            +   Hãy tạo một hàm nhận vào một chuỗi và trả về true nếu mã PIN hợp lệ và trả về false nếu mã PIN không hợp lệ.

        Ví dụ:
            validatePIN("1234") ➞ true

            validatePIN("12345") ➞ false

            validatePIN("a234") ➞ false

            validatePIN("") ➞ false

            validatePIN("123456") ➞ true
*/

const validatePIN = (pin) => {

    // cách 1
    // if(pin.length !== 4 && pin.length !== 6) return false; // độ dài mã PIN không hợp lệ
    // const regex = /\D/;
    // return !regex.test(pin);


    // cách 2:
    const regex = /^(\d{4}|\d{6})$/;
    return regex.test(pin);
}

let vidu_01 = validatePIN("1234");
let vidu_02 = validatePIN("12345");
let vidu_03 = validatePIN("a234");
let vidu_04 = validatePIN("");
let vidu_05 = validatePIN("123456");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);
console.log(vidu_05);