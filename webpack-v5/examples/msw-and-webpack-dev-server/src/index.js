window.onload = function () {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mocks/browser");
    worker.start();
  }

  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};
