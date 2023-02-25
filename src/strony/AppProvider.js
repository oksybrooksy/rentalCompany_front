import React, { useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export function Sample() {
  // useState React hook
  const [data, setData] = useState({});
  const [moreData, setMoreData] = useState([]);

  const { user, isLogged } = useContext(UserContext);
  const [log, setLog] = isLogged;
  const [userDetails, setUser] = user;

  // useState React hook
  useEffect(() => {
    // setData({ user: [userDetails, setUser], isLogged: [log, setLog] });
    setUser([userDetails]);
    setLog([log]);

    setMoreData(["test", "string"]);
  }, []);

  return userDetails, log;
}

export const AppContext = React.createContext();

export const AppProvider = (props) => (
  <AppContext.Provider value={{ ...Sample }}>
    {props.children}
  </AppContext.Provider>
);
