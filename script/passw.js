const inputEl = document.querySelector('#pass');
const dummyEl = document.querySelector('.account__password');

inputEl.addEventListener('keyup', () => {
    const dummyText = Array(inputEl.value.length).fill('*').join('');
    dummyEl.textContent = dummyText;
})