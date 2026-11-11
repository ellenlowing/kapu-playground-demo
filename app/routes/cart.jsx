import {Link} from '@remix-run/react';
export default function Cart() {
  return <section className="px-6 pt-24 pb-24 max-w-3xl mx-auto"><h1 className="fa text-4xl py-6">Demo cart</h1><p>This is a demo shop. Products and prices are placeholders, and checkout is unavailable.</p><Link className="underline" to="/collections/vessels">Explore the collection</Link></section>;
}
export function action() { return new Response('Checkout is unavailable in this demo.', {status: 405}); }
