import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { WorkingWithUs } from "@/components/working-with-us";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { FlipWords } from "@/components/ui/flip-words";
import { ScheduleCallModal } from "@/components/schedule-call-modal";
import { Divider } from "@nextui-org/divider";
export default function Home() {
  const words = [
    "launch your product",
    "expand your engineering bandwidth",
    "become your technology partner",
  ];
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Are you looking for a tech team to &nbsp;</h1>
        <h1 className={title({ color: "violet" })}>
          <FlipWords words={words} />
          &nbsp;
        </h1>
        <br />
      </div>

      <div className="inline-block max-w-xlg text-center justify-center">
        <h2 className={subtitle({ class: "mt-2" })}>Lets talk.</h2>
        <ScheduleCallModal />
      </div>
      <Divider className="my-4" />
      <div className="mt-8">
        {/* <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet> */}
        Our agile tech teams are capable of delivering value with:
        <br />
        <ul>
          <li> AI integration</li>
          <li> Cross platform(Mobile/Web) application development</li>
          <li> Blockchain application development</li>
          <li> Maintaining and extending legacy software systems</li>
          <li> Digitizing business operations(IoT solutions)</li>
        </ul>
        <Divider className="my-4" />
        We can help to expand your tech team with experienced
        <br />
        <ul>
          <li> DevOps engineers</li>
          <li> Full stack engineers</li>
          <li> Machine learning engineers</li>
          <li> UI/UX engineers</li>
          <li> QA automation engineers</li>
        </ul>
      </div>
      <div className="mt-12 text-center justify-center">
        <WorkingWithUs />
      </div>
      <Divider className="my-4" />
      <ScheduleCallModal />
    </section>
  );
}
