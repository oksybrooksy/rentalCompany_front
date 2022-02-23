import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./style.css";

export default function DeleteUserEmp({ name }) {
  const [users2, setUsers2] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:8080/getFilteredUsers?name=${name}&role=1`)
      .then((res) => res.json())
      .then((result) => {
        setUsers2(result);
      });
  }, [load, name]);

  const handleClick = (e) => {
    setLoad(true);
    e.preventDefault();

    fetch("http://localhost:8080/deleteUser", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: e.target.id,
      }),
    })
      .then((res) => res.json())

      .then(() => {
        console.log("user deleted");
        setLoad(false);
      });
  };

  var index = 1;
  return (
    <div>
      <div id="main">
        <table>
          <tr id="mainTable">
            <td id="first"> Lp.</td>
            <td> Imię</td>
            <td>Nazwisko </td>
            <td>Email </td>
            <td>Numer telefonu </td>
            <td></td>
          </tr>
          {users2.map((user) => (
            <tr>
              <td id="first">{index++}</td>
              <td>{user.name} </td>
              <td>{user.surname} </td>
              <td>{user.email} </td>
              <td>{user.phone_number} </td>
              <td>
                <Button
                  id={user.id}
                  key={user.id}
                  variant="outline-secondary"
                  block
                  size="50px"
                  type="submit"
                  onClick={handleClick}
                >
                  Usuń użytkownika
                </Button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
