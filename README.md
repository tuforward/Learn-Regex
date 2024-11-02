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
- Viết hàm chuyền vào một chuỗi, sau đó tìm thời gian trong chuỗi đó và trả về một mảng các thời gian tìm được.

- Thời gian có định dạng: giờ:phút. Cả giờ và phút đều có hai chữ số, ví dụ như 09:00.

- Trong bài tập này không cần kiểm tra tính chính xác của thời gian, vì vậy 25:99 cũng có thể coi là kết quả hợp lệ.

**Ví dụ**
```javascript
findTime("Bữa sáng lúc 09:00 ăn ở phòng 123:456")
➞ ["09:00"]

findTime("Bữa sáng lúc 09:00 ăn ở phòng 123:456. Bữa tối ăn lúc 20:30 ở phòng 222:333")
➞ ["09:00", "20:30"]
```

### Câu 7:  Even Number?

Yêu cầu: 
- Viết một hàm và chuyền vào một chuỗi các chữ số, kiểm tra xem số cuối là số chẵn hay lẻ.

- Nếu là số chẵn trả ra true.

- Nếu là số lẻ trả ra false.

**Ví dụ**
```javascript
"2341" ➞ false

"132" ➞ true

"29" ➞ false

"5578" ➞ true
```

### Câu 8:  Valid Zip Code

Yêu cầu: 
- Mã zip bao gồm 5 chữ số liên tiếp.

- Cho một chuỗi, viết một hàm để xác định xem chuỗi đầu vào có phải là một mã zip hợp lệ hay không.

- Một mã zip hợp lệ là như sau:
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
- Giả sử một chương trình chỉ đọc tệp .js hoặc .jsx.

- Viết hàm chấp nhận đường dẫn tệp và trả về true nếu có thể đọc tệp và false nếu không thể.

**Ví dụ**
```javascript
isJS("/users/user.jsx") ➞ true

isJS("/users/user.js") ➞ true

isJS("/users/user.ts") ➞ false
```

### Câu 10:  Có bao nhiêu chữ số thập phân?

Yêu cầu: 
- Tạo một hàm trả về số lượng chữ số thập phân mà một số có.

- Bất kỳ số 0 nào sau dấu thập phân cũng được tính vào số lượng chữ số thập phân.

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
- Máy ATM cho phép mã PIN gồm 4 hoặc 6 chữ số và mã PIN không được chứa chữ cái.

- Hãy tạo một hàm nhận vào một chuỗi và trả về true nếu mã PIN hợp lệ và trả về false nếu mã PIN không hợp lệ.

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
- Bạn có một dãy mã sản phẩm có định dạng sau: "[chữ cái][chữ số]".

- Tạo một hàm chia các chuỗi này thành các phần chữ cái và chữ số.

**Ví dụ**
```javascript
splitCode("TEWA8392") ➞ ["TEWA", 8392]

splitCode("MMU778") ➞ ["MMU", 778]

splitCode("SRPE5532") ➞ ["SRPE", 5532]
```

### Câu 14:  Valid Variable Names (Tên biến hợp lệ)

Yêu cầu: 
- Khi tạo biến, tên biến phải luôn bắt đầu bằng một chữ cái và không được chứa dấu cách.

- Các kí tự tiếp theo được phép chứa số và dấu gạch dưới.

- Tạo một hàm trả về true nếu tên biến đã cho hợp lệ, nếu không thì trả về false.

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

### Câu 15:  Valid Hex Code (Mã Hex hợp lệ)

Yêu cầu: 
- Tạo hàm xác định xem một chuỗi có phải là mã hex hợp lệ hay không.

- Mã hex phải bắt đầu bằng phím thăng # và có độ dài chính xác là 6 ký tự.

- Mỗi ký tự phải là một chữ số từ 0-9 hoặc một ký tự chữ cái từ A-F.

- Tất cả các ký tự chữ cái có thể là chữ hoa hoặc chữ thường.

**Ví dụ**
```javascript
isValidHexCode("#CD5C5C") ➞ true

isValidHexCode("#EAECEE") ➞ true

isValidHexCode("#eaecee") ➞ true

isValidHexCode("#CD5C58C") ➞ false

isValidHexCode("#CD5C5Z") ➞ false

isValidHexCode("#CD5C&C") ➞ false

isValidHexCode("CD5C5C") ➞ false
```

### Câu 16:  Khoảng trắng giữa chữ thường và chữ hoa

Yêu cầu: Viết một hàm chèn một khoảng trắng giữa mỗi cặp ký tự trong đó ký tự thứ nhất là chữ thường và ký tự thứ hai là chữ hoa.

**Ví dụ**
```javascript
insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
```

### Câu 17:  Có bao nhiêu nguyên âm?

Yêu cầu:
- Tạo một hàm nhận vào một chuỗi và trả về số lượng nguyên âm có trong chuỗi đó.

- a, e, i, o, u được coi là nguyên âm.

- Tất cả các trường hợp kiểm tra đều là một từ và chỉ chứa các ký tự chữ cái.

**Ví dụ**
```javascript
countVowels("Celebration") ➞ 5

countVowels("Palm") ➞ 1

countVowels("Prediction") ➞ 4
```

### Câu 18:  Tìm bomb

Yêu cầu: Tạo một hàm để tìm từ "bomb" trong chuỗi được cung cấp (không phân biệt chữ hoa và chữ thường). Nếu tìm thấy, trả về "Duck!!!", ngược lại trả về "There is no bomb, relax.".

**Ví dụ**
```javascript
bomb("There is a bomb.") ➞ "Duck!!!"

bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"

bomb("This goes boom!!!") ➞ "There is no bomb, relax."
```

### Câu 19:  Xóa nguyên âm khỏi chuỗi

Yêu cầu: 
- Tạo một hàm nhận vào một chuỗi và trả về một chuỗi mới với tất cả các nguyên âm được loại bỏ.

- a, e, i, o, u được coi là nguyên âm.

**Ví dụ**
```javascript
removeVowels("I have never seen a thin person drinking Diet Coke.")
➞ " hv nvr sn  thn prsn drnkng Dt Ck."

removeVowels("We're gonna build a wall!")
➞ "W'r gnn bld  wll!"

removeVowels("Happy Thanksgiving to all--even the haters and losers!")
➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
```

### Câu 20:  Trả về chỉ mục của nguyên âm đầu tiên

Yêu cầu: 
- Viết một hàm trả về chỉ số của nguyên âm đầu tiên trong một chuỗi.

- a, e, i, o, u được coi là nguyên âm.

**Ví dụ**
```javascript
firstVowel("apple") ➞ 0

firstVowel("hello") ➞ 1

firstVowel("STRAWBERRY") ➞ 3

firstVowel("pInEaPPLe") ➞ 1
```

**Ghi chú:**
- Đầu vào sẽ là các từ đơn.
- Các ký tự trong từ sẽ ở dạng chữ hoa hoặc chữ thường.
- "y" không được coi là nguyên âm.
- Đầu vào luôn chứa một nguyên âm. 

### Câu 21:  Hashes and Pluses

Yêu cầu: Tạo một hàm trả về số lượng ký tự "#" và "+" trong một chuỗi.

**Ví dụ**
```javascript
hashPlusCount("###+") ➞ [3, 1]

hashPlusCount("##+++#") ➞ [3, 3]

hashPlusCount("#+++#+#++#") ➞ [4, 6]

hashPlusCount("") ➞ [0, 0]
```

**Ghi chú:**
- Trả về [0, 0] cho một chuỗi rỗng.
- Trả về theo thứ tự: [hashes, pluses].

### Câu 22:  Chuyển đổi các từ thành chuỗi nhị phân

Yêu cầu: Viết một hàm biến đổi tất cả các chữ cái từ [a, m] thành 0 và các chữ cái từ [n, z] thành 1 trong một chuỗi.

**Ví dụ**
```javascript
convertBinary("house") ➞ "01110"

convertBinary("excLAIM") ➞ "0100000"

convertBinary("moon") ➞ "0111"
```

### Câu 23:  Viết hoa chữ cái đầu tiên của mỗi từ

Yêu cầu: Tạo một hàm nhận một chuỗi làm đối số và chuyển đổi ký tự đầu tiên của mỗi từ thành chữ hoa. Trả về chuỗi đã được định dạng mới.

**Ví dụ**
```javascript
makeTitle("This is a title") ➞ "This Is A Title"

makeTitle("capitalize every word") ➞ "Capitalize Every Word"

makeTitle("I Like Pizza") ➞ "I Like Pizza"

makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
```

### Câu 24:  Xóa các chữ cái ABC

Yêu cầu:
- Tạo một hàm để loại bỏ các ký tự "a", "b" và "c" từ chuỗi được chuyền vào đối số và trả về chuỗi mới đã được sửa đổi.

- Nếu chuỗi được cung cấp không chứa "a", "b" hoặc "c", trả về null.

**Ví dụ**
```javascript
removeABC("This might be a bit hard") ➞ "This might e  it hrd"

removeABC("hello world!") ➞ null

removeABC("") ➞ null
```

### Câu 25:  Nguyên âm đứt đoạn

Yêu cầu: Viết một hàm nhận vào một chuỗi và thêm dấu gạch ngang bên trái và bên phải của mỗi nguyên âm (a, e, i, o, u).

**Ví dụ**
```javascript
dashed("28Tech") ➞ "28T-e-ch"

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
```

**Ghi chú:**
- Một chuỗi có thể chứa nguyên âm viết hoa và viết thường.
- Y không được coi là một nguyên âm.

### Câu 26:  Thay thế nguyên âm bằng ký tự khác

Yêu cầu: 
- Tạo một hàm nhận vào một chuỗi và thay thế các nguyên âm bằng một ký tự khác.
- a = 1
- e = 2
- i = 3
- o = 4
- u = 5

**Ví dụ**
```javascript
replaceVowel("karachi") ➞ "k1r1ch3"

replaceVowel("chembur") ➞ "ch2mb5r"

replaceVowel("khandbari") ➞ "kh1ndb1r3"
```

### Câu 27:  Đếm các chữ cái và chữ số

Yêu cầu: Viết một hàm nhận vào một chuỗi và tính số lượng ký tự chữ cái và chữ số có trong chuỗi đó. Trả về kết quả dưới dạng một đối tượng.

**Ví dụ**
```javascript
countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }

countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }

countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }
```

**Ghi chú:**
- Các chuỗi kiểm tra chỉ chứa các ký tự chữ và số.

- Khoảng trắng không phải là chữ cái.

### Câu 28:  Đếm trạng từ

Yêu cầu: 
- Viết một hàm đếm số lượng trạng từ trong một câu.

- Một trạng từ là một từ kết thúc bằng "ly".

**Ví dụ**
```javascript
countAdverbs("She ran hurriedly towards the stadium.") ➞ 1

countAdverbs("She ate the lasagna heartily and noisily.") ➞ 2

countAdverbs("He hates potatoes.") ➞ 0

countAdverbs("He was happily, crazily, foolishly over the moon.") ➞ 3
```

**Ghi chú:**
- KHÔNG đếm các từ mà "ly" ở đầu hoặc ở giữa (ví dụ: Lysol, Illya).

- Với mục đích của bài tập này, bỏ qua sự phức tạp của ngôn ngữ Anh (một số tính từ cũng kết thúc bằng "ly").

### Câu 29:  Letters Only 2 (Chỉ chữ cái 2)

Yêu cầu: Kiểm tra xem chuỗi đã cho có chỉ chứa các ký tự và dấu cách và tất cả các ký tự có đều viết thường không.

**Ví dụ**
```javascript
lettersOnly("JAVACRIPT") ➞ false

lettersOnly("javascript") ➞ true

lettersOnly("12321313") ➞ false

lettersOnly("i have spaces") ➞ true

lettersOnly("i have numbers(1-10)") ➞ false

lettersOnly("") ➞ false
```

**Ghi chú:**
- Đối số trống sẽ luôn trả về false.

- Giá trị đầu vào có thể bao gồm các ký tự kết hợp (ký tự đặc biệt, chữ cái, số).

### Câu 30:  Hạn chế chữ và số

Yêu cầu: 
- Tạo một hàm trả về true nếu chuỗi đã cho có bất kỳ một trong những điều sau:
        - Chỉ chứa các chữ cái và không có số nào.
        - Chỉ chứa các số và không có chữ cái nào.

- Nếu một chuỗi có cả số và chữ cái, hoặc chứa các ký tự không phù hợp sẽ trả về false.

**Ví dụ**
```javascript
alphanumericRestriction("Bold") ➞ true

alphanumericRestriction("123454321") ➞ true

alphanumericRestriction("H3LL0") ➞ false

alphanumericRestriction("ed@bit") ➞ false
```

**Ghi chú: Bất kỳ chuỗi nào chứa khoảng trắng hoặc rỗng đều nên trả về false.**

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
- Tạo ra một hàm nhận một chuỗi và thay đổi từ "amazing" thành "not amazing".
- Nếu trong chuỗi có từ 28Tech thì giữ nguyên chuỗi không thay đổi

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
- Bạn được cho một mảng với các từ ngẫu nhiên nhưng chương trình của bạn không chấp nhận các từ
- bắt đầu bằng chữ cái viết hoa "C".
- Loại bỏ các từ không được chấp nhận và trả về mảng mới

**Ví dụ**
```javascript
accepted(["Ducks", "Bears", "Cats"]) ➞ ["Ducks", "Bears"]
accepted(["cars", "trucks", "planes"]) ➞ ["cars", "trucks", "planes"]
accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]) ➞ ["Worms", "Bugs", "Beans"]
```

### Câu 36:  Kiểm tra email có hợp lệ không

Yêu cầu: Viết một hàm cho người dùng nhập vào email và kiểm tra xem email có hợp lệ không

**Ví dụ**
```javascript
validateEmail("levana@gmail.com") ➞ true
validateEmail("levanb12345@gmail.com") ➞ true
validateEmail("levanc12.34@gmail.com") ➞ true
validateEmail("levand@28tech.com.vn") ➞ true
validateEmail("levane.123@stu.28tech.com.vn") ➞ true
validateEmail("levane.123.stu.28tech.com.vn") ➞ false
validateEmail("levane.123@gmail") ➞ false
validateEmail("levane.123@gmail.") ➞ false
```