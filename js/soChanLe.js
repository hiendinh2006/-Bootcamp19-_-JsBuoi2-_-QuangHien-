// Mô hình 3 khối
// Khối 1: Người dùng nhập 3 số tự nhiên
// Khối 2: 
    // Bước 1: Nắm bắt sự kiện của nút button
    // Bước 2: Khai báo biến vào gán giá trị mà người dùng nhập vào cho biến
    // Bước 3: Kiểm tra giá trị của người dùng có phụ hợp với phép tính, nếu sai thông báo cho người dùng nhập sai vị trí nào
    // Bước 4: Thực hiện phép tính 
        // Xét số thứ 1 % 2 có dư không:
            // - Có: cộng 1 cho biến lẻ
            // - Không: cộng 1 cho biến chẳn
        // Xét số thứ 2 % 2 có dư không:
            // - Có: cộng 1 cho biến lẻ
            // - Không: cộng 1 cho biến chẳn
        // Xét số thứ 3 % 2 có dư không:
            // - Có: cộng 1 cho biến lẻ
            // - Không: cộng 1 cho biến chẳn
    // Bước 5: Xuất kết quả số chẳn lẻ cuối cùng
// Khối 3: Xuất kết quả ra màn hình có bao nhiêu số chẳn, bao nhiêu số lẻ và giá trị người dùng nhập sai!!!




var soThucEl = document.querySelector("#btnchanLe").onclick = function () {
    var soThu1 = document.querySelector("#soThu1").value ;
    var soThu2 = document.querySelector("#soThu2").value ;
    var soThu3 = document.querySelector("#soThu3").value ;
    

    var chan = 0;
    var le = 0;
    
    if (isNaN(soThu1)) {
        console.log('Nhập sai số thứ 1');
        document.getElementById("c1").innerHTML = "Nhập sai số thứ 1"
    } else {
        soThu1 % 2 === 0 ? Number(chan++) : Number(le++);
    }
    if (isNaN(soThu2)) {
        console.log('Nhập sai số thứ 2');
        document.getElementById("c2").innerHTML = "Nhập sai số thứ 2"
    } else {
        soThu2 % 2 === 0 ? Number(chan++) : Number(le++);
    }
    if (isNaN(soThu3)) {
        console.log('Nhập sai số thứ 3');
        document.getElementById("c3").innerHTML = "Nhập sai số thứ 3"
    } else {
        soThu3 % 2 === 0 ? Number(chan++) : Number(le++);
    }
    

    console.log('Có', le , 'số lẻ và có', chan , 'số Chẳn');
    document.getElementById("c4").innerHTML = "Có" +" "+ le +" "+ "số lẻ và có" +" "+ chan +" "+ "số chẳn"
}