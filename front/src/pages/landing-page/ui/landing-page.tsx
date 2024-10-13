import React from 'react';
import styles from './landing-page.module.scss';
import { Education } from './education/education';
import { Knowledge } from './knowledge/knowledge';
import { Methodic } from './methodic/methodic';
import { StartPage } from './start-page/start-page';

export const Landing = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.objects}>
				<StartPage />
			</div>
			<Knowledge />
			<Education />
			<Methodic />
		</div>
	);
};
