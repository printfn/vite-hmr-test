import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			components: resolve("./src/components/"),
		},
	},
	plugins: [react()],
});
