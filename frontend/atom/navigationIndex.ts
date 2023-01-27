import { atom } from "recoil";

export enum NavigationIndex {
  ACTIVITY = "활동별로 보기",
  TIME_SERIES = "시간순으로 보기",
}

export const navigationIndexAtom = atom({
  key: "@/main/navigation",
  default: NavigationIndex.ACTIVITY,
});
