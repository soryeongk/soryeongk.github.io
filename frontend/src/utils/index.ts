import { ProjectData, PROJECTDATA } from "./projectData";
import { ACHIEVES, CHANNELS, CONTACTS, EDULIST, PROJECTS, SKILLS } from "./resumeData";

interface ProjectFunc {
  (arg: string): ProjectData;
}

export const getProjectList = async () => {
  return PROJECTS;
};

export const getEduList = async () => {
  return EDULIST;
};

export const getAchieveList = async () => {
  return ACHIEVES;
};

export const getContacts = async () => {
  return CONTACTS;
};

export const getChannels = async () => {
  return CHANNELS;
};

export const getSkills = async () => {
  return SKILLS;
};

export const getProjectData: ProjectFunc = function (arg: string) {
  return PROJECTDATA[arg];
};
