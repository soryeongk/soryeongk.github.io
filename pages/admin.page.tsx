import React from "react";

import { useCreateActivityMutation } from "../hooks/query/activity";

export enum ActivityCategory {
  CAREERS = "Careers",
  PROJECTS = "Projects",
  ACHIEVEMENTS = "Achievements",
  EDUCATIONS = "Educations",
}

interface Activity {
  title: string;
  category: string;
  description?: string;
  fromDate?: string;
  endDate?: string;
  url?: string;
}

export default function AdminPage() {
  const [activity, setActivity] = React.useState<Activity>({
    title: "",
    category: ActivityCategory.CAREERS,
  });

  const clearActivityForm = () => {
    setActivity({
      title: "",
      category: activity.category,
    });
  };

  const createActivityMutation = useCreateActivityMutation(clearActivityForm);

  const submitActivity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createActivityMutation.mutate({
      title: activity.title,
      category: activity.category,
      description: activity.description,
      date: {
        from: activity.fromDate ? new Date(activity.fromDate) : undefined,
        to: activity.endDate ? new Date(activity.endDate) : new Date(),
      },
      url: activity.url,
    });
  };

  const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setActivity((current) => ({ ...current, category }));
  };

  const inputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActivity((current) => ({ ...current, title: e.target.value }));
  };

  const inputDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setActivity((current) => ({ ...current, description: e.target.value }));
  };

  const inputFromDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActivity((current) => ({ ...current, fromDate: e.target.value }));
  };

  const inputEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActivity((current) => ({ ...current, endDate: e.target.value }));
  };

  const inputUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActivity((current) => ({ ...current, url: e.target.value }));
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={submitActivity}>
      <fieldset className="flex flex-col gap-y-1">
        <label>카테고리</label>
        <select value={activity.category} onChange={selectCategory}>
          <option value={ActivityCategory.CAREERS}>
            {ActivityCategory.CAREERS}
          </option>
          <option value={ActivityCategory.PROJECTS}>
            {ActivityCategory.PROJECTS}
          </option>
          <option value={ActivityCategory.ACHIEVEMENTS}>
            {ActivityCategory.ACHIEVEMENTS}
          </option>
          <option value={ActivityCategory.EDUCATIONS}>
            {ActivityCategory.EDUCATIONS}
          </option>
        </select>
      </fieldset>

      <fieldset className="flex flex-col gap-y-1">
        <label>*활동명</label>
        <input
          className="border border-blue rounded-md"
          value={activity.title}
          onChange={inputTitle}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-y-1">
        <label>설명</label>
        <textarea
          value={activity.description || ""}
          onChange={inputDescription}
        />
      </fieldset>
      <fieldset className="flex justify-between gap-x-2">
        <div className="flex-1 flex flex-col gap-y-1">
          <label>활동 시작 일자</label>
          <input
            className="border border-blue rounded-md"
            value={activity.fromDate || ""}
            onChange={inputFromDate}
          />
        </div>
        <div className="flex-1 flex flex-col gap-y-1">
          <label>*활동 끝난 일자</label>
          <input
            className="border border-blue rounded-md"
            value={activity.endDate || ""}
            onChange={inputEndDate}
          />
        </div>
      </fieldset>
      <fieldset className="flex flex-col gap-y-1">
        <label>url</label>
        <input
          className="border border-blue rounded-md"
          value={activity.url || ""}
          onChange={inputUrl}
        />
      </fieldset>
      <button type="submit">제출스</button>
    </form>
  );
}
