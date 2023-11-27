import React, { Children, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../../Common/buttons";
import { useDispatch, useSelector } from "react-redux";
import { onTokenChange } from "../../../../../Redux/token";
import {
  getItem,
  removeItem,
  setItem,
} from "../../../../../Core/Services/common/storage.services";

import {
  IconArrowNarrowLeft,
  IconHome,
  IconChevronLeft,
  IconPencil,
  IconClipboardText,
  IconList,
} from "@tabler/icons-react";

import panelHomeIcon from "../../../../../assets/Images/panel/panelHome.png";
import panelEditIcon from "../../../../../assets/Images/panel/paneledit.png";
import panelCourseIcon from "../../../../../assets/Images/panel/panelCourse.png";
import panelListIcon from "../../../../../assets/Images/panel/panellist.png";
import navIcon from "../../../../../assets/Images/panel/navIcon.png";
import leaveIcon from "../../../../../assets/Images/panel/leave.png";

import panelHomeIconSel from "../../../../../assets/Images/panel/panelhomeSel.png";
import panelEditIconSel from "../../../../../assets/Images/panel/paneleditSel.png";
import panelCourseIconSel from "../../../../../assets/Images/panel/panelCourseSel.png";
import panelListIconSel from "../../../../../assets/Images/panel/panellistSel.png";

const PanelNavigation = () => {
  const [panelList, setPanelList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goTo = (link) => {
    navigate(link);
  };

  const GetPanelName = () => {
    if (
      location.pathname === "/panel" ||
      location.pathname === "/panel/EditProfile" ||
      location.pathname === "/panel/PanelCoursesList" ||
      location.pathname === "/panel/PanelCourses"
    ) {
      setPanelList(studentPanelList);
    } else if (
      location.pathname === "/masterPanel" ||
      location.pathname === "/masterPanel/masterEditProfile" ||
      location.pathname === "/masterPanel/masterPanelCoursesList" ||
      location.pathname === "/masterPanel/CreateCourse"
    ) {
      setPanelList(masterPanelList);
    }
  };

  const studentPanelList = [
    {
      name: "داشبورد",
      href: "/panel",
      icon: panelHomeIcon,
      selectIcon: panelHomeIconSel,
    },
    {
      name: "ویرایش پروفایل",
      href: "/panel/EditProfile",
      icon: panelEditIcon,
      selectIcon: panelEditIconSel,
    },
    {
      name: " دوره های من ",
      href: "/panel/PanelCourses",
      icon: panelCourseIcon,
      selectIcon: panelCourseIconSel,
    },
    {
      name: " لیست دوره ها ",
      href: "/panel/PanelCoursesList",
      icon: panelListIcon,
      selectIcon: panelListIconSel,
    },
  ];
  const masterPanelList = [
    {
      name: "داشبورد",
      href: "/masterPanel",
      icon: panelHomeIcon,
      selectIcon: panelHomeIconSel,
    },
    {
      name: "ویرایش پروفایل",
      href: "/masterPanel/masterEditProfile",
      icon: panelEditIcon,
      selectIcon: panelEditIconSel,
    },
    {
      name: " دوره های من ",
      href: "/masterPanel/masterPanelCoursesList",
      icon: panelCourseIcon,
      selectIcon: panelCourseIconSel,
    },
    {
      name: "ساخت دوره ی جدید",
      href: "/masterPanel/CreateCourse",
      icon: panelListIcon,
      selectIcon: panelListIconSel,
    },
  ];
  useEffect(() => {
    GetPanelName();
  }, []);
  return (
    <>
      <div className=" 2xl:w-[260px] w-[213px] xl:h-[300px] lg:h-[280px] h-[230px]  bg-mode-50 rounded-[20px] 2xl:ml-0 lg:mt-0 mt-8 whitespace-nowrap py-10  ">
        <ul className=" w-full h-full rounded-[20px] flex flex-col justify-evenly gap-5 font-irSans ">
          {panelList.map((item, index) => (
            <li
              key={index}
              onClick={() => goTo(item.href)}
              className=" w-full lg:h-[49px] h-[40px]  flex cursor-pointer justify-evenly items-center "
            >
              <div
                className={
                  "h-full w-full flex items-center text-right justify-end lg:text-xl text-lg pt-1 pr-[15px] " +
                  (location.pathname == item.href
                    ? "text-yellow-500 "
                    : "text-gray-500")
                }
              >
                {item.name}
              </div>

              <img
                src={
                  location.pathname == item.href ? item.selectIcon : item.icon
                }
                className="w-8 h-8 opacity-80"
                alt=""
              />

              <div className="h-20 w-16 flex items-center justify-end">
                <img
                  src={navIcon}
                  className={
                    "w-4 h-6   " +
                    (location.pathname == item.href
                      ? "block lg:scale-100 scale-125"
                      : "hidden")
                  }
                  alt=""
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center gap-3 w-[240px] flex-row-reverse mt-5  ">
        <Button
          onClick={() => navigate("/")}
          className="  w-1/2 h-[50px] bg-mode-50 rounded-l-[20px] text-center lg:text-xl text-lg text-gray-500 font-irSans flex justify-center items-center "
          value={" بازگشت"}
        ></Button>

        <Button
          onClick={() => {
            navigate("/");
            removeItem("token");
            dispatch(onTokenChange(null));
          }}
          className="  w-1/2 h-[50px] bg-red-400  rounded-r-[20px]  text-center lg:text-xl text-lg text-gray-100 font-irSans flex justify-center items-center "
          value={" خروج "}
        ></Button>
      </div>
    </>
  );
};

export { PanelNavigation };
