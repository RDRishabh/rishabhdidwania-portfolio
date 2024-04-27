import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Row3 from "../components/Row3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Row2 from "../components/Row2";
import Row1 from "../components/Row1";
import Row from "../components/Row";
import ContactMe from "../components/ContactMe";

const HomeDesktopLight = () => {
  return (
    <div className="w-full relative bg-gray-default overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <section className="self-stretch bg-gray-50 flex flex-col items-center justify-start py-24 px-5 box-border gap-[48px] max-w-full shrink-0 mq450:pt-10 mq450:pb-10 mq450:box-border mq750:gap-[24px] mq1050:pt-[62px] mq1050:pb-[62px] mq1050:box-border">
        <Row3
          skills="Experience"
          subheading="Here is a quick summary of my most recent experiences:"
          propAlignSelf="unset"
          propWidth="1216px"
          propMinWidth="75px"
        />
        <FrameComponent1 />
        <FrameComponent />
      </section>
      <section id="Work" className="self-stretch bg-gray-default flex flex-col items-center justify-center py-24 px-20 box-border shrink-0 max-w-full lg:pt-[62px] lg:pb-[62px] lg:box-border mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq750:pl-10 mq750:pr-10 mq750:box-border mq1050:pt-10 mq1050:pb-10 mq1050:box-border">
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-8 box-border gap-[48px] max-w-full mq750:gap-[24px]">
          <Row3
            skills="Work"
            subheading="Some of the noteworthy projects I have built:"
            propAlignSelf="stretch"
            propWidth="unset"
            propMinWidth="35px"
          />
          <Row />
          <Row1 />
          <Row2 />

        </div>
      </section>
      <ContactMe />
      <footer className="self-stretch bg-gray-50 flex flex-col items-center justify-center py-6 px-20 box-border max-w-full shrink-0 text-left text-sm text-gray-600 font-body2-normal-all mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-8 box-border max-w-full mq450:gap-[16px] mq750:gap-[32px]">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-0 px-5 box-border max-w-full">
              <div className="overflow-hidden flex flex-row items-center justify-center gap-[5px] max-w-full">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-13.svg"
                />
                <div className="relative leading-[20px]">
                  <span>{`2024 | Designed and coded with `}</span>
                  <span className="text-crimson">❤</span>
                  <span>️️ by Rishabh Didwania</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeDesktopLight;
