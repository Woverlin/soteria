import React from "react";
const PortfolioItem = ({ icon }: any) => {
  return (
    <div data-aos="fade-up" className="rounded-[15px] flex justify-center border border-[#1D2234]">
      <img src={icon} className='w-[126px]' />
    </div>
  );
};
export default PortfolioItem;
