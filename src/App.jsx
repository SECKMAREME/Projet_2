import BookCard from "./componentes/BookCard";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      titre: "Une si longue lettre",
      auteur: "Mariama Ba",
      estDisponible: true,
    },
    {
      id: 2,
      titre: "Que Dieu protege les femmes",
      auteur: "Romin",
      estDisponible: false,
    },
    { id: 3, titre: "Karim", auteur: "Ousmane Socé Diop", estDisponible: true },
    { id: 4, titre: "Chambre 7", auteur: "Faty Dieng", estDisponible: false },
  ]);

  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");

  const handleEmprunt = (bookId) => {
    setBooks(
      books.map((book) =>
        book.id === bookId
          ? { ...book, estDisponible: !book.estDisponible }
          : book,
      ),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titre.trim() === "" || auteur.trim() === "") return;

    setBooks([
      ...books,
      { id: Date.now(), titre, auteur, estDisponible: true },
    ]);
    setTitre("");
    setAuteur("");
  };

  const nbDisponibles = books.filter((b) => b.estDisponible).length;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Nombre total de livres disponibles : {nbDisponibles}</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          style={{
            backgroundColor: "white",
            color: "black",
            border: "2px solid blue",
            borderRadius: "6px",
            padding: "8px",
            marginRight: "8px",
          }}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
          style={{
            backgroundColor: "white",
            color: "black",
            border: "2px solid blue",
            borderRadius: "6px",
            padding: "8px",
            marginRight: "8px",
          }}
        />
        <button type="submit">Ajouter</button>
      </form>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            titre={book.titre}
            auteur={book.auteur}
            estDisponible={book.estDisponible}
            onClickEmprunt={() => handleEmprunt(book.id)}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
