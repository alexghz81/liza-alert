const inputEl = document.querySelector('#pass');

const dummyEl = document.querySelector('.account__password');

// const resultEl = document.querySelector('#result');

inputEl.addEventListener('keyup', () => {
    const dummyText = Array(inputEl.value.length).fill('*').join('');
    dummyEl.textContent = dummyText;
    // resultEl.innerHTML = inputEl.value;
})