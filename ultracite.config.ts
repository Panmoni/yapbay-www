import { defineConfig } from "ultracite";

export default defineConfig({
	// Enable all preset rules
	preset: "recommended",
	// Target file patterns
	include: ["src/**", "scripts/**", "astro.config.mjs", "tailwind.config.cjs"],
	// Exclude patterns
	exclude: ["dist/**", "node_modules/**", ".astro/**"],
});
