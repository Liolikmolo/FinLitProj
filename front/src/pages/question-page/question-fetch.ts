import prisma from '@/lib/prisma';

export const QuestFetch = async () => {
	const questions = await prisma.question.findMany();
	const ids = questions.map((item) => item.id);
	let currIn = 0;

	const [answers] = await prisma.answer.findMany({
		where: { id: ids[currIn] },
	});

	const onNextClick = () => {
		currIn = (currIn + 1) % ids.length;
		return ids[currIn];
	};

	const onPrevClick = () => {
		currIn = (currIn - 1 + ids.length) % ids.length;
		return ids[currIn];
	};

	const check = () => {
		const chekedAnsw = answers.correct;
		if (chekedAnsw) {
			return 'true';
		} else {
			return 'false';
		}
	};

	return { onNextClick, onPrevClick, check };
};
