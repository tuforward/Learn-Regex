/**
        Gõ tắt HTML

        Yêu cầu: Tạo ra một hàm nhận vào một chuỗi có dạng "tagName*n" sau đó trả về n thẻ tagName

        Ví dụ:
            ● convertStringToTagName("div*2") ➞ "<div></div><div></div>"
            ● convertStringToTagName("p*1") ➞ "<p></p>"
            ● convertStringToTagName("li*3") ➞ "<li></li><li></li><li></li>"
*/

// sử dụng js bình thường
const isAlpha = (char) => {
    if(char >= '0' && char <= '9') return false; // không phải alpha
    return true; 
}

function isElement (element) {
    const arr = element.split(""); // tách thành từng kí tự

    for(char of element) {
        if(!isAlpha(char)) return false;
    }
    return true;
}

const convertStringToTagName_JS = function (str) {
    // tách thành mảng
    const arr = str.split("*");

    // check xem thẻ có hợp lệ không
    if(!isElement(arr[0])) return "Không hợp lệ";

    let htmls = ``;
    const tagName = arr[0];

    for(let index = 0 ; index < parseInt(arr[1]); index++) {
        htmls += `<${tagName}></${tagName}>`;
    }
    return htmls;
}

let vidu_01 = convertStringToTagName_JS("div*2");
let vidu_02 = convertStringToTagName_JS("p*1");
let vidu_03 = convertStringToTagName_JS("li*3");
let vidu_04 = convertStringToTagName_JS("l3i*3");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);

console.log("--------------------------------------------------------------");
// sử dụng regex
function haveDigit (str) {
    const pattern = /\d/;
    const have = pattern.test(str);
    return have;
}

function haveAlpha (str) {
    const pattern = /\D/;
    const have = pattern.test(str);
    return have;
}

const convertStringToTagName = (str) => {
    // const pattern_01  = /(\D+)\*(\d+)/;

    const pattern_02 = /(\w+)\*(\d+)/; // cách này sẽ lấy được ok hơn
    const find = str.match(pattern_02);

    // check xem phía trước dấu * có số không
    if(haveDigit(find[1])) return "Không hợp lệ !";
    if(haveAlpha(find[2])) return "Không hợp lệ !";
    
    const tagName = find[1];
    const countRepeat = parseInt(find[2]);

    let htmls = ``;

    for(let index = 0 ; index < countRepeat ; index++) {
        htmls += `<${tagName}></${tagName}>`;
    }
    return htmls;
}

let vidu_05 = convertStringToTagName("div*2");
let vidu_06 = convertStringToTagName("p*1");
let vidu_07 = convertStringToTagName("li*3");
let vidu_08 = convertStringToTagName("l3i*3"); // đối với pattern_01 thì sẽ không xác định được lỗi sai ở đây
let vidu_09 = convertStringToTagName("l3i*3a"); // đối với pattern_01 thì sẽ không xác định được lỗi sai ở đây

console.log(vidu_05);
console.log(vidu_06);
console.log(vidu_07);
console.log(vidu_08); 
console.log(vidu_09); 