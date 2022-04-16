import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage
} from 'next';
import Head from 'next/head';
import { useObservableState } from 'observable-hooks';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { todos$ } from '../src/feature/todo/TodoStore';
import { ITodo } from '../src/interfaces/ITodo';

export const getServerSideProps: GetServerSideProps<{
  todoList: ITodo[];
}> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const result = await response.json();
  todos$.next(result);

  return {
    props: {
      todoList: todos$.getValue()
    }
  };
};

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ todoList }) => {
  const todoState = useObservableState(todos$);

  const handleDeleteThisItem = (id: number) => {
    const _todos = todoState.filter((todo) => todo.id !== id);
    todos$.next(_todos);
  };

  useEffect(() => {
    toast.success('Success.');
  }, []);

  return (
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
      {/* {!SSR && <Toaster />} */}
      <main
        className="my-4 flex min-h-screen w-full flex-col items-center justify-center  font-inter text-2xl font-semibold transition-all "
        spellCheck={true}
      >
        <h1 className="my-6 rounded bg-slate-200 p-3 font-inter text-3xl">
          {' '}
          NextJs + State management. ⚡
        </h1>
        <hr />
        <section className="text-base">
          <ul>
            {todoState.map((todo) => (
              <li
                key={todo.id}
                className="my-2 flex justify-between border p-2 font-roboto transition-all hover:shadow-md"
              >
                <div>
                  <strong>{todo.id}</strong>. {todo.title}
                </div>
                <button
                  className="text-md rounded border border-white bg-green-500 px-2 text-white"
                  onClick={() => handleDeleteThisItem(todo.id)}
                >
                  &#xd7;
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
