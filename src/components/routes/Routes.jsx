import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Error from '../Error';
import Home from '../Home';
import PageToRead from '../PageToRead';
import ListedBooks from '../ListedBooks';
import BookDetails from '../BookDetails';

const routes = createBrowserRouter([
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
            loader: () => fetch('/BookData.json'),
            element: <BookDetails></BookDetails>,
          },
        ],
      }
]);

export default routes