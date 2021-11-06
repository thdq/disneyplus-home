import vue from '@vitejs/plugin-vue'

export default {
  rollupOptions: {
    input: 'src/main.ts',
    format: 'system',
    preserveEntrySignatures: true
  },
  base: 'http://localhost:9002',
  plugins: [vue({
    template: {
      transformAssetUrls: {
        base: '/src'
      }
    }
  })],
}