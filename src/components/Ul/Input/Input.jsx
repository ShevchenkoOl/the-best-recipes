import { useState } from 'react';
import styles from './input.module.css';
import { RxCrossCircled } from 'react-icons/rx';
import { FcOk } from 'react-icons/fc';

const Input = ({ name, icon, type = "text", validate }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(null); // null - не проверено, true - корректно, false - некорректно
  const [isWeakPassword, setIsWeakPassword] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (validate) {
      const validationResult = validate(inputValue);
      setIsValid(validationResult.isValid);
      setIsWeakPassword(validationResult.isWeakPassword || false);
    }
  };

  return (
    <div className={styles.inputContainer}>
      {/* Основная иконка (например, замок для пароля) */}
      {icon && (
        <span
          className={`${styles.icon} ${
            isValid === false ? styles.errorIcon : isValid ? styles.successIcon : ""
          } ${isWeakPassword ? styles.warningIcon : ""}`}
        >
          {icon}
        </span>
      )}
      
      {/* Вторая иконка ошибки */}
      {isValid === false && (
        <span className={`${styles.errorIcon} ${styles.iconPosition}`}>
          <RxCrossCircled />
        </span>
      )}
      
      {/* Иконка успеха */}
      {isValid === true && (
        <span className={`${styles.successIcon} ${styles.iconPosition}`}>
          <FcOk />
        </span>
      )}
      
      <input
        type={type}
        className={`${styles.input} ${
          isValid === false ? styles.error : isValid ? styles.success : ""
        } ${isWeakPassword ? styles.warning : ""}`}
        placeholder={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
