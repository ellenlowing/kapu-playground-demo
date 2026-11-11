import {useLoaderData} from '@remix-run/react';
import {collections} from '../../data/demo';
import ProductGrid from '../../components/ProductGrid';


const seo = ({data}) => ({
    title: data?.collection?.title,
    description: data?.collection?.description,
});
export const handle = {
    seo,
};

export function loader({params}) {
  const collection = collections.find(item => item.handle === params.handle);
  if (!collection) throw new Response('Collection not found', {status: 404});
  return {collection};
}

export default function Collection() {
  const {collection} = useLoaderData();
  return (
    <>
      <header className="hidden grid w-full gap-8 py-8 justify-items-start absolute bottom-[0px] left-0">
        <h1 className="text-4xl whitespace-pre-wrap font-fa uppercase">
          {collection.title}
        </h1>
      </header>
      <ProductGrid
        collection={collection}
      />
    </>
  );
}
