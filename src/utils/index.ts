import { ACHIEVES, CHANNELS, CONTACTS, EDULIST, PROJECTS, SKILLS } from "./data";

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
