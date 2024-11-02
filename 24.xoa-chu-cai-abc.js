/**
    Xóa các chữ cái ABC

    Yêu cầu: 
        +   Tạo một hàm để loại bỏ các ký tự "a", "b" và "c" từ chuỗi được chuyền vào đối số và trả về chuỗi mới đã được sửa đổi.

        +   Nếu chuỗi được cung cấp không chứa "a", "b" hoặc "c", trả về null.

    Ví dụ:
        removeABC("This might be a bit hard") ➞ "This might e  it hrd"

        removeABC("hello world!") ➞ null

        removeABC("") ➞ null
*/

const removeABC = (str) => {
    const regex = /[a-c]/g;

    if(regex.test(str) === false) return null;

    return str.replace(regex, "");
}

let vidu_01 = removeABC("This might be a bit hard");
let vidu_02 = removeABC("hello world!");
let vidu_03 = removeABC("");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);