import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts?.pop()?.split(";").shift();
}

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  useEffect(() => {
    const token = getCookie("token");
    if (token) setIsLogged(true);
  }, []);
  console.log(isLogged);

  return <>{isLogged ? <Todo /> : <Login setIsLogged={setIsLogged} />}</>;
}

export default App;
