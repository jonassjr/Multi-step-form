import "./index.css";

export function Name({ data, updateFieldHandler }) {
  return (
    <div className="name-container">
      <header className="header">
        <h2>Vamos começar com seu nome</h2>
        <p>
          Por favor, preencha o campo abaixo para que possamos entrar em contato
          com você.
        </p>
      </header>

      <div className="input-box">
        <label htmlFor="name" className="label">Digite o seu nome</label>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="João da silva"
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>
    </div>
  );
}
