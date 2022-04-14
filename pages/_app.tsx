import '../styles/globals.css';
import type { AppProps as NextAppProps } from 'next/app';
import { ITodo } from '../src/feature/todo/ITodo';
import todoStore from '../src/feature/todo/TodoStore';
import { IRootStoreProps } from '../src/interfaces/RootStoreProps';

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, 'pageProps'>;
function MyApp({ Component, pageProps }: AppProps<Partial<IRootStoreProps>>) {
  const { listTodo } = pageProps;

  if (listTodo) {
    todoStore.setListTodo(listTodo);
  }

  return <Component {...pageProps} />;
}

export default MyApp;
