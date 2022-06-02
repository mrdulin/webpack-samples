import "./main.css";

const h1 = document.createElement("h1");
h1.innerText = "Heading4";
document.body.append(h1);

if (module.hot) {
  module.hot.dispose(() => {
    document.body.innerHTML = "";
  });
  module.hot.accept();
}
