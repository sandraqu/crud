import { RouteObject } from 'react-router-dom';
import { HomeView } from './views/home';

export function getAppRoutes(): RouteObject[] {
  return [
    {
      index: true,
      element: <HomeView />,
    },
  ];
}
