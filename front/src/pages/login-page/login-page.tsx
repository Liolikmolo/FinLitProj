import React from "react";
import styles from "./login-page.module.scss"
import Link from 'next/link';
import LandingButton from "@/shared/ui/buttons/landing-button/landing-button";

export const LoginPage = () => {
    return (
        <div className={styles.loginWindow}>
            <a href='/' className={styles.exit}>X</a>
            <h1 className={styles.enter}>Вход</h1>
            <form className={styles.form}>
                <label htmlFor="nickname" className={styles.NameItem}>Имя пользователя</label>
                    <input className={styles.fillItem} type="text" name="nickname" placeholder="Ваше имя пользователя"/>
                <label htmlFor="email" className={styles.NameItem}>E-mail</label>
                    <input className={styles.fillItem} type="email" name="email" placeholder="Ваш E-mail"/>
                <label htmlFor="password" className={styles.NameItem}>Пароль</label>
                    <input className={styles.fillItem} type="password" name="password" placeholder="Ваш пароль"/>
                <h2 className={styles.welcome}>Снова здравствуй!</h2>
                <Link className={styles.confirm} href='/profilePage'>
                <LandingButton width={200} height={80} fontSize={20}>Подтвердить</LandingButton>
                </Link>
            </form>
        </div>
    );
}