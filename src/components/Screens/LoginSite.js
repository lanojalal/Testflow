import React, { useState } from "react";

// Components
import Button from "../UI/Button";
import Input from "../UI/Input";
import PlaceItemsCenter from "../UI/PlaceItemsCenter";

const LoginSite = () => {
  return (
    <div>
      <h1 className="company-name">make!mpact</h1>

      <PlaceItemsCenter>
        <h1 className="my-6 text-xl font-bold">Hey Impactor!</h1>
        <form className="place-items-center-col">
          <Input type="text" placeholder="Username" />
          <PasswordInput />
          <Button style="login-btn" name="Log in" />
        </form>

        <a className="forgot-password">I've forgotten my password -{">"}</a>
        <Button style="create-account-btn" name="Create my account" />
      </PlaceItemsCenter>
    </div>
  );
};

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="place-items-center-col">
      <Input type={showPassword ? "text" : "password"} placeholder="Password" />
      <button onClick={handleShowPassword}>Show password</button>
    </div>
  );
};

export default LoginSite;
