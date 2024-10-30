/**
        28Tech is amazing

        Yêu cầu: 
            +   Tạo ra một hàm nhận một chuỗi và thay đổi từ "amazing" thành "not amazing".
            +   Nếu trong chuỗi có từ 28Tech thì giữ nguyên chuỗi không thay đổi

        Ví dụ:
            ● amazing("28Tech is amazing.") ➞ "28Tech is amazing."
            ● amazing("Abc is amazing.") ➞ "Abc is not amazing."
            ● amazing("Xyz is amazing.") ➞ "Xyz is not amazing."
*/

let amazing = function (str) {

    // tìm sẽ có từ 28tech trong chuỗi không
    const pattern28Tech = /\b28Tech\b/;
    const is28Tech = pattern28Tech.test(str);

    if(is28Tech) return str; // nếu có từ 28tech thì return về luôn

    // nếu không có từ 28tech thì thay thế từ amazing thành not amazing
    const patternAmazing = /\bamazing\b/;

    const isAns = str.replace(patternAmazing, 'not amazing');
    return isAns;

    
}

let vidu_01 = amazing("28Tech is amazing.");
let vidu_02 = amazing("Abc is amazing.");
let vidu_03 = amazing("Xyz is amazing.");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

let str = "1adasda";
const pattern = /\D+/gi;
const isOK = pattern.test(str);
console.log(isOK);