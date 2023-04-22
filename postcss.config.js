import autoprefixer from "autoprefixer";
import purgecss from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    autoprefixer(),
    // purgecss({
    //   content: ["./**/**/**/**/**/*.{astro,ts,tsx,html}"],
    // }),
  ],
};
