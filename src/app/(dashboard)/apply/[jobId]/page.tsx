import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import prisma from "@/config/db";
import isLoggedIn from "@/lib/auth";
import { notFound } from "next/navigation";
import JobApplyForm from "./_components/JobApplyForm";

export default async function Page({
  params: { jobId },
}: {
  params: { jobId: string };
}) {
  await isLoggedIn();
  const job = await prisma.job.findUnique({
    where: {
      id: jobId,
    },
    include: {
      company: true,
    },
  });

  if (!job) {
    return notFound();
  }

  return (
    <div className="w-full py-12 md:py-16 lg:py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[1fr_400px] lg:gap-16 xl:gap-24">
        <div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg py-1 text-sm">
              Job Posting
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {job?.title}
            </h1>
            <div className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              {job?.roles}
            </div>
          </div>
          <JobApplyForm jobId={jobId} />
        </div>
        <div className="space-y-6 lg:sticky lg:top-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium">Job Requirements</p>
                <ul
                  className="list-disc space-y-1 pl-4 text-sm text-gray-500 dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: job?.requirements }}
                />
              </div>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Benefits</p>
                <ul
                  className="list-disc space-y-1 pl-4 text-sm text-gray-500 dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: job?.benefits }}
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>About the Company</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p
                className="text-sm text-gray-500 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: job?.company?.about ?? "" }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
