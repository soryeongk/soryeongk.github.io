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
      <main className="mt-2">
        <div className="flex flex-col gap-y-1">
          <span className="p-3 bg-white-dark text-xl font-bold">방명록</span>
          <CommentForm />
          <Comments />
        </div>
      </main>
    </>
  );
}
