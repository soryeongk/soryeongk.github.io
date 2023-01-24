interface Comment {
  _id: string;
  content: string;
  writer?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CommentsResponse = {
  comments: Comment[];
};

export type CommentResponse = {
  comment: Comment;
};

export type CommentRequest = {
  content: string;
  writer?: string;
};
