import React, { Fragment, useEffect } from "react";
import "features/HomePage/HomePage.scss";
import Logo from "assets/logo.png";
import Cart from "assets/images/cart.png";
import Menu from "assets/images/menu.png";
import { Link, useHistory } from "react-router-dom";
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { checkCart } from "features/Cart/cartSlice";
import Auth from "./Auth";

function Header() {
  const carts = useSelector((state: RootState) => state.cart.carts);
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkCart());
  }, []);
  const moveToHomePage = () => {
    history.push("/");
  };
  return (
    <Fragment>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img
                src={Logo}
                alt=""
                width="100px"
                height="100px"
                onClick={moveToHomePage}
                style={{ cursor: "pointer" }}
              />
            </div>
            <nav>
              <ul id="MenuItems">
                <li>
                  <Link to="/"> Trang Chủ </Link>
                </li>
                <li>
                  <Link to="/products"> Sản Phẩm </Link>
                </li>
                <li>
                  <Link to="/about"> Giới Thiệu </Link>
                </li>
                <li>
                  <Link to="/policy"> Chính sách </Link>
                </li>

                <li>
                  <Link to="/orderhistory">Lịch Sử Mua Hàng</Link>
                </li>

                <Auth />
              </ul>
            </nav>
            <Link to="/cart">
              <div className="logo-cart">
                <img src={Cart} alt="" />
                <div className="wrap-icon">
                  {carts.reduce((pre, cur) => {
                    return pre + cur.quantity;
                  }, 0)}
                </div>
              </div>
            </Link>
            <img src={Menu} alt="" className="menu-icon" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
