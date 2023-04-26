import workflow from './images/workflow.jpg';

function component() {
  const element = document.createElement('div');
  const image = new Image();
  image.src = workflow;
  element.appendChild(image);
  return element;
}

document.body.appendChild(component());
