const FrameComponent1 = () => {
  return (
    <div className="w-[1216px] flex flex-row items-start justify-center max-w-full text-left text-9xl text-black font-body2-normal-all">
      <div className="shadow-[0px_4px_3px_rgba(0,_0,_0,_0.07),_0px_2px_2px_rgba(0,_0,_0,_0.06)] rounded-xl bg-gray-default overflow-hidden flex flex-row items-start justify-start p-8 box-border gap-[48px] max-w-full mq450:gap-[24px] mq1050:flex-wrap">
        <div className="flex flex-row items-start justify-start py-0 pr-[53px] pl-0 gap-[8px] font-lato">
          <button className="cursor-pointer [border:none] py-[5px] pr-1 pl-2 bg-gray-200 rounded-lg flex flex-row items-start justify-start hover:bg-darkslategray-200">
            <div className="h-10 w-10 relative rounded-lg bg-gray-200 hidden" />
            <div className="relative text-9xl font-faster-one text-mediumseagreen-100 text-left inline-block min-w-[28px] z-[1] mq450:text-3xl">
              W
            </div>
          </button>
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[97px] mq450:text-3xl">
              Wyvate
            </h2>
          </div>
        </div>
        <div className="w-96 flex flex-col items-start justify-start gap-[16px] max-w-full text-xl text-gray-900">
          <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
            UX Designer
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base text-gray-600">
            <div className="self-stretch relative leading-[24px]">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Supported Design the Wyvate Admin and Vendor Panel.</li>
              </ul>
            </div>
            <div className="self-stretch relative leading-[24px]">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>{`Supported making the QR and Tape Design for the brand. `}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative text-base leading-[24px] text-gray-700">
          Sept 2023 - Present
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
