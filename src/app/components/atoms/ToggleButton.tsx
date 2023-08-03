import React, { FC, MouseEventHandler } from "react";

// css import
import styles from "./styles/ToggleButton .module.css";

type Props = {
  open: boolean;
  onClick: MouseEventHandler;
  controls: string;
  label: string;
}


const ToggleButton: React.FC<Props> = ({ open, controls, label, onClick}) => {
  return (
    <button
      type="button"
      aria-controls={controls}
      aria-expanded={open}
      aria-label={label}
      onClick={onClick}
      className={styles.toggleButton}
    >
      <span className={styles.line1}></span>
      <span className={styles.line2}></span>
    </button>
  )
}

export default ToggleButton;