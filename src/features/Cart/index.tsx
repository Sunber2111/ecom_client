import React, { Fragment, useEffect } from "react";
import "../../features/HomePage//HomePage.scss";
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByIds, removeItem, updateQuantity } from "./cartSlice";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router-dom";

function Carts() {
  const { products, carts } = useSelector((state: RootState) => state.cart);
  const isLogin = useSelector((state: RootState) => state.account.isLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    if (carts.length > 0)
      dispatch(fetchProductsByIds(carts.map((cart) => cart.productID)));
  }, [carts]);

  const handleChangeQuantity = (index: number, value: string) => {
    const valueNumber = Number(value);
    dispatch(updateQuantity({ index, quantity: valueNumber }));
  };

  function subTotal() {
    let subtotal = 0;
    if (carts.length === 0) return 0;
    if (products.length === 0) return 0;
    products.map((product, index) => {
      subtotal +=
        carts[index].quantity *
        (product.priceOnSales +
          carts[index].capacityCostPlus +
          carts[index].colorCostPlus);
    });

    return subtotal;
  }

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const history = useHistory();
  const handleAddToOrder = () => {
    if (isLogin === false) {
      history.push("/account");
    } else history.push("/order");
  };

  return (
    <Fragment>
      <div className="small-container cart-page">
        <table>
          <tr>
            <th>Sản phẩm</th>
            <th>Dung lượng </th>
            <th>Màu sắc </th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>
                <div className="cart-info">
                  <img src={carts[index].photo} alt="" />
                  <div>
                    <p>{product.name}</p>
                    <small>
                      Giá tiền:{" "}
                      <NumberFormat
                        value={
                          product.priceOnSales +
                          carts[index].capacityCostPlus +
                          carts[index].colorCostPlus
                        }
                        displayType={"text"}
                        thousandSeparator={true}
                      />{" "}
                      ₫
                    </small>
                    <br />
                    <div
                      className="btn-remove"
                      onClick={(e) => handleRemoveItem(product._id)}
                    >
                      Xóa
                    </div>
                  </div>
                </div>
              </td>
              <td>{carts[index].capacity} GB</td>
              <td>
                <span style={{ background: `${carts[index].colorName}` }}>
                  {carts[index].colorName}
                </span>
              </td>
              <td>
                <input
                  type="number"
                  value={carts[index].quantity}
                  width="auto"
                  min="1"
                  max="10"
                  onChange={(e) => handleChangeQuantity(index, e.target.value)}
                />
              </td>
              <td>
                <NumberFormat
                  value={
                    carts[index].quantity *
                    (product.priceOnSales +
                      carts[index].capacityCostPlus +
                      carts[index].colorCostPlus)
                  }
                  displayType={"text"}
                  thousandSeparator={true}
                />{" "}
                ₫
              </td>
            </tr>
          ))}
        </table>
        {products.length > 0 && (
          <>
            <div className="total-price">
              <table>
                <tr>
                  <td>Tạm tính</td>
                  <td>
                    <NumberFormat
                      value={subTotal()}
                      displayType={"text"}
                      thousandSeparator={true}
                    />{" "}
                    ₫
                  </td>
                </tr>
                <tr>
                  <td>Số lượng</td>
                  <td>{carts.length}</td>
                </tr>
              </table>
            </div>
            <div className="btn-payment">
              <div className="btn" onClick={() => handleAddToOrder()}>
                Đặt Hàng
              </div>
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
}

export default Carts;
