import CategoriesMenu from "../components/Menu";
import React, { useEffect, useState } from "react";
import Games from "../components/Games";
import Searching from "../components/Searching";
import MyNavbar from "../components/Navbar";
export default function Main() {
  const [category, setCategory] = useState("none");
  const [name, setName] = useState("");

  useEffect(() => {}, [category, name]);

  return (
    <div id="container">
      <MyNavbar />
      {console.log(category)}
      <CategoriesMenu setCategory={setCategory} />
      <Searching setName={setName} />
      <Games category={category} name={name} />
    </div>
  );
}
