// @ts-nocheck
import quotes from './quotes.json';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  fetch(request) {
    try {
      const random_quote = quotes[Math.floor(Math.random() * quotes.length)];

      const url = new URL(request.url);
      const pathname = url.pathname;

      if (pathname === '/text') {
        return new Response(random_quote, {
          headers: {
            ...headers,
            'content-type': 'text/plain; charset=utf-8',
          },
        });
      }

      const id = pathname.substring(pathname.lastIndexOf('/') + 1);
      if (isNumeric(id)) {
        const selected_quote = quotes[id];
        return new Response(selected_quote, {
          headers: {
            ...headers,
            'content-type': 'text/plain; charset=utf-8',
          },
        });
      }

      return new Response(JSON.stringify({ quote: random_quote }), {
        headers: {
          ...headers,
          'content-type': 'application/json; charset=utf-8',
        },
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: 500,
        headers: { ...headers },
      });
    }
  },
};

export function isNumeric(str) {
  if (typeof str != 'string') return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}
