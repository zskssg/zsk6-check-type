
import { Configuration } from "webpack"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"
const __driname = dirname(fileURLToPath(import.meta.url))

export default {
  entry: './src/index.ts',
  output: {
    path: resolve(__driname, "dist"),
    filename: "bundle.js",
    libraryTarget: "umd",  //  全兼容模式
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  mode: "production",
  optimization: {
    usedExports: false, //  关闭副作用标识功能
  }
} as Configuration