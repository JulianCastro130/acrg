import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "./assets/succes.png";

export default function Succes() {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Trigger the fade-out animation before navigating back to the homepage
      setFadeOut(true);
      setTimeout(() => navigate("/"), 500); // Navigate after the animation finishes
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className={`animate__animated ${fadeOut ? "animate__fadeOutLeft" : "animate__fadeInRight"}`}
      style={{ backgroundImage: `url(${img})`,backgroundPosition:"center",backgroundRepeat:"no-repeat" ,backgroundSize: "contain", height: "100vh", width: "100vw" }}
    ></div>
  );
}