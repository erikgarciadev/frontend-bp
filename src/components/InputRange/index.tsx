import React, { ChangeEvent } from "react";
import './styles.css'

const InputRange = ({
  min = 0,
  max = 100,
  name =' ',
  onChange,
  value,
}: {
  min?: number;
  max?: number;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[] | undefined;
}) => {
  return (
    <>
      <p>{min}</p>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type="range"
        min={min}
        max={max}
      />
      <p>{max}</p>
    </>
  );
};

export default InputRange;
