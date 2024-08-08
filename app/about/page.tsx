import { title } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About Us</h1>
      <Divider className="my-4" />
      
      We are a startup formed by talented engineers with experience in saving
      derailed software projects by reducing infrastructure/development costs
      and building resilience in critical paths of a software asset. And our
      agile teams are formed with a culture of growth mindset and delivering
      value to the users of our software products.
    </div>
  );
}
