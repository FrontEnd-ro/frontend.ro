import highlight from 'highlight.js/lib/core';
import hljsXML from 'highlight.js/lib/languages/xml';
import hljsCSS from 'highlight.js/lib/languages/css';
import hljsJSON from 'highlight.js/lib/languages/json';
import hljsJavaScript from 'highlight.js/lib/languages/javascript';

highlight.registerLanguage('html', hljsXML);
highlight.registerLanguage('css', hljsCSS);
highlight.registerLanguage('json', hljsJSON);
highlight.registerLanguage('javascript', hljsJavaScript);

export default highlight;
