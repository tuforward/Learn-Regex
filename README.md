# REGEX: https://regexr.com/

### Câu 1:  "Đếm có bao nhiêu chữ 'D' trong một câu.

Yêu cầu: 
        -   Tạo hàm đếm số chữ D trong một câu.
        -   Không phân biệt chữ hoa, chữ thường

**Ví dụ**
```javascript
        countD("My friend Dylan got distracted in school.") ➞ 4
        countD("Debris was scattered all over the yard.") ➞ 3
        countD("The rodents hibernated in their den.") ➞ 3
```

### Câu 2:  Tiếng hét của người Scotland

Yêu cầu: 
        -   Giọng đọc tiếng Scotland mạnh mẽ khiến các nguyên âm (u, e, o, a, i) khi đọc giống như là đọc chữ "e", vì vậy bạn nên thay thế mọi nguyên âm (u, e, o, a, i) bằng chữ "e".

        -   Ngoài ra, do giọng nói mạnh mẽ, vì vậy hãy trả về một chuỗi đã được viết hoa.

**Ví dụ**
```javascript
        convertToScotland("hello world")
        ➞ "HELLE WERLD"

        convertToScotland("Mr. Fox was very naughty")
        ➞ "MR. FEX WES VERY NEEGHTY"

        convertToScotland("Butterflies are beautiful!")
        ➞ "BETTERFLEES ERE BEEETEFEL!"
```

### Câu 3:  Owofied a Sentence

Yêu cầu: Tạo một hàm nhận một câu và biến mọi "i" thành "wi" và "e" thành "we", và thêm "owo" vào cuối

**Ví dụ**
```javascript
        owofied("I'm gonna ride 'til I can't no more")
        ➞ "I'm gonna rwidwe 'twil I can't no morwe owo"

        owofied("Do you ever feel like a plastic bag")
        ➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"

        owofied("Cause baby you're a firework")
        ➞ "Causwe baby you'rwe a fwirwework owo"
```

### Câu 4:  Tìm Slug dựa vào URL

Yêu cầu: Viết một hàm truyền vào chuỗi URL, sau đó trả về Slug của URL đó.

**Ví dụ**
```javascript
        slug28Tech("https://28tech.com.vn/lap-trinh-c-co-ban-toi-nang-cao")
        ➞ "lap-trinh-c-co-ban-toi-nang-cao"

        slug28Tech("https://28tech.com.vn/lap-trinh-front-end")
        ➞ "lap-trinh-front-end"

        slug28Tech("https://28tech.com.vn/lap-trinh-back-end-nodejs")
        ➞ "lap-trinh-back-end-nodejs"
```

### Câu 5:  Letters Only 1 (Chỉ chữ cái 1)

Yêu cầu: Viết một hàm loại bỏ bất kỳ ký tự không phải là chữ cái từ một chuỗi, trả về chuỗi mới chỉ chứa các chữ cái.

**Ví dụ**
```javascript
        lettersOnly("R!=:~0o0./c&}9k`60=y") ➞ "Rocky"

        lettersOnly("^,]%4B|@56a![0{2m>b1&4i4") ➞ "Bambi"

        lettersOnly("^U)6$22>8p).") ➞ "Up"
```

### Câu 6:  Find the Time (Tìm thời gian)

Yêu cầu: 
        +   Viết hàm chuyền vào một chuỗi, sau đó tìm thời gian trong chuỗi đó và trả về một mảng các thời gian tìm được.

        +   Thời gian có định dạng: giờ:phút. Cả giờ và phút đều có hai chữ số, ví dụ như 09:00.

        +   Trong bài tập này không cần kiểm tra tính chính xác của thời gian, vì vậy 25:99 cũng có thể coi là kết quả hợp lệ.

**Ví dụ**
```javascript
        findTime("Bữa sáng lúc 09:00 ăn ở phòng 123:456")
        ➞ ["09:00"]

        findTime("Bữa sáng lúc 09:00 ăn ở phòng 123:456. Bữa tối ăn lúc 20:30 ở phòng 222:333")
        ➞ ["09:00", "20:30"]
```

### Câu 7:  Even Number?

Yêu cầu: 
        +   Viết một hàm và chuyền vào một chuỗi các chữ số, kiểm tra xem số cuối là số chẵn hay lẻ.

        +   Nếu là số chẵn trả ra true.

        +   Nếu là số lẻ trả ra false.

**Ví dụ**
```javascript
        "2341" ➞ false

        "132" ➞ true

        "29" ➞ false

        "5578" ➞ true
```

### Câu 8:  Valid Zip Code

Yêu cầu: 
        +   Mã zip bao gồm 5 chữ số liên tiếp.

        +   Cho một chuỗi, viết một hàm để xác định xem chuỗi đầu vào có phải là một mã zip hợp lệ hay không.

        +   Một mã zip hợp lệ là như sau:
                -  Chỉ chứa các số (không được phép chứa ký tự khác).
                -  Không được chứa bất kỳ khoảng trắng nào.
                -  Chỉ có 5 chữ số.

**Ví dụ**
```javascript
        isValid("59001") ➞ true

        isValid("853a7") ➞ false

        isValid("732 32") ➞ false

        isValid("393939") ➞ false
```

### Câu 9:  Kiểm tra file hợp lệ hay không

Yêu cầu: 
        +   Giả sử một chương trình chỉ đọc tệp .js hoặc .jsx.

        +   Viết hàm chấp nhận đường dẫn tệp và trả về true nếu có thể đọc tệp và false nếu không thể.

**Ví dụ**
```javascript
        isJS("/users/user.jsx") ➞ true

        isJS("/users/user.js") ➞ true

        isJS("/users/user.ts") ➞ false
```

### Câu 10:  Có bao nhiêu chữ số thập phân?

Yêu cầu: 
        +   Tạo một hàm trả về số lượng chữ số thập phân mà một số có.

        +   Bất kỳ số 0 nào sau dấu thập phân cũng được tính vào số lượng chữ số thập phân.

**Ví dụ**
```javascript
        getDecimalPlaces("43.20") ➞ 2

        getDecimalPlaces("400") ➞ 0

        getDecimalPlaces("3.1") ➞ 1
```

### Câu 11:  Di chuyển chữ in hoa lên phía trước

Yêu cầu: Tạo hàm di chuyển tất cả các chữ in hoa về phía trước một từ.

**Ví dụ**
```javascript
        capitalToFront("hApPy") ➞ "APhpy"

        capitalToFront("moveMENT") ➞ "MENTmove"

        capitalToFront("shOrtCAKE") ➞ "OCAKEshrt"
```

### Câu 12:  Xác thực mã PIN ATM

Yêu cầu: 
        +   Máy ATM cho phép mã PIN gồm 4 hoặc 6 chữ số và mã PIN không được chứa chữ cái.

        +   Hãy tạo một hàm nhận vào một chuỗi và trả về true nếu mã PIN hợp lệ và trả về false nếu mã PIN không hợp lệ.

**Ví dụ**
```javascript
        validatePIN("1234") ➞ true

        validatePIN("12345") ➞ false

        validatePIN("a234") ➞ false

        validatePIN("") ➞ false

        validatePIN("123456") ➞ true
```

### Câu 13:  Tách mã sản phẩm

Yêu cầu: 
        +   Bạn có một dãy mã sản phẩm có định dạng sau: "[chữ cái][chữ số]".

        +   Tạo một hàm chia các chuỗi này thành các phần chữ cái và chữ số.

**Ví dụ**
```javascript
        splitCode("TEWA8392") ➞ ["TEWA", 8392]

        splitCode("MMU778") ➞ ["MMU", 778]

        splitCode("SRPE5532") ➞ ["SRPE", 5532]
```

### Câu 14:  Valid Variable Names (Tên biến hợp lệ)

Yêu cầu: 
        +  Khi tạo biến, tên biến phải luôn bắt đầu bằng một chữ cái và không được chứa dấu cách.

        +  Các kí tự tiếp theo được phép chứa số và dấu gạch dưới.

        +  Tạo một hàm trả về true nếu tên biến đã cho hợp lệ, nếu không thì trả về false.

**Ví dụ**
```javascript
        variableValid("fullName") ➞ true

        variableValid("full_name") ➞ true

        variableValid("fullname") ➞ true

        variableValid("2fullName") ➞ false

        variableValid("full-name") ➞ false

        variableValid("full name") ➞ false

        variableValid("FullName") ➞ true
```

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