const mrdulin = () => window.mrdulin;

console.log('fail-4, window.mrdulin.isWap', mrdulin());

window.addEventListener('DOMContentLoaded', () => {
  console.log('success-2, window.mrdulin.isWap', mrdulin());
});
