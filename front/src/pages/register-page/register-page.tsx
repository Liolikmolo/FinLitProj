import React from "react";
import styles from "./register-page.module.scss"
import { LandingButton } from "@/shared/ui";
export const RegisterPage = () => {
    return (
        <div className={styles.registrationWindow}>
            <a href='/' className={styles.exit}>X</a>
            <h1 className={styles.registration}>Регистрация</h1>
            <form className={styles.form}>
                <label htmlFor="nickname" className={styles.NameItem}>
                    Имя пользователя
                </label>
                <input className={styles.fillItem} style={{fontSize: 15}} type="text" name="nickname" placeholder="Введите имя пользователя"/>
                <label htmlFor="email" className={styles.NameItem}>
                    E-mail
                </label>
                <input className={styles.fillItem} style={{fontSize: 15}} type="email" name="email" placeholder="Введите E-mail"/>
                <label htmlFor="password" className={styles.NameItem}>
                    Пароль
                </label>
                <input className={styles.fillItem} style={{fontSize: 15}} type="password" name="password" placeholder="Введите пароль"/>
                <label htmlFor="repeatPassword" className={styles.NameItem}>
                    Повторите пароль
                </label>
                <input className={styles.fillItem} style={{fontSize: 15}} type="password" name="repeatPassword" placeholder="Повторите пароль"/>
                <h2 className={styles.welcome}>
                    Добро пожаловать!
                </h2>
                <LandingButton width={200} height={80} fontSize={20}>
                    Подтвердить
                </LandingButton>
            </form>
        </div>
    );
}