import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { todos$ } from '../src/feature/todo/TodoStore';

function MyApp({ Component, pageProps }: AppProps) {
  const { todoList } = pageProps;
  todos$.next(todoList);

  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
