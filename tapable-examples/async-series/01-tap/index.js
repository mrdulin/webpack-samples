const { AsyncSeriesHook } = require('tapable');

const hook = new AsyncSeriesHook(['arg1', 'arg2'])

hook.tap('pluginA', (arg1, arg2) => {
  console.log('pluginA: ', arg1, arg2)
})

hook.tap('pluginB', (arg1, arg2) => {
  console.log('pluginB: ', arg1, arg2)
})

hook.callAsync('apple', 'banana', err => {
  if (err) return console.log(err)
  console.log('done')
});
