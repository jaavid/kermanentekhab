import { createHashRouter, createMemoryRouter, RouterProvider } from 'react-router-dom';
import {
  Culture,
  Economy,
  Kerman,
  Politic,
  Social,
  Sport,
  World,
} from './components/Service/Service';
import { HomePage } from './pages/Home.page';
import { LandingPage } from './pages/Landing.page';
import { NewsletterPage } from './pages/Newsletter.page';
import { PodcastPage } from './pages/Podcast.page';

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/landing',
    element: <LandingPage />,
  },
  {
    path: '/podcasts',
    element: <PodcastPage />,
  },
  {
    path: '/newsletters',
    element: <NewsletterPage />,
  },
  {
    path: '/service/sport',
    element: <Sport />,
  },
  {
    path: '/service/politic',
    element: <Politic />,
  },
  {
    path: '/service/world',
    element: <World />,
  },
  {
    path: '/service/culture',
    element: <Culture />,
  },
  {
    path: '/service/economy',
    element: <Economy />,
  },
  {
    path: '/service/social',
    element: <Social />,
  },
  {
    path: '/service/kerman',
    element: <Kerman />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
