import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Comments } from "../Comments/Comments";
import { AddComment } from "../AddComment/AddComment";
import { getComment } from "../../../../Core/Services/api/course/comment/getComment/getComment";
import { ReplayComment } from "../ReplayComment";

const CourseComments = ({ id }) => {
  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState([]);
  const [emotion, setEmotion] = useState();
  const [replay, setReplay] = useState(false);
  const [replayedCommentId, setReplayedCommentId] = useState();
  const token = useSelector((state) => state.token.token);

  const getCourseComment = async () => {
    const result = await getComment(`/Course/GetCourseCommnets/${id}`);
    setComment(result);
  };
  useEffect(() => {
    getCourseComment();
  }, [emotion]);

  return (
    <div className=" w-full py-[30px] flex flex-col mb-[10px] relative">
      {replay && (
        <ReplayComment
          setReplay={setReplay}
          comment={comment}
          replayedCommentId={replayedCommentId}
          setEmotion={setEmotion}
          emotion={emotion}
        />
      )}
      <h2 className="text-center lg:text-2xl text-xl py-[20px] font-irSBold">
        نظرات
      </h2>
      {!token && (
        <p className="text-center lg:text-xl text-lg py-[20px] text-gray-800 font-irSans">
          .تنها کاربران سایت قادر به ثبت نظر هستند. برای ثبت نظر لازم است تا ثبت
          نام نمایید یا وارد شوید
        </p>
      )}
      <div className="w-full my-[50px] grid grid-col justify-items-end gap-12">
        <div className="w-fit h-[600px] overflow-scroll grid grid-col justify-items-end gap-12  pt-[50px]">
          {/* each comment */}
          {comment.map((el, index) => (
            <Comments
              {...el}
              key={index}
              setEmotion={setEmotion}
              setReplay={setReplay}
              setReplayedCommentId={setReplayedCommentId}
            />
          ))}
        </div>
        <button
          className=" lg:px-8 lg:py-4 md:px-6 md:py-3 px-4 py-2 text-xl bg-orange-400 m-auto rounded-[20px] cursor-pointer"
          onClick={() => setModal(!modal)}
        >
          {modal == true ? " بیخیال نظر دادن " : " نظر دادن"}
        </button>
        <div className="mx-auto transition-all">
          {modal == true && <AddComment id={id} />}
        </div>
      </div>
    </div>
  );
};

export { CourseComments };
