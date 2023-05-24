# HLJS-LEMMA - a language grammar for highlight.js

![license](https://badgen.net/badge/license/MIT/blue)

## Disclaimer

This highlight.js module is not officially released and currently only a prototype. It lacks documentation and reasonable test cases, shortcomings that we will address in the future before we want to put the module as PR.

Currently, all modeling languages that the LEMMA ecosystem includes are described here in one module. We intend to change this in the future. 

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/lemma.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```
### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlight.js');
var hljsLemma = require('lemma');

hljs.registerLanguage("lemma", hljsLemma);
hljs.highlightAll();
```

## License

Highlight.js as well as this module are released under the MIT License. See the LICENSE file
for details.

### Author

Jonas Sorgalla <jonas.sorgalla@fh-dortmund.de>

## Links
- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about LEMMA: <https://github.com/SeelabFhdo/lemma>

