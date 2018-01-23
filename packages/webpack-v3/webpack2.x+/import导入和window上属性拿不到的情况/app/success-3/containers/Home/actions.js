import { isWap } from "../../platform.service";

console.log("Home action outside isWap: ", isWap);

function toggle() {
  console.log("Home action inside isWap: ", isWap);
  return {
    type: "TOGGLE",
    payload: {}
  };
}

export { toggle };
