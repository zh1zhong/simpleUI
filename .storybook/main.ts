import { config } from "@storybook/addon-actions"
const path = require("path")
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    // '@storybook/preset-scss',
  ],
  // 自定义的webpack配置
  // webpackFinal: async (config, { configType }) => {
  //   config.module.ex
  //   // config.module.rules.push({
  //   //   test: /\.scss$/,
  //   //   use: ['style-loader', 'css-loader', 'sass-loader'],
  //   //   include: path.resolve(__dirname, '../')
  //   // })
  //   return config
  // },
  // 不配置下面参数自动类型推断依然有效
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     allowSyntheticDefaultImports: false,
  //     esModuleInterop: false,
  //     propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
  //     include: ['**/**.ts', '**/**.tsx'],
  //   },
  // },
  "framework": "@storybook/react",
  "core": {
    "builder": 'webpack5',
    // "builder": "@storybook/builder-webpack5"
  }
}