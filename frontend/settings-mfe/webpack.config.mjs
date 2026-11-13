import { fileURLToPath } from "url";
import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { ModuleFederationPlugin } = webpack.container;

export default {
  entry: "./src/main.tsx",

  mode: "development",

  devServer: {
    port: 3004,
    historyApiFallback: true,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  output: {
    publicPath: "auto",
    uniqueName: "settings",
    clean: true,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "settings",
      filename: "remoteEntry.js",

      exposes: {
        "./Settings": "./src/pages/Settings.tsx",
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
