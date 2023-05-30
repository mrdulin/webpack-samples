const { AsyncSeriesHook } = require('tapable');

const hook = new AsyncSeriesHook(['arg1', 'arg2', 'list'])

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

hook.tapPromise('pluginA', async (arg1, arg2, list) => {
  list.push(`[${new Date().toLocaleTimeString()}] pluginA: ${arg1} ${arg2}`)
  return list
})

hook.tapPromise('pluginB', async (arg1, arg2, list) => {
  await wait(3000);
  list.push(`[${new Date().toLocaleTimeString()}] pluginB: ${arg1} ${arg2}`)
  return list;
})

const list = [];
hook.callAsync('apple', 'banana', list, (err) => {
  if (err) return console.log(err)
  console.log('list: ', list);
  console.log('done');
});

// list:  [
//   '[8:20:28 PM] pluginA: apple banana',
//   '[8:20:31 PM] pluginB: apple banana'
// ]
// done
