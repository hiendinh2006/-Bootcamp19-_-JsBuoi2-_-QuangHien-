// Mô hình 3 khối
// Khối 1: Người dùng nhập B , M , A , E
// Khối 2: 
    // Bước 1: Nắm bắt sự kiện của nút button
    // Bước 2: Khai báo biến vào gán giá trị mà người dùng nhập vào cho biến
    // Bước 3: Kiểm tra giá trị của người dùng có phụ hợp với phép tính, nếu sai yêu cầu nhập lại
    // Bước 4: Thực hiện lời chào hợp lý với kết quả mà người dùng nhập
    // Bước 5: Xuất kết quả cuối cùng theo kết quả mà người dùng nhập
// Khối 3: Xuất kết quả ra màn hình theo kết quả mà người dùng nhập



var chaoHoiEl = document.querySelector("#btnchaoHoi").onclick = function () {
    var chaoHoi = document.querySelector("#chaoHoi").value ;

    if (chaoHoi === 'B') {
        console.log('Xin chào Bố')
        document.getElementById("b").innerHTML = "Hello Dad"
    }   else if (chaoHoi === 'M') {
        console.log('Xin chào Mẹ')
        document.getElementById("b").innerHTML = "Hello Mom"
    }   else if (chaoHoi === 'A') {
        console.log('Xin chào Anh trai')
        document.getElementById("b").innerHTML = "Hello Bro"
    }   else if (chaoHoi === 'E') {
        console.log('Xin chào Em gái')
        document.getElementById("b").innerHTML = "Hello Sis"
    }   else {
        console.log('Nhập sai khóa máy ráng chịu nha')
        document.getElementById("b").innerHTML = "Nhập sai khóa máy ráng chịu nha"
    }
}