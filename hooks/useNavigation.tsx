import React from "react";

export enum NavigationIndex {
  ACTIVITY = "활동별로 보기",
  TIME_SERIES = "시간순으로 보기",
}

type NavigationIndexContextType = {
  navigationIndex: NavigationIndex;
  setNavigationIndex?: React.Dispatch<React.SetStateAction<NavigationIndex>>;
};

const NavigationIndexContext = React.createContext<NavigationIndexContextType>({
  navigationIndex: NavigationIndex.ACTIVITY,
  setNavigationIndex: undefined,
});

export const NavigationIndexProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [navigationIndex, setNavigationIndex] = React.useState<NavigationIndex>(
    NavigationIndex.ACTIVITY
  );

  return (
    <NavigationIndexContext.Provider
      value={{ navigationIndex, setNavigationIndex }}
    >
      {children}
    </NavigationIndexContext.Provider>
  );
};

export default function useNavigation() {
  const { navigationIndex, setNavigationIndex: setNavIndex } = React.useContext(
    NavigationIndexContext
  );

  const setNavigationIndex = (navigationIndex: NavigationIndex) => {
    return setNavIndex?.(navigationIndex);
  };

  return { navigationIndex, setNavigationIndex };
}
