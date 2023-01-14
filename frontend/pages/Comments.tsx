const Comments = () => {
  const data = {
    comments: [
      {
        _id: "id1",
        writer: undefined,
        content: "댓글내용",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: "id2",
        writer: "작성자",
        content: "댓글내용2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  };

  return (
    <ul className="flex flex-col-reverse p-2 gap-y-4">
      {data?.comments.map((comment) => (
        <li key={comment._id} className="flex flex-col gap-y-1">
          {comment.writer ? (
            <span>
              <strong>작성자:</strong>
              {comment.writer}
            </span>
          ) : (
            <span>익명의 댓글</span>
          )}
          <div className="flex flex-col gap-y-1">
            <span>댓글 내용</span>
            <p>{comment.content}</p>
          </div>
          {<span>작성일: {new Date(comment.createdAt).toDateString()}</span>}
        </li>
      ))}
    </ul>
  );
};
export default Comments;
