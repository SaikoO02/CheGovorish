const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: {
    main: './src/main.js',
    'pages/glossary/glossary': './src/pages/glossary/glossary.js',
    'pages/articles/articles': './src/pages/articles/articles.js',
    'pages/quiz/quiz': './src/pages/quiz/quiz.js',
    'pages/quiz/quiz-run': './src/pages/quiz/quiz-run.js',
    'pages/quiz/quiz-engine': './src/pages/quiz/quiz-engine.js',
    'quizzes/tekhnicheskoe/quiz-aytishnyy-termin': './src/quizzes/tekhnicheskoe/quiz-aytishnyy-termin.js',
    'quizzes/tekhnicheskoe/quiz-komponenty-v-figma': './src/quizzes/tekhnicheskoe/quiz-komponenty-v-figma.js',
    'quizzes/tekhnicheskoe/quiz-kakaya-knopka': './src/quizzes/tekhnicheskoe/quiz-kakaya-knopka.js',
    'pages/quiz/quiz-engine-scored': './src/pages/quiz/quiz-engine-scored.js',
    'quizzes/tekhnicheskoe/quiz-tvoy-uroven-ustalosti': './src/quizzes/tekhnicheskoe/quiz-tvoy-uroven-ustalosti.js',
    'quizzes/tekhnicheskoe/quiz-shutki-aytishnikov': './src/quizzes/tekhnicheskoe/quiz-shutki-aytishnikov.js',
    'quizzes/tvorcheskoe/quiz-ugadai-sayt-po-maketu': './src/quizzes/tvorcheskoe/quiz-ugadai-sayt-po-maketu.js',
    'quizzes/tvorcheskoe/quiz-tsvet-v-interfeysakh': './src/quizzes/tvorcheskoe/quiz-tsvet-v-interfeysakh.js',
    'quizzes/tvorcheskoe/quiz-ugadai-plagin-dlya-figma': './src/quizzes/tvorcheskoe/quiz-ugadai-plagin-dlya-figma.js',
    'quizzes/tvorcheskoe/quiz-jtbd': './src/quizzes/tvorcheskoe/quiz-jtbd.js',
    'quizzes/tvorcheskoe/quiz-etichnyy-dizayn': './src/quizzes/tvorcheskoe/quiz-etichnyy-dizayn.js',
    'quizzes/menedzhment/quiz-kakoy-ty-menedzher': './src/quizzes/menedzhment/quiz-kakoy-ty-menedzher.js',
    'quizzes/menedzhment/quiz-ugadai-agile-termin': './src/quizzes/menedzhment/quiz-ugadai-agile-termin.js',
    'articles/article': './src/articles/article.js',
    'articles/menedzhment/prodjekt/article-strukturizaciya-timlida': './src/articles/menedzhment/prodjekt/article-strukturizaciya-timlida.jsx',
    'articles/menedzhment/prodjekt/article-project-charter': './src/articles/menedzhment/prodjekt/article-project-charter.jsx',
    'articles/menedzhment/prodjekt/article-kak-vse-uspet': './src/articles/menedzhment/prodjekt/article-kak-vse-uspet.jsx',
    'articles/menedzhment/prodjekt/article-sertifikacii-pmp': './src/articles/menedzhment/prodjekt/article-sertifikacii-pmp.jsx',
    'articles/menedzhment/produkt/article-razbor-prd': './src/articles/menedzhment/produkt/article-razbor-prd.jsx',
    'articles/menedzhment/produkt/article-b2b-vs-b2c': './src/articles/menedzhment/produkt/article-b2b-vs-b2c.jsx',
    'articles/menedzhment/produkt/article-portfolio-pm': './src/articles/menedzhment/produkt/article-portfolio-pm.jsx',
    'articles/menedzhment/produkt/article-google-stadia': './src/articles/menedzhment/produkt/article-google-stadia.jsx',
    'articles/menedzhment/produkt/article-product-market-fit': './src/articles/menedzhment/produkt/article-product-market-fit.jsx',
    'articles/menedzhment/timlid/article-vygoranie-razrabotchika': './src/articles/menedzhment/timlid/article-vygoranie-razrabotchika.jsx',
    'articles/menedzhment/timlid/article-daily-standup': './src/articles/menedzhment/timlid/article-daily-standup.jsx',
    'articles/menedzhment/timlid/article-pervye-90-dney': './src/articles/menedzhment/timlid/article-pervye-90-dney.jsx',
    'articles/menedzhment/timlid/article-mikro-vs-makro-menedzhment': './src/articles/menedzhment/timlid/article-mikro-vs-makro-menedzhment.jsx',
    'articles/menedzhment/timlid/article-sindrom-samozvanca': './src/articles/menedzhment/timlid/article-sindrom-samozvanca.jsx',
    'articles/tekhnicheskoe/razrabotka/article-sovremennyy-react': './src/articles/tekhnicheskoe/razrabotka/article-sovremennyy-react.jsx',
    'articles/tvorcheskoe/produkt-dizayn/article-asinkhronnost-backend': './src/articles/tvorcheskoe/produkt-dizayn/article-asinkhronnost-backend.jsx',
    'articles/tekhnicheskoe/razrabotka/article-oshibki-design-system': './src/articles/tekhnicheskoe/razrabotka/article-oshibki-design-system.jsx',
    'articles/tekhnicheskoe/devops/article-gitops': './src/articles/tekhnicheskoe/devops/article-gitops.jsx',
    'articles/tekhnicheskoe/geym/article-checklist-game-release': './src/articles/tekhnicheskoe/geym/article-checklist-game-release.jsx',
    'articles/tekhnicheskoe/testirovanie/article-framevork-avtotestov': './src/articles/tekhnicheskoe/testirovanie/article-framevork-avtotestov.jsx',
    'articles/tekhnicheskoe/testirovanie/article-kontraktnoe-testirovanie': './src/articles/tekhnicheskoe/testirovanie/article-kontraktnoe-testirovanie.jsx',
    'articles/tekhnicheskoe/geym/article-ai-v-igrah': './src/articles/tekhnicheskoe/geym/article-ai-v-igrah.jsx',
    'articles/tekhnicheskoe/devops/article-oblachnaya-vs-onprem': './src/articles/tekhnicheskoe/devops/article-oblachnaya-vs-onprem.jsx',
    'articles/tekhnicheskoe/geym/article-igrovoy-dvijok': './src/articles/tekhnicheskoe/geym/article-igrovoy-dvijok.jsx',
    'articles/tekhnicheskoe/razrabotka/article-bezopasnost-backend-api': './src/articles/tekhnicheskoe/razrabotka/article-bezopasnost-backend-api.jsx',
    'articles/tekhnicheskoe/devops/article-incident-management': './src/articles/tekhnicheskoe/devops/article-incident-management.jsx',
    'articles/tekhnicheskoe/devops/article-kubernetes-zamena': './src/articles/tekhnicheskoe/devops/article-kubernetes-zamena.jsx',
    'articles/tekhnicheskoe/geym/article-godot-v-prodakshene': './src/articles/tekhnicheskoe/geym/article-godot-v-prodakshene.jsx',
    'articles/tekhnicheskoe/testirovanie/article-testy-na-gody': './src/articles/tekhnicheskoe/testirovanie/article-testy-na-gody.jsx',
    'articles/tekhnicheskoe/geym/article-arkhitektura-igrovykh': './src/articles/tekhnicheskoe/geym/article-arkhitektura-igrovykh.jsx',
    'articles/tvorcheskoe/produkt-dizayn/article-keysy-redizajna': './src/articles/tvorcheskoe/produkt-dizayn/article-keysy-redizajna.jsx',
    'articles/tekhnicheskoe/razrabotka/article-bff-backend-for-frontend': './src/articles/tekhnicheskoe/razrabotka/article-bff-backend-for-frontend.jsx',
    'articles/tekhnicheskoe/testirovanie/article-agile-testirovanie': './src/articles/tekhnicheskoe/testirovanie/article-agile-testirovanie.jsx',
    'articles/tekhnicheskoe/testirovanie/article-avtomatizaciya-testirovaniya': './src/articles/tekhnicheskoe/testirovanie/article-avtomatizaciya-testirovaniya.jsx',
    'articles/tvorcheskoe/ux-ui/article-dizayn-slozhnykh-interfeysov': './src/articles/tvorcheskoe/ux-ui/article-dizayn-slozhnykh-interfeysov.jsx',
    'articles/tvorcheskoe/ux-ui/article-adaptivnyy-ux': './src/articles/tvorcheskoe/ux-ui/article-adaptivnyy-ux.jsx',
    'articles/tvorcheskoe/ux-ui/article-ux-dlya-mezhdunarodnykh-produktov': './src/articles/tvorcheskoe/ux-ui/article-ux-dlya-mezhdunarodnykh-produktov.jsx',
    'articles/tvorcheskoe/ux-ui/article-oshibki-ux-ui-dizaynerov': './src/articles/tvorcheskoe/ux-ui/article-oshibki-ux-ui-dizaynerov.jsx',
    'articles/tvorcheskoe/ux-ui/article-Dizayn-dlya-oshibok:-kak-prevratit-feyly-polzovatelya-v-pozitivnyy-opyt': './src/articles/tvorcheskoe/ux-ui/article-Dizayn-dlya-oshibok:-kak-prevratit-feyly-polzovatelya-v-pozitivnyy-opyt.jsx',
    'articles/tvorcheskoe/produkt-dizayn/article-produktovyy-dizayn-startapy-vs-krupnye-kompanii': './src/articles/tvorcheskoe/produkt-dizayn/article-produktovyy-dizayn-startapy-vs-krupnye-kompanii.jsx',
    'articles/tvorcheskoe/produkt-dizayn/article-product-thinking': './src/articles/tvorcheskoe/produkt-dizayn/article-product-thinking.jsx',
    'articles/tvorcheskoe/produkt-dizayn/article-produktovyy-dizayn-b2b-vs-b2c': './src/articles/tvorcheskoe/produkt-dizayn/article-produktovyy-dizayn-b2b-vs-b2c.jsx',
    'articles/tvorcheskoe/produkt-dizayn/article-user-journey-multiplatform': './src/articles/tvorcheskoe/produkt-dizayn/article-user-journey-multiplatform.jsx',
    'articles/tvorcheskoe/motion/article-bazovye-instrumenty-motion': './src/articles/tvorcheskoe/motion/article-bazovye-instrumenty-motion.jsx',
    'articles/tvorcheskoe/motion/article-uskorit-prototipirovanie-animaciy': './src/articles/tvorcheskoe/motion/article-uskorit-prototipirovanie-animaciy.jsx',
    'articles/tvorcheskoe/motion/article-testirovanie-animaciy': './src/articles/tvorcheskoe/motion/article-testirovanie-animaciy.jsx',
    'articles/tvorcheskoe/motion/article-motion-prototipy-workflow': './src/articles/tvorcheskoe/motion/article-motion-prototipy-workflow.jsx',
    'articles/tvorcheskoe/motion/article-motion-dlya-dashbordov': './src/articles/tvorcheskoe/motion/article-motion-dlya-dashbordov.jsx',
    'footer/footer-loader': './src/footer/footer-loader.js',
    'footer/footer-animation': './src/footer/footer-animation.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/index.html', to: 'index.html' },
        {
          from: 'src/pages',
          to: 'pages',
          globOptions: {
            ignore: [
              '**/glossary.js',
              '**/articles.js',
              '**/quiz.js',
              '**/quiz-run.js',
              '**/quiz-engine.js',
              '**/quiz-engine-scored.js'
            ]
          }
        },
        {
          from: 'src/quizzes',
          to: 'quizzes',
          globOptions: { ignore: ['**/*.js'] }
        },
        {
          from: 'src/articles',
          to: 'articles',
          globOptions: { ignore: ['**/article.js', '**/*.jsx'] }
        },
        { from: 'src/style.css', to: 'style.css' },
        { from: 'src/pages/themes/themes.css', to: 'pages/themes/themes.css' },
        { from: 'src/pages/glossary/glossary.css', to: 'pages/glossary/glossary.css' },
        { from: 'src/pages/articles/articles.css', to: 'pages/articles/articles.css' },
        { from: 'src/pages/articles/articles-blocks.css', to: 'pages/articles/articles-blocks.css' },
        { from: 'src/pages/quiz/quiz.css', to: 'pages/quiz/quiz.css' },
        { from: 'src/pages/quiz/quiz-run.css', to: 'pages/quiz/quiz-run.css' },
        { from: 'src/articles/article.css', to: 'articles/article.css' },
        { from: 'src/footer/footer.html', to: 'footer/footer.html' },
        { from: 'src/image', to: 'image' }
      ]
    })
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()]
  }
}
