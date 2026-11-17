export default function BookCard({titre,auteur,estDisponible, onClickEmprunt,}) {
  return (
    <div
      style={{
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        border: "2px solid black",
        width: "250px"
      }}
    >
      <h3>Titre: {titre}</h3>
      <p>Auteur: {auteur}</p>
      <p>Statut: {estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}</p>
      <button onClick={onClickEmprunt}>
        {" "}
        {estDisponible ? "Emprunter" : "Rendre"}
      </button>
    </div>
  );
}
