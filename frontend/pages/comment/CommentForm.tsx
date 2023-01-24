import { ChangeEvent, FormEvent, useState } from "react";

import { useCreateComment } from "../../hooks/query/comment";

const CommentForm = () => {
  const [comment, setComment] = useState<{
    writer?: string;
    content: string;
  }>({
    content: "",
  });

  const setCommentWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setComment((current) => ({ ...current, writer: e.target.value }));
  };

  const setCommentContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment((current) => ({ ...current, content: e.target.value }));
  };

  const clearCommentContent = () => {
    setComment({ writer: "", content: "" });
  };

  const mutation = useCreateComment(clearCommentContent);

  const submitComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ ...comment });
  };

  return (
    <form
      className="flex flex-col gap-y-2 p-3 bg-gray-100"
      onSubmit={submitComment}
    >
      <fieldset className="flex flex-col gap-y-1">
        <label className="flex items-center gap-x-1">
          <strong>작성자</strong>
          <span>(익명으로 남길 수도 있어요!)</span>
        </label>
        <input
          type="text"
          className="p-2 bg-transparent border border-navy-dark rounded-lg placeholder:text-500"
          placeholder="댓글을 쓰는 당신의 이름은 무엇인가요?"
          value={comment.writer || ""}
          onChange={setCommentWriter}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-x-1">
        <label className="flex items-center gap-x-1">
          <strong>방명록</strong>
          <span>(어떤 내용이든 좋아요 :D)</span>
        </label>
        <textarea
          className="p-2 bg-transparent border border-navy-dark rounded-lg placeholder:text-500"
          placeholder="방명록을 남겨주세요 :) 응원은 큰 힘이 됩니다!"
          value={comment.content}
          onChange={setCommentContent}
        />
      </fieldset>

      <button
        type="submit"
        className="border border-navy-dark rounded-lg p-2 bg-navy text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-500"
        disabled={!comment.content}
      >
        작성완료
      </button>
    </form>
  );
};

export default CommentForm;
