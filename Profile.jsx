import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  let { nom } = useParams();
  console.log(nom);
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
