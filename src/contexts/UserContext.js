import React, { useState, useEffect, createContext } from "react";
import { userauth } from "../firebase";

const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    userauth.onAuthStateChanged((changedUser) => {
      setUser(changedUser);
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserContext;
export { UserProvider };