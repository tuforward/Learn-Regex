/**
    Nguyên âm đứt đoạn

    Yêu cầu: Viết một hàm nhận vào một chuỗi và thêm dấu gạch ngang bên trái và bên phải của mỗi nguyên âm (a, e, i, o, u).

    Ví dụ:
        dashed("28Tech") ➞ "28T-e-ch"

        dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"
        
        dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
        
    Ghi chú:
        - Một chuỗi có thể chứa nguyên âm viết hoa và viết thường.
        - Y không được coi là một nguyên âm.
*/

const dashed = (str) => {
    const regex = /([aeiou])/gi;

    // cách 1
    // return str.replace(regex, (match) => '-' + match + '-');

    // cách 2: lưu ý phải gôm nhóm mới dùng được $
    return str.replace(regex, '-$1-');
}

let vidu_01 = dashed("28Tech");
let vidu_02 = dashed("Carpe Diem");
let vidu_03 = dashed("Fight for your right to party!");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);