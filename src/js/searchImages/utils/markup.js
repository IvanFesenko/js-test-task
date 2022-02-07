export const imageMarkup = ({ largeImageURL, webformatURL, tags }) => {
  return `
  <li>
  <a href="${largeImageURL}">
    <img
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
    />
  </a>
</li>
  `;
};

export const getGalleryMarkup = (data) => data.map((item) => imageMarkup(item)).join(" ");

export const getModalMarkup = (src) => `
  	<img width="1400" height="900" src=${src}>
  `;
