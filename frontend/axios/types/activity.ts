export type Activity = {
  date: {
    from?: Date;
    to: Date;
  };
  title: string;
  category?: string;
  description?: string;
  url?: string;
};

export type ActivityResponse = Activity & { _id: string };

export type ActivitiesResponse = {
  activities: ActivityResponse[];
};

export type ActivityRequest = Activity;
