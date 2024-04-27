const About = () => {
  return (
    <section id="about" className="self-stretch bg-gray-50 overflow-hidden flex flex-col items-center justify-start py-24 px-5 box-border gap-[48px] max-w-full shrink-0 text-left text-11xl text-gray-900 font-body2-normal-all mq450:pt-10 mq450:pb-10 mq450:box-border mq750:gap-[24px] mq1050:pt-[62px] mq1050:pb-[62px] mq1050:box-border">
      <div className="w-[1216px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-0 px-5">
          <button className="cursor-pointer [border:none] py-1 px-5 bg-gray-200 rounded-xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightgray">
            <div  className="relative text-sm leading-[20px] font-medium font-body2-normal-all text-gray-600 text-left inline-block min-w-[65px]">
              About me
            </div>
          </button>
        </div>
      </div>
      <div className="w-[1216px] overflow-hidden flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[48px_46px] max-w-full mq750:gap-[23px]">
        <div className="flex-1 overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[102px] box-border min-w-[444px] max-w-full mq750:pb-[66px] mq750:box-border mq750:min-w-full">
          <div className="h-[520px] w-[440px] relative max-w-full">
            <div className="absolute top-[40px] left-[0px] bg-gray-200 box-border w-[400px] h-[480px] overflow-hidden border-[8px] border-solid border-gray-50" />
            <img
              className="absolute top-[0px] left-[40px] w-[400px] h-[480px] overflow-hidden object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/pic-1@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[24px] min-w-[444px] max-w-full mq750:min-w-full">
          <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[36px] font-semibold font-inherit inline-block max-w-full mq450:text-lg mq450:leading-[22px] mq1050:text-5xl mq1050:leading-[29px]">
            Curious about me? Here you have it:
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base text-gray-600">
            <div className="self-stretch relative leading-[24px]">{`I'm Rishabh Didwania passionate, self-proclaimed designer who specializes in UX Designing and Web Development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.`}</div>
            <div className="self-stretch relative leading-[24px]">
              I have started my journey over a year back as a designer and a web
              developer in 2023, and since then, I've continued to grow and
              evolve as a designer and a developer, taking on new challenges and
              learning the latest technologies along the way.
            </div>
            <div className="self-stretch relative leading-[24px]">{`I am trying to learn and evolve everyday by taking up new challenges and learning new things on a day to day basis. I love learning about user psychology and make a valuable user experience for all type of users. `}</div>
            <div className="self-stretch relative leading-[24px]">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </div>
            <div className="relative leading-[24px]">
              Finally, some quick bits about me.
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq750:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[187px]">
                <div className="self-stretch relative leading-[24px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>B.Tech. in Computer Engineering</li>
                  </ul>
                </div>
                <div className="self-stretch relative leading-[24px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Freelancer</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[187px]">
                <div className="self-stretch relative leading-[24px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Tech Geek</li>
                  </ul>
                </div>
                <div className="self-stretch relative leading-[24px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>UX Designer</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="self-stretch relative leading-[24px]">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
