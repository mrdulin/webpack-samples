window.onload = function () {
  fetch("http://localhost:9000/api/cool/users/1")
    .then((res) => res.json())
    .then((res) => {
      console.log("api cool res: ", res);
    });

  fetch("http://localhost:9000/api/nice/users/2")
    .then((res) => res.json())
    .then((res) => {
      console.log("api nice res: ", res);
    });
};
