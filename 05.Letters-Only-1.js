/**
        Letters Only 1 (Chỉ chữ cái 1)

        Yêu cầu: Viết một hàm loại bỏ bất kỳ ký tự không phải là chữ cái từ một chuỗi, trả về chuỗi mới chỉ chứa các chữ cái.

        Ví dụ:
            lettersOnly("R!=:~0o0./c&}9k`60=y") ➞ "Rocky"

            lettersOnly("^,]%4B|@56a![0{2m>b1&4i4") ➞ "Bambi"

            lettersOnly("^U)6$22>8p).") ➞ "Up"
 */

function lettersOnly(str) {
    const regex = /[a-z]/gi;

    const ans = str.match(regex).join("");

    return ans;
}

let vidu_01 = lettersOnly("R!=:~0o0./c&}9k`60=y");
let vidu_02 = lettersOnly("^,]%4B|@56a![0{2m>b1&4i4");
let vidu_03 = lettersOnly("^U)6$22>8p).");
let vidu_04 = lettersOnly("^Uuu)6$22>8p).");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);