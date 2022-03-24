import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

// Material UI
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Checkbox from "@mui/material/Checkbox";

// Components
import Input from "../UI/Input";
import Form from "../UI/Form";

// The whole flow of signing a user up

const SignupSite = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="h-screen flex flex-col justify-around">
      <div className="place-items-center-col">
        <MobileStepper
          variant="dots"
          steps={7}
          position="static"
          activeStep={activeStep}
          sx={{
            maxWidth: 400,
            flexGrow: 1,
          }}
        />
      </div>
      <div>
        {activeStep === 0 && <FirstStep />}
        {activeStep === 1 && <SecondStep />}
        {activeStep === 2 && <ThirdStep />}
        {activeStep === 3 && <FourthStep />}
        {activeStep === 4 && <FifthStep />}
        {activeStep === 5 && <SixthStep />}
        {activeStep === 6 && <SeventhStep />}
      </div>
      <div className="flex justify-around">
        <button onClick={handleBack} disabled={activeStep === 0}>
          {"<"} Back
        </button>
        <button onClick={handleNext} disabled={activeStep === 6}>
          Continue {">"}
        </button>
      </div>
    </div>
  );
};

// First Step - Put in credentials

const FirstStep = () => {
  return (
    <div>
      <div className="my-3 place-items-center-col">
        <h1 className="text-2xl font-bold">Welcome new impactor!</h1>
        <h1 className="text-gray-400">Lets create your account</h1>
      </div>
      <Form>
        <Input type="text" placeholder="First name" />
        <Input type="text" placeholder="Last name" />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Repeat password" />
        <Input type="text" placeholder="Referal code" />
      </Form>
      <div className="flex justify-center">
        <Checkbox />
        <h1 className="w-3/4 text-xs ">
          By ticking this box you agree to the MakeImpact Legal Terms and
          Privacy Policy
        </h1>
      </div>
    </div>
  );
};

// Second Step - Choose a gender

const SecondStep = () => {
  return (
    <div>
      <div className="my-3 place-items-center-col">
        <h1 className="text-2xl font-bold">What's your gender?</h1>
        <h1 className="text-gray-400">
          Tell us a bit more about how you define yourself
        </h1>
      </div>
      <ChooseGender />
    </div>
  );
};

const genderOptions = [
  { id: 1, gender: "Female" },
  { id: 2, gender: "Male" },
  { id: 3, gender: "Non binary" },
  { id: 4, gender: "Don't want answer" },
];

const ChooseGender = () => {
  const [gender, setGender] = useState(false);

  const handleSelectedGender = () => {
    setGender(!gender);
  };

  const renderedGenders = genderOptions.map((sex) => (
    <div
      onClick={handleSelectedGender}
      className={`${gender ? "bg-black text-white" : ""} gender-box`}
    >
      <h1 key={sex.id} className="gender-text">
        {sex.gender}
      </h1>
    </div>
  ));

  return <div className="grid grid-cols-2">{renderedGenders}</div>;
};

// Third Step - Choose the country you live in

const ThirdStep = () => {
  return (
    <div>
      <div className="my-3 place-items-center-col">
        <h1 className="text-2xl font-bold">Where do you live?</h1>
        <h1 className="text-gray-400">Choose your country of living</h1>
      </div>
      <div className="my-3 place-items-center-col">
        <Input type="text" placeholder="Search my country" />
      </div>
    </div>
  );
};

// Fourth Step - Investing experience

const FourthStep = () => {
  return (
    <div>
      <div className="my-3 place-items-center-col">
        <h1 className="text-2xl font-bold">Whats your investing experience?</h1>
        <h1 className="text-gray-400">
          Help us guide you on your investment yourney
        </h1>
      </div>
    </div>
  );
};

// Fifth Step - Values that matters to user

const FifthStep = () => {
  return (
    <div>
      <div className="my-3 place-items-center-col">
        <h1 className="text-2xl font-bold">Which values matter most to you?</h1>
        <h1 className="text-gray-400">
          Select at least 3 values which matter most to you
        </h1>
      </div>
    </div>
  );
};

// Sixth Step - Choose a subscription

const SixthStep = () => {
  return (
    <div>
      <div className="my-3 place-items-center-col">
        <h1 className="text-2xl font-bold">Choose your subscription</h1>
        <h1 className="text-gray-400">
          Don't worry, you'll always be able to modify your plan
        </h1>
      </div>
    </div>
  );
};

// Seventh Step - Final step

const SeventhStep = () => {
  return (
    <div>
      <div className="my-3 place-items-center-col">
        <h1 className="text-2xl font-bold">Congrats!</h1>
        <h1 className="text-gray-400">
          Your payment has been confirmed and your account created
        </h1>
      </div>
    </div>
  );
};

export default SignupSite;
