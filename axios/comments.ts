import { CommentsResponse, CommentRequest } from "./types/comment";

import { baseInstance } from ".";

const getComments = async () => {
  const { data } = await baseInstance.get<CommentsResponse>("/comment");

  return data;
};

const postComment = async (comment: CommentRequest) => {
  return await baseInstance.post<CommentRequest>("/comment", comment);
};

const deleteComment = async (commentId: string) => {
  return await baseInstance.delete(`comment/${commentId}`);
};

export { getComments, postComment, deleteComment };
