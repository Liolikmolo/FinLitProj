import React from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import logo from '@/shared/assets/icons/logo.svg';
import arrow from '@/shared/assets/icons/arrow.svg';
import Link from 'next/link';

export const Header = () => {
	return (
		<header id="header" className={styles.header}>
			<Image src={logo} className={styles.logo} alt="logotype" />
			<ul className={styles.links}>
				<li className={styles.links_item}>
					<Link href="#knowledge">Чему вы научитесь</Link>
				</li>
				<li className={styles.links_item}>
					<Link href="#education">Процесс обучения</Link>
				</li>
				<li className={styles.links_item}>
					<Link href="#advantages">Преимущества</Link>
				</li>
				<li className={styles.links_item}>
					<Link href="#footer">Контакты</Link>
				</li>
			</ul>
			<div className={styles.buttons}>
				<Link href="/registrationPage">
					<button className={styles.registrationButton}>Регистрация</button>
				</Link>
				<Link href="/loginPage">
					<button className={styles.loginButton}>
						<Image src={arrow} className={styles.arrow} alt="arrow" /> Войти
					</button>
				</Link>
			</div>
		</header>
	);
};
