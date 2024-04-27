const Column = () => {
  return (
    <div className="flex-1 rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl overflow-hidden flex flex-col items-center justify-start pt-12 px-12 pb-28 box-border gap-[24px] min-w-[374px] max-w-full text-left text-xl text-gray-900 font-body2-normal-all mq750:pt-[31px] mq750:px-6 mq750:pb-[73px] mq750:box-border mq750:min-w-full">
      <div className="self-stretch relative leading-[28px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base mq450:leading-[22px]">
        Adaye
      </div>
      <div className="self-stretch relative text-base leading-[24px] text-gray-600">
        <p className="m-0">CRAFTING WEBSITES THAT ELEVATE YOUR BRAND.</p>
        <p className="m-0">
          We transform your brand's vision into a reality, creating responsive
          websites that engage users and drive conversions and elevate your
          brand to achieve your business goals.
        </p>
        <p className="m-0">Request Demo.</p>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-start py-0 pr-12 pl-0 box-border gap-[8px] min-h-[64px] mq1050:pr-6 mq1050:box-border">
        <button className="cursor-pointer [border:none] py-1 px-5 bg-gray-200 rounded-xl flex flex-row items-center justify-center hover:bg-lightgray">
          <div className="relative text-sm leading-[20px] font-medium font-body2-normal-all text-gray-600 text-left inline-block min-w-[41px]">
            Figma
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-1 px-5 bg-gray-200 rounded-xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightgray">
          <div className="relative text-sm leading-[20px] font-medium font-body2-normal-all text-gray-600 text-left inline-block min-w-[96px]">
            User Interface
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-1 px-5 bg-gray-200 rounded-xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightgray">
          <div className="relative text-sm leading-[20px] font-medium font-body2-normal-all text-gray-600 text-left">
            User Centric Design
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-1 px-5 bg-gray-200 rounded-xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightgray">
          <div className="relative text-sm leading-[20px] font-medium font-body2-normal-all text-gray-600 text-left inline-block min-w-[110px]">
            User Experience
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-1 px-5 bg-gray-200 rounded-xl flex flex-row items-center justify-center hover:bg-lightgray">
          <div className="relative text-sm leading-[20px] font-medium font-body2-normal-all text-gray-600 text-left inline-block min-w-[79px]">
            Tailwindcss
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-1 px-5 bg-gray-200 rounded-xl flex flex-row items-center justify-center hover:bg-lightgray">
          <div className="relative text-sm leading-[20px] font-medium font-body2-normal-all text-gray-600 text-left inline-block min-w-[39px]">
            React
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-1 px-5 bg-gray-200 rounded-xl flex flex-row items-center justify-center hover:bg-lightgray">
          <div className="relative text-sm leading-[20px] font-medium font-body2-normal-all text-gray-600 text-left inline-block min-w-[20px]">
            Git
          </div>
        </button>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start">
        <div className="rounded-lg flex flex-row items-center justify-center p-1.5">
          <input
            className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export default Column;
