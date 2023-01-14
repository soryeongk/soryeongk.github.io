import Head from "next/head";

import CommentForm from "./CommentForm";
import Comments from "./Comments";

export default function Home() {
  return (
    <>
      <Head>
        <title>령로그</title>
        <meta
          name="description"
          content="귀여운 령이의 귀엽지만은 않은 포트폴리오"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-white-dark w-full">
        <span>soryeongk</span>
      </header>
      <main>
        <div className="flex flex-col gap-y-4 bg-white-dark">
          <span>방명록을 남겨주세요!</span>
          <CommentForm />
          <Comments />
        </div>
      </main>
    </>
  );
}
