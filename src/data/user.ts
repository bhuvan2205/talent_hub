import {
  queryJobApplicationsCount,
  queryLatestJobs,
  queryRecentJobApplications,
} from "../client/query";
import { unstable_cache } from "next/cache";

export const getJobApplicationsCount = unstable_cache(
  queryJobApplicationsCount,
  ["job-application-count"],
  {
    revalidate: 10 * 1000,
  }
);

export const getRecentJobApplications = unstable_cache(
  queryRecentJobApplications,
  ["recent-job-application"],
  {
    revalidate: 10 * 1000,
  }
);
