import { useQuery, useQueryClient, useMutation } from "react-query";

import { deleteComment, getComments, postComment } from "../../axios/comments";
import { QUERY_KEY } from "../../axios/types/index";

export const useReadComments = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: QUERY_KEY.Comments,
    queryFn: getComments,
    suspense: true,
  });

  return { data, isLoading, isError };
};

export const useCreateCommentMutation = (onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation(postComment, {
    onSuccess() {
      onSuccessCallback?.();
      queryClient.invalidateQueries(QUERY_KEY.Comments);
    },
  });
};

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteComment, {
    onSuccess() {
      queryClient.invalidateQueries(QUERY_KEY.Comments);
    },
  });
};
