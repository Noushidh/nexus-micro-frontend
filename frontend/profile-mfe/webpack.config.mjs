import path from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const { ModuleFederationPlugin } = webpack.container;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/main.tsx",

  mode: "development",

  devServer: {
    port: 3003,
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
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsconfig.json"),
          },
        },
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "profile",

      filename: "remoteEntry.js",

      exposes: {
        "./Profile": "./src/pages/Profile.tsx",
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: "^19.3.1",
        },

        "react-dom": {
          singleton: true,
          requiredVersion: "^19.3.1",
        },

        "react-redux": {
          singleton: true,
          requiredVersion: "^9.3.1",
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
      template: "./index.html",
    }),
  ],
};
