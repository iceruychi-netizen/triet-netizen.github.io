import { defineConfig } from 'vite'

// Repo name is not "<username>.github.io", so GitHub Pages serves the site
// under https://iceruychi-netizen.github.io/triet-netizen.github.io/
export default defineConfig({
  base: '/triet-netizen.github.io/',
})
