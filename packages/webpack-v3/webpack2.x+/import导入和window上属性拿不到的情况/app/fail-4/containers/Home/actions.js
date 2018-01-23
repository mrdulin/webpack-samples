console.log("actions outside isWap: ", window.isWap);

function toggle() {
  console.log("actions inside isWap: ", window.isWap);
  return {
    type: "TOGGLE",
    payload: {}
  };
}

export { toggle };
