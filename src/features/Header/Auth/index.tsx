import { RootState } from "app/store";
import { logout } from "features/Account/accountSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";


const Auth = () => {
  const dispatch = useDispatch()
    const history = useHistory()
  const { username, isLogin } = useSelector(
    (state: RootState) => state.account
  );

  const trigger = (
    <li>
      <span> Hello, {username} </span>
    </li>
  );
  const options = [
    {
      key: "user",
      text: (
        <span>
          Đăng nhập bởi <strong>{username}</strong>
        </span>
      ),
      disabled: true,
    },
    { key: "addess", text: "Địa Chỉ", value: "/address" },
    { key: "profile", text: "Hồ Sơ", value: "/profile" },
    { key: "sign-out", text: "Đăng Xuất", value: "/logout" },
  ];
  return !isLogin ? (
    <li>
      <Link to="/account"> Đăng Nhập </Link>
    </li>
  ) : (
    <Dropdown
      onChange={(e, { name, value }) => {
        if(value+'' === '/logout'){
          dispatch(logout())
        history.push('/')
        }
        else
          history.push(value+'');
      }}
      trigger={trigger}
      options={options}
    />
  );
};

export default Auth;