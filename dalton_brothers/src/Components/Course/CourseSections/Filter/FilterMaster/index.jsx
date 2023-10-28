import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  onBahChange,
  onNazChange,
  onAsgChange,
  onEsfChange,
  onMasterElseChange,
} from "../../../../../Redux/Filter/masterFilter";

import style from "../Filter.module.css";

const FilterMaster = () => {
  const store = useSelector((state) => state.masterFilter);
  const dispatch = useDispatch();

  // ------------------------------------------------------------ handle filter for ostad bahr ------------------------------------------------------------
  const handleBah = () => {
    if (store.bah === "") {
      dispatch(onBahChange("استاد محمد بحرالعلوم"));
      dispatch(onMasterElseChange(false));
      return;
    }
    if (
      store.bah === "استاد محمد بحرالعلوم" &&
      store.naz === "" &&
      store.asg === "" &&
      store.esf === ""
    ) {
      dispatch(onMasterElseChange(true));
    }

    dispatch(onBahChange(""));
  };

  // ------------------------------------------------------------ handle filter for ostad nazary ------------------------------------------------------------
  const handleNaz = () => {
    if (store.naz === "") {
      dispatch(onNazChange("استاد حامد نظری"));
      dispatch(onMasterElseChange(false));
      return;
    }
    if (
      store.bah === "" &&
      store.naz === "استاد حامد نظری" &&
      store.asg === "" &&
      store.esf === ""
    ) {
      dispatch(onMasterElseChange(true));
    }
    dispatch(onNazChange(""));
  };

  // ------------------------------------------------------------ handle filter for ostad asghari ------------------------------------------------------------
  const handleAsg = () => {
    if (store.asg === "") {
      dispatch(onAsgChange("استاد مهدی اصغری"));
      dispatch(onMasterElseChange(false));
      return;
    }
    if (
      store.bah === "" &&
      store.naz === "" &&
      store.asg === "استاد مهدی اصغری" &&
      store.esf === ""
    ) {
      dispatch(onMasterElseChange(true));
    }
    dispatch(onAsgChange(""));
  };

  // ------------------------------------------------------------ handle filter for ostad esfandiary ------------------------------------------------------------
  const handleEsf = () => {
    if (store.esf === "") {
      dispatch(onEsfChange("استاد محسن اسفندیاری"));
      dispatch(onMasterElseChange(false));
      return;
    }
    if (
      store.bah === "" &&
      store.naz === "" &&
      store.asg === "" &&
      store.esf === "استاد محسن اسفندیاری"
    ) {
      dispatch(onMasterElseChange(true));
    }
    dispatch(onEsfChange(""));
  };

  return (
    <>
      {/*------------------------------------------------------------ ostad bahr ------------------------------------------------------------*/}
      <input
        type="checkbox"
        name="master"
        id={`masterBah`}
        onClick={handleBah}
        className={`hidden ${style.masterInp}`}
      />
      <label
        htmlFor={`masterBah`}
        className={`w-[175px] h-[175px] flex items-end pb-[10px] border-[5px] ${style.masterLabel}`}
      >
        <h1 className="mx-auto">استاد بحرالعلوم</h1>
      </label>
      {/*------------------------------------------------------------ ostad nazary ------------------------------------------------------------*/}
      <input
        type="checkbox"
        name="master"
        id={`masterNaz`}
        onClick={handleNaz}
        className={`hidden ${style.masterInp}`}
      />
      <label
        htmlFor={`masterNaz`}
        className={`w-[175px] h-[175px] flex items-end pb-[10px] border-[5px] ${style.masterLabel}`}
      >
        <h1 className="mx-auto">استاد نظری</h1>
      </label>
      {/*------------------------------------------------------------ ostad asghary ------------------------------------------------------------*/}
      <input
        type="checkbox"
        name="master"
        id={`masterAsg`}
        onClick={handleAsg}
        className={`hidden ${style.masterInp}`}
      />
      <label
        htmlFor={`masterAsg`}
        className={`w-[175px] h-[175px] flex items-end pb-[10px] border-[5px] ${style.masterLabel}`}
      >
        <h1 className="mx-auto">استاد اصغری</h1>
      </label>
      {/*------------------------------------------------------------ ostad esfandiary ------------------------------------------------------------*/}
      <input
        type="checkbox"
        name="master"
        id={`masterEsf`}
        onClick={handleEsf}
        className={`hidden ${style.masterInp}`}
      />
      <label
        htmlFor={`masterEsf`}
        className={`w-[175px] h-[175px] flex items-end pb-[10px] border-[5px] ${style.masterLabel}`}
      >
        <h1 className="mx-auto">استاد اسفندیاری</h1>
      </label>
    </>
  );
};

export { FilterMaster };
