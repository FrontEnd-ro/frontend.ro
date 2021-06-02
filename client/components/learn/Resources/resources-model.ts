export type ResourceDescription = {
  title: string;
  url: string;
  cover: string;
};

export enum ResourceCategory {
  ESSENTIALS = 'esentials',
  IMAGES_VIDEOS = 'images-videos',
  VECTOR = 'vector',
  ICONS = 'icons',
  CSS_SPINNERS = 'css-spinners',
  TUTORIALS = 'tutorials',
  BLOGS = 'blogs',
  FONTS = 'fonts',
  BOOKS = 'books',
  BACKGROUNDS_AND_COLORS = 'backgrounds-and-colors',
  PERFORMANCE = 'perf',
}

export const RESOURCES: Record<ResourceCategory, ResourceDescription[]> = {
  [ResourceCategory.ESSENTIALS]: [
    {
      title: 'MDN',
      url: 'https://developer.mozilla.org/en-US/',
      cover: '/images/resources/mdn_500w.png',
    },
    {
      title: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      cover: '/images/resources/stack-overflow_316w.png',
    },
    {
      title: 'Can I Use',
      url: 'https://caniuse.com/',
      cover: '/images/resources/caniuse_500w.png',
    },
    {
      title: 'W3C Validator',
      url: 'https://validator.w3.org/',
      cover: '/images/resources/w3c-validator_500w.png',
    },
  ],
  [ResourceCategory.IMAGES_VIDEOS]: [
    {
      title: 'Unsplash',
      url: 'https://unsplash.com/',
      cover: '/images/resources/unsplash_500w.png',
    },
    {
      title: 'Pixabay',
      url: 'https://pixabay.com/',
      cover: '/images/resources/pixabay_500w.png',
    },
    {
      title: 'Pexels',
      url: ' https://www.pexels.com/',
      cover: '/images/resources/pexels_500w.jpg',
    },
  ],
  [ResourceCategory.VECTOR]: [
    {
      title: 'Undraw',
      url: ' https://undraw.co/',
      cover: '/images/resources/undraw_500w.png',
    },
    {
      title: 'DrawKit',
      url: 'https://www.drawkit.io/',
      cover: '/images/resources/drawkit_500w.png',
    },
    {
      title: 'Humaaans',
      url: 'https://www.humaaans.com/',
      cover: '/images/resources/humaaans_500w.jpg',
    },
    {
      title: 'The Doodle Library',
      url: 'https://www.thedoodlelibrary.com/',
      cover: '/images/resources/doodle_500w.png',
    },
    {
      title: 'Joe Schmoe',
      url: 'https://joeschmoe.io/',
      cover: '/images/resources/schmoe_500w.png',
    },
  ],
  [ResourceCategory.ICONS]: [
    {
      title: 'Font Awesome',
      url: 'https://fontawesome.com/',
      cover: '/images/resources/fontawesome_500w.png',
    },
    {
      title: 'Eva Icons',
      url: 'https://akveo.github.io/eva-icons/#/',
      cover: '/images/resources/eva-icons_500w.jpg',
    },
    {
      title: 'Ikonate',
      url: 'https://ikonate.com/',
      cover: '/images/resources/ikonate_500w.png',
    },
    {
      title: 'Flaticon',
      url: 'https://www.flaticon.com/',
      cover: '/images/resources/flaticon_500w.jpg',
    },
  ],
  [ResourceCategory.CSS_SPINNERS]: [
    {
      title: 'Epic Spinners',
      url: 'https://epic-spinners.epicmax.co/',
      cover: '/images/resources/epic-spinners_500w.png',
    },
    {
      title: 'Spin Kit',
      url: 'https://tobiasahlin.com/spinkit/',
      cover: '/images/resources/spinkit_500w.jpg',
    },
  ],
  [ResourceCategory.TUTORIALS]: [
    {
      title: 'CSS Dinner',
      url: 'https://flukeout.github.io/',
      cover: '/images/resources/css-dinner_500w.jpg',
    },
    {
      title: 'Flexbox Froggy',
      url: 'https://flexboxfroggy.com/',
      cover: '/images/resources/flexboxfroggy_500w.png',
    },
    {
      title: 'CSS Grid Garden',
      url: 'https://cssgridgarden.com/',
      cover: '/images/resources/css-grid-garden_500w.png',
    },
    {
      title: 'Javascript 30',
      url: 'https://javascript30.com/',
      cover: '/images/resources/javascript30_500w.png',
    },
  ],
  [ResourceCategory.BLOGS]: [
    {
      title: 'Smashing Magazine',
      url: 'https://www.smashingmagazine.com/',
      cover: '/images/resources/smashingmag_500w.png',
    },
    {
      title: 'CSS-Tricks',
      url: 'https://css-tricks.com/',
      cover: '/images/resources/csstricks_500w.png',
    },
    {
      title: 'web.dev',
      url: 'https://web.dev/',
      cover: '/images/resources/webdev_500w.png',
    },
    {
      title: 'DEV Community',
      url: 'https://dev.to/',
      cover: '/images/resources/devto_500w.png',
    },
  ],
  [ResourceCategory.FONTS]: [
    {
      title: 'Google Fonts',
      url: 'https://fonts.google.com/',
      cover: '/images/resources/googlefonts_500w.png',
    },
  ],
  [ResourceCategory.BOOKS]: [
    {
      title: 'You Don\'t Know JS',
      url: 'https://github.com/getify/You-Dont-Know-JS',
      cover: '/images/resources/ydkjs_500w.png',
    },
    {
      title: 'JavaScript Design Patterns',
      url: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/',
      cover: '/images/resources/js-design-patterns_500w.jpg',
    },
  ],
  [ResourceCategory.BACKGROUNDS_AND_COLORS]: [
    {
      title: 'SVG Backgrounds',
      url: 'https://www.svgbackgrounds.com//',
      cover: '/images/resources/svgbg_500w.jpg',
    },
    {
      title: 'Cool Backgrounds',
      url: 'https://coolbackgrounds.io/',
      cover: '/images/resources/coolbg_500w.png',
    },
    {
      title: 'UI gradients',
      url: 'https://uigradients.com/',
      cover: '/images/resources/uigradients_500w.jpg',
    },
    {
      title: 'Coolors',
      url: 'https://coolors.co/',
      cover: '/images/resources/coolors_500w.png',
    },
  ],
  [ResourceCategory.PERFORMANCE]: [
    {
      title: 'Lighthouse',
      url: 'https://developers.google.com/web/tools/lighthouse',
      cover: '/images/resources/lighthouse_500w.png',
    },
    {
      title: 'PageSpeed Insight',
      url: 'https://developers.google.com/speed/pagespeed/insights/',
      cover: '/images/resources/pagespeed-insights_500w.jpg',
    },
    {
      title: 'Bundlephobia',
      url: 'https://bundlephobia.com/',
      cover: '/images/resources/bundlephobia_500w.png',
    },
    {
      title: 'TinyPNG',
      url: 'https://tinypng.com/',
      cover: '/images/resources/tinypng_500w.jpg',
    },
    {
      title: 'VideoSmaller',
      url: 'https://www.videosmaller.com/',
      cover: '/images/resources/videosmaller_500w.png',
    },
  ],
};
