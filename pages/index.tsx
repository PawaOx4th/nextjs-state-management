import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-2xl font-inter font-semibold flex justify-center items-center min-h-screen w-full">
        NextJs + State management. ⚡
      </main>
    </div>
  )
}

export default Home
