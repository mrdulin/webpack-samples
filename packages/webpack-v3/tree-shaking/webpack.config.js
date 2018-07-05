const { join } = require('../util');
const { plugins, entry, output } = require('../webpack.config.base');

module.exports = {
  entry: entry,
  output: output,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [join('app')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                /**
                 * presets使用[es2015, {modules: false}], 使用[latest, {modules: false}]的配置打包后无法tree-shaking, 原因？
                 * -- update --
                 * 使用`babel-preset-latest`也是可以的，见配置
                 * -- --
                 *
                 * 什么是tree shaking?
                 *
                 * tree shaking是将引入模块被使用的代码打包，不打包未使用的代码
                 *
                 * `babel-preset-es2015`包含`babel-plugin-transform-es2015-modules-commonjs`的插件，它会将`ES6`模块系统的的`import`和`export`
                 * 转换成`CommonJS`模块，会让`tree-shaking`失效。因为`webpack`只能在可以被静态分析的模块上进行`tree-shaking`，当一个模块可以被静态分析时，
                 * `webpack`就可以在编译阶段获取到这个模块的内部结构，安全的移除没有被其他模块import的部分。
                 *
                 * 而，`CommonJS`模块不能被静态分析，正因为如此，对于`CommonJS`模块，`webpack`不能进行`tree-shaking`。
                 * `babel`提供了`babel-preset-es2015`的一个配置项-`modules`，文档https://github.com/babel/babel/tree/master/packages/babel-preset-es2015#options
                 *
                 * `modules` - 启用`ES6`模块系统语法转换成其他模块系统的语法（默认值：`commonjs`）。可以设置为`false`, 将禁用模块语法转换。
                 * 或者是`["amd", "umd", "systemjs", "commonjs"]`中的任一个。
                 *
                 * 最后，使用`webpack -p`的`uglifyPlugin`就会将未使用的代码移除。
                 *
                 * 但是最后发现，tree-shaking过后的代码和为经过tree-shaking的代码文件大小在本例子中一样大。
                 * TODO: 将来在大型项目上进行测试，对比。
                 */

                // tree-shaking
                // ['es2015', {modules: false}]

                // without tree-shaking
                // ['es2015']

                // tree-shaking
                ['latest', {
                  es2015: {
                    modules: false
                  }
                }]
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: plugins
};


