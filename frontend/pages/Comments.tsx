import { useQuery, useMutation, useQueryClient } from "react-query";

import { getComments, deleteComment } from "../axios/comments";
import { QUERY_KEY } from "../axios/types/comment";
import { CloseWithCircleIcon } from "../public/images/icons";

const Comments = () => {
  const { data, isLoading, isError } = useQuery(
    QUERY_KEY.Comments,
    getComments
  );
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteComment, {
    onSuccess() {
      queryClient.invalidateQueries(QUERY_KEY.Comments);
    },
  });

  const clickDeleteComment = (commentId: string) => {
    mutation.mutate(commentId);
  };

  if (isLoading) {
    return <div>댓글 목록을 불러오는 중이에요!</div>;
  }

  if (isError) {
    return <div>댓글 목록을 불러오는데 실패했어요ㅠ</div>;
  }

  return (
    <ul className="flex flex-col-reverse gap-y-[1px] bg-transparent">
      {data?.comments.map((comment) => (
        <li
          key={comment._id}
          className="relative flex flex-col gap-y-1 py-5 px-3 bg-white-dark"
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
          <div
            className="absolute right-4 top-4"
            onClick={() => clickDeleteComment(comment._id)}
          >
            <CloseWithCircleIcon />
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Comments;
