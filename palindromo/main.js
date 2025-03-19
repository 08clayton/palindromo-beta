function checkPalindromo() {
    const input = document.getElementById('text-input').value;
    const result = document.getElementById('result');
    if (!input) {
        alert('Please input a value');
        return;
    }

    const cleanedInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');
    
    result.classList.add('visible');
    if (cleanedInput === reversedInput) {
        result.textContent = `${input} is a palindrome.`;
        result.style.color = '#4CAF50'; 
    } else {
        result.textContent = `${input} is not a palindrome.`;
        result.style.color = '#f44336';
    }
}

function clearFields() {
    document.getElementById('text-input').value = '';
    document.getElementById('result').classList.remove('visible');
    document.getElementById('result').textContent = '';
}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      checkPalindromo();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Delete') {
      clearFields();
    }
});
