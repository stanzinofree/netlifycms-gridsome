// Import main css
import '~/assets/style/index.scss'
//require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");
require("~/assets/style/shade.css");
//require("gridsome-plugin-remark-prismjs-all/themes/solarized.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");
require("prismjs/plugins/command-line/prism-command-line.css");

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue';

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}