import "./index.css";

export function Confirmation({ data }) {
  return (
    <div className="confirmation-container">
      <header className="header">
        <h2>Confirme seus dados abaixo</h2>
        <p>Por favor, confirme se seus dados abaixos estão corretos.</p>
      </header>

      <div className="data-container">
        <p>
          <strong>Nome: </strong> {data.name}
        </p>
        <p>
          <strong>E-mail: </strong> {data.email}
        </p>
        <p>
          <strong>Telefone: </strong> {data.phone}
        </p>
        <p>
          <strong>Profissão: </strong> {data.occupation}
        </p>
      </div>
    </div>
  );
}
