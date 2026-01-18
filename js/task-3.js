const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
    const nameValue = inputEl.value.trim();
    
    outputEl.textContent = nameValue === '' ? 'Anonymous'
        : nameValue;
});