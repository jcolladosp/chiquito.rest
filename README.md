# [chiquito.rest](https://chiquito.rest)

A free REST API for random [Chiquito de la Calzada](https://es.wikipedia.org/wiki/Chiquito_de_la_Calzada) quotes (Chiquito as a Service).

Built with [Cloudflare Workers](https://workers.cloudflare.com/).

Original idea and forked from https://github.com/ajzbc/kanye.rest

Quotes from: https://github.com/atareao/chiquito/

## Usage

### `GET` [https://api.chiquito.rest](https://api.chiquito.rest)

```json
{
    "quote": "Sieteee caballo que vienennn de Bonanzaaarrlll."
}
```

or

### `GET` [https://api.chiquito.rest/text](https://api.chiquito.rest/text)

```text
En vez del graduado escolar tenía una etiqueta de Anís del Mono
```

## Development

Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/get-started/#installation)

```shell
npx wrangler dev
```

## Production

```shell
wrangler login

wrangler deploy --env production
```

- Add custom domain in the worker: api.chiquito.rest

## License

MIT
