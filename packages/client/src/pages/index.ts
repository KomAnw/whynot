import { lazy } from 'react';
import WithSuspense from 'src/hoc/WithSuspence';

export const Page404 = WithSuspense(lazy(() => import('./404')));
export const ErrorPage = WithSuspense(lazy(() => import('./ErrorPage')));
export const SignIn = WithSuspense(lazy(() => import('./SignIn')));
export const SignUp = WithSuspense(lazy(() => import('./SignUp')));
export const Welcome = WithSuspense(lazy(() => import('./Welcome')));
export const Leaderboard = WithSuspense(lazy(() => import('./Leaderboard')));
export const GameMenu = WithSuspense(lazy(() => import('./Menu')));
export const Settings = WithSuspense(lazy(() => import('./Settings')));
