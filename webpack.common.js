const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: {
    main: './main.js',
    'pages/glossary/glossary': './pages/glossary/glossary.js',
    'pages/articles/articles': './pages/articles/articles.js',
    'pages/quiz/quiz': './pages/quiz/quiz.js',
    'pages/quiz/quiz-run': './pages/quiz/quiz-run.js',
    'articles/article': './articles/article.js',
    'articles/menedzhment/prodjekt/article-strukturizaciya-timlida': './articles/menedzhment/prodjekt/article-strukturizaciya-timlida.jsx',
    'articles/menedzhment/prodjekt/article-project-charter': './articles/menedzhment/prodjekt/article-project-charter.jsx',
    'articles/menedzhment/prodjekt/article-kak-vse-uspet': './articles/menedzhment/prodjekt/article-kak-vse-uspet.jsx',
    'articles/menedzhment/prodjekt/article-sertifikacii-pmp': './articles/menedzhment/prodjekt/article-sertifikacii-pmp.jsx',
    'articles/menedzhment/produkt/article-razbor-prd': './articles/menedzhment/produkt/article-razbor-prd.jsx',
    'articles/menedzhment/produkt/article-b2b-vs-b2c': './articles/menedzhment/produkt/article-b2b-vs-b2c.jsx',
    'articles/menedzhment/produkt/article-portfolio-pm': './articles/menedzhment/produkt/article-portfolio-pm.jsx',
    'articles/menedzhment/produkt/article-google-stadia': './articles/menedzhment/produkt/article-google-stadia.jsx',
    'articles/tekhnicheskoe/razrabotka/article-sovremennyy-react': './articles/tekhnicheskoe/razrabotka/article-sovremennyy-react.jsx',
    'articles/tvorcheskoe/produkt-dizayn/article-asinkhronnost-backend': './articles/tvorcheskoe/produkt-dizayn/article-asinkhronnost-backend.jsx',
    'articles/tekhnicheskoe/razrabotka/article-oshibki-design-system': './articles/tekhnicheskoe/razrabotka/article-oshibki-design-system.jsx',
    'articles/tekhnicheskoe/devops/article-gitops': './articles/tekhnicheskoe/devops/article-gitops.jsx',
    'articles/tekhnicheskoe/geym/article-checklist-game-release': './articles/tekhnicheskoe/geym/article-checklist-game-release.jsx',
    'articles/tekhnicheskoe/testirovanie/article-framevork-avtotestov': './articles/tekhnicheskoe/testirovanie/article-framevork-avtotestov.jsx',
    'articles/tekhnicheskoe/testirovanie/article-kontraktnoe-testirovanie': './articles/tekhnicheskoe/testirovanie/article-kontraktnoe-testirovanie.jsx',
    'articles/tekhnicheskoe/geym/article-ai-v-igrah': './articles/tekhnicheskoe/geym/article-ai-v-igrah.jsx',
    'articles/tekhnicheskoe/devops/article-oblachnaya-vs-onprem': './articles/tekhnicheskoe/devops/article-oblachnaya-vs-onprem.jsx',
    'articles/tekhnicheskoe/geym/article-igrovoy-dvijok': './articles/tekhnicheskoe/geym/article-igrovoy-dvijok.jsx',
    'articles/tekhnicheskoe/razrabotka/article-bezopasnost-backend-api': './articles/tekhnicheskoe/razrabotka/article-bezopasnost-backend-api.jsx',
    'articles/tekhnicheskoe/devops/article-incident-management': './articles/tekhnicheskoe/devops/article-incident-management.jsx',
    'articles/tekhnicheskoe/devops/article-kubernetes-zamena': './articles/tekhnicheskoe/devops/article-kubernetes-zamena.jsx',
    'articles/tekhnicheskoe/geym/article-godot-v-prodakshene': './articles/tekhnicheskoe/geym/article-godot-v-prodakshene.jsx',
    'articles/tekhnicheskoe/testirovanie/article-testy-na-gody': './articles/tekhnicheskoe/testirovanie/article-testy-na-gody.jsx',
    'articles/tekhnicheskoe/geym/article-arkhitektura-igrovykh': './articles/tekhnicheskoe/geym/article-arkhitektura-igrovykh.jsx',
    'articles/tvorcheskoe/produkt-dizayn/article-keysy-redizajna': './articles/tvorcheskoe/produkt-dizayn/article-keysy-redizajna.jsx',
    'articles/tekhnicheskoe/razrabotka/article-bff-backend-for-frontend': './articles/tekhnicheskoe/razrabotka/article-bff-backend-for-frontend.jsx',
    'articles/tekhnicheskoe/testirovanie/article-agile-testirovanie': './articles/tekhnicheskoe/testirovanie/article-agile-testirovanie.jsx',
    'articles/tekhnicheskoe/testirovanie/article-avtomatizaciya-testirovaniya': './articles/tekhnicheskoe/testirovanie/article-avtomatizaciya-testirovaniya.jsx',
    'articles/tvorcheskoe/ux-ui/article-dizayn-slozhnykh-interfeysov': './articles/tvorcheskoe/ux-ui/article-dizayn-slozhnykh-interfeysov.jsx',
    'articles/tvorcheskoe/ux-ui/article-adaptivnyy-ux': './articles/tvorcheskoe/ux-ui/article-adaptivnyy-ux.jsx',
    'articles/tvorcheskoe/ux-ui/article-ux-dlya-mezhdunarodnykh-produktov': './articles/tvorcheskoe/ux-ui/article-ux-dlya-mezhdunarodnykh-produktov.jsx',
    'articles/tvorcheskoe/ux-ui/article-oshibki-ux-ui-dizaynerov': './articles/tvorcheskoe/ux-ui/article-oshibki-ux-ui-dizaynerov.jsx',
    'articles/tvorcheskoe/ux-ui/article-Dizayn-dlya-oshibok:-kak-prevratit-feyly-polzovatelya-v-pozitivnyy-opyt': './articles/tvorcheskoe/ux-ui/article-Dizayn-dlya-oshibok:-kak-prevratit-feyly-polzovatelya-v-pozitivnyy-opyt.jsx',
    'articles/tvorcheskoe/produkt-dizayn/article-produktovyy-dizayn-startapy-vs-krupnye-kompanii': './articles/tvorcheskoe/produkt-dizayn/article-produktovyy-dizayn-startapy-vs-krupnye-kompanii.jsx',
    'articles/tvorcheskoe/produkt-dizayn/article-product-thinking': './articles/tvorcheskoe/produkt-dizayn/article-product-thinking.jsx',
    'articles/tvorcheskoe/produkt-dizayn/article-produktovyy-dizayn-b2b-vs-b2c': './articles/tvorcheskoe/produkt-dizayn/article-produktovyy-dizayn-b2b-vs-b2c.jsx',
    'articles/tvorcheskoe/produkt-dizayn/article-user-journey-multiplatform': './articles/tvorcheskoe/produkt-dizayn/article-user-journey-multiplatform.jsx',
    'articles/tvorcheskoe/motion/article-bazovye-instrumenty-motion': './articles/tvorcheskoe/motion/article-bazovye-instrumenty-motion.jsx',
    'articles/tvorcheskoe/motion/article-uskorit-prototipirovanie-animaciy': './articles/tvorcheskoe/motion/article-uskorit-prototipirovanie-animaciy.jsx',
    'articles/tvorcheskoe/motion/article-testirovanie-animaciy': './articles/tvorcheskoe/motion/article-testirovanie-animaciy.jsx',
    'articles/tvorcheskoe/motion/article-motion-prototipy-workflow': './articles/tvorcheskoe/motion/article-motion-prototipy-workflow.jsx',
    'articles/tvorcheskoe/motion/article-motion-dlya-dashbordov': './articles/tvorcheskoe/motion/article-motion-dlya-dashbordov.jsx',
    'footer-loader': './footer-loader.js',
    'footer-animation': './footer-animation.js'
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
        { from: 'index.html', to: 'index.html' },
        {
          from: 'pages',
          to: 'pages',
          globOptions: {
            ignore: [
              '**/glossary.js',
              '**/articles.js',
              '**/quiz.js',
              '**/quiz-run.js'
            ]
          }
        },
        {
          from: 'articles',
          to: 'articles',
          globOptions: { ignore: ['**/article.js', '**/*.jsx'] }
        },
        { from: 'style.css', to: 'style.css' },
        { from: 'pages/themes/themes.css', to: 'pages/themes/themes.css' },
        { from: 'pages/glossary/glossary.css', to: 'pages/glossary/glossary.css' },
        { from: 'pages/articles/articles.css', to: 'pages/articles/articles.css' },
        {
          from: 'pages/articles/articles-blocks.css',
          to: 'pages/articles/articles-blocks.css'
        },
        { from: 'pages/quiz/quiz.css', to: 'pages/quiz/quiz.css' },
        { from: 'pages/quiz/quiz-run.css', to: 'pages/quiz/quiz-run.css' },
        { from: 'articles/article.css', to: 'articles/article.css' },
        { from: 'footer.html', to: 'footer.html' },
        { from: 'image', to: 'image' },
        { from: 'fonts', to: 'fonts' }
      ]
    })
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()]
  }
}
