const Hero = () => {
  return (
    <section className="w-full bg-gray-default overflow-hidden flex flex-row items-start justify-start box-border max-w-full shrink-0 text-left text-41xl text-gray-900 font-body2-normal-all py-36 mq1050:py-10 mq750:box-border">
      <div className="w-full flex flex-row mq1050:flex-col-reverse items-start px-10 box-border gap-[48px_46px] max-w-full mq750:gap-[23px] justify-center">
        <div className="max-w-[768px] w-full overflow-hidden flex flex-col items-center justify-center gap-[48px] mq450:gap-[24px] mq1050:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-center gap-[8px] max-w-full">
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[72px] font-bold font-inherit inline-block max-w-full mq450:text-17xl mq450:leading-[43px] mq1050:text-29xl mq1050:leading-[58px]">
              Hi, I’m Rishabh 👋
            </h1>
            <div className="self-stretch relative text-base leading-[24px] text-gray-600 whitespace-pre-wrap">{`I'm a UX Designer and Web Developer (React.js & Node.js) with a focus on creating exceptional digital experiences that are user-centric, accessible, usable, visually appealing, and responsive. I have been  designing web and android applications for over a year and developing web applications for over a year now, I have a deep passion for designing and researching about user psychology.`}</div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-[8px] text-base text-gray-600">
            <div className="flex flex-row items-center justify-start py-0 pr-[637px] pl-0 gap-[8px] mq450:pr-5 mq450:box-border mq1050:pr-[318px] mq1050:box-border">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/icon-1.svg"
              />
              <div className="relative leading-[24px] inline-block min-w-[99px]">
                Kanpur, India
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="overflow-hidden flex flex-col items-center justify-center p-2">
                <div className="w-2 h-2 relative rounded-xl bg-mediumseagreen-200 overflow-hidden shrink-0" />
              </div>
              <div className="relative leading-[24px]">
                Available for new projects
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px]">
              <div className="rounded-lg flex flex-row items-center justify-center p-1.5">
                <a href="https://www.behance.net/rishabhdidwania" target="_blank">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/Behance.png"
                  />
                </a>
              </div>
              <div className="rounded-lg flex flex-row items-center justify-center p-1.5">
                <a href="https://www.linkedin.com/in/rishabh-didwania/" target="_blank">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/linkedin.svg"
                  />
                </a>
              </div>
              <div className="rounded-lg flex flex-row items-center justify-center p-1.5">
                <a href="https://www.figma.com/@rishabhdidwania" target="_blank">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon-4.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mq1050:w-full flex flex-row items-center justify-center py-0.5 px-0 box-border min-w-[384px] max-w-full mq450:min-w-full">
          <div className="h-[360px] w-80 relative">
            <div className="absolute top-[40px] left-[40px] bg-gray-200 box-border w-[280px] h-80 overflow-hidden border-[8px] border-solid border-gray-default" />
            <img
              className="absolute top-[0px] left-[0px] w-[280px] h-80 overflow-hidden object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/pic@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
