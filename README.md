# HLJS-LEMMA - a language grammar for highlight.js

![version](https://badgen.net/npm/v/highlightjs-robots-txt) ![license](https://badgen.net/badge/license/MIT/blue)
![install size](https://badgen.net/packagephobia/install/highlightjs-robots-txt) ![minified size](https://badgen.net/bundlephobia/min/highlightjs-robots-txt)

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
<!-- UNCOMMENT BECAUSE NOT DISTRIBUTED...YET ;-) 
### Using directly from the UNPKG CDN

```html
<script type="text/javascript"
  src="https://unpkg.com/highlightjs-robots-txt@0.9.1/dist/robots-txt.min.js"></script>
```
- More info: <https://unpkg.com> -->

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlight.js');
var hljsLemma = require('lemma');

hljs.registerLanguage("lemma", hljsLemma);
hljs.highlightAll();
```


## License

Highlight.js is released under the MIT License. See [LICENSE][1] file
for details.

### Author

Jonas Sorgalla <jonas.sorgalla@fh-dortmund.de>

## Links
- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about robots.txt: <https://support.google.com/webmasters/answer/6062608?hl=en>

[1]: https://github.com/highlightjs/highlightjs-robots-txt/blob/master/LICENSE
