import { useState } from "react";
import "./CardWorkspace.css";
import SetTitle from "./FormElements/SetTitle/SetTitle";
import ChoosingCategories from "./FormElements/ChoosingCategories/ChoosingCategories";
import ChoosingLang from "./FormElements/ChoosingLang/ChoosingLang";
import SetInstructions from "./FormElements/SetInstructions/SetInstructions";
import CreateCards from "./FormElements/CreateCards/CreateCards";
import { useTranslation } from "react-i18next";

const CardWorkspace = () => {
  const { t } = useTranslation();
  const [stepOfCreation, setStepOfCreation] = useState(
    parseInt(localStorage.getItem("currentStep")) || 1
  );

  const nextStep = () => {
    setStepOfCreation((prev) => prev + 1);
    localStorage.setItem("currentStep", stepOfCreation + 1);
  };

  const prevStep = () => {
    setStepOfCreation((prev) => prev - 1);
    localStorage.setItem("currentStep", stepOfCreation - 1);
  };

  return (
    <div className="CardWorkspace">
      <div className="CardWorkspace__title">
        <h3>{t("create_new_set")}</h3>
      </div>
      <div className="CardWorkspace__form">
        {stepOfCreation === 1 && (
          <SetTitle nextStep={nextStep} prevStep={prevStep} />
        )}
        {stepOfCreation === 2 && (
          <ChoosingCategories nextStep={nextStep} prevStep={prevStep} />
        )}
        {stepOfCreation === 3 && (
          <ChoosingLang nextStep={nextStep} prevStep={prevStep} />
        )}
        {stepOfCreation === 4 && (
          <SetInstructions nextStep={nextStep} prevStep={prevStep} />
        )}
        {stepOfCreation === 5 && (
          <CreateCards nextStep={nextStep} prevStep={prevStep} />
        )}
      </div>
    </div>
  );
};

export default CardWorkspace;
