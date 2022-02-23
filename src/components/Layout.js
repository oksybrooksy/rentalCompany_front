import React from "react";
import { Routes, Route } from "react-router-dom";
import Logowanie from "../strony/logowanie";
import Main from "../strony/main";
import Registration from "../strony/rejestracja";
import Stats from "../strony/Stats";
import MyNavbar from "./Navbar";
import "../strony/style.css";
import AdminMenu from "../strony/adminMenu";
import EmployeeMenu from "../employee items/EmployeeMenu";
import AddGame from "../employee items/AddGame";
import AddUser from "../employee items/AddUser";
import Rents from "../employee items/Rents";
import AddUserAdmin from "../admin Items/AddUserAdmin";
import AddEmp from "../admin Items/AddEmp";
import OneGame from "./OneGame";
import EmpMenu from "../employee items/DeleteGamesByEmp";
import DelUserByEmp from "../employee items/DeleteUserByEmp";
import DeleteUserByAdmin from "../admin Items/DeleteUserByAdmin";
import DeleteEmpByAdmin from "../admin Items/DeleteEmpByAdmin";

export default function Layout() {
  return (
    <div>
      <MyNavbar />

      <div id="middle">
        <Routes>
          <Route path="/game/:id" exact element={<OneGame />} />

          <Route path="/" exact element={<Main />} />
          <Route path="/log" element={<Logowanie />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/admin" element={<AdminMenu />} />
          <Route path="/deleteUser" element={<DeleteUserByAdmin />} />
          <Route path="/deleteEmpl" element={<DeleteEmpByAdmin />} />
          <Route path="/addUserAdm" element={<AddUserAdmin />} />
          <Route path="/addEmpl" element={<AddEmp />} />
          <Route path="/emp" element={<EmployeeMenu />} />
          <Route path="/deleteUserEmp" element={<DelUserByEmp />} />
          <Route path="/deleteGameEmp" element={<EmpMenu />} />
          <Route path="/addGame" element={<AddGame />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/rents" element={<Rents />} />
        </Routes>
      </div>

      {/* tu bedzie footer */}
    </div>
  );
}
