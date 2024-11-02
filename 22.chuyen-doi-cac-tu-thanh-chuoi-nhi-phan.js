/**
    Chuyển đổi các từ thành chuỗi nhị phân

    Yêu cầu: Viết một hàm biến đổi tất cả các chữ cái từ [a, m] thành 0 và các chữ cái từ [n, z] thành 1 trong một chuỗi.

    Ví dụ:
        convertBinary("house") ➞ "01110"

        convertBinary("excLAIM") ➞ "0100000"

        convertBinary("moon") ➞ "0111"
    
    Ghi chú: Việc chuyển đổi không phân biệt chữ hoa chữ thường
*/

const convertBinary = (str) => {
    const ans = str.replace(/[a-m]/gi, '0').replace(/[n-z]/gi, '1');
    return ans;
}

let vidu_01 = convertBinary("house");
let vidu_02 = convertBinary("excLAIM");
let vidu_03 = convertBinary("moon");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);