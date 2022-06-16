# [chiquito.rest](https://chiquito.rest)

A free REST API for random Kanye West quotes (Kanye as a Service).

Built with [Cloudflare Workers](https://workers.cloudflare.com/).

Original idea and forked from https://github.com/ajzbc/kanye.rest

## Usage

### `GET` [https://api.chiquito.rest](https://api.chiquito.rest)

```json
{
    "quote": "I feel like I'm too busy writing history to read it."
}
```

or

### `GET` [https://api.chiquito.rest/text](https://api.chiquito.rest/text)

```text
The world is our office
```

## Development

Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/get-started/#installation)

```shell
npx wrangler dev
```

## License

MIT
