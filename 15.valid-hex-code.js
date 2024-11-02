/**
        Valid Hex Code (Mã Hex hợp lệ)

        Yêu cầu: 
            +   Tạo hàm xác định xem một chuỗi có phải là mã hex hợp lệ hay không.
            +   Mã hex phải bắt đầu bằng phím thăng # và có độ dài chính xác là 6 ký tự.
            +   Mỗi ký tự phải là một chữ số từ 0-9 hoặc một ký tự chữ cái từ A-F.
            +   Tất cả các ký tự chữ cái có thể là chữ hoa hoặc chữ thường.

        Ví dụ:
            isValidHexCode("#CD5C5C") ➞ true

            isValidHexCode("#EAECEE") ➞ true

            isValidHexCode("#eaecee") ➞ true

            isValidHexCode("#CD5C58C") ➞ false

            isValidHexCode("#CD5C5Z") ➞ false

            isValidHexCode("#CD5C&C") ➞ false

            isValidHexCode("CD5C5C") ➞ false
*/

function isValidHexCode(code) {
    // giải thích bắt đầu bằng kí tự #
    // tiếp theo sẽ có 6 kí tự đến kết thúc
    const regex = /^#([A-Fa-f0-9]){6}$/;
    
    return regex.test(code);
}

let vidu_01 = isValidHexCode("#CD5C5C");
let vidu_02 = isValidHexCode("#EAECEE");
let vidu_03 = isValidHexCode("#eaecee");
let vidu_04 = isValidHexCode("#CD5C58C");
let vidu_05 = isValidHexCode("#CD5C5Z");
let vidu_06 = isValidHexCode("#CD5C&C");
let vidu_07 = isValidHexCode("CD5C5C");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);
console.log(vidu_07);