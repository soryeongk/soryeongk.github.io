import Link from "next/link";
import { useRouter } from "next/router";

const BottomNavigation = () => {
  const router = useRouter();

  const navigationUrls = [
    {
      url: "comment",
      text: "방명록",
    },
    {
      url: "",
      text: "소개",
    },
    {
      url: "blog",
      text: "블로그",
    },
  ];

  return (
    <nav className="sticky bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-gray-100 border border-blue-dark">
      {navigationUrls.map((navigation) => (
        <Link
          key={navigation.url}
          href={`/${navigation.url}`}
          passHref
          className="flex-1 text-center"
        >
          <span
            className={`${
              router.pathname === `/${navigation.url}`
                ? "font-bold"
                : "text-gray-500"
            }`}
          >
            {navigation.text}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;
