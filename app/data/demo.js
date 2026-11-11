import image1 from '../img/KAPU25_1512x.webp';
import image2 from '../img/KAPU22_1512x.webp';
import image3 from '../img/KAPU10_1060x.webp';
import image4 from '../img/KAPU8_1296x.webp';
import image5 from '../img/KAPU5_1296x.webp';
import image6 from '../img/KAPU23_1512x.webp';
import image7 from '../img/scans_of_bracelets_and_necklaces_1728x.webp';
import recovered from './recovered.json';

export const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// Product identities and galleries come from archived pages. Prices and copy
// remain demo placeholders; no Shopify service is used.
export const collections = ['vessels', 'accessories', 'magazine', 'workshops', 'archive'].map(handle => {
  const nodes = recovered.filter(item => item.collection === handle).map((item, index) => {
    const images = item.images.map(image => ({url: import.meta.env.BASE_URL + image.url.replace(/^\//, ''), altText: image.altText || item.title}));
    const variant = {
      id: item.handle, availableForSale: true, image: images[0],
      price: {amount: String(40 + index * 15), currencyCode: 'USD'},
      selectedOptions: [{name: 'Title', value: 'Default Title'}],
    };
    return {
      id: item.handle, handle: item.handle, title: item.title,
      description, descriptionHtml: `<p>${description}</p>`,
      collections: {nodes: [{handle}]},
      options: [{name: 'Title', values: ['Default Title']}],
      variants: {nodes: [variant]}, selectedVariant: variant,
      media: {nodes: images.map(image => ({mediaContentType: 'IMAGE', image}))},
    };
  });
  return {
    id: handle, handle,
    title: handle === 'workshops' ? 'Workshop' : handle[0].toUpperCase() + handle.slice(1),
    description, image: nodes[0]?.variants.nodes[0].image,
    products: {nodes},
  };
});
export const products = collections.flatMap(collection => collection.products.nodes);
// Keep the landing collage independent of the recovered shop catalog.
export const featuredProduct = {media: {nodes: [image1, image2, image3, image4, image5, image6, image7].map(url => ({image: {url}}))}};
