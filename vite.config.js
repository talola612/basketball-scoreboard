import { defineConfig } from "vite"

export default defineConfig({
+  build: {
+    rollupOptions: {
+      input: {
+        main: "./index.html"   // Vite already adds this automatically
+        // we only need to make sure the script is imported
+      }
+    }
+  },
  plugins: []
})
