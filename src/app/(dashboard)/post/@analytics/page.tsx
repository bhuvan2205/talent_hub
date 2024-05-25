import { BriefcaseIcon, CalendarIcon, UsersIcon } from "lucide-react";

export default function Page() {
	return (
		<div className="col-span-1 md:col-span-1">
			<div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-900">
				<h1 className="text-2xl font-bold mb-4">Recruiter Dashboard</h1>
				<div className="grid grid-cols-2 gap-4">
					<div className="bg-blue-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
						<BriefcaseIcon className="h-8 w-8 mb-2" />
						<span className="text-lg font-bold">24</span>
						<span className="text-sm text-center">Open Positions</span>
					</div>
					<div className="bg-green-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
						<UsersIcon className="h-8 w-8 mb-2" />
						<span className="text-lg font-bold">150</span>
						<span className="text-sm text-center">Active Candidates</span>
					</div>
					<div className="bg-yellow-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
						<CalendarIcon className="h-8 w-8 mb-2" />
						<span className="text-lg font-bold">12</span>
						<span className="text-sm text-center">Scheduled Interviews</span>
					</div>
					<div className="bg-red-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
						<BriefcaseIcon className="h-8 w-8 mb-2" />
						<span className="text-lg font-bold">5</span>
						<span className="text-sm text-center">Pending Offers</span>
					</div>
				</div>
			</div>
		</div>
	);
}
