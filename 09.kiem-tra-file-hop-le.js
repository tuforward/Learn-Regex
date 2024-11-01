/**
        Kiểm tra file hợp lệ hay không

        Yêu cầu: 
            +   Giả sử một chương trình chỉ đọc tệp .js hoặc .jsx.

            +   Viết hàm chấp nhận đường dẫn tệp và trả về true nếu có thể đọc tệp và false nếu không thể.

        Ví dụ:
            isJS("/users/user.jsx") ➞ true

            isJS("/users/user.js") ➞ true

            isJS("/users/user.ts") ➞ false
 */

const isJS = function (path) {
    const regex = /\b((js)|(jsx))\b/;

    // cách 2
    // const regex = /\.jsx?$/;
    
    return regex.test(path);
}

let vidu_01 = isJS("/users/user.jsx");
let vidu_02 = isJS("/users/user.js");
let vidu_03 = isJS("/users/user.ts");
let vidu_04 = isJS("/users/user.tjs");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);