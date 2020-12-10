import React, { Fragment, useState } from "react";
import Image1 from "assets/images/image1-1.png";
import "./style.scss";
import { Link, useHistory } from "react-router-dom";
import { login, register } from "./accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";

function AccountPage() {
  const [isShow, setIsShow] = useState(true);

  const [userName, setUserName] = useState<string>("");
  const [passwordLogin, setPasswordLogin] = useState<string>("");
  const [nameLogin, setNameLogin] = useState<string>("");
  const [userNameRegister, setUserNameRegister] = useState<string>("");
  const [emailRegister, setEmailRegister] = useState<string>("");
  const [passwordRegister, setPasswordRegister] = useState<string>("");

  const dispatch = useDispatch();

  const history = useHistory();

  const isLogin = useSelector((state: RootState) => state.account.isLogin);

  if (isLogin) history.push("/");

  const handleClick = (toggle: boolean) => {
    setIsShow(toggle);
  };

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserName(value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordLogin(value);
  };
  const handleChangeNameLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNameLogin(value);
  };
  const handleChangeUserNameRegister = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setUserNameRegister(value);
  };
  const handleChangeEmailRegister = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setEmailRegister(value);
  };

  const handleChangePasswordRegister = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setPasswordRegister(value);
  };

  const handleSubmitFormLogin = () => {
    dispatch(login({ namelogin: userName, password: passwordLogin }));
  };

  const handleSubmitRegister = () => {
    try {
      dispatch(
        register({
          username: userNameRegister,
          namelogin: nameLogin,
          email: emailRegister,
          password: passwordRegister,
        })
      );
    } catch (error) {}
  };

  return (
    <Fragment>
      <div className="account-page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src={Image1} alt="" width="90%" />
            </div>
            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span onClick={() => handleClick(true)}>Đăng Nhập</span>
                  <span onClick={() => handleClick(false)}>Đăng Ký</span>
                  <hr
                    id="indicator"
                    style={
                      isShow
                        ? { transform: "translateX(0px)" }
                        : { transform: "translateX(100px)" }
                    }
                  />
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  id="LoginForm "
                  style={
                    isShow
                      ? { transform: "translateX(0px)" }
                      : { transform: "translateX(-300px)" }
                  }
                >
                  <input
                    type="text"
                    placeholder="Tên tài khoản"
                    value={userName}
                    onChange={(e) => handleChangeUserName(e)}
                  />
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={passwordLogin}
                    onChange={(e) => handleChangePassword(e)}
                  />
                  <div className="btn" onClick={() => handleSubmitFormLogin()}>
                    Đăng Nhập
                  </div>

                  <Link style={{ fontSize: "12px" }} to="/forgotpassword">
                    Quên mật khẩu ?
                  </Link>
                </form>
                <form
                  id="RegisterForm"
                  style={
                    isShow
                      ? { transform: "translateX(300px)" }
                      : { transform: "translateX(0px)" }
                  }
                >
                  <input
                    type="text"
                    placeholder="Name Login"
                    value={nameLogin}
                    onChange={(e) => handleChangeNameLogin(e)}
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    value={userNameRegister}
                    onChange={(e) => handleChangeUserNameRegister(e)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={emailRegister}
                    onChange={(e) => handleChangeEmailRegister(e)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={passwordRegister}
                    onChange={(e) => handleChangePasswordRegister(e)}
                  />
                  <button
                    type="submit"
                    className="btn"
                    onClick={() => handleSubmitRegister()}
                  >
                    Đăng Ký
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AccountPage;
