# decamelize-keys-deep

> Convert a camelized object into a lowercased one with a custom separator<br>
> Example: `{unicornRainbow: {fooBar: 1}}` → `{unicorn_rainbow: {foo_bar: 1}}`


## Install

```
$ npm install --save decamelize-keys-deep
```


## Usage

```js
const decamelizeKeysDeep = require('decamelize-keys-deep');

decamelizeKeysDeep({unicornRainbow: {fooBar: 1}});
//=> {unicorn_rainbow: {foo_bar: 1}}

decamelizeKeysDeep({unicornRainbow: {fooBar: 1}}, '-');
//=> {unicorn-rainbow: {foo-bar: 1}}
```


## API

### decamelizeKeysDeep(input, [separator])

#### input

Type: `object`

#### separator

Type: `string`<br>
Default: `_`

## Related

See [`camelcase-keys-deep`](https://github.com/rxaviers/camelcase-keys-deep) for the inverse.

## License

MIT © [Rafael Xavier de Souza](https://rafael.xavier.blog.br)

