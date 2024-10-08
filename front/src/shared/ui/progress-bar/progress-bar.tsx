import React from 'react';
import styles from './progress-bar.module.scss';

export const ProgressBar = () => {
	return (
		<div className={styles.barContainer}>
			<div className={styles.progress_bar}>
				<div className={styles.progress}></div>
					<div className={styles.progress_number}>1 из 20</div>
			</div>
		</div>
	);
};