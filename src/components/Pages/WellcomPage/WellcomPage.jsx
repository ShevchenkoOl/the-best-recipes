import { useLoaderData } from "react-router-dom";
import styles from "./wellcomPage.module.css";
import logo from "../../../assets/logo.svg";
import Button from "../../Ul/Button/Button";

const WellcomPage = () => {
  const { title, mainText } = useLoaderData();

  return (
    <div className={styles.container}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.section} >
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.mainText}>{mainText}</p>
        </div>
        <div className={styles.buttonContainer}>
        <Button to="/register" text="Registration" addClass="btnRegistr"/>
        <Button to="/signin" text="Sign in" addClass="btnSingIn"/>
        </div>
    </div>
  );
};

export default WellcomPage;
