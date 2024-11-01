/**
        Owofied a Sentence

        Yêu cầu: Tạo một hàm nhận một câu và biến mọi "i" thành "wi" và "e" thành "we", và thêm "owo" vào cuối

        Ví dụ:
            owofied("I'm gonna ride 'til I can't no more")
            ➞ "I'm gonna rwidwe 'twil I can't no morwe owo"

            owofied("Do you ever feel like a plastic bag")
            ➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"

            owofied("Cause baby you're a firework")
            ➞ "Causwe baby you'rwe a fwirwework owo"
*/

const owofied = function (str) {
    const regexI = /i/g;
    const regexE = /e/g;

    let replaceStr = str.replace(regexI, 'wi');
    replaceStr = replaceStr.replace(regexE, 'we') + ' owo';

    // cách ngắn gọn hơn nè
    // const replaceStr = str.replace(/i/g, "wi").replace(/e/g, "we");

    return replaceStr;
}

let vidu_01 = owofied("I'm gonna ride 'til I can't no more");
let vidu_02 = owofied("Do you ever feel like a plastic bag");
let vidu_03 = owofied("Cause baby you're a firework");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);