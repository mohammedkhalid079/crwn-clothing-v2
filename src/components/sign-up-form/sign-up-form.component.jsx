import { useState } from "react";
import Button from "../button/button.component";
import "./sign-up-form.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import InputForm from "../input-Form/input-form.component";

const SignUpForm = () => {
  const signUpObj = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [isSignUpObj, setSignUpObj] = useState(signUpObj);
  console.log(isSignUpObj);
  const { displayName, email, password, confirmPassword } = isSignUpObj;

  const submitHandler = async (event) => {
    console.log("submitHandler is working");
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log({ user });
      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user email already in use");
      } else {
        console.log("user created encounterd a error", error);
      }
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    console.log(event.target.name);
    setSignUpObj({
      ...isSignUpObj,
      [name]: value,
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <InputForm
          label="DisplayName"
          type="text"
          required
          onChange={changeHandler}
          name="displayName"
          value={displayName}
        />

        <InputForm
          label="Email"
          type="text"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        />
        <InputForm
          label="Password"
          type="password"
          required
          onChange={changeHandler}
          name="password"
          value={password}
        />
        <InputForm
          label="Confirm Password"
          type="password"
          required
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button buttonType={"inverted"} type="submit">
          Sign-Up
        </Button>
      </form>
      {/* <form onSubmit={() => {}}>
        <div className="group">
          <input
            className="form-input"
            type="text"
            required
            onChange={changeHandler}
            name="displayName"
            value={displayName}
          />
          <label
            className={`${displayName.length ? "shrink" : ""} form-input-label`}
          >
            DisplayName
          </label>
        </div>

        <div className="group">
          <input
            className="form-input"
            type="email"
            required
            onChange={changeHandler}
            name="email"
            value={email}
          />
          <label className={`${email.length ? "shrink" : ""} form-input-label`}>
            Email
          </label>
        </div>

        <div className="group">
          <input
            className="form-input"
            type="password"
            required
            onChange={changeHandler}
            name="password"
            value={password}
          />
          <label
            className={`${password.length ? "shrink" : ""} form-input-label`}
          >
            password
          </label>
        </div>

        <div className="group">
          <input
            className="form-input"
            type="password"
            required
            onChange={changeHandler}
            name="confirmPassword"
            value={confirmPassword}
          />
          <label
            className={`${confirmPassword ? "shrink" : ""} form-input-label`}
          >
            confirm Password
          </label>
        </div>*/}
    </div>
  );
};

export default SignUpForm;
