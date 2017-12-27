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
