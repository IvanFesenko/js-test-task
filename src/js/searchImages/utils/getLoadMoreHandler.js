import { getAndRenderImages } from "./getAndRenderImages";

export const getLoadMoreHandler = (state) => (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      state.page += 1;
      getAndRenderImages(state, observer);
    }
  });
};
