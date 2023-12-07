import React, { useState } from "react";
import "./login.css";
import InputProject from "../../elements/InputProject/InputProject";
import Button from "../../elements/ButtonPr/ButtonPr";

export default function Login({
  setUser,
  error,
  nombre,
  setNombre,
  contrasena,
  setContrasena,
  handleSubmit,
}) {
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
        {error && <p className="fs-3 text-center text-danger">{error}</p>}
        <Button
          buttonType="submit"
          buttonText="Login Now"
          buttonClass="sendInfo"
        />
      </form>
    </section>
  );
}
