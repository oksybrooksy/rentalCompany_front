import CategoriesMenu from "../components/Menu";
import React, { useEffect, useState } from "react";
import Games from "../components/Games";
import Searching from "../components/Searching";

export default function Locals() {
  const [category, setCategory] = useState("none");
  const [name, setName] = useState("");

  useEffect(() => {}, [category, name]);

  return (
    <div id="container">
      {console.log(category)}
      <CategoriesMenu setCategory={setCategory} />
      <Searching setName={setName} />
      Tu znajdziesz gry wystawione bezpośrednio przez naszych użytkowników
    </div>
  );
}
