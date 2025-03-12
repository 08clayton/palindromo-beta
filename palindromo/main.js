function checkPalindromo() {
    const input = document.getElementById('text-input').value;
    const result = document.getElementById('result');
    if (!input) {
        alert('Please input a value');
        return;
    }

    const cleanedInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');
    if (cleanedInput === reversedInput) {
        result.textContent = `${input} is a palindrome.`;
    } else {
        result.textContent = `${input} is not a palindrome.`;
    }
}
