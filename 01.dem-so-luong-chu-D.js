/**
        "Đếm có bao nhiêu chữ 'D' trong một câu.

        Yêu cầu: 
            +   Tạo hàm đếm số chữ D trong một câu.
            +   Không phân biệt chữ hoa, chữ thường

        Ví dụ:
            countD("My friend Dylan got distracted in school.") ➞ 4
            countD("Debris was scattered all over the yard.") ➞ 3
            countD("The rodents hibernated in their den.") ➞ 3
 */

const countD = (str) => {
    const regex = /d/gi;
    
    const find = str.match(regex);
    
    return (find ? find.length : 0);
}

let vidu_01 = countD("My friend Dylan got distracted in school.");
let vidu_02 = countD("Debris was scattered all over the yard.");
let vidu_03 = countD("The rodents hibernated in their den.");
let vidu_04 = countD("xin chao cac bn.");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);