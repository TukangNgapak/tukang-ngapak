// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    envPrefix: ['RESEND_'], // agar RESEND_API_KEY bisa diakses dari process.env
  },

  integrations: [react()],
  adapter: netlify(),

});