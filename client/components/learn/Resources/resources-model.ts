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
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/mdn_500w.png`,
    },
    {
      title: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/stack-overflow_316w.png`,
    },
    {
      title: 'Can I Use',
      url: 'https://caniuse.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/caniuse_500w.png`,
    },
    {
      title: 'W3C Validator',
      url: 'https://validator.w3.org/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/w3c-validator_500w.png`,
    },
  ],
  [ResourceCategory.IMAGES_VIDEOS]: [
    {
      title: 'Unsplash',
      url: 'https://unsplash.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/unsplash_500w.png`,
    },
    {
      title: 'Pixabay',
      url: 'https://pixabay.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/pixabay_500w.png`,
    },
    {
      title: 'Pexels',
      url: ' https://www.pexels.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/pexels_500w.jpg`,
    },
    {
      title: 'Coverr',
      url: 'https://coverr.co/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/coverr_500w.png`,
    },
  ],
  [ResourceCategory.VECTOR]: [
    {
      title: 'Undraw',
      url: ' https://undraw.co/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/undraw_500w.png`,
    },
    {
      title: 'DrawKit',
      url: 'https://www.drawkit.io/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/drawkit_500w.png`,
    },
    {
      title: 'Humaaans',
      url: 'https://www.humaaans.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/humaaans_500w.jpg`,
    },
    {
      title: 'The Doodle Library',
      url: 'https://www.thedoodlelibrary.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/doodle_500w.png`,
    },
    {
      title: 'Joe Schmoe',
      url: 'https://joeschmoe.io/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/schmoe_500w.png`,
    },
  ],
  [ResourceCategory.ICONS]: [
    {
      title: 'Font Awesome',
      url: 'https://fontawesome.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/fontawesome_500w.png`,
    },
    {
      title: 'Google Material Icons',
      url: 'https://fonts.google.com/icons',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/material-icons_500w.png`,
    },
    {
      title: 'Eva Icons',
      url: 'https://akveo.github.io/eva-icons/#/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/eva-icons_500w.jpg`,
    },
    {
      title: 'Ikonate',
      url: 'https://ikonate.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/ikonate_500w.png`,
    },
    {
      title: 'Flaticon',
      url: 'https://www.flaticon.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/flaticon_500w.jpg`,
    },
    {
      title: 'Noun Project',
      url: 'https://thenounproject.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/nounproject_500w.png`,
    },
  ],
  [ResourceCategory.CSS_SPINNERS]: [
    {
      title: 'Epic Spinners',
      url: 'https://epic-spinners.epicmax.co/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/epic-spinners_500w.png`,
    },
    {
      title: 'Spin Kit',
      url: 'https://tobiasahlin.com/spinkit/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/spinkit_500w.jpg`,
    },
    {
      title: 'Loading.io',
      url: 'https://loading.io/css/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/loading-io_500w.png`,
    },
  ],
  [ResourceCategory.TUTORIALS]: [
    {
      title: 'CSS Dinner',
      url: 'https://flukeout.github.io/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/css-dinner_500w.jpg`,
    },
    {
      title: 'Flexbox Froggy',
      url: 'https://flexboxfroggy.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/flexboxfroggy_500w.png`,
    },
    {
      title: 'Flexbox Defense',
      url: 'http://www.flexboxdefense.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/flexbox-defense_500w.png`,
    },
    {
      title: 'CSS Grid Garden',
      url: 'https://cssgridgarden.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/css-grid-garden_500w.png`,
    },
    {
      title: 'Javascript 30',
      url: 'https://javascript30.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/javascript30_500w.png`,
    },
  ],
  [ResourceCategory.BLOGS]: [
    {
      title: 'Smashing Magazine',
      url: 'https://www.smashingmagazine.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/smashingmag_500w.png`,
    },
    {
      title: 'CSS-Tricks',
      url: 'https://css-tricks.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/csstricks_500w.png`,
    },
    {
      title: 'web.dev',
      url: 'https://web.dev/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/webdev_500w.png`,
    },
    {
      title: 'DEV Community',
      url: 'https://dev.to/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/devto_500w.png`,
    },
  ],
  [ResourceCategory.FONTS]: [
    {
      title: 'Google Fonts',
      url: 'https://fonts.google.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/googlefonts_500w.png`,
    },
    {
      title: 'Fontshare',
      url: 'https://www.fontshare.com',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/fontshare_500w.png`,
    },
    {
      title: 'Fontesk',
      url: 'https://fontesk.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/fontesk_500w.png`,
    },
    {
      title: 'DaFont',
      url: 'https://www.dafont.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/dafont_500w.png`,
    },
  ],
  [ResourceCategory.BOOKS]: [
    {
      title: 'You Don\'t Know JS',
      url: 'https://github.com/getify/You-Dont-Know-JS',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/ydkjs_500w.png`,
    },
    {
      title: 'JavaScript Design Patterns',
      url: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/js-design-patterns_500w.jpg`,
    },
    {
      title: 'High Perf Browser Networking',
      url: 'https://hpbn.co/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/hpbn_600w.png`,
    },
    {
      title: 'JavaScript Notes',
      url: 'https://goalkicker.com/JavaScriptBook/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/javascript-notes_350w.png`,
    },
  ],
  [ResourceCategory.BACKGROUNDS_AND_COLORS]: [
    {
      title: 'Coolors',
      url: 'https://coolors.co/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/coolors_500w.png`,
    },
    {
      title: 'Color Hunt',
      url: 'https://colorhunt.co/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/color-hunt_500w.png`,
    },
    {
      title: 'UI gradients',
      url: 'https://uigradients.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/uigradients_500w.jpg`,
    },
    {
      title: 'Cool Backgrounds',
      url: 'https://coolbackgrounds.io/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/coolbg_500w.png`,
    },
    {
      title: 'SVG Backgrounds',
      url: 'https://www.svgbackgrounds.com//',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/svgbg_500w.jpg`,
    },
  ],
  [ResourceCategory.PERFORMANCE]: [
    {
      title: 'Lighthouse',
      url: 'https://developers.google.com/web/tools/lighthouse',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/lighthouse_500w.png`,
    },
    {
      title: 'PageSpeed Insight',
      url: 'https://developers.google.com/speed/pagespeed/insights/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/pagespeed-insights_500w.jpg`,
    },
    {
      title: 'Bundlephobia',
      url: 'https://bundlephobia.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/bundlephobia_500w.png`,
    },
    {
      title: 'TinyPNG',
      url: 'https://tinypng.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/tinypng_500w.jpg`,
    },
    {
      title: 'VideoSmaller',
      url: 'https://www.videosmaller.com/',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/resources/videosmaller_500w.png`,
    },
  ],
};
