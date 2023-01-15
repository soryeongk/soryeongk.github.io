import Layout from "../../components/Layout";
import SectionTitle from "../../components/SectionTitle";

import CommentForm from "./CommentForm";
import Comments from "./Comments";

export default function CommentPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-y-1 bg-white-dark ">
        <SectionTitle title="방명록" />
        <CommentForm />
        <Comments />
      </div>
    </Layout>
  );
}
