const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./main.js",
    glossary: "./glossary.js",
    articles: "./articles.js",
    quiz: "./quiz.js",
    "quiz-run": "./quiz-run.js",
    "footer-loader": "./footer-loader.js",
    "footer-animation": "./footer-animation.js",
    "articles/article": "./articles/article.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "index.html", to: "index.html" },
        { from: "themes.html", to: "themes.html" },
        { from: "glossary.html", to: "glossary.html" },
        { from: "articles.html", to: "articles.html" },
        { from: "quiz.html", to: "quiz.html" },
        { from: "quiz-run.html", to: "quiz-run.html" },
        { from: "footer.html", to: "footer.html" },
        {
          from: "articles",
          to: "articles",
          globOptions: { ignore: ["**/article.js"] },
        },
        { from: "style.css", to: "style.css" },
        { from: "themes.css", to: "themes.css" },
        { from: "glossary.css", to: "glossary.css" },
        { from: "articles.css", to: "articles.css" },
        { from: "articles-blocks.css", to: "articles-blocks.css" },
        { from: "quiz.css", to: "quiz.css" },
        { from: "quiz-run.css", to: "quiz-run.css" },
        { from: "image", to: "image" },
      ],
    }),
  ],
};
