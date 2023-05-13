import "./index.css";
import { useState } from "react";

export function Phone({ data, updateFieldHandler }) {
  const formatPhoneNumber = (phoneNumber) => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

    const formattedPhoneNumber = cleanedPhoneNumber.replace(
      /(\d{2})(\d{0,1})(\d{0,4})(\d{0,4})/,
      (match, p1, p2, p3, p4) => {
        let formattedNumber = "";
        if (p1) formattedNumber += `(${p1}`;
        if (p2) formattedNumber += `) ${p2}`;
        if (p3) formattedNumber += ` ${p3}`;
        if (p4) formattedNumber += `-${p4}`;
        return formattedNumber;
      }
    );

    return formattedPhoneNumber;
  };

  const [formattedPhone, setFormattedPhone] = useState(
    formatPhoneNumber(data.phone)
  );

  const handleChange = (e) => {
    const inputPhone = e.target.value.replace(/[a-zA-Z]/g, "");

    const formattedPhone = formatPhoneNumber(inputPhone);

    setFormattedPhone(formattedPhone);
    updateFieldHandler("phone", inputPhone);
  };

  return (
    <div className="phone-container">
      <header className="header">
        <h2>Agora informe o seu telefone</h2>
        <p>
          Por favor, preencha o campo abaixo para que possamos entrar em contato
          com você.
        </p>
      </header>

      <div className="input-box">
        <label htmlFor="phone" className="label">
          Digite o seu telefone
        </label>
        <input
          className="input"
          type="text"
          name="phone"
          placeholder="(11) 99999-0000"
          required
          value={formattedPhone}
          onChange={handleChange}
          maxLength={16}
        />
      </div>
    </div>
  );
}
