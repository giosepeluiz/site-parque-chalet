import Image from "next/image";
import styles from "../styles/Header.module.scss";
import logo from "../../public/images/avatar-logo-chalet.png";

/* Cabeçalho do projeto */
const Header = () => (
  <header className={styles["logotipo-wrapper"]}>
    <div className={styles.logotipo}>
      <Image width="250" height="250" src={logo} alt="Condomínio Parque Chalet" />
    </div>
  </header>
);

export default Header;
