import * as basicLightbox from "basiclightbox";

import { REFS } from "./constants";
import { getAndRenderImages } from "./utils/getAndRenderImages";
import { getLoadMoreHandler } from "./utils/getLoadMoreHandler";
import { getModalMarkup } from "./utils/markup";

const state = {
  page: 1,
  query: "",
};

const observer = new IntersectionObserver(getLoadMoreHandler(state), {
  rootMargin: "0px",
  threshold: 0.4,
});

const clearGallery = () => {
  REFS.GALLERY.innerHTML = "";
};

const onSearch = (e) => {
  e.preventDefault();
  clearGallery();
  state.page = 1;
  state.query = REFS.QUERY.value;
  getAndRenderImages(state, observer);
};

const onImageClick = (e) => {
  e.preventDefault();
  const { target } = e;
  if (target.nodeName !== "IMG") {
    return;
  }
  basicLightbox.create(getModalMarkup(target.dataset.source)).show();
};

REFS.SEARCH_BTN.addEventListener("click", onSearch);
REFS.GALLERY.addEventListener("click", onImageClick);
