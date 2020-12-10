/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from "react";
import "./HomePage.scss";
import Exclusive from "assets/images/exclusive.png";
import Testimonial1 from "assets/cap.png";
import Testimonial2 from "assets/matt.jpg";
import Testimonial3 from "assets/n.jpg";
import Testimonial4 from "assets/v1.png";
import Categories1 from "assets/images/Iphone image/iphone_12/iPhone-12-red.png";
import Categories2 from "assets/images/Iphone image/iphone_12/iPhone-12-blue.png";
import Categories3 from "assets/images/Iphone image/iphone_12/iPhone-12-siver.png";
import Product1 from "assets/images/Iphone image/iphone_12/iPhone-12-white.png";
import Product2 from "assets/images/Iphone image/iphone_12/iPhone-12-blue.png";
import Product3 from "assets/images/Iphone image/iphone_12/iPhone-12-siver.png";
import Product4 from "assets/images/Iphone image/iphone_12/iPhone-12-red.png";
import Banner from "features/Header/Banner";

function HomePage() {
  return (
    <Fragment>
      <div className="header">
        <div className="container">
          <Banner />
        </div>
      </div>

      <div className="small-container">
        <h2 className="title"> Sản Phẩm Mới Nhất</h2>
        <div className="row">
          <div className="col-4">
            <img src={Product1} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col-4">
            <img src={Product2} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-half-o" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col-4">
            <img src={Product3} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col-4">
            <img src={Product4} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
       </div>
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>Phục vụ các bạn là sự vinh hạnh của chúng tôi</p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <img src={Testimonial1} alt="" className="img-auth" />
              <h3>Võ Gia Hưng</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Mỗi một khách hàng đến với Tenet là sự thành công của chúng tôi
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <img src={Testimonial2} alt="" className="img-auth" />
              <h3>Minh Chiến</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Tenet rất vui khi đồng hành cùng hành trình sử dụng điện thoại
                của các bạn
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <img src={Testimonial3} alt="" className="img-auth" />
              <h3>Hoàng Nam</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>Rất vui khi bạn vào tham quan website</p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <img src={Testimonial4} alt="" className="img-auth" />
              <h3>Quang Vũ</h3>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
