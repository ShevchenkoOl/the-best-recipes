import style from './registerPage.module.css';
import { FaRegUser } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { FiLock } from 'react-icons/fi';
import Button from '../../Ul/Button/Button';
import { Link } from 'react-router-dom';
import Input from '../../Ul/Input/Input';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const RegistrPage = () => {
  const [errors, setErrors] = useState({});

  const validateName = (value) => {
    if (value.length < 3) {
      return { isValid: false, message: 'The name must be at least 3 characters long.' };
    }
    return { isValid: true };
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return { isValid: false, message: 'Incorrect email' };
    }
    return { isValid: true };
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      return { isValid: false, message: 'Password must be at least 6 characters long' };
    }
    if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) {
      return { isValid: false, message: 'The password must contain letters and numbers' };
    }
    return { isValid: true };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('Name');
    const email = formData.get('Email');
    const password = formData.get('Password');

    const nameValidation = validateName(name);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    const newErrors = {};
    if (!nameValidation.isValid) newErrors.Name = nameValidation.message;
    if (!emailValidation.isValid) newErrors.Email = emailValidation.message;
    if (!passwordValidation.isValid) newErrors.Password = passwordValidation.message;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success('🦄 Wow so easy!', {
        className: style.toast, // Стилизация уведомления
        position: "top-right", // Позиция уведомления
        autoClose: 3000, // Авто-закрытие через 3 сек
        hideProgressBar: false, // Прогресс-бар
        closeOnClick: true, // Закрывать при клике
        pauseOnHover: true, // Остановка при наведении
        draggable: true, // Можно перетаскивать
        theme: "dark", // Тема (light/dark/colored)
      });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.section}></div>
      <div className={style.sectionForm}>
        <h2 className={style.title}>Registration</h2>
        <form className={style.form} onSubmit={handleSubmit}>
          <Input name="Name" icon={<FaRegUser />} validate={validateName} />
          {errors.Name && <p className={style.error}>{errors.Name}</p>}

          <Input name="Email" icon={<MdMailOutline />} validate={validateEmail} />
          {errors.Email && <p className={style.error}>{errors.Email}</p>}

          <Input name="Password" icon={<FiLock />} type="password" validate={validatePassword} />
          {errors.Password && <p className={style.error}>{errors.Password}</p>}

          <Button to="/mainpage" text="Sign up" addClass="singUp" />
        </form>
      </div>
      <div className={style.linkContainer} >
        <Link to="/signin" className={style.linkSingIn}>
          Sign in
        </Link>
      </div>
      <div className={style.wave}>
        <svg
          width="100%"
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
