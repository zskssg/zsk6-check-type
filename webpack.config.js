/*
 * @Date: 2024-03-11 16:41:52
 * @LastEditors: zhangsk
 * @LastEditTime: 2024-03-11 18:10:23
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
      name: "Zsk6CheckType",
      type: "commonjs-module",
      // export: "default",
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
