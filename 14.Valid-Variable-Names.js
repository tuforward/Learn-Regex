/**
    Valid Variable Names (Tên biến hợp lệ)

    Yêu cầu: 
        +   Khi tạo biến, tên biến phải luôn bắt đầu bằng một chữ cái và không được chứa dấu cách.

        +   Các kí tự tiếp theo được phép chứa số và dấu gạch dưới.

        +   Tạo một hàm trả về true nếu tên biến đã cho hợp lệ, nếu không thì trả về false.

    Ví dụ:
        variableValid("fullName") ➞ true

        variableValid("full_name") ➞ true

        variableValid("fullname") ➞ true

        variableValid("2fullName") ➞ false

        variableValid("full-name") ➞ false

        variableValid("full name") ➞ false

        variableValid("FullName") ➞ true
*/

const variableValid = (name) => {
    // Sử dụng regex để kiểm tra xem tên biến có hợp lệ hay không
    // const regex = /^[a-zA-Z][\w]+$/;
    const regex = /^[a-zA-Z][a-zA-Z0-9_]+$/;
    const result = regex.test(name)
    return result;
  }
  
  // Kiểm tra các ví dụ
  console.log(variableValid("fullName")); // ➞ true
  console.log(variableValid("full_name")); // ➞ true
  console.log(variableValid("fullname")); // ➞ true
  console.log(variableValid("2fullName")); // ➞ false
  console.log(variableValid("full-name")); // ➞ false
  console.log(variableValid("full name")); // ➞ false
  console.log(variableValid("FullName")); // ➞ true
  console.log(variableValid("Full.Name")); // ➞ false