import {RemixServer} from '@remix-run/react';
import {renderToString} from 'react-dom/server';
export default function handleRequest(request, status, headers, context) {
  headers.set('Content-Type', 'text/html');
  return new Response('<!DOCTYPE html>' + renderToString(<RemixServer context={context} url={request.url} />), {status, headers});
}
