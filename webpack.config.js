/*
 * @Date: 2024-03-11 16:41:52
 * @LastEditors: zhangsk
 * @LastEditTime: 2024-03-12 10:17:02
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
    usedExports: "global", //  关闭副作用标识功能
  },
};
