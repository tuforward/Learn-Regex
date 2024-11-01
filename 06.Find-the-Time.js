/**
        Find the Time (Tìm thời gian)

        Yêu cầu: 
            +   Viết hàm chuyền vào một chuỗi, sau đó tìm thời gian trong chuỗi đó và trả về một mảng các thời gian tìm được.

            +   Thời gian có định dạng: giờ:phút. Cả giờ và phút đều có hai chữ số, ví dụ như 09:00.

            +   Trong bài tập này không cần kiểm tra tính chính xác của thời gian, vì vậy 25:99 cũng có thể coi là kết quả hợp lệ.

        Ví dụ:
            findTime("Bữa sáng lúc 09:00 ăn ở phòng 123:456")
            ➞ ["09:00"]

            findTime("Bữa sáng lúc 09:00 ăn ở phòng 123:456. Bữa tối ăn lúc 20:30 ở phòng 222:333")
            ➞ ["09:00", "20:30"]
 */

const findTime = function (str) {
    const regex = /(\b\d{2}\b)\:(\b\d{2}\b)/g;
    
    // cách 2:
    // const regex = /\b[0-2][0-9]:[0-5][0-9]\b/g;
    
    const find = str.match(regex);
    
    return find;
}

let vidu_01 = findTime("Bữa sáng lúc 09:00 ăn ở phòng 123:456")
let vidu_02 = findTime("Bữa sáng lúc 09:00 ăn ở phòng 123:456. Bữa tối ăn lúc 20:30 ở phòng 222:333")

console.log(vidu_01);
console.log(vidu_02);