import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      template: "treemap", // Specify the visualization template (treemap or sunburst)
      open: true, // Open the report automatically in the browser
      gzipSize: true, // Show gzip size information
      brotliSize: true, // Show brotli size information
      filename: "analyse.html", // Specify the output file name for the analysis report
    }),
  ],
});