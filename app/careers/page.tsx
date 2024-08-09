import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { JobCard } from "@/components/job-card";
import { ScheduleCallModal } from "@/components/schedule-call-modal";
import { Spacer } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";

export default function CareersPage() {
  return (
    <>
      {/* <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"> */}
      <h1 className={title()}>Careers&nbsp;</h1>
      <Divider className="my-4" />
      <span>Join our awesome team !</span>
      <section className="flex-col space-y-8  gap-8 columns-1 md:columns-2 py-8 md:py-10">
        {/* <JobCard /> */}
      </section>
      
    </>
  );
}
