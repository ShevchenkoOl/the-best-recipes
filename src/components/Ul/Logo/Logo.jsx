import styles from './logo.module.css';
import logo from './logo.svg';

const Logo = () => {
    return (
           <img src={logo} alt='Logo' className={styles.logo} />
    )
}

export default Logo;