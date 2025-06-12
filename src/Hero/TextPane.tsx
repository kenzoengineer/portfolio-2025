const TextPane = () => {
  return (
    <div className="flex items-center justify-center md:justify-end text-center md:text-right">
      <div className="text-b-black">
        <h1 className="text-8xl md:text-[8rem]/22 lg:text-[10rem]/30 font-medium md:mb-5">
          KEN
        </h1>
        <h1 className="text-8xl/15 md:text-[10rem]/30 lg:text-[12rem]/35 font-black mb-5 md:mb-10">
          JIANG
        </h1>
        <h2 className="text-xl md:text-2xl">
          Incoming Software Engineer @ <b>Sentry</b>
        </h2>
        <h2 className="text-xl md:text-2xl max-md:mb-5">
          Computer Engineering Alum @ <b>UWaterloo</b>
        </h2>
      </div>
    </div>
  );
};

export default TextPane;
