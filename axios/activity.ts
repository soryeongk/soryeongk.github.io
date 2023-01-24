import { ActivityRequest, ActivitiesResponse } from "./types/activity";

import { baseInstance } from ".";

const getActivities = async (): Promise<ActivitiesResponse> => {
  const { data } = await baseInstance.get<ActivitiesResponse>("/activity");

  return {
    activities: data.activities.map((activity) => ({
      ...activity,
      date: {
        from: activity.date.from ? new Date(activity.date.from) : undefined,
        to: new Date(activity.date.to),
      },
    })),
  };
};

const postActivity = async (activity: ActivityRequest) => {
  return await baseInstance.post("/activity", activity);
};

export { getActivities, postActivity };
