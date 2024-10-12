import prisma from '@/lib/prisma';

export default async function Home() {
	const data = await prisma.question.findMany();
	const content = data.map((item) => {
		const text = item.content;
		return text;
	});

	return <h1>{content}</h1>;
}
