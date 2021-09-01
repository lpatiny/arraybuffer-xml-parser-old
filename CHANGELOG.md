# Changelog

## [3.20.0](https://www.github.com/cheminfo/arraybuffer-xml-parser/compare/v3.19.0...v3.20.0) (2021-09-01)


### Features

* add base64 parsing, not implemented yet ([c048349](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/c048349b6de7fdec426da3dc1b6f781919e9cd3a))
* add build script ([ecea33e](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/ecea33e2f865ce370e44a4404fce40599e8a0372))
* add faster utf-8 decoding ([199a3c7](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/199a3c7d0872953f7c904de398fefd8a34aab926))
* add working xml parsing to some extent ([25739b0](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/25739b0ac8ebd7a7f74e7025065b49e8364f13a8))
* Added array space trimming ([5db71a5](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/5db71a52cb7657e1bf004ad7ab854832750f0f7b))
* Added array splitting ([4530e45](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/4530e455cfae31c00f87c2fa2628ef4d96c77794))
* Added numbers parsing, rearranged snippets ([f0a940b](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/f0a940b4596735213a04fa0819e0af1344601acf))
* Added TODOS and adapted some parts to buffers ([e7a7ae1](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/e7a7ae1681d8483df66f1371d17f6ba13977acce))
* deal with string (and encode it to array buffer) ([de3a48b](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/de3a48b6daa278f9ee69b15d633c13b0b9edab53))
* implement array value parsing ([fd56c64](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/fd56c64ed84f27ce4e395f0389774492d26e83a7))
* improve speed (but still 2 times slower than fast-xml-parser) ([7826807](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/7826807d92e96cd15d34a05ecf0067534cf24bef))
* use navie decoder in browser ([b4de19f](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/b4de19f5db5204a37c8be2dc171cd7ce153db6e1))


### Bug Fixes

* \r?\n ([a596b64](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/a596b6454d56b9160d7c242621c6cf92c91022ed))
* add fs.FileReadSync failsafe, fix comments ([9e76170](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/9e76170e960b538c6b5bf3729d5f115a331f9b5c))
* add modifications to pass multiple test cases ([40db33b](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/40db33bbf7005f88ea26d4f7315f44deed227905))
* add newline handling to array trimming ([c212c63](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/c212c636fe8b4583691aaca2a656d637101b39b5))
* add repeat case for arrayIndexOf, 1 test left ([7b34d78](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/7b34d78038dc86892c012e6fa83891543d3c4b7e))
* add string tag value processing back ([3352d78](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/3352d7810e0c41a00a4d1a77b8abf70c97b98865))
* add support for 4-bytes utf-8 chars ([06b096b](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/06b096b4af1bbe00e19b2349623d15f996d16b4a))
* add support for different newline formats ([660993a](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/660993a47340c038f0c4bd6a7debe4af59908d63))
* add support for parseTrueNumberOnly tag ([71ecd1a](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/71ecd1a63b3ecaa57ddc74f9e1a49e6ed55e311a))
* cdata first test ([e8d92be](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/e8d92be9a516571e8d229fd3de0de8d272ed0e6e))
* change list to index, fix type error ([a4cde87](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/a4cde87cdc11b247ffbd695a8d75c147638eb29f))
* ensure typedarray in the browser ([b3db5c2](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/b3db5c2a8a8a25dd3523e8fbbbc7ad5fa364a5d3))
* fix eslint ([bd93da8](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/bd93da8c7f52dac5d5cf5953cbc3f6d32d5a813a))
* fix functions and create test cases ([7c731da](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/7c731dab63285fb4690e09e7460d054d798f1bb9))
* fix problems with cdata, more tests passing ([48f86c4](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/48f86c4bf6ce63dc42e7440b155e707fb1710298))
* Fix utility functions and made tests for them ([417e690](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/417e6900a10e3134d49cca283808c003d7871c53))
* fixed bufferIndexOf ([ffa0f8c](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/ffa0f8c56fcd9f0159c531a0e6adebcc6c51b185))
* improve compatibility for every newlines ([8831a47](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/8831a47fc172dd5b477c2f8b1d8f88759547a029))
* make parsing work on more cases ([9237726](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/9237726b14b736ef78b9aab81bca2f2f69eb5e93))
* move instructions, 3 failing tests left ([5b3a20f](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/5b3a20f283c45b3d7d3a4683139a219b1c0ec784))
* pass all tests ([220079e](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/220079e3bc34f9228e6a150312e8b6e4e67c4858))
* pass more tests ([8693857](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/8693857acd02f684547c40ca067600c2c5444eb2))
* pass test with cyrillic chars in tags ([9bef8f4](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/9bef8f454551187c6fe1b8a41ff0dc97cf127bb3))
* use byteOffset instead of offset parameter ([d919946](https://www.github.com/cheminfo/arraybuffer-xml-parser/commit/d91994661bf33f0403de3f5bcf7358a8ef8a8d41))
