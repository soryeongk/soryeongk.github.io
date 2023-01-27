import React from "react";
import Loader from "react-spinners/BeatLoader";

import ErrorBoundary from "../../components/ErrorBoundary";
import Layout from "../../components/Layout";
import SectionTitle from "../../components/SectionTitle";
import { themeColors } from "../../styles/theme";

import CommentForm from "./CommentForm";
import Comments from "./Comments";

export default function CommentPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-y-1 bg-gray-100 ">
        <SectionTitle title="방명록" />
        <CommentForm />
        <ErrorBoundary>
          <React.Suspense fallback={<Loader color={themeColors.blue.dark} />}>
            <Comments />
          </React.Suspense>
        </ErrorBoundary>
      </div>
    </Layout>
  );
}
