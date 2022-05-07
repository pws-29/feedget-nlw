/** Ferramenta que integra de forma automática com o vite
 * e observa os arquivos css da aplicação.
 * Toda vez que o css for alterado, o post recompila o css, demaneira
 * que o browser consuma o arquivo
 * */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
