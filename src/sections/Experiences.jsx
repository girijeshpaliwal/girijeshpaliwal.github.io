import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section id="experience" className="w-full" aria-label="Work Experience">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
