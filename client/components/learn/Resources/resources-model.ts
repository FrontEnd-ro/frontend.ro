export type ResourceDescription = {
  title: string;
  url: string;
  category: string;
  cover: string;
};

export const RESOURCES = [
  /** esentials */
  {
    title: 'MDN',
    url: 'https://developer.mozilla.org/en-US/',
    category: 'esentials',
    cover: '/images/resources/mdn_500w.png',
  },
  {
    title: 'Stack Overflow',
    url: 'https://stackoverflow.com/',
    category: 'esentials',
    cover: '/images/resources/stack-overflow_316w.png',
  },
  {
    title: 'Can I Use',
    url: 'https://caniuse.com/',
    category: 'esentials',
    cover: '/images/resources/caniuse_500w.png',
  },
  /**  images-videos */
  {
    title: 'Unsplash',
    url: 'https://unsplash.com/',
    category: 'images-videos',
    cover: '/images/resources/unsplash_500w.png',
  },
  {
    title: 'Pixabay',
    url: 'https://pixabay.com/',
    category: 'images-videos',
    cover: '/images/resources/pixabay_500w.png',
  },
  {
    title: 'Pexels',
    url: ' https://www.pexels.com/',
    category: 'images-videos',
    cover: '/images/resources/pexels_500w.jpg',
  },
  /** vector */
  {
    title: 'Undraw',
    url: ' https://undraw.co/',
    category: 'vector',
    cover: '/images/resources/undraw_500w.png',
  },
  {
    title: 'DrawKit',
    url: 'https://www.drawkit.io/',
    category: 'vector',
    cover: '/images/resources/drawkit_500w.png',
  },
  {
    title: 'Humaaans',
    url: 'https://www.humaaans.com/',
    category: 'vector',
    cover: '/images/resources/humaaans_500w.jpg',
  },
  {
    title: 'The Doodle Library',
    url: 'https://www.thedoodlelibrary.com/',
    category: 'vector',
    cover: '/images/resources/doodle_500w.png',
  },
  {
    title: 'Joe Schmoe',
    description: 'O colecție de avatare ilustrată pentru developeri și designeri.',
    url: 'https://joeschmoe.io/',
    category: 'vector',
    cover: '/images/resources/schmoe_500w.png',
  },
  /** icons */
  {
    title: 'Font Awesome',
    url: 'https://fontawesome.com/',
    category: 'icons',
    cover: '/images/resources/fontawesome_500w.png',
  },
  {
    id: 'evaicons',
    title: 'Eva Icons',
    url: 'https://akveo.github.io/eva-icons/#/',
    category: 'icons',
    cover: '/images/resources/eva-icons_500w.jpg',
  },
  {
    id: 'ikonate',
    title: 'Ikonate',
    url: 'https://ikonate.com/',
    category: 'icons',
    cover: '/images/resources/ikonate_500w.png',
  },
  {
    title: 'Flaticon',
    url: 'https://www.flaticon.com/',
    category: 'icons',
    cover: '/images/resources/flaticon_500w.jpg',
  },
  /** css-spinners */
  {
    title: 'Epic Spinners',
    url: 'https://epic-spinners.epicmax.co/',
    category: 'css-spinners',
    cover: '/images/resources/epic-spinners_500w.png',
  },
  {
    title: 'Spin Kit',
    url: 'https://tobiasahlin.com/spinkit/',
    category: 'css-spinners',
    cover: '/images/resources/spinkit_500w.jpg',
  },
  /** tutorials */
  {
    title: 'CSS Dinner',
    url: 'https://flukeout.github.io/',
    category: 'tutorials',
    cover: '/images/resources/css-dinner_500w.jpg',
  },
  {
    title: 'Flexbox Froggy',
    url: 'https://flexboxfroggy.com/',
    category: 'tutorials',
    cover: '/images/resources/flexboxfroggy_500w.png',
  },
  {
    title: 'CSS Grid Garden',
    url: 'https://cssgridgarden.com/',
    category: 'tutorials',
    cover: '/images/resources/css-grid-garden_500w.png',
  },
  {
    title: 'Javascript 30',
    url: 'https://javascript30.com/',
    category: 'tutorials',
    cover: '/images/resources/javascript30_500w.png',
  },
  /** blogs */
  {
    title: 'Smashing Magazine',
    url: 'https://www.smashingmagazine.com/',
    category: 'blogs',
    cover: '/images/resources/smashingmag_500w.png',
  },
  {
    title: 'CSS-Tricks',
    url: 'https://css-tricks.com/',
    category: 'blogs',
    cover: '/images/resources/csstricks_500w.png',
  },
  {
    title: 'web.dev',
    url: 'https://web.dev/',
    category: 'blogs',
    cover: '/images/resources/webdev_500w.png',
  },
  {
    title: 'DEV Community',
    url: 'https://dev.to/',
    category: 'blogs',
    cover: '/images/resources/devto_500w.png',
  },
  /** fonts */
  {
    title: 'Google Fonts',
    url: 'https://fonts.google.com/',
    category: 'fonts',
    cover: '/images/resources/googlefonts_500w.png',
  },
  /** books */
  {
    title: 'You Don\'t Know JS',
    url: 'https://github.com/getify/You-Dont-Know-JS',
    category: 'books',
    cover: '/images/resources/ydkjs_500w.png',
  },
  {
    title: 'JavaScript Design Patterns',
    url: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/',
    category: 'books',
    cover: '/images/resources/js-design-patterns_500w.jpg',
  },

  /** Backgrounds & Colors */
  {
    title: 'SVG Backgrounds',
    url: 'https://www.svgbackgrounds.com//',
    category: 'backgrounds-and-colors',
    cover: '/images/resources/svgbg_500w.jpg',
  },
  {
    title: 'Cool Backgrounds',
    url: 'https://coolbackgrounds.io/',
    category: 'backgrounds-and-colors',
    cover: '/images/resources/coolbg_500w.png',
  },
  {
    title: 'UI gradients',
    url: 'https://uigradients.com/',
    category: 'backgrounds-and-colors',
    cover: '/images/resources/uigradients_500w.jpg',
  },
  {
    title: 'Coolors',
    url: 'https://coolors.co/',
    category: 'backgrounds-and-colors',
    cover: '/images/resources/coolors_500w.png',
  },
  /** PERFORMANCE TOOLS */
  {
    title: 'Lighthouse',
    url: 'https://developers.google.com/web/tools/lighthouse',
    category: 'perf',
    cover: '/images/resources/lighthouse_500w.png',
  },
  {
    title: 'PageSpeed Insight',
    url: 'https://developers.google.com/speed/pagespeed/insights/',
    category: 'perf',
    cover: '/images/resources/pagespeed-insights_500w.jpg',
  },
  {
    title: 'Bundlephobia',
    url: 'https://bundlephobia.com/',
    category: 'perf',
    cover: '/images/resources/bundlephobia_500w.png',
  },
  {
    title: 'TinyPNG',
    url: 'https://tinypng.com/',
    category: 'perf',
    cover: '/images/resources/tinypng_500w.jpg',
  },
  {
    title: 'VideoSmaller',
    url: 'https://www.videosmaller.com/',
    category: 'perf',
    cover: '/images/resources/videosmaller_500w.png',
  },
];
