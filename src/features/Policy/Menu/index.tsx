import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const MenuComponent = () => {
  const [activeItem, setActiveItem] = useState("home");
  const history = useHistory();
  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    name: string
  ) => {
    setActiveItem(name);
    history.push(`/policy/${name}`);
  };
  return (
    <Menu pointing secondary vertical>
      <h2>Chính sách</h2>
      <Menu.Item
        active={activeItem === "giaohang"}
        onClick={(e) => handleItemClick(e, "giaohang")}
      >
        <div>Giao hàng</div>
      </Menu.Item>
      <Menu.Item
        active={activeItem === "baohanh"}
        onClick={(e) => handleItemClick(e, "baohanh")}
      >
        <div>Bảo hành</div>
      </Menu.Item>
      <Menu.Item
        active={activeItem === "thanhtoan"}
        onClick={(e) => handleItemClick(e, "thanhtoan")}
      >
        <div>Thanh toán</div>
      </Menu.Item>
      <Menu.Item
        active={activeItem === "gopy"}
        onClick={(e) => handleItemClick(e, "gopy")}
      >
        <div>Góp ý ,báo lỗi</div>
      </Menu.Item>
      <Menu.Item
        active={activeItem === "tragop"}
        onClick={(e) => handleItemClick(e, "tragop")}
      >
        <div>Mua hàng trả góp</div>
      </Menu.Item>
      <Menu.Item
        active={activeItem === "doitra"}
        onClick={(e) => handleItemClick(e, "doitra")}
      >
        Chính sách đổi trả
      </Menu.Item>
      <Menu.Item
        active={activeItem === "quyche"}
        onClick={(e) => handleItemClick(e, "quyche")}
      >
        <div>Quy chế hoạt động website</div>
      </Menu.Item>
      <Menu.Item
        active={activeItem === "doanhnghiep"}
        onClick={(e) => handleItemClick(e, "doanhnghiep")}
      >
        <div>Dành cho doanh nghiệp</div>
      </Menu.Item>

      <Menu.Item
        active={activeItem === "sudung"}
        onClick={(e) => handleItemClick(e, "sudung")}
      >
        <div>Chính sách sử dụng</div>
      </Menu.Item>
      <Menu.Item
        active={activeItem === "baomat"}
        onClick={(e) => handleItemClick(e, "baomat")}
      >
        <div>Chính sách bảo mật</div>
      </Menu.Item>
    </Menu>
  );
};

export default MenuComponent;
