import Countdown from 'react-countdown';

const OfferDay = () => {
    const endDate = new Date("2025-12-31T23:59:59");


    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <p className="text-lg font-bold text-red-500">Offer expired!</p>;
      } else {
        return (
          <div className="flex gap-4  text-center">
            <div className="flex flex-col border-textSecondary p-2 border-[1px] rounded items-center">
              <span className="text-[26px] font-normal text-gray-800">{days}</span>
              <span className="text-sm font-light text-textPrimary">Days</span>
            </div>
            <div className="flex  border-textSecondary p-2 border-[1px] rounded flex-col items-center">
              <span className="text-[26px] font-normal text-gray-800">{hours}</span>
              <span className="text-sm font-light text-textPrimary">Hours</span>
            </div>
            <div className="flex flex-col  border-textSecondary p-2 border-[1px] rounded items-center">
              <span className="text-[26px] font-normal text-gray-800">{minutes}</span>
              <span className="text-sm font-light text-textPrimary">Minutes</span>
            </div>
            <div className="flex flex-col  border-textSecondary p-2 border-[1px] rounded items-center">
              <span className="text-[26px] font-normal text-gray-800">{seconds}</span>
              <span className="text-sm font-light text-textPrimary">Seconds</span>
            </div>
          </div>
        );
      }
    };
    
    return (
        <div>
            <Countdown date={endDate} renderer={renderer} />
        </div>
    );
};

export default OfferDay;