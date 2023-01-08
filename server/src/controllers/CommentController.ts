import { Request, Response } from "express";
import { CommentCreateDto } from "../interfaces/comment/CommentCreateDto";
import statusCode from "../modules/statusCode";
import responseMessage from "../modules/responseMessage";
import util from "../modules/util";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { CommentService } from "../services";
import { CommentResponseDto } from "../interfaces/comment/CommentResponseDto";

/**
 * @route POST /comment
 * @desc Create Comment
 * @access Public
 */
const createComment = async (req: Request, res: Response) => {
  const commentCreateDto: CommentCreateDto = req.body;

  try {
    const data: PostBaseResponseDto = await CommentService.createComment(commentCreateDto);

    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, responseMessage.CREATE_COMMENT_SUCCESS, data))
  } catch (error) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR))
  }
};

/**
 * @route READ /comment
 * @desc Read Comments
 * @access Public
 */
const getComments = async (_req: Request, res: Response) => {
  try {
    const data: CommentResponseDto[] = await CommentService.getComments();
    
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, responseMessage.CREATE_COMMENT_SUCCESS, data))
  } catch (error) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR))
  }
};

/**
 * @route DELETE /comment/:commentId
 * @desc Read Comments
 * @access Public
 */
const deleteComment = async (req: Request, res: Response) => {
  const { commentId } = req.params;
  try {
    await CommentService.deleteComment(commentId);

    res.status(statusCode.NO_CONTENT).send();
  } catch (error) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR))
  }
};

export default {
  createComment,
  getComments,
  deleteComment
}