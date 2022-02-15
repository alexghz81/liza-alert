function disableSaveButton(evt) {
  evt.preventDefault();
  evt.target.classList.remove('button_continue');
  evt.target.classList.add('button_disabled');
}

function enableSaveProfileButton(evt) {
  evt.preventDefault();
  saveProfileButton.classList.remove('button_disabled');
  saveProfileButton.classList.add('button_continue');
}

function enableSaveAccountButton(evt) {
  evt.preventDefault();
  saveAccountButton.classList.remove('button_disabled');
  saveAccountButton.classList.add('button_continue');
}

saveProfileButton.addEventListener('click', disableSaveButton);
saveAccountButton.addEventListener('click', disableSaveButton);
profileForm.addEventListener('change', enableSaveProfileButton);
accountForm.addEventListener('change', enableSaveAccountButton);