import {Link, Outlet, ScrollRestoration, useLoaderData, useRouteError} from 'react-router-dom';
import {Layout} from './components/Layout';
import {featuredProduct} from './data/demo';

export function loader() {
  return {layout: {shop: {name: 'Kapu — Demo'}}, cart: null, product: featuredProduct};
}
export default function App() {
  const {layout} = useLoaderData();
  return <><Layout title={layout.shop.name}><Outlet /></Layout><ScrollRestoration /></>;
}
export function ErrorPage() {
  const error = useRouteError();
  return <main className="p-6"><h1 className="fa text-4xl">{error?.status === 404 ? 'Page not found' : 'Something went wrong'}</h1><Link to="/">Return to the playground</Link></main>;
}
