import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchJob from "./SearchJob";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Find Your Dream Job
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Connect with 200+ employers. Apply to
              thousands of job opportunities across top companies, industries and
              locations.
            </p>
          </div>
          <div className="w-full sm:max-w-sm">
            <SearchJob />
          </div>
        </div>
      </div>
    </section>
  );
}
