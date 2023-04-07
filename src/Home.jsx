import { Link } from "react-router-dom";
import img from "./assets/autodromo.png";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.Home}>
      <div
        style={{
          width: "100%",
          backgroundImage: `url(${img})`,
          height: "15em",
          backgroundPositionY: "-8em",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          }}
        >
          Autódromo
        </h1>
        <h2
          style={{
            fontSize: "35px",
            color: "white",
            textAlign: "center",
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          }}
        >
          José Muñiz
        </h2>
      </div>
      <div className={styles.contain}>
        <h2>Próximas carreras</h2>
        <button>Mayo</button>
        <br />
        <button>Septiembre</button>
        <br />
        <button>Octubre</button>
      <br />
      <br />
      </div>
      <Link to="/form">
        <button style={{ backgroundColor: "#118AFA", marginTop: "30px", width: "300px", height: "60px" }}>INSCRIBIRME</button>
      </Link>
    </div>
  );
}

export default Home;
