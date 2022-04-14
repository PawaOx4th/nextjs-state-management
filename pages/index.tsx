import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Home: NextPage = () => (
  <div suppressHydrationWarning={true}>
    <Head>
      <title>Create Next App</title>
      <meta
        name="description"
        content=" Generated by create next app"
      />
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>

    <main
      className="flex min-h-screen w-full items-center justify-center border-2 font-inter text-2xl font-semibold transition-all hover:border"
      spellCheck={true}
    >
      NextJs + State management. ⚡
    </main>
  </div>
);

export default Home;
