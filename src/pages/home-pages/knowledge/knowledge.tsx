import React from 'react';
import styles from './landing-knowledge.module.scss';
import Image from 'next/image';
import programmer from '@/shared/assets/icons/programmer.svg';
import codeTerminal from '@/shared/assets/icons/codeTerminal.svg';
import sphere from '@/shared/assets/icons/sphere.svg';
import monitorLines from '@/shared/assets/icons/monitorLines.svg';
import calendar from '@/shared/assets/icons/calendar.svg';
import chat from '@/shared/assets/icons/chat.svg';
import coin from '@/shared/assets/icons/coin.svg';

export const LandingKnowledge = () => {
	return (
		<div id='knowledge' className={styles.knowledgeWrapper}>
			<div className={styles.objects}>
				<h2 className={styles.whatKnowledge}>Какими знаниями вы овладеете:</h2>
				<div className={styles.baseKnowledge}>
					<Image
						src={programmer}
						className={styles.programmerImage}
						alt='programmer-image'
					/>
					<div className={styles.bKText}>
						<div className={styles.Row}>
							<div className={styles.progLanguage}>
								Деньги и денежное обращение
							</div>
							<div className={styles.networks}>Налоги</div>
						</div>
						<div className={styles.Row}>
							<div className={styles.bd}>Инвестиции</div>
							<div className={styles.frameworks}>Цифровой банкинг</div>
						</div>
						<div className={styles.Row}>
							<div className={styles.testing}>Кредиты и депозиты</div>
							<div className={styles.docker}>Фонды</div>
							<div className={styles.git}>Риски</div>
						</div>
						<p className={styles.minKnowledge}>
							Это необходимый минимум для грамотного управления финансами
						</p>
					</div>
				</div>
				<h2 id='advantages' className={styles.ourEducation}>
					Обучение у нас – это удобно и результативно
				</h2>
				<div className={styles.advantagesTop}>
					<div className={styles.advantages}>
						<Image
							className={styles.icons}
							src={codeTerminal}
							alt='terminal-image'
						/>
						<h3 className={styles.title}>Большое количество практики</h3>
						<p className={styles.descriptionFirst}>
							Более 100 самостоятельных заданий и 10 полноценных практических
							занятий
						</p>
					</div>
					<div className={styles.advantages}>
						<Image className={styles.icons} src={sphere} alt='sphere-image' />
						<h3 className={styles.title}>Современные методики обучения</h3>
						<p className={styles.descriptionSecond}>
							Спиральное обучение: погружаемся в материал постепенно, виток за
							витком
						</p>
					</div>
					<div className={styles.advantages}>
						<Image
							className={styles.icons}
							src={monitorLines}
							alt='monitor-lines-image'
						/>
						<h3 className={styles.title}>Простое и понятное изложение</h3>
						<p className={styles.descriptionThird}>
							Вместо заумных терминов – примеры из реального мира
						</p>
					</div>
					<div className={styles.advantages}>
						<Image
							className={styles.iconsCalendar}
							src={calendar}
							alt='calendar-image'
						/>
						<h3 className={styles.title}>Гибкий график занятий</h3>
						<p className={styles.descriptionFourth}>
							Учитесь в любое время в удобном для вас темпе
						</p>
					</div>
				</div>
				<div className={styles.advantagesBottom}>
					<div className={styles.advantages}>
						<Image className={styles.icons} src={chat} alt='chat-image' />
						<h3 className={styles.title}>Прямая связь с опытными педагогами</h3>
						<p className={styles.descriptionFifth}>
							Задавайте вопросы и отправляйте свои ответы на проверку
						</p>
					</div>
					<div className={styles.advantages}>
						<Image className={styles.icons} src={coin} alt='coin-image' />
						<h3 className={styles.title}>Все абсолютно бесплатно</h3>
						<p className={styles.descriptionSixth}>
							Мы не взимаем оплаты ни на одном из этапов обучения
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
