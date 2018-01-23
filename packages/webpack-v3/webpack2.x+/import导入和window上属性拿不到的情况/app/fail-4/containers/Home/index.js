import * as actionCreators from "./actions";

console.log("Home component isWap: ", window.isWap);

class Home {
  render() {
    console.log("Home component render isWap: ", window.isWap);
    actionCreators.toggle();
    return "home";
  }
}

export default Home;
