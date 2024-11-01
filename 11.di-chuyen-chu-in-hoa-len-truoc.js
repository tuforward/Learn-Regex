/**
        Di chuyển chữ in hoa lên phía trước

        Yêu cầu: Tạo hàm di chuyển tất cả các chữ in hoa về phía trước một từ.

        Ví dụ:
            capitalToFront("hApPy") ➞ "APhpy"

            capitalToFront("moveMENT") ➞ "MENTmove"

            capitalToFront("shOrtCAKE") ➞ "OCAKEshrt"
*/

function capitalToFront(str) {
    const regex_UpperCase = /[A-Z]+/g;
    const regex_LowerCase = /[a-z]+/g;

    const strUpperCase = str.match(regex_UpperCase);
    const strLowerCase = str.match(regex_LowerCase);

    // nếu không tìm thấy từ in hoa thì trả về chuỗi ban đầu
    if(strUpperCase) return str;
    
    return strUpperCase.join("") + strLowerCase.join("");
}

let vidu_01 = capitalToFront("hApPy");
let vidu_02 = capitalToFront("moveMENT");
let vidu_03 = capitalToFront("shOrtCAKE");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

