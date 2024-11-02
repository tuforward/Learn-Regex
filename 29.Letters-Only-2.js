/**
    Letters Only 2 (Chỉ chữ cái 2)

    Yêu cầu: Kiểm tra xem chuỗi đã cho có chỉ chứa các ký tự và dấu cách và tất cả các ký tự có đều viết thường không.

    Ví dụ:
        lettersOnly("JAVACRIPT") ➞ false

        lettersOnly("javascript") ➞ true

        lettersOnly("12321313") ➞ false

        lettersOnly("i have spaces") ➞ true

        lettersOnly("i have numbers(1-10)") ➞ false

        lettersOnly("") ➞ false

    Ghi chú:
        - Đối số trống sẽ luôn trả về false.
        - Giá trị đầu vào có thể bao gồm các ký tự kết hợp (ký tự đặc biệt, chữ cái, số).
*/

const lettersOnly = (str) => {
    if(str === "") return false;

    // // cách 1
    // const regex = /([A-Z]|[0-9])/;
    // return !regex.test(str);

    // cách 2
    const regex = /^[a-z\s]*$/;
    return regex.test(str);
}

let vidu_01 = lettersOnly("JAVACRIPT");
let vidu_02 = lettersOnly("javascript");
let vidu_03 = lettersOnly("12321313");
let vidu_04 = lettersOnly("i have spaces");
let vidu_05 = lettersOnly("i have numbers(1-10)");
let vidu_06 = lettersOnly("");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);