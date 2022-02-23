import React, { useState } from "react";
import "./style.css";
import { Input } from "semantic-ui-react";

export default function SearchUser({ setName }) {
  return (
    <div>
      <Input
        onChange={(e) => setName(e.target.value)}
        id="search"
        placeholder="Wpisz nazwisko szukanego użytkownika..."
      />
    </div>
  );
}
