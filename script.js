/* ==========================================================================
   HÀM CẬP NHẬT VÀ KHÔI PHỤC HÌNH ẢNH (Dùng cho Hover & Focus)
   ========================================================================== */

function upDate(previewPic) {
    // Lấy phần tử khung hiển thị lớn có id="image"
    let displayBox = document.getElementById("image");

    // Thay đổi ảnh nền thành đường dẫn ảnh preview đang chọn
    displayBox.style.backgroundImage = "url('" + previewPic.src + "')";

    // Cập nhật nội dung chữ thành thuộc tính alt của ảnh đang chọn
    displayBox.innerHTML = previewPic.alt;
}

function unDo() {
    // Lấy phần tử khung hiển thị lớn
    let displayBox = document.getElementById("image");

    // Khôi phục lại ảnh nền rỗng ban đầu
    displayBox.style.backgroundImage = "url('')";

    // Khôi phục lại dòng chữ hướng dẫn ban đầu
    displayBox.innerHTML = "Rê chuột hoặc nhấn phím Tab để chọn một hình ảnh bên dưới.";
}


/* ==========================================================================
   YÊU CẦU 8: Thêm trình nghe sự kiện onload[span_3](start_span)[span_3](end_span)
   ========================================================================== */
window.onload = function() {
    console.log("Trang web đã tải xong (onload triggered)!");[span_4](start_span)[span_4](end_span)
    
    // Gọi hàm tự động thêm tabindex cho hình ảnh
    addTabFocus();
};


/* ==========================================================================
   YÊU CẦU 9: Thêm chức năng tự động gắn tabindex[span_5](start_span)[span_5](end_span)
   ========================================================================== */
function addTabFocus() {
    // 9a. Thêm thông báo console.log để đảm bảo sự kiện kích hoạt[span_6](start_span)[span_6](end_span)
    console.log("Hàm addTabFocus() đã được gọi thành công!");[span_7](start_span)[span_7](end_span)

    // Lấy tất cả các hình ảnh có class "preview"
    let images = document.querySelectorAll(".preview");

    // 9b. Viết vòng lặp for để lặp qua từng hình ảnh[span_8](start_span)[span_8](end_span)
    for (let i = 0; i < images.length; i++) {[span_9](start_span)[span_9](end_span)
        
        // 9c. Thêm thuộc tính tabindex="0" để hỗ trợ truy cập bằng bàn phím (Tab)[span_10](start_span)[span_10](end_span)
        images[i].setAttribute("tabindex", "0");[span_11](start_span)[span_11](end_span)
    }
}