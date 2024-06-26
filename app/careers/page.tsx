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

export default function CareersPage() {
  return (
    <>
      {/* <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"> */}
      <h1 className={title()}>Careers&nbsp;</h1>
      <section className="flex-col space-y-8  gap-8 columns-1 md:columns-2 py-8 md:py-10">
        <JobCard />
        {/* <Spacer x={8} /> */}
        <JobCard />
        {/* <Spacer x={8} /> */}
        <JobCard />
        {/* <Spacer x={8} /> */}
        <JobCard />
        {/* <Spacer x={8} /> */}
        <JobCard />
      </section>
      {/* <div className="inline-block max-w-lg text-center justify-center">
      <h1 className={title()}>Careers&nbsp;</h1>
      <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
      <br />
      <h1 className={title()}>
        websites regardless of your design experience.
      </h1>
      <h2 className={subtitle({ class: "mt-4" })}>
        Beautiful, fast and modern React UI library.
      </h2>
    </div>

    <div className="flex gap-3">
      <Link
        isExternal
        className={buttonStyles({
          color: "primary",
          radius: "full",
          variant: "shadow",
        })}
        href={siteConfig.links.docs}
      >
        Documentation
      </Link>
      <Link
        isExternal
        className={buttonStyles({ variant: "bordered", radius: "full" })}
        href={siteConfig.links.github}
      >
        <GithubIcon size={20} />
        GitHub
      </Link>
    </div>

    <div className="mt-8">
      <Snippet hideCopyButton hideSymbol variant="flat">
        <span>
          Get started by editing <Code color="primary">app/page.tsx</Code>
        </span>
      </Snippet>
    </div> */}
      {/* </section> */}
    </>
  );
}
