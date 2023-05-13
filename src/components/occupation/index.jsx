import "./index.css";

export function Occupation({ data, updateFieldHandler}) {
  return (
    <div className="occupation-container">
      <header className="header">
        <h2 className="title">Agora informe a sua area de ocupação</h2>
        <p>
          Por favor, preencha o campo abaixo para que possamos entrar em contato
          com você.
        </p>
      </header>

      <div className="input-box">
        <label htmlFor="occupation" className="label">Digite o sua profissão</label>
        <input
          className="input"
          type="text"
          name="occupation"
          placeholder="Escritor"
          required
          value={data.occupation || ""}
          onChange={(e) => updateFieldHandler("occupation", e.target.value)}

        />
      </div>
    </div>
  );
}
