import { useQueryClient, useMutation, useQuery } from "react-query";

import { getActivities, postActivity } from "../../axios/activity";
import { QUERY_KEY } from "../../axios/types/index";

export const useReadActivities = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: QUERY_KEY.Activities,
    queryFn: getActivities,
    suspense: true,
  });

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
