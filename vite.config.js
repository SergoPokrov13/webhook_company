import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

const bxServerPlugin = () => ({
  name: "configure-server",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.method === "POST") req.method = "GET";
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [react(), bxServerPlugin(), splitVendorChunkPlugin()],
  base: "./",
});