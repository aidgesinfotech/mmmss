import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Runs the same /api handler Vercel uses, inside the Vite dev server.
function devApi() {
  return {
    name: "dev-api",
    configureServer(server) {
      server.middlewares.use("/api", async (req, res) => {
        try {
          const { default: handler } = await server.ssrLoadModule("/server/app.js");
          req.url = "/api" + req.url;
          await handler(req, res);
        } catch (e) {
          console.error(e);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: e.message }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  return {
    plugins: [react(), devApi()],
    server: { port: 5173 },
  };
});
