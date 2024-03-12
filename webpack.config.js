/*
 * @Date: 2024-03-11 16:41:52
 * @LastEditors: zhangsk
 * @LastEditTime: 2024-03-12 11:21:55
 * @FilePath: \zsk6-check-type\webpack.config.js
 * @Label: Do not edit
 */
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";
const __driname = dirname(fileURLToPath(import.meta.url));
export default {
  entry: "./src/index.ts",
  output: {
    path: resolve(__driname, "dist"),
    filename: "bundle.js",
    clean: true,
    library: {
      type: "module",
    },
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    mainFields: ["module", "main"],
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
  mode: "development",
  optimization: {
    usedExports: false, //  是否 Tree Shaking
  },
};
