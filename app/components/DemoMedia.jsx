export function Image({data, alt, widths, loaderOptions, ...props}) {
  return <img src={data.url} alt={alt || data.altText || ''} {...props} />;
}
export function Money({data, withoutCurrency, withoutTrailingZeros, ...props}) {
  return <span {...props}>{new Intl.NumberFormat('en-US', {style: withoutCurrency ? 'decimal' : 'currency', currency: data.currencyCode, minimumFractionDigits: withoutTrailingZeros ? 0 : 2}).format(Number(data.amount))}</span>;
}
