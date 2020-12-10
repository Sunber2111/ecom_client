/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from "react";
import "features/HomePage/HomePage.scss";
import Image1 from "assets/images/image1-1.png";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <Fragment>
          <div className="row">
            <div className="col-2">
              <h1>
                Một Phong Cách <br /> Đột Phá !
              </h1>
              <p>
                Success isn't always about greatness. It's about consistency.
                Consistent <br /> hard word gains success. Greatness will come
              </p>
              <Link to="/products" className="btn">
                Mua Ngay {String.fromCharCode(8594)}
              </Link>
            </div>
            <div className="col-2">
              <img src={Image1} alt="" />
            </div>
          </div>

    </Fragment>
  );
}
