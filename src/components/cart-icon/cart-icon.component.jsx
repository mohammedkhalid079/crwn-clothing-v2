import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const { cartItems } = useContext(CartContext);

  const count = cartItems.reduce(
    (productId, currentProduct) => productId + currentProduct.quantity,
    0
  );
  console.log(count);

  const toggleIsCartOpen = () => {
    //!isCartOpen is geven inverse value if true given false, if false given true
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};

export default CartIcon;
