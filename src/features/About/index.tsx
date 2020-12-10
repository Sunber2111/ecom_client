import React from "react";
import { Container, Segment, Statistic } from "semantic-ui-react";
import "./styles.scss";

const About = () => {
  return (
    <Container>
      <Segment className="about-page">
        <div className="title-about">
          <div>GIỚI THIỆU VỀ HỆ THỐNG CÔNG TY BÁN IPHONE TENET</div>
        </div>
        <br />
        <Statistic floated="right">
          <Statistic.Value style={{ color: "#7E68E8" }}>TENET</Statistic.Value>
        </Statistic>
        <p style={{ fontSize: "15px" }}>
          Công ty Bán Iphone TENET được thành lập vào ngày 10/8/2020 được ủy
          quyền chính thức của Apple tại Việt Nam ở cấp độ cao cấp nhất. Sau 3
          tháng hoạt động, bằng những nỗ lực không mệt mỏi, TENET đã phát triển
          hệ thống chuỗi cửa hàng rộng khắp TP Hồ Chí Minh, tạo dựng được niềm
          tin nơi Quý khách hàng khi là nhà bán lẻ uy tín về thị phần iphone tại
          Việt Nam, đứng thứ 8 về thị phần điện thoại và là nhà bán lẻ Apple
          chính hãng hàng đầu tại Việt Nam với đầy đủ các chuẩn cửa hàng từ cấp
          độ cao nhất APR, thuộc top 10 nhà bán lẻ hàng đầu Việt Nam. Cùng với
          sự phát triển của xã hội và thị trường công nghệ, Công ty bán iphone
          TENET, đang và sẽ nỗ lực không ngừng để trở thành đối tác uy tín đối
          với các nhà sản xuất Kỹ thuật số hàng đầu thế giới, đồng thời là điểm
          đến tin cậy của khách hàng Việt Nam.
        </p>
        <br />
        <p style={{ fontSize: "15px" }}>
          Với mục tiêu mở rộng độ phủ cửa hàng trên toàn quốc, Công ty bán
          iphone TENET hướng tới trở thành Hệ thống bán lẻ các sản phẩm Viễn
          thông Kỹ thuật số hàng đầu Việt Nam. Cùng với quy mô ngày càng lớn,
          TENET Shop sẽ cung cấp tới mọi tầng lớp khách hàng những trải nghiệm
          mua sắm tích cực, thông qua các sản phẩm Kỹ thuật số chính hãng chất
          lượng cao, giá cả cạnh tranh đi kèm dịch vụ chăm sóc khách hàng thân
          thiện, được đảm bảo bởi uy tín của doanh nghiệp.
        </p>
        <h3 style={{ textAlign: "center" }}>Giá trị cốt lõi</h3>

        <p style={{ fontSize: "15px" }}>
          <span style={{ fontWeight: "bold" }}>Chất lượng:</span> Luôn đi đầu
          trong việc gây dựng uy tín, trách nhiệm để đảm bảo chất lượng sản
          phẩm, TENET đem đến cho khách hàng sự an tâm tuyệt đối khi mua sắm các
          sản phẩm công nghệ.
        </p>
        <p style={{ fontSize: "15px" }}>
          <span style={{ fontWeight: "bold" }}>Tin cậy: </span> Chữ “tín” chính
          là điều mà TENET luôn chú trọng trong hoạt động phát triển thương
          hiệu, là điểm tựa niềm tin vững chắc cho khách hàng, là đối tác tin
          cậy với các hãng công nghệ.
        </p>
        <p style={{ fontSize: "15px" }}>
          <span style={{ fontWeight: "bold" }}>Thân thiện: </span> Hình ảnh
          TENET thân thiện với khách hàng và tích cực trong các hoạt động cộng
          đồng chính là hướng đi lâu dài.
        </p>
        <p style={{ fontSize: "15px" }}>
          <span style={{ fontWeight: "bold" }}>Chăm sóc:</span> Với mục tiêu
          phục vụ khách hàng là ưu tiên số một, TENET đang ngày càng hoàn thiện
          hơn chất lượng dịch vụ, đào tạo đội ngũ nhân viên nhiệt tình, trung
          thực, chân thành, làm hài lòng bất cứ khách hàng nào đến mua sắm.
        </p>
        <Statistic floated="left">
          <Statistic.Value style={{ color: "#019FFF" }}>TENET</Statistic.Value>
        </Statistic>
        <h4 style={{ textAlign: "center" }}>
          @ 2020 Công ty Bán Iphone TENET <br />
          Địa chỉ: 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp. <br />
          Email: TENET@gmail.com <br />
          Điện thoại: 0909112334 <br />
          GPĐKKD số 0311609355 do Sở KHĐT TP.HCM cấp ngày 08/09/2020 <br />
        </h4>
      </Segment>
    </Container>
  );
};

export default About;
