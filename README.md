# REGEX: https://regexr.com/

### Câu 31:  Ký tự Cuối Cùng là "N"?

Yêu cầu: Tạo ra một hàm nhận một chuỗi (một tên ngẫu nhiên). Nếu ký tự cuối cùng của tên là "n", trả về true,
ngược lại trả về false

**Ví dụ**
```javascript
        isLastCharacterN("Aiden") ➞ true
        isLastCharacterN("Piet") ➞ false
        isLastCharacterN("Bert") ➞ false
        isLastCharacterN("Dean") ➞ true
```

### Câu 32:  28Tech is amazing

Yêu cầu: 
    +   Tạo ra một hàm nhận một chuỗi và thay đổi từ "amazing" thành "not amazing".
    +   Nếu trong chuỗi có từ 28Tech thì giữ nguyên chuỗi không thay đổi

**Ví dụ**
```javascript
        amazing("28Tech is amazing.") ➞ "28Tech is amazing."
        amazing("Abc is amazing.") ➞ "Abc is not amazing."
        amazing("Xyz is amazing.") ➞ "Xyz is not amazing."
```

### Câu 33:  Gõ tắt HTML

Yêu cầu: Tạo ra một hàm nhận vào một chuỗi có dạng "tagName*n" sau đó trả về n thẻ tagName

**Ví dụ**
```javascript
        convertStringToTagName("div*2") ➞ "<div></div><div></div>"
        convertStringToTagName("p*1") ➞ "<p></p>"
        convertStringToTagName("li*3") ➞ "<li></li><li></li><li></li>"
```

### Câu 34:  Đếm số lượng chữ in hoa

Yêu cầu: Cho một chuỗi các ký tự, đếm xem có bao nhiêu chữ in hoa trong đó?

**Ví dụ**
```javascript
        capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6
        capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14
        capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0
```

### Câu 35:  Loại phần tử khỏi một mảng

Yêu cầu: 
        +       Bạn được cho một mảng với các từ ngẫu nhiên nhưng chương trình của bạn không chấp nhận các từ
        +       bắt đầu bằng chữ cái viết hoa "C".
        +       Loại bỏ các từ không được chấp nhận và trả về mảng mới

**Ví dụ**
```javascript
        accepted(["Ducks", "Bears", "Cats"]) ➞ ["Ducks", "Bears"]
        accepted(["cars", "trucks", "planes"]) ➞ ["cars", "trucks", "planes"]
        accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]) ➞ ["Worms", "Bugs", "Beans"]
```