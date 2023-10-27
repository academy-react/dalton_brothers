import React, { Children } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../../Common/buttons";

import { IconArrowNarrowLeft, IconHome , IconChevronLeft,IconPencil , IconClipboardText, IconList } from "@tabler/icons-react";

const panelList = [{ name: "داشبورد", href: "/panel", icon: IconHome },
{name:'ویرایش پروفایل',href: "/panel/EditProfile", icon: IconPencil},
{name:' دوره های من ',href: "/panel/PanelCourses", icon: IconClipboardText},
{name:' لیست دوره ها ',href: "/panel/PanelCoursesList", icon:  IconList }];

const PanelNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (link) => {
    navigate(link);
  };
  return (
    <>
      <div className=" 2xl:w-[260px] w-[213px] xl:h-[300px] lg:h-[280px] h-[230px]  border border-gray-400 rounded-[20px] 2xl:ml-0 lg:mt-0 mt-8 whitespace-nowrap ">
        <ul className=" w-full h-full rounded-[20px] flex flex-col justify-evenly ">
          {panelList.map((item, index) => (
            <li
            key={index}
              onClick={()=>goTo(item.href)}
              className=" w-full lg:h-[49px] h-[40px] lg:mt-5 mt-2 flex cursor-pointer justify-evenly items-center"
            >
            <div className={"h-full w-full flex items-center text-right justify-end lg:text-xl text-lg pt-1 pr-[6px] " +(location.pathname == item.href ? "text-yellow-500 ":'text-gray-500') }>{item.name}</div>
            <item.icon  className={"lg:h-12 lg:w-12 w-10 h-10 "+(location.pathname == item.href ? "text-yellow-500 w-12 h-12":'text-gray-500')} />
            <div className="h-20 w-20 flex items-center justify-center">
              <IconChevronLeft fill="rgb(234,179,8)" className={"lg:h-16 lg:w-16 w-12 h-12 text-white "+(location.pathname == item.href ? "block lg:scale-100 scale-125":'hidden')}  />
            </div>
            </li>
          ))}
          {/* <li
            onClick={goToDashboard}
            className=" w-full h-[50px] mt-6 flex flex-row-reverse cursor-pointer"
          >
            <div className=" h-full w-12 ml-2">
              {location.pathname === "/panel" && (
                <img
                  src={select}
                  alt=""
                  className="w-[40px] h-[60px] relative bottom-2 "
                ></img>
              )}
            </div>
            <div className=" h-full w-20">
              {location.pathname === "/panel" ? (
                <img src={homeSelect} alt="" className="w-[80%] h-[80%] "></img>
              ) : (
                <img src={home} alt="" className="w-[80%] h-[80%] "></img>
              )}
            </div>
            <div className=" h-full w-full text-right text-xl pt-1 pr-[6px] text-[#fcbf49]">
              {" "}
              داشبورد{" "}
            </div>
          </li> */}
          {/* <li onClick={goToEditProfile} className=" w-full h-[50px] flex flex-row-reverse cursor-pointer">
            <div className=" h-full w-12 ml-2">
              {location.pathname === "/panel/EditProfile" && (
                <img
                  src={select}
                  alt=""
                  className="w-[40px] h-[60px] relative bottom-2 "
                ></img>
              )}
            </div>
            <div className=" h-full w-20">
            {location.pathname === "/panel/EditProfile" ? (
                <img src={editSelect} alt="" className="w-[80%] h-[80%] "></img>
              ) : (
                <img src={edit} alt="" className="w-[80%] h-[80%] "></img>
              )}
            </div>
            <div className=" h-full w-full text-right text-xl pt-1 pr-[6px]">
              {" "}
              ویرایش پروفایل{" "}
            </div>
          </li>
          <li onClick={goToPanelCourses} className=" w-full h-[50px] flex flex-row-reverse cursor-pointer">
            <div className=" h-full w-12 ml-2">
              {location.pathname === "/panel/PanelCourses" && (
                <img
                  src={select}
                  alt=""
                  className="w-[40px] h-[60px] relative bottom-2 "
                ></img>
              )}
            </div>
            <div className=" h-full w-20">
            {location.pathname === "/panel/PanelCourses" ? (
                <img src={noteSelect} alt="" className="w-[80%] h-[80%] "></img>
              ) : (
                <img src={note} alt="" className="w-[80%] h-[80%] "></img>
              )}
            </div>
            <div className=" h-full w-full text-right text-xl items-center pt-1 pr-[6px]">
              {" "}
              دوره های من{" "}
            </div>
          </li>
          <li onClick={goToPanelCoursesList} className=" w-full h-[50px] flex flex-row-reverse cursor-pointer">
            <div className=" h-full w-12 ml-2">
              {location.pathname === "/panel/PanelCoursesList" && (
                <img
                  src={select}
                  alt=""
                  className="w-[40px] h-[60px] relative bottom-2 "
                ></img>
              )}
            </div>
            <div className=" h-full w-20">
            {location.pathname === "/panel/PanelCoursesList" ? (
                <img src={listSelect} alt="" className="w-[80%] h-[80%] "></img>
              ) : (
                <img src={list} alt="" className="w-[80%] h-[80%] "></img>
              )}
            </div>
            <div className=" h-full w-full text-right text-xl pt-1 pr-[6px]">
              {" "}
              لیست دوره ها{" "}
            </div>
          </li> */}
        </ul>
      </div>
      <Button 
       path={"./"}
       className="  w-[220px] h-[50px] border border-gray-400 rounded-[20px] text-center lg:text-xl text-lg text-gray-800 "
       value={" خروج "}
       >
        <IconArrowNarrowLeft
          strokeWidth="1"
          className="w-[80px] h-[50px] relative -top-9 right-10"
        />
      </Button>
    </>
  );
};

export { PanelNavigation };
