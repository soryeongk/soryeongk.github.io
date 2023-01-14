export const QUERY_KEY = {
  Comments: "COMMENTS",
} as const;

interface Comment {
  _id: string;
  content: string;
  writer?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CommentsResponse {
  comments: Comment[];
}

export interface CommentResponse {
  comment: Comment;
}

export interface CommentRequest {
  content: string;
  writer?: string;
}
