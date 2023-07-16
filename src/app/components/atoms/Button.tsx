import React, { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  color?: string;
  size?: 'small' | "medium" | 'large';
}

const Button: React.FC<ButtonProps> = ({ text, size = 'medium' }) => {

  // const buttonStyles = {
  //   backgroundColor: color,
  // }

  return (
    <button className={`${styles.button} ${styles[size]}`}>
      {text}
    </button>
  )
}

export default Button;