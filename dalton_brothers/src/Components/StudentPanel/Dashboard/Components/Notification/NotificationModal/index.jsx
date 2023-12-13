import React from "react";
import { IconX } from "@tabler/icons-react";

const NotificationModal = ({ setnotifModal, notifModal }) => {
  return (
    <div className="xl:w-[500px] xl:h-[400px] w-[350px] h-[300px] bg-white border border-gray-300 shadow-[0_0_5px_4px] shadow-zinc-200 dark:shadow-[0_0_2px_3px] dark:shadow-mode-800 absolute top-24 left-5 rounded-[30px] z-20 flex flex-col items-center justify-start font-irSans">
      <IconX
        className="w-12 h-12 relative top-1 xl:left-[220px] left-[150px]"
        onClick={() => setnotifModal(!notifModal)}
      ></IconX>
      <h3 className="h-14 text-xl font-irSans xl:mt-[130px] mt-20"> پیامی وجود ندارد </h3>
    </div>
  );
};

export default NotificationModal;
