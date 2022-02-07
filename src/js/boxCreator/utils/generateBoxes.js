// import { createBox } from "./createBox";
import { BASIC_SIZE, REFS } from "../constants";
import { randomColorGenerator } from "./randomColorGenerator";
import { renderMarkup } from "../../utils/renderMarkup";

const boxMarkup = ({ size, color }) => {
  return `
    <div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>
  `;
};

const markupHandler = (data) => data.map((item) => boxMarkup(item)).join(" ");

export const generateBoxes = (amount) => {
  const boxes = new Array(amount).fill(null).map((_, i) => ({
    size: BASIC_SIZE + i * 10,
    color: randomColorGenerator(),
  }));
  renderMarkup(REFS.BOXES, markupHandler, boxes);
};
