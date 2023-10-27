import  { useEffect, useState } from "react";

// import { scroll } from "framer-motion/dom";
// import style from "../../Components/Common/LayOut/layOut.module.css"

const ScrollAnimation = () => {
  //   const progressWheel = document.querySelector(".progress");
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const UpdateScroll = () => {
      const correctProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if ( scrollHeight ){
        setCompletion(
            Number((correctProgress / scrollHeight).toFixed(2)) * 100
        )
      }
    };

    return () => {
      window.removeEventListener("scroll", UpdateScroll);
    };
  }, []);

  //   scroll((progress) => {
  //     progressWheel.style.strokeDasharray = `${progress}, 1`;
  //   });

  return completion;

  //      <div className={style.progressWheel}>
  //     <div className={style.bg}> </div>
  //     <div className={style.progress}> </div>
  //   </div>
};

export { ScrollAnimation };
