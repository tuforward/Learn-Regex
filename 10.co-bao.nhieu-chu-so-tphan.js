/**
        Có bao nhiêu chữ số thập phân?

        Yêu cầu:
            +   Tạo một hàm trả về số lượng chữ số thập phân mà một số có.

            +   Bất kỳ số 0 nào sau dấu thập phân cũng được tính vào số lượng chữ số thập phân.

        Ví dụ:
            getDecimalPlaces("43.20") ➞ 2

            getDecimalPlaces("400") ➞ 0

            getDecimalPlaces("3.1") ➞ 1
*/

function getDecimalPlaces(str) {

    // cách 1
    // const regex = /\.(\d+)/g;  // nếu dùng cách này thì nó sẽ trả ra mảng nên đừng
    // return (find ? find[1].slice(1).length : 0);


    // cách 2
    const regex = /\.(\d+)/;

    // cách trên sẽ trả ra:
    // [ '.20', '20', index: 2, input: '43.20', groups: undefined ]
    
    const find = str.match(regex);

    return (find ? find[1].length : 0);
}

let vidu_01 = getDecimalPlaces("43.20");
let vidu_02 = getDecimalPlaces("400");
let vidu_03 = getDecimalPlaces("3.1");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

console.log("----------------------------------------------------------------------");

// cách 2
const getDecimalPlaces_02 = (numberString) => {
    // Sử dụng biểu thức chính quy để kiểm tra số lượng chữ số thập phân
    const regex = /\.(\d+)/;
    
    // Sử dụng match để tìm chuỗi khớp với biểu thức chính quy
    const match = numberString.match(regex);
    // console.log(match);
    
    // Nếu không tìm thấy khớp, trả về 0, ngược lại trả về độ dài của chuỗi khớp
    return match ? match[1].length : 0;
}

// Kiểm tra các ví dụ
console.log(getDecimalPlaces_02("43.20")); // ➞ 2
console.log(getDecimalPlaces_02("400")); // ➞ 0
console.log(getDecimalPlaces_02("3.1")); // ➞ 1