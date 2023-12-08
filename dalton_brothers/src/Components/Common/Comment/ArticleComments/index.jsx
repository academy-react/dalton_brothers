import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import user from "../../../../assets/Images/panel/user.png";
import {
  IconHeart,
  IconThumbUp,
  IconMessageCircle2,
  IconThumbDown,
} from "@tabler/icons-react";
import {
  addLike,
  deleteLike,
} from "../../../../Core/Services/api/course/addLike";
import { CommentReplays } from "../CommentReplays/index";
import { deleteArticleCommentLike } from "../../../../Core/Services/api/course/addSave";
import { CommentArtReplays } from "../../../CourseDetail/components/CommentArtReplays";

const ArticComments = ({
  className,
  autor,
  describe,
  title,
  likeCount,
  dissLikeCount,
  id,
  replyCount,
  setArticleEmotion,
  pictureAddress,
  setArticleReplay,
  setArticleReplayedCommentId,
  newsId,
  currentUserLikeId,
  currentUserIsLike,
  currentUserIsDissLike,
}) => {
  const [like, setLike] = useState(currentUserIsLike);
  const [DisLike, setDisLike] = useState(currentUserIsDissLike);

  const token = useSelector((state) => state.token.token);

  const handleLike = async () => {
    if (token) {
      if (like == false) {
        const userLike = await addLike(`/News/CommentLike/${id}`);
        console.log(userLike);
        setLike(true);
        setDisLike(false);
        setArticleEmotion(true);
      } else {
        const obj = {
          deleteEntityId: currentUserLikeId,
        };
        const userDeleteLike = await deleteArticleCommentLike(obj);
        console.log(userDeleteLike);
        setLike(false);
      }
    } else {
      toast.error("برای لایک باید در سایت ثبت نام کنید");
    }
  };

  const handleDisLike = async () => {
    if (token) {
      if (DisLike == false) {
        const userDisLike = await addLike(
          `/News/CommentLike/${id}?LikeType=false`
        );
        console.log(userDisLike);
        setDisLike(true);
        setLike(false);
        setArticleEmotion(true);
      } else {
        const obj = {
          deleteEntityId: currentUserLikeId,
        };
        const userDeleteLike = await deleteArticleCommentLike(obj);
        console.log(userDeleteLike);
        setDisLike(false);
      }
    } else {
      toast.error("برای دیس لایک باید در سایت ثبت نام کنید");
    }
  };

  useEffect(() => {
    // if (currentUserEmotion == "-") {
    //   setLike(false);
    //   setDisLike(false);
    // } else if (currentUserEmotion == "LIKED") {
    //   setLike(true);
    //   setDisLike(false);
    // } else {
    //   setLike(false);
    //   setDisLike(true);
    // }
  }, []);

  return (
    <div
      className={`xl:w-[1290px] lg:w-[1020px] md:w-[780px]  w-[410px] my-[20px] flex flex-wrap justify-end flex-row-reverse pr-[50px] ${className}`}
    >
      <div className="relative xl:w-[1000px] lg:w-[900px] md:w-[670px] w-[400px]  border border-gray-400 rounded-[40px] md:py-8 md:px-16 py-3">
        {/*--------------------------------------------------------------- user img --------------------------------------------------------------- */}
        <div className="absolute top-[-40%] right-[-5%] border-2 border-[#9ca3af] lg:w-[130px] lg:h-[130px] md:w-[60px] md:h-[90px] w-[65px] h-[65px] rounded-full bg-white">
          <img
            src={pictureAddress ? pictureAddress : user}
            className="w-full m-auto rounded-full text-center"
          ></img>
        </div>
        {/*--------------------------------------------------------------- author --------------------------------------------------------------- */}
        <span className="absolute top-[-10%] right-[10%]  text-gray-600 bg-white lg:text-[19px] md:text-xl text-lg text-center font-irSBold px-3">
          {autor}
        </span>
        {/*--------------------------------------------------------------- title --------------------------------------------------------------- */}
        <div className=" w-full text-right bg-white lg:text-[17px] text-lg text-gray-500 whitespace-nowrap font-irSBold pr-[20px] ">
          {title}
        </div>
        {/*--------------------------------------------------------------- describe --------------------------------------------------------------- */}
        <p className="text-gray-500 lg:text-xl text-md text-right md:pr-8 pr-3 font-BNa ">
          {describe}
        </p>
      </div>
      <div className="lg:w-[200px] md:w-[90px] w-[40px] m-auto lg:flex lg:flex-row lg:justify-evenly flex-col justify-evenly font-irSBold text-[#4b5563]">
        {/*--------------------------------------------------------------- disLike --------------------------------------------------------------- */}
        <div className="lg:w-[50px] md:w-[50px] w-[40px]">
          {DisLike ? (
            <>
              <IconThumbDown
                fill="#6c63ff"
                className="w-full h-[70%] text-[#272268] cursor-pointer"
                strokeWidth="1"
                onClick={() => handleDisLike()}
              ></IconThumbDown>
              <span className="ml-[19px]">{dissLikeCount}</span>
            </>
          ) : (
            <>
              <IconThumbDown
                className="w-full h-[70%] text-gray-800 cursor-pointer"
                strokeWidth="1"
                onClick={() => handleDisLike()}
              ></IconThumbDown>
              <span className="ml-[19px]">{dissLikeCount}</span>
            </>
          )}
        </div>
        {/*--------------------------------------------------------------- like --------------------------------------------------------------- */}
        <div className="lg:w-[50px] md:w-[50px] w-[40px]">
          {like ? (
            <>
              <IconThumbUp
                strokeWidth="1"
                fill="#6c63ff"
                className="w-full h-[70%] text-[#272268] cursor-pointer"
                onClick={() => handleLike()}
              />
              <span className="ml-[19px]">{likeCount}</span>
            </>
          ) : (
            <>
              <IconThumbUp
                strokeWidth="1"
                className="w-full h-[70%] text-gray-800 cursor-pointer"
                onClick={() => handleLike()}
              />
              <span className="ml-[19px]">{likeCount}</span>
            </>
          )}
        </div>
        {/*--------------------------------------------------------------- comment --------------------------------------------------------------- */}
        <div className="lg:w-[50px] lg:h-full md:w-[50px] md:h-[50px] w-[40px] h-[40px]">
          <IconMessageCircle2
            strokeWidth="1"
            className="w-full h-[70%] text-gray-800 cursor-pointer"
            onClick={() => {
              setArticleReplay(true);
              setArticleReplayedCommentId(id);
            }}
          />
          <span className="ml-[17px]">{replyCount}</span>
        </div>
      </div>
      {replyCount > 0 && <CommentArtReplays id={id} newsId={newsId} />}
    </div>
  );
};

export { ArticComments };
