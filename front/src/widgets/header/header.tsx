import React from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import logo from '@/shared/assets/icons/logo.svg';
import arrow from '@/shared/assets/icons/arrow.svg';
import Link from 'next/link';

type HeaderProps = {
	backgroundColor?: string,
};

export const Header = ({backgroundColor='#eaf2f5'} : HeaderProps) => {
	const headerStyle = {
		backgroundColor: backgroundColor,
	};

	return (
		<header id="header" className={styles.header} style={headerStyle}>
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
				<Link href="registration">
					<button className={styles.registrationButton}>Регистрация</button>
				</Link>
				<Link href="login">
					<button className={styles.loginButton}>
						<Image src={arrow} className={styles.arrow} alt="arrow" /> Войти
					</button>
				</Link>
			</div>
		</header>
	);
};