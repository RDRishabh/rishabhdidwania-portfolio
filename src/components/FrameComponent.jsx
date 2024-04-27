const FrameComponent = () => {
  return (
    <div className="w-[1216px] flex flex-row items-start justify-center max-w-full text-left text-xl text-gray-900 font-body2-normal-all">
      <div className="w-[896px] shadow-[0px_4px_3px_rgba(0,_0,_0,_0.07),_0px_2px_2px_rgba(0,_0,_0,_0.06)] rounded-xl bg-gray-default overflow-hidden shrink-0 flex flex-col items-start justify-start p-8 box-border max-w-full">
        <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start gap-[48px] max-w-full mq450:gap-[24px]">
          <button className="cursor-pointer [border:none] py-0 pr-1.5 pl-0 bg-[transparent] flex-1 flex flex-col items-start justify-start box-border min-w-[121px]">
            <img
              className="self-stretch h-12 relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/blacklogo-2@2x.png"
            />
          </button>
          <div className="w-96 flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
              UX Designer
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base text-gray-600">
              <div className="self-stretch relative leading-[24px]">
                <ul className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>Designed Website for Sense Original</li>
                </ul>
              </div>
              <div className="self-stretch relative leading-[24px]">
                <ul className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    Designed a SO|PSIT application that was a collaboration of
                    Sense Original with PSIT College.
                  </li>
                </ul>
              </div>
              <div className="self-stretch relative leading-[24px]">
                <ul className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>{`Designed the CRM Panel, along with its user flow, wireframing and prototyping. `}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start text-base text-gray-700">
            <div className="relative leading-[24px]">April 2023 - Oct 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
