module.exports = {
  content: ["./src/**/*.tsx"], // busca de arquivos
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257e6'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
