import './styles.css';

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomBackgroundColor = element => {
  element.style.backgroundColor = `${colors[randomIntegerFromInterval(0, 5)]}`;
};

startBtnRef.addEventListener('click', function startProcess() {
  startBtnRef.removeEventListener('click', startProcess);
  startBtnRef.disabled = true;
  const intervalColor = setInterval(() => {
    randomBackgroundColor(document.body);
  }, 1000);

  stopBtnRef.addEventListener('click', function stopProcess() {
    clearInterval(intervalColor);
    startBtnRef.disabled = false;
    startBtnRef.addEventListener('click', startProcess);
    stopBtnRef.removeEventListener('click', stopProcess);
  });
});
