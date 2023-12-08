import styles from "./Input.module.css";

const Input = ({ placeholder, onChangeHandler, value }) => {
  return (
    <input
      value={value}
      onChange={onChangeHandler}
      className={styles.input}
      placeholder={placeholder}
    />
  );
};

export default Input;
