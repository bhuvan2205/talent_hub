// prisma/seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
	const company1 = await prisma.company.create({
		data: {
			about:
				"Acme Inc. is a leading technology company that specializes in building innovative web applications. We have been in business for over 10 years and have a strong track record of delivering high-quality solutions to our clients. Our team is composed of talented engineers, designers, and product managers who are passionate about their work. We value collaboration, creativity, and continuous learning, and we strive to create a positive and inclusive work environment.",
		},
	});

	const company2 = await prisma.company.create({
		data: {
			about:
				"Altudo, We are a global digital marketing and technology consulting company, focused on creating 1:1 personalized, seamless experiences across channels and optimizing your customer experience for business impact. We have completed over 2000+ projects for 45+ Fortune 500 companies across CPG, Legal, Manufacturing, Technology, Financial Services, and Insurance.",
		},
	});

	// Create some jobs
	await prisma.job.create({
		data: {
			title: "Software Engineer",
			type: "Full-time",
			requirements: `5+ years of experience in frontend development
            Proficient in HTML, CSS, and JavaScript
            Experience with modern frontend frameworks like React or Vue
            Strong problem-solving and critical thinking skills
            Ability to work collaboratively in a team`,
			location: "Remote",
			benefits: `Competitive salary and equity
            Comprehensive health, dental, and vision insurance
            401(k) retirement plan with employer matching
            Generous paid time off and holidays
            Professional development opportunities`,
			company: 1,
			minSalary: 60000,
			maxSalary: 100000,
			authorId: "1",
			companyId: company1.id,
		},
	});

	await prisma.job.create({
		data: {
			title: "Frontend Engineer",
			type: "Contract",
			requirements: `5+ years of experience in frontend development
            Proficient in HTML, CSS, and JavaScript
            Experience with modern frontend frameworks like React or Vue
            Strong problem-solving and critical thinking skills
            Ability to work collaboratively in a team`,
			location: "Remote",
			benefits: `Competitive salary and equity
            Comprehensive health, dental, and vision insurance
            401(k) retirement plan with employer matching
            Generous paid time off and holidays
            Professional development opportunities`,
			company: 1,
			minSalary: 70000,
			maxSalary: 120000,
			authorId: "1",
			companyId: company2.id,
		},
	});

	await prisma.job.create({
		data: {
			title: "FullStack Engineer",
			type: "Part-time",
			requirements: `5+ years of experience in frontend development
            Proficient in HTML, CSS, and JavaScript
            Experience with modern frontend frameworks like React or Vue
            Strong problem-solving and critical thinking skills
            Ability to work collaboratively in a team`,
			location: "Remote",
			benefits: `Competitive salary and equity
            Comprehensive health, dental, and vision insurance
            401(k) retirement plan with employer matching
            Generous paid time off and holidays
            Professional development opportunities`,
			company: 2,
			minSalary: 50000,
			maxSalary: 90000,
			authorId: "1",
			companyId: company2.id,
		},
	});

	await prisma.job.create({
		data: {
			title: "Devops Engineer",
			type: "Part-time",
			requirements: `5+ years of experience in frontend development
            Proficient in HTML, CSS, and JavaScript
            Experience with modern frontend frameworks like React or Vue
            Strong problem-solving and critical thinking skills
            Ability to work collaboratively in a team`,
			location: "Remote",
			benefits: `Competitive salary and equity
            Comprehensive health, dental, and vision insurance
            401(k) retirement plan with employer matching
            Generous paid time off and holidays
            Professional development opportunities`,
			company: 1,
			minSalary: 80000,
			maxSalary: 130000,
			authorId: "2",
			companyId: company1.id,
		},
	});
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
