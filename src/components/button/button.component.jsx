import "./button.styles.scss";
const Button_Type_Classes = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  console.log(buttonType);
  return (
    <div>
      <button
        className={`button-container ${Button_Type_Classes[buttonType]} `}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
