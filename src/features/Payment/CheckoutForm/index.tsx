import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import paymentApi from "app/api/payment";
import { messageError, messageSuccess } from "app/notification/message";
import { RootState } from "app/store";
import { resetCart } from "features/Cart/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

interface IProps {
  totalPrice: number;
}

const CheckoutForm: React.FC<IProps> = ({ totalPrice }) => {
  const { carts } = useSelector((state: RootState) => state.cart);

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const { email } = useSelector((state: RootState) => state.account);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!stripe || !elements) {
      return;
    }

    paymentApi
      .payment(
        {
          email: email,
          totalPrice: totalPrice,
          estimatedDelivery: new Date(),
        },
        carts
      )
      .then(() => {
        messageSuccess("Thanh toán thành công");
        history.push("/orderhistory");
        dispatch(resetCart());
      })
      .catch(() => {
        messageError("Thanht toán thất bại");
      });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="form-payment"
    >
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div>
        <span>
          <strong>Đảm bảo địa chỉ của bạn chính xác</strong>
        </span>
      </div>
      <button onClick={(e) => handleSubmit(e)} className="btn-purchase">
        Mua Hàng
      </button>
    </form>
  );
};

export default CheckoutForm;
