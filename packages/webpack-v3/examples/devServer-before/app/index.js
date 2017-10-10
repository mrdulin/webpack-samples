const url = '/login';

fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log('res: ', res);
  })
  .catch(e => {
    console.error(e);
  });

fetch('/t1?state=' + Date.now() + '&client_id=abcd')
  .then(res => res.json())
  .then(res => {
    console.log('res: ', res);
  })
  .catch(e => {
    console.error(e);
  });

// const searchObj = window.location.search
//   .replace('?')
//   .split('&')
//   .reduce((pre, cur) => {
//     const [key, value] = cur.split('=');
//     pre[key] = value;
//     return pre;
//   }, {});

const query = window.location.search;

fetch('/oauth' + query)
  .then(res => res.json())
  .then(res => {
    console.log('你好!', res.name);
  })
  .catch(e => {
    console.error(e);
  });
