import { useQueryClient, useMutation, useQuery } from "react-query";

import { getActivities, postActivity } from "../../axios/activity";
import { QUERY_KEY } from "../../axios/types/index";

export const useReadActivities = () => {
  const { data, isLoading, isError } = useQuery(
    QUERY_KEY.Activities,
    getActivities
  );

  return { data, isLoading, isError };
};

export const useCreateActivityMutation = (onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation(postActivity, {
    onSuccess() {
      onSuccessCallback?.();
      queryClient.invalidateQueries(QUERY_KEY.Activities);
    },
  });
};
