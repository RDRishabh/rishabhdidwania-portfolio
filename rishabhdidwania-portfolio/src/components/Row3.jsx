import { useMemo } from "react";

const Row3 = ({
  skills,
  subheading,
  propAlignSelf,
  propWidth,
  propMinWidth,
}) => {
  const rowStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const skillsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[16px] text-center text-xl text-gray-600 font-body2-normal-all"
      style={rowStyle}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-0 px-5">
        <button className="[border:none] py-1 px-5 bg-gray-200 rounded-xl flex flex-row items-center justify-center ">
          <div
            className="relative text-sm leading-[20px] font-medium font-body2-normal-all text-gray-600 text-left inline-block min-w-[35px]"
            style={skillsStyle}
          >
            {skills}
          </div>
        </button>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-0 px-5">
        <div className=" relative leading-[28px] inline-block mq450:text-base mq450:leading-[22px] mq750:max-w-full">
          {subheading}
        </div>
      </div>
    </div>
  );
};

export default Row3;
