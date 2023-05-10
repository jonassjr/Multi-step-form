import "./index.css";

export function Email({ data, updateFieldHandler }) {
  return (
    <div className="email-container">
      <header className="header">
        <h2 className="title">Agora informe o seu e-mail</h2>
        <p>
          Por favor, preencha o campo abaixo para que possamos entrar em contato
          com você.
        </p>
      </header>

      <div className="input-box">
        <label htmlFor="email" className="label">Digite o seu email</label>
        <input
          className="input"
          type="email"
          placeholder="exemplo@email.com"
          required
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          
        />
      </div>
    </div>
  );
}
