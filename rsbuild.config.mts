import { defineConfig } from '@rsbuild/core';

// https://rsbuild.rs/config
export default defineConfig({
  server: {
    base: '/pokemon-search/'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  source: {
    entry: {
      index: '/src/main.ts'
    }
  },
  html: {
    title: 'Pokémon Search',
    meta: {
      description: 'A Pokémon Search app',
      keywords: 'pokemon',
      author: 'Eldar Pashazade',
      'theme-color': '#fff',
      'og:title': 'Pokémon Search',
      'og:description': 'A Pokémon Search app',
      'og:url': 'https://eldarlrd.is-a.dev/pokemon-search',
      'og:image': 'https://repository-images.githubusercontent.com/'
    },
    tags: [
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css'
        }
      },
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      },
      {
        tag: 'link',
        attrs: {
          rel: 'manifest',
          type: 'application/manifest+json',
          href: 'site.webmanifest'
        }
      }
    ]
  }
});
