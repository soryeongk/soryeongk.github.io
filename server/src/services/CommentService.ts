import { CommentCreateDto } from "../interfaces/comment/CommentCreateDto";
import { CommentResponseDto } from "../interfaces/comment/CommentResponseDto";
import Comment from "../models/Comment";

const createComment = async (commentCreateDto: CommentCreateDto) => {
  try {
    const comment = new Comment({
      content: commentCreateDto.content,
      writer: commentCreateDto.writer,
    })

    await comment.save();

    const data = {
      _id: comment._id
    };

    return data;
  } catch (error) {
    throw error;
  }
};

const getComments = async () => {
  try {
    const comments: CommentResponseDto[] = await Comment.find();
    
    return comments;
  } catch (error) {
    throw error
  }
};

const deleteComment = async (commentId: string) => {
  try {
    await Comment.findByIdAndDelete(commentId);
  } catch (error) {
    throw error;
  }
};

export default {
  createComment,
  getComments,
  deleteComment
}