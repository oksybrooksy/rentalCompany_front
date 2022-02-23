import React, { useState, useEffect } from "react";
import EmployeeMenu from "./EmployeeMenu";
import SearchUser from "./SearchUser";
import DeleteUserEmp from "./DeleteUser";

export default function DelUserByEmp() {
  const [name, setName] = useState("");

  useEffect(() => {}, [name]);
  return (
    <div>
      <EmployeeMenu />
      <SearchUser setName={setName} />
      <DeleteUserEmp name={name} />
    </div>
  );
}
