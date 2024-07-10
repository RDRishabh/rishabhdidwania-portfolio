const Experience = ({url, role, description1, description2, timeline}) => {
  return (
    <div className="w-[1216px] flex flex-row items-start justify-center max-w-full text-left text-xl text-gray-900 font-body2-normal-all">
      <div className="w-[896px] shadow-[0px_4px_3px_rgba(0,_0,_0,_0.07),_0px_2px_2px_rgba(0,_0,_0,_0.06)] rounded-xl bg-gray-default overflow-hidden shrink-0 flex flex-col items-start justify-start p-8 box-border max-w-full">
        <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center gap-[48px] max-w-full mq450:gap-[24px]">
          <span className="cursor-pointer [border:none] py-0 pr-1.5 pl-0 bg-[transparent] flex-1 flex flex-col items-start justify-start sm:items-center sm:justify-center box-border min-w-[121px]">
            <img
              className="h-12 relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src={`${url}`}
            />
          </span>
          <div className="w-96 flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
              {role}
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base text-gray-600">
              <div className="self-stretch relative leading-[24px]">
                <ul className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>{description1}</li>
                </ul>
              </div>
              <div className="self-stretch relative leading-[24px]">
                <ul className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    {description2}
                  </li>
                </ul>
              </div>
              {/* <div className="self-stretch relative leading-[24px]">
                <ul className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>{`Designed the CRM Panel, along with its user flow, wireframing and prototyping. `}</li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="flex flex-row items-start justify-start text-base text-gray-700">
            <div className="relative leading-[24px]">{timeline}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
