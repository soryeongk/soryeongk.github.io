import React from "react";
import Loader from "react-spinners/BeatLoader";
import { RecoilRoot } from "recoil";

import ErrorBoundary from "../components/ErrorBoundary";
import Layout from "../components/Layout";
import { themeColors } from "../styles/theme";

import Navigation from "./index/Navigation";

export default function Home() {
  const ProfileSection = React.lazy(() => import("./index/ProfileSection"));
  const Activities = React.lazy(() => import("./index/Activities"));

  return (
    <Layout>
      <div className="flex flex-col items-center gap-y-1">
        <ErrorBoundary>
          <React.Suspense fallback={<Loader color={themeColors.blue.dark} />}>
            <ProfileSection />
          </React.Suspense>
        </ErrorBoundary>
        <RecoilRoot>
          <Navigation />
          <ErrorBoundary>
            <React.Suspense fallback={<Loader color={themeColors.blue.dark} />}>
              <Activities />
            </React.Suspense>
          </ErrorBoundary>
        </RecoilRoot>
      </div>
    </Layout>
  );
}
