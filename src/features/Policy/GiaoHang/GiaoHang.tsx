import React from "react";
import { Table } from "semantic-ui-react";


const GiaoHang = () => {
  return (
    <div>
      <h3>Chính sách giao hàng </h3>
      <h2>1. PHẠM VI ÁP DỤNG</h2>
      <p>Những khu vực tỉnh thành phố Hồ Chí Minh có hệ thống Tenet</p>
      <h2>2. THỜI GIAN NHẬN HÀNG</h2>
      <p>
        Tenet nhận giao hàng nhanh trong ngày với khoảng cách từ các siêu thị có
        hàng đến điểm giao là 20 Km. Khoảng cách lớn hơn 20 Km nhân viên chúng
        tôi sẽ tư vấn cách thức giao hàng thuận tiện nhất cho khách hàng. Cụ thể
        :
      </p>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Khoảng cách đến nhà khách hàng từ hệ thống bán hàng gần nhất
            </Table.HeaderCell>
            <Table.HeaderCell>Tp.HCM</Table.HeaderCell>
            <Table.HeaderCell>Tỉnh khác</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Dưới 5 Km</Table.Cell>
            <Table.Cell>Giao trong 30 phút</Table.Cell>
            <Table.Cell>Giao trong 3 ngày</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5-10 Km</Table.Cell>
            <Table.Cell>Giao trong 1 tiếng</Table.Cell>
            <Table.Cell>Giao trong 3 ngày</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>10-20 Km</Table.Cell>
            <Table.Cell>Giao trong 2 tiếng</Table.Cell>
            <Table.Cell>Giao trong 3 ngày</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Lưu ý</Table.Cell>
            <Table.Cell>Thời gian giao hàng 9:00 đến 21:00</Table.Cell>
            <Table.Cell>Thời gian giao hàng 9:00 đến 20:00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <h2>3. PHÍ GIAO HÀNG</h2>
      <p>
        + Đối với đơn hàng giá trị giá 500.000đ trở xuống, phí giao hàng áp
        dụng: 30.000đ, đơn hàng trên 500.000đ giao MIỄN PHÍ.
      </p>
      <p>
        + Nếu khoảng cách giao hàng lớn hơn 20 km tổng đài 1800 1060 sẽ tư vấn
        cách thức giao hàng MIỄN PHÍ thuận tiện nhất cho khách hàng
      </p>
      <p>
        + Riêng đối với điện thoại chỉ bán online sẽ có phí chuyển hàng sẽ được
        thông báo tại website khi đặt hàng.
      </p>
      <h2>4. ĐEM THÊM NHIỀU SẢN PHẨM, MẪU MÃ KHÁC ĐỂ KHÁCH HÀNG LỰA TẠI NHÀ</h2>
      <p>
        Nếu có sự băn khoăn trong việc lựa chọn sản phẩm, hãy để nhân viên giao
        hàng của chúng tôi sẽ đem hơn 2 sản phẩm (đem thêm mẫu máy khác, đem
        thêm màu khác) theo yêu cầu của bạn đến tận nơi tư vấn.{" "}
      </p>
      <p>
        - Kỹ thuật viên của chúng tôi sẽ giúp Quý khách khám phá kỹ hơn những
        tính năng ưu việt của từng sản phầm để Quý khách có được lựa chọn tốt
        nhất. <br/> - Quý khách chỉ thanh toán khi thật sự hài lòng với sản phẩm và
        chất lượng dịch vụ của chúng tôi. Chúng tôi sẽ không tính bất kỳ khoản
        phí nào cho đến khi Quý khách hoàn toàn đồng ý.<br/> - Khi Quý khách hoàn
        toàn hài lòng với sự lựa chọn của mình, Quý khách có thể thanh toán ngay
        bằng các thẻ quốc tế, nội địa mà không cần phải ra ngân hàng rút tiền
        mặt trước.<br/> - Hãy gọi cho chúng tôi bất cứ lúc nào Quý khách cần được
        phục vụ với chất lượng 5 sao hoàn hảo. Cập nhật lần cuối: 5/8/2020
      </p>
    </div>
  );
};

export default GiaoHang;
