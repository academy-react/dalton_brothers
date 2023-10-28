import { useState, useEffect, useRef } from "react";

const RangeSlider = ({
  minVal,
  maxVal,
  setMinVal,
  setMaxVal,
  min,
  max,
  step,
  priceCap,
  className,
}) => {
  const progressRef = useRef(null);
  // const [minValue, setMinValue] = useState(minVal);
  // const [maxValue, setMaxValue] = useState(maxVal);

  const handleMin = (e) => {
    if (maxVal - minVal >= priceCap && maxVal <= max) {
      if (parseInt(e.target.value) > parseInt(maxVal)) {
      } else {
        setMinVal(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minVal) {
        setMinVal(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e) => {
    if (maxVal - minVal >= priceCap && maxVal <= max) {
      if (parseInt(e.target.value) < parseInt(minVal)) {
      } else {
        setMaxVal(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxVal) {
        setMaxVal(parseInt(e.target.value));
      }
    }
  };

  // useEffect(() => {
  //   progressRef.current.style.left = (minVal / max) * step + "%";
  //   progressRef.current.style.right = step - (maxVal / max) * step + "%";
  // }, [minVal, maxVal]);

  return (
    <>
      <div className={className}>
        <div className="my-2 mx-auto">
          <div className="flex justify-between rounded-md w-60 lg:w-48 2xl:w-60 mb-1">
            <p className="">بیشترین</p>
            <div className="w-max">
              <input
                onChange={(e) => setMaxVal(e.target.value)}
                type="text"
                value={maxVal}
                className="w-[100px] text-center rounded-md border border-gray-400 px-2 focus:outline-none focus:ring-1 focus:ring-blue-300 bg-mode-600"
              />
            </div>
          </div>
          <div className="flex justify-between rounded-md w-60 lg:w-48 2xl:w-60">
            <p className="">کمترین</p>
            <div className="w-max">
              <input
                onChange={(e) => setMinVal(e.target.value)}
                type="text"
                value={minVal}
                className="w-[100px] text-center rounded-md border border-gray-400 px-2 focus:outline-none focus:ring-1 focus:ring-blue-300 bg-mode-600"
              />
            </div>
          </div>
        </div>
        <div className="mb-4 my-4">
          <div className="relative h-2 rounded-lg bg-gray-300">
            <div className="h-2 bg-[#33466B] rounded" ref={progressRef}></div>
          </div>
          <div className="relative" style={{ direction: "ltr" }}>
            <input
              onChange={handleMax}
              type="range"
              value={maxVal}
              min={min}
              step={step}
              max={max}
              className="absolute -top-2 z-10 w-full h-1 bg-transparent appearance-none pointer-events-auto "
            />
            <input
              onChange={handleMin}
              type="range"
              value={minVal}
              min={min}
              step={step}
              max={max}
              className="absolute w-full -top-2 h-1 bg-transparent appearance-none pointer-events-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { RangeSlider };
