import { REFS } from "../constants";
import { getRequestUrl } from "./getRequestUrl";
import { getGalleryMarkup } from "./markup";
import { renderMarkup } from "../../utils/renderMarkup";

export const getAndRenderImages = async (state, observer) => {
  try {
    const response = await fetch(getRequestUrl(state));
    const { hits } = await response.json();
    renderMarkup(REFS.GALLERY, getGalleryMarkup, hits);
    observer.observe(REFS.GALLERY.lastElementChild);
  } catch (e) {
    alert("Something where wrong(((");
  }
};
