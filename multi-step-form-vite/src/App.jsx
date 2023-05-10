// Componentes
import { Steps } from "./components/steps";
import { Name } from "./components/name";
import { Email } from "./components/e-mail";
import { Phone } from "./components/phone";
import { Occupation } from "./components/occupation";
import { Confirmation } from "./components/confirmation";
import { ButtonSend } from "./components/button-send";
import { ButtonNext } from "./components/button-next";
import { ButtonPreview } from "./components/button-preview";

// Hooks
import { useForm } from "./hooks/useForm";
import { useState } from "react";

// estilo
import "./app.css";

const formTemplate = {
  name: "",
  email: "",
  phone: "",
  occupation: "",
  confirmation: "",
};

export default function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <Name data={data} updateFieldHandler={updateFieldHandler} />,
    <Email data={data} updateFieldHandler={updateFieldHandler} />,
    <Phone data={data} updateFieldHandler={updateFieldHandler} />,
    <Occupation data={data} updateFieldHandler={updateFieldHandler} />,
    <Confirmation data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <header className="form-header">
        <h1>Formulário multi etapa</h1>
        <p>Siga os 5 simples passos para completar os cadastro</p>
      </header>

      <div className="container">
        <Steps currentStep={currentStep} />

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>

          <div className="actions">
            {!isFirstStep && (
              <ButtonPreview onClick={(e) => changeStep(currentStep - 1, e)} />
            )}
            {!isLastStep ? <ButtonNext  /> : <ButtonSend />}
          </div>
        </form>
      </div>
    </div>
  );
}
