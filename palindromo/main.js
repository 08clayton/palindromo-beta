function checkPalindromo() {
  const input = document.getElementById('text-input').value;
  const result = document.getElementById('result');
  const clearBtn = document.getElementById('clear-btn');
  const historyList = document.getElementById('history-list');

  if (!input) {
    alert('Please input a value');
    return;
  }
  clearBtn.style.display = 'inline-block';

  const cleanedInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedInput = cleanedInput.split('').reverse().join('');

  result.classList.add('visible');

  if (cleanedInput === reversedInput) {
    result.textContent = `${input} is a palindrome.`;
    result.style.color = '#4CAF50';
    historyList.innerHTML += `<li class="palindrome">${input} is a palindrome.</li>`;
  } else {
    result.textContent = `${input} is not a palindrome.`;
    result.style.color = '#f44336';
    historyList.innerHTML += `<li class="not-palindrome">${input} is not a palindrome.</li>`;
  }
  if (historyList.children.length > 1000) {
    historyList.removeChild(historyList.lastElementChild);
}
}

function clearFields() {
  document.getElementById('text-input').value = '';
  document.getElementById('result').classList.remove('visible');
  document.getElementById('result').textContent = '';
  document.getElementById('clear-btn').style.display = 'none';
}

document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    checkPalindromo();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Delete') {
    clearFields();
  }
});
