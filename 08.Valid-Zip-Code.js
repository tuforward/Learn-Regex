/**
        Valid Zip Code

        Yêu cầu: 
            +   Mã zip bao gồm 5 chữ số liên tiếp.

            +   Cho một chuỗi, viết một hàm để xác định xem chuỗi đầu vào có phải là một mã zip hợp lệ hay không.

            +   Một mã zip hợp lệ là như sau:
                    -   Chỉ chứa các số (không được phép chứa ký tự khác).
                    -   Không được chứa bất kỳ khoảng trắng nào.
                    -   Chỉ có 5 chữ số.

        Ví dụ:
            isValid("59001") ➞ true

            isValid("853a7") ➞ false

            isValid("732 32") ➞ false

            isValid("393939") ➞ false
*/

function isValid (str) {
    if(str.length != 5) return false;

    const regex = /\D/;

    // cách 2
    // const regex = /^\d{5}$/;
    
    const ans = !regex.test(str);

    return ans;
}

let vidu_01 = isValid("59001");
let vidu_02 = isValid("853a7");
let vidu_03 = isValid("732 32");
let vidu_04 = isValid("393939");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);