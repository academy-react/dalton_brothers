import React, { useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import "aos/dist/aos.css";
import AOS from "aos";

const NotificationModal = ({ setnotifModal, notifModal }) => {


  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration in milliseconds
      offset: 400, // Offset (in pixels) from the original trigger point
      easing: "ease", // Animation easing
      // Other options...
    });
  }, []);


  return (
    <div className="xl:w-[500px] xl:h-[400px] w-[350px] h-[300px] bg-white dark:bg-mode-900 dark:border-none border border-gray-300 shadow-[0_0_5px_4px] shadow-zinc-200 dark:shadow-[0_0_2px_3px] dark:shadow-mode-800 absolute top-24 left-5 rounded-[30px] z-20 flex flex-col items-center justify-start font-irSans " data-aos="fade-up">
      <IconX
        className="w-12 h-12 relative top-1 xl:left-[220px] left-[150px] dark:text-mode-50 cursor-pointer "
        onClick={() => setnotifModal(!notifModal)}
      ></IconX>
      <h3 className="h-14 text-xl font-irSans xl:mt-[130px] mt-20 dark:text-mode-50"> پیامی وجود ندارد </h3>
    </div>
  );
};

export default NotificationModal;
