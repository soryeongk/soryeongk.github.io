import { useQuery, useQueryClient, useMutation } from "react-query";

import { deleteComment, getComments, postComment } from "../../axios/comments";
import { QUERY_KEY } from "../../axios/types/index";

export const useReadComments = () => {
  const { data, isLoading, isError } = useQuery(
    QUERY_KEY.Comments,
    getComments
  );

  return { data, isLoading, isError };
};

export const useCreateComment = (onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation(postComment, {
    onSuccess() {
      onSuccessCallback?.();
      queryClient.invalidateQueries(QUERY_KEY.Comments);
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteComment, {
    onSuccess() {
      queryClient.invalidateQueries(QUERY_KEY.Comments);
    },
  });
};
