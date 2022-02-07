export const renderMarkup = (container, markupHandler, data) => {
  container.insertAdjacentHTML("beforeend", markupHandler(data));
};
