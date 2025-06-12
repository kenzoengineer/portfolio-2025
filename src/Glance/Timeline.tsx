interface EventProps {
  company: string;
  title: string;
  location: string;
  date: string;
  first?: boolean;
}
const Event = ({ company, title, location, date, first }: EventProps) => {
  return (
    <div className="flex gap-x-2">
      <div className="w-8 text-right -mt-1">
        <p>{date}</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-b-black rounded-full h-5 w-5" />
        {!first && <div className="bg-b-blue h-24 w-1" />}
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-2xl -mt-1">{company}</h3>
        <p className="italic">{title}</p>
        <p className="font-medium">{location}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="flex flex-col">
      <Event
        company="Sentry"
        title="Software Engineer"
        location="San Francisco, CA"
        date="Aug '25"
      />
      <Event
        company="Sentry"
        title="Software Engineer Intern"
        location="San Francisco, CA"
        date="Sep '24"
      />
      <Event
        company="Vontive"
        title="Software Engineer Intern"
        location="San Francisco, CA"
        date="Jan '24"
      />
      <Event
        company="Senstar"
        title="Software Developer Intern"
        location="Waterloo, ON"
        date="Jan '23"
      />
      <Event
        company="Shoplogix"
        title="Software Developer Intern"
        location="Oakville, ON"
        date="Apr '22"
        first
      />
    </div>
  );
};

export default Timeline;
