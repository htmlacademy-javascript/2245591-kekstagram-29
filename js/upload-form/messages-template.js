const createTemplate = (text, buttonText, state, buttonState) => {
  const message = document.createElement('section');
  message.classList.add(state);
  message.innerHTML = `<div class="${state}__inner">
      <h2 class="${state}__title">${text}</h2>
      ${buttonState ? `<button type="button" class="${state}__button">${buttonText}</button>` : ''}
    </div>`;
  document.body.appendChild(message);
};

export {createTemplate};
