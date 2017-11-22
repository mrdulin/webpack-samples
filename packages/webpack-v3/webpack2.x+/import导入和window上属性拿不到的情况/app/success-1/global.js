const namespace = 'mrdulin';
window[namespace] = window[namespace] || {};
const coin = () => Math.random() < 0.5;
window[namespace].isWap = coin();
