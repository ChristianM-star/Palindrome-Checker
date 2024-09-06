document.getElementById('check-btn').addEventListener('click', () =>{
    const input = document.getElementById('text-input').value;
const resultElement = document.getElementById('result');


if(input.trim() === ''){
    alert('Please input a value buddy');
};

const normalizedInput = input.replace(/[^a-z0-9]/gi, '').toLowerCase();
const isPalindrome = normalizedInput === normalizedInput.split('').reverse().join('');

const resultMessage = isPalindrome ? `${input} is a palindrome` : `${input} is not a palindrome`;

resultElement.textContent = resultMessage;

});
