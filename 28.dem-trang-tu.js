/**
    Đếm trạng từ

    Yêu cầu: 
        - Viết một hàm đếm số lượng trạng từ trong một câu.
        - Một trạng từ là một từ kết thúc bằng "ly".

    Ví dụ:
        countAdverbs("She ran hurriedly towards the stadium.") ➞ 1

        countAdverbs("She ate the lasagna heartily and noisily.") ➞ 2

        countAdverbs("He hates potatoes.") ➞ 0

        countAdverbs("He was happily, crazily, foolishly over the moon.") ➞ 3

    Ghi chú:
        - KHÔNG đếm các từ mà "ly" ở đầu hoặc ở giữa (ví dụ: Lysol, Illya).
        - Với mục đích của bài tập này, bỏ qua sự phức tạp của ngôn ngữ Anh (một số tính từ cũng kết thúc bằng "ly").
*/

const countAdverbs = (str) => {
    const regex = /\b\w+ly/g;

    const match = str.match(regex);
    return match ? match.length : 0;
}

let vidu_01 = countAdverbs("She ran hurriedly towards the stadium.");
let vidu_02 = countAdverbs("She ate the lasagna heartily and noisily.");
let vidu_03 = countAdverbs("He hates potatoes.");
let vidu_04 = countAdverbs("He was happily, crazily, foolishly over the moon.");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);