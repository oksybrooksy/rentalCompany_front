import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Switch, Link, Redirect } from "react-router-dom";
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
import Locals from "../strony/localRent";
import RentsArchieve from "../employee items/RentsArchieve";
import RentsToAccept from "../employee items/RentsToAccept";
import RentsRented from "../employee items/RentsRented";
import { UserContext } from "../context/UserContext";
import { redirect } from "react-router-dom";
import UserRent from "../User/UserRent";
import UserArchieve from "../User/UserArchieve";
import UserAccount from "../User/UserAccount";

export default function Layout() {
  const { user, isLogged } = useContext(UserContext);
  const [log, setLog] = isLogged;
  const [userDetails, setUser] = user;

  const logged = true;

  return (
    <div>
      {/* <MyNavbar /> */}

      <div id="middle">
        <Routes>
          <Route path="/game/:id" exact element={<OneGame />} />
          <Route
            path="/"
            element={
              log && userDetails.role_id == 3 ? (
                <Navigate to="/admin"> </Navigate>
              ) : log && userDetails.role_id == 2 ? (
                <EmpMenu></EmpMenu>
              ) : (
                <Main />
              )
            }
          />
          <Route path="/admin" element={<AdminMenu />} />
          <Route
            path="/deleteGameEmp"
            element={
              log && userDetails.role_id == 2 ? (
                <EmpMenu />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/log"
            element={log ? <Navigate to="/" /> : <Logowanie />}
          />

          <Route
            path="userRent"
            element={!log ? <Navigate to="/" /> : <UserRent />}
          />
          <Route
            path="/userArchieveRent"
            element={!log ? <Navigate to="/" /> : <UserArchieve />}
          />
          <Route
            path="/userAccount"
            element={!log ? <Navigate to="/" /> : <UserAccount />}
          />

          <Route path="/reg" element={<Registration />} />
          <Route path="/stats" element={<Stats />} />

          <Route
            path="/deleteUser"
            element={!log ? <Navigate to="/" /> : <DeleteUserByAdmin />}
          />
          <Route
            path="/deleteEmpl"
            element={!log ? <Navigate to="/" /> : <DeleteEmpByAdmin />}
          />
          <Route
            path="/addUserAdm"
            element={!log ? <Navigate to="/" /> : <AddUserAdmin />}
          />
          <Route
            path="/addEmpl"
            element={!log ? <Navigate to="/" /> : <AddEmp />}
          />
          <Route
            path="/emp"
            element={!log ? <Navigate to="/" /> : <EmployeeMenu />}
          />
          <Route
            path="/deleteUserEmp"
            element={!log ? <Navigate to="/" /> : <DelUserByEmp />}
          />

          <Route
            path="/addGame"
            element={!log ? <Navigate to="/" /> : <AddGame />}
          />
          <Route
            path="/addUser"
            element={!log ? <Navigate to="/" /> : <AddUser />}
          />
          <Route
            path="/rents"
            element={!log ? <Navigate to="/" /> : <Rents />}
          />
          <Route
            path="/locals"
            element={!log ? <Navigate to="/" /> : <Locals />}
          />
          <Route
            path="/archieveRents"
            element={!log ? <Navigate to="/" /> : <RentsArchieve />}
          />
          <Route
            path="/rentsToAccept"
            element={!log ? <Navigate to="/" /> : <RentsToAccept />}
          />
          <Route
            path="/rentsRented"
            element={!log ? <Navigate to="/" /> : <RentsRented />}
          />
        </Routes>
      </div>
    </div>
  );
}
