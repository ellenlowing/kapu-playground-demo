import { useLoaderData, Link } from "react-router-dom";
import {Image} from '../../components/DemoMedia';
import {collections} from '../../data/demo';

export const meta = () => {
    return {
      title: 'Collections',
    //   description: 'A custom storefront powered by Hydrogen',
    };
};

export function loader() { return {collections: {nodes: collections}}; }

export default function Collections() {
    const {collections} = useLoaderData();
    return (
        <section className="w-full gap-4 px-6 pt-24 pb-24">
            <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
                Collections
            </h2>
            <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false  sm:grid-cols-3 false false">
                {collections.nodes.map((collection) => {
                    return (
                        <Link to={`/collections/${collection.handle}`} key={collection.id} className="hover:col-unset">
                            {collection?.image && (
                                <Image
                                    alt={`Image of ${collection.title}`}
                                    data={collection.image}
                                    key={collection.id}
                                    sizes="(max-width: 32em) 100vw, 33vw"
                                    widths={[400, 500, 600, 700, 800, 900]}
                                    loaderOptions={{
                                        scale: 2,
                                        crop: 'center',
                                    }}
                                />
                            )}
                            <h2 className="whitespace-pre-wrap max-w-prose font-medium text-copy w-full">
                                {collection.title}
                            </h2>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
