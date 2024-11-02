/**
    Hạn chế chữ và số

    Yêu cầu: 
        +   Tạo một hàm trả về true nếu chuỗi đã cho có bất kỳ một trong những điều sau:
            -   Chỉ chứa các chữ cái và không có số nào.
            -   Chỉ chứa các số và không có chữ cái nào.

        +   Nếu một chuỗi có cả số và chữ cái, hoặc chứa các ký tự không phù hợp sẽ trả về false.

    Ví dụ:
        alphanumericRestriction("Bold") ➞ true

        alphanumericRestriction("123454321") ➞ true

        alphanumericRestriction("H3LL0") ➞ false

        alphanumericRestriction("ed@bit") ➞ false

    Ghi chú: Bất kỳ chuỗi nào chứa khoảng trắng hoặc rỗng đều nên trả về false.
*/
const alphanumericRestriction = (str) => {
    // Nếu chỉ chứa các chữ số
    const digit = /^\d+$/;
    if(digit.test(str)) return true;

    // Nếu chỉ chứa các chữ cái
    const alpha = /^[a-z]+$/i;
    if(alpha.test(str)) return true;

    // Cả 2 trường hợp trên hoặc kí tự đặc biệt
    return false;
}

let vidu_01 = alphanumericRestriction("Bold");
let vidu_02 = alphanumericRestriction("123454321");
let vidu_03 = alphanumericRestriction("H3LL0");
let vidu_04 = alphanumericRestriction("ed@bit");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);