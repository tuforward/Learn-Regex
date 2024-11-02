/**
    Viết hoa chữ cái đầu tiên của mỗi từ

    Yêu cầu: Tạo một hàm nhận một chuỗi làm đối số và chuyển đổi ký tự đầu tiên của mỗi từ thành chữ hoa. Trả về chuỗi đã được định dạng mới.

    Ví dụ:
        makeTitle("This is a title") ➞ "This Is A Title"

        makeTitle("capitalize every word") ➞ "Capitalize Every Word"

        makeTitle("I Like Pizza") ➞ "I Like Pizza"

        makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
*/

const makeTitle = (str) => {
    // \b\w dùng để tìm tất cả kí tự đầu tiên của từ
    const regex = /\b\w/g;

    const ans = str.replace(regex, (match) => match.toUpperCase());

    return ans;
}

let vidu_01 = makeTitle("This is a title");
let vidu_02 = makeTitle("capitalize every word");
let vidu_03 = makeTitle("I Like Pizza");
let vidu_04 = makeTitle("PIZZA PIZZA PIZZA");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);