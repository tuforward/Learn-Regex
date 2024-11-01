/**
        Tiếng hét của người Scotland

        Yêu cầu: 
            +   Giọng đọc tiếng Scotland mạnh mẽ khiến các nguyên âm (u, e, o, a, i) khi đọc giống như là đọc chữ "e", vì vậy bạn nên thay thế mọi nguyên âm (u, e, o, a, i) bằng chữ "e".

            +   Ngoài ra, do giọng nói mạnh mẽ, vì vậy hãy trả về một chuỗi đã được viết hoa.

        Ví dụ:
            convertToScotland("hello world")
            ➞ "HELLE WERLD"

            convertToScotland("Mr. Fox was very naughty")
            ➞ "MR. FEX WES VERY NEEGHTY"

            convertToScotland("Butterflies are beautiful!")
            ➞ "BETTERFLEES ERE BEEETEFEL!"
*/

function convertToScotland(str) {
    const regex = /[ueoai]/gi; // tìm theo tập hợp có một trong những chữ cái sau

    // chuyển toàn chuỗi thành in hoa hết
    str = str.toUpperCase();

    // thay thế các nguyên âm thành chữ E
    const replaceStr = str.replace(regex, 'E');
    
    return replaceStr;
}

let vidu_01 = convertToScotland("hello world");
let vidu_02 = convertToScotland("Mr. Fox was very naughty");
let vidu_03 = convertToScotland("Butterflies are beautiful!");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);