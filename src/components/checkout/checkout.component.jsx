import "./checkout.styles.scss";
const CheckOut = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="header-block">name </span>
        <span className="header-block">Description</span>
        <span className="header-block">quantity</span>
        <span className="header-block">price</span>
        <span className="header-block">Remove</span>
      </div>
      <div className="total"></div>
    </div>
  );
};

export default CheckOut;
