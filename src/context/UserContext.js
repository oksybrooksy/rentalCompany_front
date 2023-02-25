import React, { useState } from "react";

export const UserContext = React.createContext("");

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [logged, setLog] = useState(false);

  return (
    <UserContext.Provider
      value={{ user: [user, setUser], isLogged: [logged, setLog] }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
