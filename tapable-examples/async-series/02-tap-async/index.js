const { AsyncSeriesHook } = require('tapable');

const hook = new AsyncSeriesHook(['arg1', 'arg2', 'list'])

hook.tapAsync('pluginA', (arg1, arg2, list, callback) => {
  list.push(`[${new Date().toLocaleTimeString()}] pluginA: ${arg1} ${arg2}`)
  callback();
})

hook.tapAsync('pluginB', (arg1, arg2, list, callback) => {
  setTimeout(() => {
    list.push(`[${new Date().toLocaleTimeString()}] pluginB: ${arg1} ${arg2}`)
    callback();
  }, 3000)
})

const list = [];
hook.callAsync('apple', 'banana', list, (err) => {
  if (err) return console.log(err)
  console.log('list: ', list);
  console.log('done');
});

// list:  [
//   '[8:15:02 PM] pluginA: apple banana',
//   '[8:15:05 PM] pluginB: apple banana'
// ]
// done
