import React from "react";
import { Table } from "semantic-ui-react";

const ThanhToan = () => {
  return (
    <div>
      <h2>LỰA CHỌN THANH TOÁN</h2>
      <h3>I. Thanh toán tiền mặt</h3>
      <hr />
      <h4>1. Tại cửa hàng</h4>
      <p>
        Quý khách có thể đến mua hàng & thanh toán trực tiếp tại các nơi thuộc
        hệ thống Tenet
      </p>
      <h4>2. Tại nhà/nơi nhận hàng</h4>
      <p>
        Thanh toán cho nhân viên giao hàng trực tiếp của Tenet tại bất kỳ đâu bạn
        yêu cầu (trong phạm vi 20KM tính từ cửa hàng).
      </p>
      <h3>II.Thanh toán bằng thẻ ATM, Visa, MasterCard</h3>
      <hr />
      <h4>1. Tại cửa hàng</h4>
      <p>Cà thẻ trực tiếp tại hệ thống cửa hàng.</p>
      <h4>2. Tại nhà/nơi nhận hàng</h4>
      <p>
        Khách hàng vui lòng yêu cầu trước để nhân viên đem theo máy hỗ trợ thanh
        toán và cà thẻ.
      </p>
      <h3>III. Chuyển khoản</h3>
      <hr />
      <h4>
        Chuyển khoản qua ngân hàng OCB cho chúng tôi theo thông tin:
      </h4>
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Tên ngân hàng</Table.Cell>
            <Table.Cell>
              {" "}
              Ngân hàng phương đông - OCB - chi nhánh Gia Định, TP HCM
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Chủ tài khoản</Table.Cell>
            <Table.Cell> CONG TY CO PHAN Tenet</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell> Số tài khoản</Table.Cell>
            <Table.Cell> 044.100.061.51.56</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Nội dung</Table.Cell>
            <Table.Cell>
              Mua-Tên khách hàng-Tên sản phẩm-Số điện thoại
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <h3>IV. Thanh toán trực tuyến</h3>
      <hr />
      <h4>
        Xin lỗi , hiện tại chúng tôi chưa có chính sách này
      </h4>
    </div>
  );
};

export default ThanhToan;
