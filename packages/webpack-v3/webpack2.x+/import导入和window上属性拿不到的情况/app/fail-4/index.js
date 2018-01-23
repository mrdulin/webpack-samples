const coin = () => Math.random() < 0.5;
window.isWap = coin();

import Home from "./containers/Home";

new Home().render();
