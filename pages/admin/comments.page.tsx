import Layout from "../../components/Layout";
import SectionTitle from "../../components/SectionTitle";
import CloseIcon from "../../components/icons/CloseIcon";
import {
  useDeleteCommentMutation,
  useReadComments,
} from "../../hooks/query/comment";

export default function AdminCommentPage() {
  const { data, isLoading, isError } = useReadComments();
  const deleteCommentMutation = useDeleteCommentMutation();

  const clickDeleteComment = (commentId: string) => {
    deleteCommentMutation.mutate(commentId);
  };

  if (isLoading) {
    return <div>댓글 목록을 불러오는 중이에요!</div>;
  }

  if (!data || isError) {
    return <div>댓글 목록을 불러오는데 실패했어요ㅠ</div>;
  }
  return (
    <Layout>
      <div className="flex flex-col gap-y-1 bg-gray-100 ">
        <SectionTitle title="관리자모드-방명록" />
        <ul className="flex flex-col-reverse gap-y-[1px] bg-transparent">
          {data.comments.map((comment) => (
            <li
              key={comment._id}
              className="relative flex flex-col gap-y-1 py-5 px-3 bg-gray-100"
            >
              <div className="flex items-center p-1">
                <strong>📌 {comment.writer || "익명의 방문자"}</strong>
                <span>님이 남긴 방명록</span>
              </div>
              <p className="border border-blue-dark rounded-lg p-2">
                {comment.content}
              </p>
              <span className="p-1 text-gray-400">
                {new Date(comment.createdAt).toDateString()}
              </span>

              <button
                aria-label="delete-button"
                type="button"
                className="absolute right-4 top-4"
                onClick={() => clickDeleteComment(comment._id)}
              >
                <CloseIcon />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
