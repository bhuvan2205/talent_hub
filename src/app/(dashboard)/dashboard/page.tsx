import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { getJobApplicationsCount, getRecentJobApplications } from "@/data/user";
import isLoggedIn from "@/lib/auth";
import {
  BriefcaseIcon,
  StarIcon,
  BookmarkIcon,
  CalendarIcon,
  CircleX,
} from "lucide-react";
import Link from "next/link";

export default async function Page() {
  await isLoggedIn();
  const jobApplicationsCount = await getJobApplicationsCount();
  const recentJobApplications = await getRecentJobApplications();

  return (
    <section className="bg-gray-100 py-8 px-6 md:px-10 dark:bg-gray-800 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-900">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
                <BriefcaseIcon className="h-8 w-8 mb-2" />
                <span className="text-lg font-bold">
                  {jobApplicationsCount}
                </span>
                <span className="text-sm">Applied Jobs</span>
              </div>
              <div className="bg-green-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
                <StarIcon className="h-8 w-8 mb-2" />
                <span className="text-lg font-bold">5</span>
                <span className="text-sm">Saved Jobs</span>
              </div>
              <div className="bg-yellow-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
                <BookmarkIcon className="h-8 w-8 mb-2" />
                <span className="text-lg font-bold">3</span>
                <span className="text-sm">Interviews</span>
              </div>
              <div className="bg-red-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
                <BriefcaseIcon className="h-8 w-8 mb-2" />
                <span className="text-lg font-bold">1</span>
                <span className="text-sm">Offers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-900">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Recent Job Applications</h2>
              {jobApplicationsCount > 0 && (
                <Button asChild>
                  <Link href="#">View All</Link>
                </Button>
              )}
            </div>
            <div className="grid gap-6">
              {recentJobApplications?.length ? (
                recentJobApplications?.map((jobApplication) => (
                  <Card key={jobApplication?.id}>
                    <CardHeader>
                      <CardTitle>{jobApplication?.job?.title}</CardTitle>
                      <CardDescription>
                        {`${jobApplication?.job?.company?.name} -
                          ${jobApplication?.job?.company?.location}`}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{jobApplication?.job?.requirements}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center justify-between gap-2 h-full">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-5 w-5 text-gray-500" />
                          <span className="text-gray-500">
                            Applied 2 days ago
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">
                            {jobApplication?.job?.type}
                          </span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="flex items-center py-2 space-x-4 rounded-md dark:bg-gray-50 dark:text-gray-800">
                  <div className="flex items-center justify-center">
                    <CircleX />
                  </div>
                  <span>No Job Applications yet!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
