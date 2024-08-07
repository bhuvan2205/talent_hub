import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import JobListing from "../_components/JobListing";
import SkeletonJobListing from "../_components/SkeletonJobListing";
import { Suspense } from "react";

export default async function Page({
  searchParams: { page },
}: {
  searchParams: { page: number };
}) {
  return (
    <section className="bg-gray-100 py-8 px-6 md:px-10 dark:bg-gray-800 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <Accordion collapsible type="single">
            <AccordionItem value="job-title">
              <AccordionTrigger className="text-lg font-medium">
                Job Title
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="job-title-software-engineer" />
                    Software Engineer
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="job-title-product-manager" />
                    Product Manager
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="job-title-designer" />
                    Designer
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="location">
              <AccordionTrigger className="text-lg font-medium">
                Location
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox />
                    San Francisco
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox />
                    New York
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox />
                    Remote
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="job-type">
              <AccordionTrigger className="text-lg font-medium">
                Job Type
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="job-type-full-time" />
                    Full-Time
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="job-type-part-time" />
                    Part-Time
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="job-type-contract" />
                    Contract
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="salary-range">
              <AccordionTrigger className="text-lg font-medium">
                Salary Range
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="salary-range-0-50k" />
                    $0 - $50,000
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="salary-range-50k-100k" />
                    $50,000 - $100,000
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="salary-range-100k-plus" />
                    $100,000+
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex justify-between mt-4">
            <Button variant="outline">Clear Filters</Button>
            <Button>Apply Filters</Button>
          </div>
        </div>
        <div className="col-span-2 md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Job Listings</h2>
          </div>
          <Suspense fallback={<SkeletonJobListing />}>
            <JobListing page={page} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
