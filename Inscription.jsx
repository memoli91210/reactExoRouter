import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Inscription() {
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [genre, setgenre] = useState("");
  const [telephone, settelephone] = useState("");

    let navigate = useNavigate();

  const HandlerSubmit = (event) => {
    event.preventDefault();
    if (nom && prenom && mail && password && genre && telephone) {
      // getdata({ nom, prenom, mail, password, genre, telephone });
      navigate("/");
    } else {
      alert("completer le formulaire");
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={HandlerSubmit}>
        <input
          type="text"
          placeholder="nom"
          value={nom}
          onChange={(event) => setnom(event.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="prenom"
          value={prenom}
          onChange={(event) => setprenom(event.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Mail"
          value={mail}
          onChange={(event) => setmail(event.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Mot de Passe"
          value={password}
          onChange={(event) => setpassword(event.target.value)}
        />
        <br />
        <br />
        <select
          value={genre}
          onChange={(event) => setgenre(event.target.value)}
        >
          <option value="">Selectionner votre genre</option>
          <option value="homme">H</option>
          <option value="femme">F</option>
        </select>
        <br />
        <br />
        <input
          type="text"
          placeholder="numero de telephone"
          value={telephone}
          onChange={(event) => settelephone(event.target.value)}
        />
        <br />
        <br />
        <button>Valider</button>
      </form>
    </div>
  );
}
