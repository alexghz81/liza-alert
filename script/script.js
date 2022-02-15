const resetButton = document.querySelector('.filters__clear-button');
const tagsContainer = document.querySelector('.filters_tags');
const checkboxContainer = document.querySelector('.filters__difficulty-list');

const checkedTags = {};

function clickCheckbox(e) {
  const inputCheckbox = e.target;
  if (inputCheckbox.classList.contains('filters__checkbox')) {
    if (inputCheckbox.checked) {
      addTag(inputCheckbox, tagsContainer);
    } else {
      removeTag(inputCheckbox);
    }
  }
}

function addTag(input, containerTags) {
  const button = createTagButton(input, containerTags);
  containerTags.append(button);
  renderResetButton(containerTags);
}

function createTagButton(inputButton) {
  const labelValue = inputButton.nextElementSibling.textContent;
  const tags = document.createElement('button');
  tags.dataset.labelValue = labelValue;
  tags.textContent = labelValue;
  tags.classList.add('filters__difficult','filters__tag');
  checkedTags[labelValue] = {inputButton, tags};

  function deleteTag(e) {
    e.preventDefault();
    checkedTags[labelValue].inputButton.checked = false;
    delete checkedTags[labelValue];
    tags.remove();
    renderResetButton(tagsContainer);
  }
  tags.addEventListener('click', deleteTag);

  return tags;
}

function removeTag(input) {
  const labelValue = input.nextElementSibling.textContent;
  const tags = checkedTags[labelValue].tags;
  delete checkedTags[labelValue];
  tags?.remove();
  renderResetButton(tags);
}

function renderResetButton(containerTags) {
  containerTags && containerTags.childElementCount>0 ? showReset() : hideReset();
}

function showReset() {
  resetButton.classList.add('filters__clear-button_show');
}

function hideReset() {
  resetButton.classList.remove('filters__clear-button_show');
}

function clickReset() {
  while (tagsContainer.firstChild) 
  { 
    tagsContainer.removeChild(tagsContainer.firstChild); 
  }
  renderResetButton(tagsContainer);
}

checkboxContainer.addEventListener('input', clickCheckbox);
resetButton.addEventListener('click', clickReset);