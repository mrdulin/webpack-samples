import * as actionCreators from "./actions";
import { isWap } from "../../platform.service";

console.log("Home Component outside isWap: ", isWap);

class Home {
  render() {
    console.log("Home component render isWap: ", isWap);
    actionCreators.toggle();
    return "home";
  }
}

export default Home;
