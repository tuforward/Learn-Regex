/**
    Khoảng trắng giữa chữ thường và chữ hoa

    Yêu cầu: Viết một hàm chèn một khoảng trắng giữa mỗi cặp ký tự trong đó ký tự thứ nhất là chữ thường và ký tự thứ hai là chữ hoa.

    Ví dụ:
        insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

        insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

        insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
*/

const insertWhitespace = (str) => {
    const regex = /([a-z])([A-Z])/g;
    /**
    Trong đó:
        [a-z] tìm kiếm một chữ cái viết thường.

        [A-Z] tìm kiếm một chữ cái viết hoa.

        ( ... ) định nghĩa các nhóm kết quả trong regex.

        $1 và $2 đại diện (tham chiếu đến) cho kết quả của các nhóm được định nghĩa, tức là chữ cái viết thường và chữ cái viết hoa.
    */

    const matchString = str.replace(regex, '$1 $2');
    
    return matchString;
}

let vidu_01 = insertWhitespace("SheWalksToTheBeach");
let vidu_02 = insertWhitespace("MarvinTalksTooMuch");
let vidu_03 = insertWhitespace("TheGreatestUpsetInHistory");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);