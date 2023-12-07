import React from "react";
import "./welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <main className="welcome">
      <h1>Welcome to Marvel's World</h1>
      <Link className="welcome-button" to={"/Login"}>
        Login
      </Link>
    </main>
  );
};

export default Welcome;
