const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function findJobById(jobId : string) {
  const job = await prisma.job.findUnique({
    where: {
      id: jobId,
    },
    include: {
      company: true,
    },
  });
  
  console.log(job);
  return job;
}

// Call the function with a specific job ID
findJobById('1cb61663-8af3-4d17-87b0-d81f0eea808c')
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
