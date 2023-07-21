import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "../styles/doubleRangeSlideBar.css";

const DoubleRangeSlideBar = () => {
  const [minValue, set_minValue] = useState(500);
  const [maxValue, set_maxValue] = useState(1500);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <>
      <div className="salary-slider">
        <MultiRangeSlider
          min="10"
          max="3500"
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
        />
      </div>
    </>
  );
};

export default DoubleRangeSlideBar;
