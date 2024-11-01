/**
        Even Number?

        Yêu cầu: 
            +   Viết một hàm và chuyền vào một chuỗi các chữ số, kiểm tra xem số cuối là số chẵn hay lẻ.
            
            +   Nếu là số chẵn trả ra true.

            +   Nếu là số lẻ trả ra false.

        Ví dụ:
            "2341" ➞ false

            "132" ➞ true

            "29" ➞ false

            "5578" ➞ true
*/

const isLast = (str) => {
    const regex = /^\d+[02468]$/;

    // lưu ý phải có dấu $ ở cuối để xác định đảm bảo có kí tự số chẵn ở cuối nếu không ban đầu nó tìm thấy dãy số ở đầu nó vẫn thấy đúng

    const ans = regex.test(str);
    return ans;
}

let vidu_01 = isLast("2341");
let vidu_02 = isLast("132");
let vidu_03 = isLast("29");
let vidu_04 = isLast("5578");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);