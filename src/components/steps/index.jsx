import { BiUser, BiEnvelope, BiCheck, BiBookmark, BiPhone } from "react-icons/bi"
import "./index.css"

export function Steps({currentStep}) {
  return (
    <div className="steps">
      <div className="step active">
        <div className="step-info">
          <p className="step-title">Nome</p>
          <p>Preencha o campo</p>
        </div>

        <div className="icon">
          <BiUser className="step-icon"/> 
        </div>
      </div>
      
      <div className={`step ${currentStep > 0 ? "active" : ""}`}>
        <div className="step-info">
          <p className="step-title" >e-mail</p>
          <p>Preencha o campo</p>
        </div>

        <div className="icon">
          <BiEnvelope className="step-icon"/> 
        </div>
      </div>
      
      <div className={`step ${currentStep > 1 ? "active" : ""}`}>
        <div className="step-info">
          <p className="step-title">Telefone</p>
          <p>Preencha o campo</p>
        </div>

        <div className="icon">
          <BiPhone className="step-icon"/> 
        </div>
      </div>
      
      <div className={`step ${currentStep > 2 ? "active" : ""}`}>
        <div className="step-info">
          <p className="step-title">Profisão</p>
          <p>Preencha o campo</p>
        </div>

        <div className="icon">
          <BiBookmark className="step-icon"/> 
        </div>
      </div>
      
      <div className={`step ${currentStep > 3 ? "active" : ""}`}>
        <div className="step-info">
          <p className="step-title" >Confirmar</p>
          <p>Confirme seus dados</p>
        </div>

        <div className="icon">
          <BiCheck className="step-icon"/> 
        </div>
      </div>
    </div>
  )
}