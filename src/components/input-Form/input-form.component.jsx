import "./input-form.styles.scss";
const InputForm = ({ label, ...otherProps }) => {
  console.log(otherProps);
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label `}
        >
          {label}
        </label>
      }
    </div>
  );
};

export default InputForm;
