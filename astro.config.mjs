import { defineConfig } from 'astro/config';

// import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [image({}), compress({ serviceEntryPoint: "@astrojs/image/sharp" })],
})