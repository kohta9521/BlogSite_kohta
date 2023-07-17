import React, { FC } from "react";

// css import
import styles from "./DateText.module.css";


// interface type
interface dateProps {
  id: number;
  dateText: string;
}

const DateText: React.FC<dateProps> = ({ id, dateText }) => {
  return  (
    <div className={styles.dateBox} key={id}>
      <p className={styles.dateText}>
      {dateText}
      </p>
    </div>
  )
}

export default DateText;