import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), viteSingleFile()],
	// base: "./",
	// build: {
	// 	assetsInlineLimit: 100000000, // 所有资源内
	// 	rollupOptions: {
	// 		output: {
	// 			manualChunks: undefined,
	// 		},
	// 	},
	// },
});
