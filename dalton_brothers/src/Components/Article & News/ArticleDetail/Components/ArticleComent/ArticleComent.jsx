import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Comments } from "../../../../Common/Comment/Comments/Comments";
import { AddComment } from "../../../../Common/Comment/AddComment/AddComment";
import { ArticleCommentData } from "../../../../../Core/Services/data/";
import { getComment } from "../../../../../Core/Services/api/course/comment/getComment/getComment";
import { ReplayArticleComment } from "../../../../Common/Comment/ReplayArticleComment";
import { ArticComments } from "../../../../Common/Comment/ArticleComments";
import { AddArticleComment } from "../../../../Common/Comment/AddArticleComment";

const ArticleComments = ({ id }) => {
  const [modal, setModal] = useState(false);
  const [ArticleComment, setArticleComment] = useState([]);
  const [ArticleEmotion, setArticleEmotion] = useState();
  const [ArticleReplay, setArticleReplay] = useState(false);
  const [ArticleReplayedCommentId, setArticleReplayedCommentId] = useState();
  const token = useSelector((state) => state.token.token);

  const getArticleComments = async () => {
    const result = await getComment(`/News/GetNewsComments?NewsId=${id}`);
    setArticleComment(result);
    //console.log(result);
  };
  useEffect(() => {
    getArticleComments();
  }, [ArticleEmotion]);

  return (
    <div className=" w-full py-[30px] flex flex-col mb-[100px]">
      {ArticleReplay && (
        <ReplayArticleComment
          setArticleReplay={setArticleReplay}
          ArticleComment={ArticleComment}
          ArticleReplayedCommentId={ArticleReplayedCommentId}
          setArticleEmotion={setArticleEmotion}
          ArticleEmotion={ArticleEmotion}
          newsId={newsId}
        />
      )}
      <h2 className="text-center lg:text-2xl text-xl py-[20px] font-irSBold">
        {" "}
        نظرات{" "}
      </h2>
      {!token && (
        <p className="text-center lg:text-xl text-lg py-[20px] text-gray-800 font-irSans">
          .تنها کاربران سایت قادر به ثبت نظر هستند. برای ثبت نظر لازم است تا ثبت
          نام نمایید یا وارد شوید
        </p>
      )}
      <div className="w-full my-[50px] grid grid-col justify-items-end gap-12 relative">
        {ArticleComment.length == 0 ? (
          <div className="flex font-irSans lg:text-2xl text-xl items-center justify-end text-gray-700 absolute xl:right-[39%] lg:right-[34%] md:right-[30%] sm:right-[25%] right-[21%] top-48">
            تاکنون کامنتی در این مورد ثبت نشده{" "}
          </div>
        ) : (
          ArticleComment.map((el, index) => (
            <ArticComments
              {...el}
              key={index}
              setArticleEmotion={setArticleEmotion}
              setArticleReplay={setArticleReplay}
              setArticleReplayedCommentId={setArticleReplayedCommentId}
            />
          ))
        )}

        <button
          className=" lg:px-8 lg:py-4 md:px-6 md:py-3 px-4 py-2 text-xl bg-orange-400 m-auto rounded-[20px] cursor-pointer"
          onClick={() => setModal(!modal)}
        >
          {modal == true ? " بیخیال نظر دادن " : " نظر دادن"}
        </button>
        <div className="mx-auto transition-all">
          {modal == true && <AddArticleComment newsId={id} />}
        </div>
      </div>
    </div>
  );
};

export { ArticleComments };
