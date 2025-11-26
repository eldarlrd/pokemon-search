import { defineConfig } from '@rsbuild/core';

// https://rsbuild.rs/config
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  source: {
    entry: {
      index: '/src/main.ts',
    }
  }
});
