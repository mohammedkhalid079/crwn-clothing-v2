import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
//import { ProductsContext } from "../../contexts/products.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  //   console.log(currentUser);
  // };

  const { isCartOpen } = useContext(CartContext);
  console.log(isCartOpen);

  // const dropdownHandler = () => {
  //   if (isCartDropdown) {
  //     setCartDropdown(false);
  //   } else {
  //     setCartDropdown(true);
  //   }h
  // };

  //searchFields Context
  // const { searchFields, setSearchFields } = useContext(ProductsContext);

  // const onChangeSrchField = (event) => {
  //   console.log(event.target.value);
  //   setSearchFields(event.target.value);
  // };

  return (
    <Fragment>
      {/* Fragment tag we are using for dont create node. its saving memory and well perform*/}
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link " to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={signOutUser} to="/">
              SIGN-OUT
            </Link>
          ) : (
            <Link className="nav-link " to="/auth">
              SIGN-IN
            </Link>
          )}
          {/* <input
            className="nav-Link"
            type="search"
            placeholder="search"
            onChange={onChangeSrchField}
            value={searchFields}
          /> */}
          <CartIcon />
        </div>
        {currentUser ? isCartOpen && <CartDropdown /> : ""}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
