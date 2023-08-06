import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

import './index.css';
import Layout from './containers/Layout';
import SearchPage, { loader as searchLoader} from './containers/SearchPage';
import ResultPage, { loader as resultLoader } from './containers/ResultPage';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/search')
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/search',
        element: <SearchPage />,
        loader: searchLoader
      },
      {
        path: 'result/:imageId',
        element: <ResultPage />,
        loader: resultLoader
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
