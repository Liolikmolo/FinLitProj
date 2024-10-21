import React from "react";
import styles from "./login-page.module.scss";
import { signIn } from "@/auth";
import { LandingButton } from "@/shared/ui";

export const LoginPage = () => {
  return (
    <div className={styles.loginWindow}>
      <a href="/" className={styles.exit}>
        X
      </a>
      <h1 className={styles.enter}>Вход</h1>
      <form
        className={styles.form}
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <label htmlFor="nickname" className={styles.NameItem}>
          Имя пользователя
        </label>
        <input
          className={styles.fillItem}
          type="text"
          name="nickname"
          placeholder="Ваше имя пользователя"
        />
        <label htmlFor="email" className={styles.NameItem}>
          E-mail
        </label>
        <input
          className={styles.fillItem}
          type="email"
          name="email"
          placeholder="Ваш E-mail"
          required
        />
        <label htmlFor="password" className={styles.NameItem}>
          Пароль
        </label>
        <input
          className={styles.fillItem}
          type="password"
          name="password"
          placeholder="Ваш пароль"
          required
        />
        <h2 className={styles.welcome}>Снова здравствуй!</h2>
        <div className={styles.confirm}>
          <LandingButton width={200} height={80} fontSize={20} href={"/"}>
            Подтвердить
          </LandingButton>
        </div>
      </form>
    </div>
  );
};

// function LoginButton() {

// 	const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
// 		if (pending) {
// 			event.preventDefault();
// 		}
// 	};
// 	return (
// 		<button aria-disabled={pending} type="submit" onClick={handleClick}>
// 			Подтвердить
// 		</button>
// 	);
// }
