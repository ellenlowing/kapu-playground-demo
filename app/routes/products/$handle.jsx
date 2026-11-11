import {products} from '../../data/demo';
import { useLoaderData } from 'react-router-dom';
import ProductOptions from '../../components/ProductOptions';
import {Money} from '../../components/DemoMedia';
import ProductGallery from '../../components/ProductGallery';
import {useEffect, useState} from 'react';
import {isMobile} from 'react-device-detect';



const seo = ({data}) => ({
  title: data?.product?.title,
  description: data?.product?.description,
});
export const handle = {
  seo,
};

export function loader({params}) {
  const product = products.find(item => item.handle === params.handle);
  if (!product) throw new Response('Product not found', {status: 404});
  return {product, selectedVariant: product.selectedVariant, cart: null};
}

export default function ProductHandle() {
    const {product, selectedVariant, cart, productAnalytics} = useLoaderData();
    const {price, compareAtPrice} = product.variants?.nodes[0] || {};
    const [cartQuantity, setCartQuantity] = useState(cart?.totalQuantity);
    const [cartAdded, setCartAdded] = useState(false);
    const isDiscounted = compareAtPrice?.amount > price?.amount;
    const availableForSale = selectedVariant?.availableForSale || product.variants?.nodes[0].availableForSale;

    useEffect(() => {
      if(cart) {
        if(cartQuantity != cart?.totalQuantity) {
          setCartAdded(true);
          setTimeout(() => {
            setCartAdded(false);
          }, 1500)
        } 
        setCartQuantity(cart?.totalQuantity);
      }
    })

    return (
        <section id="active-product" data-collection-handle={product.collections.nodes[0].handle} className="w-full lg:max-w-6xl gap-4 grid px-6 mx-auto relative py-24 cursor-none">
            <div className="grid items-start gap-6 lg:grid-flow-col grid-flow-row lg:gap-24 lg:grid-cols-[400px_auto]">
                <div className="mx-auto grid max-w-lg z-50 w-full h-full">
                    <div className="snap-center  w-full h-full">
                        <ProductGallery media={product.media.nodes}/>
                    </div>
                </div>
                <div className={`sticky grid gap-8 lg:gap-12 lg:px-8 ${isMobile ? 'py-16' : 'py-8' }`}>
                    <div className={`${isMobile ? 'block' : 'grid'} lg:gap-8 lg:grid-flow-row grid-flow-col`}>
                        <h1 className="text-5xl whitespace-normal fa">
                            {product.title}
                        </h1>
                        {(price?.amount > 0 && availableForSale) && 
                          <div className={`flex gap-2 self-end place-self-end lg:self-start lg:place-self-start ${isMobile ? 'pt-8' : ''}`}>
                            <span className="max-w-prose whitespace-pre-wrap inherit text-copy flex gap-3">
                              $
                              <Money 
                                withoutCurrency 
                                withoutTrailingZeros 
                                data={price} 
                              />
                              {isDiscounted && (
                                <Money
                                  className="line-through opacity-50"
                                  withoutTrailingZeros
                                  withoutCurrency
                                  data={compareAtPrice}
                                />
                              )}
                            </span>
                          </div>
                        }
                        {(price?.amount > 0 && !availableForSale) && 
                          <div className={`flex gap-2 self-end place-self-end lg:self-start lg:place-self-start ${isMobile ? 'pt-8' : ''}`}>
                            <span className="max-w-prose whitespace-pre-wrap inherit text-copy flex gap-3">
                              Sold out
                            </span>
                          </div>
                        }
                    </div>
                    {product.options[0].values.length > 1 && <ProductOptions options={product.options} selectedVariant={selectedVariant} />}
                    <div className={`${isMobile ? 'block' : 'grid'} lg:grid-flow-row grid-flow-col`}>
                      <div
                        className="prose pt-6 text-black text-sm"
                        dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                      />
                      {(price?.amount > 0 && availableForSale) && 
                        <div className={`py-[0px] lg:py-16 self-end place-self-end lg:self-start lg:place-self-start ${isMobile ? 'pt-12' : ''}`}>
                          <ProductForm variantId={selectedVariant?.id} productAnalytics={productAnalytics} />
                          {cartAdded && <span className="inline-block px-4">Added!</span>}
                        </div>
                      }
                    </div>
                    

                </div>
            </div>
        </section>
    );
}

function ProductForm() {
  return <p className="text-sm border border-black p-3">Demo product · Checkout unavailable</p>;
}
