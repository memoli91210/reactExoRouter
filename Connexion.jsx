import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");

  let navigate = useNavigate();

  const HandlerSubmit = (event) => {
    event.preventDefault();

    if (mail && password) {
      // getdata({mail, password });

      //requete
      navigate("/");
    } else {
      alert("completer le formulaire");
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={HandlerSubmit}>
        <input
          type="email"
          placeholder="email"
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
        <button>Connexion</button>
      </form>
      <button onClick={() => navigate(-1)}>Retour</button>
    </div>
  );
}
