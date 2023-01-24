import useNavigation, { NavigationIndex } from "../../hooks/useNavigation";

const Navigation = () => {
  const { navigationIndex, setNavigationIndex } = useNavigation();

  return (
    <nav className="flex items-center gap-x-4">
      <button
        type="button"
        onClick={() => setNavigationIndex(NavigationIndex.ACTIVITY)}
        className={`border border-gray-300 rounded-lg py-1 px-2 text-sm ${
          navigationIndex === NavigationIndex.ACTIVITY
            ? "bg-blue-dark text-white"
            : "text-gray-400"
        }`}
      >
        {NavigationIndex.ACTIVITY}
      </button>
      <button
        type="button"
        onClick={() => setNavigationIndex(NavigationIndex.TIME_SERIES)}
        className={`border border-blue rounded-lg py-1 px-2 text-sm ${
          navigationIndex === NavigationIndex.TIME_SERIES
            ? "bg-blue-dark text-white"
            : " text-gray-400"
        }`}
      >
        {NavigationIndex.TIME_SERIES}
      </button>
    </nav>
  );
};

export default Navigation;
