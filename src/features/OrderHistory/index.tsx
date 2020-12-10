import { RootState } from "app/store";
import React, { Fragment, useEffect } from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import "./OrderHistory.scss";
import { fetchAllOderHistory } from "./orderHistorySlice";

function OrderHistory() {
  let { orders } = useSelector((state: RootState) => state.orderHistory);

  const dispatch = useDispatch();

  let orderhis = [...orders]

  const splitDate = (date: string) => {
    let data = date.split("T");
    const day = data[0];
    const values = day.split("-");

    const time = data[1].split(".")[0];

    return "  " + values[2] + "/" + values[1] + "/" + values[0] + "-" + time;
  };

  useEffect(() => {
    dispatch(fetchAllOderHistory());
  }, []);

  if (orders.length > 1) {
    orderhis.reverse()
  }

  return (
    <div className="container">
      <div className="small-container">
        <div className="row">
          <h1>Lịch Sử Mua Hàng</h1>
        </div>

        {orderhis.map((order) => (
          <Segment className="d-flex f-col">
            <div>
              Ngày đặt hàng
              <h3
                className="a-size-medium a-text-bold"
                style={{
                  color: "#111 !important ",
                  fontFamily: " 'MyWebFont',Arial,sans-serif !important",
                }}
              >
                {splitDate(order.estimatedDelivery)}
              </h3>
            </div>
            <div className="od-id">
              <strong>Mã Đơn Hàng :</strong>
              {" " + order._id}
            </div>
            {order.products.map((product) => (
              <Item.Group divided>
                <Item>
                  <Item.Image size="small" src={product.photo} />

                  <Item.Content>
                    <Item.Header as="a">{product.productID.name}</Item.Header>
                    <div className="d-flex f-col">
                      <span className="cinema">
                        <strong>Số lượng :</strong> {product.quantity}
                      </span>
                      <span className="mt-1">
                        <strong>Màu :</strong>{" "}
                        <div
                          className="r-100"
                          style={{ backgroundColor: product.color }}
                        ></div>
                      </span>
                      <span className="mt-1">
                        <strong>Dung lượng lưu trữ :</strong>{" "}
                        {product.capacity + " Gb"}
                      </span>
                    </div>
                    <Item.Description className="mt-1">
                      <strong>Giá : </strong>{" "}
                      <NumberFormat
                        value={
                          (product.capacityCostPlus +
                            product.colorCostPlus +
                            product.productID.priceOnSales) *
                          product.quantity
                        }
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                      ₫
                      <br />
                      <br />
                    </Item.Description>
                    <Item.Extra>
                      <Button
                        as={Link}
                        to={`/products/detail/${product.productID._id}`}
                        className="btn-dt"
                        primary
                        floated="right"
                      >
                        Xem chi tiết
                        <Icon className="right chevron" />
                      </Button>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            ))}
          </Segment>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
