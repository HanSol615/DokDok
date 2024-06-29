import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MyBooks from './pages/Mybooks';
import DokDokCalendar from './pages/DokDokCalendar';
import { GlobalStyle } from './style/global';
import Login from './pages/Login';
import Join from './pages/Join';
import ResetPwd from './pages/ResetPwd';
import BookDetail from './pages/BookDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <MyBooks />,
      },
      {
        path: 'myBooks',
        element: <MyBooks />,
      },
      {
        path: 'book/:id',
        element: <BookDetail />
      },
      {
        path: 'calendar',
        element: <DokDokCalendar />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/join',
    element: <Join />,
  },
  {
    path: '/resetPwd',
    element: <ResetPwd />,
  }
]);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
