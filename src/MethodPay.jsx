import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "./assets/methodpay.png";

export default function MethodPay() {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = () => {
    // Trigger the fade-out animation before navigating
    setFadeOut(true);
    setTimeout(() => navigate("/pay"), 500); // Navigate after the animation finishes
  };

  useEffect(() => {
    // Remove the fade-out animation class when it finishes
    const element = document.querySelector(".methodPay");
    const handleAnimationEnd = () => setFadeOut(false);
    element.addEventListener("animationend", handleAnimationEnd);
    return () => element.removeEventListener("animationend", handleAnimationEnd);
  }, []);

  return (
    <div
      onClick={handleOnClick}
      className={`methodPay animate__animated ${fadeOut ? "animate__fadeOutLeft" : "animate__fadeInRight"}`}
      style={{ backgroundImage: `url(${img})`,backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize: "contain", height: "100vh", width: "100vw" }}
    ></div>
  );
}
