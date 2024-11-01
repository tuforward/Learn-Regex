/**
    Tách mã sản phẩm

    Yêu cầu:
        +   Bạn có một dãy mã sản phẩm có định dạng sau: "[chữ cái][chữ số]".

        +   Tạo một hàm chia các chuỗi này thành các phần chữ cái và chữ số.

    Ví dụ:
        splitCode("TEWA8392") ➞ ["TEWA", 8392]

        splitCode("MMU778") ➞ ["MMU", 778]

        splitCode("SRPE5532") ➞ ["SRPE", 5532]
*/

function splitCode(str) {

    // cách 1
    // const regex = /\d/;
    // const index = str.match(regex).index;
    // return [str.slice(0, index), parseInt(str.slice(index))];

    // cách 2
    // ^([A-Za-z]+): ban đầu à những chữ cái
    // (\d+)$: những chữ số nằm cuối
    const regex = /^([A-Za-z]+)(\d+)$/;

    const find = str.match(regex);

    return [find[1], parseInt(find[2])];
}

let vidu_01 = splitCode("TEWA8392");
let vidu_02 = splitCode("MMU778");
let vidu_03 = splitCode("SRPE5532");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);