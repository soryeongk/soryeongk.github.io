import Head from "next/head";
import { PropsWithChildren } from "react";

import BottomNavigation from "./BottomNavigation";
import Header from "./Header";

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>령로그</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
        <meta
          name="description"
          content="귀여운 령이의 귀엽지만은 않은 포트폴리오"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1 border-x border-x-blue-dark">
        {props.children}
      </main>
      <BottomNavigation />
    </>
  );
}
