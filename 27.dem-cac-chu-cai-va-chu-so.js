/**
    Đếm các chữ cái và chữ số

    Yêu cầu: Viết một hàm nhận vào một chuỗi và tính số lượng ký tự chữ cái và chữ số có trong chuỗi đó. Trả về kết quả dưới dạng một đối tượng.

    Ví dụ:
        countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }

        countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }

        countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }

    Ghi chú:
        - Các chuỗi kiểm tra chỉ chứa các ký tự chữ và số.
        - Khoảng trắng không phải là chữ cái.
*/

function countAll(str) {
    const letter = str.match(/([A-Za-z])/g);
    const digit = str.match(/[0-9]/g);

    return {
        "LETTERS": letter ? letter.length : 0,
        "DIGITS": digit ? digit.length : 0
    }
}

let vidu_01 = countAll("Hello World");
let vidu_02 = countAll("H3ll0 Wor1d");
let vidu_03 = countAll("149990");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);