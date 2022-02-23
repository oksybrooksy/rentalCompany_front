import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
import AdminMenu from "../strony/adminMenu";
import DeleteUser from "./DeleteUser";
import SearchUser from "../employee items/SearchUser";
import DeleteEmpl from "./DeleteEmpl";

export default function DeleteEmpByAdmin() {
  const [name, setName] = useState("");

  useEffect(() => {}, [name]);
  return (
    <div>
      <AdminMenu />
      <SearchUser setName={setName} />
      <DeleteEmpl name={name} />
    </div>
  );
}
