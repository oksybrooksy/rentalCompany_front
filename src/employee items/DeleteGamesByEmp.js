import React, { useState, useEffect } from "react";
import SearchEmp from "./SearchEmp";
import DeleteGames from "./DeleteGames";
import EmployeeMenu from "./EmployeeMenu";

export default function EmpMenu() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("none");

  useEffect(() => {}, [name, category]);
  return (
    <div>
      <EmployeeMenu />
      <SearchEmp setName={setName} />
      <DeleteGames name={name} category={category} />
    </div>
  );
}
