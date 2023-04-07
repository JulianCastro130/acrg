import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./formulario.module.css";

export default function Form() {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    setFadeOut(true);
    setTimeout(() => navigate("/methodPay"), 500); // Navigate after the animation finishes
  };

  return (
    <div
      className={`animate__animated ${
        fadeOut ? "animate__fadeOutLeft" : "animate__fadeInRight"
      }`}
    >
      <div className={styles.form}>
        <form onSubmit={handlePayment}>
          <div className={styles.formData}>
            <h2 style={{ textAlign: "center", fontSize: "40px" }}>Formulario de registro</h2>
            <input className={styles.inputs} placeholder="Nombre" />
            <input className={styles.inputs} placeholder="Apellido" />
            <input className={styles.inputs} placeholder="Documento" />
            <input className={styles.inputs} placeholder="Chasis" />
            <br />
            <h3 style={{ textAlign: "center",fontSize: "30px",marginTop: "0px" }}>Seleccione Categría</h3>
            <select
              className={styles.select}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <option>Categoría 1</option>
              <option>Categoría 2</option>
              <option>Categoría 3</option>
              <option>Categoría 4</option>
              <option>Categoría 5</option>
            </select>
          </div>
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: "#118AFA",
              width: "300px",
              height: "60px",
              fontSize: "36px",
              padding: "0px"
            }}
          >
            Pagar
          </button>
        </form>
      </div>
    </div>
  );
}
