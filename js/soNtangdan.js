// Mô hình 3 khối
// Khối 1: Người dùng nhập 3 số tự nhiên
// Khối 2: 
    // Bước 1: Nắm bắt sự kiện của nút button
    // Bước 2: Khai báo biến vào gán giá trị mà người dùng nhập vào cho biến
    // Bước 3: Kiểm tra giá trị của người dùng có phụ hợp với phép tính, nếu sai yêu cầu nhập lại
    // Bước 4: Thực hiện phép tính tăng dần
    // Bước 5: Xuất kết quả cuối cùng theo chiều tăng dần
// Khối 3: Xuất kết quả ra màn hình theo thứ tự tăng dần



var soThucEl = document.querySelector("#btnsoThuc").onclick = function () {
    var soThuc1 = document.querySelector("#soN1").value ;
    var soThuc2 = document.querySelector("#soN2").value ;
    var soThuc3 = document.querySelector("#soN3").value ;
    
    soThuc1=Number(soThuc1);
    soThuc2=Number(soThuc2);
    soThuc3=Number(soThuc3);

    text = "Thứ tự tăng dần là:";
    var nhapSai = "Nhập sai rồi làm sao mà xếp -.- Nhập lại đi"

    if (soThuc1 > soThuc2 && soThuc2 > soThuc3) {
        console.log('Thứ tự tăng dần là:',soThuc3 +" "+soThuc2+" "+soThuc1)
        document.getElementById("a").innerHTML =text +" "+ document.querySelector("#soN3").value +" "+ document.querySelector("#soN2").value +" "+ document.querySelector("#soN1").value;
    } else if (soThuc1 > soThuc3 && soThuc3 > soThuc2) {
        console.log('Thứ tự tăng dần là:',soThuc2 +" "+soThuc3+" "+soThuc1)
        document.getElementById("a").innerHTML =text +" "+ document.querySelector("#soN2").value +" "+ document.querySelector("#soN3").value +" "+ document.querySelector("#soN1").value;
    } else if (soThuc2 > soThuc1 && soThuc1 > soThuc3) {
        console.log('Thứ tự tăng dần là:',soThuc3 +" "+soThuc1+" "+soThuc2)
        document.getElementById("a").innerHTML =text +" "+ document.querySelector("#soN3").value +" "+ document.querySelector("#soN1").value +" "+ document.querySelector("#soN2").value;
    } else if (soThuc2 > soThuc3 && soThuc3 > soThuc1) {
        console.log('Thứ tự tăng dần là:',soThuc1 +" "+soThuc3+" "+soThuc2)
        document.getElementById("a").innerHTML =text +" "+ document.querySelector("#soN1").value +" "+ document.querySelector("#soN3").value +" "+ document.querySelector("#soN2").value;
    } else if (soThuc3 > soThuc2 && soThuc2 > soThuc1) {
        console.log('Thứ tự tăng dần là:',soThuc1 +" "+soThuc2+" "+soThuc3)
        document.getElementById("a").innerHTML =text +" "+ document.querySelector("#soN1").value +" "+ document.querySelector("#soN2").value +" "+ document.querySelector("#soN3").value;
    } else if (soThuc3 > soThuc1 && soThuc1 > soThuc2) {
        console.log('Thứ tự tăng dần là:',soThuc2 +" "+soThuc1+" "+soThuc3)
        document.getElementById("a").innerHTML =text +" "+ document.querySelector("#soN2").value +" "+ document.querySelector("#soN1").value +" "+ document.querySelector("#soN3").value;
    }else if (soThuc1 === soThuc2 && soThuc2 > soThuc3) {
        console.log('Thứ tự tăng dần là:',soThuc3 +" "+soThuc2+" "+soThuc1)
        document.getElementById("a").innerHTML =text +" "+ document.querySelector("#soN3").value +" "+ document.querySelector("#soN2").value +" "+ document.querySelector("#soN1").value;
    }else if (soThuc1 === soThuc2 && soThuc2 < soThuc3) {
        console.log('Thứ tự tăng dần là:',soThuc1 +" "+soThuc2+" "+soThuc3)
        document.getElementById("a").innerHTML =text +" "+ document.querySelector("#soN1").value +" "+ document.querySelector("#soN2").value +" "+ document.querySelector("#soN3").value;
    }else if (soThuc1 === soThuc3 && soThuc3 > soThuc2) {
        console.log('Thứ tự tăng dần là:',soThuc2 +" "+soThuc3+" "+soThuc1)
        document.getElementById("a").innerHTML =text +" "+ document.querySelector("#soN2").value +" "+ document.querySelector("#soN3").value +" "+ document.querySelector("#soN1").value;
    }else if (soThuc1 === soThuc3 && soThuc3 < soThuc2) {
        console.log('Thứ tự tăng dần là:',soThuc3 +" "+soThuc1+" "+soThuc2)
        document.getElementById("a").innerHTML =text +" "+ document.querySelector("#soN3").value +" "+ document.querySelector("#soN1").value +" "+ document.querySelector("#soN2").value;
    }else if (soThuc2 === soThuc3 && soThuc3 > soThuc1) {
        console.log('Thứ tự tăng dần là:',soThuc1 +" "+soThuc2+" "+soThuc3)
        document.getElementById("a").innerHTML =text +" "+ document.querySelector("#soN1").value +" "+ document.querySelector("#soN2").value +" "+ document.querySelector("#soN3").value;
    }else if (soThuc2 === soThuc3 && soThuc3 < soThuc1) {
        console.log('Thứ tự tăng dần là:',soThuc2 +" "+soThuc3+" "+soThuc1)
        document.getElementById("a").innerHTML =text +" "+ document.querySelector("#soN2").value +" "+ document.querySelector("#soN3").value +" "+ document.querySelector("#soN1").value;
    }else if (soThuc1 === soThuc2 && soThuc2 === soThuc3) {
        console.log('Thứ tự tăng dần là:',soThuc3 +" "+soThuc2+" "+soThuc1)
        document.getElementById("a").innerHTML = "Ba số bằng nhau!!!";
    }else {
        console.log('Nhập sai rồi làm sao mà xếp -.-')
        document.getElementById("a").innerHTML = nhapSai;
    }
}