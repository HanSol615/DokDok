import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MyBooks from './pages/Mybooks';
import DokDokCalendar from './pages/DokDokCalendar';
import { GlobalStyle } from './style/global';
import Login from './pages/Login';
import Join from './pages/Join';
import ResetPwd from './pages/ResetPwd';
import BookDetail from './pages/BookDetail';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import SearchResults from './pages/SearchResults';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
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
        path: 'search',
        element: <SearchResults />,
      },
      {
        path: 'books/:id',
        element: <BookDetail />
      },
      {
        path: 'calendar',
        element: <DokDokCalendar />,
      },
    ],
  },
  {
    path: 'auth/login',
    element: <Login />,
  },
  {
    path: 'auth/join',
    element: <Join />,
  },
  {
    path: 'auth/resetPwd',
    element: <ResetPwd />,
  }
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
