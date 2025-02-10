import style from './registerPage.module.css';
import { FaRegUser } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { FiLock } from 'react-icons/fi';
import Button from 'components/Ul/Button/Button';
import { Link } from 'react-router-dom';
import Input from 'components/Ul/Input/Input';

const RegistrPage = () => {
  const validateEmail = inputValue => {
    if (inputValue.includes('@')) {
      return { isValid: true };
    }
    return { isValid: false };
  };

  const validatePassword = inputValue => {
    if (inputValue.length < 6) {
      return { isValid: true, isWeakPassword: true }; // Слабый пароль
    }
    return { isValid: inputValue.length >= 6 };
  };

  return (
    <div className={style.container}>
      <div className={style.section}></div>
      <div className={style.sectionForm}>
        <h2 className={style.title}>Registration</h2>
        <form className={style.form}>
          <Input
            name="Name"
            icon={<FaRegUser />}
            validate={() => ({ isValid: true })}
          />
          <Input
            name="Email"
            icon={<MdMailOutline />}
            validate={validateEmail}
          />
          <Input
            name="Password"
            icon={<FiLock />}
            type="password"
            validate={validatePassword}
          />
          <Button text="Sing up" addClass="singUp" />
        </form>
      </div>
      <div className={style.linkContainer}>
        <Link to="/signin" className={style.linkSingIn}>
          Sign in
        </Link>
      </div>
      <div className={style.wave}>
        <svg
          width="1440"
          height="325"
          viewBox="0 0 1440 325"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L527 46.4286L657.739 48.534C900.922 52.4503 1144.07 38.6177 1385.24 7.14621L1440 0V325H0V0Z"
            fill="#1E1F28"
          />
        </svg>
      </div>
    </div>
  );
};

export default RegistrPage;
