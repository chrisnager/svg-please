# [svg-please](//chrisnager.github.io/svg-please/)

Simple script to replace your bitmap icons with inline SVGs with bitmap fallback built in. Inline SVGs reduce your image requests to zero and are able to be styled with CSS. [Check it out](//chrisnager.github.io/svg-please/).

## How to use

Include [modernizr](//modernizr.com/) and [svg-please.js](//github.com/chrisnager/svg-please/blob/gh-pages/svg-please.js) in your project.

Add your bitmap icon images as you normally would with `<img>` tags. Use the class `svg-please` for any icons you intend to replace with inline SVG icons.

```html
<img class="svg-please" src="img/icons/plus.png" alt="Plus">
```

## License

The MIT License (MIT)

Copyright (c) 2014 [Chris Nager](//twitter.com/chrisnager)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
