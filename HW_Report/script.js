let count = 0;
const countDisplay = document.getElementById('count');

function increaseCount() {
  count++;
  countDisplay.textContent = count;
}