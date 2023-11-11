import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ArticleImage from "../../../../Assets/Images/article.png";
import ArticleWriter from "../../../../Assets/Images/articleWriter.png";
import likeCheck from "../../../../Assets/Images/likeCheck.png";
import like from "../../../../Assets/Images/like.png";
import comment from "../../../../Assets/Images/comment.png";
import bookmark from "../../../../Assets/Images/bookMark.png";
import bookmarkCheck from "../../../../Assets/Images/bookmarkCheck.png";

import { Button } from "../../../Common/buttons";
import { IconDots } from "@tabler/icons-react";

const Article = ({ miniDescribe, addUserFullName, title,id ,currentImageAddressTumb}) => {
  const [save, setSave] = useState(false)
  const [Like, setLike] = useState(false)

  const navigate = useNavigate()
   
  return (
    <div className="w-[350px] h-96 p-3 border rounded-lg flex flex-col mt-10">
      {/* image & 3 button start */}
      <div className="w-full h-1/2 rounded-t-lg flex justify-center flex-row-reverse">
        {/*img Container*/}
        <div className="w-full h-full rounded-[20px] overflow-hidden ">
          <img className="w-full h-full" src={currentImageAddressTumb} alt="" />
        </div>
      </div>
      {/* image & 3 button end */}

      {/* details & more info button start */}

      <div className=" w-full flex flex-col px-[5px] gap-5 rounded-b-lg mt-1 ">
        <span className="flex flex-row-reverse font-irSBold text-gray-800 ">
          {title}
        </span>
        <span className="flex flex-row-reverse text-neutral-500 font-irSans text-sm">
            {miniDescribe}
        </span>
        <div className="flex justify-start items-center flex-row-reverse gap-1 font-irSans text-neutral-500 text-sm">
          <img className="w-[20px]" src={ArticleWriter} alt="" />
          {addUserFullName}
        </div>

        {/* button & price start */}

        <div className="w-full h-1/2  rounded-b-lg flex justify-between items-center flex-row-reverse ">
          <div className=" flex flex-row justify-center gap-[20px] ">
            <div className="w-full h-1/3 flex justify-center items-center">
              { save?
               (<img className="w-[30px] cursor-pointer" src={bookmarkCheck} alt="" onClick={()=> setSave(!save)}/>)
               :(<img className="w-[30px] cursor-pointer  opacity-40" src={bookmark} alt="" onClick={()=> setSave(!save)}/>)
                }
              
            </div>
            <div className="w-full h-1/3 flex justify-center items-center">
            { Like?
               (<img className="w-[30px] cursor-pointer" src={likeCheck} alt="" onClick={()=> setLike(!Like)}/>)
               :(<img className="w-[30px] cursor-pointer  opacity-40" src={like} alt="" onClick={()=> setLike(!Like)}/>)
                }
            </div>
            <div className="w-full h-1/3 flex justify-center items-center">
              <img className="w-[30px]  opacity-40 cursor-pointer" src={comment} alt=""  onClick={()=> navigate(`/newsDetail/${id}`)}/>
            </div>
          </div>
          <Button value={"اطلاعات بیشتر"} className=" !px-[30px] py-[10px] bg-[#fcbf49] rounded-full flex items-center justify-center font-irSans" onClick={()=> navigate(`/newsDetail/${id}`)}>

              {/* <IconDots strokeWidth="2" className="w-full h-full text-black" /> */}
            
          </Button>
        </div>

        {/* button & price end */}
      </div>

      {/* details & more info button end */}
    </div>
  );
};

export { Article };
