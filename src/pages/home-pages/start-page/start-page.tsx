import React from "react";
import styles from "./start-page.module.scss";
import Link from "next/link";

export const StartPage = () => {
  return (
    <div className={styles.startPage}>
        <Link href={"#"} className={styles.testButton}>Пройти тестирование</Link>
    </div>
  );
};
