import Column from "./Column";

const Row1 = () => {
  return (
    <div className="w-[1152px] shadow-[0px_4px_3px_rgba(0,_0,_0,_0.07),_0px_2px_2px_rgba(0,_0,_0,_0.06)] rounded-xl bg-gray-default overflow-hidden flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
      <Column />
      <div className="flex-1 rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-gray-50 box-border overflow-hidden flex flex-row items-center justify-center py-12 px-[47px] min-w-[374px] max-w-full border-r-[1px] border-solid border-gray-100 mq750:py-[31px] mq750:px-[23px] mq750:box-border mq750:min-w-full">
        <div className="h-96 flex-1 relative rounded-xl max-w-full flex items-center justify-center">
          <img
            className="h-full flex-1 overflow-hidden object-contain absolute left-[0px] top-[9px] w-full [transform:scale(1.047)]"
            loading="lazy"
            alt=""
            src="/picture@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Row1;
