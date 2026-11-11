import React from 'react';
import {createRoot} from 'react-dom/client';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reset.css';
import './styles/app.css';
import './styles/custom.css';
import App, {loader as rootLoader, ErrorPage} from './root';
import Home from './routes/index';
import Collections, {loader as collectionsLoader} from './routes/collections/index';
import Collection, {loader as collectionLoader} from './routes/collections/$handle';
import Product, {loader as productLoader} from './routes/products/$handle';
import About from './routes/about/index';
import Cart from './routes/cart';

// Hash URLs survive direct links and refreshes on static GitHub Pages hosting.
const router = createHashRouter([{
  id: 'root', path: '/', element: <App />, loader: rootLoader, errorElement: <ErrorPage />,
  children: [
    {index: true, element: <Home />},
    {path: 'collections', element: <Collections />, loader: collectionsLoader},
    {path: 'collections/:handle', element: <Collection />, loader: collectionLoader},
    {path: 'products/:handle', element: <Product />, loader: productLoader},
    {path: 'about', element: <About />},
    {path: 'cart', element: <Cart />},
    {path: '*', loader: () => {throw new Response('Page not found', {status: 404});}},
  ],
}]);
createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
