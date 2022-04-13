import '../styles/globals.css';
import type { AppProps as NextAppProps } from 'next/app';
import { useHydrateAtoms } from 'jotai/utils';
import { useAtomsDevtools } from 'jotai/devtools';
import { IGetTodoList } from '.';
import { ITodo } from '@/src/stores/todo/ITodo';
import { ReactElement } from 'react';
import { TodoStore } from '@/src/stores/todo/TodoStore';
import { UserStore } from '@/src/stores/User/UserStore';

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, 'pageProps'>;

// const AtomsDevtools = ({ children }: { children: ReactElement }) => {
//   useAtomsDevtools('demo');
//   return children;
// };

function MyApp({ Component, pageProps }: AppProps<IGetTodoList>) {
  const { listTodo, users } = pageProps;
  useAtomsDevtools('demo');

  /**
   * @example 1.
   */
  // const isSetStore =
  //   listTodo && users
  //     ? ([
  //         [TodoStore, { listTodo }],
  //         [UserStore, { users }]
  //       ] as const)
  //     : [];
  // useHydrateAtoms(isSetStore);

  /**
   * @example 2.
   */
  const setAtom = () => {
    let result = [];
    if (listTodo) result.push([TodoStore, { listTodo }] as const);
    if (users) result.push([UserStore, { users }] as const);

    return result;
  };
  useHydrateAtoms(setAtom());

  return <Component {...pageProps} />;
}

export default MyApp;
