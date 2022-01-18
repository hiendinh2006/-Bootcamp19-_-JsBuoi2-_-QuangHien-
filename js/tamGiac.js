// Mô hình 3 khối
// Khối 1: Người dùng nhập 3 cạnh của tam giác
// Khối 2: 
    // Bước 1: Nắm bắt sự kiện của nút button.
    // Bước 2: Khai báo biến vào gán giá trị mà người dùng nhập vào cho biến.
    // Bước 3: Kiểm tra giá trị của người dùng có phụ hợp với phép tính, nếu sai yêu cầu nhập lại.
    // Bước 4: Thực hiện phép so sánh
        // Với cạnh 1 = cạnh 2 và cạnh 2 bằng cạnh 3 cho kết quả tam giác đều.
        // Với cạnh 1 bằng cạnh 2 hoặc cạnh 1 bằng canh 3 hoặc cạnh 3 bằng cạnh 1 thì cho kết quả tam giác cân.
        // Với 2 canh binh phường bằng cạnh còn lại (Pytago) thì xuất kết quả tam giác vuông.
        // Và 3 cạnh khác nhau thì cho kết qủa tam giác thường
    // Bước 5: Xuất kết quả cuối cùng ứng với phép tính toán đươc.
// Khối 3: Xuất kết quả là tam giác gì ra màn hình.




var tamGiacEl = document.querySelector("#btntamGiac").onclick = function() {
    var canh1 = document.querySelector("#canh1").value;
    var canh2 = document.querySelector("#canh2").value;
    var canh3 = document.querySelector("#canh3").value;




    if (isNaN(canh1) || isNaN(canh2) || isNaN(canh3)) {
        console.log("Nhập sai, mời nhập lại!!!")
        document.getElementById("d").innerHTML = "Nhập sai, mời nhập lại"
    } else if (canh1==canh2 && canh2===canh3) {
        console.log("Tam giác đều")
        document.getElementById("d").innerHTML = "Tam giác đều"
    } else if (canh1==canh2 || canh2===canh3 || canh3===canh1) {
        console.log("Tam giác cân")
        document.getElementById("d").innerHTML = "Tam giác cân"
    } else if ((canh1 * canh1 == canh2 * canh2 + canh3 * canh3) || (canh2 * canh2 == canh1 * canh1 + canh3 * canh3) || (canh3 * canh3 == canh1 * canh1 + canh2 * canh2)){
        console.log("Tam giác vuông")
        document.getElementById("d").innerHTML = "Tam giác vuông"
    } else if (canh1!==canh2 || canh2 !== canh3 || canh3 !== canh1){
        console.log("Tam giác thường")
        document.getElementById("d").innerHTML = "Tam giác thường"
    }
}