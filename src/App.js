import React, { useState } from "react";
import LoginSite from "./components/Screens/LoginSite";
import SignupSite from "./components/Screens/SignupSite";

// Components
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import PlaceItemsCenter from "./components/UI/PlaceItemsCenter";

function App() {
  return (
    <div className="h-screen flex flex-col justify-around bg-gray-100 bg-opacity-40">
      {/* <LoginSite /> */}
      <SignupSite />
    </div>
  );
}

export default App;
