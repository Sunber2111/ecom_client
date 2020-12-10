import React from "react";
import GoogleMap from 'assets/images/Capture.png'
import { Grid } from "semantic-ui-react";

const GopY = () => {
  return (
    <div>
      <hr />
      <h2>THÔNG TIN LIÊN HỆ KHÁC</h2>
      <h4>
        Tổng đài tư vấn, hỗ trợ khách hàng (7h30 đến 22h): 1800.1234 hoặc
        028.3622.1234

      </h4>
      <h4>Tổng đài khiếu nại: 1800.1234</h4>
      <h4> Email: cskh@tenet.com</h4>
      <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
        <h3>CÔNG TY CỔ PHẦN TENET</h3>
        <hr/>
        <h4>
        Tòa nhà H, Đường Nguyễn Văn Bảo, P. 4, Quận Gò Vấp , TP. Hồ Chí Minh
        <br/>
        Địa chỉ Đăng ký kinh doanh: 12 Nguyễn Văn Bảo, P. 4, Quận Gò Vấp , TP. Hồ Chí Minh
        <br/>
        Điện thoại: (092) 53 543 313
        <br/>
        Fax: 023 43 645 867
        </h4>
      </Grid.Column>
      <Grid.Column style={{width:"100%" }}>
        <div>
             <img src={GoogleMap} alt="" width="100%" />
        </div>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    </div>
  );
};

export default GopY;
