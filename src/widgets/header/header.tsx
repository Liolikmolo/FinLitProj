import React from 'react';
import styles from './landing-header.module.scss';
import Image from 'next/image';
import logo from '../../shared/assets/icons/logo.svg'
import arrow from '../../shared/assets/icons/arrow.svg';
import Link from 'next/link';

export default function Header() {
	return (
		<header id='header' className={styles.header}>
			<Image src={logo} className={styles.logo} alt='logotype' />
			<ul className={styles.linksUl}>
				<li className={styles.linksLi}>
					<Link className={styles.links} href='#knowledge'>
						Чему вы научитесь
					</Link>
				</li>
				<li className={styles.linksLi}>
					<Link className={styles.links} href='#education'>
						Процесс обучения
					</Link>
				</li>
				<li className={styles.linksLi}>
					<a className={styles.links} href='#advantages'>
						Преимущества
					</a>
				</li>
				<li className={styles.linksLi}>
					<Link className={styles.links} href='#footer'>
						Контакты
					</Link>
				</li>
			</ul>
			<div className={styles.buttons}>
				<Link href='/registrationPage' className={styles.registrationLink}>
					<button className={styles.registrationButton}>Регистрация</button>
				</Link>
				<Link href='/loginPage'>
					<button className={styles.loginButton}>
						<Image src={arrow} className={styles.arrow} alt='arrow' /> Войти
					</button>
				</Link>
			</div>
		</header>
	);
}
