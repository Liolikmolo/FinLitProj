import React from 'react';
import styles from './landing-page.module.scss';
import { Education } from './ui/education/education';
import { Knowledge } from './ui/knowledge/knowledge';
import { Methodic } from './ui/methodic/methodic';
import { StartPage } from './ui/start-page/start-page';
export default function Landing() {
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
}
