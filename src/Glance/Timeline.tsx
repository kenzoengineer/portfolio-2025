import { motion } from "framer-motion";

const timelineMotion = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const eventMotion = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const lineMotion = {
  hidden: { height: "0rem" },
  show: {
    height: "6rem",
    transition: {
      duration: 0.4,
    },
  },
};

interface EventProps {
  company: string;
  title: string;
  location: string;
  date: string;
  first?: boolean;
}
const Event = ({ company, title, location, date, first }: EventProps) => {
  return (
    <motion.div variants={eventMotion} className="flex gap-x-2">
      <div className="w-8 text-right -mt-1">
        <p>{date}</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-b-black rounded-full h-5 w-5" />
        {!first && (
          <motion.div variants={lineMotion} className="bg-b-blue h-24 w-1" />
        )}
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-2xl -mt-1">{company}</h3>
        <p className="italic">{title}</p>
        <p className="font-medium">{location}</p>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.75 }}
      variants={timelineMotion}
      className="flex flex-col"
    >
      <Event
        company="Sentry"
        title="Sftw. Engineer"
        location="San Francisco, CA"
        date="Aug '25"
      />
      <Event
        company="Sentry"
        title="Sftw. Engineer Intern"
        location="San Francisco, CA"
        date="Sep '24"
      />
      <Event
        company="Vontive"
        title="Sftw. Engineer Intern"
        location="San Francisco, CA"
        date="Jan '24"
      />
      <Event
        company="Senstar"
        title="Sftw. Developer Intern"
        location="Waterloo, ON"
        date="Jan '23"
      />
      <Event
        company="Shoplogix"
        title="Sftw. Developer Intern"
        location="Oakville, ON"
        date="Apr '22"
        first
      />
    </motion.div>
  );
};

export default Timeline;
