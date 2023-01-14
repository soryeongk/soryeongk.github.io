const CommentForm = () => {
  return (
    <form className="flex flex-col gap-y-2 p-1">
      <fieldset className="flex flex-col gap-y-1">
        <label className="flex items-center gap-x-1">
          <strong>작성자</strong>
          <span>(익명으로 남길 수도 있어요!)</span>
        </label>
        <input className="bg-transparent border-2 border-navy-dark rounded-lg" />
      </fieldset>

      <fieldset className="flex flex-col gap-x-1">
        <label className="flex items-center gap-x-1">
          <strong>댓글</strong>
          <span>(어떤 내용이든 좋아요 :D)</span>
        </label>
        <textarea className="bg-transparent border-2 border-navy-dark rounded-lg" />
      </fieldset>

      <button
        type="submit"
        className="border-2 border-navy-dark rounded-lg p-2 bg-beige"
      >
        작성완료
      </button>
    </form>
  );
};

export default CommentForm;
