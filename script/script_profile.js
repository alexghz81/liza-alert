function changeSaveButtonState(evt) {
  evt.preventDefault();
  evt.target.classList.remove('button_continue');
  evt.target.classList.add('button_disabled');
}

saveProfileButton.addEventListener('click', changeSaveButtonState);
saveAccountButton.addEventListener('click', changeSaveButtonState);