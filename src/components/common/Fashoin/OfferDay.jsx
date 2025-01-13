import Countdown from "react-countdown";

const OfferDay = () => {
  const endDate = new Date("2025-01-31T23:59:59");

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <p className="text-lg font-bold text-red-500">Offer expired!</p>;
    } else {
      return (
        <div className="flex gap-4 text-center">
          {/* Days */}
          <div className="flex flex-col rounded items-center shadow-md h-[80px]">
            <span className="text-[26px] font-bold text-white bg-primary rounded h-[70px] flex items-center justify-center w-[60px]">
              {days}
            </span>
            <span className="text-[14px] font-normal text-textPrimary bg-white rounded p-1 w-full">
              Days
            </span>
          </div>
          {/* Hours */}
          <div className="flex flex-col rounded items-center shadow-md h-[80px]">
            <span className="text-[26px] font-bold text-white bg-primary rounded h-[70px] flex items-center justify-center w-[60px]">
              {hours}
            </span>
            <span className="text-[14px] font-normal text-textPrimary bg-white rounded p-1 w-full">
              Hours
            </span>
          </div>
          {/* Minutes */}
          <div className="flex flex-col rounded items-center shadow-md h-[80px]">
            <span className="text-[26px] font-bold text-white bg-primary rounded h-[70px] flex items-center justify-center w-[60px]">
              {minutes}
            </span>
            <span className="text-[14px] font-normal text-textPrimary bg-white rounded p-1 w-full">
              Minutes
            </span>
          </div>
          {/* Seconds */}
          <div className="flex flex-col rounded items-center shadow-md h-[80px]">
            <span className="text-[26px] font-bold text-white bg-primary rounded h-[70px] flex items-center justify-center w-[60px]">
              {seconds}
            </span>
            <span className="text-[14px] font-normal text-textPrimary bg-white rounded p-1 w-full">
              Seconds
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="my-6">
      <Countdown date={endDate} renderer={renderer} />
    </div>
  );
};

export default OfferDay;
