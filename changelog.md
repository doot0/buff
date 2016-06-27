## 1.3.0 (2016-06-27)

##### Features:
  - Added .codeclimate.yml, thanks to [@leftees](https://github.com/leftees)

##### Performance:
  - Minor performance improvement in parser via caching declaration array length

##### Meta:
  - Added codeclimate badge

---

## 1.2.0 (2016-06-27)

##### Features:
  - Added Print/Layout/Composite stats to the output table for each vendor

---

## 1.1.0 (2016-06-26)

##### Bugfixes:
 - Fixes missing bin-path for npm package

---

## 1.0.0 (2016-06-26)

##### Performance:
  - Optimised trigger property identification routine

##### Features:
  - Added tabular CLI output for properties that cause a rendering trigger. Currently displays only the line number in the source file and the appropriate triggering property
  - Added changelog (you're looking at it!)

##### Bugfixes:
  - Fixed an issue where stylesheets would not be parsed properly if they contained anything other than rule declarations (e.g. comments)

##### Meta:
  - Published package to [npmjs.com](https://www.npmjs.com) under the name [buff-cli](https://www.npmjs.com/package/buff-cli)
