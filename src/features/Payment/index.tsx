import React from "react";
import "./Payment.scss";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import { Redirect } from "react-router-dom";
import NumberFormat from "react-number-format";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Hj0dYEQHJsaBSpk6Af9iJlHDWNU9Vvckep6Q2hrTPFtcmp9soG7A317AIRxmz2CrP8qHSILlVntL1NUPvMRXlg9009uHVPPci"
);

function Payment() {
  const script = useSelector((state: RootState) => state.cart.script);

  const { carts, products, priceShip } = useSelector(
    (state: RootState) => state.cart
  );

  if (!script) return <Redirect to="/order" />;

  const subTotal = () => {
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
  };
  const totalPrice = () => {
    return subTotal() + priceShip;
  };
  return (
    <div className="small-container">
      <h2>Thanh Toán</h2>
      <div className="a-box-normal-payment">
        <div className="row-payment">
          <h3>
            Tổng tiền là :{" "}
            <NumberFormat
              value={totalPrice()}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
            ₫
          </h3>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm totalPrice={totalPrice()} />
        </Elements>
      </div>
    </div>
  );
}

export default Payment;
