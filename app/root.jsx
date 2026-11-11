import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react';
import styles from './styles/app.css';
import customStyles from './styles/custom.css';
import favicon from '../public/favicon.png';
import {Layout} from './components/Layout';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import resetStyles from './styles/reset.css';
import {featuredProduct} from './data/demo';

export const links = () => {
  return [
    {rel: 'stylesheet', href: bootstrapStyles},
    {rel: 'stylesheet', href: resetStyles},
    {rel: 'icon', type: 'image/png', href: favicon},
    {rel: 'stylesheet', href: styles},
    {rel: 'stylesheet', href: customStyles},
  ];
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
  google: 'notranslate'
});

export function loader() {
  return {layout: {shop: {name: 'Kapu — Demo'}}, cart: null, product: featuredProduct};
}

export default function App() {
  const {layout} = useLoaderData();
  const {name} = layout.shop;
  return (
    <html translate="no" lang="en">
      <head>
        <title>Kapu — Demo</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout title={name}>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
