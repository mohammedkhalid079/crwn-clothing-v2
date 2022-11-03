import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  const { addItemToCart, removeItemFromcart, removeItemsFromCheckout } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${"name"}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={() => removeItemFromcart(cartItem)}>
          {"<"}
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItemToCart(cartItem)}>
          {">"}
        </span>
      </div>
      <span className="price">${price}</span>
      <span
        className="remove-button"
        onClick={() => removeItemsFromCheckout(cartItem)}
      >
        {"×"}
      </span>
    </div>
  );
};
export default CheckOutItem;
