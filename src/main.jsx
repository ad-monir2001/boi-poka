import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root.jsx';
import Home from './components/Home.jsx';
import Error from './components/Error.jsx';
import PageToRead from './components/PageToRead.jsx';
import ListedBooks from './components/ListedBooks.jsx';
import BookDetails from './components/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'page-to-read',
        element: <PageToRead></PageToRead>,
      },
      {
        path: 'listed-books',
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: 'books/:bookId',
        loader: ()=> fetch('/BookData.json'),
        element: <BookDetails></BookDetails>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
