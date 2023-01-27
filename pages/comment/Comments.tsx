import React from "react";

// import CloseIcon from "../../components/icons/CloseIcon";
import { useReadComments } from "../../hooks/query/comment";

const Comments = () => {
  const { data } = useReadComments();
  // const deleteCommentMutation = useDeleteCommentMutation();

  // const clickDeleteComment = (commentId: string) => {
  //   deleteCommentMutation.mutate(commentId);
  // };

  // if (isLoading) {
  //   return <div>댓글 목록을 불러오는 중이에요!</div>;
  // }

  // if (!data || isError) {
  //   return <div>댓글 목록을 불러오는데 실패했어요ㅠ</div>;
  // }

  return (
    <ul className="flex flex-col-reverse gap-y-[1px] bg-transparent">
      {data?.comments.map((comment) => (
        <li
          key={comment._id}
          className="relative flex flex-col gap-y-1 py-5 px-3 bg-gray-100"
        >
          <div className="flex items-center p-1">
            <strong>{comment.writer || "익명의 방문자"}</strong>
            <span>님이 남긴 방명록</span>
          </div>
          <p className="border border-white p-2">{comment.content}</p>
          {
            <div className="flex items-center gap-x-1 p-1">
              <strong>작성일:</strong>
              <span>{new Date(comment.createdAt).toDateString()}</span>
            </div>
          }
          {/* <button
            aria-label="delete-button"
            type="button"
            className="absolute right-4 top-4"
            onClick={() => clickDeleteComment(comment._id)}
          >
            <CloseIcon />
          </button> */}
        </li>
      ))}
    </ul>
  );
};
export default Comments;
