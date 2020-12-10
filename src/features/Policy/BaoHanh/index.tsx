import React from "react";
import { Link } from "react-router-dom";

const BaoHanh = () => {
  return (
    <div>
      <h2>TRUNG TÂM BẢO HÀNH SẢN PHẨM</h2>
      <p>
        Tenet xin lỗi vì sự cố khiến điện thoại của quý khách bị hỏng và phải đi
        bảo hành. Tenet có 2 hỗ trợ dành riêng cho khách hàng mua
        điện thoại tại Tenet trong thời gian đi bảo hành như sau: <br />
        1. Tenet cung cấp cho khách hàng một điện thoại đã qua sử
        dụng để khách hàng sử dụng tạm thời trong thời gian bảo hành. Chi tiết
        máy cung cấp quý khách có thể hỏi nhân viên siêu thị hoặc xem trên giấy
        tiếp nhận bảo hành/sửa chữa dịch vụ.<br/> 2. Nếu máy gửi đi bảo hành quá 15
        ngày hãng bảo hành chưa trả máy cho khách hàng, Tenet có thể hỗ trợ khách
        thu lại máy hỏng với mức giá hỗ trợ (đối với các sản phẩm iPhone sẽ áp
        dụng theo chính sách của Apple). Lưu ý: Chỉ áp dụng thu mua cho điện
        thoại và phải còn trong điều kiện bảo hành.
      </p>
        <Link to='/policy/doitra' style={{color:"blue !important"}}> {">>"} Xem thêm chính sách đổi trả</Link>
    </div>
  );
};

export default BaoHanh;
