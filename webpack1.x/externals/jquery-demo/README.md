# externals

*	本例使用`jquery`和`Chart`演示

*	使用`script`标签通过`cdn`或者链接引入的库，在`bundle`文件前引入，则在`bundle`文件中（各个模块中）可以直接使用(没有`require('jquery')`这样)这些库暴露的全局方法和变量(例如，`$`和`Chart`)，所以，应用可能是正常运行的。
但如果要在模块中使用`require`引用这些库，则需要在externals字段中声明出这些库及其别名。

* 	最终编译后的`bundle`文件中，不会有`jquery`和`Chart`这两个库，可以看到只是将全局变量`$`和`Chart`通过`module.exports`暴露出，这样以后`require`的时候，就是`require`的全局变量

