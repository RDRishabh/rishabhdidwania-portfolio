import Row3 from "./Row3";

const Skills = () => {
  return (
    <section className="self-stretch bg-gray-default flex flex-col items-center justify-center py-24 px-20 shrink-0 text-center text-xl text-gray-600 font-body2-normal-all mq750:py-[62px] mq750:px-10 mq750:box-border">
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-8 gap-[48px] mq750:gap-[24px]">
        <Row3
          skills="Skills"
          subheading="The skills, tools and technologies I am really good at:"
        />
        <div className="self-stretch flex flex-col items-start justify-center gap-[48px] text-left text-lg mq750:gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[48px] flex-wrap">
            <div className=" flex flex-col items-center justify-center gap-[8px] min-w-[100px]">
              <img
                className="w-16 h-16 relative"
                loading="lazy"
                alt=""
                src="/iconjavscript.svg"
              />
              <div className="relative leading-[28px] inline-block min-w-[88px]" >
                Javascript
              </div>
            </div>
            <div className="h-[100px] flex flex-col items-center justify-center gap-[8px] min-w-[100px]">
              <img
                className="w-[64px] flex-1 relative max-h-full overflow-hidden"
                loading="lazy"
                alt=""
                src="/iconfigma.svg"
              />
              <div className="relative leading-[28px] inline-block min-w-[52px] ">
                Figma
              </div>
            </div>
            <div className="h-[100px] w-[64px] shrink-0 flex flex-col items-center justify-end gap-[8px] min-w-[100px]">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/iconreact.svg"
              />
              <div className="relative leading-[28px] inline-block min-w-[49px]">
                React
              </div>
            </div>
            <div className="h-[100px] flex flex-col items-center justify-center gap-[8px] min-w-[100px]">
              <img
                className="w-[64px] flex-1 relative max-h-full overflow-hidden"
                loading="lazy"
                alt=""
                src="/iconnodejs.svg"
              />
              <div className="relative leading-[28px] inline-block min-w-[65px]">
                Node.js
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center gap-[8px] min-w-[100px]">
              <img
                className="w-16 h-16 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/iconexpress.svg"
              />
              <div className="relative leading-[28px] inline-block min-w-[86px]">
                Express.js
              </div>
            </div>

            {/* Second set of images */}
            <div className=" flex flex-col items-center justify-center gap-[8px] min-w-[100px]">
              <img
                className="w-[64px] h-16 relative object-contain"
                loading="lazy"
                alt=""
                src="/iconpostgresql@2x.png"
              />
              <div className="relative leading-[28px] inline-block min-w-[102px]">
                PostgreSQL
              </div>
            </div>
            <div className="h-[100px] flex flex-col items-center justify-center gap-[8px] min-w-[100px]">
              <img
                className="w-[64px] flex-1 relative max-h-full overflow-hidden"
                alt=""
                src="/iconmongodb.svg"
              />
              <div className="relative leading-[28px] inline-block min-w-[84px]">
                MongoDB
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[8px] min-w-[100px]">
              <img
                className="w-16 h-16 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/iconsocket.svg"
              />
              <div className="relative leading-[28px] inline-block min-w-[79px]">
                Socket.io
              </div>
            </div>
            <div className="h-[100px] w-[64px] shrink-0 flex flex-col items-center justify-center gap-[8px] min-w-[100px]">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/icontailwindcss@2x.png"
              />
              <div className="relative leading-[28px] inline-block min-w-[99px]">
                Tailwindcss
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center gap-[8px] min-w-[100px]">
              <img
                className="w-16 h-16 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icongit.svg"
              />
              <div className="relative leading-[28px] inline-block min-w-[25px]">
                Git
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Skills;
