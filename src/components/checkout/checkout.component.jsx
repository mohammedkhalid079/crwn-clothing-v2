import "./checkout.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutItem from "../checkout-item/checkout-item.component";
const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span>Remove</span>
      </div>

      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        TOTAL:$
        {cartItems.reduce(
          (priceAccumulator, cartItem) =>
            priceAccumulator + cartItem.quantity * cartItem.price,
          0
        )}
      </div>
    </div>
  );
};

export default CheckOut;
