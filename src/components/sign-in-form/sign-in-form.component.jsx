import { useState, useContext } from "react";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
//this UserContext obj is going to give us back whatever value is passed in for the value
import { UserContext } from "../../contexts/user.context";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import InputForm from "../input-Form/input-form.component";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [isSignUpObj, setSignUpObj] = useState(defaultFormFields);
  console.log(isSignUpObj);
  const { email, password } = isSignUpObj;

  //we are consuming(pulling) the UserContext inside the sign-in-component page.
  // UserContext return a value
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setSignUpObj(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    await createUserDocumentFromAuth(user);
    setCurrentUser(user);
  };

  const submitHandler = async (event) => {
    console.log("submitHandler is working");
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      setCurrentUser(user);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with is mail");
          break;
        default:
          console.log(error);
      }
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    console.log(event.target.name);
    console.log(event.target.value);
    setSignUpObj({
      ...isSignUpObj,
      [name]: value,
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
        <InputForm
          label="Email"
          type="email"
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
        <div className="buttons-container ">
          <Button type="submit">Sign-In</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={signInWithGoogle}
          >
            Google-Sign-In
          </Button>
        </div>
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

export default SignInForm;
