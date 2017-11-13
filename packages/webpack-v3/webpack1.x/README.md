# webpack1.x

_A webpack1.x playground_

__*** 该仓库基本不再维护，转移到新的webpack2.x仓库继续搞 ***__

__环境:__

*	`node`->`v6.2.0`
*	`npm`->`3.8.9`
* `npm install -g npm-check-updates`，用来升级`node_module`。会更新`package.json`。

__TODO:__

- [ ] `htmlWebpackPlugin`注入`bundle`文件顺序问题
- [ ] `css-module`的`composes`导入`webpack` `alias`映射的`css`模块，或者通过相对路径引入`css`模块的某一个`class`没有生效的问题。
- [x] `webpack`打包非`cmd`和`amd`模块，如`zepto`问题

__FAQ:__

*   在`webpack`打包环境中，使用`import`和`require`引入`node_modules`中的模块时，`webpack`会先根据模块的名称找`node_modules`下对应的
    同名文件夹，根据该模块的`package.json`中的`main`字段来引入指定的文件，如果没有`main`字段，则会找这个目录下的`index.js`文件。

*   要执行`.sh`脚本，有两种方式，一、`sh file.sh`，二、`chmod +x file.sh` -> `./file.sh`

