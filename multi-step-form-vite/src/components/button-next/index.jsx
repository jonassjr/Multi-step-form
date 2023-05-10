import "./index.css";

export function ButtonNext({ onClick }) {
  return (
    <button className="btn-next" onClick={onClick}>
      Avançar
    </button>
  );
}
