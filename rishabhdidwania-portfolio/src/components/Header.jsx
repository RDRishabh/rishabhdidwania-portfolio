import {Link} from 'react-router-dom';
import About from './About';
import FrameComponent1 from './FrameComponent1';
import ContactMe from './ContactMe';

const Header = () => {
  return (
    <header className="self-stretch bg-gray-default box-border overflow-hidden flex flex-row items-start justify-start py-4 px-20 top-[0] z-[99] sticky max-w-full text-center text-11xl text-gray-900 font-body2-normal-all border-b-[1px] border-solid border-gray-100 mq750:pl-10 mq750:pr-10 mq750:box-border">
      <div className="flex-1 flex flex-row items-start justify-between py-0 px-8 box-border max-w-full gap-[20px]">
        <h2 className="cursor-pointer m-0 relative text-inherit tracking-[-0.02em] leading-[36px] font-bold font-inherit inline-block min-w-[98px] whitespace-nowrap">{`<RD />`}</h2>
        <div className="flex flex-row items-start justify-start gap-[23.8px] max-w-full text-left text-base text-gray-600">
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <div className=" cursor-pointer relative leading-[24px] font-medium inline-block min-w-[47px]"  onClick={() => {document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }}>
                About
              </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <div className=" cursor-pointer relative leading-[24px] font-medium inline-block min-w-[40px]" onClick={() => {document.getElementById('Work').scrollIntoView({ behavior: 'smooth' }); }}>
                Work
              </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <div className=" cursor-pointer relative leading-[24px] font-medium inline-block min-w-[62px]" onClick={() => {document.getElementById('contactme').scrollIntoView({ behavior: 'smooth' }); }}>
                ContactMe
              </div>
          </div>
          <div className="h-[30px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
            <div className="w-px h-[25px] relative box-border border-r-[1px] border-solid border-gray-500" />
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <button className="cursor-pointer [border:none] py-1.5 px-4 bg-gray-900 rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray-100">
              <a className="relative text-base leading-[24px] font-medium font-body2-normal-all text-gray-50 text-left inline-block min-w-[104px]" href={"../public/pdf/resume.pdf"} download={true}>
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
