import React, { ChangeEvent } from "react";
import Search from "../Icon/Search";
import "./styles.css";

const InputSearch = ({
  onChange,
  name,
  value = '',
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value?: string | number | readonly string[] | undefined;
}) => {
  return (
    <div className="wrapper-search">
      <Search fill="gray" fontSize={"20px"} />
      <input
        value={value}
        name={name}
        onChange={onChange}
        placeholder="Buscar"
      />
    </div>
  );
};

export default InputSearch;
