import { defineConfig } from 'astro/config';

// import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://ontimesolutioncorp.com",
  integrations: [
    compress({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    robotsTxt({
      host: "ontimesolutioncorp.com",
    }),
  ],
})