/**
        Tìm Slug dựa vào URL

        Yêu cầu: Viết một hàm truyền vào chuỗi URL, sau đó trả về Slug của URL đó.

        Ví dụ:
            slug28Tech("https://28tech.com.vn/lap-trinh-c-co-ban-toi-nang-cao")
            ➞ "lap-trinh-c-co-ban-toi-nang-cao"

            slug28Tech("https://28tech.com.vn/lap-trinh-front-end")
            ➞ "lap-trinh-front-end"

            slug28Tech("https://28tech.com.vn/lap-trinh-back-end-nodejs")
            ➞ "lap-trinh-back-end-nodejs"
*/

const slug28Tech = (str) => {
    const regex = /(\w+)\-/;
    
    const findIndex = str.match(regex).index; // dùng hàm match để tìm vị trí bắt đầu của slug

    const slug = str.slice(findIndex); // cắt lấy chuỗi mới từ vị trí index
    return slug;
}

let vidu_01 = slug28Tech("https://28tech.com.vn/lap-trinh-c-co-ban-toi-nang-cao");
let vidu_02 = slug28Tech("https://28tech.com.vn/lap-trinh-front-end");
let vidu_03 = slug28Tech("https://28tech.com.vn/lap-trinh-back-end-nodejs");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

console.log("-------------------------------------------------------------------");
// Cách 2
const slug28Tech_Cach2 = (str) => {
    // kí hiệu \/ là biểu diễn cho kí tự /
    // kí hiệu \. là ___________________ .
    // kí hiệu (.+) lấy tất cả các kí tự ít nhất 1 (bao gồm - _ , ...)
    const regex = /https:\/\/28tech\.com\.vn\/(.+)/;

    const find = str.match(regex);
    
    return find[1];
}

let vidu_04 = slug28Tech_Cach2("https://28tech.com.vn/lap-trinh-c-co-ban-toi-nang-cao");
let vidu_05 = slug28Tech_Cach2("https://28tech.com.vn/lap-trinh-front-end");
let vidu_06 = slug28Tech_Cach2("https://28tech.com.vn/lap-trinh-back-end-nodejs");

console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);