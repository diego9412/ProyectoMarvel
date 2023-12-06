import React, { useState } from "react";
import "./login.css";
import InputProject from "../../elements/InputProject/InputProject";
import Button from "../../elements/ButtonPr/ButtonPr";

export default function Login({ setUser }) {
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || contrasena === "") {
      setError(true);
      return;
    }
    setError(false);
    setUser([nombre]);
  };

  return (
    <section className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Welcome!!! Please Login to your account</h1>
        <InputProject
          identifier="userName"
          inputName="Username"
          inputType="text"
          placeholder="Write your UserName"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <InputProject
          identifier="password"
          inputName="Password"
          inputType="password"
          placeholder="Write your Password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <p className="newMember">
          Are you new? <a href="#">Register here</a>
        </p>
        <Button
          buttonType="submit"
          buttonText="Login Now"
          buttonClass="sendInfo"
        />
      </form>
      {/* {error && <p>Campo Obligatorio</p>} */}
    </section>
  );
}
