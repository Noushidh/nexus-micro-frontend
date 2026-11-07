import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
import webpack from "webpack";

const { ModuleFederationPlugin } = webpack.container;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/main.tsx",

  mode: "development",

  devServer: {
    port: 3001,
    historyApiFallback: true,
    hot: true,

    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "auto",
    clean: true,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "auth",

      filename: "remoteEntry.js",

      exposes: {
        "./Login": "./src/pages/Login.tsx",
        "./Register": "./src/pages/Register.tsx",
        "./ForgotPassword": "./src/pages/ForgotPassword.tsx",
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: "^19.0.0",
        },

        "react-dom": {
          singleton: true,
          requiredVersion: "^19.0.0",
        },
        "react-redux": {
          singleton: true,
          requiredVersion: "^9.0.0",
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: "7.18.5",
        },
        "react-router": {
          singleton: true,
          requiredVersion: "7.18.5",
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
