import prisma from '@/lib/prisma';
import Landing from '@/pages/landing-page/landing-page';

export default async function Home() {
	const data = await prisma.question.findMany();
	const content = data.map((item) => {
		const text = item.content;
		return text;
	});

	return (
		<>
			<Landing />
			<h1>{content}</h1>
		</>
	);
}
