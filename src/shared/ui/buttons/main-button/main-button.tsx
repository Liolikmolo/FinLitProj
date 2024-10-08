import React from 'react';
import styles from './main-button.module.scss';

type ButonProps = {
    children: React.ReactNode
}

export const MainButton = ({children}: ButonProps) => {
	return (
		<div className={styles.button_wrapper}>
			<button className={styles.button_body}>{children}</button>
		</div>
	);
};