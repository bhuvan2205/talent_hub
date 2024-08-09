import {
  queryJobApplicationsCount,
  queryRecentJobApplications,
} from "../client/query";
import { unstable_cache } from "next/cache";

export const getJobApplicationsCount = unstable_cache(
  queryJobApplicationsCount,
  ["job-application-count"],
  {
    revalidate: 1 * 100,
  }
);

export const getRecentJobApplications = unstable_cache(
  (userId: string) => queryRecentJobApplications(userId),
  ["recent-job-application"],
  {
    revalidate: 1 * 100,
  }
);
