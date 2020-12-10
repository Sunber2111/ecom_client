import React from "react";
import { Table } from "semantic-ui-react";

const DoiTra = () => {
  return (
    <div>
      <h2>CHÍNH SÁCH ĐỔI TRẢ SẢN PHẨM</h2>
      <span>
        - Áp dụng từ: 01/01/2016
        <br />- Nơi thực hiện đổi trả: Toàn hệ thống cửa hàng
      </span>
      <h3>I. SẢN PHẨM MỚI</h3>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">
              Sản phẩm lỗi do nhà sản xuất:
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell textAlign="center">Tháng 1</Table.Cell>
            <Table.Cell textAlign="center">Tháng 2 - 12</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              - 1 đổi 1 (cùng mẫu, cùng màu, cùng dung lượng...). - Trường hợp
              sản phẩm đổi hết hàng, khách hàng có thể đổi sang sản phẩm khác
              cùng nhóm hàng có giá trị lớn hơn 50% giá trị sản phẩm lỗi
              (Thegioididong.com sẽ hoàn tiền phần chênh lệch cho khách hàng).
              Hoặc: Khách hàng trả máy & Thegioididong.com hoàn lại tiền với mức
              giá bằng 80% giá trên hoá đơn.
            </Table.Cell>
            <Table.Cell>
              Gửi máy bảo hành theo quy định của hãng. Hoặc: Khách hàng trả máy
              & Thegioididong.com hoàn lại tiền và thu phí thêm 5% so với mức
              hoàn tiền khi trả ở tháng thứ 1. VD: Ở tháng thứ nhất, nếu khách
              hàng trả sản phẩm sẽ được hoàn lại tiền với mức giá bằng 80% thì
              sang tháng thứ 2 nếu khách hàng trả máy sẽ thu phí thêm 5% nên mức
              hoàn tiền sẽ còn 75% giá trị sản phẩm trên hoá đơn, tháng thứ 3
              mức hoàn tiền sẽ trừ thêm 5% thành 70%....
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">
              Sản phẩm không lỗi (không phù hợp với nhu cầu của khách hàng):
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell textAlign="center" width="7">
              Tháng 1
            </Table.Cell>
            <Table.Cell textAlign="center">Tháng 2 - 12</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Hoàn lại tiền máy với giá bằng 80% giá trên hoá đơn
            </Table.Cell>
            <Table.Cell>
              Hoàn lại tiền với mức phí thêm 5% so với tháng thứ 1 (80%). VD:
              tháng thứ 2 hoàn lại tiền với mức giá 75% giá trên hoá đơn, tháng
              thứ 3 là 70%...
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">
              Sản phẩm lỗi do người sử dụng:
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.HeaderCell colSpan="1" textAlign="left">
              1. Không đủ điều kiện bảo hành theo qui định của hãng. Máy không
              giữ nguyên 100% hình dạng ban đầu.
              <br /> 2.Màn hình bị trầy xước.
              <br />
              {"=>"} Không áp dụng bảo hành, đổi trảThegioididong.com hỗ trợ
              chuyển bảo hành, khách hàng chịu chi phí sửa chữa.
            </Table.HeaderCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <h3>II. SẢN PHẨM ĐỔI TRẢ (ĐÃ SỬ DỤNG)</h3>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>
              Sản phẩm lỗi kỹ thuật (Lỗi do nhà sản xuất)
            </Table.HeaderCell>
            <Table.HeaderCell>Sản phẩm không lỗi</Table.HeaderCell>

            <Table.HeaderCell>
              Lỗi do ngưởi sử dụng (Không áp dụng đổi trả)
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell> Tháng thứ 1 </Table.Cell>
            <Table.Cell>
              Bao xài 1 tháng
              <br />
              1. Đổi sản phẩm tương đương (cùng giá, cùng model, cùng dung
              lượng,cùng thời gian bảo hành…)
              <br />
              2. Nếu không có sản phẩm tương đương thì hoàn tiền 100%.
            </Table.Cell>
            <Table.Cell>Không đổi trả</Table.Cell>
            <Table.Cell>
              1. Không đủ điều kiện bảo hành theo qui định của hãng
              <br />
              2. Điện thoại, tablet, laptop, đồng hồ thông minh bị trầy xước MÀN
              HÌNH
              <br />
              3. Máy không giữ nguyên 100% hình dạng ban đầu
              {"=>"} Khách hàng chịu phí sửa chữa{" "}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Tháng thứ 2-12</Table.Cell>
            <Table.Cell>
              Gửi máy bảo hành theo đúng qui định của hãng hoặc bảo hành
            </Table.Cell>
            <Table.Cell>Không đổi trả</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <h4>
        Điều kiện đổi trả:
        <br />
        1. Còn đầy đủ phiếu bảo hành (nếu có) và phụ kiện đi kèm
        <br />
        2. Ngoài ra, KHÔNG thu thêm bất kỳ phí nào khác.
      </h4>
    </div>
  );
};

export default DoiTra;
