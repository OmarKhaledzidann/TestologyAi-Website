type FlipTimerProps = {
  timeLeft: number;
};

const FlipDigit = ({ value }: { value: string }) => {
  return (
    <div
      className="
        relative 
        w-12 h-14           /* البوكس أصغر */
        rounded-md 
        shadow-lg 
        bg-[#111]
        flex items-center justify-center
        text-white 
        text-3xl            /* الرقم أكبر */
        font-bold
        leading-none        /* مهم عشان الرقم ما ينزلش */
      "
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 49%, transparent 50%, transparent 51%, black 52%, black 100%)",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 49%, transparent 50%, transparent 51%, black 52%, black 100%)",
      }}
    >
      {value}

      
    </div>
  );
};



const FlipTimer = ({ timeLeft }: FlipTimerProps) => {
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <div className="fixed right-6 top-28 z-50">
      <div className="flex items-center gap-1">
        <FlipDigit value={minutes[0]} />
        <FlipDigit value={minutes[1]} />

        <span className="mx-1 text-lg font-bold text-slate-700">:</span>

        <FlipDigit value={seconds[0]} />
        <FlipDigit value={seconds[1]} />
      </div>
    </div>
  );
};

export default FlipTimer;
