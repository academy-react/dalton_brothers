import React, { useState } from "react";

import style from "./Filter.Module.css";
import { useAppContext } from "../../../Common/LayOut";

const FilterMasters = ({ id, master }) => {
  const [i, setI] = useState(0);
  const { setBahr, setNaz, setMehdi, setMohesen, setAll } = useAppContext();

  const handleMasterFilter = () => {
    if (i === 0) {
      if (master === "استاد محمد بحرالعلوم") {
        setBahr(master);
      }
      if (master === "استاد حامد نظری") {
        setNaz(master);
      }
      if (master === "استاد مهدی اصغری") {
        setMehdi(master);
      }
      if (master === "استاد محسن اسفندیاری") {
        setMohesen(master);
      }

      setAll(false);
      setI(1);
    } else {
      if (master === "استاد محمد بحرالعلوم") {
        setBahr("");
      }
      if (master === "استاد حامد نظری") {
        setNaz("");
      }
      if (master === "استاد مهدی اصغری") {
        setMehdi("");
      }
      if (master === "استاد محسن اسفندیاری") {
        setMohesen("");
      }
      setAll(true);
      setI(0);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        name="master"
        id={`master${id}`}
        onChange={() => handleMasterFilter()}
        className={`hidden ${style.masterInp}`}
      />
      <label
        htmlFor={`master${id}`}
        className={`w-[175px] h-[175px] flex items-end pb-[10px] ${style.masterLabel}`}
      >
        <h1 className="mx-auto">{master}</h1>
      </label>
    </>
  );
};

export { FilterMasters };
