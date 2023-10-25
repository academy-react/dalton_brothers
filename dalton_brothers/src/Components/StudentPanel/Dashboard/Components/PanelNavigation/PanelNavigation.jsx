import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../../Common/buttons";

import { IconArrowNarrowLeft, IconHome , IconChevronLeft,IconPencil , IconClipboardText, IconList } from "@tabler/icons-react";

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


const panelList = [{ name: "داشبورد", href: "/panel", icon :  panelHomeIcon , selectIcon :  panelHomeIconSel  },
{name:'ویرایش پروفایل',href: "/panel/EditProfile", icon: panelEditIcon , selectIcon : panelEditIconSel  } ,
{name:' دوره های من ',href: "/panel/PanelCourses", icon: panelCourseIcon , selectIcon :  panelCourseIconSel },
{name:' لیست دوره ها ',href: "/panel/PanelCoursesList", icon:  panelListIcon , selectIcon :  panelListIconSel  }];

const PanelNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (link) => {
    navigate(link);
  };
  return (
    <>
      <div className=" 2xl:w-[260px] w-[213px] xl:h-[300px] lg:h-[280px] h-[230px]  bg-[#F1F5F9] rounded-[20px] 2xl:ml-0 lg:mt-0 mt-8 whitespace-nowrap py-10  ">
        <ul className=" w-full h-full rounded-[20px] flex flex-col justify-evenly gap-5 font-irSans">
          {panelList.map((item, index) => (
            <li
            key={index}
              onClick={()=>goTo(item.href)}
              className=" w-full lg:h-[49px] h-[40px]  flex cursor-pointer justify-evenly items-center "
            >
            <div className={"h-full w-full flex items-center text-right justify-end lg:text-xl text-lg pt-1 pr-[6px] " +(location.pathname == item.href ? "text-yellow-500 ":'text-gray-500') }>{item.name}</div>
            {/* <item.icon  className={"lg:h-12 lg:w-12 w-10 h-10 "+(location.pathname == item.href ? "text-yellow-500 w-12 h-12":'text-gray-500')} /> */}
            <img  className={" w-8 h-8"+(location.pathname == item.href ? <img src={item.selectIcon}/> : <img src={item.icon }/>)}  alt="" />
            <div className="h-20 w-16 flex items-center justify-end">
              <img src={navIcon} className={"w-4 h-6  "+(location.pathname ==item.href ? "block lg:scale-100 scale-125":'hidden')} alt="" />
              {/* <IconChevronLeft fill="rgb(234,179,8)" className={"lg:h-16 lg:w-16 w-12 h-12 text-white "+(location.pathname == item.href ? "block lg:scale-100 scale-125":'hidden')}  /> */}
            </div>
            </li>
          ))}
   
        </ul>
      </div>
      <Button 
       path={"./"}
       style="  w-[260px] h-[50px] bg-[#F1F5F9]  rounded-[10px] text-center lg:text-xl text-lg text-gray-500 font-irSans "
       text={" خروج "}
       >
        {/* <img src={leaveIcon} alt="" /> */}
        {/* <IconArrowNarrowLeft
          strokeWidth="1"
          className="w-[80px] h-[50px]"
        /> */}
      </Button>
    </>
  );
};

export { PanelNavigation };
