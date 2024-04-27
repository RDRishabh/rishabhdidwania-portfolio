import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Row3 from "./Row3";

const ContactMe = () => {
  const [copySuccess, setCopySuccess] = useState(null);

  const copyNumber = () => {
    navigator.clipboard.writeText("+91-7752865124");
    toast.success(`Phone Number copied to clipboard!`);
    console.log("Number Copied");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("rishabhdidwania22@gmail.com");
    toast.success(`E-MAIL copied to clipboard!`);
    console.log("E-MAIL Copied");
  };

  return (
    <section className="self-stretch bg-gray-default flex flex-col items-center justify-center py-24 px-20 box-border shrink-0 max-w-full text-center text-17xl text-gray-900 font-body2-normal-all mq750:py-[62px] mq750:px-10 mq750:box-border">
      <div className="self-stretch flex flex-col items-center justify-center py-0 px-8 box-border gap-[48px] max-w-full mq750:gap-[24px]">
        <Row3
          skills="Get in touch"
          subheading="What’s next? Feel free to reach out to me if you're looking for a designer or a developer, have a query, or simply want to connect."
          propAlignSelf="stretch"
          propWidth="unset"
          propMinWidth="82px"
        />
        <div className="w-[647px] flex flex-col items-center justify-center gap-[16px] max-w-full">
          <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[20px]">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon-8.svg"
            />
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[40px] font-semibold font-inherit inline-block min-w-[345px] whitespace-nowrap mq450:text-3xl mq450:leading-[24px] mq750:min-w-full mq1050:text-10xl mq1050:leading-[32px]">
              rishabhdidwania22@gmail.com
            </h1>
            <div className="rounded-lg flex flex-row items-center justify-center p-1.5">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-9.svg"
                onClick={copyEmail}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
          <div className="w-[401px] overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[20px] max-w-full">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon-10.svg"
            />
            <div className="flex-1 relative tracking-[-0.02em] leading-[40px] font-semibold inline-block min-w-[185px] whitespace-nowrap mq450:text-3xl mq450:leading-[24px] mq1050:text-10xl mq1050:leading-[32px]">
              +91 7752865124
            </div>
            <div className="rounded-lg flex flex-row items-center justify-center p-1.5">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-9.svg"
                onClick={copyNumber}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
        
        <div className="self-stretch rounded-xl flex flex-row items-center justify-center py-0 px-5 text-left text-base text-gray-600 mq450:gap-[32px]">
          <div className="w-[312px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[8px]">
            <div className="relative leading-[24px]">
              You may also find me on these platforms!
            </div>
            <div className="self-stretch flex flex-col items-center justify-center py-0 px-5">
              <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px]">
                <div className="rounded-lg flex flex-row items-center justify-center p-1.5">
                  
                  <a href="https://www.figma.com/@rishabhdidwania">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icon-4.svg"
                    />
                  </a>
                </div>
                <a href="https://www.linkedin.com/in/rishabh-didwania/">
                  <img
                    className="h-9 w-9 relative min-h-[36px]"
                    loading="lazy"
                    alt=""
                    src="/linkedin.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
