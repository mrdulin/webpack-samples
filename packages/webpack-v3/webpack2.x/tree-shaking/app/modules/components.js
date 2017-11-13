export const componentA = () => {
    const element = document.createElement('div');
    element.innerText = 'tree shaking test';
    return element;
};

export const componentB = () => {
    const element = document.createElement('div');
    element.innerText = 'webpack2.x';
    return element;
};
