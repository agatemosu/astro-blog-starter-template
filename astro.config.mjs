// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	output: "static",
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
