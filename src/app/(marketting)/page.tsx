import Hero from "./_components/Hero";
import PopularJobs from "./_components/PopularJobs";
import Categories from "./_components/Categories";

export default function Page() {
	return (
		<main className="flex-1">
			<Hero />
			<Categories />
			<PopularJobs />
		</main>
	);
}
