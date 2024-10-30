/**
    Đếm số lượng chữ in hoa

    Yêu cầu: Cho một chuỗi các ký tự, đếm xem có bao nhiêu chữ in hoa trong đó?

    Ví dụ:
        ● capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6
        ● capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14
        ● capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0
*/

function capitalLetters(str) {
    const pattern = /[A-Z]/g;

    const ans = str.match(pattern);
   
    return (ans ? ans.length : 0);
}

let vidu_01 = capitalLetters("fvLzpxmgXSDrobbgMVrc");
let vidu_02 = capitalLetters("JMZWCneOTFLWYwBWxyFw");
let vidu_03 = capitalLetters("mqeytbbjwqemcdrdsyvq");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);