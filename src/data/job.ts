import { queryAllJobs } from "../client/query";
import { unstable_cache } from "next/cache";

export const getAllJobs = unstable_cache(queryAllJobs, ["jobs"], {
	revalidate: 10 * 1000,  // 10ms
});
