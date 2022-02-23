import React from "react";
import "./style.css";
import { Input } from "semantic-ui-react";

export default function Searching({ setName }) {
  return (
    <div>
      <Input
        onChange={(e) => setName(e.target.value)}
        id="searching"
        placeholder="Wpisz szukaną nazwę..."
      ></Input>
    </div>
  );
}
